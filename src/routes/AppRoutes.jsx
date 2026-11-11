import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

import Home from '../pages/Home';
import Rooms from '../pages/Rooms';
import Packages from '../pages/Packages';
import Events from '../pages/Events';
import Restaurant from '../pages/Restaurant';
import Rides from '../pages/Rides';
import Contact from '../pages/Contact';
import Auth from '../pages/Auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "rooms", element: <Rooms /> },
      { path: "packages", element: <Packages /> },
      { path: "events", element: <Events /> },
      { path: "restaurant", element: <Restaurant /> },
      { path: "rides", element: <Rides /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;