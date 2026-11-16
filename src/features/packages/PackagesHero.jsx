import CheckAvailabilityForm from '../booking/CheckAvailabilityForm';

const PackagesHero = () => {
  return (
    <section className="bg-[#F4F5EE] pt-32 md:pt-36 pb-16 md:pb-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Hero Subtitle & Title */}
        <p className="text-[#666666] text-xs md:text-[13px] font-normal mb-2">
          Book Your Stay
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-[54px] text-[#18392B] font-normal leading-tight mb-3">
          All Packages
        </h1>
        <p className="text-[#666666] text-xs md:text-[14px] max-w-lg mx-auto leading-relaxed mb-10">
          Discover comfort, elegance, and exceptional hospitality. Reserve your ideal room for a
          memorable stay at Hotel Prince.
        </p>

        
        <div className="text-left">
          <CheckAvailabilityForm />
        </div>
      </div>
    </section>
  );
};

export default PackagesHero;