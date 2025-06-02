import { motion, useMotionValue, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  from?: number;
  to: number;
  duration?: number;
  format?: "currency" | "percent" | "number";
};

const formatNumber = (
  value: number,
  format: AnimatedCounterProps["format"]
): string => {
  if (format === "percent") return `${Math.round(value)}%`;
  if (format === "currency") {
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`;
    return `$${Math.round(value)}`;
  }
  return Math.round(value).toString();
};

const AnimatedCounter = ({
  from = 0,
  to,
  duration = 2,
  format = "number",
}: AnimatedCounterProps) => {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(formatNumber(from, format));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeInOut",
        onUpdate: (latest) => {
          setDisplay(formatNumber(latest, format));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to, duration, format]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

export default AnimatedCounter;
