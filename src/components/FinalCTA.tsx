import { Button } from "@/components/ui/button";
import { handleScheduleClick } from "@/lib/utils";

const FinalCTA = () => {
  return (
    <section className="pt-10 md:pt-12 px-4 bg-white">
      <div className="container mx-auto text-center max-w-5xl">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          Stop treating marketing like a gamble.
        </h2>
        <p className="text-xl md:text-2xl text-primary font-bold mb-3 md:mb-4">
          Treat it like a system.
        </p>
        <p className="text-lg font-bold md:text-xl text-gray-700 mb-6 md:mb-8">
          Let's build your revenue engine together — book your free strategy
          call today.
        </p>

        <Button
          onClick={handleScheduleClick}
          className="h-5 w-15 bg-gradient-to-b from-[#04B1DB] to-[#0464F6] hover:from-green-500 hover:to-green-700 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-md sm:w-auto"
        >
          Get Free Lead Growth Plan
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
