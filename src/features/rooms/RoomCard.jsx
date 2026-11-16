import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import RoomDetailsModal from '../../pages/rooms/RoomDetailsModal';

const RoomCard = ({ room }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!room) return null;

  return (
    <>
      <article className="flex h-full flex-col justify-between rounded-[20px] bg-white p-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5">
        <div className="group relative overflow-hidden rounded-xl">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label={`View ${room.title}`}
            className="block h-52 w-full cursor-pointer"
          >
            <img
              src={room.image}
              alt={room.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
          <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-[#111111]" />
          </span>
        </div>

        <div className="flex min-w-0 items-center justify-between gap-2 pt-4">
          <span className="min-w-0 wrap-break-word text-xs text-[#7D827E]">{room.code || 'RO-0001'}</span>
          <span className="shrink-0 text-right text-xs text-[#7D827E]">
            {room.availability || room.availableRooms || '02 Room Available'}
          </span>
        </div>
        <h3 className="mt-1 wrap-break-word font-serif text-xl text-[#111111]">{room.title}</h3>

        <div className="mt-4 grid grid-cols-3 gap-2 border-b border-[#E8E6DF] pb-4 text-xs font-medium text-[#111111]">
          {[
            { value: room.price || '৳5,000', label: 'Package Price' },
            { value: room.capacity || room.guestCapacity || '2-6 Guest', label: 'Guest Capacity' },
            { value: room.bedType || 'King Bed', label: 'Bed Type' },
          ].map(({ value, label }) => (
            <div key={label} className="min-w-0">
              <p className="wrap-break-word">{value}</p>
              <span className="mt-0.5 block text-xs font-normal text-[#7D827E]">{label}</span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="mt-auto h-11 w-full cursor-pointer rounded-lg bg-[#18392B] text-[13px] font-medium text-white transition-colors hover:bg-[#122b20]"
        >
          Book Now
        </button>
      </article>
      {isOpen && <RoomDetailsModal room={room} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default RoomCard;
