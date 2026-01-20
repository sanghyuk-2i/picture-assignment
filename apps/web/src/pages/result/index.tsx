import { usePictureStore } from '@/stores/picture';
import { NoDataError } from '@/utils/error';
import { Button, cn, Flex, Grid, Image } from '@repo/ui';
import { ReactNode } from 'react';

import { useNavigate } from 'react-router';

const InfoCardItem = (props: { label: string; value: string; link?: boolean }) => {
  const { label, value, link = false } = props;

  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <p className="text-gray-500">
        {link ? (
          <a href={value} className="underline" target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        ) : (
          value
        )}
      </p>
    </div>
  );
};

const InfoCard = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <Grid className={cn('w-full grid-cols-1 gap-2 rounded-2xl bg-white p-5', className)}>{children}</Grid>;
};

const Page = () => {
  const navigate = useNavigate();
  const { info: pictureInfo } = usePictureStore();

  const handlePrev = () => {
    navigate('/');
  };

  if (!pictureInfo) throw new NoDataError('사진 정보가 없습니다.');

  return (
    <>
      {/* Mask Layer Container */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient Overlay (Rectangle 1) */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #D9D9D9 0%, rgba(217, 217, 217, 0) 100%)',
          }}
        />

        {/* Blurred Image (image 3) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${pictureInfo.urls.download}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
            filter: 'blur(20px)',
            transform: 'scale(1.1)',
          }}
        />

        {/* Noise Layer */}
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
