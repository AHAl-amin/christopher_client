import React from 'react'

function MenuBanner() {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dcpbtzues/image/upload/v1771492356/Frame_2147226589_vbpcb7.png')] bg-cover bg-center bg-no-repeat  p-12 md:p-16 mx-auto "
    >
      <div className="max-w-7xl mx-auto flex items-center  py-20">
        <div className="space-y-6 max-w-3xl">
          <h1 className="lusitana text-4xl lg:text-8xl font-medium text-[#221E1F] leading-tight">
            Our Menu
          </h1>
          <p className="text-lg text-[#62748E] leading-relaxed max-w-lg">
            Discover our extensive collection of handcrafted shakes, smoothies, and beverages. Every drink is made fresh to order with premium ingredients.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MenuBanner