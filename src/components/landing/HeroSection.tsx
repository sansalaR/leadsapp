"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Play, Star, Chrome, User, MapPin, Building2, Search, Download, Phone, Mail } from "lucide-react";

export const HeroSection = () => {
  const mockLeads = [
  { name: "Sarah Chen", role: "VP of Sales", company: "TechCorp", location: "San Francisco", email: "sarah.c***@techcorp.com", phone: "+1 (415) ***-**42" },
  { name: "Michael Roberts", role: "Head of Growth", company: "ScaleUp Inc", location: "New York", email: "m.robe***@scaleup.io", phone: "+1 (212) ***-**18" },
  { name: "Emma Thompson", role: "Director of BD", company: "CloudBase", location: "Austin", email: "emma.t***@cloudbase.com", phone: "+1 (512) ***-**55" },
  { name: "David Kim", role: "CRO", company: "DataFlow", location: "Seattle", email: "d.kim***@dataflow.co", phone: "+1 (206) ***-**73" },
  { name: "Lisa Anderson", role: "Sales Director", company: "Nexus AI", location: "Boston", email: "l.ande***@nexusai.com", phone: "+1 (617) ***-**91" },
];
  return (
    <section className="relative pt-18 pb-1 lg:pt-26 lg:pb-14 bg-slate-50 dark:bg-slate-950">
      {/* Visible background pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
      />
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <Badge className="mb-8 bg-muted/50 text-muted-foreground px-3 py-1 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Now with AI-powered lead generation
          </Badge>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
            Find verified B2B leads
            <br />
            <span className="text-muted-foreground">with emails & phone numbers</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Access millions of B2B contacts. Search manually or let AI generate targeted leads. Export to CSV and start your outreach today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <Button size="lg" className="w-full sm:w-auto h-12 px-6 text-base">
              Start free trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-6 text-base">
              <Play className="w-4 h-4 mr-2" />
              Watch demo
            </Button>
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-center mb-12 gap-8 sm:gap-12 text-sm">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">50M+</div>
              <div className="text-muted-foreground">Verified contacts</div>
            </div>
            <Separator orientation="vertical" className="h-10" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">95%</div>
              <div className="text-muted-foreground">Email accuracy</div>
            </div>
            <Separator orientation="vertical" className="h-10" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">10K+</div>
              <div className="text-muted-foreground">Active teams</div>
            </div>
          </div>
        </div>

        {/* Product UI Mockup */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-xl border border-border bg-card shadow-2xl shadow-primary/5 overflow-hidden">
            {/* Browser chrome */}
            <div className="h-10 bg-muted/50 border-b border-border flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-amber-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-background border border-border text-xs text-muted-foreground">
                  app.leadflow.io/search
                </div>
              </div>
            </div>

            {/* App interface */}
            <div className="p-4 lg:p-6">
              {/* Search filters */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-border bg-background">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">VP of Sales</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-border bg-background">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">SaaS, Tech</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-border bg-background">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">United States</span>
                </div>
                <Button className="gap-2">
                  <Search className="w-4 h-4" />
                  Search
                </Button>
              </div>

              {/* Results header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-foreground">2,847 results</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">5 selected</span>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-3.5 h-3.5" />
                  Export CSV
                </Button>
              </div>

              {/* Results table */}
              <div className="rounded-lg border border-border overflow-hidden">
                {/* Table header */}
                <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-muted/30 text-xs font-medium text-muted-foreground border-b border-border">
                  <div className="col-span-3">Name & Role</div>
                  <div className="col-span-2">Company</div>
                  <div className="col-span-2 hidden md:block">Location</div>
                  <div className="col-span-3">Email</div>
                  <div className="col-span-2">Phone</div>
                </div>

                {/* Table rows */}
                {mockLeads.map((lead, index) => (
                  <div
                    key={lead.name}
                    className={`grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center ${
                      index < mockLeads.length - 1 ? "border-b border-border" : ""
                    } ${index % 2 === 0 ? "bg-background" : "bg-muted/20"}`}
                  >
                    <div className="col-span-3">
                      <div className="font-medium text-foreground">{lead.name}</div>
                      <div className="text-xs text-muted-foreground">{lead.role}</div>
                    </div>
                    <div className="col-span-2 text-foreground">{lead.company}</div>
                    <div className="col-span-2 hidden md:block text-muted-foreground">{lead.location}</div>
                    <div className="col-span-3 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-primary" />
                      <span className="text-foreground text-xs font-mono">{lead.email}</span>
                    </div>
                    <div className="col-span-2 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-green-500" />
                      <span className="text-foreground text-xs font-mono">{lead.phone}</span>
                    </div>
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
