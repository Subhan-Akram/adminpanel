import { useState, useEffect } from "react";
const useViewportWidth = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler to update width
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return viewportWidth;
};

export default useViewportWidth;
