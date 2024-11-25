import themeStore from "../store/themeStore";
import { background } from "../utils/assets";

const FilterBg = () => {
  const theme = themeStore((state) => state.theme);

  return (
    <img
      className="absolute"
      alt=""
      width={0}
      height={0}
      src={background(theme)}
    />
  );
};

export default FilterBg;
