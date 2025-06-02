import { motion } from "framer-motion";
import BgImage from "/Illustration-10.svg";
import ForegroundImage from "/Illustration-09.svg";

export default function AttentionIllustration() {
  return (
    <motion.div
      className="relative w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
    >
      {/* Static Background SVG */}
      <img
        src={BgImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Shaking Foreground SVG (e.g. a Question Mark) */}
      <motion.img
        src={ForegroundImage}
        alt="Shaking Question Mark"
        className="absolute top-[30px] left-[40px] md:top-[55px] md:left-[65px] lg:top-[65px] lg:left-[80px] left-0 w-[50%] h-[50%] z-10"
        animate={{
          x: [-2, 2, -2],
          rotateZ: [15, 7.5, 0, -7.5, -15, -7.5, 0, 7.5, 15],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
