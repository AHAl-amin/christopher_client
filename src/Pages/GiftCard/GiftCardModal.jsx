import React from 'react';
import { FiX, FiGift } from 'react-icons/fi';

const GiftCardModal = ({ isOpen, onClose, giftCard }) => {
    if (!isOpen || !giftCard) return null;

    // Mock transaction data based on the provided design
    const transactions = [
        {
            id: 1,
            type: 'Add to Balance',
            description: 'Initial card load',
            date: 'February 1, 2026 at 10:30 AM',
            amount: '+$100.00',
            isPositive: true
        },
        {
            id: 2,
            type: 'Payment',
            description: "Purchase at Jone's Sheks - Chocolate Shake",
            date: 'February 3, 2026 at 02:20 PM',
            amount: '+$100.00', // Image shows a + even for payment in red, but using red color
            isPositive: false
        }
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/10 backdrop-blur-sm">
            <div className="bg-white rounded-[24px] w-full max-w-2xl relative shadow-xl overflow-y-auto max-h-[90vh]">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 transition-colors z-10 cursor-pointer bg-white/50 rounded-full p-2"
                >
                    <FiX size={24} />
                </button>

                <div className="p-8 md:p-10 font-sans">

                    {/* Teal Gift Card Banner */}
                    <div className="bg-gradient-to-r from-[#1A9C9C] to-[#07C2C2] rounded-[16px] p-8 text-white relative overflow-hidden mb-10 shadow-sm">

                        {/* Huge Gift Icon Overlay */}
                        <div className="absolute right-6 -bottom-8 opacity-20 pointer-events-none">
                            <FiGift size={180} strokeWidth={1} className='text-[#0a8383]' />
                        </div>

                        <div className="relative z-10">
                            <div className="mb-8">
                                <p className="text-[13px] font-medium opacity-90 mb-1">Gift Card</p>
                                <p className="text-[28px] font-bold tracking-wide">{giftCard.number}</p>
                            </div>

                            <div>
                                <p className="text-[13px] font-medium opacity-90 mb-1">Available Balance</p>
                                <p className="text-[28px] font-bold">${giftCard.balance.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Transaction History Section */}
                    <div>
                        <h3 className="lusitana text-[20px] font-bold text-[#221E1F] mb-6">
                            Transaction History
                        </h3>

                        <div className="space-y-4">
                            {transactions.map((tx) => (
                                <div
                                    key={tx.id}
                                    className="border border-[#E9EEF2] rounded-[14px] p-5 flex justify-between items-start hover:shadow-sm transition-shadow bg-[#FAFCFD]"
                                >
                                    <div className="flex flex-col gap-1.5">
                                        <p className={`font-bold text-[15px] ${tx.isPositive ? 'text-[#1F9F42]' : 'text-[#FA3E5A]'}`}>
                                            {tx.type}
                                        </p>
                                        <p className="text-[#899AB1] text-[13px]">{tx.description}</p>
                                        <p className="text-[#A0ABC0] text-[12px]">{tx.date}</p>
                                    </div>
                                    <div>
                                        <p className={`font-bold text-[15px] ${tx.isPositive ? 'text-[#1F9F42]' : 'text-[#FA3E5A]'}`}>
                                            {tx.amount}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GiftCardModal;
