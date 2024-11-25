import Button from "../components/Button";
import userStore from "../store/userStore";
import { icon } from "../utils/assets";
import { cn } from "../utils/cn";
import { useNavigate } from "react-router-dom";

const Chances = () => {
  const images = userStore((state) => state.images);
  const numIcons = [icon("one"), icon("two"), icon("three")];
  const altText = ["2 chances", "1 chance"];
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center h-screen w-full space-y-16 justify-between pb-36 pt-[200px]">
      <div
        className={cn(
          "min-h-[1116px] flex items-start justify-center flex-wrap gap-[56px] w-[868px]"
        )}
      >
        {images &&
          images.length > 0 &&
          images.map((url, index) => (
            <div className="flex flex-col px-6 items-center gap-8" key={index}>
              <img src={numIcons[index]} alt="numbers" />
              <img
                src={url}
                width={300}
                height={300}
                alt={`Captured ${index + 1}`}
                className="w-[360px] h-[380px] rounded-[40px] border-[4px] border-primary"
              />
            </div>
          ))}
        <p className="font-[400] text-lg text-primary text-pretty text-center w-[772px]">
          You have {altText[images.length - 1]} left. Change the filter or keep
          using the same one.
        </p>
      </div>

      <div className="flex gap-[58px]">
        <Button
          text="No"
          className="w-[190px]"
          lightMode={false}
          onClick={(e) => {
            e.preventDefault();
            navigate("/print");
          }}
        />
        <Button
          text="Yes"
          className="w-[568px]"
          onClick={(e) => {
            e.preventDefault();
            navigate("/filters");
          }}
        />
      </div>
    </div>
  );
};

export default Chances;
