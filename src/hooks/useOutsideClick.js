import { useEffect } from "react";

const useOutsideClick = (sidebarRef, appBarId, handler) => {
  useEffect(() => {
    const shouldIgnoreClick = (event, appBarElement) => {
      return (
        !sidebarRef.current ||
        sidebarRef.current.contains(event.target) ||
        (appBarElement && appBarElement.contains(event.target))
      );
    };
    const listener = (event) => {
      const appBarElement = document.getElementById(appBarId);
      if (shouldIgnoreClick(event, appBarElement)) return;
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [sidebarRef, appBarId, handler]);
};

export default useOutsideClick;
