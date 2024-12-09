import CamView from "../components/CamView";
import CaptureBtn from "../components/CaptureBtn";
import CountDown from "../components/CountDown";
import FilterBg from "../components/FilterBg";
import FilterBtn from "../components/FilterBtn";
import FilterButtonBg from "../components/FilterButtonBg";
import ThumbsUp from "../components/ThumbsUp";
import Warn from "../components/Warn";
import baseStore from "../store/baseStore";

const Page = () => {
  const { isCountDown, isThumbActive, isWarningActive } = baseStore(
    (state) => state
  );

  return (
    <div className="h-screen overflow-hidden relative">
      {isWarningActive && (
        <Warn
          warningTitle="We See more than 1 face!"
          warningSubTitle="We request you to stand individually"
        />
      )}
      <FilterBg />
      <div className="relative z-10">
        {isThumbActive && <ThumbsUp />}
        {isCountDown && <CountDown />}
        {!isThumbActive && (
          <div className="w-full h-full  flex pt-[250px] px-[98px] justify-center">
            <CamView />
          </div>
        )}
      </div>
      <FilterButtonBg />
      <FilterBtn />
      <CaptureBtn />
    </div>
  );
};

export default Page;
