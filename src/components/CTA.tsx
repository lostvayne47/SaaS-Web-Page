import { Button } from "@/components/ui/button";
import { handleScheduleClick } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeInVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.3, duration: 0.5 },
  }),
};

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="py-10 md:py-12 px-4 bg-white">
      <div ref={ref} className="container mx-auto text-center max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          <motion.span
            variants={fadeInVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
          >
            Book More <span className="text-primary inline-block">Calls.</span>
          </motion.span>
          <motion.span
            variants={fadeInVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
          >
            Close More <span className="text-primary inline-block">Deals.</span>
          </motion.span>
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          <motion.span
            variants={fadeInVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
          >
            Get a <span className="text-primary inline-block">Free</span>{" "}
            Pipeline Growth Blueprint.
          </motion.span>{" "}
        </h2>

        <Button
          onClick={handleScheduleClick}
          className="h-5 w-15 bg-gradient-to-b from-[#04B1DB] to-[#0464F6] hover:from-green-500 hover:to-green-700 text-white font-bold mt-5 py-2 md:py-3 px-6 md:px-8 rounded-md sm:w-auto"
        >
          Schedule My Free Call
        </Button>
      </div>
    </section>
  );
};

export default CTA;
