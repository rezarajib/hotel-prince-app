import CheckAvailabilityForm from '../booking/CheckAvailabilityForm';
import PageHero from '../../components/common/PageHero';

const PackagesHero = () => {
  return (
    <PageHero
      subtitle="Book Your Stay"
      title="All Packages"
      description="Discover comfort, elegance, and exceptional hospitality. Reserve your ideal room for a memorable stay at Hotel Prince."
    >
      <CheckAvailabilityForm />
    </PageHero>
  );
};

export default PackagesHero;