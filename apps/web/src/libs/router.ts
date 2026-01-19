import Layout from '@/pages/layout';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

const StartPage = lazy(() => import('@/pages/index'));
const ResultPage = lazy(() => import('@/pages/result'));

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: StartPage,
      },
      {
        path: '/result',
        Component: ResultPage,
      },
    ],
  },
]);
