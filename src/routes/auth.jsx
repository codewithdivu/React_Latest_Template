import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';

import { LoadingScreen } from '../components/loading-screen';

const LoginPage = lazy(() => import('../pages/auth/login'));
const RegisterPage = lazy(() => import('../pages/auth/register'));

export const authRoutes = [
  {
    path: 'auth',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
];
