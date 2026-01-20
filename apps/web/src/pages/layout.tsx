import Header from '@/components/layouts/Header';
import { Outlet, useLocation } from 'react-router';

const WHITE_PATHS = ['/result'];

const checkIsWhitePath = (pathname: string) => {
  return WHITE_PATHS.includes(pathname);
};

const Layout = () => {
  const pathname = useLocation().pathname;
  const titleClassName = checkIsWhitePath(pathname) ? 'text-white' : 'text-black';

  return (
    <>
      <Header title="이상혁" titleClassName={titleClassName} />
      <div className="h-[calc(100vh-55px)]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
