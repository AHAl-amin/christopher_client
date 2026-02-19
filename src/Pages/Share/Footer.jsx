import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

import img1 from '../../../public/img/footer1.png'
import img2 from '../../../public/img/footer2.png'


function Footer() {
  return (
    <footer className="bg-gradient-to-b opacity-90 from-[#012626] to-[#000000] text-gray-300 py-16 relative">
      <div>
        <img src={img1} alt="Decorative Image 1" className="absolute bottom-0 left-0  opacity-50" />
        <img src={img2} alt="Decorative Image 2" className="absolute bottom-0 right-0  opacity-50" />

      </div>
      <div className="container mx-auto px-8">
        {/* Main Footer Content */}
        <div className="flex justify-between gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
             <p className='text-2xl lusitana'>Jone’s <span className='text-[#F68528]'>Sheks</span> </p>

            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Crafting the finest shakes and desserts. Quality ingredients, unforgettable flavors.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold lusitana">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/menu"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Menu
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold lusitana">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Terms and conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/refund"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Refund policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
      

       
      </div>
    </footer>
  )
}

export default Footer