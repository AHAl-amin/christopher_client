import React, { useState } from "react";
import { FiMail, FiTruck } from "react-icons/fi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const ChooseDeliveryMethod = () => {
    // Default selected method based on the first image (Email Delivery selected)
    const [selectedMethod, setSelectedMethod] = useState('email');
    const navigate = useNavigate();

    return (
        <div>
            {/* Banner Section */}
            <div className="relative py-10 overflow-hidden bg-[#F8FBFC]">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#1A9C9C_0%,_rgba(36,156,156,0.3)_70%,_transparent_100%)] opacity-10"></div>
                <img src="https://res.cloudinary.com/dcpbtzues/image/upload/v1771734593/three-glasses-milkshake-with-assorted-flavors-chocolate-vanilla-strawberry-milkshake_1_oznzgf.png" alt="imge" className="absolute right-0 bottom-0 z-10" />
                <div className="max-w-7xl mx-auto flex items-center h-full relative z-20 py-10 ">
                    <div className=''>
                        <div className="space-y-6 px-6 lg:px-0 max-w-xl">
                            <h1 className="lusitana text-4xl lg:text-6xl xl:text-7xl font-medium text-[#221E1F] leading-tight">
                                Choose Your Delivery Method
                            </h1>
                            <p className="text-lg text-[#62748E] leading-relaxed max-w-lg">
                                Select how you'd like to receive your order and complete your purchase
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Selection Options and Form Section */}
            <div className="max-w-4xl  mx-auto my-10  flex flex-col items-center bg-[#F8FAFC] p-5 rounded-xl ">
                <div className="w-full space-y-4 mb-8 ">

                    {/* Option 1: Email Delivery */}
                    <div
                        onClick={() => setSelectedMethod('email')}
                        className={`border rounded-md p-6 flex items-center gap-5 cursor-pointer transition-colors ${selectedMethod === 'email' ? 'border-[#E9EEF2] shadow-sm bg-white' : 'border-[#E9EEF2] bg-white'}`}
                    >
                        {/* Custom Radio Button */}
                        <div className="flex items-center justify-center">
                            <div className={`w-4 h-4 rounded-full border-[1.5px] flex items-center justify-center ${selectedMethod === 'email' ? 'border-[#1A9C9C]' : 'border-[#CAD5E2]'}`}>
                                {selectedMethod === 'email' && <div className="w-2 h-2 rounded-full bg-[#1A9C9C]"></div>}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <FiMail className="text-[#1A9C9C] text-[28px]" strokeWidth={1.5} />
                            <div>
                                <h3 className="lusitana text-[#221E1F]  text-[20px] leading-none mb-1.5">Email Delivery</h3>
                                <p className="text-[#899AB1] text-[13px]">Digital gift card delivered instantly to your inbox</p>
                            </div>
                        </div>
                    </div>

                    {/* Option 2: Ship to Address */}
                    <div
                        onClick={() => setSelectedMethod('shipping')}
                        className={`border rounded-md p-6 flex items-center gap-5 cursor-pointer transition-colors ${selectedMethod === 'shipping' ? 'border-[#E9EEF2] shadow-sm bg-white' : 'border-[#E9EEF2] bg-white'}`}
                    >
                        {/* Custom Radio Button */}
                        <div className="flex items-center justify-center">
                            <div className={`w-4 h-4 rounded-full border-[1.5px] flex items-center justify-center ${selectedMethod === 'shipping' ? 'border-[#1A9C9C]' : 'border-[#CAD5E2]'}`}>
                                {selectedMethod === 'shipping' && <div className="w-2 h-2 rounded-full bg-[#1A9C9C]"></div>}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <FiTruck className="text-[#1A9C9C] text-[28px]" strokeWidth={1.5} />
                            <div>
                                <h3 className="lusitana text-[#221E1F] text-[20px] font-medium leading-none mb-1.5">Ship to Address</h3>
                                <p className="text-[#899AB1] text-[13px]">Physical gift card or merchandise shipped to your address</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Form Rendering Section */}
                <div className="w-full border border-[#E9EEF2] rounded-md p-8 md:p-10 bg-white">
                    {selectedMethod === 'email' ? (
                        /* Email Form */
                        <div>
                            <div className="mb-8">
                                <h3 className="text-[20px] font-semibold lusitana  text-[#221E1F] mb-1">Email Delivery</h3>
                                <p className="text-[#899AB1] text-[13px]">Digital gift card delivered instantly to your inbox</p>
                            </div>

                            <form className="space-y-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#334155] font-medium text-[14px]">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="bg-[#F3F3F3] border border-[#E3E3E3]  rounded-md px-4 py-3 text-[14px] text-[#221E1F] placeholder:text-[#899AB1] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#334155] font-medium text-[14px]">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="bg-[#F3F3F3] border border-[#E3E3E3]  rounded-md px-4 py-3 text-[14px] text-[#221E1F] placeholder:text-[#899AB1] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]"
                                    />
                                </div>
                                <div className="flex justify-end pt-4">
                                    <button type="button" className="bg-[#1A9C9C] text-white px-8 py-3 rounded-md font-medium text-[15px] hover:bg-teal-700 transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                                        onClick={() => navigate('/complete_order')}
                                    >
                                        Next <HiOutlineArrowNarrowRight size={18} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        /* Shipping Form */
                        <div>
                            <div className="mb-8">
                                <h3 className="text-[20px] font-semibold lusitana text-[#221E1F] mb-1">Ship to Address</h3>
                                <p className="text-[#899AB1] text-[13px]">Physical gift card or merchandise shipped to your address</p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#334155] font-medium text-[14px]">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="bg-[#F3F3F3] border border-[#E3E3E3] rounded-md px-4 py-3 text-[14px] text-[#221E1F] placeholder:text-[#899AB1] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#334155] font-medium text-[14px]">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="bg-[#F3F3F3] border border-[#E3E3E3]  rounded-md px-4 py-3 text-[14px] text-[#221E1F] placeholder:text-[#899AB1] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#334155] font-bold text-[14px]">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="bg-[#F3F3F3] border border-[#E3E3E3]  rounded-md px-4 py-3 text-[14px] text-[#221E1F] placeholder:text-[#899AB1] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#334155] font-bold text-[14px]">Street Address</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your street address"
                                        className="bg-[#F3F3F3] border border-[#E3E3E3]  rounded-md px-4 py-3 text-[14px] text-[#221E1F] placeholder:text-[#899AB1] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#334155] font-bold text-[14px]">City</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your city"
                                            className="bg-[#F3F3F3] border border-[#E3E3E3]  rounded-md px-4 py-3 text-[14px] text-[#221E1F] placeholder:text-[#899AB1] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#334155] font-bold text-[14px]">State</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your state"
                                            className="bg-[#F3F3F3] border border-[#E3E3E3]  rounded-md px-4 py-3 text-[14px] text-[#221E1F] placeholder:text-[#899AB1] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#334155] font-bold text-[14px]">ZIP Code</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your zip code"
                                            className="bg-[#F3F3F3] border border-[#E3E3E3]  rounded-md px-4 py-3 text-[14px] text-[#221E1F] placeholder:text-[#899AB1] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end pt-4">
                                    <button type="button" onClick={() => navigate('/pickup_details')} className="bg-[#1A9C9C] text-white px-8 py-3 rounded-md font-medium text-[15px] hover:bg-teal-700 transition-colors flex items-center gap-2 cursor-pointer shadow-sm">
                                        Next <HiOutlineArrowNarrowRight size={18} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChooseDeliveryMethod;