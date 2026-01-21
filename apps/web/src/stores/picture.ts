import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { PictureInfo } from '@/models/picture';

interface PictureStore {
  info: PictureInfo | null;
  set: (info: PictureInfo) => void;
  update: (info: Partial<PictureInfo>) => void;
  remove: () => void;
}

export const usePictureStore = create<PictureStore>()(
  persist(
    set => ({
      info: null,
      set: info => set({ info }),
      update: info =>
        set(state => ({
          info: state.info ? ({ ...state.info, ...info } as PictureInfo) : null,
        })),
      remove: () => set({ info: null }),
    }),
    {
      name: 'picture-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
