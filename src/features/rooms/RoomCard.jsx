import React from 'react';

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 border border-[#ECEEE9] flex flex-col justify-between">
      <div>
        {/* Room Image with Top-Right Arrow Button */}
        <div className="relative h-[200px] w-full rounded-xl overflow-hidden mb-4 group">
          <img
            src={room.image}
            alt={room.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <button
            aria-label="View Room Details"
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

        {/* Code & Availability Badge */}
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[12px] text-[#7D827E] font-normal tracking-wide">
            {room.code}
          </span>
          <span className="text-[11px] text-[#22A047] bg-[#EAF8EE] border border-[#9BE3B0] px-2.5 py-0.5 rounded-[5px] font-medium">
            {room.availableRooms}
          </span>
        </div>

        {/* Room Title */}
        <h3 className="font-serif text-[22px] text-[#111111] font-normal leading-snug mb-4">
          {room.title}
        </h3>

        {/* Room Specs (Price, Guest, Bed) */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#F0F1EE] mb-5">
          <div>
            <p className="text-[14px] font-semibold text-[#111111] mb-0.5">
              {room.price}
            </p>
            <p className="text-[11px] text-[#7D827E]">Package Price</p>
          </div>

          <div>
            <p className="text-[14px] font-semibold text-[#111111] mb-0.5">
              {room.guestCapacity}
            </p>
            <p className="text-[11px] text-[#7D827E]">Guest Capacity</p>
          </div>

          <div>
            <p className="text-[14px] font-semibold text-[#111111] mb-0.5">
              {room.bedType}
            </p>
            <p className="text-[11px] text-[#7D827E]">Bed Type</p>
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

export default RoomCard;