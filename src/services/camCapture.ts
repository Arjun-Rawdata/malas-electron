import baseStore from "../store/baseStore";  
import userStore from "../store/userStore";
import { useCallback } from "react";
import { useCameraKit } from "../hooks/useCameraKit";
import { createMediaStreamSource, Transform2D } from "@snap/camera-kit";

function useCamCapture() {
  const { session, lenses } = useCameraKit();
  const addImage = userStore((state) => state.addImage);
  const setIsCountDown = baseStore((state) => state.setIsCountDown);
  const isWarningActive = baseStore((state) => state.isWarningActive);

  const startCameraKit = useCallback(async () => {
    if (window.navigator != null) {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      const source = createMediaStreamSource(mediaStream, {
        transform: Transform2D.MirrorX,
      });

      if (session) {
        session.output.live.className =
          "border w-[899px] h-[947px] object-cover rounded-custom-x-large shadow-md mb-4   n";
        session.setSource(source);
        if (lenses && lenses.length > 0) {
          console.log("lenses in comp>>", lenses);

          session.applyLens(lenses[0]);
        }

        session.play("live");
      }
    }
  }, [session, lenses]);

  const startCamera = async (canvasRef: React.RefObject<HTMLCanvasElement>) => {
    try {
      await startCameraKit();
      if (session) {
        const liveVideo = session.output.live;

        canvasRef.current?.replaceWith(liveVideo);
        return liveVideo.captureStream();
      }
    } catch (error) {}
  };

  const captureImage = useCallback(
    (
      canvasRef: React.RefObject<HTMLCanvasElement>,
      videoRef: React.RefObject<HTMLVideoElement>
    ) => {
      if (canvasRef.current && videoRef.current) {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        const context = canvas.getContext("2d");
        if (context) {
          const aspectRatio = video.videoWidth / video.videoHeight;
          const targetHeight = canvasRef.current.width / aspectRatio;

          canvas.height = targetHeight;

          if (!isWarningActive) {
            if (!baseStore.getState().isCountDown) {
              setIsCountDown(true);
            }
            setTimeout(() => {
              context.drawImage(
                video as CanvasImageSource,
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
      }
    },
    [isWarningActive, setIsCountDown, addImage]
  );

  return { startCamera, captureImage };
}

export default useCamCapture;
