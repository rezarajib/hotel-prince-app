import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ItemCard from '../../components/common/ItemCard';
import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import SelectField from '../../components/common/SelectField';

const RIDE_CATEGORIES = ['All', 'Water', 'Adventure', 'Family', 'Indoor'];
const RIDE_TYPES = RIDE_CATEGORIES.filter((category) => category !== 'All');
const PRICE_RANGES = [
  { label: '৳300 - ৳600', value: '300-600' },
  { label: '৳600 - ৳1000', value: '600-1000' },
];

const Rides = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedType, setSelectedType] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [appliedType, setAppliedType] = useState('');
  const [appliedPriceRange, setAppliedPriceRange] = useState('');

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['ridesData'],
    queryFn: async () => {
      const response = await fetch('/data/rides.json');
      if (!response.ok) {
        throw new Error('Failed to fetch rides data');
      }
      return response.json();
    },
  });

  const filteredRides = (data?.rides || []).filter((item) => {
    const category = activeTab === 'All' || item.category === activeTab;
    const type = !appliedType || item.category === appliedType;
    const [minimum, maximum] = appliedPriceRange
      ? appliedPriceRange.split('-').map(Number)
      : [null, null];
    const price = !appliedPriceRange || (
      Number(item.price) >= minimum && Number(item.price) <= maximum
    );
    return category && type && price;
  });

  const applyFilters = () => {
    setActiveTab('All');
    setAppliedType(selectedType);
    setAppliedPriceRange(selectedPriceRange);
  };

  const selectCategory = (category) => {
    setActiveTab(category);
    setSelectedType(category === 'All' ? '' : category);
    setAppliedType('');
  };

  return (
    <main className="bg-white">
      <PageHero
        subtitle="Explore & Enjoy"
        title="Ride & Activity"
        description="Discover exciting rides and refreshing activities at Hotel Prince. Whether you're looking for relaxation, adventure, or quality time with loved ones, there's something enjoyable for everyone."
      >
        <div className="grid grid-cols-1 items-end gap-4 rounded-2xl border border-[#ECEEE9] bg-white p-6 shadow-sm sm:p-7 md:grid-cols-12">
          <SelectField
            label="Ride & Activity Type"
            options={RIDE_TYPES}
            value={selectedType}
            onChange={(event) => setSelectedType(event.target.value)}
            placeholder="Choose ride & activity type"
            className="md:col-span-6"
          />
          <SelectField
            label="Price Range"
            options={PRICE_RANGES}
            value={selectedPriceRange}
            onChange={(event) => setSelectedPriceRange(event.target.value)}
            placeholder="Choose price range"
            className="md:col-span-4"
          />
          <button
            type="button"
            onClick={applyFilters}
            className="h-12 w-full cursor-pointer rounded-lg bg-[#18392B] text-sm font-medium text-white transition-colors hover:bg-[#122b20] md:col-span-2"
          >
            Search
          </button>
        </div>
      </PageHero>

      <section className="bg-white">
        <div className="mx-auto max-w-360 px-6 pt-28 pb-20 sm:px-10 md:px-16 md:pt-32 md:pb-24 lg:px-20">
          <SectionHeader
            subtitle="Find Your Experience"
            title="Explore Our Ride & Activity"
            description="Choose your preferred experience and find an activity that suits your stay."
            className="mb-12 md:mb-14"
          />

          <div className="mb-12 flex flex-wrap items-center justify-between gap-6 md:mb-14">
            <h2 className="font-serif text-3xl text-[#111111]">All Ride & Activity List</h2>
            <div className="flex flex-wrap gap-1 rounded-xl bg-[#F6F5F0] p-1">
              {RIDE_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => selectCategory(category)}
                  aria-pressed={activeTab === category}
                  className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === category
                      ? 'bg-[#18392B] text-white'
                      : 'text-[#666666] hover:text-[#111111]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {isLoading && (
            <p className="py-8 text-center text-sm text-[#666666]" role="status">
              Loading rides…
            </p>
          )}
          {isError && (
            <p className="py-8 text-center text-sm text-red-600" role="alert">
              {error.message}
            </p>
          )}

          {!isLoading && !isError && (
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {filteredRides.map((ride) => (
                <ItemCard
                  key={ride.id}
                  image={ride.image}
                  title={ride.title}
                  badgeText={ride.category}
                  specs={[
                    { value: ride.duration, label: 'Duration' },
                    { value: ride.note, label: 'Note' },
                    { value: `৳${Number(ride.price).toFixed(2)}`, label: 'Price' },
                  ]}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Rides;
