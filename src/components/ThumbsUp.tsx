import baseStore from "../store/baseStore";
import { icon } from "../utils/assets";

const ThumbsUp = () => {
  const { setIsThumbActive } = baseStore((state) => state);

  return (
    <div className="relative inset-0 bg-black/50 backdrop-blur-sm h-screen w-base flex items-center justify-center z-50">
      <div className=" h-full p-6 flex flex-col justify-center items-center  w-full">
        <button>
          <img
            className="absolute top-[61px] right-[45px]"
            onClick={() => {
              setIsThumbActive(false);
            }}
            src={icon("cross")}
            alt="icon"
            width={117}
            height={117}
          />
        </button>

        <div className="flex justify-center items-center">
          <img alt="" width={627} height={627} src={icon("thumbsUp")} />
        </div>
        <div className="max-w-[700px] text-primary-white text-[64px] text-center  ">
          <p className=" font-[400] ">
            Show thumbs up or click
            <span className=" inline-block ml-6">
              <img src={icon("camLight")} alt="icon" width={54} height={49} />
            </span>
            to get your picture.
          </p>
        </div>

        <button className="mt-8">
          <img
            onClick={() => {
              setIsThumbActive(false);
            }}
            src={icon("legArrow")}
            alt="icon"
            width={114}
            height={88}
          />
        </button>
      </div>
    </div>
  );
};

export default ThumbsUp;
