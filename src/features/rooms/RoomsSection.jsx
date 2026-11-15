
import { useQuery } from '@tanstack/react-query';
import CommonListingCard from '../../components/common/CommonListingCard';
import { useState } from 'react';

const CATEGORIES = ['Hotel Room', 'Cottage', 'Villa', 'Tent', 'Cabin'];

const fetchRooms = async () => {
    let response = await fetch('/data/rooms.json');

    if (!response.ok) {
        response = await fetch('/data/data.json');
    }

    if (!response.ok) {
        throw new Error('JSON file not found in public/data/');
    }

    return response.json();
};

const RoomsSection = () => {
    const [activeTab, setActiveTab] = useState('Hotel Room');

    const { data: rooms = [], isLoading, isError, error } = useQuery({
        queryKey: ['roomsData'],
        queryFn: fetchRooms,
        retry: 1,
    });

    const roomList = Array.isArray(rooms) ? rooms : rooms?.rooms || [];
    const filteredRooms = roomList.filter((room) => room.category === activeTab);

    return (
        <section className="bg-white pt-6 md:pt-8 pb-20 md:pb-24 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-3">
                    <p className="text-[#666666] text-xs md:text-sm font-normal mb-1">
                        Book Your Stay
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-[46px] text-[#18392B] font-normal leading-tight mb-2">
                        Find Your Perfect Stay
                    </h2>
                    <p className="text-[#666666] text-xs md:text-[14px] leading-relaxed">
                        Discover comfort, elegance, and exceptional hospitality. Reserve your
                        ideal room for a memorable stay at Hotel Prince.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex items-center gap-7 md:gap-9 border-b border-[#E2E4DF] mb-5 overflow-x-auto">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setActiveTab(category)}
                            className={`pb-2 text-[15px] whitespace-nowrap transition-all duration-200 border-b-2 focus:outline-none cursor-pointer ${
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                        {[...Array(8)].map((_, index) => (
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
                    <div className="text-center py-10 bg-white rounded-xl border border-red-200 p-6">
                        <p className="text-red-600 font-medium mb-1">
                            ({error?.message})
                        </p>
                        <p className="text-gray-500 text-sm">
                            <strong>public/data/rooms.json</strong>
                        </p>
                    </div>
                )}

                {/* Rooms Grid (CommonListingCard ব্যবহার করা হয়েছে) */}
                {!isLoading && !isError && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                        {filteredRooms.map((room) => (
                            <CommonListingCard key={room.id} item={room} />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
};

export default RoomsSection;