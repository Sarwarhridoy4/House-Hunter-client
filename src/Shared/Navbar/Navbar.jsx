import { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Logout from "../../utils/LogOut";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = localStorage.getItem("user") && localStorage.getItem("token");
  return (
    <nav className='sticky-top font-semibold flex items-center justify-between bg-[#11c900] flex-wrap p-6'>
      <Link to='/'>
        <div className='flex items-center flex-shrink-0 text-white mr-6 lg:mr-72'>
          <img src={logo} className='w-100 h-10 mr-2' alt='Logo' />
        </div>
      </Link>
      <div className='block lg:hidden'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400'
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className='text-sm lg:flex-grow'>
          <Link
            to='/'
            className='block mt-4 lg:inline-block lg:mt-0 text-white mr-4'
          >
            Home
          </Link>
          {user?.role === "House Owner" ? (
            <Link
              to='/dashboard/house-owner'
              className='block mt-4 lg:inline-block lg:mt-0 text-white mr-4'
            >
              Owner Dashboard
            </Link>
          ) : (
            <Link
              to='/dashboard/house-renter'
              className='block mt-4 lg:inline-block lg:mt-0 text-white mr-4'
            >
              Renter Dashboard
            </Link>
          )}
        </div>
        <div className='flex flex-col md:flex-row gap-4'>
          {(user && (
            <button
              onClick={() => Logout()}
              className='inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white'
            >
              LOGOUT
            </button>
          )) || (
            <Link to='/login'>
              <button className='inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white'>
                LOGIN
              </button>
            </Link>
          )}
          <Link to='/signup'>
            <button
              className={`inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white`}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
