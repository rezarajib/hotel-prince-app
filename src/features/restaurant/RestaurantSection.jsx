import { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import SelectField from '../../components/common/SelectField';

const RESTAURANT_TYPES = ['Fine Dining', 'Poolside Café', 'Rooftop Restaurant'];
const MENU_CATEGORIES = ['All', 'Starter', 'Main Course', 'Dessert', 'Drinks'];

const RestaurantSection = () => {
  const [selectedType, setSelectedType] = useState('');
  const [appliedType, setAppliedType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [category, setCategory] = useState('All');
  const [activeId, setActiveId] = useState(0);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['restaurantData'],
    queryFn: async () => {
      const response = await fetch('/data/restaurant.json');
      if (!response.ok) {
        throw new Error('Failed to fetch restaurant data');
      }
      return response.json();
    },
  });

  const restaurants = Array.isArray(data?.restaurants) ? data.restaurants : [];
  const menuItems = (Array.isArray(data?.menuItems) ? data.menuItems : []).filter(
    (item) => category === 'All' || item.category?.toLowerCase() === category.toLowerCase(),
  );
  const filteredRestaurants = restaurants.filter(
    (restaurant) => !appliedType || restaurant.type === appliedType,
  );

  const applyFilters = () => {
    setAppliedType(selectedType);
    setCategory(selectedCategory || 'All');
  };

  const selectCategory = (nextCategory) => {
    setSelectedCategory(nextCategory);
    setCategory(nextCategory);
  };

  return (
    <main className="bg-white">
      <section className="overflow-visible bg-[#F4F5EE] px-6 pt-36 pb-20 md:px-16 md:pt-44 md:pb-24 lg:px-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-2 text-xs text-[#666666]">Book Your Stay</p>
          <h1 className="mb-3 font-serif text-4xl font-normal leading-tight text-[#18392B] md:text-5xl lg:text-[56px]">
            Restaurant &amp; Menu
          </h1>
          <p className="mx-auto mb-12 max-w-lg text-xs text-[#666666] md:text-sm">
            Explore memorable dining, fresh flavors, and inviting spaces at Hotel Prince.
          </p>

          <div className="mx-auto grid max-w-5xl grid-cols-1 items-end gap-4 rounded-[20px] bg-white p-6 text-left shadow-sm sm:p-7 md:grid-cols-12">
            <SelectField
              label="Restaurant Type"
              options={RESTAURANT_TYPES}
              value={selectedType}
              onChange={(event) => setSelectedType(event.target.value)}
              placeholder="Choose restaurant type"
              className="md:col-span-6"
            />
            <SelectField
              label="Select Item"
              options={MENU_CATEGORIES.filter((item) => item !== 'All')}
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
              placeholder="Choose item"
              className="md:col-span-4"
            />
            <button
              type="button"
              onClick={applyFilters}
              className="h-12 w-full cursor-pointer rounded-xl bg-[#18392B] text-xs font-medium text-white transition-colors hover:bg-[#122b20] md:col-span-2"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-360 px-6 pt-28 pb-20 sm:px-10 md:px-16 md:pt-32 md:pb-24 lg:px-20">
          <div className="mb-12 md:mb-14">
            <p className="mb-2 text-xs text-[#666666]">Find Your Experience</p>
            <h2 className="mb-3 font-serif text-4xl font-normal leading-tight text-[#18392B] md:text-5xl lg:text-[54px]">
              Explore Our Restaurant
            </h2>
            <p className="max-w-2xl text-sm text-[#666666]">
              Choose your preferred experience and find a dining option that suits your stay.
            </p>
          </div>

          {isLoading && (
            <p className="py-8 text-center text-sm text-[#666666]" role="status">
              Loading restaurant menu…
            </p>
          )}
          {isError && (
            <p className="py-8 text-center text-sm text-red-600" role="alert">
              {error.message}
            </p>
          )}

          {!isLoading && !isError && (
            <>
              <div className="mb-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                {filteredRestaurants.map((restaurant, index) => {
                  const isActive = index === activeId;

                  return (
                    <article
                      key={restaurant.id}
                      className={`flex h-full flex-col justify-between rounded-[20px] border-[1.5px] bg-[#F8F7F2] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5 ${
                        isActive ? 'border-[#111111]' : 'border-transparent'
                      }`}
                    >
                      <div className="group relative mb-3 overflow-hidden rounded-xl">
                        <button
                          type="button"
                          aria-label={`Select ${restaurant.name}`}
                          aria-pressed={isActive}
                          onClick={() => setActiveId(index)}
                          className="block h-52 w-full cursor-pointer"
                        >
                          <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </button>
                        <button
                          type="button"
                          aria-label={`More options for ${restaurant.name}`}
                          onClick={() => setActiveId(index)}
                          className="absolute right-3 top-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-white text-[#111111] shadow-sm"
                        >
                          <MoreHorizontal aria-hidden="true" className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="flex min-w-0 items-center justify-between gap-2 pt-4">
                        <span className="min-w-0 wrap-break-word text-xs text-[#7D827E]">
                          {restaurant.code || 'RID-HP0001'}
                        </span>
                        <span className="rounded-full border border-[#C6EED6] bg-[#E8F8EE] px-2.5 py-0.5 text-xs font-medium text-[#1D8F4E]">
                          {restaurant.status || 'Published'}
                        </span>
                      </div>
                      <h3 className="mt-1 wrap-break-word font-serif text-xl text-[#111111]">
                        {restaurant.name}
                      </h3>

                      <div className="mt-4 grid grid-cols-3 gap-2 border-b border-[#E8E6DF] pb-4 text-xs font-medium text-[#111111]">
                        {[
                          { value: restaurant.type || 'Fine Dining', label: 'Restaurant Type' },
                          { value: restaurant.menuCount || '30', label: 'Menu Items' },
                          { value: restaurant.hours || '8 AM - 11 PM', label: 'Opening Hour' },
                        ].map(({ value, label }) => (
                          <div key={label} className="min-w-0">
                            <p className="wrap-break-word">{value}</p>
                            <span className="mt-0.5 block text-xs font-normal text-[#7D827E]">
                              {label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto flex flex-wrap justify-between gap-x-3 gap-y-1 pt-4 text-xs text-[#666666]">
                        <span className="whitespace-nowrap">
                          Ongoing Order:{' '}
                          <b className="text-[#111111]">
                            {restaurant.ongoingOrder || restaurant.ongoing || '05'}
                          </b>
                        </span>
                        <span className="whitespace-nowrap">
                          Completed Order:{' '}
                          <b className="text-[#111111]">
                            {restaurant.completedOrder || restaurant.completed || '50'}
                          </b>
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mb-12 flex flex-wrap items-center gap-6 md:mb-14">
                <h2 className="font-serif text-2xl text-[#111111] md:text-[32px]">
                  All Menu List
                </h2>
                <div className="flex flex-wrap gap-1 rounded-xl bg-[#F6F5F0] p-1">
                  {MENU_CATEGORIES.map((menuCategory) => (
                    <button
                      key={menuCategory}
                      type="button"
                      onClick={() => selectCategory(menuCategory)}
                      aria-pressed={category === menuCategory}
                      className={`cursor-pointer rounded-lg px-4 py-1.5 text-xs font-medium transition-colors ${
                        category === menuCategory
                          ? 'bg-[#18392B] text-white'
                          : 'text-[#666666] hover:text-[#111111]'
                      }`}
                    >
                      {menuCategory}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {menuItems.map((item) => (
                  <article
                    key={item.id}
                    className="flex h-full min-w-0 flex-col justify-between rounded-[20px] bg-[#F8F7F2] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="mb-3 h-44 w-full rounded-xl object-cover"
                    />
                    <div className="flex items-start justify-between gap-2 pt-4">
                      <div className="min-w-0">
                        <h3 className="font-serif text-lg text-[#111111]">{item.title}</h3>
                        <p className="mt-1 text-xs text-[#666666]">{item.desc}</p>
                      </div>
                      <p className="shrink-0 text-xs font-medium text-[#111111]">
                        ৳{Number(item.price).toFixed(2)}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default RestaurantSection;
