import useCamCapture from "../services/camCapture";
import useDetectionService from "../services/detectionService";
import baseStore from "../store/baseStore";
import { icon } from "../utils/assets";
import { useEffect, useRef } from "react";

function CamView() {
  const { startCamera } = useCamCapture();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { setCanvasRef, setVideoRef } = baseStore((state) => state);
  const { faceDetector, gestureDetector, setRef } = useDetectionService();

  useEffect(() => {
    setCanvasRef(canvasRef);
    setVideoRef(videoRef);
    setRef(videoRef, canvasRef);
  }, [canvasRef, videoRef]);

  useEffect(() => {
    let faceIntervalId: NodeJS.Timeout | null = null;
    let gestureIntervalId: NodeJS.Timeout | null = null;

    startCamera(canvasRef).then((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream as MediaProvider;

        faceDetector(videoRef).then((intervalId) => {
          faceIntervalId = intervalId as NodeJS.Timeout;
        });
        gestureDetector(videoRef).then((intervalId) => {
          gestureIntervalId = intervalId as NodeJS.Timeout;
        });
      }
    });

    return () => {
      if (faceIntervalId) clearInterval(faceIntervalId);
      if (gestureIntervalId) clearInterval(gestureIntervalId);

      if (videoRef.current) {
        const stream = videoRef.current.srcObject as MediaStream;
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
        videoRef.current.srcObject = null;
      }
    };
  }, [faceDetector, gestureDetector, startCamera]);

  return (
    <div className="w-[899px] h-[947px] rounded-custom-x-large">
      <div className="image-viewer w-full h-full flex items-center justify-center rounded-custom-x-large relative">
        <video ref={videoRef} autoPlay className="hidden" />
        <canvas ref={canvasRef} style={{ display: "none" }} />
        <div></div>
        <div className="absolute px-[40px]">
          <img alt="" width={819} height={800} src={icon("focusIcon")} />
        </div>
      </div>
    </div>
  );
}

export default CamView;
