import { useState } from 'react';
import { ArrowUpRight, X, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import fallbackImg from '../../assets/images/hotelPrince.jpg';

const GALLERY = ['/images/events/event-1.png', '/images/events/event-2.png', '/images/events/event-3.png', '/images/events/event-4.png'];
const FEATURES = [
  ['Event Facilities', ['Sound System', 'Stage Decoration', 'Lighting Setup', 'Generator Backup', 'Security']],
  ['Catering & Dining', ['Buffet Menu', 'Welcome Drinks', 'Live BBQ Station']],
  ['Additional Services', ['Free Wi-Fi', 'Valet Parking', 'Photography Zone', 'Event Coordinator']],
];

const EventCard = ({ event }) => {
  const [more, setMore] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const file = event.image?.split('/').pop() || 'event-1.png';
  const paths = [event.image, `/images/${file}`, `/${file}`, `/images/events/${file}`, fallbackImg];
  const [idx, setIdx] = useState(0);
  const [imgSrc, setImgSrc] = useState(paths[0]);

  const onImgErr = () => {
    if (idx + 1 < paths.length) {
      setIdx(idx + 1);
      setImgSrc(paths[idx + 1]);
    }
  };

  const desc = event.description || '';
  const isLong = desc.length > 105;

  const bookNow = () => {
    setOpen(false);
    navigate('/checkout', { state: { event } });
  };

  return (
    <>
      {/* Event Card */}
      <div className="bg-[#F7F8F3] rounded-2xl p-3.5 hover:shadow-md transition border border-[#ECEEE9] flex flex-col justify-between">
        <div>
          <div onClick={() => setOpen(true)} className="relative h-[165px] rounded-xl overflow-hidden mb-3 cursor-pointer group">
            <img src={imgSrc} onError={onImgErr} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <span className="absolute top-2.5 right-2.5 w-7 h-7 bg-white rounded-lg flex items-center justify-center shadow-xs group-hover:bg-[#18392B] group-hover:text-white transition">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <p className="text-[10px] text-[#888] mb-0.5">{event.code}</p>
          <h3 className="font-serif text-[18px] text-[#111] mb-1.5">{event.title}</h3>

          <p className="text-[11px] text-[#777] leading-relaxed mb-3.5">
            {more || !isLong ? desc : desc.slice(0, 105)}
            {isLong && (
              <button type="button" onClick={() => setMore(!more)} className="text-[#3B82F6] hover:underline font-medium ml-0.5 cursor-pointer">
                {more ? ' Show Less' : '...Show More'}
              </button>
            )}
          </p>
        </div>

        <div>
          <div className="flex justify-between pt-2.5 border-t border-[#E6E8E1] mb-3.5 gap-1">
            {[[event.guestCapacity, 'Guest Capacity'], [event.venue, 'Venue'], [event.price, 'Event Price']].map(([val, label]) => (
              <div key={label}>
                <p className="text-[12px] font-medium text-[#111] whitespace-nowrap">{val}</p>
                <p className="text-[9px] text-[#888] whitespace-nowrap">{label}</p>
              </div>
            ))}
          </div>

          <button type="button" onClick={() => setOpen(true)} className="w-full py-2.5 bg-[#18392B] hover:bg-[#122b20] text-white text-[12px] font-medium rounded-lg transition cursor-pointer">
            Book Now
          </button>
        </div>
      </div>

      {/* Event Modal */}
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[2px] p-4 overflow-y-auto">
          <div onClick={(e) => e.stopPropagation()} className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-auto">
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#ECEEE9]">
              <h3 className="text-[17px] font-medium text-[#111]">Event Information</h3>
              <button type="button" onClick={() => setOpen(false)} className="text-[#555] hover:text-[#111] p-1 cursor-pointer"><X className="w-5 h-5" /></button>
            </div>

            <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
              <h2 className="font-serif text-3xl text-[#111] mb-2">{event.title}</h2>
              <p className="text-[#666] text-[13px] mb-6">{desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-6">
                <img src={imgSrc} alt={event.title} className="sm:col-span-7 h-[220px] w-full object-cover rounded-xl" />
                <div className="sm:col-span-5 grid grid-cols-2 gap-3 h-[220px]">
                  {(event.gallery?.length ? event.gallery : GALLERY).map((src, i) => (
                    <img key={i} src={src} alt="" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = imgSrc || fallbackImg; }} className="w-full h-full object-cover rounded-xl bg-[#F3F3F3]" />
                  ))}
                </div>
              </div>

              <div className="border-y border-[#ECEEE9] py-4 mb-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[['Event Code', event.code], ['Guest Capacity', event.guestCapacity], ['Venue', event.venue], ['Event Price', event.price]].map(([l, v]) => (
                  <div key={l}><p className="text-[11px] text-[#888]">{l}</p><p className="text-[15px] font-medium text-[#111]">{v}</p></div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                {FEATURES.map(([title, items], i) => (
                  <div key={i}>
                    <p className="text-[12px] text-[#888] mb-3">{title}</p>
                    <ul className="space-y-2">
                      {items.map((t) => <li key={t} className="flex items-center gap-2 text-[13px] text-[#222]"><CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" /> {t}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              <button type="button" onClick={bookNow} className="w-full bg-[#18392B] hover:bg-[#122b20] text-white text-[15px] font-medium py-3.5 rounded-xl cursor-pointer">
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