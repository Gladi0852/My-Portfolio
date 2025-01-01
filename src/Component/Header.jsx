import React, { useState, useEffect } from "react";
import Icons from "./Icons";
import PBigLogo from "../assets/PBigLogo";
import { Link } from "react-router-dom";

function Header() {
  const [logoSize, setLogoSize] = useState(getLogoSize()); // State to manage logo size

  // Function to determine logo size based on screen width
  function getLogoSize() {
    if (window.innerWidth >= 1536) {
      return "5rem"; // Large screens (Desktop)
    } else if (window.innerWidth >= 1024) {
      return "4rem"; // Large screens (Desktop)
    } else if (window.innerWidth >= 640) {
      return "3rem"; // Medium screens (Tablet)
    } else {
      return "2.5rem"; // Small screens (Mobile)
    }
  }

  // Update the logo size on window resize
  useEffect(() => {
    const handleResize = () => {
      setLogoSize(getLogoSize());
    };

    window.addEventListener("resize", handleResize); // Add event listener

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 bg-transparent absolute top-0 z-20 flex justify-between items-center py-4 left-1/2 -translate-x-1/2">
      <Link to="/">
        <div>
          <PBigLogo size={logoSize} color="white" />
        </div>
      </Link>

      <div className="flex gap-6">
        <Icons size="text-2xl sm:text-2xl lg:text-3xl 2xl:text-4xl" />
      </div>
    </div>
  );
}

export default Header;
