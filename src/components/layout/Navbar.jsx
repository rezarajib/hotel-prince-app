import { useState, useEffect, useContext } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { CalendarDays, ChevronDown, LogOut, Menu, Settings, UserRound, X } from 'lucide-react';
import logoImg from '../../assets/hotel-logo 1.png';
import CustomButton from '../common/Button';
import { AuthContext } from '../../features/auth/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/rooms', label: 'Rooms' },
    { path: '/packages', label: 'Packages' },
    { path: '/events', label: 'Events' },
    { path: '/restaurant', label: 'Restaurant & Menu' },
    { path: '/facilities', label: 'Facilities' },
    { path: '/rides', label: 'Rides' },
    { path: '/contact', label: 'Contact' },
  ];

  // Scroll detection for smooth header transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Home পেজে স্ক্রোল না করলে সাদা টেক্সট, স্ক্রোল করলে বা অন্য পেজে থাকলে গাঢ় সবুজ/কালো টেক্সট
  const isDarkText = !isHome || isScrolled || isMobileMenuOpen;
  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const navLinks = (
    <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-['Sora',sans-serif]">
      {navItems.map((link) => (
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
                <span className="absolute left-0 -bottom-1 w-full h-[2.5px] bg-[#FFA300] rounded-full" />
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
        <span
          aria-hidden="true"
          className={`h-8 w-8 ${isDarkText ? 'bg-[#1E3E34]' : 'bg-white'}`}
          style={{
            WebkitMaskImage: `url("${logoImg}")`,
            maskImage: `url("${logoImg}")`,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
          }}
        />

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

      <button
        type="button"
        className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-[#1E3E34] hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#1E3E34]"
        aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMobileMenuOpen((open) => !open)}
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div className="relative hidden sm:block">
        {user ? (
          <>
            <button
              type="button"
              onClick={() => setIsUserMenuOpen((open) => !open)}
              aria-expanded={isUserMenuOpen}
              aria-haspopup="menu"
              className="inline-flex items-center gap-2 rounded-full border border-[#DDE3DD] bg-white px-4 py-2.5 text-sm font-semibold text-[#18392B] shadow-sm hover:bg-[#F8FAF8]"
            >
              <UserRound className="h-4 w-4" />
              <span>{user.name}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {isUserMenuOpen && (
              <div role="menu" className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-[#EAEAEA] bg-white p-2 shadow-lg">
                <Link
                  role="menuitem"
                  to="/my-bookings"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#333] hover:bg-[#F3F4EF]"
                >
                  <CalendarDays className="h-4 w-4 text-[#18392B]" />
                  View Bookings
                </Link>
                <Link
                  role="menuitem"
                  to="/profile-settings"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#333] hover:bg-[#F3F4EF]"
                >
                  <Settings className="h-4 w-4 text-[#18392B]" />
                  Profile Setting
                </Link>
                <button
                  type="button"
                  role="menuitem"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-[#9B352B] hover:bg-[#FFF4F2]"
                >
                  <LogOut className="h-4 w-4" />
                  Log Out
                </button>
              </div>
            )}
          </>
        ) : (
          <Link to="/login">
            <CustomButton>Login / Signup</CustomButton>
          </Link>
        )}
      </div>

      <nav
        id="mobile-navigation"
        className={`absolute left-0 top-full w-full flex-col gap-1 bg-[#F3F2EB] px-6 pb-4 pt-2 shadow-md lg:hidden ${
          isMobileMenuOpen ? 'flex' : 'hidden'
        }`}
        aria-label="Mobile navigation"
      >
        {navItems.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `rounded-lg px-3 py-2.5 font-['Sora',sans-serif] text-sm transition-colors hover:bg-black/5 ${
                isActive ? 'font-bold text-[#1E3E34]' : 'font-medium text-[#333333]'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}

        {user ? (
          <>
            <Link
              to="/my-bookings"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 rounded-lg px-3 py-2.5 font-['Sora',sans-serif] text-sm font-semibold text-[#18392B] hover:bg-black/5"
            >
              View Bookings
            </Link>
            <Link
              to="/profile-settings"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 font-['Sora',sans-serif] text-sm font-semibold text-[#18392B] hover:bg-black/5"
            >
              Profile Setting
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg px-3 py-2.5 text-left font-['Sora',sans-serif] text-sm font-semibold text-[#9B352B] hover:bg-black/5"
            >
              Log Out
            </button>
          </>
        ) : (
          <Link
            to="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 rounded-lg bg-[#FFA300] px-3 py-2.5 text-center font-['Sora',sans-serif] text-sm font-semibold text-gray-900"
          >
            Login / Signup
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;