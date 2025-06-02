import { motion } from "framer-motion";
import React from "react";

export default function TextPulse({ displayedText = "Pulsing Color" }) {
  return (
    <motion.span
      animate={{
        color: ["#04B1DB", "#0464F6", "#292929", "#0464F6", "#04B1DB"],
      }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
    >
      {displayedText}
    </motion.span>
  );
}
