import React from 'react';
import { useQuery } from '@tanstack/react-query';
import EventCard from './EventCard';

const fetchEvents = async () => {
  const response = await fetch('/data/events.json');
  if (!response.ok) {
    throw new Error('Failed to fetch events data');
  }
  return response.json();
};

const EventsSection = () => {
  const { data: events = [], isLoading, isError } = useQuery({
    queryKey: ['eventsData'],
    queryFn: fetchEvents,
  });

  const eventList = Array.isArray(events) ? events : events?.events || [];

  return (
    <section className="bg-[#F7F8F3] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#666666] text-sm md:text-base font-normal mb-2">
            Special Events
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-[#18392B] font-normal leading-tight mb-4">
            Celebrate Your Moments With Us
          </h2>
          <p className="text-[#666666] text-sm md:text-[15px] leading-relaxed">
            Make every occasion memorable with our exclusive event spaces and personalized
            arrangements. Explore upcoming events and reserve your spot.
          </p>
        </div>

        {/* Loading Skeleton */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 h-[420px] animate-pulse border border-[#ECEEE9]"
              >
                <div className="h-[200px] bg-gray-200 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-3"></div>
                <div className="h-6 bg-gray-200 rounded w-2/3 mb-4"></div>
                <div className="h-12 bg-gray-200 rounded mb-4"></div>
                <div className="h-10 bg-gray-200 rounded-lg mt-auto"></div>
              </div>
            ))}
          </div>
        )}

        {/* Error Message */}
        {isError && (
          <div className="text-center py-10 text-red-600 text-sm">
            ইভেন্টের তথ্য লোড করা সম্ভব হয়নি। দয়া করে `public/data/events.json` চেক করুন।
          </div>
        )}

        {/* Events Grid */}
        {!isLoading && !isError && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventList.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default EventsSection;