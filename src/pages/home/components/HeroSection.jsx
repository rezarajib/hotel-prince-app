import heroBanner from "../../../assets/images/hotelPrinceBanner .jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen overflow-visible bg-cover bg-center flex flex-col justify-between px-4 pt-32 pb-12 sm:px-8 md:px-16 md:pt-36"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 z-0" />

      {/* Hero Article Content (Exact Figma Style) */}
      <article className="relative z-10 w-full max-w-7xl mx-auto text-center text-white my-auto pt-16">
        <p className="font-sans text-base md:text-xl font-normal uppercase tracking-normal leading-normal md:leading-22.5 text-center text-white/90">
          THE ART OF FEELING AT HOME
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal uppercase tracking-tight leading-tight lg:leading-28.5 mb-5">
          A LITTLE{" "}
          <span className="relative inline-block px-2">
            <span
              className="absolute inset-0 bg-sky-900/50 -z-10"
              aria-hidden="true"
            />
            ESCAPE
          </span>
          . <br className="hidden md:block" />
          AN EXTRAORDINARY STAY.
        </h1>

        <p className="font-sans text-base md:text-xl font-normal tracking-normal leading-relaxed md:leading-22.5 text-center text-neutral-300 max-w-210.5 mx-auto">
          Thoughtful comforts. Timeless hospitality. Welcome to your own kind of wonderful.
        </p>
      </article>
    </section>
  );
};

export default HeroSection;