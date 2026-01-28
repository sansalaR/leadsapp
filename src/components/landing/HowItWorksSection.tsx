"use client";
import { Search, Database, CheckCircle, Download, ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Search or Generate",
    description: "Use our smart search filters or let AI generate leads based on your ideal customer profile.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Database,
    step: "02",
    title: "We Find the Data",
    description: "Our system aggregates data from public sources, professional networks, and verified databases.",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Real-Time Verification",
    description: "Every email and phone number is verified in real-time to ensure accuracy before you export.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: Download,
    step: "04",
    title: "Export & Outreach",
    description: "Download your leads as CSV and import into your favorite CRM or email outreach tool.",
    color: "from-orange-500 to-yellow-400",
  },
];

export const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-hero relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="text-sm font-semibold text-accent">Simple Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-primary-foreground mb-6">
            How We Source
            <span className="text-gradient"> Your Data</span>
          </h2>
          <p className="text-xl text-primary-foreground/70">
            We aggregate and verify contact information from multiple trusted sources.
          </p>
        </div>
        
        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            
            return (
              <div 
                key={step.title} 
                className={`relative group cursor-pointer transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => setActiveStep(index)}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 z-0">
                    <div className={`h-full transition-all duration-500 ${
                      index < activeStep ? "bg-accent" : "bg-white/20"
                    }`}>
                      <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                        index < activeStep ? "bg-accent border-accent" : "bg-transparent border-white/30"
                      }`} />
                    </div>
                  </div>
                )}
                
                <div className={`relative p-8 rounded-3xl transition-all duration-500 ${
                  isActive 
                    ? "bg-white/10 backdrop-blur-xl border-2 border-accent shadow-glow-intense scale-105" 
                    : "bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}>
                  {/* Step number badge */}
                  <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    isActive 
                      ? `bg-gradient-to-br ${step.color} text-white shadow-lg` 
                      : "bg-white/10 text-white/50 border border-white/20"
                  }`}>
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? `bg-gradient-to-br ${step.color} shadow-lg` 
                      : "bg-white/10"
                  }`}>
                    <step.icon className={`w-8 h-8 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white/60"
                    }`} />
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/80"
                  }`}>{step.title}</h3>
                  <p className={`transition-colors duration-300 leading-relaxed ${
                    isActive ? "text-white/80" : "text-white/50"
                  }`}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent-gradient transition-all duration-300 ease-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-2">
            {steps.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index <= activeStep ? "bg-accent" : "bg-white/20"
                }`}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
