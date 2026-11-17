import AboutSection from "../../features/about/AboutSection";
import RoomsSection from '../../features/rooms/RoomsSection';
import PackagesSection from '../../features/packages/PackagesSection';
import EventsSection from '../../features/events/EventsSection';
import FacilitiesSection from '../../features/facilities/FacilitiesSection';
import TestimonialsSection from '../../features/testimonials/TestimonialsSection';
import HeroSection from "./components/HeroSection";
import BookingSearchBar from "../../components/common/BookingSearchBar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* Booking Search Bar */}
      <div className="bg-white pt-1 pb-12 md:pb-16">
        <div className="-mt-40 md:-mt-48 relative z-20">
          <BookingSearchBar 
            buttonText="Check Availability" 
            onSearch={(data) => console.log('Home Search:', data)} 
          />
        </div>
      </div>

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Rooms Section */}
      <RoomsSection />

      {/* 4. Packages Section */}
      <PackagesSection />

      {/* 5. Events Section */}
      <EventsSection />

      {/* 6. Facilities Section */}
      <FacilitiesSection />

      {/* 7. Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
};

export default Home;