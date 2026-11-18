import React from 'react';
import { Link } from 'react-router-dom';

const SuggestedLinks = () => {
  const quickLinks = [
    { name: 'Our Rooms', path: '/rooms' },
    { name: 'Special Packages', path: '/packages' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Events', path: '/events' },
  ];

  return (
    <div className="mt-8 flex flex-col items-center">
      {/* Primary Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="px-6 py-3 bg-amber-600 text-white font-medium rounded-lg shadow-sm hover:bg-amber-700 transition duration-200"
        >
          Back to Home
        </Link>
        
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition duration-200 cursor-pointer"
        >
          Go Back
        </button>
      </div>

      {/* Helpful Navigation Links */}
      <div className="mt-10 pt-6 border-t border-gray-200 w-full max-w-md text-center">
        <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
          Or explore our popular pages
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm text-gray-600 hover:text-amber-600 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestedLinks;