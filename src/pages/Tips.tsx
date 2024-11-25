import ArrowBtn from "../components/ArrowBtn";
import InfoCard from "../components/InfoCard";
import LogoHeader from "../components/LogoHeader";
import { icon } from "../utils/assets";
import { Link } from "react-router-dom";

const Tips = () => {
  const info = [
    {
      text: (
        <p>
          Only 3 chances <br /> to click a <br /> selfie in one filter.
        </p>
      ),
      icon: "camLight",
    },
    {
      text: (
        <p>
          Send it on your registered <br /> Mobile no./Email.
        </p>
      ),
      icon: "sendLight",
    },
    {
      text: <p>Get a print at the registration desk.</p>,
      icon: "printIcon",
    },
  ];

  return (
    <div className="h-full overflow-hidden relative">
      <div className="logo-wrapper">
        <LogoHeader />
      </div>

      <div className="h-full flex flex-col items-center justify-center">
        <div className="pt-60 flex flex-col items-center space-y-14">
          <div className="flex flex-wrap items-center justify-center gap-x-[80px] gap-y-[40px]">
            {info.map((item, index) => (
              <InfoCard
                index={index + 1}
                image={icon(item.icon)}
                text={item.text}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="w-full absolute right-0 bottom-2 flex justify-end p-10">
          <Link to="/scanner">
            <ArrowBtn />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tips;
