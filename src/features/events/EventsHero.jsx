import CheckAvailabilityForm from '../booking/CheckAvailabilityForm';
import PageHero from '../../components/common/PageHero';

const EventsHero = () => {
  return (
    <PageHero
      subtitle="Celebrate With Us"
      title="All Events"
      description="Host unforgettable celebrations, corporate retreats, and timeless moments surrounded by elegance at Hotel Prince."
    >
      <CheckAvailabilityForm />
    </PageHero>
  );
};

export default EventsHero;