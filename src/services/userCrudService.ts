import { userCrudApi } from "@/api/userCrudApi";
import themeStore from "@/store/themeStore";
import userStore from "@/store/userStore";
import React from "react";
import { useNavigate } from "react-router-dom";
function useUserCrudService() {
  const { setTheme } = themeStore((state) => state);
  const { setUser } = userStore((state) => state);

  const getUserDetails = () => {
    const getUser = async (qrCode: number,scannerId:number) => {
      if (!qrCode) {
        return;
      }

      try {
        const data = await userCrudApi("post", qrCode, scannerId);
        console.log(data);

        // const userDat = data?.data?.[0];
        // if (!fruits.includes(userDat?.fruit)) {
        //   setIsScanError();
        //   return;
        // }
        // setUser({ ...userDat, qrcode: qrCode });
        // setTheme(userDat?.fruit);
        // console.log("userDat", userDat);
        // navigate("/measures");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    };
  };

  return { getUserDetails };
}

export default useUserCrudService;
