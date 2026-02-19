import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react'
import onSaleData from '../../data/onSaleProducts.json'
import img from '../../../public/img/ice-cream.png'

function OnSale() {
    const [scrollPosition, setScrollPosition] = useState(0)
    const products = onSaleData.onSaleProducts

    const scroll = (direction) => {
        const container = document.getElementById('carousel-container')
        const cardWidth = 320
        const gap = 24

        if (direction === 'left') {
            setScrollPosition(Math.max(0, scrollPosition - (cardWidth + gap)))
        } else {
            const maxScroll = (products.length - 3) * (cardWidth + gap)
            setScrollPosition(Math.min(maxScroll, scrollPosition + (cardWidth + gap)))
        }

        if (container) {
            container.scrollLeft = direction === 'left'
                ? container.scrollLeft - (cardWidth + gap)
                : container.scrollLeft + (cardWidth + gap)
        }
    }

    return (
        <div>
            <div className="bg-[url(https://res.cloudinary.com/dcpbtzues/image/upload/v1771410333/Rectangle_34624432_dltrnl.png)] bg-cover bg-center bg-no-repeat py-16 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-4xl font-bold text-pink-500">On sale</h2>

                        {/* Navigation Arrows */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => scroll('left')}
                                className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative overflow-hidden">
                        <div
                            id="carousel-container"
                            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
                            style={{ scrollBehavior: 'smooth' }}
                        >
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex-shrink-0 w-80 bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                                >
                                    {/* Product Image */}
                                    <div className="relative h-64 overflow-hidden bg-gray-700">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        {/* Dark Overlay on Hover */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                                    </div>

                                    {/* Product Info */}
                                    <div className="p-6 space-y-4">
                                        {/* Name and Category */}
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {product.name}
                                            </h3>
                                            <p className="text-sm text-gray-400">
                                                {product.category}
                                            </p>
                                        </div>

                                        {/* Price */}
                                        <div className="text-2xl font-bold text-pink-500">
                                            {product.price}
                                        </div>

                                        {/* Buy Now Button */}
                                        <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-lg inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105">
                                            Buy Now
                                            <ShoppingBag size={18} />
                                        </button>

                                        {/* Quantity Selector (Optional) */}
                                        <div className="flex items-center gap-3 pt-2">
                                            <button className="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded flex items-center justify-center transition-colors">
                                                −
                                            </button>
                                            <span className="text-white font-semibold">1</span>
                                            <button className="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded flex items-center justify-center transition-colors">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scrollbar Visual Indicator */}
                    <div className="w-full h-1 bg-gray-700 rounded-full mt-6">
                        <div
                            className="h-full bg-teal-600 rounded-full transition-all duration-300"
                            style={{
                                width: `${((scrollPosition + 960) / ((products.length - 3) * 344)) * 100}%`
                            }}
                        ></div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto flex md:flex-row flex-col gap-10 py-10'>
                <div className='w-full md:w-1/2 flex items-center justify-center'>
                    <p className='lusitana text-4xl max-w-[500px]  lg:leading-relaxed leading-10'>“Everything about our <span className='text-[#1A9C9C]'>experience</span>  was amazing, from pulling up to the valet, to the spectacular views, <span className='text-[#1A9C9C]'>top notch food, five star service </span>and sounds of the ocean while eating.”</p>
                </div>
                <div className='w-full md:w-1/2'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default OnSale