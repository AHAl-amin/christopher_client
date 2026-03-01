import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/* ── 4-box OTP Input ── */
const OtpInput = ({ otp, setOtp }) => {
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    

    const handleChange = (index, e) => {
        const val = e.target.value.replace(/\D/g, '').slice(-1);
        const newOtp = [...otp];
        newOtp[index] = val;
        setOtp(newOtp);
        if (val && index < 3) {
            inputRefs[index + 1].current?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace') {
            if (otp[index]) {
                const newOtp = [...otp];
                newOtp[index] = '';
                setOtp(newOtp);
            } else if (index > 0) {
                inputRefs[index - 1].current?.focus();
            }
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4);
        const newOtp = ['', '', '', ''];
        pasted.split('').forEach((ch, i) => { newOtp[i] = ch; });
        setOtp(newOtp);
        const nextEmpty = newOtp.findIndex((v) => !v);
        inputRefs[nextEmpty === -1 ? 3 : nextEmpty].current?.focus();
    };

    return (
        <div className="flex items-center justify-center gap-4">
            {otp.map((digit, i) => (
                <input
                    key={i}
                    ref={inputRefs[i]}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(i, e)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    onPaste={handlePaste}
                    className={`w-16 h-16 text-center text-2xl font-semibold rounded-xl border-2 bg-white focus:outline-none transition-all duration-200
            ${digit ? 'border-[#1A9C9C] text-[#1A9C9C]' : 'border-gray-200 text-gray-800'} focus:border-[#1A9C9C] focus:shadow-[0_0_0_3px_rgba(26,156,156,0.15)]`}
                />
            ))}
        </div>
    );
};

