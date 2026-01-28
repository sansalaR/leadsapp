"use client";
import { Search, Sparkles, Mail, Phone, Briefcase, GraduationCap, FileDown, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Search by company, job title, location, or industry to find your ideal prospects instantly.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Sparkles,
    title: "AI Lead Generation",
    description: "Let our AI generate targeted leads based on your ideal customer profile — no manual searching.",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: Mail,
    title: "Verified Emails",
    description: "Get direct email addresses verified in real-time with 95%+ accuracy guarantee.",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    description: "Access direct dial and mobile numbers to connect with prospects faster.",
    gradient: "from-orange-500 to-yellow-400",
  },
  {
    icon: Briefcase,
    title: "Work History",
    description: "View complete professional backgrounds including past roles and companies.",
    gradient: "from-indigo-500 to-blue-400",
  },
  {
    icon: GraduationCap,
    title: "Education & Skills",
    description: "Filter by education, certifications, and specific skills for better targeting.",
    gradient: "from-teal-500 to-green-400",
  },
  {
    icon: FileDown,
    title: "CSV Export",
    description: "Export your leads to CSV and import directly into your CRM or outreach tools.",
    gradient: "from-rose-500 to-pink-400",
  },
  {
    icon: Shield,
    title: "GDPR Compliant",
    description: "All data is sourced ethically and complies with privacy regulations.",
    gradient: "from-slate-500 to-gray-400",
  },
];

export const FeaturesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    const cards = document.querySelectorAll(".feature-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Powerful Features</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
            Everything You Need to
            <span className="text-gradient"> Find & Export Leads</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features to help you build your sales pipeline faster than ever.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              data-index={index}
              className={`feature-card group p-6 rounded-2xl bg-card border border-border hover:border-transparent transition-all duration-500 hover-lift relative overflow-hidden ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ 
                transitionDelay: `${index * 75}ms`,
                transitionProperty: "opacity, transform, border-color, box-shadow"
              }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon container */}
              <div className="relative mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-[1px] transition-transform duration-300 group-hover:scale-110`}>
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <feature.icon className={`w-6 h-6 transition-colors duration-300 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`} style={{ stroke: "url(#icon-gradient)" }} />
                  </div>
                </div>
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`} />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>

              {/* SVG gradient definition */}
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(199 89% 48%)" />
                    <stop offset="100%" stopColor="hsl(250 80% 60%)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
