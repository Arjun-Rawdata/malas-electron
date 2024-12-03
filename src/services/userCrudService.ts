import { userCrudApi } from "@/api/userCrudApi";
import baseStore from "@/store/baseStore";
import themeStore from "@/store/themeStore";
import userStore from "@/store/userStore";
import { crudApiResponse } from "@/utils/types";
// import { useNavigate } from "react-router-dom";

function useUserCrudService() {
  const { setTheme } = themeStore((state) => state);
  const { setUser } = userStore((state) => state);
  const setIsWarningActive = baseStore((state) => state.setIsWarningActive);

  const fruits = ["kiwi", "strawberry", "mango", "orange"];
  const getUserDetails = async (qrCode: string, scannerId: string) => {
    // const navigate = useNavigate();

    if (qrCode == null) {
      console.log("no qr code");

      return;
    }

    try {
      const data = (await userCrudApi(
        "post",
        qrCode,
        scannerId
      )) as crudApiResponse;
      const userData = data.data;
      console.log("user data >", data);

      if (!fruits.includes(userData?.fruit)) {
        setIsWarningActive(true);
        return;
      }
      // setUser({ ...userData, qrcode: qrCode });
      // setTheme(userData?.fruit);
      console.log("userData", userData);
      // navigate("/measures");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return { getUserDetails };
}

export default useUserCrudService;
