"use client";
import { Search, Database, CheckCircle, Download } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "1",
    title: "Search or describe",
    description: "Use filters to search manually, or describe your ideal customer and let AI find matches.",
  },
  {
    icon: Database,
    step: "2", 
    title: "We aggregate data",
    description: "Our system pulls from public sources, professional networks, and verified databases.",
  },
  {
    icon: CheckCircle,
    step: "3",
    title: "Real-time verification",
    description: "Every email and phone number is verified before you see it. No bounces, no wasted time.",
  },
  {
    icon: Download,
    step: "4",
    title: "Export & outreach",
    description: "Download as CSV or sync directly to your CRM. Start your outreach in minutes.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-12 lg:py-16 bg-muted/30 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground">
            From search to outreach in four simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line with animation */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
                    style={{
                      animation: 'slide 2s linear infinite',
                      width: '50%'
                    }}
                  />
                </div>
              )}
              
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-card border-2 border-border mb-6">
                  <step.icon className="w-6 h-6 text-foreground" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[linear-gradient(to_bottom,#1a1aff,#000099)] text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }
      `}</style>
    </section>
  );
};