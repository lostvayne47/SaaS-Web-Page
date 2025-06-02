import { Card, CardContent } from "@/components/ui/card";
import { easeInOut, easeOut, motion, useInView } from "framer-motion";
import { Aperture } from "lucide-react";
import { useRef } from "react";
const services = [
  {
    name: "Targeted Paid Acquisition",
    description: "Meta, LinkedIn, Google ads engineered for SQLs.",
    imgPath: "/Illustration-01.svg",
  },
  {
    name: "Landing Pages and Funnel Builds",
    description: "Pages designed to convert cold traffic into booked calls.",
    imgPath: "/Illustration-02.svg",
  },
  {
    name: "CRM + Automation Setup",
    description: "Lead nurture sequences, smart tagging, and reporting.",
    imgPath: "/Illustration-03.svg",
  },
  {
    name: "LinkedIn Thought Leadership",
    description: "Personal branding to drive authority and inbound.",
    imgPath: "/Illustration-04.svg",
  },
  {
    name: "Lead Qualification & Segmentation",
    description: "So your sales team talks only to real prospects.",
    imgPath: "/Illustration-05.svg",
  },
];

const popUp = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 1.5,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      easeInOut,
    },
  }),
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="services"
      className="py-10 md:py-12 px-4 bg-[radial-gradient(ellipse_100%_80%_at_center,_#8AB7FB_0%,_#ffffff_40%)]"
    >
      <div className="container mx-auto">
        <p className="text-primary font-bold mb-2 text-center">HOW WE HELP</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
          Our Full-Funnel Lead Generation System Covers
        </h2>
        <div ref={ref} className="flex flex-wrap justify-center gap-6 mb-6 p-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="min-w-[15rem] w-[25%]"
              variants={popUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
              // custom={index <= 2 ? 0 : 1}
            >
              <Card className="hover:border-primary hover:shadow-lg hover:scale-105 h-full">
                <CardContent className="p-8 flex flex-col items-center justify-center gap-2 h-full">
                  <div className="text-blue-700 rounded-full p-2">
                    <img src={service.imgPath} alt="Card Icon" width={"60px"} />
                  </div>
                  <h1 className="text-center">{service.name}</h1>
                  <p className="text-gray-700 text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
