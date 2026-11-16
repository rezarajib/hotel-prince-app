import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ChevronDown, MoreHorizontal } from 'lucide-react';

const RestaurantSection = () => {
  const [category, setCategory] = useState('All');
  const [activeId, setActiveId] = useState(null);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['restaurantData'],
    queryFn: () => fetch('/data/restaurant.json').then((res) => res.json()),
  });

  const restaurants = data?.restaurants || [];
  const menuItems = (data?.menuItems || []).filter(
    (item) => category === 'All' || item.category?.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="bg-white">
      {/* Hero & Search */}
      <section className="bg-[#F4F5EE] pt-24 pb-16 px-6 md:px-16 text-center">
        <p className="text-[#666] text-xs mb-2">Book Your Stay</p>
        <h1 className="font-serif text-4xl md:text-[54px] text-[#18392B] mb-3">Restaurant &amp; Menu</h1>
        <p className="text-[#666] text-xs md:text-sm max-w-lg mx-auto mb-10">
          Discover comfort, elegance, and exceptional hospitality. Reserve your ideal room for a memorable stay at Hotel Prince.
        </p>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-4 shadow-sm border border-[#ECEEE9] text-left grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          {[
            { label: 'Restaurant Type', span: 'md:col-span-6', opts: ['Choose restaurant type', 'Fine Dining', 'Poolside Café', 'Rooftop Restaurant'] },
            { label: 'Select Item', span: 'md:col-span-4', opts: ['Choose item', 'Starter', 'Main Course', 'Dessert', 'Drinks'] },
          ].map(({ label, span, opts }) => (
            <div key={label} className={span}>
              <label className="block text-xs font-medium text-[#111] mb-1.5">{label}</label>
              <div className="relative">
                <select defaultValue="" className="w-full appearance-none bg-[#F7F7F7] border border-[#EAEAEA] rounded-lg px-3.5 py-2.5 text-[13px] text-[#888] outline-none">
                  {opts.map((o, i) => <option key={o} value={i === 0 ? '' : o} disabled={i === 0}>{o}</option>)}
                </select>
                <ChevronDown className="w-4 h-4 text-[#111] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          ))}
          <button type="button" className="md:col-span-2 w-full bg-[#18392B] text-white text-[13px] font-medium py-2.5 rounded-lg">Search</button>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16 md:px-16 max-w-350 mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm text-[#666]">Find Your Experience</p>
          <h2 className="font-serif text-4xl md:text-[54px] text-[#18392B]">Explore Our Restaurant</h2>
          <p className="mt-3 text-sm text-[#666]">Choose your preferred experience and find a package that suits your stay.</p>
        </div>

        {isLoading && <p className="py-8 text-center text-sm text-[#666]">Loading restaurant menu…</p>}
        {isError && <p className="py-8 text-center text-sm text-red-600">{error.message}</p>}

        {!isLoading && !isError && (
          <>
            {/* Restaurants Grid */}
            <div className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {restaurants.map((res, idx) => {
                const isSelected = activeId ? activeId === res.id : idx === 0;
                return (
                  <article key={res.id} onClick={() => setActiveId(res.id)} className={`cursor-pointer rounded-[20px] bg-[#F8F7F2] p-3.5 border-[1.5px] ${isSelected ? 'border-[#111]' : 'border-transparent'}`}>
                    <div className="relative overflow-hidden rounded-xl">
                      <img src={res.image} alt={res.name} className="h-48 w-full object-cover" />
                      <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm"><MoreHorizontal className="h-4 w-4" /></span>
                    </div>
                    <div className="pt-3.5 px-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] text-[#888]">{res.code || 'RID-HP0001'}</p>
                          <h3 className="text-[17px] font-semibold text-[#111]">{res.name}</h3>
                        </div>
                        <span className="rounded-md border border-[#8CE3A9] bg-[#E3F9EA] px-2.5 py-0.5 text-[11px] font-medium text-[#1E8E3E]">{res.status || 'Published'}</span>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-2 border-b border-[#E8E6DF] pb-3.5 text-[11px] text-[#888]">
                        <div><p className="text-[13px] font-semibold text-[#111]">{res.type || 'Fine Dining'}</p>Restaurant Type</div>
                        <div><p className="text-[13px] font-semibold text-[#111]">{res.menuCount || '30'}</p>Menu Items</div>
                        <div><p className="text-[13px] font-semibold text-[#111]">{res.hours || '8 AM - 11 PM'}</p>Opening Hour</div>
                      </div>
                      <div className="mt-3 flex justify-between text-[12px] text-[#666]">
                        <span>Ongoing Order: <b className="text-[#111]">{res.ongoingOrder || '05'}</b></span>
                        <span>Completed Order: <b className="text-[#111]">{res.completedOrder || '50'}</b></span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Menu Filter & Grid */}
            <div className="mb-8 flex flex-wrap items-center gap-6">
              <h2 className="font-serif text-3xl md:text-[34px] text-[#111]">All Menu List</h2>
              <div className="flex flex-wrap gap-1 rounded-xl bg-[#F6F5F0] p-1">
                {['All', 'Starter', 'Main Course', 'Dessert', 'Drinks'].map((cat) => (
                  <button key={cat} onClick={() => setCategory(cat)} className={`rounded-lg px-4 py-1.5 text-xs font-medium cursor-pointer ${category === cat ? 'bg-[#18392B] text-white' : 'text-[#666]'}`}>{cat}</button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {menuItems.map((item) => (
                <article key={item.id} className="rounded-[20px] bg-[#F8F7F2] p-3">
                  <img src={item.image} alt={item.title} className="h-44 w-full rounded-xl object-cover" />
                  <div className="mt-3.5 flex justify-between gap-2 px-1">
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#111]">{item.title}</h3>
                      <p className="mt-1 line-clamp-2 text-[11px] text-[#777]">{item.desc}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="block text-[10px] text-[#888]">Price</span>
                      <p className="text-[14px] font-bold text-[#111]">৳{Number(item.price).toFixed(2)}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default RestaurantSection;