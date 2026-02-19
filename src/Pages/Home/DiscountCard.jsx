import React from 'react'
import { ShoppingBag } from 'lucide-react'
import discountCardsData from '../../data/discountCards.json'

function DiscountCard() {
    return (
        <div className="bg-[#1B1B1B] px-4 py-16">
            <div className="max-w-7xl mx-auto">
                {/* Discount Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {discountCardsData.discountCards.map((card) => (
                        <div
                            key={card.id}
                            className="relative h-70 bg-[#EFF6F7]   "
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute right-0 bottom-0">
                                <img
                                    src={card.image}
                                    alt={card.name}
                                    className="w-full h-full object-cover "
                                />
                             
                            </div>

                            {/* Content Container */}
                            <div className="relative h-full flex items-stretch">
                                {/* Left Content Side - White/Light Background */}
                                <div className=" p-8 flex flex-col justify-between">
                                    {/* Discount Badge */}
                                    <div className="absolute top-0 left-0 bg-[#EB2D50] text-white px-5 py-1 rounded-br-full font-semibold text-sm">
                                        {card.discount}
                                    </div>

                                    {/* Title and Price */}
                                    <div className="mt-8">
                                        <h2 className="lusitana text-3xl font-bold text-gray-900 mb-2">
                                            {card.name}
                                        </h2>
                                        <p className="text-[#F68528] font-medium text-lg">
                                            From {card.price}
                                        </p>
                                    </div>

                                    {/* Order Button */}
                                    <button className="buton hover:bg-teal-700 text-white  py-2 px-6 rounded-lg inline-flex items-center gap-2 transition-all duration-300 transform hover:scale-105 w-fit">
                                        Order Now
                                        <ShoppingBag size={18} />
                                    </button>
                                </div>

                           
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DiscountCard