import { ArrowRight } from "lucide-react";
import { FiUsers } from "react-icons/fi";
import { RiFacebookBoxFill } from "react-icons/ri";

const CartBanner = () => {
    return (
        <div className="relative py-10 overflow-hidden bg-[#F8FBFC]">
            {/* Background Gradient Layer */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#1A9C9C_0%,_rgba(36,156,156,0.3)_70%,_transparent_100%)] opacity-10"></div>

            <img src="https://res.cloudinary.com/dcpbtzues/image/upload/v1771663741/delicious-berry-cheesecake-slice_2_n3jk1j.png" alt="imge" className="absolute right-0 bottom-0 z-10" />

            <div className="max-w-7xl mx-auto flex items-center h-full relative z-20 py-4">
                {/* Text Content */}
                <div className=''>
                    <div className="space-y-6 max-w-2xl px-6 lg:px-0">
                        <h1 className="lusitana text-4xl lg:text-7xl font-medium max-w-md text-[#221E1F] leading-tight">
                            Ready to Checkout
                        </h1>

                        <p className="text-lg text-[#62748E] leading-relaxed max-w-[37rem]">
                            Everything you've added is here. Review your items, update quantities, and complete your purchase to get geared up faster.
                        </p>
                    </div>
                </div>

                {/* Image Space */}
            </div>
        </div>
    );
};

export default CartBanner;