const EmailOtpVerify = () => {
    const navigate = useNavigate()
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleSubmit = (e) => {
        e.preventDefault();
        const code = otp.join('');
        console.log('OTP submitted:', code);
    };

    return (
        <div className="min-h-screen max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
            {/* Left image panel */}
            <div className="w-full md:w-1/2 md:h-screen h-[80vh] py-10 relative overflow-y-auto px-4 xl:px-0">
                <img
                    src="https://res.cloudinary.com/dcpbtzues/image/upload/v1771926718/Frame_2147226548_u4pxzt.png"
                    alt="Background"
                    className="inset-0 w-full h-full object-cover rounded-2xl"
                />
                <p className="absolute top-16 left-20 text-2xl lusitana text-[#F68528]">Sheks</p>
            </div>

            {/* Right form panel */}
            <div className="w-full md:w-1/2 min-h-[100vh] md:h-screen relative">
                <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] md:h-screen px-8 py-10 max-w-lg mx-auto overflow-y-auto">
                    <div className="w-full space-y-5">

                        {/* Header */}
                        <div className="space-y-2 text-center">
                            <h1 className="text-3xl font-semibold luxury text-[#333333]">
                                Verify Your Email
                            </h1>
                            <p className="text-sm text-gray-500">
                                We've sent a verification code to your inbox. <br /> Please check your email to continue.
                            </p>

                            {/* Badge icon */}
                            <div className="flex items-center justify-center pt-6">
                                <svg width="100" height="100" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M101.246 2.79199C103.567 2.25784 105.996 2.45984 108.196 3.37109C110.396 4.28236 112.257 5.85736 113.521 7.87598L113.521 7.87793L124.47 25.333V25.334C125.788 27.4367 127.565 29.2137 129.668 30.5322L129.67 30.5332L147.136 41.4717V41.4707C149.15 42.7348 150.721 44.5953 151.63 46.793C152.482 48.8538 152.713 51.1157 152.3 53.3008L152.209 53.7373L147.6 73.8154C147.077 76.089 147.045 78.4464 147.502 80.7305L147.6 81.1855L152.197 101.252L152.198 101.256C152.733 103.576 152.532 106.005 151.622 108.205C150.713 110.405 149.14 112.266 147.124 113.53L129.66 124.468C127.684 125.703 125.997 127.343 124.709 129.28L124.457 129.671L113.521 147.125H113.521C112.258 149.142 110.398 150.716 108.2 151.627C106.002 152.538 103.575 152.742 101.256 152.21L81.1787 147.601C78.9053 147.078 76.5485 147.045 74.2646 147.502L73.8086 147.601L53.7432 152.21C48.9883 153.3 44.0601 151.256 41.4785 147.127L41.4775 147.125L30.54 129.669L30.5361 129.661L30.2822 129.271C28.9878 127.342 27.3046 125.704 25.3291 124.469H25.3301L7.875 113.531L7.87402 113.53C5.85742 112.268 4.28421 110.408 3.37305 108.21C2.46198 106.012 2.2581 103.584 2.79004 101.265L7.39941 81.1855V81.1846C7.95463 78.7639 7.95469 76.2488 7.39941 73.8281L2.79004 53.7383C2.26042 51.4207 2.46525 48.9958 3.37598 46.7998C4.28697 44.6034 5.8591 42.7447 7.87402 41.4824H7.875L25.3301 30.5439L25.3369 30.54C27.4359 29.215 29.2119 27.4403 30.5293 25.333L41.4658 7.87695L41.4668 7.87598C42.7302 5.85728 44.592 4.28236 46.792 3.37109C48.9918 2.46005 51.4209 2.25793 53.7412 2.79199H53.7432L73.8086 7.40137C76.2336 7.95877 78.7537 7.95877 81.1787 7.40137L101.245 2.79199H101.246ZM109.239 42.9922C107.439 41.9265 105.295 41.6003 103.26 42.083C101.224 42.5658 99.4545 43.8194 98.3242 45.5801L98.2998 45.6191L98.2754 45.6592L70.6943 92.3428L55.3506 77.6484H55.3496C54.6053 76.9006 53.7225 76.3048 52.749 75.8965C51.7485 75.4768 50.6739 75.2628 49.5889 75.2676C48.5039 75.2723 47.4305 75.4954 46.4336 75.9238C45.4369 76.3522 44.5362 76.977 43.7861 77.7607C43.0361 78.5446 42.4516 79.4717 42.0674 80.4863C41.6832 81.501 41.5069 82.5829 41.5498 83.667C41.5927 84.7511 41.8543 85.8157 42.3174 86.7969C42.7677 87.751 43.4016 88.6058 44.1807 89.3164V89.3174L66.8799 111.07L66.8818 111.072C67.7616 111.913 68.8204 112.545 69.9785 112.92C71.1366 113.295 72.3645 113.403 73.5703 113.236C74.7761 113.07 75.929 112.634 76.9424 111.96C77.8291 111.37 78.5887 110.611 79.1797 109.729L79.4229 109.343L112.179 53.8828L112.201 53.8447L112.223 53.8057C113.222 51.9677 113.469 49.8136 112.913 47.7969C112.357 45.78 111.04 44.0579 109.239 42.9922Z" stroke="#B6DDE1" strokeWidth="5" />
                                </svg>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6 pt-4">

                            {/* 4-box OTP Input */}
                            <OtpInput otp={otp} setOtp={setOtp} />

                            {/* Submit Button */}
                            <button
                                type="submit"
                                onClick={() => navigate('/reset_password')}
                                className="w-full h-12 rounded-[12px] text-white font-semibold bg-[#1A9C9C] text-base transition-opacity hover:opacity-80 cursor-pointer"
                            >
                                Confirm
                            </button>

                            {/* Resend link */}
                            <div className="flex items-center justify-center">
                                <Link
                                    to="/verify"
                                    className="text-sm text-gray-500   transition-colors"
                                >
                                    Could'nt receive a code? <span className='text-[#1A9C9C] underline font-medium'>Resend</span>
                                </Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailOtpVerify;
