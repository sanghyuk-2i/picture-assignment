import { Button, Flex } from '@repo/ui';
import { LoaderFunction, redirect, useNavigate } from 'react-router';

import CTASection from '@/components/layouts/CTASection';
import { useDebouncedCallback } from '@/hooks/useDebounceCallback';
import usePictureActions from '@/hooks/usePictureActions';
import { preprocessPictureInfo } from '@/models/picture';
import { usePictureStore } from '@/stores/picture';

export const mainPageLoader: LoaderFunction = () => {
  const isPictureInfoAvailable = !!usePictureStore.getState().info?.id;
  if (isPictureInfoAvailable) return redirect('/result');

  return true;
};

const Page = () => {
  const navigate = useNavigate();
  const { getPictureInfo, isGettingPictureInfo } = usePictureActions();
  const { info: pictureInfo, set: setPictureInfo } = usePictureStore();

  const handleNext = async () => {
    if (isGettingPictureInfo) return;

    if (pictureInfo?.id) {
      navigate('/result');
      return;
    }

    try {
      const pictureInfo = await getPictureInfo({ id: '0' });
      const preprocessedPictureInfo = preprocessPictureInfo(pictureInfo);
      setPictureInfo(preprocessedPictureInfo);

      navigate('/result');
    } catch (error) {
      console.error(error);
    }
  };

  const debouncedHandleNext = useDebouncedCallback(handleNext, 300);

  return (
    <>
      <Flex as="main" direction="column" alignItems="center" justifyContent="center" className="h-[calc(100%-128px)]">
        <p className="text-center text-[1.75rem] font-semibold">
          안녕하세요
          <br />
          이상혁입니다.
        </p>
      </Flex>

      <CTASection>
        <Button
          fullWidth
          loading={isGettingPictureInfo}
          onClick={debouncedHandleNext}
          className="md:mx-auto md:w-[335px]"
        >
          시작
        </Button>
      </CTASection>
    </>
  );
};

export default Page;
