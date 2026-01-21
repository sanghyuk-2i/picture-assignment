import '@/styles/global.css';
import '@repo/ui/styles.css';

import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import Providers from '@/components/providers';
import { router } from '@/libs/router';

const App = () => (
  <Providers>
    <RouterProvider router={router} />
  </Providers>
);

createRoot(document.getElementById('app')!).render(<App />);
