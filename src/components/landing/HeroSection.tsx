"use client";

import { ArrowRight, Play, Star, Chrome, User, MapPin, Building2, Search, Download, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedDiv from "../common/fade-in";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const HeroSection = () => {
  const mockLeads = [
    { name: "Sarah Chen", role: "VP of Sales", company: "TechCorp", location: "San Francisco", email: "sarah.c***@techcorp.com", phone: "+1 (415) ***-**42" },
    { name: "Michael Roberts", role: "Head of Growth", company: "ScaleUp Inc", location: "New York", email: "m.robe***@scaleup.io", phone: "+1 (212) ***-**18" },
    { name: "Emma Thompson", role: "Director of BD", company: "CloudBase", location: "Austin", email: "emma.t***@cloudbase.com", phone: "+1 (512) ***-**55" },
    { name: "David Kim", role: "CRO", company: "DataFlow", location: "Seattle", email: "d.kim***@dataflow.co", phone: "+1 (206) ***-**73" },
    { name: "Lisa Anderson", role: "Sales Director", company: "Nexus AI", location: "Boston", email: "l.ande***@nexusai.com", phone: "+1 (617) ***-**91" },
  ];

  return (
    <section
      id="hero"
      className="w-full flex flex-col items-center pt-[10rem] pb-10 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto relative">

          {/* Center circle gradient - positioned exactly behind the text */}
          <div 
            className="absolute top-[70%] left-[10%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none -z-10"
            style={{
              background: 'radial-gradient(circle, rgba(147, 197, 253, 0.8) 0%, rgba(255, 255, 255, 0) 70%)',
              filter: 'blur(60px)'
            }}
          />

          {/* Headline */}
          <AnimatedDiv delay={0.1}>
            <h1 className={`mb-6 md:text-5xl text-4xl font-bold text-slate-900 leading-[1.2] tracking-tight relative mt-0 ${jakarta.className}`}>
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Find. Connect. Close.
              </span>
              <br />
              10x Faster — With AI Lead Gen.
            </h1>
          </AnimatedDiv>

          {/* Subheadline */}
          <AnimatedDiv delay={0.2}>
            <p className={`mb-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2 !mt-0 ${jakarta.className}`}>
              Forget spending hours searching for contacts. LeadFlow takes the heavy lifting off your plate so you can focus on closing deals.
            </p>
          </AnimatedDiv>

           {/* CTA Buttons */}
          <AnimatedDiv delay={0.3}>
            <div className="mb-16 mx-auto w-full max-w-md flex md:flex-row flex-col justify-center items-center gap-3 px-4">
              <Button size="lg" className="w-full md:w-auto rounded-md bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 text-base font-medium text-white shadow-lg shadow-blue-500/30">
                Start free trial
              </Button>
              <Button variant="outline" size="lg" className="w-full md:w-auto rounded-md bg-white hover:bg-blue-50 text-blue-600 border border-blue-600 transition-colors px-6 py-3 text-base font-medium">
                Watch Demo
              </Button>
            </div>
          </AnimatedDiv>

        </div>
      </div>

      {/* Image Section */}
      <AnimatedDiv delay={0.4} className="w-full mt-4">
        <div className="relative w-full overflow-hidden bg-white/50 backdrop-blur-sm">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
            <img 
              src="/assets/b.png" 
              alt="Dashboard Preview Background" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 w-[90%] max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-md p-2">
              <div className="rounded-xl overflow-hidden border border-white/30 bg-white/50 relative aspect-[16/9] flex items-center justify-center">
                <img 
                  src="/assets/img.png" 
                  alt="Dashboard Preview" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedDiv>
    </section>
  );
};