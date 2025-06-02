import React from "react";
import { motion } from "framer-motion";

const defaultItems = Array.from({ length: 4 }, () => ({
  title: "Qualified Inbound at Scale",
  description: "We engineer pipelines, not one-off ad spikes.",
}));

const descriptionVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (customDelay) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut", delay: customDelay },
  }),
};

const TagList = ({
  Tagitems = defaultItems,
  gradient = false,
  textColor = "white",
  color1 = "#0464F6",
  color2 = "white",
  borderColor = "#0464F6",
  shape = "rectangle", //Can be circle or rectangle
}) => {
  let shapeScheme =
    shape == "rectangle"
      ? "rounded-xl w-[15rem] h-14"
      : "w-[3.5rem] rounded-full h-14";

  return (
    <div className="space-y-3 p-4">
      {Tagitems.map((item, index) => (
        <div
          key={index}
          className="flex items-center flex-wrap flex-col md:flex-row rounded"
        >
          {/* Title - static */}
          <div
            style={{
              color: textColor,
              background: gradient
                ? `linear-gradient(to top, ${color1}, ${color2})`
                : color1,
            }}
            className={`flex-shrink-0 flex items-center justify-center px-4 py-2 text-sm font-semibold ${shapeScheme} border-primary border-2 shadow-sm z-20`}
          >
            {item.title}
          </div>

          {/* Description - animated with delay */}
          <motion.div
            style={{ borderColor: borderColor }}
            className="flex-1 h-16 md:h-12 w-full flex text-center items-center justify-center px-4 py-2 text-sm text-gray-800 bg-white border-2 rounded-lg shadow-sm z-10 -mt-2 md:-ml-4 md:mt-0"
            variants={descriptionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index * 0.2} // delay increases by 0.2s per item
          >
            {item.description}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default TagList;
