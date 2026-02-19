"use client";
import { Users, UserSearch, Lightbulb, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const useCases = [
  {
    icon: Users,
    title: "Sales teams",
    description: "Build targeted prospect lists for outbound campaigns. Find decision-makers at companies that match your ideal customer profile.",
    gradient: "from-blue-400/20 via-blue-300/20 to-transparent",
    iconBg: "bg-[linear-gradient(to_bottom,#1a1aff,#000099)]",
    iconColor: "text-white dark:text-white",
    stats: "5K+ teams"
  },
  {
    icon: UserSearch,
    title: "Recruiters",
    description: "Source candidates with specific skills and experience. Search by job title, company, or use AI to find matching professionals.",
    gradient: "from-blue-400/20 via-blue-300/20 to-transparent",
    iconBg: "bg-[linear-gradient(to_bottom,#1a1aff,#000099)]",
    iconColor: "text-white dark:text-white",
    stats: "2K+ recruiters"
  },
  {
    icon: Lightbulb,
    title: "Founders",
    description: "Research potential customers, partners, or investors. Get contact information without paying for enterprise sales tools.",
    gradient: "from-blue-400/20 via-blue-300/20 to-transparent",
    iconBg: "bg-[linear-gradient(to_bottom,#1a1aff,#000099)] dark:bg-gray-700",
    iconColor: "text-white dark:text-white",
    stats: "3K+ startups"
  }
];

export const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-12 lg:py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
         <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Who uses LeadFind
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            LeadFind helps anyone who needs to find and reach business professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card 
              key={useCase.title} 
              className="text-neutral-800 group relative overflow-hidden border-border hover:border-foreground/20 hover:shadow-2xl transition-all duration-500 cursor-default"
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Subtle top border glow */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardHeader className="relative text-center pb-4">
                {/* Icon container */}
                <div className="relative mx-auto mb-2">
                  <div className={`w-16 h-16 rounded-2xl ${useCase.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                    <useCase.icon className={`w-8 h-8 ${useCase.iconColor}`} />
                  </div>
                  {/* Icon glow effect */}
                  <div className={`absolute inset-0 rounded-2xl ${useCase.iconBg} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                </div>
                
                <CardTitle className="text-2xl font-bold mb-2 group-hover:translate-y-[-2px] transition-transform duration-300">
                  {useCase.title}
                </CardTitle>
                
                <div className="flex justify-center -mb-9">
                  <Badge variant="secondary" className="text-xs">
                    {useCase.stats}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="relative text-center -pt-20">
                <CardDescription className="text-muted-foreground leading-relaxed mb-2">
                  {useCase.description}
                </CardDescription>
                
                {/* Hover indicator */}
                <div className="flex items-center justify-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-2">
                  <span className="text-neutral-800">Explore use case</span>
                  <ArrowRight className={`w-4 h-4 ${useCase.iconColor} group-hover:translate-x-1 transition-transform`} />
                </div>
              </CardContent>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${useCase.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </Card>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border shadow-sm">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-background flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-800" />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-100  border-2 border-background flex items-center justify-center">
                <UserSearch className="w-4 h-4 text-blue-800" />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-100  border-2 border-background flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-blue-800 " />
              </div>
            </div>
            <span className="text-sm text-muted-foreground">
              Join <span className="font-semibold text-foreground">10,000+</span> professionals already using LeadFind
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};