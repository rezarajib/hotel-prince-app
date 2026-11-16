import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import PageHero from '../components/common/PageHero';

const bookingTabs = ['Package Booking', 'Room Booking', 'Event Booking'];
const bookingRecords = {
  'Package Booking': [
    { image: '/images/pkg-1.png', id: 'PKG-2025-001', date: 'Oct 12, 2025', roomType: 'Deluxe Package', roomNumber: '304', checkIn: 'Nov 20, 2025', checkOut: 'Nov 23, 2025', guests: '2 Adults' },
    { image: '/images/pkg-2.png', id: 'PKG-2025-002', date: 'Aug 08, 2025', roomType: 'Family Package', roomNumber: '208', checkIn: 'Sep 10, 2025', checkOut: 'Sep 12, 2025', guests: '2 Adults, 1 Child' },
  ],
  'Room Booking': [
    { image: '/images/deluxe-room.png', id: 'RM-2025-001', date: 'Oct 12, 2025', roomType: 'Deluxe Room', roomNumber: '304', checkIn: 'Nov 20, 2025', checkOut: 'Nov 23, 2025', guests: '2 Adults' },
  ],
  'Event Booking': [
    { image: '/images/events/event-1.png', id: 'EV-2025-001', date: 'Oct 12, 2025', roomType: 'Wedding Hall', roomNumber: 'Grand Hall', checkIn: 'Nov 20, 2025', checkOut: 'Nov 20, 2025', guests: '120 Guests' },
  ],
};

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState(bookingTabs[0]);
  const [bookingStatus, setBookingStatus] = useState('Upcoming');
  const [search, setSearch] = useState('');
  const records = useMemo(() => {
    const statusRecords = bookingStatus === 'Upcoming'
      ? bookingRecords[activeTab].slice(0, 1)
      : bookingRecords[activeTab].slice(1);
    return statusRecords.filter((booking) =>
      `${booking.id} ${booking.roomType} ${booking.roomNumber}`.toLowerCase().includes(search.toLowerCase()),
    );
  }, [activeTab, bookingStatus, search]);

  return (
    <main className="min-h-screen bg-[#F4F5EE] pb-16">
      <PageHero
        subtitle="Book Your Stay"
        title="My Bookings"
        description="View and manage all your bookings, track their status, and stay updated on your upcoming visits."
      />
      <section className="mx-auto -mt-2 max-w-[1440px] px-4 md:px-8 lg:px-16">
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {bookingTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeTab === tab ? 'bg-[#18392B] text-white' : 'bg-white text-[#666] hover:text-[#18392B]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <section className="rounded-2xl bg-white p-5 shadow-sm md:p-6">
          <div className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <h2 className="text-xl font-semibold text-[#18392B]">{activeTab.replace(' Booking', ' Bookings')}</h2>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex rounded-full bg-[#F3F4EF] p-1">
                {['Upcoming', 'Completed'].map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setBookingStatus(status)}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      bookingStatus === status ? 'bg-[#18392B] text-white' : 'text-[#666]'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
              <label className="flex min-w-64 items-center gap-2 rounded-lg border border-[#E5E5E5] px-3 py-2.5 text-[#777]">
                <Search className="h-4 w-4 shrink-0" />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search packages booking..."
                  aria-label="Search bookings"
                  className="w-full bg-transparent text-sm text-[#333] outline-none placeholder:text-[#999]"
                />
              </label>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#EAEAEA] text-xs font-medium uppercase tracking-wide text-[#777]">
                  {['Image', 'Booking Id', 'Booking Date', 'Room Type', 'Room Number', 'Check-In', 'Check-Out', 'Guests', 'Actions'].map((column) => (
                    <th key={column} className="whitespace-nowrap px-3 py-4">{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {records.map((booking) => (
                  <tr key={booking.id} className="border-b border-[#F0F0F0] text-[#555] last:border-0">
                    <td className="px-3 py-4">
                      <img src={booking.image} alt="" className="h-12 w-16 rounded-lg object-cover" />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 font-medium text-[#18392B]">{booking.id}</td>
                    <td className="whitespace-nowrap px-3 py-4">{booking.date}</td>
                    <td className="whitespace-nowrap px-3 py-4">{booking.roomType}</td>
                    <td className="whitespace-nowrap px-3 py-4">{booking.roomNumber}</td>
                    <td className="whitespace-nowrap px-3 py-4">{booking.checkIn}</td>
                    <td className="whitespace-nowrap px-3 py-4">{booking.checkOut}</td>
                    <td className="whitespace-nowrap px-3 py-4">{booking.guests}</td>
                    <td className="whitespace-nowrap px-3 py-4">
                      <button type="button" className="font-medium text-[#18392B] hover:underline">View Details</button>
                    </td>
                  </tr>
                ))}
                {records.length === 0 && (
                  <tr>
                    <td colSpan="9" className="px-3 py-12 text-center text-[#777]">No bookings found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex flex-col gap-3 border-t border-[#EAEAEA] pt-5 text-sm text-[#777] sm:flex-row sm:items-center sm:justify-between">
            <p>Showing {records.length ? 1 : 0} to {records.length} of {records.length} results</p>
            <div className="flex items-center gap-2">
              <button type="button" disabled className="rounded-lg border border-[#E5E5E5] px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50">Previous</button>
              <button type="button" className="rounded-lg bg-[#18392B] px-3 py-2 text-white">1</button>
              <button type="button" disabled className="rounded-lg border border-[#E5E5E5] px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50">Next</button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default MyBookings;
