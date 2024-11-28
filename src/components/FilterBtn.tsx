import { filterIcons } from "../utils/assets";
import { useImageLoader } from "../hooks/useImageloader";
import themeStore from "../store/themeStore";
import { cn } from "../utils/cn";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FilterButton {
  image: string;
  key: number;
}

type Buttons = {
  [key: string]: FilterButton[];
};

type BtnColor = {
  [key: string]: string;
};

export default function FillAnimate() {
  const theme = themeStore((state) => state.theme) as keyof Buttons;
  const { isAllLoaded, handleImageLoad } = useImageLoader(2);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [buttons, setButtons] = useState<Buttons>({
    strawberry: [
      {
        image: "strawRingCrown",
        key: 1,
      },
      {
        image: "strawCrown",
        key: 2,
      },
      {
        image: "strawGlasses",
        key: 3,
      },
      {
        image: "strawRingCrown",
        key: 4,
      },
    ],
    mango: [
      {
        image: "mangoFace",
        key: 1,
      },
      {
        image: "mangoHat",
        key: 2,
      },
      {
        image: "mangoCrown",
        key: 3,
      },
      {
        image: "mangoFace",
        key: 4,
      },
    ],
    kiwi: [
      {
        image: "kiwiGlasses",
        key: 1,
      },
      {
        image: "kiwiFace",
        key: 2,
      },
      {
        image: "kiwiCrown",
        key: 3,
      },
      {
        image: "kiwiGlasses",
        key: 4,
      },
    ],
    orange: [
      {
        image: "orangeGlasses",
        key: 1,
      },
      {
        image: "orangeCrown",
        key: 2,
      },
      {
        image: "orangeRingCrown",
        key: 3,
      },
      {
        image: "orangeGlasses",
        key: 4,
      },
    ],
  });

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
  const [action, setAction] = useState(0);

  const elements = [
    {
      x: 500,
      y: 0,
    },
    {
      x: 0,
      y: 500,
    },
    {
      x: -500,
      y: 0,
    },
    {
      x: 0,
      y: -500,
    },
  ];

  const elementsAlt = [
    {
      x: 220,
      y: 0,
    },
    {
      x: 0,
      y: 220,
    },
    {
      x: -220,
      y: 0,
    },
    {
      x: 0,
      y: -220,
    },
  ];

  const handleRotate = () => {
    setAction((prev) => prev + 90);
    setButtons((prev) => {
      const updated = { ...prev };

      Object.keys(updated).forEach((theme) => {
        updated[theme] = updated[theme].map((item, index) => {
          return {
            ...item,
            key: item.key == 4 ? 1 : item.key + 1,
          };
        });
      });

      return updated;
    });
  };

  const handleRotateRev = () => {
    setAction((prev) => prev - 90);
    setButtons((prev) => {
      const updated = { ...prev };

      Object.keys(updated).forEach((theme) => {
        updated[theme] = updated[theme].map((item, index) => {
          return {
            ...item,
            key: item.key == 1 ? 4 : item.key - 1,
          };
        });
      });

      return updated;
    });
  };

  return (
    <div className="flex w-[1320px] -left-[123px] absolute top-[1714px] justify-between items-center">
      <div className="h-full w-full grid place-items-center">
        <motion.div
          animate={{ rotate: action }}
          transition={{ duration: 0.7 }}
          className="parent relative grid place-items-center"
        >
          {buttons[theme].map((filterBtn, index) => (
            <motion.div
              key={index}
              className={cn(
                "grid absolute place-items-center place-self-center rounded-full w-[303.68px] h-[303.68px] shadow-filter-btn",
                filterBtn.key === 4 && borderColor[theme],
                { "w-[289.68px] h-[289.68px]": filterBtn.key !== 4 },
                { "w-[400px] h-[400px]": index === 4 },
                { "scale-[0.95]": index !== 4 }
              )}
              animate={{
                rotate: -action,
                translateX:
                  filterBtn.key == 4 ? elementsAlt[index].x : elements[index].x,
                translateY:
                  filterBtn.key == 4 ? elementsAlt[index].y : elements[index].y,
                scale: filterBtn.key == 4 ? 1.2 : 0.95,
                transitionEnd: {
                  scale: filterBtn.key == 4 ? 1.2 : 0.95,
                },
              }}
              transition={{
                duration: 0.7,
                boxShadow: { duration: 0 },
                scale: { duration: filterBtn.key == 4 ? 1 : 0.3, delay: 0.2 },
              }}
              onClick={() => {
                console.log("filterBtn.key", index);
              }}
            >
              <motion.div
                className={cn(
                  "w-[289.68px] h-[289.68px] rounded-full grid place-items-center",
                  btnColor[theme]
                )}
              >
                <img
                  src={filterIcons(filterBtn.image)}
                  alt="logo"
                  onLoad={handleImageLoad}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          style={{ translateX: elements[0].x }}
          className="w-[289.68px] h-[289.68px] rounded-full absolute bg-green-300 opacity-0"
          onClick={handleRotateRev}
        ></motion.div>
        <motion.div
          style={{ translateX: elements[2].x }}
          className="w-[289.68px] h-[289.68px] rounded-full absolute bg-green-300 opacity-0"
          onClick={handleRotate}
        ></motion.div>
      </div>
    </div>
  );
}
