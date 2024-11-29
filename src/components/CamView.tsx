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
  const { faceDetector, gestureDetector ,setRef} = useDetectionService();

  useEffect(() => {
    setCanvasRef(canvasRef);
    setVideoRef(videoRef);

    setRef(videoRef,canvasRef)
  }, [canvasRef, videoRef]);

  useEffect(() => {
    let faceiIntervalId: null | NodeJS.Timeout = null;
    let gestureiIntervalId: null | NodeJS.Timeout = null;
    startCamera(canvasRef).then((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream as MediaProvider;

        faceDetector().then((intervalId) => {
          faceiIntervalId = intervalId as NodeJS.Timeout;
        });
        gestureDetector(videoRef).then((intervalId) => {
          gestureiIntervalId = intervalId as NodeJS.Timeout;
        });
      }
    });

    return () => {
      if (faceiIntervalId) {
        clearInterval(faceiIntervalId);
      }
      if (gestureiIntervalId) {
        clearInterval(gestureiIntervalId);
      }
    };
  }, []);

  return (
    <div className=" w-[899px] h-[947px] rounded-custom-x-large ">
      <div className="image-viewer  w-full h-full  flex items-center justify-center rounded-custom-x-large  relative">
        <video ref={videoRef} autoPlay className=" hidden" />
        <canvas ref={canvasRef} style={{ display: "none" }} />
        <div></div>
        <div className="absolute px-[40px] ">
          <img alt="" width={819} height={800} src={icon("focusIcon")} />
        </div>
      </div>
      {/* <div className="grid grid-cols-3 gap-4">
        {images &&
          images.length > 0 &&
          images.map((url, index) => (
            <Image
              key={index}
              src={url}
              width={300}
              height={300}
              alt={`Captured ${index + 1}`}
              className="w-full h-auto rounded shadow"
            />
          ))}
      </div> */}
    </div>
  );
}

export default CamView;
