
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import RoomCard from './RoomCard';
import SectionHeader from '../../components/common/SectionHeader';

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
        <section className="bg-[#F4F5EE]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    subtitle="Book Your Stay"
                    title="Find Your Perfect Stay"
                    description="Discover comfort, elegance, and exceptional hospitality. Reserve your ideal room for a memorable stay at Hotel Prince."
                    className="mb-12 md:mb-14"
                />

                {/* Category Tabs */}
                <div className="mx-auto mb-12 flex w-full max-w-360 items-center gap-7 overflow-x-auto border-b border-[#E2E4DF] md:mb-14 md:gap-9">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setActiveTab(category)}
                            className={`pb-2 text-base whitespace-nowrap transition-all duration-200 border-b-2 focus:outline-none cursor-pointer ${
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
                        {[...Array(8)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-[#F7F8F3] rounded-2xl p-4 h-95 animate-pulse border border-[#ECEEE9]"
                            >
                                <div className="h-50 bg-gray-200 rounded-xl mb-4"></div>
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

                {/* Rooms Grid */}
                {!isLoading && !isError && (
                    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                        {filteredRooms.map((room) => (
                            <RoomCard key={room.id} room={room} />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
};

export default RoomsSection;