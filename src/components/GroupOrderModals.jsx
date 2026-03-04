import React, { useState } from 'react';
import { FaX } from 'react-icons/fa6';
import { FiLink, FiMail, FiCopy } from 'react-icons/fi';
import { MdOutlineChatBubbleOutline } from 'react-icons/md';
import { useGroupOrder } from '../Context/GroupOrderContext';

const GroupOrderModals = () => {
  const {
    showStartGroupOrderModal,
    closeStartGroupOrderModal,
    showGroupOrderReadyModal,
    closeGroupOrderReadyModal,
    createGroupOrder,
    activateGroupOrder,
    groupOrderData,
  } = useGroupOrder();

  const [groupName, setGroupName] = useState('');
  const [limitOrderAmount, setLimitOrderAmount] = useState(20);
  const [limitOrderAmountEnabled, setLimitOrderAmountEnabled] = useState(true);
  const [separatelyPayingAmountEnabled, setSeparatelyPayingAmountEnabled] = useState(true);

  const handleCreateGroupOrder = () => {
    createGroupOrder({
      groupName,
      limitOrderAmount: parseInt(limitOrderAmount),
      limitOrderAmountEnabled,
      separatelyPayingAmountEnabled,
    });
    // Reset form
    setGroupName('');
    setLimitOrderAmount(20);
    setLimitOrderAmountEnabled(true);
    setSeparatelyPayingAmountEnabled(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(groupOrderData.groupLink);
    alert('Link copied to clipboard!');
  };

  return (
    <>
      {/* Start Group Order Modal */}
      {showStartGroupOrderModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#00000080] p-4">
          <div className="bg-[#F9FAFB] rounded-[12px] w-full max-w-[600px] p-8 relative flex flex-col max-h-[80vh] overflow-y-auto">
            <button
              onClick={closeStartGroupOrderModal}
              className="absolute top-2 right-2 p-2 bg-white shadow-sm border border-gray-100 rounded-md text-black hover:bg-gray-50 cursor-pointer"
            >
              <FaX size={16} />
            </button>

            <h3 className="lusitana text-[28px] text-[#314158] mb-6">Start Group Order</h3>

            <div className="border-b border-dashed border-gray-300 w-full mb-6"></div>

            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-[#314158] font-semibold text-[15px]">Group Name</label>
                <input
                  type="text"
                  placeholder="Enter your group name"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="w-full border border-gray-200 rounded-md p-3 text-[14px] focus:outline-none focus:border-[#1A9C9C] bg-white placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-row items-center gap-8">
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={limitOrderAmountEnabled}
                      onChange={(e) => setLimitOrderAmountEnabled(e.target.checked)}
                      className="w-5 h-5 accent-[#1A9C9C] rounded cursor-pointer"
                    />
                    <span className="text-[#62748E] font-medium text-[15px]">Limit Order Amount Per Party</span>
                  </label>
                  <div className="flex items-center border border-gray-200 rounded-md overflow-hidden max-w-[150px] bg-white">
                    <span className="bg-[#FFF4ED] text-[#F68528] px-4 py-2 font-medium border-r border-gray-200">$</span>
                    <input
                      type="text"
                      value={limitOrderAmount}
                      onChange={(e) => setLimitOrderAmount(e.target.value)}
                      className="w-full p-2 focus:outline-none font-semibold text-center text-[#221E1F]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 justify-start h-full pb-9">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={separatelyPayingAmountEnabled}
                      onChange={(e) => setSeparatelyPayingAmountEnabled(e.target.checked)}
                      className="w-5 h-5 accent-[#1A9C9C] rounded cursor-pointer"
                    />
                    <span className="text-[#62748E] font-medium text-[15px]">Separately Paying Ammount</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={closeStartGroupOrderModal}
                  className="bg-[#E5E7EB] text-[#4B5563] px-6 py-2.5 rounded-md font-medium hover:bg-gray-300 transition-colors cursor-pointer md:text-xl text-[12px]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateGroupOrder}
                  className="bg-[#1A9C9C] text-white px-6 py-2.5 rounded-md font-medium hover:bg-teal-700 transition-colors cursor-pointer md:text-xl text-[12px]"
                >
                  Create Group Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Group Order Ready Modal */}
      {showGroupOrderReadyModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#00000080] p-4">
          <div className="bg-[#F9FAFB] rounded-[12px] w-full max-w-[650px] p-8 relative flex flex-col max-h-[80vh] overflow-y-auto">
            <button
              onClick={closeGroupOrderReadyModal}
              className="absolute top-2 right-2 p-2 bg-white shadow-sm border border-gray-100 rounded-md text-black hover:bg-gray-50 cursor-pointer"
            >
              <FaX size={16} />
            </button>

            <h3 className="lusitana text-[28px] text-[#314158] mb-6">Your Group Order is ready to share</h3>

            <div className="border-b border-dashed border-gray-300 w-full mb-6"></div>

            <div className="flex flex-col gap-6 w-full">
              <p className="text-[#62748E] text-[15px]">Share the link or use the "Share via Email/SMS" option below</p>

              <div className="flex items-center gap-4 flex-wrap">
                <button className="bg-[#A2C9F5] text-[#1E3A8A] flex items-center gap-2 px-6 py-2.5 rounded-md font-medium hover:bg-blue-400 transition-colors cursor-pointer text-[12px]">
                  Copy Link <FiLink size={16} />
                </button>
                <span className="text-[#221E1F] font-bold text-[14px]">Or</span>
                <button className="bg-[#E6934F] text-white flex items-center gap-2 px-6 py-2.5 rounded-md font-medium hover:bg-orange-500 transition-colors cursor-pointer text-[12px]">
                  Share via Email <FiMail size={16} />
                </button>
                <span className="text-[#221E1F] font-bold text-[14px]">Or</span>
                <button className="bg-[#1F9B36] text-white flex items-center gap-2 px-6 py-2.5 rounded-md font-medium hover:bg-green-600 transition-colors cursor-pointer text-[12px]">
                  Share via SMS <MdOutlineChatBubbleOutline size={16} />
                </button>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <label className="text-[#314158] font-semibold text-[15px]">Group Link</label>
                <div className="flex items-center w-full border border-gray-200 rounded-md bg-white overflow-hidden">
                  <input
                    type="text"
                    readOnly
                    value={groupOrderData.groupLink}
                    className="w-full p-3 text-[14px] text-[#A0ABC0] focus:outline-none bg-white"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="bg-[#CCF0E7] p-3.5 text-[#1A9C9C] hover:bg-[#B3E1D7] transition-colors cursor-pointer flex-shrink-0"
                  >
                    <FiCopy size={20} />
                  </button>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={closeGroupOrderReadyModal}
                  className="bg-[#E5E7EB] text-[#4B5563] px-8 py-2.5 rounded-md font-medium hover:bg-gray-300 transition-colors cursor-pointer md:text-xl text-[12px]"
                >
                  Cancel
                </button>
                <button
                  onClick={activateGroupOrder}
                  className="bg-[#1A9C9C] text-white px-8 py-2.5 rounded-md font-medium hover:bg-teal-700 transition-colors cursor-pointer md:text-xl text-[12px]"
                >
                  Enter My Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GroupOrderModals;
