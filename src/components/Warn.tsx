import { icon } from "../utils/assets";

type warningProps = {
  warningTitle?: string;
  warningSubTitle?: string;
};

const Warn = (props: warningProps) => {
  return (
    <div className="h-screen w-full flex absolute z-50 top-0 bg-primary-white items-center justify-center">
      <div className=" space-y-20 text-center grid place-items-center text-primary">
        <img alt="" src={icon("warnIcon")} height={369} width={369} />

        <div className="space-y-[39px] grid place-items-center">
          <p className="font-[400] text-[#CC0000] text-lg">
            {props.warningTitle}
          </p>
          {props.warningSubTitle && (
            <p className="text-lg w-[545px] leading-tight">
              {props.warningSubTitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Warn;
