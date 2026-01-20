import { GetPictureInfoParams, getPictureInfo as getPictureInfoService } from '@/services/picture';
import { useMutation } from '@tanstack/react-query';

const usePictureActions = () => {
  const { mutateAsync: getPictureInfo, isPending: isGettingPictureInfo } = useMutation({
    mutationFn: ({ id }: GetPictureInfoParams) => getPictureInfoService({ id }),
  });

  return {
    getPictureInfo,
    isGettingPictureInfo,
  };
};

export default usePictureActions;
