
import { Calendar, User, ChevronDown } from 'lucide-react';

const PackagesHero = () => {
  return (
    <section className="bg-[#F4F5EE] pt-24 md:pt-28 pb-16 md:pb-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Hero Subtitle & Title */}
        <p className="text-[#666666] text-xs md:text-[13px] font-normal mb-2">
          Book Your Stay
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-[54px] text-[#18392B] font-normal leading-tight mb-3">
          All Packages
        </h1>
        <p className="text-[#666666] text-xs md:text-[14px] max-w-lg mx-auto leading-relaxed mb-10">
          Discover comfort, elegance, and exceptional hospitality. Reserve your ideal room for a
          memorable stay at Hotel Prince.
        </p>

        {/* Availability Search Bar */}
        <div className="bg-white rounded-2xl p-4 md:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#ECEEE9] text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            
            {/* Check-In */}
            <div className="md:col-span-3">
              <label className="block text-[12px] font-medium text-[#111111] mb-1.5">
                Check-In
              </label>
              <div className="flex items-center justify-between bg-[#F7F7F7] border border-[#EAEAEA] rounded-lg px-3.5 py-2.5 text-[13px] text-[#666666]">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#888888]" />
                  10/11/2026
                </span>
                <Calendar className="w-4 h-4 text-[#111111]" />
              </div>
            </div>

            {/* Check-Out */}
            <div className="md:col-span-3">
              <label className="block text-[12px] font-medium text-[#111111] mb-1.5">
                Check-Out
              </label>
              <div className="flex items-center justify-between bg-[#F7F7F7] border border-[#EAEAEA] rounded-lg px-3.5 py-2.5 text-[13px] text-[#666666]">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#888888]" />
                  12/11/2026
                </span>
                <Calendar className="w-4 h-4 text-[#111111]" />
              </div>
            </div>

            {/* Guests */}
            <div className="md:col-span-3">
              <label className="block text-[12px] font-medium text-[#111111] mb-1.5">
                Guests
              </label>
              <div className="flex items-center justify-between bg-[#F7F7F7] border border-[#EAEAEA] rounded-lg px-3.5 py-2.5 text-[13px] text-[#666666]">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#888888]" />
                  02 Person
                </span>
                <ChevronDown className="w-4 h-4 text-[#111111]" />
              </div>
            </div>

            {/* Check Availability Button */}
            <div className="md:col-span-3">
              <button
                type="button"
                className="w-full bg-[#18392B] hover:bg-[#122b20] text-white text-[13px] font-medium py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                Check Availability
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PackagesHero;