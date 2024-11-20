import { useState, useEffect } from "react";

const useElementWidth = ({ box1Ref }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const calculateDistance = () => {
      if (box1Ref.current) {
        const box1Rect = box1Ref.current.getBoundingClientRect();
        setWidth(box1Rect.width);
      }
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);

    return () => window.removeEventListener("resize", calculateDistance);
  }, [box1Ref]);

  return { width };
};

export default useElementWidth;
