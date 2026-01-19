import Header from '@/components/layouts/Header';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
