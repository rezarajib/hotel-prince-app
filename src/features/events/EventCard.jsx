import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import fallbackImg from '../../assets/images/hotelPrince.jpg';

const GALLERY = ['/images/pkg-1.png', '/images/pkg-2.png', '/images/pkg-3.png', '/images/pkg-4.png'];
const FEATURES = [
  ['Event Facilities', ['Sound System', 'Stage Decoration', 'Lighting Setup', 'Generator Backup', 'Security']],
  ['Catering & Dining', ['Buffet Menu', 'Welcome Drinks', 'Live BBQ Station']],
  ['Additional Services', ['Free Wi-Fi', 'Valet Parking', 'Photography Zone', 'Event Coordinator']],
];

const EventCard = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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

  const maxLength = 105;
  const shouldTruncate = event.description && event.description.length > maxLength;
  const displayedText =
    isExpanded || !shouldTruncate
      ? event.description
      : event.description.slice(0, maxLength);

  const handleConfirmBooking = () => {
    setIsOpen(false);
    navigate('/checkout', { state: { event } });
  };

  return (
    <>
      {/* Event Card */}
      <div className="bg-[#F7F8F3] rounded-2xl p-3.5 hover:shadow-md transition-all duration-300 border border-[#ECEEE9] flex flex-col justify-between">
        <div>
          {/* Event Image */}
          <div
            onClick={() => setIsOpen(true)}
            className="relative h-[165px] w-full rounded-xl overflow-hidden mb-3 cursor-pointer group"
          >
            <img
              src={imgSrc}
              onError={handleImageError}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <button
              type="button"
              aria-label="View Event Details"
              className="absolute top-2.5 right-2.5 w-7 h-7 bg-white rounded-lg flex items-center justify-center shadow-xs group-hover:bg-[#18392B] group-hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Event Code */}
          <p className="text-[10px] text-[#888888] font-normal tracking-wide mb-0.5">
            {event.code}
          </p>

          {/* Event Title */}
          <h3 className="font-serif text-[18px] text-[#111111] font-normal leading-snug mb-1.5">
            {event.title}
          </h3>

          {/* Description with Show More / Show Less */}
          <div className="mb-3.5">
            <p className="text-[11px] text-[#777777] leading-relaxed">
              {displayedText}
              {shouldTruncate && (
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#3B82F6] hover:underline font-medium ml-0.5 inline cursor-pointer"
                >
                  {isExpanded ? ' Show Less' : '...Show More'}
                </button>
              )}
            </p>
          </div>
        </div>

        <div>
          {/* Event Specs (এক লাইনে ফিট করা) */}
          <div className="flex items-center justify-between pt-2.5 border-t border-[#E6E8E1] mb-3.5 gap-1">
            <div>
              <p className="text-[12px] font-medium text-[#111111] whitespace-nowrap">
                {event.guestCapacity}
              </p>
              <p className="text-[9px] text-[#888888] whitespace-nowrap">Guest Capacity</p>
            </div>

            <div>
              <p className="text-[12px] font-medium text-[#111111] whitespace-nowrap">
                {event.venue}
              </p>
              <p className="text-[9px] text-[#888888] whitespace-nowrap">Venue</p>
            </div>

            <div>
              <p className="text-[12px] font-medium text-[#111111] whitespace-nowrap">
                {event.price}
              </p>
              <p className="text-[9px] text-[#888888] whitespace-nowrap">Event Price</p>
            </div>
          </div>

          {/* Book Now Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="w-full py-2.5 bg-[#18392B] hover:bg-[#122b20] text-white text-[12px] font-medium rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Event Details Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[2px] p-4 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-auto"
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#ECEEE9]">
              <h3 className="text-[17px] font-medium text-[#111111]">Event Information</h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-[#555] hover:text-[#111] p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
              <h2 className="font-serif text-3xl text-[#111111] mb-2">{event.title}</h2>
              <p className="text-[#666] text-[13px] mb-6">{event.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-6">
                <img src={imgSrc} alt={event.title} className="sm:col-span-7 h-[220px] w-full object-cover rounded-xl" />
                <div className="sm:col-span-5 grid grid-cols-2 gap-3 h-[220px]">
                  {GALLERY.map((src, i) => (
                    <img key={i} src={src} alt="" className="w-full h-full object-cover rounded-xl" />
                  ))}
                </div>
              </div>

              <div className="border-y border-[#ECEEE9] py-4 mb-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  ['Event Code', event.code],
                  ['Guest Capacity', event.guestCapacity],
                  ['Venue', event.venue],
                  ['Event Price', event.price],
                ].map(([label, val]) => (
                  <div key={label}>
                    <p className="text-[11px] text-[#888]">{label}</p>
                    <p className="text-[15px] font-medium text-[#111]">{val}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                {FEATURES.map(([title, items], i) => (
                  <div key={i}>
                    <p className="text-[12px] text-[#888] mb-3">{title}</p>
                    <ul className="space-y-2">
                      {items.map((text) => (
                        <li key={text} className="flex items-center gap-2 text-[13px] text-[#222]">
                          <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" /> {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={handleConfirmBooking}
                className="w-full bg-[#18392B] hover:bg-[#122b20] text-white text-[15px] font-medium py-3.5 rounded-xl cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;