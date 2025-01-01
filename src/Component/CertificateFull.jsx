import React from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function CertificateFull({ image, onClose }) {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#0e0e0e3a] fixed top-0 left-0 z-50">
      <motion.div
        className="rounded-2xl relative overflow-hidden"
        initial={{ width: "0%", height: "0%" }}
        animate={{ width: "80%", height: "80%" }}
        exit={{ width: "0%", height: "0%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Close Button */}
        <div
          className="text-white bg-[#1788ae] w-fit h-fit absolute right-0 top-0 p-2 text-xl rounded-bl-2xl cursor-pointer"
          onClick={onClose}
        >
          <IoClose />
        </div>
        {/* Certificate Image */}
        <img src={image} alt="Certificate" className="w-full h-full" />
      </motion.div>
    </div>
  );
}

export default CertificateFull;
