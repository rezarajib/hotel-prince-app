import { useState } from 'react';
import { Search } from 'lucide-react';
import InputField from './InputField';
import SelectField from './SelectField';

const BookingSearchBar = ({ onSearch, buttonText = 'Check Availability' }) => {
  const [searchData, setSearchData] = useState({
    checkIn: '2026-11-10',
    checkOut: '2026-11-12',
    guests: '02',
  });

  const guestOptions = [
    { label: '01 Person', value: '01' },
    { label: '02 Person', value: '02' },
    { label: '03 Person', value: '03' },
    { label: '04 Person', value: '04' },
    { label: '05+ Family', value: '05' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchData);
    } else {
      console.log('Searching with:', searchData);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end"
      >
        {/* Check-In */}
        <InputField
          label="Check-In"
          type="date"
          value={searchData.checkIn}
          onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
        />

        {/* Check-Out */}
        <InputField
          label="Check-Out"
          type="date"
          value={searchData.checkOut}
          onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
        />

        {/* Guests */}
        <SelectField
          label="Guests"
          value={searchData.guests}
          options={guestOptions}
          onChange={(e) => setSearchData({ ...searchData, guests: e.target.value })}
        />

        {/* Action Button */}
        <button
          type="submit"
          className="w-full py-3.5 px-6 bg-emerald-900 hover:bg-emerald-950 text-white font-medium text-sm rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Search size={18} />
          <span>{buttonText}</span>
        </button>
      </form>
    </div>
  );
};

export default BookingSearchBar;