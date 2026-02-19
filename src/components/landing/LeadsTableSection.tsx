"use client"

import { Button } from "@/components/ui/button"
import {
  User,
  Building2,
  MapPin,
  Search,
  Download,
  Mail,
  Phone,
} from "lucide-react"

export function LeadsTableSection() {
  const mockLeads = [
    {
      name: "Sarah Chen",
      role: "VP of Sales",
      company: "TechCorp",
      location: "San Francisco",
      email: "sarah.c***@techcorp.com",
      phone: "+1 (415) ***-**42",
    },
    {
      name: "Michael Roberts",
      role: "Head of Growth",
      company: "ScaleUp Inc",
      location: "New York",
      email: "m.robe***@scaleup.io",
      phone: "+1 (212) ***-**18",
    },
    {
      name: "Emma Thompson",
      role: "Director of BD",
      company: "CloudBase",
      location: "Austin",
      email: "emma.t***@cloudbase.com",
      phone: "+1 (512) ***-**55",
    },
    {
      name: "David Kim",
      role: "CRO",
      company: "DataFlow",
      location: "Seattle",
      email: "d.kim***@dataflow.co",
      phone: "+1 (206) ***-**73",
    },
    {
      name: "Lisa Anderson",
      role: "Sales Director",
      company: "Nexus AI",
      location: "Boston",
      email: "l.ande***@nexusai.com",
      phone: "+1 (617) ***-**91",
    },
  ]

  return (
    <section className="pb-16 mt-9">
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
              {/* Results table - Desktop */}
              <div className="rounded-lg border border-border overflow-hidden hidden sm:block">
                <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-muted/30 text-xs font-medium text-muted-foreground border-b border-border">
                  <div className="col-span-3">Name & Role</div>
                  <div className="col-span-2">Company</div>
                  <div className="col-span-2 hidden md:block">Location</div>
                  <div className="col-span-3">Email</div>
                  <div className="col-span-2">Phone</div>
                </div>
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

              {/* Results table - Mobile cards */}
              <div className="sm:hidden space-y-3">
                {mockLeads.slice(0, 3).map((lead) => (
                  <div key={lead.name} className="rounded-lg border border-border bg-background p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-foreground text-sm">{lead.name}</div>
                        <div className="text-xs text-muted-foreground">{lead.role}</div>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">{lead.company}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="text-foreground text-xs font-mono truncate">{lead.email}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-green-500 shrink-0" />
                        <span className="text-foreground text-xs font-mono">{lead.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="text-center text-xs text-muted-foreground py-1">+ 2,844 more results</div>
              </div>
            </div>
          </div>
         </div>
    </section>
  )
}
