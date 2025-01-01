import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const isBackwardNavigation = useRef(false);

  useEffect(() => {
    // Listen to popstate event to detect backward/forward navigation
    const handlePopState = (event) => {
      if (event.state && event.state.idx < 0) {
        isBackwardNavigation.current = true;
      } else {
        isBackwardNavigation.current = false;
      }
    };

    // Add event listener for popstate
    window.addEventListener("popstate", handlePopState);

    // Scroll to top unless it's backward navigation
    if (!isBackwardNavigation.current) {
      window.scrollTo(0, 0);
    }

    // Clean up event listener
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname]);

  return null;
}

export default ScrollToTop;
