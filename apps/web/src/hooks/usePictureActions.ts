import { useMutation } from '@tanstack/react-query';

import { getPictureInfo as getPictureInfoService,GetPictureInfoParams } from '@/services/picture';

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
