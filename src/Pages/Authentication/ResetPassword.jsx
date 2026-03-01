import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { FaApple } from 'react-icons/fa';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const navigate = useNavigate()

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
      {/* Left image panel */}
      <div className="w-full md:w-1/2 md:h-screen h-[80vh] py-10 relative px-4 xl:px-0">
        <img
          src="https://res.cloudinary.com/dcpbtzues/image/upload/v1771926718/Frame_2147226548_u4pxzt.png"
          alt="Background"
          className="inset-0 w-full h-full object-cover rounded-2xl"
        />
        <p className="absolute top-16 left-20 text-2xl lusitana text-[#F68528]">Sheks</p>
      </div>

      {/* Right form panel */}
      <div className="w-full md:w-1/2 min-h-[100vh] md:h-screen relative  ">
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] md:h-screen px-8 py-10 max-w-lg mx-auto overflow-y-auto">
          <div className="w-full  space-y-5">

            {/* Header */}
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-semibold luxury  text-[#333333]" >
                Set New Password
              </h1>
              <p className="text-sm text-gray-500">
                Welcome back! Please create a strong new password to <br /> secure your account.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6 pt-6">

             

              {/* Password */}
              <div className="relative">
                <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500 z-10">
                  New Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full border border-gray-300 rounded-md h-12 px-3 pr-10 text-sm text-gray-800 focus:outline-none focus:border-teal-500 bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500 z-10">
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="w-full border border-gray-300 rounded-md h-12 px-3 pr-10 text-sm text-gray-800 focus:outline-none focus:border-teal-500 bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>

             
              <button
                type="submit"
                onClick={() => navigate("/login")}
                className="w-full h-12 rounded-[12px] text-white font-semibold bg-[#1A9C9C] text-base transition-opacity hover:opacity-80 cursor-pointer"
                
              >
                Confirm
              </button>

              {/* Terms Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-4 h-4 accent-teal-500 cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                  Remember me
                </label>
              </div>


            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
