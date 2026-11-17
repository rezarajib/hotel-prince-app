import { useQuery } from '@tanstack/react-query';
import EventCard from './EventCard';
import SectionHeader from '../../components/common/SectionHeader';

const EventsSection = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ['eventsData'],
    queryFn: async () => (await fetch('/data/events.json')).json(),
  });

  const events = Array.isArray(data) ? data : data?.events || [];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Special Events"
          title="Celebrate Your Moments With Us"
          description="Make every occasion memorable with our exclusive event spaces and personalized arrangements. Explore upcoming events and reserve your spot."
          className="mb-12 md:mb-14"
        />

        {isLoading ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => <div key={i} className="bg-[#F7F8F3] rounded-2xl h-90 animate-pulse" />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((ev) => <EventCard key={`${ev.id}-${ev.image}`} event={ev} />)}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;