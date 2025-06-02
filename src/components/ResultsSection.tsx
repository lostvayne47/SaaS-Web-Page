import AnimatedCounter from "./Animations/AnimatedCounter";
import Animated from "./Animations/AnimatedCounter";
const ResultsSection = () => {
  const results = [
    {
      amount: 43,
      format: "percent", // ✅ valid
      description: (
        <>
          Reduced <b>CPL</b> by 43% for a business consulting firm
        </>
      ),
    },
    {
      amount: 1200000,
      format: "currency", // ✅ valid
      description: (
        <>
          Built $1.2M <b>qualified pipeline</b> for a compliance SaaS startup
        </>
      ),
    },
    {
      amount: 67,
      format: "number", // ✅ valid
      description: (
        <>
          Generated 67 <b>booked</b> sales calls in the <b>first 60 days</b>
        </>
      ),
    },
  ];

  return (
    <section id="results" className="py-10 md:py-12 mx-auto">
      <p className="text-primary font-bold mb-2 text-center">HOW WE HELP</p>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center px-3">
        Real Results We've Delivered
      </h2>
      <p className="text-lg md:text-xl text-center mb-8 md:mb-10 text-gray-600 px-3">
        Scaling Service and SaaS Brands Like Yours
      </p>

      <div className="min-h-[15rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {results.map((result, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "bg-[#0464F6]" : "bg-[#0358D9]"
            } p-6 md:p-8 text-center text-white flex flex-col items-center justify-center hover:translate-y-[-15px] transition-transform duration-300`}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              <AnimatedCounter
                format={result.format as "number" | "percent" | "currency"}
                to={result.amount}
                duration={4}
              />
            </h3>
            <p className="text-sm md:text-base">{result.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10 md:mt-16 space-y-2">
        <p className="text-base md:text-lg font-bold text-gray-700">
          We don't just "get leads"
        </p>
        <p className="text-xl md:text-2xl font-bold text-blue-600">
          We get qualified leads ready to buy
        </p>
      </div>
    </section>
  );
};

export default ResultsSection;
