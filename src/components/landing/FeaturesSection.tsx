"use client";
import { Search, Sparkles, Mail, Phone, Briefcase, FileDown } from "lucide-react";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Filter by company, job title, location, industry, or company size to find exactly who you need.",
  },
  {
    icon: Sparkles,
    title: "AI Lead Generation",
    description: "Describe your ideal customer and let AI generate a targeted list of prospects automatically.",
  },
  {
    icon: Mail,
    title: "Verified Emails",
    description: "Every email is verified in real-time with 95%+ deliverability guarantee.",
  },
  {
    icon: Phone,
    title: "Direct Dial Numbers",
    description: "Access mobile and direct dial numbers to connect with decision-makers faster.",
  },
  {
    icon: Briefcase,
    title: "Rich Profiles",
    description: "View work history, education, skills, and social profiles for better personalization.",
  },
  {
    icon: FileDown,
    title: "CSV Export",
    description: "Export leads to CSV and import directly into Salesforce, HubSpot, or any CRM.",
  },
];

export const FeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-6 lg:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Everything you need to build your pipeline
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Powerful features to help you find, verify, and export B2B leads at scale.
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-6 rounded-lg border border-border bg-card hover:border-foreground/20 hover:shadow-sm transition-all duration-500 ${
                inView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{
                animationDelay: inView ? `${index * 0.1}s` : "0s",
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
