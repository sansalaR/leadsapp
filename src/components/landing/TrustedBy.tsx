"use client";
import { useEffect, useRef } from "react";

export const TrustedBy = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const companies = [
    "Salesforce",
    "HubSpot",
    "Zendesk",
    "Stripe",
    "Slack",
    "Shopify",
    "Notion",
    "Figma",
  ];

  // Double the array for seamless loop
  const allCompanies = [...companies, ...companies];

  return (
    <section className="py-16 border-y border-border/50 bg-muted/20 relative overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/20 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/20 to-transparent z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm text-muted-foreground font-medium">
          Trusted by <span className="text-accent font-semibold">10,000+</span> sales teams at leading companies
        </p>
      </div>
      
      {/* Animated scroll container */}
      <div className="relative overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex gap-12 animate-scroll"
          style={{
            animation: "scroll 30s linear infinite",
          }}
        >
          {allCompanies.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex-shrink-0 px-8 py-4 rounded-xl bg-card/50 border border-border/50 hover:border-accent/30 hover:bg-card transition-all duration-300 group cursor-default"
            >
              <span className="text-xl font-bold text-muted-foreground/60 group-hover:text-foreground transition-colors whitespace-nowrap">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
