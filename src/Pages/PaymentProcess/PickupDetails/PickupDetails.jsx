import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FiSearch, FiCalendar, FiClock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const PickupDetails = () => {
    const navigate = useNavigate();
    const [bringToVehicle, setBringToVehicle] = useState(false);
    const [vehicleInfo, setVehicleInfo] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    return (
        <div>
            {/* Banner Section */}
            <div className="relative py-10 overflow-hidden bg-[#F8FBFC]">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#1A9C9C_0%,_rgba(36,156,156,0.3)_70%,_transparent_100%)] opacity-10"></div>
                <img
                    src="https://res.cloudinary.com/dcpbtzues/image/upload/v1771734593/three-glasses-milkshake-with-assorted-flavors-chocolate-vanilla-strawberry-milkshake_1_oznzgf.png"
                    alt="banner"
                    className="absolute right-0 bottom-0 z-10"
                />
                <div className="max-w-7xl mx-auto flex items-center h-full relative z-20 py-10">
                    <div className="space-y-6 px-6 lg:px-0 max-w-xl">
                        <h1 className="lusitana text-4xl lg:text-6xl xl:text-7xl font-medium text-[#221E1F] leading-tight">
                            Checkout
                        </h1>
                        <p className="text-lg text-[#62748E] leading-relaxed max-w-lg">
                            Select your pickup time, location, and complete your order
                        </p>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="max-w-4xl mx-auto my-10 flex flex-col items-center bg-[#F8FAFC] p-5 rounded-xl">
                <div className="w-full border border-[#E9EEF2] rounded-md p-8 md:p-10 bg-white space-y-10">

                    {/* Section 1: Select Pickup Time & Date */}
                    <div>
                        <h2 className="lusitana text-[22px] font-semibold text-[#221E1F] mb-2">Select Your Pickup Time &amp; Date</h2>
                        <p className="text-[#899AB1] text-[13px] mb-6 flex items-center gap-1">
                            <span className="text-[#1A9C9C] font-bold">•</span> Schedule Pickup Time. At Restaurant (Dine In)
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Select Date */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[#334155] font-medium text-[14px]">Select Date</label>
                                <div className="relative">
                                    <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-[#899AB1]" size={16} />
                                    <select
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="w-full bg-[#F3F3F3] border border-[#E3E3E3] rounded-md pl-9 pr-4 py-3 text-[14px] text-[#62748E] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C] appearance-none cursor-pointer"
                                    >
                                        <option value="">Choose Date</option>
                                        <option value="2026-02-23">Feb 23, 2026</option>
                                        <option value="2026-02-24">Feb 24, 2026</option>
                                        <option value="2026-02-25">Feb 25, 2026</option>
                                        <option value="2026-02-26">Feb 26, 2026</option>
                                        <option value="2026-02-27">Feb 27, 2026</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                        <svg className="w-4 h-4 text-[#899AB1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Select Time */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[#334155] font-medium text-[14px]">Select Time</label>
                                <div className="relative">
                                    <FiClock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#899AB1]" size={16} />
                                    <select
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                        className="w-full bg-[#F3F3F3] border border-[#E3E3E3] rounded-md pl-9 pr-4 py-3 text-[14px] text-[#62748E] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C] appearance-none cursor-pointer"
                                    >
                                        <option value="">Choose Time</option>
                                        <option value="10:00">10:00 AM</option>
                                        <option value="11:00">11:00 AM</option>
                                        <option value="12:00">12:00 PM</option>
                                        <option value="13:00">1:00 PM</option>
                                        <option value="14:00">2:00 PM</option>
                                        <option value="15:00">3:00 PM</option>
                                        <option value="16:00">4:00 PM</option>
                                        <option value="17:00">5:00 PM</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                        <svg className="w-4 h-4 text-[#899AB1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-dashed border-[#E9EEF2]"></div>

                    {/* Section 2: Pickup Location */}
                    <div>
                        <h2 className="lusitana text-[22px] font-semibold text-[#221E1F] mb-6">Pickup Location</h2>

                        {/* Location search */}
                        <div className="flex flex-col gap-2 mb-5">
                            <label className="text-[#899AB1] text-[13px]">Find Your Location</label>
                            <div className="relative">
                                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#899AB1]" size={16} />
                                <input
                                    type="text"
                                    placeholder="Search here...."
                                    className="w-full bg-[#F3F3F3] border border-[#E3E3E3] rounded-md pl-9 pr-4 py-3 text-[14px] text-[#221E1F] placeholder:text-[#899AB1] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]"
                                />
                            </div>
                        </div>

                        {/* Bring Out to My Vehicle checkbox */}
                        <div className="flex items-center gap-2 mb-5">
                            <div
                                onClick={() => setBringToVehicle(!bringToVehicle)}
                                className={`w-4 h-4 rounded-sm border flex items-center justify-center cursor-pointer transition-colors ${bringToVehicle ? 'bg-[#1A9C9C] border-[#1A9C9C]' : 'bg-white border-[#CAD5E2]'}`}
                            >
                                {bringToVehicle && (
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </div>
                            <label
                                onClick={() => setBringToVehicle(!bringToVehicle)}
                                className="text-[#334155] text-[14px] cursor-pointer select-none"
                            >
                                Bring Out to My Vehicle
                            </label>
                        </div>

                        {/* Vehicle Information textarea - shown when checkbox is ticked */}
                        {bringToVehicle && (
                            <div className="flex flex-col gap-2 mb-5">
                                <label className="text-[#334155] font-medium text-[14px]">Vehicle Information</label>
                                <textarea
                                    value={vehicleInfo}
                                    onChange={(e) => setVehicleInfo(e.target.value)}
                                    placeholder="Write here....."
                                    rows={4}
                                    className="w-full bg-[#F3F3F3] border border-[#E3E3E3] rounded-md px-4 py-3 text-[14px] text-[#221E1F] placeholder:text-[#899AB1] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C] resize-none"
                                />
                                <p className="text-[#899AB1] text-[12px]">Please provide details to help us find your vehicle</p>
                            </div>
                        )}

                        {/* Location Map */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#334155] font-medium text-[14px]">Location Map</label>
                            <div className="w-full h-[220px] rounded-xl overflow-hidden border border-[#E3E3E3]">
                                <iframe
                                    title="Location Map"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.07498789508!2d-122.47841!3d37.7576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1620000000000"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Next Button */}
                    <div className="flex justify-end pt-4">
                        <button
                            type="button"
                            onClick={() => navigate('/complete_order')}
                            className="bg-[#1A9C9C] text-white px-8 py-3 rounded-md font-medium text-[15px] hover:bg-teal-700 transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                        >
                            Next <HiOutlineArrowNarrowRight size={18} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PickupDetails;
