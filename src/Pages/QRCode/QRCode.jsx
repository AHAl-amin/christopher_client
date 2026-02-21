import React from 'react';

const QRCode = () => {
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
                                My QR Code
                            </h1>



                        </div>
                    </div>

                    {/* Image Space */}
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-0 py-16 flex justify-center">
                <div className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden w-[340px] flex flex-col">

                    {/* Top Section with QR Code */}
                    <div className="pt-12 pb-10 flex justify-center bg-white">
                        <div className="relative p-7">
                            {/* QR Frame Corners */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-[5px] border-l-[5px] border-[#1C1C1C] rounded-tl-[14px]"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-[5px] border-r-[5px] border-[#1C1C1C] rounded-tr-[14px]"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[5px] border-l-[5px] border-[#1C1C1C] rounded-bl-[14px]"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[5px] border-r-[5px] border-[#1C1C1C] rounded-br-[14px]"></div>

                            <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=SS-9792302269"
                                alt="QR Code"
                                className="w-[160px] h-[160px]"
                            />
                        </div>
                    </div>

                    {/* Orange ID Band */}
                    <div className="bg-[#EF8E35] w-full py-3 flex justify-center items-center">
                        <span className="text-white font-medium text-[15px] tracking-wide">
                            SS-9792302269
                        </span>
                    </div>

                    {/* Reward Points Section */}
                    <div className="bg-[#FEF8F4] w-full py-5 flex justify-center items-center gap-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FA6180]">
                            <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 7H2V12H22V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 22V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-[#62748E] font-medium text-[14px]">
                            <span className="text-[#FA6180] font-bold text-[15px]">0</span>, Reward Points
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default QRCode;