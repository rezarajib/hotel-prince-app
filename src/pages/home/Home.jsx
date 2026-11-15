import AboutSection from "../../features/about/AboutSection";
import RoomsSection from '../../features/rooms/RoomsSection';
import PackagesSection from '../../features/packages/PackagesSection';
import EventsSection from '../../features/events/EventsSection';
import FacilitiesSection from '../../features/facilities/FacilitiesSection';
import TestimonialsSection from '../../features/testimonials/TestimonialsSection';
import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">

      
      {/* Hero Section */}
     <HeroSection/>

      {/* 2. About Section  */}
      <AboutSection />

      {/* 3. Rooms Section */}

     
      
      <RoomsSection />

      {/* packges secion  */}
      <PackagesSection />

      {/* event section */}

      <EventsSection />

      {/* faclities section */}
      <FacilitiesSection />

      {/* TestimonialsSection  */}
            <TestimonialsSection />

      {/* FaqSection  */}
    </div>
  );
};

export default Home;