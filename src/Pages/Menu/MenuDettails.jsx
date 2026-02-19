import React from 'react'
import { useParams } from 'react-router-dom'
import { ShoppingBag, Heart, ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { IoMdHeartEmpty } from 'react-icons/io'
import MenuBanner from './MenuBanner'

import product1 from '../../../public/img/Products/product1.png'
import product2 from '../../../public/img/Products/product2.png'
import product3 from '../../../public/img/Products/product3.png'
import product5 from '../../../public/img/Products/product5.png'
import product6 from '../../../public/img/Products/product6.png'
import product7 from '../../../public/img/Products/product7.png'
import product8 from '../../../public/img/Products/product8.png'

function MenuDettails() {
    const { id } = useParams()
    const navigate = useNavigate()

    const Products = [
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
            "badges": ["popular", "bestseller"]
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

    const product = Products.find(p => p.id === parseInt(id))

    if (!product) {
        return (
            <div className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Product not found</h2>
                <button
                    onClick={() => navigate('/menu')}
                    className="bg-[#1A9C9C] text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors"
                >
                    Back to Menu
                </button>
            </div>
        )
    }

    return (
        <div>
            <MenuBanner />
            <div className="container mx-auto px-6 py-16">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/menu')}
                    className="flex items-center gap-2 text-[#1A9C9C] hover:text-teal-700 mb-8 font-semibold"
                >
                    <ChevronLeft size={20} />
                    Back to Menu
                </button>

                {/* Product Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <div className="flex justify-center items-center">
                        <div className="relative">
                            <div
                                className="absolute -top-[100px] -left-[100px] w-[600px] h-[600px] rounded-full blur-[150px] opacity-30 z-0 bg-[radial-gradient(circle,_#1A9C9C_0%,_rgba(36,156,156,0.3)_70%,_transparent_100%)]"
                            ></div>
                            <div className="relative z-10 flex justify-center items-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full max-w-[400px] object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center">
                        <h1 className="lusitana text-4xl font-medium text-[#221E1F] mb-4">
                            {product.name}
                        </h1>

                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            {product.description}
                        </p>

                        {/* Badges */}
                        {product.badges && product.badges.length > 0 && (
                            <div className="flex gap-3 mb-6">
                                {product.badges.map((badge, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-[#EB2D50] text-white px-4 py-1 rounded-full text-sm font-semibold capitalize"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Category Tags */}
                        <div className="flex gap-2 mb-8 flex-wrap">
                            {product.category && (
                                product.category.split(',').map((cat, idx) => (
                                    <span key={idx} className="bg-[#FFFFFF] text-[#F68528] px-3 py-1 rounded border border-[#F68528]">
                                        {cat.trim()}
                                    </span>
                                ))
                            )}
                        </div>

                        {/* Price */}
                        <div className="mb-8">
                            <p className="text-sm text-gray-500 mb-2">Price</p>
                            <p className="lusitana text-5xl font-medium text-[#EB2D50]">
                                ${product.price.toFixed(2)}
                            </p>
                        </div>

                        {/* Quantity Selector */}
                        <div className="flex items-center gap-4 mb-8">
                            <p className="text-gray-700 font-semibold">Quantity:</p>
                            <div className="flex items-center border border-gray-300 rounded-lg">
                                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100">-</button>
                                <input
                                    type="number"
                                    defaultValue="1"
                                    className="w-12 text-center border-l border-r border-gray-300 py-2 focus:outline-none"
                                />
                                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100">+</button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <button className="flex-1 bg-[#1A9C9C] text-white py-3 rounded-full flex items-center justify-center gap-2 font-semibold hover:bg-teal-700 transition-colors">
                                <ShoppingBag size={20} />
                                Add to Cart
                            </button>
                            <button className="w-14 h-14 border-2 border-[#F68528] text-[#F68528] rounded-full flex items-center justify-center hover:bg-orange-50 transition-colors">
                                <IoMdHeartEmpty size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuDettails