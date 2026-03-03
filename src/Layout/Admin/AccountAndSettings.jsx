import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { FiEdit2, FiEye, FiEyeOff, FiCheckCircle } from 'react-icons/fi';

const AccountAndSettings = () => {
    const [activeTab, setActiveTab] = useState('Account');

    // profile picture state
    const [profilePicture, setProfilePicture] = useState('https://randomuser.me/api/portraits/men/32.jpg');
    const fileInputRef = React.useRef(null);


    
    // Security tab state
    const [showOldPass, setShowOldPass] = useState(false);
    const [showNewPass, setShowNewPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);



    // handlers
    const handlePictureClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handlePictureChange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setProfilePicture(url);
            // TODO: upload the file to server if needed
        }
    };

    return (
        <div className="bg-[#F3F3F3] max-w-7xl mx-auto ">
            {/* Title Section */}
            <div className="mb-6">
                <h1 className="luxury md:text-[38px] text-3xl font-semibold text-[#221e1fd7]">Account & Settings</h1>
                <p className="text-[#9CA3AF] text-[15px]">Manage your account</p>
            </div>

            {/* Tabs */}
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-1.5 flex items-center mb-6 w-full shadow-sm">
                <button
                    onClick={() => setActiveTab('Account')}
                    className={`flex-1 md:py-3 py-1 text-lg font-semibold rounded-lg transition-colors cursor-pointer ${activeTab === 'Account' ? 'bg-[#BCE3E3] text-[#168989]' : 'text-[#64748B] hover:bg-gray-50'
                        }`}
                >
                    Account
                </button>
                <button
                    onClick={() => setActiveTab('Security')}
                    className={`flex-1 md:py-3 py-1 text-lg font-semibold rounded-lg transition-colors cursor-pointer ${activeTab === 'Security' ? 'bg-[#BCE3E3] text-[#168989]' : 'text-[#64748B] hover:bg-gray-50'
                        }`}
                >
                    Security
                </button>
            </div>

            {/* Content Area */}
            {activeTab === 'Account' && (
                <div className="bg-white border border-[#E7E7E7] rounded-3xl p-8 shadow-sm w-full">
                    <h2 className="text-2xl font-semibold text-[#454545] mb-8">Profile Information</h2>

                    {/* Picture area */}
                    <div className="flex items-center gap-6 mb-8">
                        <img
                            src={profilePicture}
                            alt="Profile"
                            className="w-20 h-20 rounded-2xl object-cover border border-gray-200 shadow-sm"
                        />
                        <button
                            onClick={handlePictureClick}
                            className="flex items-center gap-2 border border-[#D1D5DB] text-[#334155] text-[13px] font-medium px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            Change Pictures <FaRegEdit size={20} />
                        </button>
                        {/* hidden file input used for uploading new picture */}
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handlePictureChange}
                        />
                    </div>

                    {/* Fields area */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div>
                            <label className="block text-xl font-medium text-[#454545] mb-3">Name</label>
                            <input
                                type="text"
                                placeholder='Enter your name'
                                className="w-full border border-[#Dce3ec] rounded-xl px-4 py-3.5 text-[15px] text-[#6A7B92] focus:outline-none focus:border-[#1A9C9C] focus:ring-1 focus:ring-[#1A9C9C]"
                            />
                        </div>
                        <div>
                            <label className="block text-xl font-medium text-[#454545] mb-3">Email</label>
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className="w-full border border-[#Dce3ec] rounded-xl px-4 py-3.5 text-[15px] text-[#6A7B92] focus:outline-none focus:border-[#1A9C9C] focus:ring-1 focus:ring-[#1A9C9C]"
                            />
                        </div>
                        <div>
                            <label className="block text-xl font-medium text-[#454545] mb-3">Phone Number</label>
                            <input
                                type="tel"
                                placeholder='Enter your phone number'
                                className="w-full border border-[#Dce3ec] rounded-xl px-4 py-3.5 text-[15px] text-[#6A7B92] focus:outline-none focus:border-[#1A9C9C] focus:ring-1 focus:ring-[#1A9C9C]"
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-6">
                        <button className="bg-[#1A9C9C] text-white font-medium text-[15px] px-8 py-3 rounded-xl hover:bg-[#158080] transition-colors cursor-pointer shadow-sm">
                            Update
                        </button>
                        <button className="text-[#1A9C9C] font-medium text-[15px] hover:underline cursor-pointer">
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {activeTab === 'Security' && (
                <div className="bg-white border border-[#E7E7E7] rounded-3xl p-8 shadow-sm w-full">
                    <h2 className="text-[22px] font-medium text-[#454545] mb-8">Password</h2>

                    {/* Fields area */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div>
                            <label className="block text-[15px] font-medium text-[#454545] mb-3">Old Password</label>
                            <div className="relative">
                                <input
                                    type={showOldPass ? "text" : "password"}
                                    placeholder='Enter your old password'
                                    className="w-full border border-[#Dce3ec] rounded-xl pl-4 pr-12 py-3.5 text-[15px] text-[#6A7B92] tracking-widest focus:outline-none focus:border-[#1A9C9C] focus:ring-1 focus:ring-[#1A9C9C]"
                                />
                                <button
                                    onClick={() => setShowOldPass(!showOldPass)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#454545] cursor-pointer"
                                >
                                    {showOldPass ? <FiEye size={19} /> : <FiEyeOff size={19} />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-[15px] font-medium text-[#454545] mb-3">New Password</label>
                            <div className="relative">
                                <input
                                    type={showNewPass ? "text" : "password"}
                                    placeholder='Enter your new password'
                                    className="w-full border border-[#Dce3ec] rounded-xl pl-4 pr-12 py-3.5 text-[15px] text-[#6A7B92] tracking-widest focus:outline-none focus:border-[#1A9C9C] focus:ring-1 focus:ring-[#1A9C9C]"
                                />
                                <button
                                    onClick={() => setShowNewPass(!showNewPass)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#454545] cursor-pointer"
                                >
                                    {showNewPass ? <FiEye size={19} /> : <FiEyeOff size={19} />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-[15px] font-medium text-[#454545] mb-3">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPass ? "text" : "password"}
                                    placeholder='Confirm your new password'
                                    className="w-full border border-[#Dce3ec] rounded-xl pl-4 pr-12 py-3.5 text-[15px] text-[#6A7B92] focus:outline-none focus:border-[#1A9C9C] focus:ring-1 focus:ring-[#1A9C9C]"
                                    style={{
                                        fontFamily: showConfirmPass ? 'inherit' : 'caption'
                                    }}
                                />
                                <button
                                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#454545] cursor-pointer"
                                >
                                    {showConfirmPass ? <FiEye size={19} /> : <FiEyeOff size={19} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Checklists */}
                    <div className="space-y-3 mb-10">
                        <div className="flex items-center gap-2.5 text-[14px] text-[#6A7B92] font-medium">
                            <FiCheckCircle size={18} className="text-[#1A9C9C]" />
                            <span>Minimum 8 characters.</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-[14px] text-[#6A7B92] font-medium">
                            <FiCheckCircle size={18} className="text-[#1A9C9C]" />
                            <span>Use combination of uppercase and lowercase letters.</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-[14px] text-[#6A7B92] font-medium">
                            <FiCheckCircle size={18} className="text-[#1A9C9C]" />
                            <span>Use of special characters (e.g., !, @, #, $, %)</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-6">
                        <button className="bg-[#1A9C9C] text-white font-medium md:text-[15px] text-[10px] px-8 py-3 rounded-xl hover:bg-[#158080] transition-colors cursor-pointer shadow-sm">
                            Update Password
                        </button>
                        <button className="text-[#1A9C9C] font-medium text-[15px] hover:underline cursor-pointer">
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccountAndSettings;