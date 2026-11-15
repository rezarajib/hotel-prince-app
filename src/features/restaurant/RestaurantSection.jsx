import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { MoreHorizontal } from 'lucide-react';
import fallbackImg from '../../assets/images/hotelPrince.jpg';

const CATEGORIES = ['All', 'Starter', 'Main Course', 'Dessert', 'Drinks'];

const FOOD_IMGS = {
  'Beef Burger': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80',
  'Chocolate Cake': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80',
  'Expresso': 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&q=80',
  'Fresh Orange Juice': 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&q=80',
  'Garden Salad': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80',
};

const DEFAULT_DATA = {
  restaurants: [
    { id: 1, code: 'RID-HP0001', name: 'The Garden Restaurant', status: 'Published', type: 'Fine Dining', menuCount: 30, hours: '8 AM - 11 PM', ongoing: '05', completed: '50', image: '/images/pkg-1.png' },
    { id: 2, code: 'RID-HP0001', name: 'Poolside Café', status: 'Published', type: 'Fine Dining', menuCount: 30, hours: '8 AM - 11 PM', ongoing: '05', completed: '50', image: '/images/pkg-2.png' },
    { id: 3, code: 'RID-HP0001', name: 'Rooftop Restaurant', status: 'Published', type: 'Fine Dining', menuCount: 30, hours: '8 AM - 11 PM', ongoing: '05', completed: '50', image: '/images/pkg-3.png' },
    { id: 4, code: 'RID-HP0001', name: 'Poolside Café', status: 'Published', type: 'Fine Dining', menuCount: 30, hours: '8 AM - 11 PM', ongoing: '05', completed: '50', image: '/images/pkg-4.png' },
  ],
  menuItems: [
    { id: 1, category: 'Main Course', title: 'Beef Burger', desc: 'Juicy beef patty with lettuce & Cheddar', price: '520.00' },
    { id: 2, category: 'Dessert', title: 'Chocolate Cake', desc: 'Juicy beef patty with lettuce & Cheddar', price: '520.00' },
    { id: 3, category: 'Drinks', title: 'Expresso', desc: 'Juicy beef patty with lettuce & Cheddar', price: '520.00' },
    { id: 4, category: 'Drinks', title: 'Fresh Orange Juice', desc: 'Juicy beef patty with lettuce & Cheddar', price: '520.00' },
    { id: 5, category: 'Starter', title: 'Garden Salad', desc: 'Juicy beef patty with lettuce & Cheddar', price: '520.00' },
    { id: 6, category: 'Drinks', title: 'Fresh Orange Juice', desc: 'Juicy beef patty with lettuce & Cheddar', price: '520.00' },
    { id: 7, category: 'Drinks', title: 'Expresso', desc: 'Juicy beef patty with lettuce & Cheddar', price: '520.00' },
    { id: 8, category: 'Starter', title: 'Garden Salad', desc: 'Juicy beef patty with lettuce & Cheddar', price: '520.00' },
    { id: 9, category: 'Dessert', title: 'Chocolate Cake', desc: 'Juicy beef patty with lettuce & Cheddar', price: '520.00' },
    { id: 10, category: 'Main Course', title: 'Beef Burger', desc: 'Juicy beef patty with lettuce & Cheddar', price: '520.00' },
    { id: 11, category: 'Drinks', title: 'Fresh Orange Juice', desc: 'Juicy beef patty with lettuce & Cheddar', price: '520.00' },
    { id: 12, category: 'Drinks', title: 'Expresso', desc: 'Juicy beef patty with lettuce & Cheddar', price: '520.00' },
    { id: 13, category: 'Starter', title: 'Garden Salad', desc: 'Juicy beef patty with lettuce & Cheddar', price: '520.00' },
    { id: 14, category: 'Dessert', title: 'Chocolate Cake', desc: 'Juicy beef patty with lettuce & Cheddar', price: '520.00' },
    { id: 15, category: 'Main Course', title: 'Beef Burger', desc: 'Juicy beef patty with lettuce & Cheddar', price: '520.00' },
  ],
};

