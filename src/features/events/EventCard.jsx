import React, { useState, useEffect } from 'react';
import fallbackImg from '../../assets/images/hotelPrince.jpg';

const EventCard = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fileName = event.image ? event.image.split('/').pop() : 'event-1.png';
  const possiblePaths = [
    event.image,
    `/images/${fileName}`,
    `/${fileName}`,
    `/images/events/${fileName}`,
    fallbackImg,
  ];

  const [pathIndex, setPathIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState(possiblePaths[0]);

  useEffect(() => {
    setPathIndex(0);
    setImgSrc(possiblePaths[0]);
  }, [event.image]);

  const handleImageError = () => {
    const nextIndex = pathIndex + 1;
    if (nextIndex < possiblePaths.length) {
      setPathIndex(nextIndex);
      setImgSrc(possiblePaths[nextIndex]);
    }
  };

 
  const maxLength = 108;
  const shouldTruncate = event.description && event.description.length > maxLength;
  const displayedText =
    isExpanded || !shouldTruncate
      ? event.description
      : event.description.slice(0, maxLength);

  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 border border-[#ECEEE9] flex flex-col justify-between">
      <div>
        {/* Event Image with Top-Right Arrow Button */}
        <div className="relative h-[200px] w-full rounded-xl overflow-hidden mb-4 group">
          <img
            src={imgSrc}
            onError={handleImageError}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <button
            aria-label="View Event Details"
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

        {/* Event Code */}
        <p className="text-[12px] text-[#7D827E] font-normal tracking-wide mb-1">
          {event.code}
        </p>

        {/* Event Title */}
        <h3 className="font-serif text-[22px] text-[#111111] font-normal leading-snug mb-3">
          {event.title}
        </h3>

        {/* Description with Show More / Show Less */}
        <div className="pt-3 border-t border-[#F0F1EE] mb-4">
          <p className="text-[12px] text-[#7D827E] leading-relaxed">
            {displayedText}
            {shouldTruncate && (
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#2563EB] hover:underline font-medium ml-0.5 inline"
              >
                {isExpanded ? ' Show Less' : '...Show More'}
              </button>
            )}
          </p>
        </div>

        {/* Event Specs (Guest Capacity, Venue, Event Price) */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#F0F1EE] mb-5">
          <div>
            <p className="text-[13px] font-semibold text-[#111111] mb-0.5">
              {event.guestCapacity}
            </p>
            <p className="text-[11px] text-[#7D827E]">Guest Capacity</p>
          </div>

          <div>
            <p className="text-[13px] font-semibold text-[#111111] mb-0.5">
              {event.venue}
            </p>
            <p className="text-[11px] text-[#7D827E]">Venue</p>
          </div>

          <div>
            <p className="text-[13px] font-semibold text-[#111111] mb-0.5">
              {event.price}
            </p>
            <p className="text-[11px] text-[#7D827E]">Event Price</p>
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

export default EventCard;