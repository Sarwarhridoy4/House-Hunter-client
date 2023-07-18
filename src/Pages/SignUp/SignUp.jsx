import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    try {

       fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      toast.success('SignUp Success! Log in Now!')
      navigate("/login");
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-sm mx-auto mt-8 p-6 border rounded-lg'
    >
      <div className='mb-4'>
        <label
          htmlFor='fullName'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Full Name
        </label>
        <input
          type='text'
          id='fullName'
          {...register("fullName", { required: "Full Name is required" })}
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        {errors.fullName && (
          <p className='text-red-500 text-xs italic'>
            {errors.fullName.message}
          </p>
        )}
      </div>
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
      <div className='mb-4'>
        <label
          htmlFor='phoneNumber'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Phone Number
        </label>
        <input
          type='text'
          id='phoneNumber'
          {...register("phoneNumber", {
            required: "Phone Number is required",
            pattern: {
              value: /^(?:\+?88)?01[3-9]\d{8}$/,
              message: "Must be a Bangladeshi Phone Number",
            },
          })}
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        {errors.phoneNumber && (
          <p className='text-red-500 text-xs italic'>
            {errors.phoneNumber.message}
          </p>
        )}
      </div>
      <div className='mb-4'>
        <label
          htmlFor='role'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Role
        </label>
        <select
          id='role'
          {...register("role", { required: "Role is required" })}
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        >
          <option value=''>Select Role</option>
          <option value='House Owner'>House Owner</option>
          <option value='House Renter'>House Renter</option>
        </select>
        {errors.role && (
          <p className='text-red-500 text-xs italic'>{errors.role.message}</p>
        )}
      </div>
      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpPage;
