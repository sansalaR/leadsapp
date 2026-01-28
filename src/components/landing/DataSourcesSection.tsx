"use client";
import { Globe, Linkedin, Building2, Database, Shield, RefreshCw, CheckCircle2, TrendingUp } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const sources = [
  {
    icon: Globe,
    title: "Public Web Data",
    description: "Company websites, press releases, and publicly available professional profiles.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Linkedin,
    title: "Professional Networks",
    description: "Aggregated from professional networking platforms and business directories.",
    gradient: "from-indigo-500 to-blue-400",
  },
  {
    icon: Building2,
    title: "Business Registries",
    description: "Official company registrations, filings, and corporate databases.",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: Database,
    title: "Verified Databases",
    description: "Third-party data providers with verified B2B contact information.",
    gradient: "from-orange-500 to-yellow-400",
  },
];

const stats = [
  { label: "Email Validation", value: "95%+", suffix: "Accuracy" },
  { label: "Phone Verification", value: "90%+", suffix: "Accuracy" },
  { label: "Data Freshness", value: "24h", suffix: "Updates" },
];

export const DataSourcesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState<number[]>([0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const targets = [95, 90, 24];
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      
      setAnimatedStats(targets.map(t => Math.round(t * eased)));
      
      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Database className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Data Sources</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
              Where Does the
              <span className="text-gradient"> Data Come From?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              We aggregate contact information from multiple trusted sources and verify each data point to ensure accuracy.
            </p>
            
            <div className="grid gap-5">
              {sources.map((source, index) => (
                <div 
                  key={source.title} 
                  className={`flex gap-4 p-4 rounded-2xl bg-card/50 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-500 group cursor-default ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${source.gradient} p-[1px] transition-transform duration-300 group-hover:scale-110`}>
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                      <source.icon className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-gradient transition-all">{source.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{source.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-purple-500/20 rounded-3xl blur-3xl" />
            
            <div className="relative glass rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-accent-gradient flex items-center justify-center shadow-glow animate-pulse-glow">
                  <RefreshCw className="w-8 h-8 text-accent-foreground animate-spin" style={{ animationDuration: "3s" }} />
                </div>
                <div>
                  <div className="text-2xl font-black text-foreground">Real-Time</div>
                  <div className="text-muted-foreground font-medium">Verification Engine</div>
                </div>
              </div>
              
              {/* Animated stats */}
              <div className="space-y-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-foreground font-medium">{stat.label}</span>
                      <span className="text-accent font-bold text-lg">
                        {index === 2 ? animatedStats[index] : `${animatedStats[index]}%`}
                        <span className="text-muted-foreground text-sm font-normal ml-1">{stat.suffix}</span>
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent-gradient rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${index === 2 ? 100 : animatedStats[index]}%` : "0%",
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Shield, text: "GDPR Compliant" },
                  { icon: CheckCircle2, text: "SOC 2 Type II" },
                  { icon: TrendingUp, text: "99.9% Uptime" },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 border border-accent/20">
                    <badge.icon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-accent">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
