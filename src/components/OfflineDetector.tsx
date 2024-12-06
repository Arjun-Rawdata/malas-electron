import { useState, useEffect } from "react";
import Warn from "./Warn";
import { useNavigate } from "react-router-dom";
import userStore from "../store/userStore";

const OfflineDetector = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => {
      navigate("/");
      userStore.getState().clearImages();
      setIsOffline(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return <div>{isOffline && <Warn warningTitle="You are offline" />}</div>;
};

export default OfflineDetector;
