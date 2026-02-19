import { CgProfile } from 'react-icons/cg';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaRegHeart } from 'react-icons/fa';
import { FaLocationDot, FaPersonRifle, FaX, FaXTwitter } from 'react-icons/fa6';
import { FiFacebook, FiUsers } from 'react-icons/fi';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoChevronForwardOutline, IoReorderThreeSharp } from 'react-icons/io5';
import { MdPhone } from 'react-icons/md';
import { SlSocialLinkedin } from 'react-icons/sl';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const activeClass = 'text-blue-600 border-b-2 border-blue-600';

  return (
    <nav className=" sticky top-0 z-50 ">
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed top-30 left-0 lg:w-[600px] w-full rounded-b  bg-white z-40 transform transition-transform duration-300 ${
        sidebarOpen ? 'md:translate-x-10 translate-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-end ">
            <button 
              onClick={() => setSidebarOpen(false)}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              <FaX size={14} />
            </button>
          </div>

          {/* Profile Section */}
           <p className='text-2xl lusitana'>Jone’s <span className='text-[#F68528]'>Sheks</span> </p>
          <div className="flex items-center gap-4 mt-8 mb-2">
            <CgProfile className="size-24 text-gray-500" />
            <div>
              <h3 className="sulitana font-medium text-2xl text-gray-900">Christopher Miller</h3>
            </div>
          </div>

          {/* Menu Items */}
          <div className="space-y-1 ">
            {[
              { label: 'Home', path: '/' },
              { label: 'About Us', path: '/about' },
              { label: 'Menu', path: '/menu' },
              { label: 'Bucket List', path: '/bucket-list' },
              { label: 'Gift Card', path: '/gift-card' },
              { label: 'My QR Code', path: '/qr-code' },
              { label: 'Order History', path: '/order-history' },
              { label: 'My Rating', path: '/my-rating' },
              { label: 'Settings', path: '/settings' }
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  navigate(item.path);
                  setSidebarOpen(false);
                }}
                className="w-full flex justify-between items-center px-1 py-3 text-[#62748E] border-b cursor-pointer border-gray-300 hover:bg-gray-100 transition  text-left"
              >
                <span>{item.label}</span>
                <span className="text-gray-400"><IoChevronForwardOutline /></span>
              </button>
            ))}
          </div>

          {/* Log Out Button */}
          <button 
            onClick={() => {
              // Add logout logic here
              setSidebarOpen(false);
            }}
            className="w-full mt-8 px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg transition flex items-center gap-2"
          >
            <span><AiOutlineLogout /></span>
            Log Out
          </button>
        </div>
      </div>
      <div className='bg-[#221E1F]'>
        <div className='container mx-auto flex justify-between items-center py-3 px-6 md:px-0'>
          <div className='flex gap-4'>
            <div className='flex items-center gap-2'>
              <FaLocationDot className='size-5 text-[#D9D9D9]' />
              <p className='text-[#D9D9D9]'>Pensacola FL</p>
            </div>
            <div className='flex items-center gap-2'>
              <MdPhone className='size-5 text-[#D9D9D9]' />
              <p className='text-[#D9D9D9]'>850-470-1999</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <FiFacebook className='size-6 text-[#D9D9D9]' />
            <FaXTwitter className='size-6 text-[#D9D9D9]' />
            <SlSocialLinkedin className='size-6 text-[#D9D9D9]' />
            <FaInstagram className='size-6 text-[#D9D9D9]' />
            <div className='border-l-2 border-[#D9D9D9]'>
              <CgProfile className='size-6 text-[#F68528]  ml-2 ' />
            </div>
          </div>
        </div>


      </div>
      <div className='bg-[#FFFFFF]'>
        <div className="container mx-auto flex justify-between items-center  py-3 px-6 md:px-0">
          <div className="flex items-center space-x-4 ">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hover:text-gray-600 transition"
            >
              <IoReorderThreeSharp className='size-10' />
            </button>
          </div>
          <p className='text-2xl lusitana'>Jone’s <span className='text-[#F68528]'>Sheks</span> </p>

          <div className="flex items-center space-x-6 ">
            <Link
              to="/"
              className='relative bg-[#EAEAEA] p-[14px] rounded-xl'
            >
              <span className='w-[14px] h-[14px] bg-[#E4002A] text-[#ffff] absolute text-[10px] rounded-full flex items-center justify-center right-3 top-2'>1</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className='' xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.19056 1C6.47056 0.41 7.07356 0 7.77256 0H11.7726C12.4706 0 13.0736 0.41 13.3546 1C14.0376 1.006 14.5706 1.037 15.0466 1.223C15.6148 1.44527 16.109 1.82301 16.4726 2.313C16.8396 2.806 17.0116 3.44 17.2486 4.311L17.2856 4.447L17.8756 6.614C18.2689 6.81248 18.6138 7.09518 18.8856 7.442C19.5076 8.239 19.6176 9.188 19.5076 10.276C19.3996 11.332 19.0676 12.662 18.6516 14.327L18.6246 14.432C18.3616 15.485 18.1476 16.34 17.8946 17.007C17.6286 17.703 17.2926 18.273 16.7376 18.706C16.1836 19.139 15.5486 19.326 14.8096 19.416C14.1006 19.5 13.2196 19.5 12.1346 19.5H7.41056C6.32556 19.5 5.44356 19.5 4.73556 19.415C3.99556 19.327 3.36156 19.139 2.80656 18.705C2.25256 18.273 1.91656 17.703 1.65056 17.007C1.39656 16.34 1.18356 15.485 0.920559 14.432L0.893559 14.327C0.477559 12.662 0.14456 11.332 0.0375595 10.277C-0.0724405 9.187 0.0375593 8.239 0.658559 7.442C0.941559 7.08 1.28056 6.812 1.66856 6.614L2.25856 4.447L2.29656 4.311C2.53356 3.44 2.70556 2.806 3.07256 2.312C3.43629 1.82238 3.93046 1.445 4.49856 1.223C4.97456 1.037 5.50656 1.005 6.19056 1ZM6.19156 2.503C5.52956 2.51 5.26456 2.535 5.04456 2.621C4.73853 2.74068 4.47237 2.94411 4.27656 3.208C4.10056 3.445 3.99656 3.776 3.70656 4.843L3.35256 6.139C4.39056 6 5.73056 6 7.39456 6H12.1496C13.8146 6 15.1546 6 16.1916 6.139L15.8386 4.842C15.5476 3.775 15.4446 3.444 15.2686 3.207C15.0727 2.94311 14.8066 2.73968 14.5006 2.62C14.2806 2.534 14.0146 2.509 13.3526 2.502C13.2104 2.80066 12.9866 3.05293 12.7069 3.22956C12.4273 3.4062 12.1033 3.49996 11.7726 3.5H7.77256C7.4418 3.49996 7.11783 3.4062 6.83819 3.22956C6.55855 3.05293 6.33469 2.80066 6.19256 2.502M7.77256 1.5C7.70626 1.5 7.64267 1.52634 7.59578 1.57322C7.5489 1.62011 7.52256 1.6837 7.52256 1.75C7.52256 1.8163 7.5489 1.87989 7.59578 1.92678C7.64267 1.97366 7.70626 2 7.77256 2H11.7726C11.8389 2 11.9025 1.97366 11.9493 1.92678C11.9962 1.87989 12.0226 1.8163 12.0226 1.75C12.0226 1.6837 11.9962 1.62011 11.9493 1.57322C11.9025 1.52634 11.8389 1.5 11.7726 1.5H7.77256ZM3.47256 7.636C2.56256 7.768 2.12156 8.008 1.84256 8.366C1.56256 8.723 1.43756 9.208 1.53056 10.124C1.62556 11.06 1.93056 12.284 2.36456 14.024C2.64256 15.132 2.83456 15.9 3.05456 16.474C3.26456 17.028 3.47156 17.321 3.73156 17.524C3.99056 17.726 4.32456 17.855 4.91456 17.926C5.52456 17.999 6.31456 18 7.45856 18H12.0886C13.2316 18 14.0236 17.999 14.6326 17.926C15.2226 17.856 15.5566 17.726 15.8156 17.524C16.0756 17.321 16.2816 17.028 16.4936 16.474C16.7116 15.9 16.9046 15.132 17.1816 14.024C17.6166 12.284 17.9216 11.06 18.0156 10.124C18.1096 9.208 17.9836 8.722 17.7046 8.365C17.4256 8.008 16.9846 7.768 16.0736 7.636C15.1436 7.502 13.8816 7.5 12.0886 7.5H7.45856C5.66556 7.5 4.40356 7.502 3.47356 7.636" fill="#221E1F" />
              </svg>

            </Link>
            <button
              className='relative bg-[#EAEAEA] p-3 rounded-xl'
            >
              <span className='w-[14px] h-[14px] bg-[#E4002A] text-[#ffff] absolute text-[10px] top-2 rounded-full'>1</span>
              <IoIosHeartEmpty className='size-6' />

            </button>
            <div className="">
              <button className=" buton flex items-center gap-2">
                Start Group Order<FiUsers />
              </button>
            </div>


          </div>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
