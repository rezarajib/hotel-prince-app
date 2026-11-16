import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PackageCard from './PackageCard';
import SectionHeader from '../../components/common/SectionHeader';

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
        <section className="bg-white">
            <div className="mx-auto container py-10 md:py-20 xl:py-16">
                <SectionHeader
                    subtitle="Find Your Experience"
                    title="Explore Our Packages"
                    description="Choose your preferred experience and find a package that suits your stay."
                    className="mb-12 md:mb-14"
                />

                {/* Category Tabs */}
                <div className="mx-auto mb-12 flex w-full max-w-360 items-center gap-7 overflow-x-auto border-b border-[#E2E4DF] md:mb-14 md:gap-9">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`pb-3 text-base whitespace-nowrap transition-all duration-200 border-b-2 ${
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
                    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                        {[...Array(6)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-[#F7F8F3] rounded-2xl p-4 h-95 animate-pulse border border-[#ECEEE9]"
                            >
                                <div className="h-95 bg-gray-200 rounded-xl mb-4"></div>
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
                        Failed to load packages from <span className="font-mono bg-red-50 px-2 py-1 rounded">public/data/packages.json</span>
                    </div>
                )}

                {/* Packages Grid */}
                {!isLoading && !isError && (
                    <>
                        {filteredPackages.length > 0 ? (
                            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                                {filteredPackages.map((pkg) => (
                                    <PackageCard key={pkg.id} pkg={pkg} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 text-[#666666] text-base">
                                No packages found in this category.
                            </div>
                        )}
                    </>
                )}

            </div>
        </section>
    );
};

export default PackagesSection;