"use client";

import { Sparkles, ArrowRight, ArrowUpRight, Building2, MapPin, Briefcase } from "lucide-react";
import AnimatedDiv from "../common/fade-in";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const sampleLeads = [
  { name: "Thomas Müller", role: "Founder & CEO", company: "CloudScale GmbH", location: "Berlin" },
  { name: "Anna Schmidt", role: "Co-founder", company: "DataPipe AG", location: "Munich" },
  { name: "Felix Weber", role: "Founder", company: "AIFlow Solutions", location: "Hamburg" },
];

export const AILeadGenSection = () => {
  return (
    <section className="relative overflow-hidden pt-45 pb-12 sm:pt-30 sm:pb-16">
      {/* Soft background glows (re-using existing landing assets) */}
      <img
        src="/assets/yellow-gradient.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 w-190 max-w-none -translate-x-1/2 select-none opacity-45 blur-[2px]"
        draggable={false}
      />
      <img
        src="/assets/Blue%20Gradient%20Image%20(2).png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-1/2 top-1/2 w-215 max-w-none translate-x-1/2 -translate-y-1/2 select-none opacity-35 blur-[2px]"
        draggable={false}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-6xl">
          <AnimatedDiv delay={0.05}>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-balance whitespace-nowrap font-sans text-4xl font-semibold leading-[1.05] text-gray-900 sm:text-5xl lg:text-6xl">
                Describe your ideal customer —
                <br />
                <span className="font-serif italic text-black/60">AI finds the matches.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                Skip manual filtering. Just tell us who you're looking for.
              </p>
            </div>
          </AnimatedDiv>

          {/* Workflow */}
          <div className="mt-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
            {/* AI Prompt Input */}
            <AnimatedDiv delay={0.12} className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl bg-black p-8 text-white shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                    <Sparkles className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">AI Prompt</div>
                    <div className="text-lg font-semibold">Tell us what you want</div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <p className="text-sm leading-relaxed text-white/80">
                    “Find 200 SaaS founders in Germany with 10–50 employees, Series A or bootstrapped”
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-lime-300 px-10 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-lime-400"
                >
                  Generate leads
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </AnimatedDiv>

            {/* AI Processing Indicator */}
            <AnimatedDiv delay={0.18} className="lg:col-span-2">
              <div className="flex flex-col items-center justify-center py-6 lg:py-10">
                <div className="hidden lg:flex items-center gap-3 text-black/60">
                  <div className="h-px w-10 bg-black/15" />
                  <div className="flex gap-1">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-black/70" />
                    <div
                      className="h-2 w-2 animate-pulse rounded-full bg-black/45"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="h-2 w-2 animate-pulse rounded-full bg-black/25"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </div>

                <div className="lg:hidden flex items-center gap-2 text-black/60">
                  <div className="flex flex-col gap-1">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-black/70" />
                    <div className="h-2 w-2 animate-pulse rounded-full bg-black/45" />
                    <div className="h-2 w-2 animate-pulse rounded-full bg-black/25" />
                  </div>
                </div>

                <p className="mt-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-black/45">
                  Analyzing 350M+ profiles
                </p>
              </div>
            </AnimatedDiv>

            {/* Output Leads */}
            <AnimatedDiv delay={0.24} className="lg:col-span-5">
              <div className="space-y-4">
                {sampleLeads.map((lead) => (
                  <div
                    key={lead.name}
                    className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-base font-semibold text-gray-900">{lead.name}</div>
                        <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                          <Briefcase className="h-4 w-4" aria-hidden="true" />
                          {lead.role}
                        </div>
                      </div>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            type="button"
                            className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-green-700"
                          >
                            Verified
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>Verified profile information</TooltipContent>
                      </Tooltip>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" aria-hidden="true" />
                        {lead.company}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {lead.location}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="pt-1 text-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                    + 197 more matches
                  </span>
                </div>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </div>
    </section>
  );
};
