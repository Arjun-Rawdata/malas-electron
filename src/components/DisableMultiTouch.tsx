import { useEffect } from "react";

const DisableMultiTouch = () => {
  useEffect(() => {
    const preventContextMenu = (event: Event) => event.preventDefault();
    const preventTouchStart = (event: Event) => event.preventDefault();

    const disableMultitouch = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    const disableWheelScroll = (e: WheelEvent) => {
      e.preventDefault();
    };

    window.addEventListener("contextmenu", preventContextMenu);
    window.addEventListener("touchstart", preventTouchStart);
    window.addEventListener("touchmove", disableMultitouch, {
      passive: false,
    });
    window.addEventListener("gesturestart", (e) => e.preventDefault());
    window.addEventListener("gesturechange", (e) => e.preventDefault());
    window.addEventListener("gestureend", (e) => e.preventDefault());
    window.addEventListener("wheel", disableWheelScroll, {
      passive: false,
    });

    return () => {
      window.removeEventListener("contextmenu", preventContextMenu);
      window.removeEventListener("touchstart", preventTouchStart);
      window.removeEventListener("touchmove", disableMultitouch);
      window.removeEventListener("gesturestart", (e) => e.preventDefault());
      window.removeEventListener("gesturechange", (e) => e.preventDefault());
      window.removeEventListener("gestureend", (e) => e.preventDefault());
      window.removeEventListener("wheel", disableWheelScroll);
    };
  }, []);

  return <></>;
};

export default DisableMultiTouch;
