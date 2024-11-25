import { create } from "zustand";
import { RefObject } from "react";

interface BaseStore {
  isCountDown: boolean;
  isThumbActive: boolean;
  isImageLoaded: boolean;
  isWarningActive: boolean;
  setIsCountDown: (isCountDown: boolean) => void;
  setIsThumbActive: (isThumbActive: boolean) => void;
  setIsImageLoaded: (isImageLoaded: boolean) => void;
  setIsWarningActive: (isWarningActive: boolean) => void;
  videoRef: RefObject<HTMLVideoElement> | null;
  canvasRef: RefObject<HTMLCanvasElement> | null;
  setVideoRef: (ref: RefObject<HTMLVideoElement>) => void;
  setCanvasRef: (ref: RefObject<HTMLCanvasElement>) => void;
}

const baseStore = create<BaseStore>((set) => ({
  videoRef: null,
  canvasRef: null,
  isCountDown: false,
  isThumbActive: true, // true
  isImageLoaded: false,
  isWarningActive: false,

  setVideoRef: (ref) => set(() => ({ videoRef: ref })),
  setCanvasRef: (ref) => set(() => ({ canvasRef: ref })),
  setIsCountDown: (isCountDown: boolean) => set({ isCountDown }),
  setIsThumbActive: (isThumbActive: boolean) => set({ isThumbActive }),
  setIsImageLoaded: (isImageLoaded: boolean) => set({ isImageLoaded }),
  setIsWarningActive: (isWarningActive: boolean) => set({ isWarningActive }),
}));

export default baseStore;
