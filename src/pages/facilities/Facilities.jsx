import FacilitiesSection from '../../features/facilities/FacilitiesSection';
import PageHero from '../../components/common/PageHero';

const Facilities = () => {
  return (
    <main className="bg-white">
      <PageHero
        subtitle="Hotel Prince"
        title="Our Facilities"
        description="Enjoy a seamless, comfortable stay with thoughtfully curated facilities for every guest."
      />
      <FacilitiesSection />
    </main>
  );
};

export default Facilities;