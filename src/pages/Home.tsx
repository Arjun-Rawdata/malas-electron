import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import baseStore from "../store/baseStore";
import { homeFruits, icon } from "../utils/assets";

const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
   
  }, []);

  return (
    <div className="relative h-full w-full">
      <div className="fruits-group absolute h-full w-full">
        <img
          className="absolute top-0 left-0"
          src={homeFruits("fruitsLeft")}
          alt="fruits"
        />
        <img
          className="absolute top-0 right-0"
          src={homeFruits("fruitsRight")}
          alt="fruits"
        />
      </div>
      <div className="item-group relative z-10 flex flex-col items-center justify-center gap-16 h-full w-full">
        <img src={icon("logo")} alt="logo" />
        <h1 className="text-2xl tracking-wide font-notoSerif italic font-[700]">
          Pick-a-pic
        </h1>
        <Button
          className="w-[568px]"
          text="Let’s Start"
          lightMode={true}
          onClick={() => navigate("/tips")}
        />
        <div>
          <ul className="flex gap-5">
            <li className="flex items-center justify-center p-2 gap-5">
              <img src={icon("camDark")} alt="logo" />
              <p>Scan</p>
              <span className="h-[30px] w-[2px] bg-black"></span>
            </li>
            <li className="flex items-center justify-center p-2 gap-5">
              <img src={icon("tick")} alt="logo" />
              <p>Snap</p>
              <span className="h-[30px] w-[2px] bg-black"></span>
            </li>
            <li className="flex items-center justify-center p-2 gap-5">
              <img src={icon("sendDark")} alt="logo" />
              <p>Share</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
