import { ArrowRight } from 'lucide-react'
import React from 'react'
import { FiUsers } from 'react-icons/fi'

function AboutBanner() {
  return (
  <div       className="bg-[url('https://res.cloudinary.com/dcpbtzues/image/upload/v1771483299/Frame_2147226552_x5lbaa.png')] bg-cover bg-center bg-no-repeat  mx-auto h-[88vh]"
>
      <div className="max-w-7xl mx-auto flex items-center  h-full">
        {/* Text Content */}
        <div className=''>
          <div className="space-y-6 max-w-2xl ">
          <h1 className="lusitana md:text-7xl text-6 lg:text-8xl font-medium text-[#221E1F] leading-tight ">
           About Us
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
           Crafted with quality ingredients and a personal touch, we’re here to make every bite unforgettable.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
           

            <button className="buton cursor-pointer text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Explore Menu
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        </div>

        {/* Image */}
      
      </div>
    </div>
  )
}

export default AboutBanner