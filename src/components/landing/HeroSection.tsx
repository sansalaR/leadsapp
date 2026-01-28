"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Mail, Download, Zap, Search, CheckCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob stagger-2" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-morph" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-32 right-[15%] w-20 h-20 border-2 border-accent/30 rounded-2xl rotate-12 animate-float opacity-60" />
      <div className="absolute top-48 left-[10%] w-16 h-16 bg-accent/20 rounded-full animate-float-delayed" />
      <div className="absolute bottom-32 right-[20%] w-12 h-12 border-2 border-purple-400/30 rounded-lg rotate-45 animate-float-slow" />
      <div className="absolute top-60 right-[30%] w-8 h-8 bg-gradient-to-br from-accent to-purple-500 rounded-full animate-bounce-subtle opacity-60" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-accent/30 mb-8 opacity-0 animate-fade-up shadow-lg">
            <div className="relative">
              <Sparkles className="w-4 h-4 text-accent" />
              <div className="absolute inset-0 animate-ping">
                <Sparkles className="w-4 h-4 text-accent opacity-50" />
              </div>
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
              AI-Powered Lead Generation
            </span>
            <span className="px-2 py-0.5 text-xs font-bold bg-accent/20 text-accent rounded-full">NEW</span>
          </div>
          
          {/* Headline with gradient */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] mb-8 opacity-0 animate-fade-up stagger-1">
            Find Verified Leads with
            <br />
            <span className="text-gradient animate-gradient relative">
              Emails & Phone Numbers
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 12" fill="none">
                <path d="M2 10C100 2 300 2 398 10" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round" className="opacity-50"/>
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="400" y2="0">
                    <stop stopColor="hsl(199 89% 48%)" />
                    <stop offset="1" stopColor="hsl(250 80% 60%)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 opacity-0 animate-fade-up stagger-2 leading-relaxed">
            Access <span className="font-semibold text-foreground">millions of B2B contacts</span> with verified emails and phones. 
            Generate leads with <span className="text-accent font-semibold">AI</span> or search manually — then export to CSV.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-up stagger-3">
            <Button variant="hero" size="xl" className="w-full sm:w-auto group animate-pulse-glow">
              <span>Start Finding Leads</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto group">
              <span>Watch Demo</span>
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center ml-1 group-hover:bg-accent/30 transition-colors">
                <div className="w-0 h-0 border-l-[6px] border-l-accent border-y-[4px] border-y-transparent ml-0.5" />
              </div>
            </Button>
          </div>
          
          {/* Stats with icons */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto opacity-0 animate-fade-up stagger-4">
            {[
              { icon: Users, value: "50M+", label: "Verified Contacts", color: "from-accent to-blue-500" },
              { icon: Mail, value: "95%", label: "Email Accuracy", color: "from-green-400 to-emerald-500" },
              { icon: Download, value: "1M+", label: "Leads Exported", color: "from-purple-400 to-pink-500" },
            ].map((stat, index) => (
              <div key={stat.label} className="group relative p-6 rounded-2xl glass hover-lift cursor-default">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color}`}>
                    <stat.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-foreground">{stat.value}</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating preview card */}
        <div className="mt-20 max-w-4xl mx-auto opacity-0 animate-slide-up stagger-5">
          <div className="relative">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-purple-500/20 to-accent/20 blur-3xl scale-110" />
            
            <div className="relative glass rounded-3xl p-2 shadow-2xl">
              <div className="bg-card rounded-2xl overflow-hidden border border-border/50">
                {/* Browser header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 bg-background rounded-lg text-xs text-muted-foreground font-mono">
                      leadflow.app/search
                    </div>
                  </div>
                </div>
                
                {/* Mock search interface */}
                <div className="p-6">
                  <div className="flex gap-3 mb-6">
                    <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50 border border-border">
                      <Search className="w-5 h-5 text-muted-foreground" />
                      <span className="text-muted-foreground">Search by job title, company, or industry...</span>
                    </div>
                    <button className="px-6 py-3 bg-accent-gradient text-white font-semibold rounded-xl shadow-glow">
                      Search
                    </button>
                  </div>
                  
                  {/* Mock results */}
                  <div className="space-y-3">
                    {[
                      { name: "Sarah Chen", role: "VP of Sales", company: "TechCorp", email: "s.chen@..." },
                      { name: "Michael Roberts", role: "Head of Growth", company: "ScaleUp Inc", email: "m.roberts@..." },
                      { name: "Emily Johnson", role: "Director of BD", company: "StartupXYZ", email: "e.johnson@..." },
                    ].map((lead, i) => (
                      <div 
                        key={lead.name} 
                        className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/50 opacity-0 animate-fade-up"
                        style={{ animationDelay: `${1 + i * 0.15}s` }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center text-white font-bold">
                            {lead.name[0]}
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{lead.name}</div>
                            <div className="text-sm text-muted-foreground">{lead.role} at {lead.company}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1.5 text-sm text-accent">
                            <CheckCircle className="w-4 h-4" />
                            <span>{lead.email}</span>
                          </div>
                          <button className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
                            <Zap className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
