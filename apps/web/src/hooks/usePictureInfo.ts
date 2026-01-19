import { getPictureInfo, GetPictureInfoParams } from '@/services/picture';
import { useSuspenseQuery } from '@tanstack/react-query';

const usePictureInfo = (params: GetPictureInfoParams) => {
  const { id } = params;

  return useSuspenseQuery({
    queryKey: ['pictureInfo', id],
    queryFn: () => getPictureInfo({ id }),
  });
};

export default usePictureInfo;
