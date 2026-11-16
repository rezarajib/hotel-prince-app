import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const RestaurantSection = () => {
  const [category, setCategory] = useState('All');

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
      {/* Hero & Search (Matched Exact Height & Alignment with Events Page) */}
     {/* Hero & Search (100% Pixel-Matched with Events Page) */}
      <section className="bg-[#F4F5EE] pt-32 md:pt-36 pb-16 md:pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#666666] text-xs md:text-[13px] font-normal mb-2">
            Book Your Stay
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[54px] text-[#18392B] font-normal leading-tight mb-3">
            Restaurant &amp; Menu
          </h1>
          <p className="text-[#666666] text-xs md:text-[14px] max-w-lg mx-auto leading-relaxed mb-10">
            Discover comfort, elegance, and exceptional hospitality. Reserve your ideal room for a
            memorable stay at Hotel Prince.
          </p>

          {/* Search Filter Box */}
          <div className="w-full max-w-285 mx-auto bg-white rounded-[20px] p-6 sm:p-7 shadow-sm text-left grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            {[
              {
                label: 'Restaurant Type',
                span: 'md:col-span-5',
                opts: ['Choose restaurant type', 'Fine Dining', 'Poolside Café', 'Rooftop Restaurant'],
              },
              {
                label: 'Select Item',
                span: 'md:col-span-5',
                opts: ['Choose item', 'Starter', 'Main Course', 'Dessert', 'Drinks'],
              },
            ].map(({ label, span, opts }) => (
              <div key={label} className={`${span} flex flex-col gap-2`}>
                <label className="text-[15px] font-semibold text-[#111111]">
                  {label}
                </label>
                <div className="relative flex items-center bg-[#EFEFEF]/70 rounded-xl px-4 h-12">
                  <select
                    defaultValue=""
                    className="w-full appearance-none bg-transparent text-[#666666] text-[14px] font-normal focus:outline-none border-none cursor-pointer pr-6 p-0"
                  >
                    {opts.map((o, i) => (
                      <option key={o} value={i === 0 ? '' : o} disabled={i === 0}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#333333] absolute right-4 pointer-events-none" />
                </div>
              </div>
            ))}

            <div className="md:col-span-2">
              <button
                type="button"
                className="w-full h-12 bg-[#FFA300] hover:bg-[#e59200] text-white font-medium text-[14px] rounded-[10px] transition duration-200 shadow-sm flex items-center justify-center cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content (Matched Top Spacing & Grid with Events Page) */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pt-10 pb-16 md:pt-12 md:pb-20">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs md:text-[13px] text-[#666666]">Find Your Experience</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[54px] text-[#18392B] font-normal leading-tight">
            Explore Our Restaurant
          </h2>
          <p className="mt-3 text-xs md:text-[14px] text-[#666666]">
            Choose your preferred experience and find a package that suits your stay.
          </p>
        </div>

        {isLoading && <p className="py-8 text-center text-sm text-[#666]">Loading restaurant menu…</p>}
        {isError && <p className="py-8 text-center text-sm text-red-600">{error.message}</p>}

        {!isLoading && !isError && (
          <>
            {/* Restaurants Grid */}
            <div className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {restaurants.map((res) => (
                <article
                  key={res.id}
                  className="rounded-[20px] bg-[#F8F7F2] p-3.5 transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img src={res.image} alt={res.name} className="h-48 w-full object-cover" />
                    <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
                      <ArrowUpRight className="h-4 w-4 text-[#111]" />
                    </span>
                  </div>
                  <div className="pt-3.5 px-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-[#888]">{res.code || 'RID-HP0001'}</p>
                        <h3 className="text-[17px] font-semibold text-[#111]">{res.name}</h3>
                      </div>
                      <span className="rounded-md border border-[#8CE3A9] bg-[#E3F9EA] px-2.5 py-0.5 text-[11px] font-medium text-[#1E8E3E]">
                        {res.status || 'Published'}
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2 border-b border-[#E8E6DF] pb-3.5 text-[11px] text-[#888]">
                      <div>
                        <p className="text-[13px] font-semibold text-[#111]">
                          {res.type || 'Fine Dining'}
                        </p>
                        Restaurant Type
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-[#111]">
                          {res.menuCount || '30'}
                        </p>
                        Menu Items
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-[#111]">
                          {res.hours || '8 AM - 11 PM'}
                        </p>
                        Opening Hour
                      </div>
                    </div>
                    <div className="mt-3 flex justify-between text-[12px] text-[#666]">
                      <span>
                        Ongoing Order: <b className="text-[#111]">{res.ongoingOrder || '05'}</b>
                      </span>
                      <span>
                        Completed Order: <b className="text-[#111]">{res.completedOrder || '50'}</b>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Menu Filter & Grid */}
            <div className="mb-8 flex flex-wrap items-center gap-6">
              <h2 className="font-serif text-3xl md:text-[34px] text-[#111]">All Menu List</h2>
              <div className="flex flex-wrap gap-1 rounded-xl bg-[#F6F5F0] p-1">
                {['All', 'Starter', 'Main Course', 'Dessert', 'Drinks'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`rounded-lg px-4 py-1.5 text-xs font-medium cursor-pointer transition-colors ${
                      category === cat ? 'bg-[#18392B] text-white' : 'text-[#666]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {menuItems.map((item) => (
                <article key={item.id} className="rounded-[20px] bg-[#F8F7F2] p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-44 w-full rounded-xl object-cover"
                  />
                  <div className="mt-3.5 flex justify-between gap-2 px-1">
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#111]">{item.title}</h3>
                      <p className="mt-1 line-clamp-2 text-[11px] text-[#777]">{item.desc}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="block text-[10px] text-[#888]">Price</span>
                      <p className="text-[14px] font-bold text-[#111]">
                        ৳{Number(item.price).toFixed(2)}
                      </p>
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