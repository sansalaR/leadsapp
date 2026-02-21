"use client";

import { Sparkles, ArrowRight, Building2, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const sampleLeads = [
  { name: "Thomas Müller", role: "Founder & CEO", company: "CloudScale GmbH", location: "Berlin" },
  { name: "Anna Schmidt", role: "Co-founder", company: "DataPipe AG", location: "Munich" },
  { name: "Felix Weber", role: "Founder", company: "AIFlow Solutions", location: "Hamburg" },
];

export const AILeadGenSection = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
            Describe your ideal customer, <br className="hidden sm:block" />
            AI finds the matches
          </h2>
          <p className="text-lg text-muted-foreground">
            Skip manual filtering. Just tell us who you're looking for.
          </p>
        </div>

        {/* Workflow Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            {/* AI Prompt Input */}
            <div className="lg:col-span-1">
              <div className="p-1 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5">
                <Card className="p-5 border-border">
                  <CardHeader className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <CardTitle className="text-sm font-medium">AI Prompt</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 rounded-lg bg-muted/50 border border-border">
                    <p className="text-sm text-foreground leading-relaxed">
                      "Find 200 SaaS founders in Germany with 10-50 employees, Series A or bootstrapped"
                    </p>
                  </CardContent>
                  <Button className="w-full mt-4 gap-2" size="sm">
                    <Sparkles className="w-4 h-4" />
                    Generate Leads
                  </Button>
                </Card>
              </div>
            </div>

            {/* AI Processing Indicator */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center py-8">
              <div className="hidden lg:flex items-center gap-2 text-muted-foreground">
                <div className="h-px w-8 bg-border" />
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: "0.4s" }} />
                </div>
                <ArrowRight className="w-5 h-5" />
              </div>
              <div className="lg:hidden flex items-center gap-2 text-muted-foreground">
                <div className="flex flex-col gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                AI analyzing 350M+ profiles...
              </p>
            </div>

            {/* Output Leads */}
            <div className="lg:col-span-1 space-y-3">
              {sampleLeads.map((lead, index) => (
                <Card
                  key={lead.name}
                  className="hover:border-primary/30 hover:shadow-md transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-medium text-foreground">{lead.name}</div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Briefcase className="w-3 h-3" />
                        {lead.role}
                      </div>
                    </div>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 text-xs font-medium cursor-pointer">
                          Verified
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        Verified profile information
                      </TooltipContent>
                    </Tooltip>
                  </CardHeader>
                  <CardContent className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      {lead.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {lead.location}
                    </span>
                  </CardContent>
                </Card>
              ))}
              <div className="text-center">
                <span className="text-sm text-muted-foreground">+ 197 more matches</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
