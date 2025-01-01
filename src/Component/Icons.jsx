import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function Icons({ size }) {
  return (
    <div className="flex gap-3 md:gap-5 items-center">
      <a href="https://www.linkedin.com/in/pritambiswas21/" target="_blank">
        <FaLinkedinIn className={`${size} text-white`} />
      </a>
      <a href="mailto:pritambiswasmca@gmail.com" target="_blank">
        <MdEmail className={`${size} text-white`} />
      </a>
      <a href="https://wa.me/+919382529864" target="_blank">
        <FaWhatsapp className={`${size} text-white`} />
      </a>
    </div>
  );
}

export default Icons;
