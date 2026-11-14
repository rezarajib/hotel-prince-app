import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import RoomCard from './RoomCard';

const CATEGORIES = ['Hotel Room', 'Cottage', 'Villa', 'Tent', 'Cabin'];

const fetchRooms = async () => {
    // প্রথমে /data/rooms.json চেক করবে
    let response = await fetch('/data/rooms.json');

    // যদি rooms.json না পায় তবে /data/data.json চেক করবে
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
        <section className="bg-[#F4F5F0] py-20 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <p className="text-[#666666] text-sm md:text-base font-normal mb-2">
                        Book Your Stay
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-[#18392B] font-normal leading-tight mb-4">
                        Find Your Perfect Stay
                    </h2>
                    <p className="text-[#666666] text-sm md:text-[15px] leading-relaxed">
                        Discover comfort, elegance, and exceptional hospitality. Reserve your
                        ideal room for a memorable stay at Hotel Prince.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex items-center gap-7 md:gap-9 border-b border-[#E2E4DF] mb-8 overflow-x-auto">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`pb-3 text-[15px] whitespace-nowrap transition-all duration-200 border-b-2 ${activeTab === category
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
                        {[...Array(8)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-4 h-[380px] animate-pulse border border-[#ECEEE9]"
                            >
                                <div className="h-[200px] bg-gray-200 rounded-xl mb-4"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/3 mb-3"></div>
                                <div className="h-6 bg-gray-200 rounded w-2/3 mb-4"></div>
                                <div className="h-10 bg-gray-200 rounded-lg mt-auto"></div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Error Message (Exact Reason) */}
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

                {/* Rooms Grid (Exact 4-Column Figma Design) */}
                {!isLoading && !isError && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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