import { useImageLoader } from "../hooks/useImageloader";
import themeStore from "../store/themeStore";
import { regFruits } from "../utils/assets";
import PageLoading from "./PageLoading";

const RegisterTheme = () => {
  const theme = themeStore((state) => state.theme);
  const { isAllLoaded, handleImageLoad } = useImageLoader(
    theme === "strawberry" ? 1 : 2
  );

  const getTheme = (fruit: string) => {
    switch (fruit) {
      case "strawberry":
        return (
          <>
            <img
              className="absolute"
              src={regFruits("strawberry")}
              alt={theme}
              onLoad={handleImageLoad}
            />
          </>
        );
      case "mango":
        return (
          <>
            <img
              className="top-[172px] absolute left-0"
              src={regFruits("mango")}
              alt={theme}
              onLoad={handleImageLoad}
            />
            <img
              className="bottom-0 absolute right-0"
              src={regFruits("mangoTree")}
              alt={theme}
              onLoad={handleImageLoad}
            />
          </>
        );
      case "kiwi":
        return (
          <>
            <img
              className="absolute right-0 top-0"
              src={regFruits("kiwi")}
              alt={theme}
              onLoad={handleImageLoad}
            />
            <img
              className="absolute left-0 top-[1129px]"
              src={regFruits("kiwiSlice")}
              alt={theme}
              onLoad={handleImageLoad}
            />
          </>
        );
      case "orange":
        return (
          <>
            <img
              className="absolute right-0 top-0"
              src={regFruits("orange")}
              alt={theme}
              onLoad={handleImageLoad}
            />
            <img
              className="absolute left-0 top-[517px]"
              src={regFruits("orangePeel")}
              alt={theme}
              onLoad={handleImageLoad}
            />
          </>
        );
      default:
        return <div></div>;
    }
  };

  return (
    <div>
      {getTheme(theme)}
      {!isAllLoaded && <PageLoading />}
    </div>
  );
};

export default RegisterTheme;
