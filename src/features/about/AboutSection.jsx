import React from 'react';
import aboutHotelImg from '../../assets/images/about-hotel.png';

const AboutSection = () => {
  return (
    <section className="relative bg-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      
      {/* Figma Exact Dashed Curve & Paper Plane Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Left to Center Dashed Curve (before paper plane) */}
          <path
            d="M -20 430 C 150 530, 420 550, 615 480"
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeDasharray="5 5"
          />

          {/* Center to Top-Right Dashed Curve (after paper plane, behind images) */}
          <path
            d="M 675 450 C 860 360, 960 60, 1080 60 C 1190 60, 1320 260, 1460 460"
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeDasharray="5 5"
          />

          {/* Paper Plane Icon positioned on the curve */}
          <g transform="translate(612, 452) rotate(-8)">
            <path
              d="M2 18L58 4L38 42L27 26L2 18Z"
              fill="white"
              stroke="#475569"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            <path
              d="M58 4L27 26V38L34 30"
              stroke="#475569"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#FF9A00]"></span>
              <span className="text-[#666666] font-medium text-sm md:text-base">
                About Hotel Prince
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-[62px] text-[#111111] leading-[1.1] font-normal mb-6">
              Consider this <br />
              your place to unwind.
            </h2>

            <p className="text-[#666666] text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Welcome to Hotel Prince, where comfort meets elegance. Discover a
              relaxing escape designed to make every stay special. From thoughtfully
              designed rooms and warm hospitality to delightful dining and memorable
              experiences, every detail is crafted around your comfort. Whether you're
              planning a peaceful getaway or a special occasion, Hotel Prince is your
              perfect place to unwind, recharge, and create lasting memories.
            </p>

            <button className="px-7 py-3.5 bg-[#18392B] hover:bg-[#122b20] text-white font-medium text-sm rounded-lg shadow-sm transition-all duration-200">
              More About Us
            </button>
          </div>

          {/* Right Side: Single Exported Figma Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px]">
              <img
                src={aboutHotelImg}
                alt="About Hotel Prince"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>

        {/* Bottom Statistics (Removed border-t to match Figma) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4">
          <div>
            <h4 className="font-serif text-lg text-[#111111] font-normal mb-2">
              Happy Guests
            </h4>
            <p className="text-4xl md:text-5xl font-medium text-[#111111] tracking-tight">
              1000+
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-[#111111] font-normal mb-2">
              Luxury Rooms
            </h4>
            <p className="text-4xl md:text-5xl font-medium text-[#111111] tracking-tight">
              50+
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-[#111111] font-normal mb-2">
              Guest Satisfaction
            </h4>
            <p className="text-4xl md:text-5xl font-medium text-[#111111] tracking-tight">
              4.8/5
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-[#111111] font-normal mb-2">
              Years of Excellence
            </h4>
            <p className="text-4xl md:text-5xl font-medium text-[#111111] tracking-tight">
              15+
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;