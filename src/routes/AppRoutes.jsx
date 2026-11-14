import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/home/Home';
import Rooms from '../pages/rooms/Rooms';
import Packages from '../pages/packages/Packages'; // ১. নতুন পেজ ইমপোর্ট
import CheckAvailabilityForm from '../features/booking/CheckAvailabilityForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "rooms", element: <Rooms /> },
      { path: "packages", element: <Packages /> }, // ২. নতুন রাউট যুক্ত করা হলো
      { path: "checkout", element: <CheckAvailabilityForm /> },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;