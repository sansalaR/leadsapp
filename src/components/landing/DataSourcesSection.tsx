"use client";

import React from "react";
import { Database, Globe2, Building2, ShieldCheck } from "lucide-react";
import AnimatedDiv from "@/components/common/fade-in";

const cards = [
  {
    no: "350M",
    prefix: "+",
    title: "Public & Professional\nData Sources",
    Icon: Database,
  },
  {
    no: "50",
    prefix: "+",
    title: "Professional Networks,\nBusiness Platforms & Directories",
    Icon: Globe2,
  },
  {
    no: "95%",
    prefix: "+",
    title: "Business Registries &\nOfficial Company Filings",
    Icon: Building2,
  },
  {
    no: "24h",
    prefix: "",
    title: "Data Providers with\nVerified B2B Contacts",
    Icon: ShieldCheck,
  },
] as const;

const MetricCard = ({
  no,
  prefix,
  title,
  Icon,
  index,
}: {
  no: string;
  prefix: string;
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
  index: number;
}) => {
  return (
    <AnimatedDiv
      delay={(index + 1) * 0.12}
      className="w-full max-w-sm"
    >
      <div className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 px-6 py-6">
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-yellow-500/10 blur-2xl" />
          <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />
        </div>

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-4xl sm:text-5xl font-medium tracking-tight text-white">
              {no}
              {prefix}
            </p>
            <p className="mt-2 whitespace-pre-wrap text-sm sm:text-base font-medium text-white/70">
              {title}
            </p>
          </div>

          <div className="shrink-0 rounded-xl bg-white/10 ring-1 ring-white/10 p-3">
            <Icon className="h-6 w-6 text-white/80" />
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
};

// --- Main Section ---

export const DataSourcesSection = () => {
  return (
    <section className="pt-8 pb-16 lg:pt-10 lg:pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-950 px-6 py-12 sm:px-10 lg:px-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-yellow-500/15 blur-3xl" />
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="absolute -bottom-28 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          </div>

          <div className="relative text-center">
            <AnimatedDiv>
              <h2 className="text-balance font-sans text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl">
                Where does the <span className="font-serif italic">data</span> come from?
              </h2>
            </AnimatedDiv>
            <AnimatedDiv delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg max-w-2xl mx-auto">
                We aggregate contact information from multiple trusted sources and verify
                each data point in real-time to ensure maximum accuracy.
              </p>
            </AnimatedDiv>
          </div>

          <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 place-items-center">
            {cards.map((card, index) => (
              <MetricCard
                key={`${card.no}-${index}`}
                no={card.no}
                prefix={card.prefix}
                title={card.title}
                Icon={card.Icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

