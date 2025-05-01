import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { ProgramSection } from "@/components/home/program-section";
import { Footer } from "@/components/home/footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
