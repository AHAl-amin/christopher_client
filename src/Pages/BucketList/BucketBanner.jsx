import React from 'react'

const BucketBanner = () => {
  return (
    <div>
       <div className="relative py-10 overflow-hidden bg-[#F8FBFC]">
            {/* Background Gradient Layer */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#1A9C9C_0%,_rgba(36,156,156,0.3)_70%,_transparent_100%)] opacity-10"></div>

            <img src="https://res.cloudinary.com/dcpbtzues/image/upload/v1771666721/tasty-caramel-brownie-isolated-transparent-background_2_btzon6.png" alt="imge" className="absolute right-0 bottom-0 z-10" />

            <div className="max-w-7xl mx-auto flex items-center h-full relative z-20 py-20">
                {/* Text Content */}
                <div className=''>
                    <div className="space-y-6  px-6 lg:px-0">
                        <h1 className="lusitana text-4xl lg:text-6xl xl:text-7xl font-medium  text-[#221E1F] leading-tight">
                            My Bucket List
                        </h1>

                       
                    </div>
                </div>

                {/* Image Space */}
            </div>
        </div>
        
    </div>
  )
}

export default BucketBanner