import baseStore from "@/store/baseStore";
import resetApp from "@/utils/appResetter";
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
    console.log("resetting >>>>>>.");

    setIsUserActive(true);
    clearTimeout(activityTimeout);
    activityTimeout = setTimeout(() => setIsUserActive(false), 15000);
  };

  useEffect(() => {
    console.log("useffect working");
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

      clearTimeout(activityTimeout);
    };
  }, [location]);

  // Conditional redirection logic
  useEffect(() => {
    const pathname = location.pathname;
    if (location.pathname !== "/") {
      if (pathname === "/filters") {
        if (!isUserActive && !isUserPresent) {
          resetApp();
        }
      } else {
        if (!isUserActive) {
          resetApp();
        }
      }
    }
  }, [isUserActive, isUserPresent, location.pathname, navigate]);

  return null;
};

export default UserActivityTracker;
