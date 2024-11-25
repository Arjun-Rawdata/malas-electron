import baseStore from "../store/baseStore";
import useCamCapture from "./camCapture";
import {
  FilesetResolver,
  FaceDetector,
  GestureRecognizer,
} from "@mediapipe/tasks-vision";
import { useEffect, useRef, useState } from "react";
import { CanvasRefType, VideoRefType } from "../utils/types";

function useDetectionService() {
  const { captureImage } = useCamCapture();
  const issWarningActive = baseStore((state) => state.isWarningActive);

  const isWarningActiveRef = useRef(false);
  const visionRef = useRef<any>(null);
  const recognizerRef = useRef<GestureRecognizer | null>(null);

  const [isFaceDetected, setIsFaceDetected] = useState(false);
  const [isThumbUpDetected, setIsThumbUpDetected] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const setRef = (newVideoRef: VideoRefType, newCanvasRef: CanvasRefType) => {
    videoRef.current = newVideoRef.current;
    canvasRef.current = newCanvasRef.current;
  };

  useEffect(() => {
    const initializeVision = async () => {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
      );
      visionRef.current = vision;
    };
    isWarningActiveRef.current = issWarningActive;
    initializeVision();

    return () => {
      visionRef.current = null;
      recognizerRef.current = null;
    };
  }, []);

  const faceDetector = async (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (!visionRef.current) return;
    let lastVideoTime = -1;
    const detector = await FaceDetector.createFromOptions(visionRef.current, {
      baseOptions: {
        modelAssetPath:
          "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite",
      },
      runningMode: "VIDEO",
    });

    if (videoRef) {
      const checkFaceCount = async () => {
        const video = videoRef.current;
        if (video && detector && video.currentTime !== lastVideoTime) {
          const currentTime = video.currentTime;
          const detectedFaces = detector.detectForVideo(
            video,
            currentTime * 1000
          );

          if (
            detectedFaces &&
            detectedFaces.detections &&
            detectedFaces.detections.length > 1
          ) {
            if (detectedFaces.detections[1].categories[0].score > 0.8) {
              console.log("Multiple faces detected:", detectedFaces.detections);
              setIsFaceDetected(false);
              setIsThumbUpDetected(false);
            }
          } else if (detectedFaces.detections.length == 1) {
            if (detectedFaces.detections[0].categories[0].score > 0.8) {
              setIsFaceDetected(true);
            }
          } else {
            setIsFaceDetected(false);
            setIsThumbUpDetected(false);
            console.log("no face detected");
          }

          lastVideoTime = currentTime;
        }
      };

      const intervalId = setInterval(checkFaceCount, 1000);

      return intervalId;
    }
  };

  const gestureDetector = async (
    videoRef: React.RefObject<HTMLVideoElement>
  ) => {
    if (!recognizerRef.current) {
      recognizerRef.current = await GestureRecognizer.createFromOptions(
        visionRef.current,
        {
          baseOptions: {
            modelAssetPath:
              "https://storage.googleapis.com/mediapipe-tasks/gesture_recognizer/gesture_recognizer.task",
          },
          numHands: 2,
        }
      );
    }

    recognizerRef.current.setOptions({ runningMode: "VIDEO" });

    if (videoRef) {
      const checkHandPose = () => {
        const video = videoRef.current;
        let lastTimestamp = 0;

        function assignTimestamp() {
          const currentTimestamp = performance.now();
          if (currentTimestamp <= lastTimestamp) {
            lastTimestamp += 1;
          } else {
            lastTimestamp = currentTimestamp;
          }
          return lastTimestamp;
        }

        const timestamp = assignTimestamp();

        if (video && recognizerRef.current) {
          const result = recognizerRef.current.recognizeForVideo(
            video,
            timestamp
          );

          if (result && result.gestures) {
            result.gestures.forEach((gestureArray) => {
              gestureArray.forEach((gesture) => {
                if (gesture.categoryName === "Thumb_Up") {
                  console.log("Thumbs up detected!");

                  setIsThumbUpDetected(true);
                } else {
                  setIsThumbUpDetected(false);
                }
              });
            });
          } else {
            setIsThumbUpDetected(false);
          }
        }
      };
      const intervalId = setInterval(checkHandPose, 1500);

      return intervalId;
    }
  };

  useEffect(() => {
    if (isFaceDetected && isThumbUpDetected) {
      console.log("capturing...");
      captureImage(canvasRef, videoRef);
      setIsThumbUpDetected(false);
      setIsFaceDetected(false);
    }
  }, [isFaceDetected, isThumbUpDetected, captureImage]);

  return { faceDetector, gestureDetector, setRef };
}

export default useDetectionService;
