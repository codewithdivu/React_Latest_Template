import { Navigate, useRoutes } from 'react-router-dom';
import HomePage from '../pages/home';
import { authRoutes } from './auth';
import { errorRoutes } from './error';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },

    // main routes

    // auth routes
    ...authRoutes,

    // error routes
    ...errorRoutes,

    // no match 404
    { path: '*', element: <Navigate to="/error/404" replace /> },
  ]);
}
