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
import LoginPage from '../pages/auth/LoginPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import VerificationCodePage from '../pages/auth/VerificationCodePage';
import NewPasswordPage from '../pages/auth/NewPasswordPage';
import MyBookings from '../pages/MyBookings';
import ProfileSettings from '../pages/ProfileSettings';
import AuthProvider from '../features/auth/AuthProvider';
import CheckAvailabilityForm from '../features/booking/CheckAvailabilityForm';
import ScrollToTop from '../components/common/ScrollToTop';
import NotFound from '../pages/not-found/NotFound';

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
          { path: 'my-bookings', element: <MyBookings /> },
          { path: 'profile-settings', element: <ProfileSettings /> },
        ],
      },
      { path: '/signup', element: <SignUp /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/forgot-password', element: <ForgotPasswordPage /> },
      { path: '/verify-code', element: <VerificationCodePage /> },
      { path: '/new-password', element: <NewPasswordPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

const AppRoutesWithAuth = () => (
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>
);

export default AppRoutesWithAuth;