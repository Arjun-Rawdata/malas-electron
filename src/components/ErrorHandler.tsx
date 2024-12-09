import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Warn from "./Warn";
import baseStore from "@/store/baseStore";

const ErrorWrapper = () => {
  const [isOffline, setIsOffline] = useState<boolean>(!navigator.onLine);
  const navigate = useNavigate();
  const { errorTrigger, setErrorTrigger } = baseStore((state) => state);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
    };

    const handleOffline = () => {
      setIsOffline(true);
      navigate("/");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [errorTrigger, navigate, setErrorTrigger]);

  useEffect(() => {
    if (errorTrigger) {
      if (isOffline) return;
      const timer = setTimeout(() => {
        setErrorTrigger("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errorTrigger, setErrorTrigger]);

  return (
    <>
      {!!errorTrigger && errorTrigger === "default" && isOffline && (
        <Warn warningTitle={"You are offline"} />
      )}
      {!!errorTrigger && errorTrigger !== "default" && (
        <Warn warningTitle={errorTrigger} />
      )}
    </>
  );
};

export default ErrorWrapper;
