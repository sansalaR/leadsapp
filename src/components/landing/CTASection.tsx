"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Check } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-8 lg:py-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Card className="relative overflow-hidden border-0 shadow-2xl">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          
          {/* Subtle pattern overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Glow effects removed */}
          
          <div className="relative p-6 lg:p-10 text-center">
            {/* Badge */}
            <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-1.5 hover:bg-white/20">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Limited time offer
            </Badge>
            
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
              Start finding leads today
            </h2>
            
            {/* Description */}
            <p className="text-base text-slate-200 max-w-2xl mx-auto mb-6 leading-relaxed">
              Get access to millions of verified B2B contacts. 
              <span className="font-semibold text-white"> 50 free exports daily</span>, no credit card required.
            </p>
            
            {/* Feature pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              {["No credit card", "Cancel anytime", "95% accuracy"].map((feature) => (
                <div 
                  key={feature}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
                >
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-white">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-12 px-8 text-base bg-white text-slate-900 hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start free trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto h-12 px-8 text-base bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                View pricing
              </Button>
            </div>
            
            {/* Social proof */}
            <div className="flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 border-2 border-slate-800"
                  />
                ))}
              </div>
              <p className="text-sm text-slate-300">
                Join <span className="font-semibold text-white">10,000+</span> sales professionals using LeadFind
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};