import React, { useState, useMemo } from 'react'
import { Search, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import product1 from '../../../public/img/Products/product1.png'
import product2 from '../../../public/img/Products/product2.png'
import product3 from '../../../public/img/Products/product3.png'

import product5 from '../../../public/img/Products/product5.png'
import product6 from '../../../public/img/Products/product6.png'
import product7 from '../../../public/img/Products/product7.png'
import product8 from '../../../public/img/Products/product8.png'
import { IoMdHeartEmpty } from 'react-icons/io'
import { IoChevronForwardOutline } from 'react-icons/io5'


function RelatedProducts() {

    const navigate = useNavigate()





    const Products =
        [
            {
                "id": 1,
                "name": "Almond Icy",
                "description": "Coconut and milk chocolate",
                "price": 6.79,
                "image": product1,
                "category": "Gluten Free,Dairy Free Capable, Chunky, Lactose Free Capable  ",
                "type": "featured",
                "badges": []
            },
            {
                "id": 2,
                "name": "Apple Cinnamon Cheesecake",
                "description": "Creamy cheesecake infused with apples and cinnamon",
                "price": 6.79,
                "image": product2,
                "category": "Recommended Flavors, Chunky",
                "type": "featured",
                "badges": [
                    "popular",
                    "bestseller"
                ]
            },
            {
                "id": 3,
                "name": "Apple Cider",
                "description": "A taste of autumn, all year long",
                "price": 6.79,
                "image": product3,
                "category": "Smooth,Gluten Free ",
                "type": "featured",
                "badges": []
            },
            {
                "id": 4,
                "name": "Apple Cider",
                "description": "A taste of autumn, all year long",
                "price": 6.79,
                "image": product2,
                "category": "Smooth,Gluten Free ",
                "type": "featured",
                "badges": []
            },
            {
                "id": 5,
                "name": "King Cake",
                "description": "Oh it's Mardi Gras...",
                "price": 6.79,
                "image": product5,
                "category": "Gluten Free, Dairy Free Capable, Chunky, Lactose Free Capable",
                "type": "featured",
                "badges": []
            },
            {
                "id": 6,
                "name": "King Cake",
                "description": "Oh it's Mardi Gras...",
                "price": 6.79,
                "image": product6,
                "category": "Gluten Free, Dairy Free Capable, Chunky, Lactose Free Capable",
                "type": "bestseller",
                "badges": []
            },
            {
                "id": 7,
                "name": "Cinnamon Toast Crunch",
                "description": "Taste the spiced, toasty flavor hidden in the bowl - in every sip",
                "price": 6.79,
                "image": product7,
                "category": "Limited Time",
                "type": "featured",
                "badges": []
            },
            {
                "id": 8,
                "name": "Cinnamon Toast Crunch",
                "description": "Taste the spiced, toasty flavor hidden in the bowl - in every sip",
                "price": 6.79,
                "image": product8,
                "category": "Limited Time",
                "type": "bestseller",
                "badges": []
            },


        ]


    // Filter and search functionality


    return (
        <div className='container mx-auto '>
            <div className="  ">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-12 border-b border-dashed border-[#CAD5E2] pb-6">
                    <h1 className="lusitana text-4xl font-medium text-[#221E1F]">Related Products</h1>



                </div>

                {/* Main Grid: Sidebar + Products */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">


                    {/* Products Section */}
                    <div className="lg:col-span-4">
                        {/* Products Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                            {Products.length > 0 ? (
                                Products.map((product) => (
                                    <div
                                        key={product.id}
                                        onClick={() => navigate(`/menu/${product.id}`)}
                                        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow transition-all duration-300 transform cursor-pointer border border-[#E9E9E9] relative "
                                    >
                                        {/* Hover Overlay with Buttons */}
                                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-20 rounded-2xl pointer-events-none"></div>

                                        <div className="absolute inset-0 flex items-center justify-center h-full z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className='flex justify-center gap-2 items-center'>
                                                <button className="w-12 h-12 bg-teal-500 hover:bg-teal-600 rounded-full flex items-center justify-center text-white font-bold transition-colors">
                                                    <ShoppingBag size={18} />
                                                </button>

                                                <button className="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white font-bold transition-colors">
                                                    <IoMdHeartEmpty size={18} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Image Container */}
                                        <div
                                            className="
                                         absolute
                                       -top-[80%]
                                      -left-[70%]
                                   w-[600px]
                                     h-[600px]
                                      rounded-full
                                  blur-[150px]
                                     opacity-30
                                             z-0
                                                 bg-[radial-gradient(circle,_#1A9C9C_0%,_rgba(36,156,156,0.3)_70%,_transparent_100%)]
                        "

                                        ></div>
                                        <div className="relative  flex justify-center items-center">

                                            <div className={product.id === 7 ? 'h-[360px] p-6 w-auto overflow-hidden' : 'h-[360px] w-[220px] overflow-hidden'}>
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover  transition-transform duration-300 "
                                                />


                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4 h-full bg-[#FEF8F4] flex flex-row-reverse justify-center gap-4">
                                            <div className=" mt-10">
                                                <span className="text-[#EB2D50] lusitana   text-3xl">
                                                    ${product.price.toFixed(2)}
                                                </span>

                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-[#000000] text-2xl lusitana mb-2 line-clamp-2">
                                                    {product.name}
                                                </h3>

                                                <p className="text-base text-gray-500 mb-3 line-clamp-2">
                                                    {product.description}
                                                </p>

                                                {/* Price and Add to Cart */}


                                                {/* Category Tags */}
                                                <div className="flex gap-2 mt-3 flex-wrap">
                                                    {product.category && (
                                                        product.category.split(',').map((cat, idx) => (
                                                            <span key={idx} className="text-xs bg-[#FFFFFF] text-[#F68528] px-2 py-1 rounded">
                                                                {cat.trim()}
                                                            </span>
                                                        ))
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-12">
                                    <p className="text-gray-500 text-lg">No products found matching your search.</p>
                                </div>
                            )}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedProducts