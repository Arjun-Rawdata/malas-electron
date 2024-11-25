import Button from "../components/Button";
import Input from "../components/Input";
import RegisterTheme from "../components/RegisterTheme";
import { useNavigate } from "react-router-dom";
import userStore from "../store/userStore";

const Register = () => {
  const navigate = useNavigate();
  const { user } = userStore((state) => state);

  return (
    <div>
      <RegisterTheme />
      <div className="flex flex-col h-screen relative items-center justify-center">
        <div className="h-[1440px] w-[800px] px-6 rounded-[50px] shadow-light relative z-10 bg-[#FFF7E6]">
          <div className="pt-[193px]">
            <p className="text-lg font-[400] text-center text-primary pb-[141px]">
              You can get your selfies on the below mail/Mobile no.
            </p>
            <div className="space-y-[89px]">
              <Input placeholder={user?.mob || ""} label="Mobile no" />
              <Input placeholder={user?.email || ""} label="Email ID" />
            </div>
          </div>
          <div className="w-full grid place-items-center absolute -bottom-14 z-10 space-y-[42px]">
            <p className="text-center font-[400] text-[40px] text-primary">
              Kindly visit the Registration desk if you want to edit the mobile
              no./Mail ID
            </p>
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

export default Register;
