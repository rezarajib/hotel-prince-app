import { useState } from 'react';
import { ArrowUpRight, X, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DEFAULT_ROOMS = [
  { roomNo: '3001', view: 'Lake View', price: '৳8500.00' },
  { roomNo: '3002', view: 'Mountain View', price: '৳8000.00' },
  { roomNo: '3003', view: 'Pool View', price: '৳7500.00' },
  { roomNo: '3004', view: 'Garden View', price: '৳7000.00' },
  { roomNo: '3005', view: 'Roadside View', price: '৳7000.00' },
];

const DEFAULT_GALLERY = [
  '/images/pkg-1.png',
  '/images/pkg-2.png',
  '/images/pkg-3.png',
  '/images/pkg-4.png',
];

const DEFAULT_FEATURES = [
  { title: 'Activities Included', items: ['Swimming Pool', 'Indoor Games', 'Outdoor Games', 'Kids Play Zone', 'Nature Walk'] },
  { title: 'Activities Included', items: ['Water Ride', 'Boat Ride'] },
  { title: 'Additional Services', items: ['Free Wi-Fi', 'Parking', 'Welcome Drinks', 'Bonfire', 'Tour Guide'] },
];

const CommonListingCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const rooms = item?.roomNumbers || DEFAULT_ROOMS;
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]?.roomNo);
  const navigate = useNavigate();

  if (!item) return null;

  const galleryImages = item.gallery?.length ? item.gallery : DEFAULT_GALLERY;

  const specs = [
    ['Maximum Adults', item.maxAdults || '02 people'],
    ['Maximum Children', item.maxChildren || '02 kids'],
    ['Check-In', item.checkIn || '11.30am'],
    ['Check-Out', item.checkOut || '10.00am'],
    ['Bed Type', item.bedType || 'King Bed'],
    ['Number of Beds', item.numberOfBeds || '02 Beds'],
    ['Room Size', item.roomSize || '350sqf'],
    ['Meal Select', item.meal || 'Breakfast'],
  ];

  const handleBook = () => {
    setIsOpen(false);
    navigate('/checkout', { state: { room: item, selectedRoomNo: selectedRoom } });
  };

  return (
    <>
      {/* Listing Card */}
      <div className="bg-white rounded-2xl p-4 border border-[#ECEEE9] shadow-xs hover:shadow-md transition flex flex-col">
        <div onClick={() => setIsOpen(true)} className="relative h-[200px] rounded-xl overflow-hidden mb-4 cursor-pointer group">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
          <span className="absolute top-3 right-3 w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-xs group-hover:bg-[#18392B] group-hover:text-white transition">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>

        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[11px] text-[#7D827E]">{item.code || 'RO-0001'}</span>
          <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-[#E8F8EE] text-[#1D8F4E] border border-[#C6EED6]">
            {item.availability || item.availableRooms || '02 Room Available'}
          </span>
        </div>

        <h3 className="font-serif text-[20px] text-[#111111] mb-3">{item.title}</h3>

        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#F0F1ED] mb-4 mt-auto text-[13px] font-medium text-[#111111]">
          <div><p>{item.price || '৳5,000'}</p><span className="block text-[10px] font-normal text-[#888]">Package Price</span></div>
          <div><p>{item.capacity || item.guestCapacity || '2-6 Guest'}</p><span className="block text-[10px] font-normal text-[#888]">Guest Capacity</span></div>
          <div><p>{item.bedType || item.duration || 'King Bed'}</p><span className="block text-[10px] font-normal text-[#888]">{item.duration ? 'Duration' : 'Bed Type'}</span></div>
        </div>

        <button onClick={() => setIsOpen(true)} className="w-full bg-[#18392B] hover:bg-[#122b20] text-white text-[13px] font-medium py-2.5 rounded-lg transition cursor-pointer">
          Book Now
        </button>
      </div>

      {/* Details Modal */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[2px] p-4 overflow-y-auto">
          <div onClick={(e) => e.stopPropagation()} className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden my-auto">
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#ECEEE9]">
              <h3 className="text-[17px] font-medium text-[#111111]">Room Information</h3>
              <button onClick={() => setIsOpen(false)} className="text-[#555] hover:text-[#111] p-1 cursor-pointer"><X className="w-5 h-5" /></button>
            </div>

            <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8">
                  <h2 className="font-serif text-3xl md:text-[36px] text-[#111111] mb-2">{item.title}</h2>
                  <p className="text-[#666] text-[13px] leading-relaxed mb-6">
                    {item.description || 'Enjoy a refreshing weekend with your loved ones at our resort. Experience comfortable accommodation, delicious meals, and fun-filled activities.'}
                  </p>

                  {/* Image Gallery (১টি বড় + ৪টি ছোট ছবি) */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-6">
                    <img src={item.detailsImage || '/images/rooms/bookDetails.png'} alt={item.title} className="sm:col-span-7 h-[230px] w-full object-cover rounded-xl bg-[#F3F3F3]" />
                    <div className="sm:col-span-5 grid grid-cols-2 gap-3 h-[230px]">
                      {galleryImages.slice(0, 4).map((imgSrc, i) => (
                        <div key={i} className="rounded-xl overflow-hidden bg-[#F2F2F2]">
                          <img src={imgSrc} alt={`${item.title} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specs Grid */}
                  <div className="border-y border-[#ECEEE9] py-5 mb-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {specs.map(([label, val]) => (
                      <div key={label}>
                        <p className="text-[11px] text-[#888]">{label}</p>
                        <p className="text-[15px] font-medium text-[#111]">{val}</p>
                      </div>
                    ))}
                  </div>

                  {/* Activities & Services */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {DEFAULT_FEATURES.map((group, idx) => (
                      <div key={idx}>
                        <p className="text-[12px] text-[#888] mb-3">{group.title}</p>
                        <ul className="space-y-2">
                          {group.items.map((text) => (
                            <li key={text} className="flex items-center gap-2 text-[13px] text-[#222]">
                              <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" /> {text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Room No & Pricing */}
                <div className="lg:col-span-4 bg-[#F7F7F7] rounded-2xl overflow-hidden border border-[#ECEEE9] h-fit">
                  <h4 className="px-5 py-4 text-[15px] font-medium text-[#111]">Room No &amp; Pricing</h4>
                  <div className="bg-[#E5E5E5] px-5 py-2.5 grid grid-cols-3 text-[11px] font-medium text-[#777]">
                    <span>Room No</span><span>Room View</span><span className="text-right">Total Price</span>
                  </div>
                  <div className="divide-y divide-[#EAEAEA]">
                    {rooms.map((r) => (
                      <button
                        key={r.roomNo}
                        type="button"
                        onClick={() => setSelectedRoom(r.roomNo)}
                        className={`w-full px-5 py-3.5 grid grid-cols-3 text-left text-[13px] transition cursor-pointer ${
                          selectedRoom === r.roomNo ? 'bg-[#18392B]/10 font-medium text-[#18392B]' : 'hover:bg-white/70 text-[#222]'
                        }`}
                      >
                        <span>{r.roomNo}</span><span>{r.view}</span><span className="text-right">{r.price}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button onClick={handleBook} className="w-full mt-8 bg-[#18392B] hover:bg-[#122b20] text-white text-[15px] font-medium py-3.5 rounded-xl transition cursor-pointer">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommonListingCard;