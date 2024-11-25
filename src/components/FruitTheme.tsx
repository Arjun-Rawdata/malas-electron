import baseStore from "../store/baseStore";
import { fruits, previewFruits } from "../utils/assets";
import { cn } from "../utils/cn";
import { useEffect } from "react";
import PageLoading from "./PageLoading";
import { useImageLoader } from "../hooks/useImageloader";

interface FruitThemeProps {
  page?: string;
  fruit: string;
  reverse?: boolean;
}

const FruitTheme = ({
  page = "weight",
  fruit,
  reverse = false,
}: FruitThemeProps) => {
  const { isAllLoaded, handleImageLoad } = useImageLoader(2);
  const { isImageLoaded, setIsImageLoaded } = baseStore((state) => state);

  useEffect(() => {
    setIsImageLoaded(isAllLoaded);
  }, [isAllLoaded, setIsImageLoaded]);

  return (
    <>
      <img
        className={cn("absolute top-0 right-0", {
          "top-0 left-0": reverse,
        })}
        src={page === "weight" ? fruits(fruit) : previewFruits(fruit)}
        alt={fruit}
        onLoad={handleImageLoad}
      />
      <img
        className={cn("absolute bottom-0", {
          "right-0 bottom-0": reverse,
        })}
        src={
          page === "weight"
            ? fruits(`${fruit}Leaf`)
            : previewFruits(`${fruit}Leaf`)
        }
        onLoad={handleImageLoad}
        alt={fruit}
      />
      {!isImageLoaded && <PageLoading />}
    </>
  );
};

export default FruitTheme;
