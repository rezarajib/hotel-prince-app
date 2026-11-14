import React from 'react';
import { Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#F3F2EB] text-[#4A4A4A] font-sans px-8 py-16 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Heading + Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
          <div className="md:col-span-7 pr-0 md:pr-12">
            <h2 className="font-serif text-3xl md:text-4xl text-[#111111] font-medium tracking-tight mb-4">
              Let’s stay in touch!
            </h2>
            <p className="text-[#666666] text-sm md:text-base leading-relaxed">
              Have a question, planning a visit, or need assistance with your booking? We're always happy to help. Reach out to us, and let us make your experience at Hotel Prince truly special.
            </p>
          </div>

          <div className="md:col-span-5 flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E3E34] text-sm"
            />
            <button className="px-6 py-3 bg-[#1E3E34] hover:bg-[#163028] text-white rounded-lg text-sm font-medium transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* Middle Section: Logo + Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">
          
          {/* Logo & Description */}
          <div className="md:col-span-5 pr-0 md:pr-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#1E3E34] p-2.5 rounded-md text-[#FF9E00]">
                <Building2 size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#FF9E00] tracking-wide leading-none">
                  Hotel Prince
                </h3>
                <span className="text-xs font-semibold text-[#1E3E34] tracking-wider uppercase block mt-1">
                  A STAY TO REMEMBER
                </span>
              </div>
            </div>
            <p className="text-[#666666] text-sm leading-relaxed">
              Hotel Prince offers a perfect blend of comfort, elegance, and exceptional hospitality. Enjoy relaxing stays, delightful dining, and memorable experiences in a welcoming atmosphere designed for every guest.
            </p>
          </div>

          {/* Navigation Links Grid */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2">
            
            {/* Column 1: Navigation */}
            <div>
              <h4 className="font-serif text-xl text-[#111111] font-medium mb-4">Navigation</h4>
              <ul className="space-y-3 text-sm text-[#555555]">
                <li><a href="#home" className="hover:text-[#111111] transition-colors">Home</a></li>
                <li><a href="#restaurant" className="hover:text-[#111111] transition-colors">Restaurant & Menu</a></li>
                <li><a href="#rides" className="hover:text-[#111111] transition-colors">Rides</a></li>
                <li><a href="#facilities" className="hover:text-[#111111] transition-colors">Facilities</a></li>
                <li><a href="#feedback" className="hover:text-[#111111] transition-colors">Guest Feedback</a></li>
              </ul>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="font-serif text-xl text-[#111111] font-medium mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-[#555555]">
                <li><a href="#rooms" className="hover:text-[#111111] transition-colors">Browse Rooms</a></li>
                <li><a href="#packages" className="hover:text-[#111111] transition-colors">Browse Packages</a></li>
                <li><a href="#events" className="hover:text-[#111111] transition-colors">Browse Events</a></li>
                <li><a href="#menu" className="hover:text-[#111111] transition-colors">Restaurant & Menu</a></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="font-serif text-xl text-[#111111] font-medium mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-[#555555]">
                <li><a href="#about" className="hover:text-[#111111] transition-colors">About Us</a></li>
                <li><a href="#careers" className="hover:text-[#111111] transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-[#111111] transition-colors">Contact Us</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
          <p className="text-sm text-[#333333] font-medium">
            @2026 Hotel Prince. All right reserved
          </p>

          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a href="#linkedin" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#1E3E34] hover:bg-[#1E3E34] hover:text-white transition-colors duration-200 border border-gray-100 shadow-sm">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>

            {/* Twitter */}
            <a href="#twitter" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#1E3E34] hover:bg-[#1E3E34] hover:text-white transition-colors duration-200 border border-gray-100 shadow-sm">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
            </a>

            {/* Facebook */}
            <a href="#facebook" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#1E3E34] hover:bg-[#1E3E34] hover:text-white transition-colors duration-200 border border-gray-100 shadow-sm">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
            </a>

            {/* Instagram */}
            <a href="#instagram" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#1E3E34] hover:bg-[#1E3E34] hover:text-white transition-colors duration-200 border border-gray-100 shadow-sm">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;