const RestaurantSection = () => {
  const [selectedRest, setSelectedRest] = useState(1);
  const [activeTab, setActiveTab] = useState('All');

  const { data } = useQuery({
    queryKey: ['restaurantMenuV2'],
    queryFn: async () => (await fetch('/data/restaurant.json', { cache: 'no-store' })).json(),
  });

  const restaurants = data?.restaurants?.length ? data.restaurants : DEFAULT_DATA.restaurants;
  const menuItems = data?.menuItems?.length ? data.menuItems : DEFAULT_DATA.menuItems;

  const filteredMenu = menuItems.filter((item) =>
    activeTab === 'All' ? true : item.category === activeTab
  );

  return (
    <section className="bg-white pt-16 md:pt-20 pb-20 md:pb-24 px-6 md:px-14 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-[#666] text-xs md:text-[13px] mb-1.5">Find Your Experience</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[46px] text-[#18392B] font-normal leading-tight mb-2">
            Explore Our Restaurant
          </h1>
          <p className="text-[#666] text-xs md:text-[13px]">
            Choose your preferred experience and find a package that suits your stay.
          </p>
        </div>

        {/* 4 Restaurant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {restaurants.map((rest) => {
            const isSelected = selectedRest === rest.id;
            return (
              <div
                key={rest.id}
                onClick={() => setSelectedRest(rest.id)}
                className={`bg-[#F7F8F3] rounded-2xl p-3.5 cursor-pointer transition-all ${
                  isSelected
                    ? 'border-[1.5px] border-[#18392B] shadow-sm'
                    : 'border border-[#ECEEE9] hover:shadow-md'
                }`}
              >
                <div className="relative h-[145px] rounded-xl overflow-hidden mb-3">
                  <img
                    src={rest.image}
                    alt={rest.name}
                    onError={(e) => { e.currentTarget.src = fallbackImg; }}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2.5 right-2.5 w-7 h-7 bg-white rounded-lg flex items-center justify-center shadow-xs text-[#111]">
                    <MoreHorizontal className="w-4 h-4" />
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <p className="text-[10px] text-[#888] mb-0.5">{rest.code}</p>
                    <h3 className="text-[15px] font-medium text-[#111]">{rest.name}</h3>
                  </div>
                  <span className="bg-[#E6F7ED] text-[#16A34A] border border-[#BBF7D0] text-[10px] font-medium px-2.5 py-0.5 rounded-md">
                    {rest.status}
                  </span>
                </div>

                <div className="flex justify-between py-2.5 border-y border-[#E6E8E1] text-[11px] font-medium text-[#111]">
                  <div>
                    <p>{rest.type}</p>
                    <span className="block text-[9px] font-normal text-[#888]">Restaurant Type</span>
                  </div>
                  <div>
                    <p>{rest.menuCount}</p>
                    <span className="block text-[9px] font-normal text-[#888]">Menu Items</span>
                  </div>
                  <div>
                    <p>{rest.hours}</p>
                    <span className="block text-[9px] font-normal text-[#888]">Opening Hour</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2.5 text-[10px] text-[#888]">
                  <span>Ongoing Order: <strong className="text-[#111] font-semibold">{rest.ongoing}</strong></span>
                  <span>Completed Order: <strong className="text-[#111] font-semibold">{rest.completed}</strong></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* All Menu List Header & Filter Tabs */}
        <div className="flex flex-wrap items-center gap-6 mb-7">
          <h2 className="font-serif text-2xl md:text-[32px] text-[#111] font-normal">
            All Menu List
          </h2>
          <div className="inline-flex flex-wrap items-center bg-[#F4F5EE] p-1.5 rounded-xl border border-[#ECEEE9] gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-1.5 rounded-lg text-[11px] font-medium transition cursor-pointer ${
                  activeTab === cat
                    ? 'bg-[#18392B] text-white shadow-xs'
                    : 'text-[#666] hover:text-[#111]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 5-Column Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredMenu.map((item) => {
            const foodImg = item.image?.startsWith('http') ? item.image : (FOOD_IMGS[item.title] || fallbackImg);
            return (
              <div
                key={item.id}
                className="bg-[#F7F8F3] rounded-2xl p-2.5 border border-[#ECEEE9] hover:shadow-md transition flex flex-col"
              >
                <div className="h-[125px] rounded-xl overflow-hidden mb-2.5">
                  <img
                    src={foodImg}
                    alt={item.title}
                    onError={(e) => { e.currentTarget.src = fallbackImg; }}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="flex items-end justify-between gap-2 px-1 pb-1 mt-auto">
                  <div className="min-w-0">
                    <h4 className="text-[13px] font-medium text-[#111] truncate mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-[9.5px] text-[#888] leading-tight line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="block text-[9px] text-[#888]">Price</span>
                    <p className="text-[12px] font-semibold text-[#111]">
                      <span className="text-[10px] mr-0.5">৳</span>{item.price}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;