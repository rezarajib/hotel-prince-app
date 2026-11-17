import { Building2, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-stone-100 text-stone-600 font-sans border-t border-stone-200">
      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        
        {/* Top Section: Newsletter & Stay in Touch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-14 border-b border-stone-200">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-900 mb-2 block">
              Exclusive Offers & Updates
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 font-medium tracking-tight mb-3">
              Let’s stay in touch!
            </h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-xl">
              Have a question, planning a visit, or need assistance with your booking? Reach out to us, and let us make your experience at Hotel Prince truly special.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                className="w-full px-4 py-3.5 rounded-lg border border-stone-300 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent text-sm transition"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-sm font-medium transition-colors duration-200 shrink-0 cursor-pointer"
              >
                <span>Subscribe</span>
                <ArrowRight size={16} />
              </button>
            </form>
            <p className="text-xs text-stone-400 mt-2.5">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Middle Section: Brand Info, Contact & Navigation Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-14 border-b border-stone-200">
          
          {/* Brand & Resort Contact Info */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="bg-emerald-900 p-2.5 rounded-lg text-amber-400 shadow-sm">
                <Building2 size={30} />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-stone-900 tracking-wide leading-none">
                  Hotel Prince
                </h3>
                <span className="text-[11px] font-semibold text-amber-600 tracking-widest uppercase block mt-1">
                  A Stay To Remember
                </span>
              </div>
            </Link>

            <p className="text-stone-600 text-sm leading-relaxed max-w-md">
              Hotel Prince offers a perfect blend of comfort, elegance, and exceptional hospitality. Enjoy relaxing stays, delightful dining, and memorable experiences in a welcoming atmosphere.
            </p>

            {/* Resort Direct Contact Details */}
            <div className="space-y-2.5 pt-2 text-sm text-stone-700">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-900 shrink-0 mt-0.5" />
                <span>123 Luxury Resort Avenue, Cox's Bazar, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-900 shrink-0" />
                <a href="tel:+8801700000000" className="hover:text-emerald-900 transition-colors">
                  +880 1700-000000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-900 shrink-0" />
                <a href="mailto:reservations@hotelprince.com" className="hover:text-emerald-900 transition-colors">
                  reservations@hotelprince.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Explore */}
            <div>
              <h4 className="font-serif text-lg text-stone-900 font-semibold mb-4">Explore</h4>
              <ul className="space-y-3 text-sm text-stone-600">
                <li><Link to="/" className="hover:text-emerald-900 transition-colors">Home</Link></li>
                <li><a href="#restaurant" className="hover:text-emerald-900 transition-colors">Restaurant & Menu</a></li>
                <li><a href="#rides" className="hover:text-emerald-900 transition-colors">Resort Rides</a></li>
                <li><a href="#facilities" className="hover:text-emerald-900 transition-colors">Facilities & Spa</a></li>
                <li><a href="#feedback" className="hover:text-emerald-900 transition-colors">Guest Feedback</a></li>
              </ul>
            </div>

            {/* Column 2: Stays & Services */}
            <div>
              <h4 className="font-serif text-lg text-stone-900 font-semibold mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-stone-600">
                <li><Link to="/rooms" className="hover:text-emerald-900 transition-colors">Browse Rooms</Link></li>
                <li><a href="#packages" className="hover:text-emerald-900 transition-colors">Holiday Packages</a></li>
                <li><a href="#events" className="hover:text-emerald-900 transition-colors">Events & Weddings</a></li>
                <li><a href="#menu" className="hover:text-emerald-900 transition-colors">Fine Dining</a></li>
              </ul>
            </div>

            {/* Column 3: Information */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-serif text-lg text-stone-900 font-semibold mb-4">Information</h4>
              <ul className="space-y-3 text-sm text-stone-600">
                <li><a href="#about" className="hover:text-emerald-900 transition-colors">About Us</a></li>
                <li><a href="#careers" className="hover:text-emerald-900 transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-emerald-900 transition-colors">Contact Us</a></li>
                <li><a href="#privacy" className="hover:text-emerald-900 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Hotel Prince. All rights reserved.
          </p>

          <div className="flex items-center gap-2.5">
            {/* LinkedIn */}
            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-emerald-900 hover:bg-emerald-900 hover:text-white transition-colors duration-200 border border-stone-200 shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>

            {/* Twitter / X */}
            <a
              href="#twitter"
              aria-label="Twitter"
              className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-emerald-900 hover:bg-emerald-900 hover:text-white transition-colors duration-200 border border-stone-200 shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
            </a>

            {/* Facebook */}
            <a
              href="#facebook"
              aria-label="Facebook"
              className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-emerald-900 hover:bg-emerald-900 hover:text-white transition-colors duration-200 border border-stone-200 shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
            </a>

            {/* Instagram */}
            <a
              href="#instagram"
              aria-label="Instagram"
              className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-emerald-900 hover:bg-emerald-900 hover:text-white transition-colors duration-200 border border-stone-200 shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;