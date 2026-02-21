import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShoppingBag, Heart, ChevronLeft, ChevronDown, X } from 'lucide-react'
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
import menuImage from '../../../public/img/menuimg.png'

import RelatedProducts from './RelatedProducts'
import { CiClock2 } from 'react-icons/ci'
import { IoCheckmarkSharp } from 'react-icons/io5'

function MenuDettails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(1)
    const [expandedSections, setExpandedSections] = useState({
        size: true,
        dairyLactose: false,
        alternativeMilk: false,
        shakeOptions: false
    })
    const [selectedOptions, setSelectedOptions] = useState({
        size: null,
        dairyLactose: [],
        alternativeMilk: [],
        shakeOptions: []
    })
    const [shakeError, setShakeError] = useState(false)
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    // Customization data
    const customizationData = {
        sizes: [
            { id: 'small', name: 'Small', price: 0, label: 'Small' },
            { id: 'medium', name: 'Medium', price: 0, label: 'Medium' },
            { id: 'large', name: 'Large', price: 0.50, label: 'Large' }
        ],
        dairyLactose: [
            { id: 'regular-milk', name: 'Regular Milk', price: 0, image: product1 },
            { id: 'oat-milk', name: 'Oat Milk', price: 0.75, image: product2 }
        ],
        alternativeMilk: [
            { id: 'almond-milk', name: 'Almond Milk', price: 0.75, image: product1 },
            { id: 'coconut-milk', name: 'Coconut Milk', price: 0.75, image: product2 },
            { id: 'soy-milk', name: 'Soy Milk', price: 0.75, image: product3 }
        ],
        shakeOptions: [
            { id: 'whipped-cream', name: 'Whipped Cream', price: 0.50, image: product5 },
            { id: 'cake', name: 'Cake', price: 1.00, image: product6 },
            { id: 'choco', name: 'Chocolate', price: 0.75, image: product7 },
            { id: 'banana', name: 'Banana', price: 0.50, image: product8 },
            { id: 'brownies', name: 'Brownies', price: 1.00, image: product5 },
            { id: 'sprinkles', name: 'Sprinkles', price: 0.25, image: product1 }
        ]
    }

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

    const calculateSubtotal = () => {
        if (!product) return 0;
        let total = product.price

        if (selectedOptions.size) {
            const sizeOption = customizationData.sizes.find(s => s.id === selectedOptions.size)
            if (sizeOption) total += sizeOption.price
        }

        ['dairyLactose', 'alternativeMilk', 'shakeOptions'].forEach(category => {
            if (Array.isArray(selectedOptions[category])) {
                selectedOptions[category].forEach(opt => {
                    total += opt.price
                })
            }
        })

        return (total * quantity).toFixed(2)
    }

    const getAllAddons = () => {
        let addons = []
        if (Array.isArray(selectedOptions.dairyLactose)) addons = [...addons, ...selectedOptions.dairyLactose.map(o => o.name)]
        if (Array.isArray(selectedOptions.alternativeMilk)) addons = [...addons, ...selectedOptions.alternativeMilk.map(o => o.name)]
        if (Array.isArray(selectedOptions.shakeOptions)) addons = [...addons, ...selectedOptions.shakeOptions.map(o => o.name)]
        return addons.join(', ')
    }

    const getSizeName = () => {
        if (!selectedOptions.size) return 'Small'
        const sizeOption = customizationData.sizes.find(s => s.id === selectedOptions.size)
        return sizeOption ? sizeOption.name : 'Small'
    }

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

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }))
    }

    const handleOptionSelect = (category, option) => {
        setSelectedOptions(prev => {
            const currentOptions = prev[category] || []
            const isAlreadySelected = Array.isArray(currentOptions) && currentOptions.some(o => o.id === option.id)

            if (isAlreadySelected) {
                // Remove the option if already selected
                setShakeError(false)
                return {
                    ...prev,
                    [category]: currentOptions.filter(o => o.id !== option.id)
                }
            } else if (category === 'shakeOptions' && Array.isArray(currentOptions) && currentOptions.length >= 3) {
                // Show error only for shake options if trying to add 4th option
                setShakeError(true)
                setTimeout(() => setShakeError(false), 3000)
                return prev
            } else {
                // Add new option for arrays
                setShakeError(false)
                return {
                    ...prev,
                    [category]: Array.isArray(currentOptions) ? [...currentOptions, option] : [option]
                }
            }
        })
    }

    const OptionCard = ({ option, isSelected, onClick, isSize = false }) => (
        <div
            onClick={onClick}
            className={`flex flex-col items-center pt-4 rounded-lg border-2 cursor-pointer transition-all relative ${isSelected
                ? 'border-[#11A231] bg-[#F8FBFC]'
                : 'border-[#E5E5E5] bg-[#F8FBFC] hover:border-gray-300'
                }`}
        >
            {option.image && !isSize && (
                <img
                    src={option.image}
                    alt={option.name}
                    className="w-24 h-24 object-cover rounded mb-2"
                />
            )}
            {isSize && (
                <img
                    src={menuImage}
                    alt={option.name}
                    className="w-20 h-24 object-cover rounded mb-2"
                />
            )}
            <div className='bg-[#013A3A] flex justify-between w-full p-2 rounded-b-md'>
                <span className="text-sm  text-[#ffffff] text-center">{option.name}</span>
                <span className="text-xs text-[#F2B27D] font-semibold mt-1">${option.price.toFixed(2)}</span>
            </div>


            {isSelected && (
                <span className="mt-2 w-5 h-5 rounded-full bg-[#11A231] flex items-center justify-center absolute top-0 right-2">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </span>
            )}
        </div>
    )

    const CustomizationSection = ({ title, category, options, selectedValue, isSize = false }) => {
        if (isSize) {
            return (
                <div className="mb-6">
                    <h3 className="md:text-4xl text-3xl lusitana font-medium text-[#314158] mb-4">{title}</h3>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                        {options.map(option => (
                            <OptionCard
                                key={option.id}
                                option={option}
                                isSize={true}
                                isSelected={selectedValue === option.id}
                                onClick={() => handleOptionSelect('size', option.id)}
                            />
                        ))}
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="text-[#1A9C9C] hover:text-teal-700 text-lg font-semibold">
                            Add - Ones
                        </button>
                        <button className="text-[#F68528] hover:text-orange-600 text-lg font-semibold underline cursor-pointer">
                            View Nutrition Facts
                        </button>
                    </div>
                </div>
            )
        }

        return (
            <div className={`border border-gray-200 rounded-lg mb-4 overflow-hidden ${category === 'alternativeMilk' ? 'bg-[#F685280D]' : 'bg-white'}`}>
                <button
                    onClick={() => toggleSection(category)}
                    className={`w-full flex items-center justify-between p-4  hover:bg-gray-50 transition-colors ${category === 'alternativeMilk' ? '' : ''}`}
                >
                    <span className="font-semibold text-[#314158]">{title}</span>
                    <ChevronDown
                        size={20}
                        className={`text-gray-600 transition-transform ${expandedSections[category] ? 'rotate-180' : ''
                            }`}
                    />
                </button>

                {expandedSections[category] && (
                    <div className="p-6 border-t border-dashed border-gray-200">
                        {category === 'shakeOptions' && shakeError && (
                            <div className="mb-4 p-4 bg-pink-100 border border-pink-300 rounded-lg flex items-center gap-2">
                                <svg className="w-5 h-5 text-pink-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.47 4.47a.75.75 0 011.06 0L10 8.94l4.47-4.47a.75.75 0 111.06 1.06L11.06 10l4.47 4.47a.75.75 0 11-1.06 1.06L10 11.06l-4.47 4.47a.75.75 0 01-1.06-1.06L8.94 10 4.47 5.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                                <span className="text-pink-700 font-medium">Maximum 3 option allowed. Remove one to add another</span>
                            </div>
                        )}
                        <div className="grid grid-cols-3 gap-4">
                            {options.map(option => (
                                <OptionCard
                                    key={option.id}
                                    option={option}
                                    isSize={false}
                                    isSelected={
                                        Array.isArray(selectedValue)
                                            ? selectedValue.some(o => o.id === option.id)
                                            : selectedValue && selectedValue.id === option.id
                                    }
                                    onClick={() => handleOptionSelect(category, option)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div>
            <MenuBanner />
            <div className="max-w-7xl mx-auto md:px-0 px-4 py-16 ">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/menu')}
                    className="flex items-center gap-2 text-[#1A9C9C] hover:text-teal-700 mb-8 font-semibold cursor-pointer transition-colors"
                >
                    <ChevronLeft size={20} />
                    Back to Menu
                </button>

                {/* Product Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <div className="flex flex-col  items-center">
                        <div className="relative xl:w-2/3 lg:w-2/3 w-full border overflow-hidden bg-[#FFFFFF] border-[#E9E9E9] rounded-2xl ">
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

                                <div className={product.id === 7 ? 'h-[360px] p-6 w-auto overflow-hidden' : 'h-[360px] w-auto overflow-hidden'}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover  transition-transform duration-300 "
                                    />


                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=''>
                                <p className='text-[#C17B88] flex items-center gap-2 py-4'> <CiClock2 className='text-[#C17B88]' /> Ready in 10–15 minutes</p>
                                <h1 className="lusitana text-4xl font-medium text-[#221E1F] mb-4">
                                    {product.name}
                                </h1>
                            </div>

                            <p className="text-lg text-[#62748E] mb-6 leading-relaxed">
                                {product.description}
                            </p>

                            {/* Badges */}
                            {product.badges && product.badges.length > 0 ? (
                                <div className="flex gap-3 mb-6">
                                    {product.badges.map((badge, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-[#F685281A] text-[#F68528] px-3 py-1 rounded  text-sm  capitalize"
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <div className='flex items-center gap-2 mb-6'>
                                    <p className='bg-[#F685281A] text-[#F68528] px-3 py-1 rounded  text-sm  capitalize'>Dairy</p>
                                    <p className='bg-[#F685281A] text-[#F68528] px-3 py-1 rounded  text-sm  capitalize'>Sweet</p>
                                </div>

                            )}

                            {/* Category Tags */}
                            <div className="flex gap-2 mb-8 flex-wrap max-w-md">
                                {product.category && (
                                    product.category.split(',').map((cat, idx) => (
                                        <span key={idx} className=" text-[#62748E]  py-1 rounded flex items-center gap-1 text-sm">
                                            <IoCheckmarkSharp className='text-[#00A63E]' />
                                            {cat.trim()}
                                        </span>
                                    ))
                                )}
                            </div>

                            {/* Price */}
                            <div className=" flex items-center gap-4 pb-4 ">

                                <div>
                                    <p className="lusitana text-5xl font-medium text-[#EB2D50]  ">
                                        ${product.price.toFixed(2)}
                                    </p>
                                </div>
                                {/* Quantity Selector */}
                                <div>
                                    <div className="flex flex-col   gap-1 ">
                                        <p className="text-gray-400 font-semibold">Quantity:</p>
                                        <div className="flex items-center  rounded-full bg-[#4A5565]/10  px-1">
                                            <button
                                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                                className="w-8 h-8 text-gray-200 bg-[#4A5565] hover:bg-[#4A5565]/90 rounded-full cursor-pointer"
                                            >
                                                −
                                            </button>
                                            <input
                                                type="number"
                                                value={quantity}
                                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                                className="w-12 text-center  border-gray-300 py-2 focus:outline-none"
                                            />
                                            <button
                                                onClick={() => setQuantity(quantity + 1)}
                                                className="w-8 h-8 text-gray-200 bg-[#DE4737] hover:bg-[#DE4737]/90 rounded-full cursor-pointer"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Action Buttons */}
                            <div className="flex gap-4 mb-12 xl:w-1/2 lg:w-2/3 w-full ">
                                <button
                                    onClick={() => setShowConfirmModal(true)}
                                    className="flex-1 bg-[#1A9C9C] text-white py-3 rounded-full flex items-center justify-center gap-2 font-medium hover:bg-teal-500 transition-colors cursor-pointer"
                                >
                                    Add to Cart
                                    <ShoppingBag size={20} />
                                </button>

                            </div>
                        </div>


                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col ">


                        {/* Customization Sections */}
                        <div className=" ">
                            {/* Size Selection */}
                            <CustomizationSection
                                title="Please Select Size"
                                category="size"
                                options={customizationData.sizes}
                                selectedValue={selectedOptions.size}
                                isSize={true}
                            />

                            {/* Dairy/Lactose Free Milk */}
                            <CustomizationSection
                                title="Dairy/lactose Free Milk"
                                category="dairyLactose"
                                options={customizationData.dairyLactose}
                                selectedValue={selectedOptions.dairyLactose}
                                isSize={false}
                            />

                            {/* Alternative Milk */}
                            <CustomizationSection
                                title="Choose Alternative Milk"
                                category="alternativeMilk"
                                options={customizationData.alternativeMilk}
                                selectedValue={selectedOptions.alternativeMilk}
                                isSize={false}
                            />

                            {/* Shake Options */}
                            <CustomizationSection
                                title="Shake Options"
                                category="shakeOptions"
                                options={customizationData.shakeOptions}
                                selectedValue={selectedOptions.shakeOptions}
                                isSize={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProducts />

            {/* Confirm Modal */}
            {showConfirmModal && product && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000080] p-4">
                    <div className="bg-white rounded-[20px] w-full max-w-[450px] overflow-hidden relative">
                        {/* Header */}
                        <div className="bg-[#B5DADB] px-6 py-5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#11A231] rounded-full p-[2px] border border-white">
                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-[22px] font-medium text-[#221E1F]">Added to Cart!</span>
                            </div>
                            <button onClick={() => setShowConfirmModal(false)} className="text-[#314158] hover:text-black cursor-pointer">
                                <X size={26} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <div className="flex gap-6 mb-10">
                                <div className="relative w-[124px] h-[124px] border overflow-hidden bg-[#FFFFFF] border-[#E9E9E9] rounded-2xl ">
                            <div
                                className="
                                         absolute

                                         -top-[100%]
                                      -left-[100%]
                                   w-[200px]
                                   blur-[10px]
                                     h-[200px]
                                      rounded-full
                                
                                     opacity-30
                                             z-0
                                                 bg-[radial-gradient(circle,_#1A9C9C_0%,_rgba(36,156,156,0.3)_70%,_transparent_100%)]
                        "

                            ></div>
                            <div className="relative  flex justify-center items-center">

                                <div className={product.id === 7 ? 'h-[128px] p-6 w-auto overflow-hidden' : 'h-[128px] w-auto overflow-hidden'}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-[90%] h-[90%]   transition-transform duration-300 "
                                    />


                                </div>
                            </div>
                        </div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="lusitana text-[24px] font-medium text-[#221E1F] mb-3 leading-tight">{product.name}</h3>
                                    <p className="text-[14px] text-[#62748E] mb-2 font-medium">
                                        <span className="text-[#899AB1] font-normal font-sans">Size:</span> {getSizeName()}
                                    </p>
                                    <p className="text-[14px] text-[#62748E] mb-2 font-medium">
                                        <span className="text-[#899AB1] font-normal font-sans">Quantity:</span> {quantity}
                                    </p>
                                    <div className="text-[14px] text-[#62748E] flex leading-tight font-medium">
                                        <span className="text-[#899AB1] whitespace-nowrap mr-1 font-normal font-sans">Add - Ons :</span>
                                        <span>{getAllAddons() || 'None'}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mb-8">
                                <span className="text-[22px] text-[#221E1F] font-medium">Subtotal</span>
                                <span className="text-[30px] font-semibold text-[#EB2D50]">${calculateSubtotal()}</span>
                            </div>

                            <div className="flex flex-col gap-4">
                                <button
                                    onClick={() => {
                                        setShowConfirmModal(false);
                                        setShowSuccessModal(true);
                                    }}
                                    className="w-full bg-[#1A9C9C] text-white py-[12px] rounded-md text-[16px] font-medium hover:bg-teal-700 transition-colors cursor-pointer"
                                >
                                    Confirm
                                </button>
                                <button
                                    onClick={() => setShowConfirmModal(false)}
                                    className="w-full border border-[#F68528] text-[#F68528] py-[12px] rounded-md text-[16px] font-medium hover:bg-orange-50 transition-colors bg-white shadow-sm cursor-pointer"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000080] p-4">
                    <div className="bg-white rounded-[20px] w-full max-w-[420px] p-10 relative flex flex-col items-center">
                        <button
                            onClick={() => setShowSuccessModal(false)}
                            className="absolute top-6 right-6 text-gray-500 hover:text-black cursor-pointer"
                        >
                            <X size={26} />
                        </button>

                        <div className="w-[150px] h-[150px] bg-[#1A9C9C] rounded-full flex items-center justify-center mb-10 mt-2 shadow-[0_0_60px_rgba(26,156,156,0.25)]">
                            <svg className="w-[80px] h-[80px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h3 className="text-[24px] leading-[1.4] text-[#4A5565] text-center mb-10 font-medium">
                            Your product is added<br />successfully!
                        </h3>

                        <div className="w-full flex flex-col gap-4">
                            <button
                                onClick={() => {
                                    setShowSuccessModal(false);
                                }}
                                className="w-full bg-[#1A9C9C] text-white py-[12px] rounded-md text-[16px] font-medium hover:bg-teal-700 transition-colors cursor-pointer"
                            >
                                Confirm
                            </button>
                            <button
                                onClick={() => {
                                    setShowSuccessModal(false);
                                    navigate('/menu');
                                }}
                                className="w-full border border-[#F68528] text-[#F68528] py-[12px] rounded-md text-[16px] font-medium hover:bg-orange-50 transition-colors bg-white shadow-sm cursor-pointer"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MenuDettails