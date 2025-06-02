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

const ProcessSection = () => {
  const steps = [
    {
      title: "Deep ICP & Funnel Audit",
      description: "We find the bottlenecks and growth opportunities.",
      imgPath: "/Illustration-06.svg",
    },
    {
      title: "Custom 90-Day Campaign Plan",
      description: "Built for fast, measurable wins.",
      imgPath: "/Illustration-07.svg",
    },
    {
      title: "Execution, Optimization, Scale",
      description: "Traffic, Funnels, CRM, Content, Automation.",
      imgPath: "/Illustration-08.svg",
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="process" className="py-16 px-4 bg-gray-100">
      <div className="container max-w-6xl">
        <p className="text-primary font-bold mb-2 text-center">HOW WE WORK</p>
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Our Growth Process
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-evenly "
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-primary border-[2px] text-center hover:scale-110 transition-transform duration-300"
            >
              <motion.span
                variants={fadeInVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
                key={index}
              >
                <div className="flex justify-center mb-4">
                  <div className="rounded-full flex items-center justify-center p-2">
                    <img src={step.imgPath} alt="Card Icon" width={"60px"} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
