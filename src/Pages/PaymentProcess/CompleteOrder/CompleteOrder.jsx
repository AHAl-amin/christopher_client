import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiTag, FiCreditCard } from "react-icons/fi";
import { BsPaypal } from "react-icons/bs";
import { FaGift } from "react-icons/fa";
import OrderConfirmModal from "./OrderConfirmModal";

const CompleteOrder = () => {
    const navigate = useNavigate();
    const [selectedTip, setSelectedTip] = useState(null);
    const [couponCode, setCouponCode] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const subtotal = 14.75;
    const taxRate = 0.08;
    const tax = subtotal * taxRate;
    const tipAmounts = [
        { label: '10%', value: 10, amount: (subtotal * 0.1).toFixed(2) },
        { label: '15%', value: 15, amount: (subtotal * 0.15).toFixed(2) },
        { label: '18%', value: 18, amount: (subtotal * 0.18).toFixed(2) },
        { label: '20%', value: 20, amount: (subtotal * 0.2).toFixed(2) },
    ];
    const tipValue = selectedTip ? subtotal * selectedTip / 100 : 0;
    const total = (subtotal + tax + tipValue).toFixed(2);

    const paymentOptions = [
        { id: 'credit_card', label: 'Credit Card', icon: <FiCreditCard size={16} className="text-[#1A9C9C]" /> },
        { id: 'paypal', label: 'Paypal', icon: <BsPaypal size={16} className="text-[#1A9C9C]" /> },
        { id: 'gift_card', label: 'Gift Card', icon: <FaGift size={16} className="text-[#1A9C9C]" /> },
    ];

    return (
        <div>
            {/* Banner Section */}
            <div className="relative py-10 overflow-hidden bg-[#F8FBFC]">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#1A9C9C_0%,_rgba(36,156,156,0.3)_70%,_transparent_100%)] opacity-10"></div>
                <img
                    src="https://res.cloudinary.com/dcpbtzues/image/upload/v1771734593/three-glasses-milkshake-with-assorted-flavors-chocolate-vanilla-strawberry-milkshake_1_oznzgf.png"
                    alt="imge"
                    className="absolute right-0 bottom-0 z-10"
                />
                <div className="max-w-7xl mx-auto flex items-center h-full relative z-20 py-10">
                    <div className="">
                        <div className="space-y-6 px-6 lg:px-0 max-w-md">
                            <h1 className="lusitana text-4xl lg:text-6xl xl:text-7xl font-medium text-[#221E1F] leading-tight">
                                Complete Your Order
                            </h1>
                            <p className="text-lg text-[#62748E] leading-relaxed max-w-lg">
                                Complete your order and get ready to enjoy delicious shakes and desserts from Jone's Sheks
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Section */}
            <div className="max-w-4xl mx-auto my-10 px-4 pb-10">

                {/* Order Summary */}
                <div className="mb-6 bg-gray-50 p-4 rounded-xl shadow">
                    <h2 className="text-xl font-bold lusitana text-[#221E1F] mb-3">Order Summary</h2>
                    <div className="flex justify-between items-center text-[14px] text-[#62748E] mb-2">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-[14px] text-[#62748E] mb-4">
                        <span>Tax (8%)</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-[18px] font-bold  pt-4 border-t border-dashed border-[#949494]">
                        <span className="text-[#45556C]">Tax (8%)</span>
                        <span className="text-[#F68528]">${(subtotal + tax).toFixed(2)}</span>
                    </div>
                </div>

                {/* Confirm Your Order heading */}
                <h2 className="lusitana text-3xl font-semibold text-[#1A9C9C] mb-2">Confirm Your Order</h2>
                <p className="text-[#6A7282] text-[14px] mb-8">Please provide your basic details and choose a payment method to complete your request.</p>

                <div className="space-y-5">

                    {/* Apply Discount Coupon */}
                    <div className="border border-[#D1DFEE] rounded-xl p-3 bg-[#F8FAFC]">
                        <div className="p-3 border border-[#D1DFEE] bg-[#FFFFFF] rounded-xl">
                            <div className="flex items-center gap-2 mb-4">
                                <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.21438 6.594C0.966384 6.594 0.739384 6.392 0.750384 6.129C0.817384 4.587 1.00538 3.583 1.53038 2.789C1.82984 2.33653 2.20539 1.93933 2.64038 1.615C3.80538 0.75 5.45038 0.75 8.74238 0.75H12.7564C16.0484 0.75 17.6934 0.75 18.8604 1.615C19.2914 1.935 19.6674 2.332 19.9694 2.789C20.4944 3.583 20.6824 4.587 20.7494 6.129C20.7604 6.392 20.5334 6.594 20.2844 6.594C18.8984 6.594 17.7754 7.783 17.7754 9.25C17.7754 10.717 18.8984 11.906 20.2854 11.906C20.5334 11.906 20.7604 12.108 20.7494 12.372C20.6824 13.913 20.4944 14.917 19.9694 15.712C19.6698 16.1641 19.2943 16.561 18.8594 16.885C17.6934 17.75 16.0484 17.75 12.7564 17.75H8.74338C5.45138 17.75 3.80638 17.75 2.63938 16.885C2.20475 16.5606 1.82954 16.1634 1.53038 15.711C1.00538 14.917 0.817384 13.913 0.750384 12.371C0.739384 12.108 0.966384 11.906 1.21438 11.906C2.60038 11.906 3.72438 10.717 3.72438 9.25C3.72438 7.783 2.60038 6.594 1.21438 6.594Z" stroke="#F68528" stroke-width="1.5" stroke-linejoin="round" />
                                    <path d="M8.25 11.75L13.25 6.75" stroke="#F68528" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.25 6.75H8.261M13.239 11.75H13.25" stroke="#F68528" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <h3 className="text-[15px] font-semibold text-[#221E1F]">Apply Discount Coupon</h3>
                            </div>
                            <div className="flex gap-3 bg-[#F8FAFC] border border-[#E9EEF2] rounded-md pl-3">
                                <input
                                    type="text"
                                    placeholder="Enter gift card code"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    className="flex-1 text-[14px] bg-[#F8FAFC] text-[#221E1F] placeholder:text-[#C5D0DC] focus:outline-none "
                                />
                                <button className="bg-[#F68528]/30 hover:bg-orange-200 text-[#F68528] px-6 py-3 rounded-md font-medium text-[14px] transition-colors cursor-pointer">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Add a Tip */}
                    <div className="border border-[#FADDE5] rounded-xl p-3 bg-[#FDF2F5]">
                        <div className="bg-[#FFFFFF] p-4 rounded-xl">
                            <div className="flex items-center gap-2 mb-1 ">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.7362 10.21L10.3047 15.0385M10.1408 3.948L3.21875 13.6875L13.8608 21.25L20.7822 11.51L19.0002 2.75L10.1408 3.948Z" stroke="#F03B5D" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.122 8.94133C15.5929 8.94133 15.9745 8.55965 15.9745 8.08883C15.9745 7.61801 15.5929 7.23633 15.122 7.23633C14.6512 7.23633 14.2695 7.61801 14.2695 8.08883C14.2695 8.55965 14.6512 8.94133 15.122 8.94133Z" stroke="#F03B5D" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <h3 className="text-[15px] font-semibold text-[#221E1F]">Add a Tip <span className="text-[#899AB1] font-normal">(Optional)</span></h3>
                            </div>
                            <p className="text-[#899AB1] text-[12px] mb-4 ml-6">Support the team and show your appreciation</p>

                            <div className="flex gap-2 mb-4 justify-between">
                                {tipAmounts.map((tip) => (
                                    <button
                                        key={tip.value}
                                        onClick={() => setSelectedTip(selectedTip === tip.value ? null : tip.value)}
                                        className={`px-4 py-2 rounded-md border text-[13px] font-medium transition-colors cursor-pointer w-full ${selectedTip === tip.value ? 'bg-[#1A9C9C] text-white border-[#1A9C9C]' : 'bg-white text-[#62748E] border-[#E9EEF2] hover:border-[#1A9C9C]'}`}
                                    >
                                        {tip.label} <span className="opacity-70">(${tip.amount})</span>
                                    </button>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    placeholder="Enter card number"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    className="flex-1 bg-[#F6F6F6] border border-[#DDDDDD] rounded-md px-4 py-3 text-[14px] text-[#221E1F] placeholder:text-[#C5D0DC] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]"
                                />
                                <button className="bg-[#F03B5D] hover:bg-orange-500 text-white px-6 py-3 rounded-md font-medium text-[14px] transition-colors cursor-pointer">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Choose Payment Method */}
                    <div className="border border-[#FEDCBE] rounded-xl p-3 bg-[#FFF7F0]">
                        <div className="bg-[#FFFFFF] p-4 rounded-xl">
                            <div className="flex items-center gap-2 mb-5">
                                <FiCreditCard size={16} className="text-[#1A9C9C]" />
                                <h3 className="text-[15px] font-semibold text-[#221E1F]">Choose Payment Method</h3>
                            </div>

                            <div className="space-y-3">
                                {paymentOptions.map((option) => {
                                    const isSelected = paymentMethod === option.id;
                                    const cardBg = {
                                        credit_card: 'bg-[#F6F6F6]',
                                        paypal: 'bg-[#FFF4EC]',
                                        gift_card: 'bg-[#F0FBF9]',
                                    }[option.id];
                                    const cardBorder = {
                                        credit_card: isSelected ? 'border-[#1A9C9C]' : 'border-[#DDDDDD]',
                                        paypal: isSelected ? 'border-[#E97034]' : 'border-[#DDDDDD]',
                                        gift_card: isSelected ? 'border-[#1A9C9C]' : 'border-[#DDDDDD]',
                                    }[option.id];

                                    return (
                                        <div key={option.id} className={`border rounded-md transition-colors ${cardBorder} ${isSelected ? cardBg : 'bg-[#F6F6F6]'}`}>
                                            {/* Radio header row */}
                                            <div
                                                onClick={() => setPaymentMethod(option.id)}
                                                className="flex items-center gap-4 px-4 py-3.5 cursor-pointer"
                                            >
                                                <div className={`w-4 h-4 rounded-full border-[1.5px] flex items-center justify-center flex-shrink-0 ${isSelected ? (option.id === 'paypal' ? 'border-[#E6934F]' : 'border-[#DDDDDD]') : 'border-[#CAD5E2]'}`}>
                                                    {isSelected && <div className={`w-2 h-2 rounded-full ${option.id === 'paypal' ? 'bg-[#E6934F]' : 'bg-[#1A9C9C]'}`}></div>}
                                                </div>
                                                <span className="text-[14px] text-[#334155] font-medium">{option.label}</span>
                                            </div>

                                            {/* Inline expanded form */}
                                            {isSelected && (
                                                <div className="px-4 pb-5 border-t border-dashed border-[#E0E0E0] pt-4 space-y-4">
                                                    {option.id === 'credit_card' && (
                                                        <>
                                                            <div className="flex flex-col gap-2">
                                                                <label className="text-[#334155] font-medium text-[13px]">Card Number</label>
                                                                <input type="text" placeholder="Enter card number" className="w-full bg-white border border-[#DDDDDD] rounded-md px-4 py-3 text-[14px] placeholder:text-[#C5D0DC] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]" />
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div className="flex flex-col gap-2">
                                                                    <label className="text-[#334155] font-medium text-[13px]">Expiry Date</label>
                                                                    <input type="text" placeholder="MM/YY" className="w-full bg-white border border-[#DDDDDD] rounded-md px-4 py-3 text-[14px] placeholder:text-[#C5D0DC] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]" />
                                                                </div>
                                                                <div className="flex flex-col gap-2">
                                                                    <label className="text-[#334155] font-medium text-[13px]">CVV</label>
                                                                    <input type="text" placeholder="123" maxLength={4} className="w-full bg-white border border-[#DDDDDD] rounded-md px-4 py-3 text-[14px] placeholder:text-[#C5D0DC] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]" />
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col gap-2">
                                                                <label className="text-[#334155] font-medium text-[13px]">Cardholder Name</label>
                                                                <input type="text" placeholder="Enter full name" className="w-full bg-white border border-[#DDDDDD] rounded-md px-4 py-3 text-[14px] placeholder:text-[#C5D0DC] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]" />
                                                            </div>
                                                        </>
                                                    )}

                                                    {option.id === 'paypal' && (
                                                        <>
                                                            <p className="text-[#62748E] text-[14px]">You'll be redirected to PayPal to complete your purchase securely.</p>
                                                            <button className="w-full bg-[#E6934F] hover:bg-orange-400 text-white py-3.5 rounded-md font-medium text-[15px] transition-colors cursor-pointer">
                                                                Pay with PayPal – ${(subtotal + tax).toFixed(1)}
                                                            </button>
                                                        </>
                                                    )}

                                                    {option.id === 'gift_card' && (
                                                        <div className="flex flex-col gap-2">
                                                            <label className="text-[#334155] font-medium text-[13px]">Gift Card Number</label>
                                                            <input type="text" placeholder="Enter your gift card number" className="w-full bg-white border border-[#DDDDDD] rounded-md px-4 py-3 text-[14px] placeholder:text-[#C5D0DC] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]" />
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Buttons */}
                <div className="flex gap-4 mt-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex-1 flex items-center justify-center gap-2 border border-[#E9EEF2] bg-white text-[#62748E] hover:bg-gray-50 rounded-md py-3.5 text-[15px] font-medium transition-colors cursor-pointer"
                    >
                        <FiArrowLeft size={18} /> Back
                    </button>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex-1 flex items-center justify-center gap-2 bg-[#1A9C9C] hover:bg-teal-700 text-white rounded-md py-3.5 text-[15px] font-medium transition-colors cursor-pointer shadow-sm"
                    >
                        Confirm Payment <FiArrowRight size={18} />
                    </button>
                </div>
            </div>

            {/* Order Confirm Modal */}
            <OrderConfirmModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default CompleteOrder;