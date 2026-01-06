import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Pillars from "@/components/landing/Pillars";
import Values from "@/components/landing/Values";
import Pricing from "@/components/landing/Pricing";
import Packs from "@/components/landing/Packs";
import PracticalInfo from "@/components/landing/PracticalInfo";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Pillars />
      <Values />
      <Pricing />
      <Packs />
      <PracticalInfo />
      <Footer />
    </div>
  );
};

export default Index;
