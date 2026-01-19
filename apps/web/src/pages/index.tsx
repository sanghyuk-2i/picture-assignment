import { Button } from '@repo/ui';
import { useNavigate } from 'react-router';

const Page = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/result');
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex-1">
        <p className="text-center">
          안녕하세요
          <br />
          이상혁입니다.
        </p>
      </div>

      <Button onClick={handleNext}>시작</Button>
    </main>
  );
};

export default Page;
