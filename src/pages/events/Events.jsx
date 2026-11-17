import EventsHero from '../../features/events/EventsHero';
import EventsSection from '../../features/events/EventsSection';
import BookingSearchBar from '../../components/common/BookingSearchBar';

const Events = () => {
  return (
    <main className="bg-white">
      <EventsHero />
      
      <div className="my-8">
        <BookingSearchBar 
          buttonText="Find Venue" 
          onSearch={(data) => console.log('Event Search:', data)} 
        />
      </div>

      <EventsSection />
    </main>
  );
};

export default Events;