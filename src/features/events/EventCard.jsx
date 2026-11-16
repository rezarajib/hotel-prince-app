import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import fallbackImg from '../../assets/images/hotelPrince.jpg';
import ItemCard from '../../components/common/ItemCard';

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

  const desc = event.description || '';
  const isLong = desc.length > 105;
  const image = event.image || fallbackImg;
  const handleImageError = (errorEvent) => {
    errorEvent.currentTarget.onerror = null;
    errorEvent.currentTarget.src = fallbackImg;
  };

  const bookNow = () => {
    setOpen(false);
    navigate('/checkout', { state: { event } });
  };

  return (
    <>
      <ItemCard
        image={image}
        onImageError={handleImageError}
        code={event.code}
        title={event.title}
        badgeText={event.category}
        specs={[
          { value: event.guestCapacity, label: 'Guest Capacity' },
          { value: event.venue, label: 'Venue' },
          { value: event.price, label: 'Event Price' },
        ].filter((spec) => spec.value)}
        onClick={() => setOpen(true)}
        footerContent={
          <>
            <p className="mb-3.5 text-xs leading-relaxed text-[#777777]">
              {more || !isLong ? desc : desc.slice(0, 105)}
              {isLong && (
                <button
                  type="button"
                  onClick={() => setMore(!more)}
                  className="ml-1 cursor-pointer font-medium text-blue-600 hover:underline"
                >
                  {more ? 'Show Less' : '...Show More'}
                </button>
              )}
            </p>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="w-full cursor-pointer rounded-lg bg-[#18392B] py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#122b20]"
            >
              Book Now
            </button>
          </>
        }
      />

      {/* Event Modal */}
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-sm">
          <div onClick={(e) => e.stopPropagation()} className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-auto">
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#ECEEE9]">
              <h3 className="text-lg font-medium text-[#111]">Event Information</h3>
              <button type="button" onClick={() => setOpen(false)} className="text-[#555] hover:text-[#111] p-1 cursor-pointer"><X className="w-5 h-5" /></button>
            </div>

            <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
              <h2 className="font-serif text-3xl text-[#111] mb-2">{event.title}</h2>
              <p className="mb-6 text-sm text-[#666]">{desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-6">
                <img src={image} alt={event.title} className="sm:col-span-7 h-56 w-full object-cover rounded-xl" />
                <div className="sm:col-span-5 grid h-56 grid-cols-2 gap-3">
                  {(event.gallery?.length ? event.gallery : GALLERY).map((src, i) => (
                    <img key={i} src={src} alt="" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = image; }} className="w-full h-full object-cover rounded-xl bg-[#F3F3F3]" />
                  ))}
                </div>
              </div>

              <div className="border-y border-[#ECEEE9] py-4 mb-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[['Event Code', event.code], ['Guest Capacity', event.guestCapacity], ['Venue', event.venue], ['Event Price', event.price]].map(([l, v]) => (
                  <div key={l}><p className="text-xs text-[#888]">{l}</p><p className="text-base font-medium text-[#111]">{v}</p></div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                {FEATURES.map(([title, items], i) => (
                  <div key={i}>
                    <p className="mb-3 text-xs text-[#888]">{title}</p>
                    <ul className="space-y-2">
                      {items.map((t) => <li key={t} className="flex items-center gap-2 text-sm text-[#222]"><CheckCircle2 className="w-4 h-4 shrink-0 text-[#22C55E]" /> {t}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              <button type="button" onClick={bookNow} className="w-full cursor-pointer rounded-xl bg-[#18392B] py-3.5 text-base font-medium text-white hover:bg-[#122b20]">
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