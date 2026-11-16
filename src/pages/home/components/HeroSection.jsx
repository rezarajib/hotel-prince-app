import CheckAvailabilityForm from "../../../features/booking/CheckAvailabilityForm";
import heroBanner from "../../../assets/images/hotelPrinceBanner .jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-between pt-36 pb-12 px-4 sm:px-8 md:px-16"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 z-0" />

      {/* Hero Article Content (Exact Figma Style) */}
      <article className="relative z-10 max-w-296.25 mx-auto text-center text-white my-auto pt-16">
        <p className="font-['Sora',sans-serif] text-xs md:text-sm uppercase tracking-[0.25em] text-gray-200 font-normal mb-3">
          THE ART OF FEELING AT HOME
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[74px] font-normal uppercase tracking-wide leading-[1.12] mb-4">
          A LITTLE ESCAPE. <br />
          AN EXTRAORDINARY STAY.
        </h1>

        <p className="font-['Sora',sans-serif] text-sm md:text-base text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
          Thoughtful comforts. Timeless hospitality. Welcome to your own kind of wonderful.
        </p>
      </article>

      {/* Booking Form Box */}
      <div className="relative z-10 w-full mt-24 md:mt-32">
        <CheckAvailabilityForm />
      </div>
    </section>
  );
};

export default HeroSection;