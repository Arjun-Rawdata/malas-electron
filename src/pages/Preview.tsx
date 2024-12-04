import Button from "../components/Button";
import FruitTheme from "../components/FruitTheme";
import { fruitDesc } from "../constants/theme";
import themeStore from "../store/themeStore";
import userStore from "../store/userStore";
import { cn } from "../utils/cn";
import { FruitColorMap } from "../utils/types";
import { useNavigate } from "react-router-dom";

const Preview = () => {
  const theme = themeStore((state) => state.theme);
  const images = userStore((state) => state.images);
  const navigate = useNavigate();

  const fruitColor: FruitColorMap = {
    strawberry: "text-semantic-red",
    orange: "text-semantic-orange",
    mango: "text-semantic-yellow",
    kiwi: "text-semantic-green",
  };

  const handleNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    if (images.length > 2) {
      navigate("/print");
      return;
    }
    navigate("/chances");
  };

  return (
    <>
      <FruitTheme
        page="preview"
        fruit={theme}
        reverse={theme === "strawberry"}
      />
      <div className="w-full h-screen font-[400] text-lg flex flex-col gap-28 items-center justify-center">
        <div className="w-9/12 text-pretty text-center text-primary">
          {fruitDesc[theme]}
          <span className={cn("capitalize", fruitColor[theme])}> {theme}</span>
        </div>
        <div className="h-[925px] w-[872px] border-[4px] border-primary rounded-[64px]">
          {!!images.length && (
            <img
              src={images.at(-1) ?? ""}
              alt="Image preview"
              className="rounded-[64px] w-full h-full"
            />
          )}
        </div>
        <Button text="Save" onClick={handleNavigation} />
      </div>
    </>
  );
};

export default Preview;
