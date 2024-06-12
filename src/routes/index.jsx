import { Navigate, useRoutes } from 'react-router-dom';
import HomePage from '../pages/home';
import { authRoutes } from './auth';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },

    // auth routes
    ...authRoutes,

    // no match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
