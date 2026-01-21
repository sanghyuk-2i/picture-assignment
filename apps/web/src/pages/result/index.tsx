import { Button, Flex, Grid, Image } from '@repo/ui';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { InfoCard, InfoCardItem } from '@/components/pictures/InfoCard';
import { useTimer } from '@/hooks/useTimer';
import LoadingPage from '@/pages/result/loading';
import { usePictureStore } from '@/stores/picture';

const BackgroundLayer = ({ backgroundUrl }: { backgroundUrl: string }) => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #D9D9D9 0%, rgba(217, 217, 217, 0) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${backgroundUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          filter: 'blur(20px)',
          transform: 'scale(1.1)',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("noise-bg.png")`,
          backgroundRepeat: 'repeat',
          opacity: 0.15,
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
};

const Page = () => {
  const navigate = useNavigate();
  const { info: pictureInfo, remove: removePictureInfo } = usePictureStore();
  const { start } = useTimer({
    startFrom: 1,
    onEnd: () => {
      navigate('/', { replace: true });
    },
  });

  const handlePrev = () => {
    removePictureInfo();
    navigate('/');
  };

  useEffect(() => {
    if (pictureInfo?.id) return;

    start();
  }, [start, pictureInfo?.id]);

  if (!pictureInfo) return <LoadingPage />;

  return (
    <>
      <BackgroundLayer backgroundUrl={pictureInfo.urls.download} />

      <Grid className="h-fit items-center px-5 lg:h-full lg:grid-cols-2 lg:gap-20">
        <div className="my-10">
          <Image
            src={pictureInfo.urls.download}
            alt={pictureInfo.author}
            aspectRatio={`${pictureInfo.size.width.value} / ${pictureInfo.size.height.value}`}
            className="rounded-2xl"
          />
        </div>

        <Flex direction="column" className="gap-3 pb-10 lg:pb-0">
          <Flex direction="column" className="w-full gap-3">
            <InfoCard className="md:grid-cols-2">
              <InfoCardItem label="id" value={pictureInfo.id} />
              <InfoCardItem label="author" value={pictureInfo.author} />
            </InfoCard>

            <InfoCard className="md:grid-cols-2">
              <InfoCardItem label="width" value={pictureInfo.size.width.label} />
              <InfoCardItem label="height" value={pictureInfo.size.height.label} />
            </InfoCard>

            <InfoCard>
              <InfoCardItem link label="url" value={pictureInfo.urls.raw} />
              <InfoCardItem link label="download_url" value={pictureInfo.urls.download} />
            </InfoCard>
          </Flex>

          <Button fullWidth onClick={handlePrev} className="md:mx-auto md:w-[154px]">
            이전
          </Button>
        </Flex>
      </Grid>
    </>
  );
};

export default Page;
