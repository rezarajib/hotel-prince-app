import { useContext } from 'react';
import { AuthContext } from '../features/auth/AuthContext';
import PageHero from '../components/common/PageHero';

const ProfileSettings = () => {
  const { user } = useContext(AuthContext);

  return (
    <main className="min-h-screen bg-[#F4F5EE] pb-16">
      <PageHero subtitle="Your Account" title="Profile Setting" />
      <section className="mx-auto max-w-2xl px-4 md:px-8">
        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold text-[#18392B]">Personal Information</h2>
          <dl className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-medium text-[#777]">Name</dt>
              <dd className="mt-1 text-sm text-[#333]">{user?.name ?? 'Guest'}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-[#777]">Email</dt>
              <dd className="mt-1 text-sm text-[#333]">{user?.email ?? 'Not available'}</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
};

export default ProfileSettings;
