import { icon } from "../utils/assets";
import baseStore from "../store/baseStore";
import useCamCapture from "../services/camCapture";

const CaptureBtn = () => {
  const { captureImage } = useCamCapture();
  const { canvasRef, videoRef } = baseStore((state) => state);

  const capture = () => {
    if (canvasRef && videoRef) {
      captureImage(canvasRef, videoRef);
    }
  };

  return (
    <div className="w-full grid place-items-center absolute bottom-12">
      <button onClick={capture}>
        <img src={icon("filterCam")} alt="logo" height={86} width={86} />
      </button>
    </div>
  );
};

export default CaptureBtn;
