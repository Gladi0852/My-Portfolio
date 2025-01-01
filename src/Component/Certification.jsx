import React, { useState } from "react";
import cer1 from "../assets/cer1.png";
import cer2 from "../assets/cer2.jpg";
import cer3 from "../assets/cer3.png";
import cer4 from "../assets/cer4.jpeg";
import cer5 from "../assets/cer5.png";
import cer6 from "../assets/cer6.png";
import { motion } from "framer-motion";

import css from "../CSS modules/Certification.module.css";
import CertificateFull from "./CertificateFull";

function Certification() {
  const certificate = [cer1, cer2, cer3, cer4, cer5, cer6];
  const [certificatePhoto, setCertificatePhoto] = useState(null);

  const handleOpen = (cer) => {
    setCertificatePhoto(cer);
  };
  const handleClose = () => {
    setCertificatePhoto(null);
  };

  return (
    <div className="w-10/12 mx-auto mb-10">
      {certificatePhoto && (
        <CertificateFull image={certificatePhoto} onClose={handleClose} />
      )}
      <h1 className="mx-auto pb-1 xl:pb-3 text-3xl md:text-4xl xl:text-5xl w-fit border-b-2 xl:border-b-4 border-[#1788ae] text-[#1788AE] font-medium mb-10">
        Certification
      </h1>
      <div className="w-full justify-between overflow-hidden">
        <div className={css["track"]}>
          {certificate.map((cer, index) => (
            <motion.div
              className="w-full sm:w-1/3 md:w-2/5 flex-none p-3 cursor-pointer"
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleOpen(cer)}
            >
              <img src={cer} alt="" className="rounded-xl" />
            </motion.div>
          ))}

          {certificate.map((cer, index) => (
            <motion.div
              className="w-full sm:w-1/3 md:w-2/5 flex-none p-3 cursor-pointer"
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleOpen(cer)}
            >
              <img src={cer} alt="" className="rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certification;
