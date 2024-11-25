import baseStore from "../store/baseStore";
import userStore from "../store/userStore";
import { useCallback } from "react";
import { useCameraKit } from "../hooks/useCameraKit";
import { createMediaStreamSource, Transform2D } from "@snap/camera-kit";

function useCamCapture() {
  const { session, lenses } = useCameraKit();
  const addImage = userStore((state) => state.addImage);
  const setIsCountDown = baseStore((state) => state.setIsCountDown);

  const startCameraKit = useCallback(async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });

    const source = createMediaStreamSource(mediaStream, {
      transform: Transform2D.MirrorX,
    });

    session.output.live.className =
      "border w-[899px] h-[947px] object-cover rounded-custom-x-large shadow-md mb-4 transform scale-x-[-1]";
    session.setSource(source);
    session.applyLens(lenses[0]);

    session.play("live");
  }, [session, lenses]);

  const startCamera = async (canvasRef: React.RefObject<HTMLCanvasElement>) => {
    try {
      await startCameraKit();
      const liveVideo = session.output.live;

      canvasRef.current?.replaceWith(liveVideo);
      return liveVideo.captureStream();
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const captureImage = (
    canvasRef: React.RefObject<HTMLCanvasElement>,
    videoRef: React.RefObject<HTMLVideoElement>
  ) => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (context && videoRef.current) {
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        setIsCountDown(true);
        setTimeout(() => {
          context.drawImage(
            videoRef.current as CanvasImageSource,
            0,
            0,
            canvas.width,
            canvas.height
          );
          const imageUrl = canvas.toDataURL("image/png");
          addImage(imageUrl);
        }, 5000);
      }
    }
  };

  return { startCamera, captureImage };
}

export default useCamCapture;
