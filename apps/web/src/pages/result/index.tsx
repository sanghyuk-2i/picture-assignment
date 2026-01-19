import usePictureInfo from '@/hooks/usePictureInfo';

const Page = () => {
  const { data: pictureInfo } = usePictureInfo({ id: '1' });

  return (
    <main>
      <img src={pictureInfo?.download_url} alt={pictureInfo?.author} />
      <p>{pictureInfo?.author}</p>
      <p>{pictureInfo?.width}</p>
      <p>{pictureInfo?.height}</p>
      <p>{pictureInfo?.url}</p>
      <p>{pictureInfo?.download_url}</p>
    </main>
  );
};

export default Page;
