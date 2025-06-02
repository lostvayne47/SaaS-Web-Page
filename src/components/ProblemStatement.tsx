import AttentionIllustration from "./Animations/AttentionIllustration";
import TagList from "./TagList";

const ProblemStatement = () => {
  const problems = [
    {
      title: "01",
      description: "Burning cash on paid ads with no real pipeline?",
    },
    { title: "02", description: 'Getting "leads" who don\'t close?' },
    {
      title: "03",
      description: "Inconsistent inbound volume messing with forecasts?",
    },
    {
      title: "04",
      description: "Sales team wasting time on unqualified prospects?",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center max-w-5xl">
        <h2 className="text-primary font-bold mb-2 text-center">
          PROBLEM STATEMENT
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Sick of Unpredictable Leads, High CPLs, and
          <br />
          Pipeline Droughts?
        </h2>
        <div className="container mx-auto p-3">
          <div className="flex flex-col-reverse md:flex-row items-start justify-evenly p-2 gap-2 md:gap-8 ">
            <div className="md:w-[60%]">
              <TagList Tagitems={problems} shape="circle" />
            </div>

            <div className="flex items-center justify-center m-auto md:w-[40%]">
              <AttentionIllustration />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-2xl text-gray-800 mb-2">
            The problem isn't leads — it's the system behind them.
          </p>
          <p className="text-2xl text-primary font-bold">
            We build that system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
