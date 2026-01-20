import { GetPictureInfoResponse } from '@/services/picture';
import { ValueLabel } from '@/types';
import { commaize } from '@/utils/format';

export interface PictureInfo {
  id: string;
  author: string;
  size: {
    width: ValueLabel<number>;
    height: ValueLabel<number>;
  };
  urls: {
    raw: string;
    download: string;
  };
}

export const preprocessPictureInfo = (init: GetPictureInfoResponse): PictureInfo => {
  return {
    id: init.id,
    author: init.author,
    size: {
      width: {
        value: init.width,
        label: `${commaize(init.width)}`,
      },
      height: {
        value: init.height,
        label: `${commaize(init.height)}`,
      },
    },
    urls: {
      raw: init.url,
      download: init.download_url,
    },
  };
};
