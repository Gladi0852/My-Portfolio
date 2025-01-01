import React from "react";
import { motion } from "framer-motion";

function Button({ text }) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.1 }}
      className="text-white text-md md:text-lg xl:text-xl font-medium px-6 py-3 rounded-lg bg-gradient-to-r from-[#213476] to-[#1591b3]"
    >
      {text}
    </motion.button>
  );
}

export default Button;
