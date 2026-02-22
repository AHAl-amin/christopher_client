import React, { useState } from 'react';
import { FiEdit, FiEdit2 } from 'react-icons/fi';
import ProfileEditModal from './ProfileEditModal';
import { FaRegEdit } from 'react-icons/fa';

const Settings = () => {
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    return (
        <div>
            <div className="relative py-10 overflow-hidden bg-[#F8FBFC]">
                {/* Background Gradient Layer */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#1A9C9C_0%,_rgba(36,156,156,0.3)_70%,_transparent_100%)] opacity-10"></div>

                <img src="https://res.cloudinary.com/dcpbtzues/image/upload/v1771666721/tasty-caramel-brownie-isolated-transparent-background_2_btzon6.png" alt="imge" className="absolute right-0 bottom-0 z-10" />

                <div className="max-w-7xl mx-auto flex items-center h-full relative z-20 py-22">
                    {/* Text Content */}
                    <div className=''>
                        <div className="space-y-6  px-6 lg:px-0 max-w-md">
                            <h1 className="lusitana text-4xl lg:text-6xl xl:text-7xl font-medium  text-[#221E1F] leading-tight">
                                Update Profile
                            </h1>



                        </div>
                    </div>

                    {/* Image Space */}
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-0 py-16 flex justify-center">
                <div className="w-full max-w-5xl">

                    {/* Profile Header */}
                    <div className="flex items-center gap-6 mb-16">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120"
                                alt="Profile"
                                className="w-[100px] h-[100px] rounded-full object-cover shadow-sm bg-gray-100"
                            />
                            <button
                                onClick={() => setIsProfileModalOpen(true)}
                                className="absolute bottom-0 right-0 bg-[#E48B4B] p-2 rounded-full text-white border-[3px] border-white hover:bg-orange-500 transition-colors shadow-sm cursor-pointer"
                            >
                               <FaRegEdit size={16} strokeWidth={2.5} />
                            </button>
                        </div>
                        <h2 className="text-[2rem] text-[#221E1F] font-medium lusitana">Christopher Miller</h2>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="flex flex-col gap-2.5">
                            <label className="text-[#334155] font-bold text-[15px]">Name</label>
                            <input
                                type="text"
                                defaultValue="Christopher Miler"
                                className="border border-[#E9EEF2] rounded-md px-4 py-3 text-[14px] text-[#62748E] focus:outline-none focus:border-[#1A9C9C]"
                            />
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <label className="text-[#334155] font-bold text-[15px]">Email</label>
                            <input
                                type="email"
                                defaultValue="christophermiler@gmail.com"
                                className="border border-[#E9EEF2] rounded-md px-4 py-3 text-[14px] text-[#62748E] focus:outline-none focus:border-[#1A9C9C]"
                            />
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <label className="text-[#334155] font-bold text-[15px]">Phone Number</label>
                            <input
                                type="text"
                                defaultValue="123-564-856"
                                className="border border-[#E9EEF2] rounded-md px-4 py-3 text-[14px] text-[#62748E] focus:outline-none focus:border-[#1A9C9C]"
                            />
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-center mt-12">
                        <button className="bg-[#1A9C9C] text-white px-12 py-3.5 rounded-md font-medium text-[15px] hover:bg-teal-700 transition-colors w-full md:w-[450px] cursor-pointer shadow-sm">
                            Save Change
                        </button>
                    </div>

                </div>
            </div>

            {/* Profile Picture Edit Modal */}
            <ProfileEditModal
                isOpen={isProfileModalOpen}
                onClose={() => setIsProfileModalOpen(false)}
            />
        </div>
    );
};

export default Settings