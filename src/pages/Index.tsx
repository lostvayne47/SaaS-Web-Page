import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import GrowthSection from "@/components/GrowthSection";
import CTA from "@/components/CTA";
import ProcessSection from "@/components/ProcessSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ProblemStatement />
      <ServicesSection />
      <ResultsSection />
      <GrowthSection />
      <CTA />
      <ProcessSection />
      <FinalCTA />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
