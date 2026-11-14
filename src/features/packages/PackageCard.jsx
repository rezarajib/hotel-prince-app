import React, { useState, useEffect } from 'react';
import fallbackImg from '../../assets/images/hotelPrince.jpg';

const PackageCard = ({ pkg }) => {
 
  const fileName = pkg.image ? pkg.image.split('/').pop() : 'pkg-1.png';
  
  // all folder path
  const possiblePaths = [
    pkg.image,
    `/images/${fileName}`,
    `/${fileName}`,
    `/images/packages/${fileName}`,
    fallbackImg,
  ];

  const [pathIndex, setPathIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState(possiblePaths[0]);

  useEffect(() => {
    setPathIndex(0);
    setImgSrc(possiblePaths[0]);
  }, [pkg.image]);

  const handleImageError = () => {
    const nextIndex = pathIndex + 1;
    if (nextIndex < possiblePaths.length) {
      setPathIndex(nextIndex);
      setImgSrc(possiblePaths[nextIndex]);
    }
  };

  return (
    <div className="bg-[#F7F8F3] rounded-2xl p-4 border border-[#ECEEE9] hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Package Image with Top-Right Arrow Button */}
        <div className="relative h-[200px] w-full rounded-xl overflow-hidden mb-4 group">
          <img
            src={imgSrc}
            onError={handleImageError}
            alt={pkg.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <button
            aria-label="View Package Details"
            className="absolute top-3 right-3 w-8 h-8 bg-white rounded-md flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.08337 9.91666L9.91671 4.08333M9.91671 4.08333H4.66671M9.91671 4.08333V9.33333"
                stroke="#18392B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Package Code */}
        <p className="text-[12px] text-[#7D827E] font-normal tracking-wide mb-1">
          {pkg.code}
        </p>

        {/* Package Title */}
        <h3 className="font-serif text-[22px] text-[#111111] font-normal leading-snug mb-4">
          {pkg.title}
        </h3>

        {/* Package Specs (Price, Guest, Duration) */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#E6E8E1] mb-5">
          <div>
            <p className="text-[14px] font-semibold text-[#111111] mb-0.5">
              {pkg.price}
            </p>
            <p className="text-[11px] text-[#7D827E]">Package Price</p>
          </div>

          <div>
            <p className="text-[14px] font-semibold text-[#111111] mb-0.5">
              {pkg.guestCapacity}
            </p>
            <p className="text-[11px] text-[#7D827E]">Guest Capacity</p>
          </div>

          <div>
            <p className="text-[14px] font-semibold text-[#111111] mb-0.5">
              {pkg.duration}
            </p>
            <p className="text-[11px] text-[#7D827E]">Package Duration</p>
          </div>
        </div>
      </div>

      {/* Book Now Button */}
      <button className="w-full py-2.5 bg-[#18392B] hover:bg-[#112A1F] text-white text-[13px] font-medium rounded-lg transition-colors duration-200">
        Book Now
      </button>
    </div>
  );
};

export default PackageCard;