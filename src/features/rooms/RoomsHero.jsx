import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RoomsHero = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState('2026-11-10');
  const [checkOut, setCheckOut] = useState('2026-11-12');
  const [guests, setGuests] = useState('02 Person');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/checkout', { state: { checkIn, checkOut, guests } });
  };

  return (
    <section className="bg-[#F3F3EC] pt-24 md:pt-28 pb-8 md:pb-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[#666666] text-xs md:text-sm tracking-wide mb-1.5">
          Book Your Stay
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-[52px] text-[#18392B] font-normal leading-tight mb-2.5">
          Rooms &amp; Stay
        </h1>
        <p className="text-[#666666] text-xs md:text-[14px] max-w-xl mx-auto leading-relaxed mb-7">
          Discover comfort, elegance, and exceptional hospitality. Reserve your ideal room for a
          memorable stay at Hotel Prince.
        </p>

        {/* Check Availability Bar */}
        <form
          onSubmit={handleSearch}
          className="bg-white rounded-2xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#EAECE6] grid grid-cols-1 md:grid-cols-4 gap-4 items-end text-left"
        >
          <div>
            <label className="block text-[13px] font-medium text-[#111111] mb-1.5">Check-In</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-[#F7F8F5] border border-[#E5E7EB] rounded-lg px-3.5 py-2 text-[13px] text-[#555555] focus:outline-none focus:border-[#18392B]"
              required
            />
          </div>

          <div>
            <label className="block text-[13px] font-medium text-[#111111] mb-1.5">Check-Out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-[#F7F8F5] border border-[#E5E7EB] rounded-lg px-3.5 py-2 text-[13px] text-[#555555] focus:outline-none focus:border-[#18392B]"
              required
            />
          </div>

          <div>
            <label className="block text-[13px] font-medium text-[#111111] mb-1.5">Guests</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-[#F7F8F5] border border-[#E5E7EB] rounded-lg px-3.5 py-2 text-[13px] text-[#555555] focus:outline-none focus:border-[#18392B]"
            >
              <option value="01 Person">01 Person</option>
              <option value="02 Person">02 Person</option>
              <option value="03 Person">03 Person</option>
              <option value="04 Person">04 Person</option>
              <option value="05+ Person">05+ Person</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#18392B] hover:bg-[#122b20] text-white text-[13px] font-medium py-2 px-5 rounded-lg transition-colors cursor-pointer h-9.5"
          >
            Check Availability
          </button>
        </form>
      </div>
    </section>
  );
};

export default RoomsHero;