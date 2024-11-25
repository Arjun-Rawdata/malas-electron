import themeStore from "../store/themeStore";

const FilterButtonBg = () => {
  const theme = themeStore((state) => state.theme);

  const background = () => {
    switch (theme) {
      case "strawberry":
        return (
          <div className="bg-[#D77B7B] absolute h-[1416px] w-[1416px] rounded-full top-[1502.48px] -left-[173.73px] shadow-strawberry-filter"></div>
        );

      case "mango":
        return (
          <div className="bg-[#FEBB47] absolute h-[1416px] w-[1416px] rounded-full top-[1502.48px] -left-[173.73px] shadow-fruit-filter"></div>
        );

      case "kiwi":
        return (
          <div className="bg-[#809C4A] absolute h-[1416px] w-[1416px] rounded-full top-[1502.48px] -left-[173.73px] shadow-fruit-filter opacity-50"></div>
        );

      case "orange":
        return (
          <div className="bg-[#F98829] absolute h-[1416px] w-[1416px] rounded-full top-[1502.48px] -left-[173.73px] shadow-fruit-filter opacity-50"></div>
        );

      default:
        return <p>Page Not Found</p>;
    }
  };
  return <div>{background()}</div>;
};

export default FilterButtonBg;
