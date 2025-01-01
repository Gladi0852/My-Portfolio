import React, { useEffect, useState } from "react";
import Header from "./Header";
import PBigLogo from "../assets/PBigLogo";
import Button from "./Button";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Banner() {
  const [logoSize, setLogoSize] = useState(getLogoSize());

  function getLogoSize() {
    if (window.innerWidth >= 1280) {
      return "30rem"; // Large screens (Desktop)
    } else {
      return "15rem"; // Small screens (Mobile)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setLogoSize(getLogoSize());
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="banner" className="w-screen h-screen bg-[#111111] relative">
      <div className="w-10/12 h-full mx-auto relative z-10 top-2/4 -translate-y-1/2 flex justify-center items-center">
        <div className="relative z-20">
          <h1 className="text-xl md:text-2xl xl:text-3xl text-white ">
            PRITAM BISWAS
          </h1>
          <h1 className="text-3xl md:text-4xl xl:text-6xl text-[#1591b3] font-bold">
            Software Developer
          </h1>
          <br />
          <p className="text-md md:text-lg xl:text-xl text-white mb-5">
            Proficient in Java, Node.js, React, JavaScript, DataBases | MCA (NIT
            Raipur, 2024) | Ex-Intern @ Avyaan Management Pvt Ltd
          </p>
          <br />
          <a
            href="https://drive.google.com/drive/folders/12DiPw_FAixq3jJp_NBp-TOxpzoDrroBG?usp=sharing"
            target="_blank"
          >
            <Button text="View Resume" />
          </a>
        </div>
        <div className="hidden md:block">
          <PBigLogo size={logoSize} color="null" />
        </div>
      </div>

      <div className="absolute z-20 text-white text-3xl md:text-4xl top-[90%] right-1/2 translate-x-1/2 md:translate-x-0 gap-4 md:top-1/2 md:right-4 xl:right-10 md:-translate-y-1/2 flex md:flex-col md:gap-8">
        <a href="https://leetcode.com/u/Gladi0852/" target="_blank">
          <SiLeetcode />
        </a>
        <a
          href="https://www.geeksforgeeks.org/user/pritambipgte/"
          target="_blank"
        >
          <SiGeeksforgeeks />
        </a>
        <a
          href="https://www.hackerrank.com/profile/pritambiswasmca"
          target="_blank"
        >
          <FaHackerrank />
        </a>
        <a href="https://github.com/Gladi0852" target="_blank">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Banner;
