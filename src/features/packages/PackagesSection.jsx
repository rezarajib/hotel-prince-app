import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PackageCard from './PackageCard';

const CATEGORIES = [
  'Family Package',
  'Couple Package',
  'Honeymoon Package',
  'Day Tour',
  'Group Package',
];

const fetchPackages = async () => {
  const response = await fetch('/data/packages.json');
  if (!response.ok) {
    throw new Error('Failed to fetch packages data');
  }
  return response.json();
};

const PackagesSection = () => {
  const [activeTab, setActiveTab] = useState('Family Package');

  const { data: packages = [], isLoading, isError } = useQuery({
    queryKey: ['packagesData'],
    queryFn: fetchPackages,
  });

  const packageList = Array.isArray(packages) ? packages : packages?.packages || [];
  const filteredPackages = packageList.filter((pkg) => pkg.category === activeTab);

  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#666666] text-sm md:text-base font-normal mb-2">
            Find Your Experience
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-[#18392B] font-normal leading-tight mb-4">
            Explore Our Packages
          </h2>
          <p className="text-[#666666] text-sm md:text-[15px] leading-relaxed">
            Choose your preferred experience and find a package that suits your stay.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-7 md:gap-9 border-b border-[#E2E4DF] mb-8 overflow-x-auto">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`pb-3 text-[15px] whitespace-nowrap transition-all duration-200 border-b-2 ${
                activeTab === category
                  ? 'border-[#18392B] text-[#111111] font-medium'
                  : 'border-transparent text-[#7D827E] hover:text-[#111111] font-normal'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading Skeleton */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-[#F7F8F3] rounded-2xl p-4 h-[380px] animate-pulse border border-[#ECEEE9]"
              >
                <div className="h-[200px] bg-gray-200 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-3"></div>
                <div className="h-6 bg-gray-200 rounded w-2/3 mb-4"></div>
                <div className="h-10 bg-gray-200 rounded-lg mt-auto"></div>
              </div>
            ))}
          </div>
        )}

        {/* Error Message */}
        {isError && (
          <div className="text-center py-10 text-red-600 text-sm">
            প্যাকেজের তথ্য লোড করা সম্ভব হয়নি। দয়া করে `public/data/packages.json` চেক করুন।
          </div>
        )}

        {/* Packages Grid */}
        {!isLoading && !isError && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default PackagesSection;