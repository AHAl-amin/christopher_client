import React, { useState, useMemo } from 'react'
import { Search, ShoppingBag } from 'lucide-react'

import product1 from '../../../public/img/Products/product1.png'
import product2 from '../../../public/img/Products/product2.png'
import product3 from '../../../public/img/Products/product3.png'

import product5 from '../../../public/img/Products/product5.png'
import product6 from '../../../public/img/Products/product6.png'
import product7 from '../../../public/img/Products/product7.png'
import product8 from '../../../public/img/Products/product8.png'
import { IoMdHeartEmpty } from 'react-icons/io'


function MyBucketAndOrder() {
    const [activeTab, setActiveTab] = useState('All');
    const [orderedItems, setOrderedItems] = useState([2, 5, 6, 9]); // Setting initial mock ordered items to match images

    // Helper toggle function
    const toggleOrdered = (productId) => {
        setOrderedItems(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        )
    }





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
            {
                "id": 9,
                "name": "Chocolate Cupcake",
                "description": "Yummy chocolate cupcakes in your shake",
                "price": 6.79,
                "image": product8,
                "category": "dessert",
                "type": "featured",
                "badges": []
            },
            {
                "id": 10,
                "name": "Caramel Brownie",
                "description": "Chocolatey brownie and caramel blended to perfection",
                "price": 6.79,
                "image": product1,
                "category": "featured",
                "type": "latest",
                "badges": []
            },
            {
                "id": 11,
                "name": "Caramel Brownie",
                "description": "Chocolatey brownie and caramel blended to perfection",
                "price": 6.79,
                "image": product2,
                "category": "dessert",
                "type": "latest",
                "badges": []
            },
            {
                "id": 12,
                "name": "Butterbeer",
                "description": "Root Beer, Butterscotch, Cream",
                "price": 6.79,
                "image": product3,
                "category": "drink",
                "type": "featured",
                "badges": []
            }

        ]

    const filteredProducts = Products.filter(product => {
        if (activeTab === 'All') return true;
        if (activeTab === 'My Bucket') return !orderedItems.includes(product.id);
        if (activeTab === 'Ordered') return orderedItems.includes(product.id);
        return true;
    });

    return (
        <div className="container mx-auto md:px-0 px-6 py-16">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-12 border-b border-dashed border-[#CAD5E2] pb-6">

                {/* Toggle Group */}
                <div className="flex bg-white rounded-md p-1 shadow-sm border border-gray-100">
                    {['All', 'My Bucket', 'Ordered'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-md text-[14px] font-medium transition-colors cursor-pointer ${activeTab === tab ? 'bg-[#F68528] text-white' : 'text-[#62748E] hover:bg-gray-50'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

            </div>


            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => {
                        const isOrdered = orderedItems.includes(product.id);

                        return (
                            <div
                                key={product.id}
                                className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow transition-all duration-300 transform cursor-pointer border ${isOrdered ? 'border-[#11A231] border-2' : 'border-[#E9E9E9]'} relative flex flex-col`}
                            >




                                <button className="absolute top-4 right-4 w-9 h-9 bg-[#F68528] hover:bg-orange-600 rounded-full flex items-center justify-center text-white font-bold transition-colors z-10">
                                    <IoMdHeartEmpty size={18} />
                                </button>


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
                                <div className="p-4 bg-[#FEF8F4] flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-semibold text-[#000000] text-xl lusitana line-clamp-2 max-w-[70%]">
                                            {product.name}
                                        </h3>
                                        <span className="text-[#EB2D50] lusitana text-2xl">
                                            ${product.price.toFixed(2)}
                                        </span>
                                    </div>

                                    <p className="text-sm text-gray-500 mb-3 line-clamp-2 flex-grow">
                                        {product.description}
                                    </p>

                                    {/* Category Tags */}
                                    <div className="flex gap-2 mt-auto mb-4 flex-wrap">
                                        {product.category && (
                                            product.category.split(',').map((cat, idx) => (
                                                <span key={idx} className="text-[10px] bg-white  text-[#F68528] px-2 py-0.5 rounded">
                                                    {cat.trim()}
                                                </span>
                                            ))
                                        )}
                                    </div>

                                    {isOrdered ? (
                                        <div className='flex gap-2 mt-2'>
                                            <button
                                                className='flex-1 border border-[#1A9C9C]  py-2 rounded-md font-medium text-sm transition-colors cursor-pointer hover:bg-teal-50 bg-[#11A2311A] text-[#11A231]'
                                            >
                                                Mark as Ordered
                                            </button>
                                            <button
                                                onClick={() => toggleOrdered(product.id)}
                                                className='flex-1 bg-[#EAEAEA] text-[#62748E] hover:bg-gray-200 py-2 rounded-md font-medium text-sm transition-colors cursor-pointer'
                                            >
                                                Undo
                                            </button>
                                        </div>
                                    ) : (
                                        <button className="w-full bg-white border border-[#1A9C9C] text-[#1A9C9C] py-2 rounded-md font-medium text-sm hover:bg-teal-50 transition-colors mt-2 cursor-pointer">
                                            Add to Cart
                                        </button>
                                    )}
                                </div>

                            </div>
                        )
                    })
                ) : (
                    <div className="col-span-full text-center py-12">
                        <p className="text-gray-500 text-lg">No products found matching your search.</p>
                    </div>
                )}
            </div>


        </div>
    )
}

export default MyBucketAndOrder