import usePictureInfo from '@/hooks/usePictureInfo';
import { Button } from '@repo/ui';
import { useNavigate } from 'react-router';

const Page = () => {
  const navigate = useNavigate();
  const { data: pictureInfo } = usePictureInfo({ id: '0' });

  const handlePrev = () => {
    navigate('/');
  }

  return (
    <main>
      <img src={pictureInfo?.download_url} alt={pictureInfo?.author} />
      <p>{pictureInfo?.author}</p>
      <p>{pictureInfo?.width}</p>
      <p>{pictureInfo?.height}</p>
      <p>{pictureInfo?.url}</p>
      <p>{pictureInfo?.download_url}</p>

      <Button onClick={handlePrev}>이전</Button>
    </main>
  );
};

export default Page;
