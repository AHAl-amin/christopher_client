import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function AboutOrderTogether() {
    const navigate = useNavigate()

    return (
        <div className=''>
              <div       className="bg-[url('https://res.cloudinary.com/dcpbtzues/image/upload/v1771408034/Frame_2147226583_hcffrm.png')] bg-cover bg-center bg-no-repeat  p-12 md:p-16 mx-auto h-[85vh]"
        >
              <div className="max-w-7xl mx-auto flex items-center  h-full">
                {/* Text Content */}
                <div className=''>
                  <div className="space-y-6 max-w-2xl ">
                  <h1 className="lusitana text-4xl lg:text-6xl font-medium text-[#221E1F] leading-tight ">
                    <span className='text-[#F68528]'>Order Together</span> , Save Together
                  </h1>
        
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    Planning a party or gathering? Place a group order and enjoy special discounts! Perfect for events, celebrations, or simply sharing delicious shakes with friends and family. The more you order, the more you save.
                  </p>
        
                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="buton py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                        Start Group Order<FiUsers />
                    </button>
        
                
                  </div>
                </div>
                </div>
        
                {/* Image */}
              
              </div>
            </div>
           </div>
    )
}

export default AboutOrderTogether
