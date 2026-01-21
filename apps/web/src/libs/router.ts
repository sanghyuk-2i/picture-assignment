import RootErrorPage from '@/pages/error';
import { mainPageLoader } from '@/pages/index';
import Layout from '@/pages/layout';
import NotFoundPage from '@/pages/not-found';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

const StartPage = lazy(() => import('@/pages/index'));
const ResultPage = lazy(() => import('@/pages/result'));

export const router = createBrowserRouter([
  {
    path: '*',
    Component: NotFoundPage,
  },
  {
    path: '/',
    Component: Layout,
    ErrorBoundary: RootErrorPage,
    children: [
      {
        index: true,
        loader: mainPageLoader,
        Component: StartPage,
      },
      {
        path: '/result',
        Component: ResultPage,
      },
    ],
  },
]);
