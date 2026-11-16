import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RoomDetailsModal = ({ room, onClose }) => {
  const navigate = useNavigate();

  const roomPricingList = room?.roomNumbers || [
    { roomNo: '3001', view: 'Lake View', price: '৳8500.00' },
    { roomNo: '3002', view: 'Mountain View', price: '৳8000.00' },
    { roomNo: '3003', view: 'Pool View', price: '৳7500.00' },
    { roomNo: '3004', view: 'Garden View', price: '৳7000.00' },
    { roomNo: '3005', view: 'Roadside View', price: '৳7000.00' },
  ];

  const [selectedRoomNo, setSelectedRoomNo] = useState(roomPricingList[0]?.roomNo);

  if (!room) return null;

  const activitiesCol1 = room.activitiesLeft || [
    'Swimming Pool',
    'Indoor Games',
    'Outdoor Games',
    'Kids Play Zone',
    'Nature Walk',
  ];

  const activitiesCol2 = room.activitiesRight || [
    'Water Ride',
    'Boat Ride',
  ];

  const additionalServices = room.additionalServices || [
    'Free Wi-Fi',
    'Parking',
    'Welcome Drinks',
    'Bonfire',
    'Tour Guide',
  ];

  const handleConfirmBooking = () => {
    onClose();
    navigate('/checkout', { state: { room, selectedRoomNo } });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-sm md:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-[#ECEEE9]">
          <h3 className="text-base font-medium text-[#111111] md:text-lg">
            Room Information
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-[#555555] hover:text-[#111111] p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <h2 className="mb-2 font-serif text-3xl font-normal leading-tight text-[#111111] md:text-4xl">
                {room.title || 'Deluxe Room'}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-[#666666]">
                {room.description ||
                  'Enjoy a refreshing weekend with your loved ones at our resort. Experience comfortable accommodation, delicious meals, fun-filled activities, and quality family time surrounded by beautiful natural scenery.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-6">
                <div className="h-56 overflow-hidden rounded-xl bg-[#F3F3F3] sm:col-span-7 md:h-60">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid h-56 grid-cols-2 gap-3 sm:col-span-5 md:h-60">
                  {[0, 1, 2, 3].map((idx) => (
                    <div
                      key={idx}
                      className="rounded-xl overflow-hidden bg-[#F2F2F2]"
                    >
                      {room.gallery?.[idx] ? (
                        <img
                          src={room.gallery[idx]}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-b border-[#ECEEE9] py-5 mb-6 grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-4">
                <div>
                  <p className="mb-0.5 text-xs text-[#888888]">Maximum Adults</p>
                  <p className="text-base font-medium text-[#111111]">{room.maxAdults || '02 people'}</p>
                </div>
                <div>
                  <p className="mb-0.5 text-xs text-[#888888]">Maximum Children</p>
                  <p className="text-base font-medium text-[#111111]">{room.maxChildren || '02 kids'}</p>
                </div>
                <div>
                  <p className="mb-0.5 text-xs text-[#888888]">Check-In</p>
                  <p className="text-base font-medium text-[#111111]">{room.checkIn || '11.30am'}</p>
                </div>
                <div>
                  <p className="mb-0.5 text-xs text-[#888888]">Check-Out</p>
                  <p className="text-base font-medium text-[#111111]">{room.checkOut || '10.00am'}</p>
                </div>
                <div>
                  <p className="mb-0.5 text-xs text-[#888888]">Bed Type</p>
                  <p className="text-base font-medium text-[#111111]">{room.bedType || 'King Bed'}</p>
                </div>
                <div>
                  <p className="mb-0.5 text-xs text-[#888888]">Number of Beds</p>
                  <p className="text-base font-medium text-[#111111]">{room.numberOfBeds || '02 Beds'}</p>
                </div>
                <div>
                  <p className="mb-0.5 text-xs text-[#888888]">Room Size</p>
                  <p className="text-base font-medium text-[#111111]">{room.roomSize || '350sqf'}</p>
                </div>
                <div>
                  <p className="mb-0.5 text-xs text-[#888888]">Meal Select</p>
                  <p className="text-base font-medium text-[#111111]">{room.meal || 'Breakfast'}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <p className="mb-3 text-xs text-[#888888]">Activities Included</p>
                  <ul className="space-y-2.5">
                    {activitiesCol1.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-[#222222]">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-xs text-[#888888]">Activities Included</p>
                  <ul className="space-y-2.5">
                    {activitiesCol2.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-[#222222]">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-xs text-[#888888]">Additional Services</p>
                  <ul className="space-y-2.5">
                    {additionalServices.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-[#222222]">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-[#F7F7F7] rounded-2xl overflow-hidden border border-[#ECEEE9]">
                <div className="px-5 py-4">
                  <h4 className="text-base font-medium text-[#111111]">Room No &amp; Pricing</h4>
                </div>
                <div className="grid grid-cols-3 bg-[#E5E5E5] px-5 py-2.5 text-xs font-medium text-[#777777]">
                  <span>Room No</span>
                  <span>Room View</span>
                  <span className="text-right">Total Price</span>
                </div>
                <div className="divide-y divide-[#EAEAEA]">
                  {roomPricingList.map((item) => {
                    const isSelected = selectedRoomNo === item.roomNo;
                    return (
                      <button
                        key={item.roomNo}
                        type="button"
                        onClick={() => setSelectedRoomNo(item.roomNo)}
                        className={`grid w-full cursor-pointer grid-cols-3 px-5 py-3.5 text-left text-sm transition-colors ${
                          isSelected
                            ? 'bg-[#18392B]/10 font-medium text-[#18392B]'
                            : 'hover:bg-white/70 text-[#222222]'
                        }`}
                      >
                        <span>{item.roomNo}</span>
                        <span>{item.view}</span>
                        <span className="text-right">{item.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="button"
              onClick={handleConfirmBooking}
              className="w-full cursor-pointer rounded-xl bg-[#18392B] py-3.5 text-base font-medium text-white transition-colors hover:bg-[#122b20]"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsModal;