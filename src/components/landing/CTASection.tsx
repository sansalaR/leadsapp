"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Sparkles, Check } from "lucide-react";

const benefits = [
  "No credit card required",
  "50 free exports daily",
  "Cancel anytime",
];

export const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-hero p-12 lg:p-20">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] animate-morph" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
          
          {/* Floating shapes */}
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/10 rounded-2xl rotate-12 animate-float" />
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/5 rounded-full animate-float-delayed" />
          <div className="absolute top-1/3 right-20 w-12 h-12 border-2 border-accent/30 rounded-lg rotate-45 animate-float-slow" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-8 animate-bounce-subtle">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-white">Limited Time: Free Daily Exports</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Start Finding Leads
              <br />
              <span className="text-gradient">Today</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Get access to millions of verified B2B contacts. Export up to 50 leads per day for free.
            </p>
            
            {/* Benefits */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-white/80 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" className="w-full sm:w-auto group animate-pulse-glow">
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                View Pricing
              </Button>
            </div>
            
            {/* Social proof */}
            <p className="mt-8 text-sm text-white/50">
              Join <span className="text-white font-semibold">10,000+</span> sales professionals already using LeadFlow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
