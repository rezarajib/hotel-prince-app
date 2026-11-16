import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ChevronDown } from 'lucide-react';

const Rides = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedType, setSelectedType] = useState('');

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['ridesData'],
    queryFn: () => fetch('/data/rides.json').then((res) => res.json()),
  });

  const filteredRides = (data?.rides || []).filter((item) => {
    const matchTab = activeTab === 'All' || item.category === activeTab;
    const matchType = !selectedType || item.category === selectedType;
    return matchTab && matchType;
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#F4F5EE] pt-28 pb-20 px-6 md:px-16 text-center">
        <p className="text-[#666] text-xs md:text-sm mb-2">Explore &amp; Enjoy</p>
        <h1 className="font-serif text-4xl md:text-[56px] text-[#18392B] leading-tight mb-3">
          Ride &amp; Activity
        </h1>
        <p className="text-[#666] text-xs md:text-sm max-w-xl mx-auto leading-relaxed mb-12">
          Discover exciting rides and refreshing activities at Hotel Prince. Whether you&apos;re looking for relaxation, adventure, or quality time with loved ones, there&apos;s something enjoyable for everyone.
        </p>

        {/* Search Filter Bar */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-5 shadow-sm border border-[#ECEEE9] text-left grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          <div className="md:col-span-6">
            <label className="block text-xs font-medium text-[#111] mb-1.5">Ride &amp; Activity Type</label>
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full appearance-none bg-[#F7F7F7] border border-[#EAEAEA] rounded-lg px-3.5 py-2.5 text-[13px] text-[#666] outline-none"
              >
                <option value="">Choose ride &amp; activity type...</option>
                <option value="Water">Water</option>
                <option value="Adventure">Adventure</option>
                <option value="Family">Family</option>
                <option value="Indoor">Indoor</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#111] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="md:col-span-4">
            <label className="block text-xs font-medium text-[#111] mb-1.5">Price Range</label>
            <div className="relative">
              <select defaultValue="" className="w-full appearance-none bg-[#F7F7F7] border border-[#EAEAEA] rounded-lg px-3.5 py-2.5 text-[13px] text-[#666] outline-none">
                <option value="" disabled>Choose price range...</option>
                <option value="500">৳300 - ৳600</option>
                <option value="1000">৳600 - ৳1000</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#111] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setActiveTab('All')}
            className="md:col-span-2 w-full bg-[#18392B] hover:bg-[#122b20] text-white text-[13px] font-medium py-2.5 rounded-lg cursor-pointer"
          >
            Search
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16 md:px-16 max-w-350 mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm text-[#666]">Find Your Experience</p>
          <h2 className="font-serif text-4xl md:text-[54px] text-[#18392B]">Explore Our Ride &amp; Activity</h2>
          <p className="mt-3 text-sm text-[#666]">Choose your preferred experience and find a package that suits your stay.</p>
        </div>

        {/* List Header & Filter Tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-6">
          <h2 className="font-serif text-3xl md:text-[34px] text-[#111]">All Ride &amp; Activity List</h2>
          <div className="flex flex-wrap gap-1 rounded-xl bg-[#F6F5F0] p-1">
            {['All', 'Water', 'Adventure', 'Family', 'Indoor'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-4 py-1.5 text-xs font-medium cursor-pointer transition ${
                  activeTab === tab ? 'bg-[#18392B] text-white' : 'text-[#666] hover:text-[#111]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {isLoading && <p className="py-8 text-center text-sm text-[#666]">Loading rides...</p>}
        {isError && <p className="py-8 text-center text-sm text-red-600">{error.message}</p>}

        {/* Cards Grid */}
        {!isLoading && !isError && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {filteredRides.map((item) => (
              <article key={item.id} className="rounded-[20px] bg-[#F8F7F2] p-3">
                <img src={item.image} alt={item.title} className="h-44 w-full rounded-xl object-cover" />
                <div className="mt-3.5 flex justify-between gap-2 px-1">
                  <div>
                    <h3 className="font-serif text-[16px] font-semibold text-[#111]">{item.title}</h3>
                    <p className="mt-1 text-[10px] text-[#777]">· {item.duration}</p>
                    <p className="text-[10px] text-[#777]">· {item.note}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="block text-[10px] text-[#888]">Price</span>
                    <p className="text-[14px] font-bold text-[#111]">৳{Number(item.price).toFixed(2)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Rides;