import { icon } from "../utils/assets";

function LogoHeader() {
  return (
    <div className="top-[91px] absolute  w-full  flex items-center justify-center">
      <img alt="logo" width={291} height={90} src={icon("logo")} />
    </div>
  );
}

export default LogoHeader;
