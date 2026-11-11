import CheckAvailabilityForm from '../features/booking/CheckAvailabilityForm';
import heroBanner from '../assets/images/hotelPrinceBanner .jpg';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] bg-cover bg-center flex flex-col justify-between pt-32 pb-12 px-4 sm:px-8 md:px-16"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        {/* Dark Overlay for Figma Blur & Contrast effect */}
        <div className="absolute inset-0 bg-black/45 z-0" />

        {/* Hero Content (Text overlaying banner) */}
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white my-auto pt-10">
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-200 font-medium mb-3 block">
            THE ART OF FEELING AT HOME
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-wide leading-tight uppercase mb-4">
            A LITTLE ESCAPE. <br />
            AN EXTRAORDINARY STAY.
          </h1>
          <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
            Thoughtful comforts. Timeless hospitality. Welcome to your own kind of wonderful.
          </p>
        </div>

        {/* Booking Filter Box at the bottom of Hero */}
        <div className="relative z-10 w-full mt-10">
          <CheckAvailabilityForm />
        </div>
      </section>

      {/* Next sections of Home Page will come here */}
    </div>
  );
};

export default Home;