import { useState } from 'react';
import { ArrowUpRight, X, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
      {/* Card */}
      <div className="bg-[#F7F8F3] rounded-2xl p-3.5 border border-[#ECEEE9] hover:shadow-md transition flex flex-col">
        <div onClick={() => setOpen(true)} className="relative h-[165px] rounded-xl overflow-hidden mb-3 cursor-pointer group">
          <img src={pkg.image || '/images/pkg-1.png'} alt={pkg.title} onError={(e) => (e.currentTarget.src = '/images/pkg-1.png')} className="w-full h-full object-cover group-hover:scale-105 transition" />
          <span className="absolute top-2.5 right-2.5 w-7 h-7 bg-white rounded-lg flex items-center justify-center shadow-xs group-hover:bg-[#18392B] group-hover:text-white transition">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>

        <span className="text-[10px] text-[#888]">{pkg.code || 'PKG-0001'}</span>
        <h3 className="font-serif text-[18px] text-[#111] mb-3">{pkg.title}</h3>

        <div className="flex justify-between pt-2.5 border-t border-[#E6E8E1] mb-3.5 mt-auto text-[12px] font-medium text-[#111]">
          {[[pkg.price || '৳5,000', 'Package Price'], [pkg.guestCapacity || '2-6 Guest', 'Guest Capacity'], [pkg.duration || '2 Days, 1 Night', 'Package Duration']].map(([v, l]) => (
            <div key={l}><p className="whitespace-nowrap">{v}</p><span className="block text-[9px] font-normal text-[#888]">{l}</span></div>
          ))}
        </div>

        <button onClick={() => setOpen(true)} className="w-full bg-[#18392B] hover:bg-[#122b20] text-white text-[12px] font-medium py-2.5 rounded-lg cursor-pointer">
          Book Now
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[2px] p-4 overflow-y-auto">
          <div onClick={(e) => e.stopPropagation()} className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden my-auto">
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#ECEEE9]">
              <h3 className="text-[17px] font-medium text-[#111]">Room Information</h3>
              <button onClick={() => setOpen(false)} className="text-[#555] hover:text-[#111] p-1 cursor-pointer"><X className="w-5 h-5" /></button>
            </div>

            <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left */}
                <div className="lg:col-span-8">
                  <h2 className="font-serif text-3xl md:text-[36px] text-[#111] mb-2">{pkg.title}</h2>
                  <p className="text-[#666] text-[13px] mb-6">{pkg.description || 'Enjoy a refreshing weekend with your loved ones at our resort with comfortable accommodation and delicious meals.'}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-6">
                    <img src={pkg.detailsImage || '/images/rooms/bookDetails.png'} alt="" className="sm:col-span-7 h-[230px] w-full object-cover rounded-xl bg-[#F3F3F3]" />
                    <div className="sm:col-span-5 grid grid-cols-2 gap-3 h-[230px]">
                      {gallery.slice(0, 4).map((src, i) => <img key={i} src={src} alt="" className="w-full h-full object-cover rounded-xl bg-[#F2F2F2]" />)}
                    </div>
                  </div>

                  <div className="border-y border-[#ECEEE9] py-5 mb-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {specs.map(([l, v]) => <div key={l}><p className="text-[11px] text-[#888]">{l}</p><p className="text-[15px] font-medium text-[#111]">{v}</p></div>)}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {FEATURES.map(([title, items], i) => (
                      <div key={i}>
                        <p className="text-[12px] text-[#888] mb-3">{title}</p>
                        <ul className="space-y-2">
                          {items.map((t) => <li key={t} className="flex items-center gap-2 text-[13px] text-[#222]"><CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" /> {t}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div className="lg:col-span-4 bg-[#F7F7F7] rounded-2xl p-5 border border-[#ECEEE9] h-fit">
                  <h4 className="text-[16px] font-medium text-[#111] mb-3.5">Room Information</h4>
                  <div className="relative h-[165px] rounded-xl overflow-hidden mb-3.5">
                    <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                    <button onClick={() => setIdx((i) => (i ? i - 1 : rooms.length - 1))} className="absolute left-2.5 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/90 rounded-md flex items-center justify-center shadow-xs cursor-pointer"><ChevronLeft className="w-3.5 h-3.5" /></button>
                    <button onClick={() => setIdx((i) => (i === rooms.length - 1 ? 0 : i + 1))} className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/90 rounded-md flex items-center justify-center shadow-xs cursor-pointer"><ChevronRight className="w-3.5 h-3.5" /></button>
                  </div>

                  <h5 className="text-[14px] font-medium text-[#111] mb-1">{room.name}</h5>
                  <p className="text-[11px] text-[#777] mb-4">
                    {more ? room.desc : `${room.desc.slice(0, 95)}... `}
                    <button onClick={() => setMore(!more)} className="text-[#3B82F6] font-medium cursor-pointer">{more ? 'Show Less' : 'Show More'}</button>
                  </p>

                  <div className="border-t border-[#E5E5E5] pt-3.5 space-y-2 text-[12px]">
                    {[['Package Price', room.packagePrice], ['Extra Price', room.extraPrice], ['VAT', room.vat], ['Tax', room.tax]].map(([l, a]) => (
                      <div key={l} className="flex justify-between text-[#666]"><span>{l}</span><span className="text-[#111]">৳{a}</span></div>
                    ))}
                  </div>

                  <div className="border-t border-[#E5E5E5] mt-3.5 pt-3.5 flex justify-between text-[14px] font-medium text-[#111]">
                    <span>Total Price</span><span>৳{room.total}</span>
                  </div>
                </div>
              </div>

              <button onClick={bookNow} className="w-full mt-8 bg-[#18392B] hover:bg-[#122b20] text-white text-[15px] font-medium py-3.5 rounded-xl cursor-pointer">
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