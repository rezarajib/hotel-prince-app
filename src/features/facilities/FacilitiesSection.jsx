import React from 'react';

const facilitiesData = [
  {
    id: 1,
    title: 'Swimming Pool',
    description: 'Relax and refresh in our beautiful swimming pool.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18392B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="17" cy="8.5" r="2" />
        <path d="M4 11.5h4.5l3-2.5 3.5 2.5" />
        <path d="M7.5 11.5L10 14" />
        <path d="M3 16.5c1.5 1.2 3.5 1.2 5 0s3.5-1.2 5 0 3.5 1.2 5 0c1-.8 2-1 3-.5" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Spa & Wellness',
    description: 'Rejuvenate your body and mind with relaxing treatments.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18392B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Center Petal */}
        <path d="M12 4.5C9.5 7.5 8.5 11 9.5 15c1.5-.8 3.5-.8 5 0 1-4 0-7.5-2.5-10.5z" />
        {/* Left & Right Petals */}
        <path d="M9.2 10.5C6.8 11.2 5.5 13.5 6 16.5c2 0 3.8-.6 5-1.5" />
        <path d="M14.8 10.5c2.4.7 3.7 3 3.2 6-2 0-3.8-.6-5-1.5" />
        {/* Inner Heart */}
        <path d="M12 12.2c-.7-.8-1.8-.6-2 .3-.2.8.8 1.6 2 2.4 1.2-.8 2.2-1.6 2-2.4-.2-.9-1.3-1.1-2-.3z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Fitness Center',
    description: 'Stay active with our fully equipped fitness facilities.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18392B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Barbell Top */}
        <path d="M5 8h14" />
        <path d="M6.5 6v4" />
        <path d="M17.5 6v4" />
        <path d="M5 7v2" />
        <path d="M19 7v2" />
        {/* Bench & Supports */}
        <path d="M9.5 8v6.5" />
        <path d="M14.5 8v6.5" />
        <path d="M7.5 14.5h9" />
        <path d="M9 14.5L7.5 18" />
        <path d="M15 14.5L16.5 18" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Restaurant',
    description: 'Enjoy delicious meals and memorable dining experiences.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18392B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Crossed Fork & Knife */}
        <path d="M6 6l12 12" />
        <path d="M5 7l2.5 2.5a2 2 0 0 0 2.8 0L12.5 7.3" />
        <path d="M7.2 4.8L9.7 7.3" />
        <path d="M18 6L6 18" />
        <path d="M18 6c1.5 1.5 1.2 4.2-.8 6.2L15 14.4" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Conference Room',
    description: 'Perfect spaces for meetings and corporate gatherings.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18392B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4.5" y="5.5" width="15" height="13" rx="3.5" />
        <circle cx="10.5" cy="10.5" r="2" />
        <path d="M7.5 15.5c.7-1.6 5.3-1.6 6 0" />
        <path d="M15 9.5h1.8" />
        <path d="M15 12h1.2" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Free Parking',
    description: 'Convenient and secure parking for your vehicle.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18392B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Garage Roof & Walls */}
        <path d="M5 18V9.5L12 6l7 3.5V18" />
        {/* Car Front */}
        <path d="M8.5 14.5l1-3h5l1 3" />
        <rect x="7.8" y="14.5" width="8.4" height="2.5" rx="0.8" />
        <path d="M8.5 17v1.2" />
        <path d="M15.5 17v1.2" />
        <circle cx="9.6" cy="15.7" r="0.4" fill="#18392B" />
        <circle cx="14.4" cy="15.7" r="0.4" fill="#18392B" />
      </svg>
    ),
  },
  {
    id: 7,
    title: '24/7 Reception',
    description: 'Friendly assistance whenever you need it.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18392B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Monitor / Screen Left */}
        <rect x="6.5" y="6.5" width="5.5" height="5" rx="0.8" />
        <path d="M9.2 11.5V14" />
        {/* Desk */}
        <path d="M6 14h11.5" />
        <path d="M7.5 14v4.5" />
        <path d="M16 14v4.5" />
        {/* Receptionist / Guest Right */}
        <circle cx="15" cy="9.5" r="1.4" />
        <path d="M13 14c.3-1.4 3.7-1.4 4 0" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Outdoor Space',
    description: 'Unwind in peaceful and refreshing surroundings.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18392B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Pine Tree Left */}
        <path d="M9 6.5L6.5 9.5h5L9 6.5z" />
        <path d="M9 9.5L6 13h6L9 9.5z" />
        <path d="M9 13v2" />
        {/* Sun Right */}
        <circle cx="15.5" cy="8.5" r="1.8" />
        {/* Water Waves */}
        <path d="M5 15.5c2 .8 4 .8 6 0s4-.8 6 0c.8.3 1.5.4 2 .2" />
        <path d="M5 18c2 .8 4 .8 6 0s4-.8 6 0c.8.3 1.5.4 2 .2" />
      </svg>
    ),
  },
];

const FacilitiesSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#666666] text-sm md:text-base font-normal mb-2">
            Our Facilities
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-[#18392B] font-normal leading-tight mb-4">
            Everything You Need for a Perfect Stay
          </h2>
          <p className="text-[#666666] text-sm md:text-[15px] leading-relaxed">
            Enjoy a seamless and comfortable stay with thoughtfully curated facilities designed to
            make every moment relaxing, convenient, and memorable.
          </p>
        </div>

        {/* 8-Card Facilities Grid (4 columns x 2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilitiesData.map((item) => (
            <div
              key={item.id}
              className="bg-[#F3F3EC] rounded-[24px] p-7 flex flex-col justify-between min-h-[215px] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Top-Left White Icon Box */}
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.03)] mb-10">
                {item.icon}
              </div>

              {/* Bottom Title & Description */}
              <div>
                <h3 className="font-serif text-[22px] text-[#18392B] font-normal leading-snug mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[12px] text-[#7D827E] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FacilitiesSection;