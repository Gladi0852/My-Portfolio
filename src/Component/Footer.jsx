import React from "react";
import { PiCopyrightLight } from "react-icons/pi";
import PBigLogo from "../assets/PBigLogo";
import Icons from "./Icons";

function Footer() {
  return (
    <div className="w-screen shadow-6xl">
      <div className="w-10/12 mx-auto py-10 flex flex-col items-center justify-center gap-y-2">
        <p className="text-white flex justify-center items-center gap-x-2 font-light text-lg">
          Pritam Biswas <PiCopyrightLight /> 2024
        </p>
        <div>
          <PBigLogo size="3rem" color="null" />
        </div>
        <div className="opacity-70">
          <Icons size="text-3xl xl:text-4xl" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
