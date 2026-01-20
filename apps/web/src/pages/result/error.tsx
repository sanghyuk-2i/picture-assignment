import { useTimer } from '@/hooks/useTimer';
import { NoDataError } from '@/utils/error';
import { useEffect } from 'react';
import { useRouteError } from 'react-router';

const NoPictureInfo = (props: { title: string }) => {
  const { title } = props;

  const { seconds, start } = useTimer({
    startFrom: 3,
    onEnd: () => (window.location.href = '/'),
  });

  useEffect(() => {
    start();
  }, [start]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h2>{title}</h2>
      <p>{seconds}초 후 이전 페이지로 이동합니다.</p>
    </main>
  );
};

const ErrorPage = () => {
  const error = useRouteError();

  if (!(error instanceof NoDataError)) throw error;

  const title = error.message;

  return <NoPictureInfo title={title} />;
};

export default ErrorPage;
