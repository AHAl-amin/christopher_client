import React, { useState } from 'react';
import { FiSearch, FiEdit, FiCalendar } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { IoIosStarOutline } from 'react-icons/io';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import RatingEditModal from './RatingEditModal';

const Rating = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRating, setSelectedRating] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const ratingsList = [
        {
            id: 1,
            title: 'Almond Joy',
            date: 'Jan 28, 2026',
            stars: 5,
            review: "Absolutely divine! The caramel layer is perfectly gooey and the chocolate is rich without being overwhelming.",
            image: '/img/Products/product1.png'
        },
        {
            id: 2,
            title: 'Cinnamon Cheesecake',
            date: 'Jan 28, 2026',
            stars: 5,
            review: "Absolutely divine! The caramel layer is perfectly gooey and the chocolate is rich without being overwhelming.",
            image: '/img/Products/product2.png'
        },
        {
            id: 3,
            title: 'Cinnamon Cheesecake',
            date: 'Jan 28, 2026',
            stars: 5,
            review: "Absolutely divine! The caramel layer is perfectly gooey and the chocolate is rich without being overwhelming.",
            image: '/img/Products/product2.png'
        },
        {
            id: 4,
            title: 'Almond Joy',
            date: 'Jan 28, 2026',
            stars: 5,
            review: "Absolutely divine! The caramel layer is perfectly gooey and the chocolate is rich without being overwhelming.",
            image: '/img/Products/product1.png'
        },
        {
            id: 5,
            title: 'Almond Joy',
            date: 'Jan 28, 2026',
            stars: 5,
            review: "Absolutely divine! The caramel layer is perfectly gooey and the chocolate is rich without being overwhelming.",
            image: '/img/Products/product1.png'
        },
        {
            id: 6,
            title: 'Cinnamon Cheesecake',
            date: 'Jan 28, 2026',
            stars: 5,
            review: "Absolutely divine! The caramel layer is perfectly gooey and the chocolate is rich without being overwhelming.",
            image: '/img/Products/product2.png'
        }
    ];

    const filteredRatings = ratingsList.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleEditClick = (rating) => {
        setSelectedRating(rating);
        setIsEditModalOpen(true);
    };

    return (
        <div>
            {/* Banner Section */}
            <div className="relative py-10 overflow-hidden bg-[#F8FBFC]">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#1A9C9C_0%,_rgba(36,156,156,0.3)_70%,_transparent_100%)] opacity-10"></div>
                <img src="https://res.cloudinary.com/dcpbtzues/image/upload/v1771666721/tasty-caramel-brownie-isolated-transparent-background_2_btzon6.png" alt="imge" className="absolute right-0 bottom-0 z-10" />
                <div className="max-w-7xl mx-auto flex items-center h-full relative z-20 py-22">
                    <div className="space-y-6 px-6 lg:px-0 max-w-md">
                        <h1 className="lusitana text-4xl lg:text-6xl xl:text-7xl font-medium text-[#221E1F] leading-tight">
                            My Rating
                        </h1>
                    </div>
                </div>
            </div>

            {/* Ratings Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-0 py-16">

                {/* Search Bar */}
                <div className="mb-10 w-full max-w-[350px]">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <FiSearch className="text-[#899AB1] text-[18px]" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search......"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-[#00000012] text-[#62748E] text-[15px] font-medium rounded-full w-full py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#1A9C9C] transition-all"
                        />
                    </div>
                </div>

                {/* Ratings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
                    {filteredRatings.length > 0 ? (
                        filteredRatings.map((rating) => (
                            <div key={rating.id} className="bg-[#F1F5F9] rounded-[16px] p-6 flex gap-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-sm">

                                {/* Image Box */}
                                <div className="bg-white rounded-[12px] p-3 shadow-sm border border-gray-50 flex-shrink-0 flex items-center justify-center">
                                    <img
                                        src={rating.image}
                                        alt={rating.title}
                                        className="w-24 h-24 object-contain"
                                    />
                                </div>

                                {/* Content Box */}
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="lusitana text-[#221E1F] text-[22px] font-medium leading-tight">
                                            {rating.title}
                                        </h3>
                                        <button
                                            onClick={() => handleEditClick(rating)}
                                            className="text-[#62748E] hover:text-[#221E1F] transition-colors cursor-pointer p-1"
                                        >
                                            <FiEdit size={16} />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-2 text-[#899AB1] mb-3">
                                        <FiCalendar size={14} />
                                        <p className="text-[14px]">Rated on {rating.date}</p>
                                    </div>

                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <MdOutlineStarPurple500 key={i} className={i < rating.stars ? "text-[#E97034]" : "text-[#D3E0EE]"} size={22} />
                                        ))}
                                    </div>

                                    <p className="text-[#62748E] text-[13px] leading-relaxed">
                                        "{rating.review}"
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-2 text-center py-10">
                            <p className="text-[#899AB1] text-lg">No ratings found matching your search.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Edit Modal */}
            <RatingEditModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                rating={selectedRating}
            />
        </div>
    );
};

export default Rating;
