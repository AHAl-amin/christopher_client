import React, { useRef } from 'react'
import { ShoppingBag } from 'lucide-react'
import onSaleData from '../../data/onSaleProducts.json'
import img from '../../../public/img/ice-cream.png'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { FiHeart } from 'react-icons/fi'

import product1 from '../../../public/img/Products/product1.png'
import product2 from '../../../public/img/Products/product2.png'
import product3 from '../../../public/img/Products/product3.png'

import product5 from '../../../public/img/Products/product5.png'
import product6 from '../../../public/img/Products/product6.png'
import product7 from '../../../public/img/Products/product7.png'
import product8 from '../../../public/img/Products/product8.png'

function OnSale() {
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

    const carouselRef = useRef(null)

    const scroll = (direction) => {
        if (carouselRef.current) {
            const container = carouselRef.current
            // scroll exactly the width of the container plus gap, so it advances by 2 full columns (4 cards)
            const scrollAmount = container.clientWidth + 24
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div>
            {/* Background Image Container */}
            <div className="bg-[url(https://res.cloudinary.com/dcpbtzues/image/upload/v1771410333/Rectangle_34624432_dltrnl.png)] bg-cover bg-center bg-no-repeat py-16 px-4 h-[80vh] relative">
                <div className="container mx-auto flex">
                    {/* Empty Space for the left side image */}
                    <div className="hidden lg:block w-1/3"></div>

                    {/* Right side Grid layout */}
                    <div className="w-full lg:w-2/3">
                        {/* Header */}
                        <div className="flex items-center justify-between py-8">
                            <h2 className="text-4xl text-[#F4264C] lusitana font-medium">On sale</h2>

                            {/* Navigation Arrows */}
                            <div className="flex gap-4">
                                <div className='bg-gradient-to-br w-[50px] h-[50px] from-[#F68528] to-[#39200B] rounded-full flex items-center justify-center'>
                                    <button
                                        onClick={() => scroll('left')}
                                        className="bg-[#111111] hover:bg-[#1f1f1f] text-gray-300 w-[46px] h-[46px] rounded-full flex flex-col items-center justify-center transition-all duration-300 cursor-pointer"
                                    >
                                        <FaArrowLeftLong size={14} />
                                    </button>
                                </div>
                                <div className='bg-gradient-to-bl w-[50px] h-[50px] from-[#F68528] to-[#39200B] rounded-full flex items-center justify-center'>
                                    <button
                                        onClick={() => scroll('right')}
                                        className="bg-[#111111] hover:bg-[#1f1f1f] text-gray-300 w-[46px] h-[46px] rounded-full flex flex-col items-center justify-center transition-all duration-300 cursor-pointer"
                                    >
                                        <FaArrowRightLong size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Carousel Container */}
                        <div className="relative overflow-hidden w-full">
                            <div
                                ref={carouselRef}
                                className="grid gap-6 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
                                style={{
                                    gridTemplateRows: 'repeat(2, 1fr)',
                                    gridAutoFlow: 'column',
                                    gridAutoColumns: 'calc(50% - 12px)',
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none'
                                }}
                            >
                                {Products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="bg-gradient-to-r from-[#2B2B2B] to-[#1E1E1E] rounded-md overflow-hidden relative group  flex shadow-2xl border border-[#3A3A3A]/40 h-[204px]"
                                    >
                                        {/* Product Image */}
                                        <div className="absolute right-0 bottom-0 w-[54%] h-full">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-contain transition-transform duration-500"
                                            />
                                            {/* Gradient Overlay to blend completely into the left card side */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#2B2B2B] via-[#2B2B2B]/60 to-transparent"></div>
                                        </div>

                                        {/* Product Info */}
                                        <div className="relative z-10 w-[65%] pl-6 pr-4 py-5 flex flex-col justify-center pointer-events-none">
                                            <h3 className="text-[20px] luxury text-[#E8E8E8] leading-tight mb-2 tracking-wide truncate">
                                                {product.name}
                                            </h3>
                                            <p className="text-[14px] font-semibold text-[#F68528] mb-5">
                                                From {product.price}
                                            </p>

                                            {/* Buttons */}
                                            <div className="flex items-center gap-3.5 pointer-events-auto mt-auto">
                                                <button className="bg-[#1A9C9C] hover:bg-[#158080] text-white text-[12px] font-medium py-1.5 px-3.5 rounded flex items-center gap-2 transition-colors cursor-pointer shadow-md">
                                                    Order Now
                                                    <ShoppingBag size={14} />
                                                </button>
                                                <button className="bg-white hover:bg-gray-100 text-[#454545] w-[30px] h-[30px] rounded-full flex items-center justify-center transition-colors shadow-md cursor-pointer border border-gray-100 relative group/heart">
                                                    <FiHeart size={15} className="group-hover/heart:fill-red-500 group-hover/heart:text-red-500 transition-colors" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Segment */}
            <div className='container mx-auto flex md:flex-row flex-col gap-10 py-10'>
                <div className='w-full md:w-1/2 flex items-center justify-center'>
                    <p className='lusitana text-4xl max-w-[500px] lg:leading-relaxed leading-10'>
                        “Everything about our <span className='text-[#1A9C9C]'>experience</span> was amazing, from pulling up to the valet, to the spectacular views, <span className='text-[#1A9C9C]'>top notch food, five star service </span>and sounds of the ocean while eating.”
                    </p>
                </div>
                <div className='w-full md:w-1/2'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default OnSale