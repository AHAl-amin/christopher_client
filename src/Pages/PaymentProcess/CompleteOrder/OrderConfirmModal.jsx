import React from "react";
import { useNavigate } from "react-router-dom";
import { FiCheck } from "react-icons/fi";

// Confetti pieces config
const confettiPieces = [
    { color: "#F9A8D4", size: 10, top: "8%", left: "8%", rotate: "20deg" },
    { color: "#FCD34D", size: 8, top: "12%", left: "20%", rotate: "-15deg" },
    { color: "#6EE7B7", size: 12, top: "5%", left: "45%", rotate: "35deg" },
    { color: "#93C5FD", size: 9, top: "10%", left: "70%", rotate: "-30deg" },
    { color: "#F9A8D4", size: 11, top: "6%", right: "10%", rotate: "10deg" },
    { color: "#FCD34D", size: 7, top: "20%", right: "6%", rotate: "-40deg" },
    { color: "#C4B5FD", size: 10, top: "30%", left: "4%", rotate: "50deg" },
    { color: "#6EE7B7", size: 8, bottom: "25%", left: "6%", rotate: "-20deg" },
    { color: "#FCA5A5", size: 11, bottom: "12%", left: "18%", rotate: "30deg" },
    { color: "#93C5FD", size: 9, bottom: "8%", left: "40%", rotate: "-10deg" },
    { color: "#FCD34D", size: 12, bottom: "15%", right: "15%", rotate: "45deg" },
    { color: "#C4B5FD", size: 8, bottom: "20%", right: "5%", rotate: "-35deg" },
    { color: "#FCA5A5", size: 10, top: "40%", right: "4%", rotate: "15deg" },
    { color: "#F9A8D4", size: 7, top: "55%", left: "3%", rotate: "-25deg" },
];

// Star shapes for extra confetti flair
const starShapes = [
    { color: "#FCD34D", size: 14, top: "18%", left: "32%" },
    { color: "#F9A8D4", size: 12, top: "15%", right: "28%" },
    { color: "#93C5FD", size: 10, bottom: "30%", left: "30%", },
    { color: "#6EE7B7", size: 13, bottom: "22%", right: "28%" },
];

const OrderConfirmModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-[24px] w-full max-w-sm relative shadow-2xl overflow-hidden">

                {/* Confetti Background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {confettiPieces.map((piece, i) => (
                        <div
                            key={i}
                            className="absolute rounded-sm"
                            style={{
                                width: piece.size,
                                height: piece.size * 0.6,
                                backgroundColor: piece.color,
                                top: piece.top,
                                left: piece.left,
                                right: piece.right,
                                bottom: piece.bottom,
                                transform: `rotate(${piece.rotate})`,
                                opacity: 0.85,
                            }}
                        />
                    ))}
                    {starShapes.map((star, i) => (
                        <div
                            key={`star-${i}`}
                            className="absolute"
                            style={{
                                top: star.top,
                                left: star.left,
                                right: star.right,
                                bottom: star.bottom,
                                color: star.color,
                                fontSize: star.size,
                                lineHeight: 1,
                                opacity: 0.9,
                            }}
                        >
                            ✦
                        </div>
                    ))}
                </div>

                {/* Modal Content */}
                <div className="relative z-10 px-8 py-12 flex flex-col items-center text-center">

                    {/* Teal Checkmark Circle */}
                    <div className="w-24 h-24 rounded-full bg-[#1A9C9C] flex items-center justify-center mb-8 shadow-lg">
                        <FiCheck size={46} strokeWidth={3} className="text-white" />
                    </div>

                    {/* Text */}
                    <h2 className="lusitana text-[22px] font-semibold text-[#221E1F] leading-snug mb-8">
                        Your Order has been<br />
                        <span className="text-[#1A9C9C]">Confirmed!</span>
                    </h2>

                    {/* Buttons */}
                    <div className="w-full space-y-3">
                        <button
                            onClick={onClose}
                            className="w-full border border-[#1A9C9C] text-[#1A9C9C] hover:bg-[#E8F7F7] py-3 rounded-md font-medium text-[14px] transition-colors cursor-pointer"
                        >
                            Done
                        </button>
                        <button
                            onClick={() => { onClose(); navigate('/menu'); }}
                            className="w-full bg-[#1A9C9C] hover:bg-teal-700 text-white py-3 rounded-md font-medium text-[14px] transition-colors cursor-pointer"
                        >
                            Continue Order
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderConfirmModal;
