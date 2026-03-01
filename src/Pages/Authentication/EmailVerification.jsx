import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { FaApple } from 'react-icons/fa';

const EmailVerification = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const navigate = useNavigate();



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
              <h1 className="text-3xl font-semibold luxury  text-[#333333]/70" >
                Forgot Your Password
              </h1>
              <p className="text-sm text-gray-500">


                Enter your email to reset your password
              </p>

              <div className="flex justify-center items-center mt-10">
                <svg width="158" height="163" viewBox="0 0 158 163" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M111.806 160.399H106.562V119.05L111.806 117.738V160.399ZM54.8262 124.795C48.7859 127.701 42.8812 130.152 36.4014 131.766C27.4312 134 17.2566 134.657 4.08887 132.521C3.571 132.33 3.16429 132.141 2.8584 131.975C2.89243 131.923 2.92876 131.869 2.96777 131.813C3.43827 131.144 4.21965 130.266 5.39062 129.354C7.35532 127.824 10.1575 126.269 13.4678 124.957V126.647L16.3936 126.143L37.0684 122.572L54.8262 124.795ZM139.802 39.624C141.388 39.7018 142.649 40.1036 143.752 40.7793C144.804 41.424 145.814 42.3825 146.842 43.7568L147.283 44.3721C149.68 47.8374 151.596 53.2533 152.889 59.7256C155.157 71.0785 155.452 84.6874 155.491 95.3076L79.2129 114.399C79.1387 104.07 78.7337 91.0641 76.4072 79.418C74.9686 72.2187 72.7879 65.3261 69.0371 59.9033C68.5211 59.1568 67.9672 58.4379 67.377 57.752L84.4893 53.4688V95.8604L87.5967 95.082L91.416 94.126L91.415 94.125L104.669 90.8086L106.562 90.335V47.9434L139.802 39.624ZM66.7549 89.8447C67.387 95.144 67.721 100.656 67.8984 105.934L24.6133 113.405V96.5068L46.084 103.825L47.3262 104.249L48.3799 103.468L66.7549 89.8447ZM45.3877 91.8047L40.4385 90.1182L50.335 88.1367L45.3877 91.8047ZM51.8193 61.4746H51.8867C53.6759 61.4843 55.059 61.8802 56.249 62.5918C57.483 63.3297 58.6574 64.495 59.8701 66.249C60.0028 66.4424 60.1323 66.6379 60.2578 66.8359L60.2598 66.8398C60.397 67.0557 60.53 67.2743 60.6592 67.4951L60.6621 67.499C60.7103 67.581 60.7405 67.6316 60.7744 67.6904V67.6914L61.1445 68.3574C61.1488 68.3657 61.1554 68.3778 61.168 68.4023L61.2324 68.5273C61.3205 68.6958 61.4075 68.8649 61.4922 69.0352V69.0361C61.5434 69.1391 61.5943 69.2429 61.6445 69.3477V69.3486L61.7773 69.6289V69.6299C61.8624 69.8104 61.9455 69.9918 62.0273 70.1738L62.2686 70.7217C62.2852 70.7608 62.3 70.7936 62.3066 70.8086L62.3135 70.8252C62.4896 71.2435 62.6589 71.6646 62.8203 72.0889V72.0898L62.8711 72.2266L62.877 72.2402C63.0434 72.6789 63.2022 73.1207 63.3545 73.5645L63.3574 73.5732L63.3594 73.5781L63.3643 73.5918L63.3711 73.6133C63.4281 73.7811 63.4828 73.9498 63.5381 74.1182L38.0898 79.2139C38.1063 79.1381 38.122 79.0621 38.1387 78.9863C39.4121 73.2497 41.2782 68.5978 43.5762 65.6582C44.7366 64.1736 45.8887 63.1578 47.1455 62.5C48.3897 61.8488 49.8771 61.4746 51.8193 61.4746ZM117.269 17.6123L97.1689 23.9014L95.6357 24.3809V10.6885L117.269 3.46875V17.6123Z" stroke="#B6DDE1" stroke-width="5" />
                </svg>

              </div>
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






              {/* Register Button */}
              <button
                type="submit"
                onClick={() => navigate('/email_otp_verify')}
                className="w-full h-12 rounded-[12px] text-white font-semibold bg-[#1A9C9C] text-base transition-opacity hover:opacity-80 cursor-pointer"

              >
             Send Otp
              </button>



         

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
