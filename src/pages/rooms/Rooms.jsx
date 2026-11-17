import RoomsHero from '../../features/rooms/RoomsHero';
import RoomsSection from '../../features/rooms/RoomsSection';
import BookingSearchBar from '../../components/common/BookingSearchBar';

const Rooms = () => {
  return (
    <main className="min-h-screen bg-stone-100">
      <RoomsHero />

      <div className="-mt-12 relative z-10 mb-12">
        <BookingSearchBar 
          buttonText="Search Rooms" 
          onSearch={(data) => console.log('Room Search:', data)} 
        />
      </div>

      <RoomsSection />
    </main>
  );
};

export default Rooms;