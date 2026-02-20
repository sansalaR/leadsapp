"use client";
import { Users, UserSearch, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const useCases = [
  {
    icon: Users,
    title: "Sales Teams",
    description: "Build targeted prospect lists for outbound campaigns. Find decision-makers at companies that match your ideal customer profile.",
    stats: "5K+ teams"
  },
  {
    icon: UserSearch,
    title: "Recruiters",
    description: "Source candidates with specific skills and experience. Search by job title, company, or use AI to find matching professionals.",
    stats: "2K+ recruiters"
  },
  {
    icon: Lightbulb,
    title: "Founders",
    description: "Research potential customers, partners, or investors. Get contact information without paying for enterprise sales tools.",
    stats: "3K+ startups"
  }
];

export const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-12 lg:py-16 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Who uses LeadFind
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            LeadFind helps anyone who needs to find and reach business professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase) => {
            const IconComponent = useCase.icon;
            return (
              <div
                key={useCase.title}
                className="relative p-6 rounded-lg border border-border bg-card overflow-hidden"
              >
                <IconComponent className="absolute -right-3 -bottom-4 w-40 h-40 opacity-20 text-blue-500" />
                
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-900 text-white text-xs">
                    {useCase.stats}
                  </Badge>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};