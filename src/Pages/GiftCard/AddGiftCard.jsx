import React from 'react';

const AddGiftCard = () => {
    return (
        <div className="flex justify-center items-center py-12 px-4">
            <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-2xl overflow-hidden border border-gray-50">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-[#FFF5F1] to-[#FFF1F5] py-12 px-8 text-center border-b border-gray-50">
                    <h2 className="text-[#E48B4B] text-[2.5rem] font-medium lusitana">
                        Add gift card
                    </h2>
                </div>

                {/* Form Section */}
                <div className="p-8 md:p-12">
                    <div className="mb-8 font-sans">
                        <label className="block text-[#62748E] font-medium text-[14px] mb-2">
                            Gift Card Number
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your gift card number"
                            className="w-full px-4 py-3 border border-[#E9EEF2] rounded-md text-[15px] focus:outline-none focus:border-[#E48B4B] placeholder-[#A0ABC0]"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button className="bg-[#E48B4B] hover:bg-orange-400 text-white font-medium text-[15px] py-3.5 px-12 rounded-md transition-colors shadow-sm cursor-pointer w-[60%] md:w-auto min-w-[200px]">
                            Add a Gift Card
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddGiftCard;