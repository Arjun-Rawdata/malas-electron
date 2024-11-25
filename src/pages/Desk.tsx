import Button from "../components/Button";
import RegisterTheme from "../components/RegisterTheme";
import { useNavigate } from "react-router-dom";

const Desk = () => {
  const navigate = useNavigate();

  return (
    <div>
      <RegisterTheme />
      <div className="flex flex-col h-screen relative items-center justify-center">
        <div className="h-[1440px] w-[800px] grid place-items-center rounded-[50px] shadow-light relative z-10 bg-[#FFF7E6]">
          <p className="text-lg font-[400] text-center text-primary text-pretty">
            You can get prints of your selfies at the registration desk.
          </p>
          <div className="w-full grid place-items-center absolute -bottom-14 z-10 space-y-[42px]">
            <Button
              text="Done"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desk;
