// hooks/useImageLoader.ts
import { useState, useEffect } from "react";

export const useImageLoader = (imageCount: number) => {
  const [loadedImages, setLoadedImages] = useState<number>(0);
  const [isAllLoaded, setIsAllLoaded] = useState<boolean>(false);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedImages >= imageCount) {
      setIsAllLoaded(true);
    }
  }, [loadedImages, imageCount]);

  return { isAllLoaded, handleImageLoad };
};
