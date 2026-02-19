import React from 'react'
import img from '../../../public/img/freepik__background__54983 1.png'

function OurJourney() {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-0 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center  mb-16">
                {/* Text Content */}
             <div className='flex  items-center '>
                   <div className='space-y-10'>
                <h1 className="text-xl md:text-xl  text-[#F68528] mr-4 h1">Our Journey</h1>
                    <h2 className="lusitana text-4xl md:text-5xl font-medium text-[#221E1F] mb-6 leading-normal">
                        Crafting Exceptional Flavor,<br />
                        One Shake at a Time
                    </h2>

                    <p className="text-[#62748E] text-xl leading-relaxed mb-4">
                       Jones Shakes was born from a simple dream: to create the world's most delicious milkshakes using only the finest ingredients. 
                    </p>

                    <p className="text-[#62748E] text-xl leading-relaxed">
                       Our founder, <span className='text-[#1A9C9C] font-bold'>Chiristopher Miller</span> spent years perfecting recipes and sourcing the highest quality ingredients. Each shake is crafted with care, combining traditional techniques with innovative flavors that surprise and delight.
                    </p>
                </div>
             </div>

                {/* Image */}
                <div className="flex justify-center">
                    <img
                        src={img}
                        alt="Delicious Shake"
                        className="w-full "
                    />
                </div>
            </div>

            {/* Large Restaurant Image */}
            <div className="">
                <img
                    src="https://res.cloudinary.com/dcpbtzues/image/upload/v1771488887/Frame_2147226536_ruocpr.png"
                    alt="Restaurant Interior"
                    className="w-full  object-cover"
                />
            </div>
        </div>
    )
}

export default OurJourney
