import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CustomButton from '../../components/common/Button';
import SelectField from '../../components/common/SelectField';

const CheckAvailabilityForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [checkIn, setCheckIn] = useState(
    () => searchParams.get('checkIn') || '2026-11-10',
  );
  const [checkOut, setCheckOut] = useState(
    () => searchParams.get('checkOut') || '2026-11-12',
  );
  const [guests, setGuests] = useState(
    () => searchParams.get('guests') || '02 Person',
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({ checkIn, checkOut, guests });
    navigate(`/rooms?${params.toString()}`);
  };

  return (
    <div className="mx-auto w-full max-w-7xl rounded-2xl bg-white p-6 shadow-sm sm:p-7">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
      >
        {/* Check-In Field */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-semibold text-[#111111]">
            Check-In
          </label>
          <div className="relative flex items-center bg-[#EFEFEF]/70 rounded-xl px-4 h-12">
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              onClick={(e) => e.target.showPicker && e.target.showPicker()}
              className="w-full cursor-pointer border-none bg-transparent p-0 text-sm font-normal text-[#666666] focus:outline-none"
            />
          </div>
        </div>

        {/* Check-Out Field */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-semibold text-[#111111]">
            Check-Out
          </label>
          <div className="relative flex items-center bg-[#EFEFEF]/70 rounded-xl px-4 h-12">
            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              onClick={(e) => e.target.showPicker && e.target.showPicker()}
              className="w-full cursor-pointer border-none bg-transparent p-0 text-sm font-normal text-[#666666] focus:outline-none"
            />
          </div>
        </div>

        {/* Guests Field */}
        <SelectField
          label="Guests"
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
          options={['01 Person', '02 Person', '03 Person', '04 Person']}
        />

        {/* Submit Button */}
        <CustomButton
          type="submit"
          btnText="Check Availability"
          className="flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-[#18392B] text-sm font-medium text-white shadow-sm transition duration-200 hover:bg-[#122b20]"
        />
      </form>
    </div>
  );
};

export default CheckAvailabilityForm;