import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/hotel-logo 1.png';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection for smooth header transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Home পেজে স্ক্রোল না করলে সাদা টেক্সট, স্ক্রোল করলে বা অন্য পেজে থাকলে গাঢ় সবুজ/কালো টেক্সট
  const isDarkText = !isHome || isScrolled;

  const navLinks = (
    <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-['Sora',sans-serif]">
      {[
        { path: '/', label: 'Home' },
        { path: '/rooms', label: 'Rooms' },
        { path: '/packages', label: 'Packages' },
        { path: '/events', label: 'Events' },
        { path: '/restaurant', label: 'Restaurant & Menu' },
        { path: '/rides', label: 'Rides' },
        { path: '/contact', label: 'Contact' },
      ].map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `relative text-[16px] transition-colors duration-200 hover:text-[#FFA300] ${
              isActive
                ? isDarkText ? 'text-[#1E3E34] font-bold' : 'text-white font-bold'
                : isDarkText ? 'text-[#333333] font-medium' : 'text-white/90 font-medium'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {link.label}
              {isActive && (
                <span className="absolute left-0 bottom-[-4px] w-full h-[2.5px] bg-[#FFA300] rounded-full" />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-16 flex items-center justify-between transition-all duration-300 ${
        isDarkText ? 'bg-[#F3F2EB] shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Brand Logo & Name */}
      <Link to="/" className="flex items-center gap-3 shrink-0">
        <img src={logoImg} alt="Hotel Prince Logo" className="w-[32px] h-[32px] object-contain" />
        
        <div className="flex flex-col justify-center">
          <h1 className="text-[#FFA300] text-[22px] font-bold leading-none">
            Hotel Prince
          </h1>
          <span
            className={`text-[10px] font-semibold leading-tight tracking-[1px] uppercase mt-1 ${
              isDarkText ? 'text-[#1E3E34]' : 'text-gray-200'
            }`}
          >
            A STAY TO REMEMBER
          </span>
        </div>
      </Link>

      {/* Navigation Links */}
      {navLinks}

      {/* Login / Signup Button */}
      <div className="hidden sm:block">
        <Link
          to="/auth"
          className="px-6 py-2.5 bg-[#FFA300] hover:bg-[#e69300] text-gray-900 font-semibold text-sm transition duration-200 shadow-sm rounded-[10px]"
        >
          Login / Signup
        </Link>
      </div>
    </header>
  );
};

export default Navbar;