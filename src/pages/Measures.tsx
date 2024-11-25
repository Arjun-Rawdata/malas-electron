import Button from "../components/Button";
import themeStore from "../store/themeStore";
import { cn } from "../utils/cn";
import FruitTheme from "../components/FruitTheme";
import { fruitNames } from "../constants/theme";
import { FruitColorMap } from "../utils/types";
import { Link } from "react-router-dom";

const Measures = () => {
  const theme = themeStore((state) => state.theme);

  const fruitColor: FruitColorMap = {
    strawberry: "text-semantic-red",
    orange: "text-semantic-orange",
    mango: "text-semantic-yellow",
    kiwi: "text-semantic-green",
  };

  return (
    <>
      <FruitTheme
        page="weight"
        fruit={theme}
        reverse={theme === "strawberry"}
      />
      <div className="h-screen w-full relative z-10 flex flex-col items-center gap-16 justify-center">
        <div className="leading-[128px] flex flex-col w-8/12 items-start">
          <p className="text-primary/80 text-xl italic font-[400]">
            You weigh,
          </p>
          <div className="relative left-28">
            <p
              className={cn(
                "font-notoSerif font-[700] text-3xl italic",
                fruitColor[theme]
              )}
            >
              3000
            </p>
            <p className="font-notoSerif font-[800] italic text-xl text-primary/80">
              {fruitNames[theme]}
            </p>
          </div>
        </div>
        <Link to="/filters">
          <Button arrow={true} text="Let’s snap" />
        </Link>
      </div>
    </>
  );
};

export default Measures;
