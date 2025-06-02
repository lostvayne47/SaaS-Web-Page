import { Button } from "@/components/ui/button";
import TypeWriter from "./Animations/TypeWriter";
import { handleScheduleClick } from "@/lib/utils";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative py-12 md:py-20 px-4 bg-[url('/hero_backdrop.jpg')] bg-center bg-cover"
    >
      <div className="container mx-auto text-center max-w-5xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Flood Your Pipeline with Qualified Leads
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          <TypeWriter
            text="Without Guesswork or Overpriced Agencies"
            speed={75}
          />
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-5xl mx-auto">
          We help SaaS and service businesses build profitable lead machines
          with strategic paid marketing, funnel optimization, and sales
          enablement systems.
        </p>
        <Button
          onClick={handleScheduleClick}
          className=" h-5 w-15 bg-gradient-to-b from-[#04B1DB] to-[#0464F6] hover:from-green-500 hover:to-green-700 text-white  font-bold py-2 md:py-3 px-6 md:px-8 rounded-md sm:w-auto"
        >
          Get Free Lead Growth Plan
        </Button>
      </div>
    </section>
  );
};

export default Hero;
