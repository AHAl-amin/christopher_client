import React, { useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { CiCirclePlus } from 'react-icons/ci';
import GiftCardModal from './GiftCardModal';

const YourOrder = ({ onAddClick }) => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const giftCards = [
        { id: 1, number: '123-456-789', balance: 250.00, added: 'Jan 15, 2024' },
        { id: 2, number: '123-456-789', balance: 175.50, added: 'Feb 3, 2024' },
        { id: 3, number: '123-456-789', balance: 0.00, added: 'Feb 7, 2026' },
    ];

    const openModal = (card) => {
        setSelectedCard(card);
        setIsModalOpen(true);
    };

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-0 py-16">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-4xl font-medium text-[#221E1F] lusitana mb-3">Your Order</h2>
                    <p className="text-[#62748E] font-medium text-[15px]">{giftCards.length} gift cards linked</p>
                </div>
                <button
                    onClick={onAddClick}
                    className="bg-[#E48B4B] hover:bg-orange-400 text-white rounded-md px-6 py-2.5 text-[14px] font-medium flex items-center gap-2 transition-colors cursor-pointer w-fit"
                >
                    Add a Gift Card <CiCirclePlus size={18} strokeWidth={1} />
                </button>
            </div>

            {/* Divider */}
            <div className="border-b border-dashed border-[#CAD5E2] mb-10"></div>

            {/* Gift Cards List */}
            <div className="space-y-4">
                {giftCards.map((card) => (
                    <div
                        key={card.id}
                        onClick={() => openModal(card)}
                        className="bg-[#F8FAFC] border border-[#D3E0EE] rounded-[16px] p-6 flex items-center justify-between shadow-[0_2px_4px_rgba(0,0,0,0.01)] hover:shadow-md transition-shadow cursor-pointer"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full pr-8">
                            <div className="flex flex-col gap-2">
                                <p className="text-[#899AB1] text-[14px] font-medium">Gift Card</p>
                                <p className="font-bold text-[#221E1F] text-[16px]">{card.number}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-[#899AB1] text-[14px] font-medium">Available Balance</p>
                                <p className="font-bold text-[#E48B4B] text-[16px]">
                                    ${card.balance.toFixed(2)}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-[#899AB1] text-[14px] font-medium">Card Added</p>
                                <p className="font-bold text-[#221E1F] text-[16px]">{card.added}</p>
                            </div>
                        </div>
                        <button className="text-[#899AB1] hover:text-[#221E1F] transition-colors cursor-pointer self-start md:self-center mt-2 md:mt-0">
                            <FiMoreVertical size={20} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Transaction Modal */}
            <GiftCardModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                giftCard={selectedCard}
            />
        </div>
    );
};

export default YourOrder;