import themeStore from "../store/themeStore";
import { filterIcons } from "../utils/assets";
import { cn } from "../utils/cn";
import { useEffect, useState } from "react";
import { useImageLoader } from "../hooks/useImageloader";
import PageLoading from "./PageLoading";

interface FilterButton {
  image: string;
}

type Buttons = {
  [key: string]: FilterButton[];
};

type BtnColor = {
  [key: string]: string;
};

function FilterBtn() {
  const theme = themeStore((state) => state.theme) as keyof Buttons;
  const { isAllLoaded, handleImageLoad } = useImageLoader(2);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const buttons: Buttons = {
    strawberry: [
      {
        image: "strawRingCrown",
      },
      {
        image: "strawCrown",
      },
      {
        image: "strawGlasses",
      },
    ],
    mango: [
      {
        image: "mangoFace",
      },
      {
        image: "mangoHat",
      },
      {
        image: "mangoCrown",
      },
    ],
    kiwi: [
      {
        image: "kiwiGlasses",
      },
      {
        image: "kiwiFace",
      },
      {
        image: "kiwiCrown",
      },
    ],
    orange: [
      {
        image: "orangeGlasses",
      },
      {
        image: "orangeCrown",
      },
      {
        image: "orangeRingCrown",
      },
    ],
  };

  const btnColor: BtnColor = {
    strawberry: "bg-strawberry-btn",
    mango: "bg-mango-btn",
    kiwi: "bg-kiwi-btn",
    orange: "bg-orange-btn",
  };
  const borderColor: BtnColor = {
    strawberry: "bg-straw-border",
    mango: "bg-mango-border",
    kiwi: "bg-kiwi-border",
    orange: "bg-orange-border",
  };

  const handleSwitch = () => {
    const firstOne = buttons[theme]?.[0];
    buttons[theme].splice(1).push(firstOne);
    console.log(buttons[theme]);
  };

  useEffect(() => {
    setIsImageLoaded(isAllLoaded);
  }, [isAllLoaded, setIsImageLoaded]);

  return (
    <>
      <div className="flex w-[1320px] -left-[123px] absolute top-[1314px] justify-between items-center">
        {buttons[theme]?.map((filterBtn, index) => (
          <button key={filterBtn?.image} onClick={() => handleSwitch()}>
            <div
              className={cn(
                "grid place-items-center rounded-full w-[303.68px] h-[303.68px] shadow-filter-btn transition-transform",
                borderColor[theme],
                {
                  "w-[414px] h-[414px] ": index === 1,
                  "translate-y-52": index !== 1,
                }
              )}
            >
              <div
                className={cn(
                  "w-[289.68px] h-[289.68px] rounded-full grid place-items-center",
                  btnColor[theme],
                  { "w-[400px] h-[400px]": index === 1 }
                )}
              >
                <img
                  key={filterBtn.image}
                  src={filterIcons(filterBtn.image)}
                  alt="logo"
                  onLoad={handleImageLoad}
                />
              </div>
            </div>
          </button>
        ))}
      </div>
      {!isImageLoaded && <PageLoading />}
    </>
  );
}

export default FilterBtn;
