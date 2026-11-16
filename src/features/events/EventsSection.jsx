import { useQuery } from '@tanstack/react-query';
import EventCard from './EventCard';

const EventsSection = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ['eventsData'],
    queryFn: async () => (await fetch('/data/events.json')).json(),
  });

  const events = Array.isArray(data) ? data : data?.events || [];

  return (
    <section className="bg-white pt-16 md:pt-20 pb-20 md:pb-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-[#666] text-xs md:text-[13px] mb-1.5">Special Events</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] text-[#18392B] font-normal leading-tight mb-2.5">
            Celebrate Your Moments With Us
          </h2>
          <p className="text-[#666] text-xs md:text-[13px] leading-relaxed">
            Make every occasion memorable with our exclusive event spaces and personalized arrangements. Explore upcoming events and reserve your spot.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
            {[...Array(4)].map((_, i) => <div key={i} className="bg-[#F7F8F3] rounded-2xl h-[360px] animate-pulse" />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
            {events.map((ev) => <EventCard key={`${ev.id}-${ev.image}`} event={ev} />)}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;