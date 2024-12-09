import { request } from "@/utils/axios";
import Button from "../components/Button";
import userStore from "../store/userStore";
import { icon } from "../utils/assets";
import { cn } from "../utils/cn";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Print = () => {
  const { user } = userStore((state) => state);
  const images = userStore.getState().images;
  const numIcons = [icon("one"), icon("two"), icon("three")];
  const navigate = useNavigate();

  const sendImage = async (image: Blob | string) => {
    try {
      const userDat = {
        action: "save_image",
        qrcode: user?.qrcode,
        image: image,
      };
      const response = await request.post(
        "/fruit-land/fruit_land_api/pic_a_pic/save_image_picapic.php",
        userDat
      );
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    for (const image of images) {
      sendImage(image);
    }
  }, [images]);

  return (
    <div className="flex flex-col items-center h-screen w-full space-y-16 justify-center">
      <p className="font-[400] text-xl text-primary">Choose & Print</p>
      <div
        className={cn(
          "min-h-[1016px] flex items-start justify-center gap-[50px] w-[868px]",
          {
            "flex-wrap": images.length === 3,
          }
        )}
      >
        {images &&
          images.length > 0 &&
          images.map((url, index) => (
            <div className="flex flex-col px-6 items-center gap-8" key={url}>
              <img key={url} src={numIcons[index]} alt="numbers" />
              <img
                src={url}
                key={url}
                width={360}
                height={380}
                alt={`Captured ${index + 1}`}
                className="w-[360px] h-[380px] rounded-[40px] border-[4px] border-primary"
              />
            </div>
          ))}
      </div>
      <div className="flex gap-[58px] pt-14">
        <Button
          text="Get Online"
          className="w-[389px]"
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
            userStore.getState().clearImages();
          }}
        />
        <Button
          text="Print"
          className="w-[389px]"
          onClick={(e) => {
            e.preventDefault();
            navigate("/desk");
            userStore.getState().clearImages();
          }}
        />
      </div>
    </div>
  );
};

export default Print;
