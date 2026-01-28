import { NavBar } from "@/components/landing/NavBar";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustedBy } from "@/components/landing/TrustedBy";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { DataSourcesSection } from "@/components/landing/DataSourcesSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      <TrustedBy />
      <FeaturesSection />
      <HowItWorksSection />
      <DataSourcesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
