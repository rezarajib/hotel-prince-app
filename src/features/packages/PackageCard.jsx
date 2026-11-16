import { useState } from 'react';
import { X, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ItemCard from '../../components/common/ItemCard';

const ROOMS = [
  { name: 'Room: 3002 - Family Suite - 03 Rooms', image: '/images/deluxe-room.png', desc: 'Enjoy a refreshing weekend with your loved ones at our resort with comfortable stay and delicious meals.', packagePrice: 6800, extraPrice: 1200, vat: 100, tax: 70, total: 8179 },
  { name: 'Room: 3005 - Deluxe Lake View - 02 Rooms', image: '/images/pkg-2.png', desc: 'Spacious lake-facing suite designed for families with private balcony and complimentary breakfast.', packagePrice: 7500, extraPrice: 1000, vat: 120, tax: 80, total: 8700 },
];

const GALLERY = ['/images/pkg-1.png', '/images/pkg-2.png', '/images/pkg-3.png', '/images/pkg-4.png'];

const FEATURES = [
  ['Activities Included', ['Swimming Pool', 'Indoor Games', 'Outdoor Games', 'Kids Play Zone', 'Nature Walk']],
  ['Activities Included', ['Water Ride', 'Boat Ride']],
  ['Additional Services', ['Free Wi-Fi', 'Parking', 'Welcome Drinks', 'Bonfire', 'Tour Guide']],
];

const PackageCard = ({ pkg }) => {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [more, setMore] = useState(false);
  const navigate = useNavigate();

  if (!pkg) return null;

  const rooms = pkg.includedRooms || ROOMS;
  const room = rooms[idx];
  const gallery = pkg.gallery?.length ? pkg.gallery : GALLERY;

  const specs = [
    ['Maximum Adults', pkg.maxAdults || '02 people'], ['Maximum Children', pkg.maxChildren || '02 kids'],
    ['Check-In', pkg.checkIn || '11.30am'], ['Check-Out', pkg.checkOut || '10.00am'],
    ['Bed Type', pkg.bedType || 'King Bed'], ['Number of Beds', pkg.numberOfBeds || '02 Beds'],
    ['Room Size', pkg.roomSize || '350sqf'], ['Meal Select', pkg.meal || 'Breakfast'],
  ];

  const bookNow = () => {
    setOpen(false);
    navigate('/checkout', { state: { pkg, selectedRoom: room } });
  };

  return (
    <>
      <ItemCard
        image={pkg.image || '/images/pkg-1.png'}
        onImageError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = '/images/pkg-1.png';
        }}
        code={pkg.code || 'PKG-0001'}
        title={pkg.title}
        specs={[
          { value: pkg.price || '৳5,000', label: 'Package Price' },
          { value: pkg.guestCapacity || '2-6 Guest', label: 'Guest Capacity' },
          { value: pkg.duration || '2 Days, 1 Night', label: 'Package Duration' },
        ]}
        onClick={() => setOpen(true)}
        footerContent={
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-full cursor-pointer rounded-lg bg-[#18392B] py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#122b20]"
          >
            Book Now
          </button>
        }
      />

      {/* Modal */}
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-sm">
          <div onClick={(e) => e.stopPropagation()} className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden my-auto">
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#ECEEE9]">
              <h3 className="text-lg font-medium text-[#111]">Room Information</h3>
              <button onClick={() => setOpen(false)} className="text-[#555] hover:text-[#111] p-1 cursor-pointer"><X className="w-5 h-5" /></button>
            </div>

            <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left */}
                <div className="lg:col-span-8">
                  <h2 className="mb-2 font-serif text-3xl text-[#111] md:text-4xl">{pkg.title}</h2>
                  <p className="mb-6 text-sm text-[#666]">{pkg.description || 'Enjoy a refreshing weekend with your loved ones at our resort with comfortable accommodation and delicious meals.'}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-6">
                    <img src={pkg.detailsImage || '/images/rooms/bookDetails.png'} alt="" className="sm:col-span-7 h-60 w-full rounded-xl bg-[#F3F3F3] object-cover" />
                    <div className="sm:col-span-5 grid h-60 grid-cols-2 gap-3">
                      {gallery.slice(0, 4).map((src, i) => <img key={i} src={src} alt="" className="w-full h-full object-cover rounded-xl bg-[#F2F2F2]" />)}
                    </div>
                  </div>

                  <div className="border-y border-[#ECEEE9] py-5 mb-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {specs.map(([l, v]) => <div key={l}><p className="text-xs text-[#888]">{l}</p><p className="text-base font-medium text-[#111]">{v}</p></div>)}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {FEATURES.map(([title, items], i) => (
                      <div key={i}>
                        <p className="mb-3 text-xs text-[#888]">{title}</p>
                        <ul className="space-y-2">
                          {items.map((t) => <li key={t} className="flex items-center gap-2 text-sm text-[#222]"><CheckCircle2 className="w-4 h-4 shrink-0 text-[#22C55E]" /> {t}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div className="lg:col-span-4 bg-[#F7F7F7] rounded-2xl p-5 border border-[#ECEEE9] h-fit">
                  <h4 className="mb-3.5 text-base font-medium text-[#111]">Room Information</h4>
                  <div className="relative mb-3.5 h-40 overflow-hidden rounded-xl">
                    <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                    <button onClick={() => setIdx((i) => (i ? i - 1 : rooms.length - 1))} className="absolute left-2.5 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/90 rounded-md flex items-center justify-center shadow-xs cursor-pointer"><ChevronLeft className="w-3.5 h-3.5" /></button>
                    <button onClick={() => setIdx((i) => (i === rooms.length - 1 ? 0 : i + 1))} className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/90 rounded-md flex items-center justify-center shadow-xs cursor-pointer"><ChevronRight className="w-3.5 h-3.5" /></button>
                  </div>

                  <h5 className="mb-1 text-sm font-medium text-[#111]">{room.name}</h5>
                  <p className="mb-4 text-xs text-[#777]">
                    {more ? room.desc : `${room.desc.slice(0, 95)}... `}
                    <button onClick={() => setMore(!more)} className="text-[#3B82F6] font-medium cursor-pointer">{more ? 'Show Less' : 'Show More'}</button>
                  </p>

                  <div className="space-y-2 border-t border-[#E5E5E5] pt-3.5 text-xs">
                    {[['Package Price', room.packagePrice], ['Extra Price', room.extraPrice], ['VAT', room.vat], ['Tax', room.tax]].map(([l, a]) => (
                      <div key={l} className="flex justify-between text-[#666]"><span>{l}</span><span className="text-[#111]">৳{a}</span></div>
                    ))}
                  </div>

                  <div className="mt-3.5 flex justify-between border-t border-[#E5E5E5] pt-3.5 text-sm font-medium text-[#111]">
                    <span>Total Price</span><span>৳{room.total}</span>
                  </div>
                </div>
              </div>

              <button onClick={bookNow} className="mt-8 w-full cursor-pointer rounded-xl bg-[#18392B] py-3.5 text-base font-medium text-white hover:bg-[#122b20]">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PackageCard;