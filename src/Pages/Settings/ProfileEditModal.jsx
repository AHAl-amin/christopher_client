import React from 'react';
import { FiX, FiUploadCloud } from 'react-icons/fi';

const ProfileEditModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-[24px] w-full max-w-md relative shadow-xl overflow-hidden p-8">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors z-10 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-full p-2"
                >
                    <FiX size={20} />
                </button>

                <h2 className="text-[22px] font-medium text-[#221E1F] mb-6 lusitana text-center">Update Profile Picture</h2>

                <div className="border-2 border-dashed border-[#CAD5E2] rounded-[16px] p-8 flex flex-col items-center justify-center bg-[#FAFCFD] hover:bg-[#F0F5F9] transition-colors cursor-pointer group">
                    <div className="bg-white p-4 rounded-full shadow-sm mb-4 group-hover:scale-105 transition-transform">
                        <FiUploadCloud size={28} className="text-[#E48B4B]" />
                    </div>
                    <p className="text-[#221E1F] font-medium mb-1 text-[15px]">Click to upload new image</p>
                    <p className="text-[#899AB1] text-[13px]">SVG, PNG, JPG (max. 800x800px)</p>
                </div>

                <div className="mt-8 flex justify-center">
                    <button className="px-8 py-3 w-full bg-[#1A9C9C] text-white font-medium text-[15px] rounded-md hover:bg-teal-700 transition-colors cursor-pointer shadow-sm">
                        Browse Files
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileEditModal;
