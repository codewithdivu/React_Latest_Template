import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';

import { LoadingScreen } from '../components/loading-screen';

const Page400 = lazy(() => import('../pages/Error/400'));
const Page401 = lazy(() => import('../pages/Error/401'));
const Page403 = lazy(() => import('../pages/Error/403'));
const Page404 = lazy(() => import('../pages/Error/404'));
const Page500 = lazy(() => import('../pages/Error/500'));

export const errorRoutes = [
  {
    path: 'error',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: '400',
        element: <Page400 />,
      },
      {
        path: '401',
        element: <Page401 />,
      },
      {
        path: '403',
        element: <Page403 />,
      },
      {
        path: '404',
        element: <Page404 />,
      },
      {
        path: '500',
        element: <Page500 />,
      },
    ],
  },
];
