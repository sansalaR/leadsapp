"use client";

import { ArrowRight, Play, Star, Chrome, User, MapPin, Building2, Search, Download, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      className="relative pt-18 pb-1 lg:pt-26 lg:pb-14 overflow-hidden"
      style={{
        /* U-shape gradient: blue rises from both bottom corners, white/clear in center-top */
        background: `
          radial-gradient(ellipse 60% 70% at 0% 100%, #b3d9ff 0%, transparent 70%),
          radial-gradient(ellipse 60% 70% at 100% 100%, #b3d9ff 0%, transparent 70%),
          linear-gradient(
            to top,
            #b3d9ff 0%,
            #e6f3ff 35%,
            #f8fbff 70%,
            #ffffff 100%
        `,
      }}
    >
      {/* Subtle dot/cross grid overlay — kept very faint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2380bfff' fill-opacity='0.20'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 backdrop-blur-sm px-4 py-1.5 text-sm text-slate-500 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-700 shadow-[0_0_8px_2px_rgba(29,78,216,0.6)]" />
            Now with AI-powered lead generation
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.1] tracking-tight mb-6">
            Find verified B2B leads
            <br />
            <span>with</span>
            <span className="italic text-blue-900"> emails & phone numbers</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-lg text-slate-800 max-w-2xl mx-auto mb-6 leading-relaxed px-2">
            Access millions of B2B contacts. Search manually or let AI generate targeted leads. Export to CSV and start your outreach today.
          </p>

           {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <Button size="lg" className="w-full sm:w-auto h-12 px-6 text-base">
              Start free trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="secondary" size="lg" className="text-black w-full sm:w-auto h-12 px-6 text-base">
              <Play className="w-4 h-4 mr-2" />
              Watch demo
            </Button>
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-center mb-12 gap-8 sm:gap-12 text-sm">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">50M+</div>
              <div className="text-slate-500">Verified contacts</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">95%</div>
              <div className="text-slate-500">Email accuracy</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">10K+</div>
              <div className="text-slate-500">Active teams</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};