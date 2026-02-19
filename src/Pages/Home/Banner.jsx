import React from 'react'
import { ArrowRight } from 'lucide-react'
import { FiUsers } from 'react-icons/fi'

function Banner() {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dcpbtzues/image/upload/v1771402932/Frame_2147226546_vmqghx.png')] bg-cover bg-center bg-no-repeat  p-12 md:p-16 mx-auto h-[88vh]"
    >
      <div className="container mx-auto flex items-center  h-full">
        {/* Text Content */}
        <div className=''>
          <div className="space-y-6 max-w-2xl ">
            <h1 className="lusitana text-4xl lg:text-6xl font-medium text-[#221E1F] leading-tight ">
              Craving Something Sweet Right Now?
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              From creamy milkshakes to loaded sundaes, your favorites are just minutes away.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="buton py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Start Group Order<FiUsers />
              </button>

              <button className="bg-[#F68528] hover:bg-orange-500 cursor-pointer text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
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

export default Banner

