import React from 'react';
import { FiCheckCircle, FiXCircle, FiDownload, FiClock, FiCreditCard } from 'react-icons/fi';

const OrderHistory = () => {
    const orders = [
        {
            id: 1,
            status: 'Confirmed',
            date: 'February 7, 2026',
            items: [
                'Caramel Brownie Shek (2x)',
                'Vanilla Dream Shake',
                'Chocolate Chip Cookie'
            ],
            amount: 32.50,
            pickupTime: 'Today, 3:00PM',
            orderNumber: '#JS2026-0123',
            txReference: 'TXN-20260207-45892'
        },
        {
            id: 2,
            status: 'Failed',
            date: 'February 3, 2026',
            items: [
                'Peanut Butter Shek',
                'Cookies & Cream Shake'
            ],
            amount: 24.00,
            pickupTime: null,
            orderNumber: '#JS2026-0123',
            txReference: 'TXN-20260203-29384',
            errorMessage: 'Payment Failed: Your card was declined. Please update your payment method and try again.'
        }
    ];

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
                                Order History
                            </h1>
                            <p className="text-lg text-[#62748E] leading-relaxed max-w-lg">
                                View all your past orders, including details and receipts. Easily track your previous purchases and re-order your favorites
                            </p>


                        </div>
                    </div>

                    {/* Image Space */}
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-0 py-16">
                <div className="mb-6">
                    <h2 className="text-4xl font-medium text-[#221E1F] lusitana mb-2">Your Order</h2>
                    <p className="text-[#62748E] font-medium text-[15px]">Showing {orders.length} orders</p>
                </div>

                <div className="space-y-6">
                    {orders.map((order) => (
                        <div key={order.id} className="bg-[#F8FAFC] border border-[#D3E0EE] rounded-[16px] p-6 lg:p-8 shadow-[0_2px_4px_rgba(0,0,0,0.01)] transition-shadow">

                            {/* Header */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    {order.status === 'Confirmed' ? (
                                        <div className="bg-[#E6F5F5] rounded-full p-0.5">
                                            <FiCheckCircle className="text-[#1A9C9C] text-xl" />
                                        </div>
                                    ) : (
                                        <div className="bg-[#FDECEE] rounded-full p-0.5">
                                            <FiXCircle className="text-[#FA3E5A] text-xl" />
                                        </div>
                                    )}
                                    <div>
                                        <h3 className="font-bold text-[#221E1F] text-[16px]">
                                            Order {order.status}
                                        </h3>
                                        <p className="text-[#899AB1] text-[13px]">{order.date}</p>
                                    </div>
                                </div>
                                <button className="text-[#1FC896] hover:text-[#179B74] transition-colors cursor-pointer">
                                    <FiDownload className="text-2xl" strokeWidth={2.5} />
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="border-b border-dashed border-[#CAD5E2] mb-6"></div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                {/* Left Column */}
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-[#221E1F] text-[15px] mb-2">Order Items:</h4>
                                        <ul className="text-[#899AB1] text-[14px] space-y-1">
                                            {order.items.map((item, idx) => (
                                                <li key={idx}>• {item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-[#221E1F] text-[15px] mb-2">Transaction Amount</h4>
                                        <div className="flex items-center gap-2 text-[#E48B4B] font-bold">
                                            <FiCreditCard size={18} />
                                            <span>${order.amount.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    {order.pickupTime && (
                                        <div>
                                            <h4 className="font-bold text-[#221E1F] text-[15px] mb-2">Pickup Time</h4>
                                            <div className="flex items-center gap-2 text-[#1A9C9C] text-[14px]">
                                                <FiClock size={16} />
                                                <span>{order.pickupTime}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Right Column */}
                                <div className="space-y-6 md:pl-8">
                                    <div>
                                        <p className="text-[#899AB1] text-[13px] mb-1">Order Number</p>
                                        <p className="font-bold text-[#62748E] text-[15px]">{order.orderNumber}</p>
                                    </div>
                                    <div>
                                        <p className="text-[#899AB1] text-[13px] mb-1">Transaction Reference</p>
                                        <p className="font-bold text-[#62748E] text-[14px]">{order.txReference}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Error Message if Failed */}
                            {order.status === 'Failed' && order.errorMessage && (
                                <>
                                    <div className="border-b border-dashed border-[#CAD5E2] mb-6"></div>
                                    <div className="bg-[#FAE4E7] px-5 py-4 rounded-md mb-8">
                                        {(() => {
                                            const [title, ...rest] = order.errorMessage.split(':');
                                            return (
                                                <p className="text-[#62748E] text-[14px] leading-relaxed">
                                                    <span className="font-semibold text-[#FA3E5A]">{title}:</span>{rest.join(':')}
                                                </p>
                                            );
                                        })()}
                                    </div>
                                </>
                            )}

                            {/* Action Button */}
                            <div className="flex justify-center">
                                <button className="bg-[#1A9C9C] hover:bg-teal-700 text-white font-medium text-[15px] py-3 rounded-md transition-colors w-full md:w-[60%] lg:w-[400px] cursor-pointer shadow-sm">
                                    Order Again
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrderHistory;