import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import baseStore from "../store/baseStore";

const CountDown = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);
  const setIsCountDown = baseStore((state) => state.setIsCountDown);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          setIsCountDown(false);
          navigate("/preview");
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [navigate, setIsCountDown]);

  return (
    <div className="pointer-events-none fixed z-[500] h-screen w-base bg-[#171717]/70 grid place-items-center">
      <p className="font-[700] text-[990.97px] text-white">{count}</p>
    </div>
  );
};

export default CountDown;
