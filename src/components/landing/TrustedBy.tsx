"use client";
import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

export const TrustedBy = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const companies = [
    { name: "Salesforce", size: "Enterprise" },
    { name: "HubSpot", size: "Scale-up" },
    { name: "Zendesk", size: "Enterprise" },
    { name: "Stripe", size: "Scale-up" },
    { name: "Slack", size: "Enterprise" },
    { name: "Shopify", size: "Enterprise" },
    { name: "Notion", size: "Scale-up" },
    { name: "Figma", size: "Scale-up" },
  ];

  // Triple the array for seamless loop
  const allCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="py-15 border-y border-border/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Trusted by industry leaders</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Join <span className="text-foreground font-semibold">10,000+ sales teams</span> at leading companies who trust our platform to generate high-quality leads
          </p>
        </div>
      </div>
      
      {/* Animated scroll container */}
      <div className="relative overflow-hidden max-w-5xl mx-auto">
        <div 
          ref={scrollRef}
          className="flex gap-4 animate-scroll"
          style={{
            animation: "scroll 25s linear infinite",
          }}
        >
          {allCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 group cursor-default"
            >
              <div className="relative px-8 py-5 rounded-lg bg-card border border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex flex-col gap-1">
                  <span className="text-lg font-bold text-foreground/80 group-hover:text-foreground transition-colors whitespace-nowrap">
                    {company.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground/50 font-medium">
                    {company.size}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};