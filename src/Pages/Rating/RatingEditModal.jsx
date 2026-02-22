import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { MdOutlineStarPurple500 } from 'react-icons/md';

const RatingEditModal = ({ isOpen, onClose, rating }) => {
    const [reviewText, setReviewText] = useState('');
    const [stars, setStars] = useState(0);

    useEffect(() => {
        if (rating) {
            setReviewText(rating.review);
            setStars(rating.stars);
        }
    }, [rating]);

    if (!isOpen || !rating) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-[24px] w-full max-w-lg relative shadow-xl overflow-hidden p-8 md:p-10">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors z-10 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-full p-2"
                >
                    <FiX size={20} />
                </button>

                <h2 className="text-[22px] font-medium text-[#221E1F] mb-6 lusitana text-center">Edit Rating</h2>

                {/* Product Info */}
                <div className="flex items-center gap-4 mb-8 bg-[#F8FAFC] p-4 rounded-[16px] border border-[#E9EEF2]">
                    <div className="bg-white p-2 rounded-[12px] shadow-sm flex-shrink-0">
                        <img src={rating.image} alt={rating.title} className="w-16 h-16 object-contain" />
                    </div>
                    <div>
                        <h3 className="font-bold text-[#221E1F] text-[18px] mb-1">{rating.title}</h3>
                        <p className="text-[#899AB1] text-[13px]">Rated on {rating.date}</p>
                    </div>
                </div>

                {/* Stars Input */}
                <div className="mb-6">
                    <label className="block text-[#334155] font-bold text-[15px] mb-3 text-center">Your Rating</label>
                    <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onClick={() => setStars(star)}
                                className="cursor-pointer transition-transform hover:scale-110 p-1"
                            >
                                <MdOutlineStarPurple500 className={star <= stars ? "text-[#E97034]" : "text-[#D3E0EE]"} size={36} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Review Text Input */}
                <div className="mb-8">
                    <label className="block text-[#334155] font-bold text-[15px] mb-3">Your Review</label>
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        rows={4}
                        className="w-full border border-[#E9EEF2] rounded-[16px] p-4 text-[14px] text-[#62748E] focus:outline-none focus:border-[#1A9C9C] resize-none bg-[#FAFCFD]"
                    ></textarea>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4">
                    <button
                        onClick={onClose}
                        className="px-6 py-3.5 rounded-md font-medium text-[15px] text-[#62748E] bg-[#F1F5F9] hover:bg-[#E2E8F0] transition-colors w-1/2 cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-[#1A9C9C] hover:bg-teal-700 text-white px-6 py-3.5 rounded-md font-medium text-[15px] transition-colors w-1/2 cursor-pointer shadow-sm"
                    >
                        Save Changes
                    </button>
                </div>

            </div>
        </div>
    );
};

export default RatingEditModal;
