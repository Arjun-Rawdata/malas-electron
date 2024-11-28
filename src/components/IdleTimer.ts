import baseStore from "@/store/baseStore";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserActivityTracker: React.FC = () => {
  const [isUserActive, setIsUserActive] = useState(false);
  const isUserPresent = baseStore((state) => state.isUserPresent);
  const setIsUserPresent = baseStore((state) => state.setIsUserPresent);
  const location = useLocation();
  const navigate = useNavigate();
  let activityTimeout: NodeJS.Timeout;

  const resetActivityTimer = () => {
    setIsUserActive(true);
    clearTimeout(activityTimeout);
    activityTimeout = setTimeout(() => setIsUserActive(false), 15000);
  };

  useEffect(() => {
    const handleActivity = () => resetActivityTimer();

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("click", handleActivity);
    window.addEventListener("scroll", handleActivity);

    resetActivityTimer();

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("click", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      setIsUserPresent(true);
      clearTimeout(activityTimeout);
    };
  }, [location, isUserPresent]);

  useEffect(() => {
    const pathname = location.pathname;
    
    if (!isUserActive && pathname !== "/" && pathname !== "/filters") {
      navigate("/");
    }
    if (pathname == "/filters" && !isUserActive && !isUserPresent) {
      navigate("/");
    }
  }, [isUserActive, isUserPresent]);

  return null;
};

export default UserActivityTracker;
