import CheckAvailabilityForm from "../../features/booking/CheckAvailabilityForm";
import AboutSection from "../../features/about/AboutSection";
import heroBanner from "../../assets/images/hotelPrinceBanner .jpg";
import RoomsSection from '../../features/rooms/RoomsSection';
import PackagesSection from '../../features/packages/PackagesSection';
import EventsSection from '../../features/events/EventsSection';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center flex flex-col justify-between pt-36 pb-12 px-4 sm:px-8 md:px-16"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45 z-0" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white my-auto pt-16 font-['Sora',sans-serif]">
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-200 font-medium mb-3 block">
            THE ART OF FEELING AT HOME
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide leading-tight uppercase mb-4">
            A LITTLE ESCAPE. <br />
            AN EXTRAORDINARY STAY.
          </h1>
          <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
            Thoughtful comforts. Timeless hospitality. Welcome to your own kind of wonderful.
          </p>
        </div>

        {/* Booking Form Box */}
        {/* Booking Form Box */}
        <div className="relative z-10 w-full mt-24 md:mt-32">
          <CheckAvailabilityForm />
        </div>
      </section>

      {/* 2. About Section  */}
      <AboutSection />

      {/* 3. Rooms Section */}

     
      
      <RoomsSection />

      {/* packges secion  */}
      <PackagesSection />

      {/* event section */}

      <EventsSection />
    </div>
  );
};

export default Home;