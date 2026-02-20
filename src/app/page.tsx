import { NavBar } from "@/components/landing/NavBar";
import { HeroSection } from "@/components/landing/HeroSection";
import { LeadsTableSection } from "@/components/landing/LeadsTableSection"
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { AILeadGenSection } from "@/components/landing/AILeadGenSection";
import { ExportSection } from "@/components/landing/ExportSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { LeadDetailsSection } from "@/components/landing/LeadDetailsSection";
import { DataSourcesSection } from "@/components/landing/DataSourcesSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      <LeadsTableSection />
      <FeaturesSection />
      <HowItWorksSection />
      <UseCasesSection />
      <AILeadGenSection />
      <ComparisonSection />
      <ExportSection />
      <LeadDetailsSection />
      <DataSourcesSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer /> 
    </div>
  );
};

export default Index;
