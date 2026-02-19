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


function MenuProduct() {

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

    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All Products')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6

    const categories = [
        'All Products',
        'Original Shakes',
        'Smoothies',
        'Protein Shakes',
        'Bold Series',
        'Top Sellers',
        'Duo Shakes',
        'Classic Shakes',
        'Iced Shakes',
        'Low-Carb Shakes',
        'Drinks',
        'Floats',
        'Shots',
        'Merch'
    ]

    // Filter and search functionality
    const filteredProducts = useMemo(() => {
        let filtered = Products;

        // Filter by category
        if (selectedCategory !== 'All Products') {
            filtered = filtered.filter(product =>
                product.category.toLowerCase().includes(selectedCategory.toLowerCase())
            )
        }

        // Filter by search term
        if (searchTerm.trim()) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.category.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        return filtered
    }, [searchTerm, selectedCategory])

    // Pagination logic
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

    // Reset to page 1 when filters change
    React.useEffect(() => {
        setCurrentPage(1)
    }, [searchTerm, selectedCategory])

    const handleExploreMenu = () => {
        // Navigate to menu page or scroll to menu section
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }

    return (
        <div className="container mx-auto md:px-0 px-6 py-16">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-12 border-b border-dashed border-[#CAD5E2] pb-6">
                <h1 className="lusitana text-4xl font-medium text-[#221E1F]">Menu</h1>

                {/* Search Bar */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search....."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-4 pr-10 py-2 bg-gray-100 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 w-56"
                    />
                    <Search size={18} className="absolute right-3 top-2.5 text-gray-400" />
                </div>
            </div>

            {/* Main Grid: Sidebar + Products */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Sidebar - Categories */}
                <div>
                    <div className="lg:col-span-1 border border-[#C9D8E0] rounded p-4 bg-[#F5F7F8]">
                        <h3 className="text-2xl font-semibold text-[#221E1F] lusitana mb-6">Categories</h3>
                        <div className="space-y-3">
                            {categories.map((category, index) => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setSelectedCategory(category)
                                        setCurrentPage(1)
                                    }}
                                    className={`block w-full text-left px-4 py-2  transition-colors ${index !== categories.length - 1 ? 'border-b border-[#D1D5DC]/40' : ''} ${selectedCategory === category
                                        ? 'text-[#1A9C9C]  font-medium'
                                        : 'text-[#4A5565] hover:bg-gray-100'
                                        }`}
                                >
                                    {category}
                                    <span className="float-right"><IoChevronForwardOutline /></span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Products Section */}
                <div className="lg:col-span-4">
                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {paginatedProducts.length > 0 ? (
                            paginatedProducts.map((product) => (
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

                    {/* Pagination */}
                    {filteredProducts.length > 0 && (
                        <div className="flex justify-center items-center gap-2 mt-12">
                            {/* Previous Button */}
                            <button
                                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            {/* Page Numbers */}
                            <div className="flex gap-2 items-center">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${currentPage === page
                                            ? 'bg-[#1A9C9C] text-white'
                                            : 'border border-gray-300 text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MenuProduct