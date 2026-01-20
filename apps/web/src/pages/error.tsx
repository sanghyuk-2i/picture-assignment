import { Link } from 'react-router';

const Error = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-2xl">오류가 발생했습니다</h2>
      <p className="text-gray-600">
        알 수 없는 오류가 발생했습니다.
        <br />
        잠시 후 다시 시도해주세요.
      </p>

      <Link to="/" className="rounded-xl bg-gray-900 px-6 py-3 text-white transition-colors hover:bg-gray-800">
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default Error;
