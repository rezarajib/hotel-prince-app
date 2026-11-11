import { NavLink, Link } from 'react-router-dom';
import logoImg from '../../assets/hotel-logo 1.png';

const Navbar = () => {
  const navLinks = (
    <nav className="hidden lg:flex items-center gap-8 font-['Sora',sans-serif]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `relative text-[20px] leading-[28px] transition-colors duration-200 hover:text-[#FFA300] ${
            isActive ? 'text-white font-semibold' : 'text-white font-normal'
          }`
        }
      >
        {({ isActive }) => (
          <>
            Home
            {isActive && <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#FFA300] rounded-full" />}
          </>
        )}
      </NavLink>

      <NavLink
        to="/rooms"
        className={({ isActive }) =>
          `relative text-[20px] leading-[28px] transition-colors duration-200 hover:text-[#FFA300] ${
            isActive ? 'text-white font-semibold' : 'text-white font-normal'
          }`
        }
      >
        {({ isActive }) => (
          <>
            Rooms
            {isActive && <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#FFA300] rounded-full" />}
          </>
        )}
      </NavLink>

      <NavLink
        to="/packages"
        className={({ isActive }) =>
          `relative text-[20px] leading-[28px] transition-colors duration-200 hover:text-[#FFA300] ${
            isActive ? 'text-white font-semibold' : 'text-white font-normal'
          }`
        }
      >
        {({ isActive }) => (
          <>
            Packages
            {isActive && <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#FFA300] rounded-full" />}
          </>
        )}
      </NavLink>

      <NavLink
        to="/events"
        className={({ isActive }) =>
          `relative text-[20px] leading-[28px] transition-colors duration-200 hover:text-[#FFA300] ${
            isActive ? 'text-white font-semibold' : 'text-white font-normal'
          }`
        }
      >
        {({ isActive }) => (
          <>
            Events
            {isActive && <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#FFA300] rounded-full" />}
          </>
        )}
      </NavLink>

      <NavLink
        to="/restaurant"
        className={({ isActive }) =>
          `relative text-[20px] leading-[28px] transition-colors duration-200 hover:text-[#FFA300] ${
            isActive ? 'text-white font-semibold' : 'text-white font-normal'
          }`
        }
      >
        {({ isActive }) => (
          <>
            Restaurant & Menu
            {isActive && <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#FFA300] rounded-full" />}
          </>
        )}
      </NavLink>

      <NavLink
        to="/rides"
        className={({ isActive }) =>
          `relative text-[20px] leading-[28px] transition-colors duration-200 hover:text-[#FFA300] ${
            isActive ? 'text-white font-semibold' : 'text-white font-normal'
          }`
        }
      >
        {({ isActive }) => (
          <>
            Rides
            {isActive && <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#FFA300] rounded-full" />}
          </>
        )}
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `relative text-[20px] leading-[28px] transition-colors duration-200 hover:text-[#FFA300] ${
            isActive ? 'text-white font-semibold' : 'text-white font-normal'
          }`
        }
      >
        {({ isActive }) => (
          <>
            Contact
            {isActive && <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#FFA300] rounded-full" />}
          </>
        )}
      </NavLink>
    </nav>
  );

  return (
    <header className="absolute top-[40px] left-1/2 -translate-x-1/2 w-full max-w-[1520px] z-50 px-6 md:px-12 flex items-center justify-between bg-transparent font-['Sora',sans-serif]">
      {/* Brand Logo & Name */}
      <Link to="/" className="flex items-center gap-3">
        <img src={logoImg} alt="Hotel Prince Logo" className="w-[32px] h-[32px] object-contain" />
        
        <div className="flex flex-col justify-center">
          <h1 className="text-[#FFA300] text-[24px] font-semibold leading-[25px]">
            Hotel Prince
          </h1>
          <span className="text-gray-300 text-[12px] font-normal leading-tight tracking-[1px] uppercase mt-1">
            A STAY TO REMEMBER
          </span>
        </div>
      </Link>

      {/* Navigation Links */}
      {navLinks}

      {/* Login / Signup Button (Exact Figma Specs: 193px x 51px, Radius 9px, Color #FFA300) */}
      <div>
        <Link
          to="/auth"
          className="w-[193px] h-[51px] bg-[#FFA300] hover:bg-[#e69300] text-gray-900 font-semibold text-sm transition duration-200 shadow-md flex items-center justify-center rounded-[9px]"
        >
          Login / Signup
        </Link>
      </div>
    </header>
  );
};

export default Navbar;