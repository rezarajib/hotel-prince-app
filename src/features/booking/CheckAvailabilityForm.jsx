import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, ChevronDown } from 'lucide-react';
import CustomButton from '../../components/common/Button';

const CheckAvailabilityForm = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState('2026-11-10');
  const [checkOut, setCheckOut] = useState('2026-11-12');
  const [guests, setGuests] = useState('02 Person');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/checkout');
  };

  return (
    <div className="w-full max-w-285 mx-auto bg-white rounded-[20px] p-6 sm:p-7 shadow-sm">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
      >
        {/* Check-In Field */}
        <div className="flex flex-col gap-2">
          <label className="text-[15px] font-semibold text-[#111111]">
            Check-In
          </label>
          <div className="relative flex items-center bg-[#EFEFEF]/70 rounded-xl px-4 h-12">
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              onClick={(e) => e.target.showPicker && e.target.showPicker()}
              className="w-full bg-transparent text-[#666666] text-[14px] font-normal focus:outline-none border-none p-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Check-Out Field */}
        <div className="flex flex-col gap-2">
          <label className="text-[15px] font-semibold text-[#111111]">
            Check-Out
          </label>
          <div className="relative flex items-center bg-[#EFEFEF]/70 rounded-xl px-4 h-12">
            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              onClick={(e) => e.target.showPicker && e.target.showPicker()}
              className="w-full bg-transparent text-[#666666] text-[14px] font-normal focus:outline-none border-none p-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Guests Field */}
        <div className="flex flex-col gap-2">
          <label className="text-[15px] font-semibold text-[#111111]">
            Guests
          </label>
          <div className="relative flex items-center bg-[#EFEFEF]/70 rounded-xl px-4 h-12">
            <User className="w-4 h-4 text-[#333333] shrink-0 mr-2.5" />
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-transparent text-[#666666] text-[14px] font-normal focus:outline-none border-none appearance-none cursor-pointer pr-6 p-0"
            >
              <option value="01 Person">01 Person</option>
              <option value="02 Person">02 Person</option>
              <option value="03 Person">03 Person</option>
              <option value="04 Person">04 Person</option>
            </select>
            <ChevronDown className="w-4 h-4 text-[#333333] absolute right-4 pointer-events-none" />
          </div>
        </div>

        {/* Submit Button */}
        <CustomButton
          type="submit"
          btnText="Check Availability"
          className="w-full h-12 bg-[#18392B] hover:bg-[#122b20] text-white font-medium text-[14px] rounded-[10px] transition duration-200 shadow-sm flex items-center justify-center cursor-pointer"
        />
      </form>
    </div>
  );
};

export default CheckAvailabilityForm;