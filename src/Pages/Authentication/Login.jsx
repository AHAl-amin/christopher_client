import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaApple } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
      {/* Left image panel */}
      <div className="w-full md:w-1/2 md:h-screen h-[80vh] py-10 relative overflow-y-auto px-4 xl:px-0">
        <img
          src="https://res.cloudinary.com/dcpbtzues/image/upload/v1771926718/Frame_2147226548_u4pxzt.png"
          alt="Background"
          className="inset-0 w-full h-full object-cover rounded-2xl"
        />
        <p className="absolute top-16 left-20 text-2xl lusitana text-[#F68528]">Sheks</p>
      </div>

      {/* Right form panel */}
      <div className="w-full md:w-1/2 min-h-[100vh] md:h-screen relative ">
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] md:h-screen px-8 py-10 max-w-lg mx-auto overflow-y-auto">
          <div className="w-full  space-y-5">

            {/* Header */}
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-semibold luxury  text-[#333333]" >
                Welcome Back!
              </h1>
              <p className="text-sm text-gray-500">
              

                Log in to access your orders, track rewards, and <br /> enjoy faster checkouts.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6 pt-6">

          

              {/* Email Address */}
              <div className="relative">
                <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500 z-10">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md h-12 px-3 text-sm text-gray-800 focus:outline-none focus:border-teal-500 bg-white"
                />
              </div>

            

              {/* Password */}
              <div className="relative">
                <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500 z-10">
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full border border-gray-300 rounded-md h-12 px-3 pr-10 text-sm text-gray-800 focus:outline-none focus:border-teal-500 bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              <p className='text-lg flex justify-end mt-2'><Link to="/verify" className='text-[#E4002A] hover:underline'>Forgot password </Link></p>
              </div>


         

              {/* Register Button */}
              <button
                type="submit"
                className="w-full h-12 rounded-[12px] text-white font-semibold bg-[#1A9C9C] text-base transition-opacity hover:opacity-80 cursor-pointer"
                
              >
                Log In
              </button>

           

              {/* Or Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gradient-to-r from-[#FFFFFF] to-[#1A9C9C]" />
                <span className="text-sm text-gray-400">Or</span>
                <div className="flex-1 h-px bg-gradient-to-r from-[#1A9C9C] to-[#FFFFFF]" />
              </div>

              {/* Social Login */}
              <div className="flex items-center justify-center gap-4">
                {/* Facebook */}
                <button
                  type="button"
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow bg-white cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                    <path fill="#1877F2" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                  </svg>
                </button>

                {/* Google */}
                <button
                  type="button"
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow bg-white cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                    <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.84l6.1-6.1C34.46 3.04 29.52 1 24 1 14.82 1 7.07 6.48 3.64 14.26l7.1 5.52C12.4 13.67 17.73 9.5 24 9.5z" />
                    <path fill="#4285F4" d="M46.5 24.5c0-1.64-.15-3.22-.43-4.75H24v9h12.7c-.55 2.96-2.2 5.46-4.68 7.14l7.2 5.6C43.18 37.6 46.5 31.5 46.5 24.5z" />
                    <path fill="#FBBC05" d="M10.74 28.22A14.56 14.56 0 0 1 9.5 24c0-1.47.26-2.9.74-4.22l-7.1-5.52A23.94 23.94 0 0 0 0 24c0 3.88.93 7.54 2.64 10.74l8.1-6.52z" />
                    <path fill="#34A853" d="M24 47c5.52 0 10.16-1.83 13.55-4.96l-7.2-5.6c-1.83 1.22-4.16 1.96-6.35 1.96-6.27 0-11.6-4.17-13.26-9.78l-8.1 6.52C7.07 41.52 14.82 47 24 47z" />
                  </svg>
                </button>

                {/* Apple */}
                <button
                  type="button"
                  className=" rounded-full border p-2 cursor-pointer border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow bg-white"
                >
                <FaApple size={30} />
                </button>
              </div>

              {/* Already have an account */}
              <p className="text-center text-sm text-gray-700">
               Don’t have an account?{' '}
                <Link to="/sign_up" className="text-teal-600 font-semibold hover:underline">
                  Register
                </Link>
              </p>

              {/* Continue as guest */}
              <p className="text-center text-sm">
                <Link
                  to="/guest_login"
                  className="text-[#E07A22] font-medium hover:underline inline-flex items-center gap-1"
                >
                  Continue as a guest <span>→</span>
                </Link>
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
