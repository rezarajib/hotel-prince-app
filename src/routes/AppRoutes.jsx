import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/home/Home';
import Rooms from '../pages/rooms/Rooms';
import Packages from '../pages/packages/Packages';
import Events from '../pages/events/Events';
import Restaurant from '../pages/restaurant/Restaurant';
import Facilities from '../pages/facilities/Facilities';
import Rides from '../pages/rides/Rides';
import Contact from '../pages/contact/Contact';
import SignUp from '../pages/auth/component/SignUp';
import CheckAvailabilityForm from '../features/booking/CheckAvailabilityForm';
import ScrollToTop from '../components/common/ScrollToTop';

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'rooms', element: <Rooms /> },
          { path: 'packages', element: <Packages /> },
          { path: 'events', element: <Events /> },
          { path: 'restaurant', element: <Restaurant /> },
          { path: 'restaurants', element: <Restaurant /> },
          { path: 'facilities', element: <Facilities /> },
          { path: 'rides', element: <Rides /> },
          { path: 'contact', element: <Contact /> },
          { path: 'checkout', element: <CheckAvailabilityForm /> },
        ],
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;