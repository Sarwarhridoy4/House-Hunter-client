import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const responseData = await response.json();
      const { token, user } = responseData;

      // Store the token in localStorage or sessionStorage for persistent login
      localStorage.setItem("token", token);
      localStorage.setItem("user",(JSON.stringify(user)));

      toast.success("Logged In!");
      if (user?.role === "House Owner") {
        navigate("/dashboard/house-owner")
      }
      else if(user?.role === "House Renter") {
        navigate("/dashboard/house-renter")
      }
    } catch (error) {
      setError("email", {
        type: "manual",
        message: error.message,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-sm mx-auto mt-8 p-6 border rounded-lg'
    >
      <div className='mb-4'>
        <label
          htmlFor='email'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Email
        </label>
        <input
          type='text'
          id='email'
          {...register("email", { required: "Email is required" })}
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        {errors.email && (
          <p className='text-red-500 text-xs italic'>{errors.email.message}</p>
        )}
      </div>
      <div className='mb-4'>
        <label
          htmlFor='password'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Password
        </label>
        <input
          type='password'
          id='password'
          {...register("password", { required: "Password is required" })}
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        {errors.password && (
          <p className='text-red-500 text-xs italic'>
            {errors.password.message}
          </p>
        )}
      </div>
      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Login
      </button>
    </form>
  );
};

export default Login;
