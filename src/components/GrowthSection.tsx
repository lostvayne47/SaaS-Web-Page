import TextPulse from "./Animations/TextPulse";
import TagList from "./TagList";

const GrowthSection = () => {
  const differentiators = [
    {
      title: "Qualified Inbound at Scale",
      description: "We engineer methods, not one-off ad stunts.",
    },
    {
      title: "Sales-First Thinking",
      description: "We build marketing that sales teams love.",
    },
    {
      title: "No Bloat",
      description: "Small team, fast execution, big outcomes.",
    },
    {
      title: "Flexible Engagements",
      description: "We earn your trust monthly. No painful retainers.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto max-w-5xl">
        <p className="text-primary font-bold mb-2 text-center">
          WHY WORK WITH LeadScalr
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          <TextPulse displayedText="Growth Systems, Not Just Campaigns" />
        </h2>

        <div className="flex justify-center items-center w-full">
          <div className="w-[45rem]">
            <TagList
              Tagitems={differentiators}
              gradient={true}
              textColor="#1F2937"
              color1="#B1D7E7"
              borderColor="#e3e3e3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
