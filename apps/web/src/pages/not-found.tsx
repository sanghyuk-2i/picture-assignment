import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl">페이지를 찾을 수 없습니다</h2>
      <p className="text-gray-600">요청하신 페이지가 존재하지 않습니다.</p>
      <Link
        to="/"
        className="rounded-xl bg-gray-900 px-6 py-3 text-white transition-colors hover:bg-gray-800"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFound;

