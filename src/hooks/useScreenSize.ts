import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    screenX: window.innerWidth,
    screenY: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        screenX: window.innerWidth,
        screenY: window.innerHeight,
      });
    };
    document.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};
