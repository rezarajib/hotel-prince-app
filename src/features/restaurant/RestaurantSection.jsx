import React from 'react';
import { ChevronDown } from 'lucide-react';
import RestaurantSection from '../../features/restaurant/RestaurantSection';

const Restaurant = () => {
  return (
    <div className="bg-white">
      {/* Restaurant & Menu Hero Section */}
      <section className="bg-[#F4F5EE] pt-24 md:pt-28 pb-16 md:pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#666] text-xs md:text-[13px] mb-2">Book Your Stay</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[54px] text-[#18392B] font-normal leading-tight mb-3">
            Restaurant &amp; Menu
          </h1>
          <p className="text-[#666] text-xs md:text-[14px] max-w-lg mx-auto leading-relaxed mb-10">
            Discover comfort, elegance, and exceptional hospitality. Reserve your ideal room for a
            memorable stay at Hotel Prince.
          </p>

          {/* Search Filter Bar */}
          <div className="bg-white rounded-2xl p-4 md:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#ECEEE9] text-left grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-6">
              <label className="block text-[12px] font-medium text-[#111] mb-1.5">
                Restaurant Type
              </label>
              <div className="relative">
                <select
                  defaultValue=""
                  className="w-full appearance-none bg-[#F7F7F7] border border-[#EAEAEA] rounded-lg px-3.5 py-2.5 text-[13px] text-[#888] focus:outline-none focus:border-[#18392B] cursor-pointer"
                >
                  <option value="" disabled>Choose restaurant type</option>
                  <option value="Fine Dining">Fine Dining</option>
                  <option value="Poolside Café">Poolside Café</option>
                  <option value="Rooftop Restaurant">Rooftop Restaurant</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#111] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="md:col-span-4">
              <label className="block text-[12px] font-medium text-[#111] mb-1.5">
                Select Item
              </label>
              <div className="relative">
                <select
                  defaultValue=""
                  className="w-full appearance-none bg-[#F7F7F7] border border-[#EAEAEA] rounded-lg px-3.5 py-2.5 text-[13px] text-[#888] focus:outline-none focus:border-[#18392B] cursor-pointer"
                >
                  <option value="" disabled>Choose item</option>
                  <option value="Starter">Starter</option>
                  <option value="Main Course">Main Course</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Drinks">Drinks</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#111] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="md:col-span-2">
              <button
                type="button"
                className="w-full bg-[#18392B] hover:bg-[#122b20] text-white text-[13px] font-medium py-2.5 rounded-lg transition cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Restaurant & Menu Section */}
      <RestaurantSection />
    </div>
  );
};

export default Restaurant;