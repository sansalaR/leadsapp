"use client";

import { Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const exportFields = [
  { label: "Email address", description: "Work email, verified monthly" },
  { label: "Phone number", description: "Direct line when available" },
  { label: "Work history", description: "Current and past positions" },
  { label: "Company details", description: "Name, size, industry, location" },
  { label: "Education", description: "Schools and degrees" },
  { label: "Skills", description: "Listed professional skills" },
];

export const ExportSection = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <img
        src="/assets/Green%20Gradient%20Image%20(1).png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[70%] bottom-90 w-160 max-w-none -translate-x-1/2 translate-y-1/2 select-none opacity-45 blur-[6px]"
        draggable={false}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="relative">
              <h2 className="text-balance font-sans text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-black sm:text-6xl">
                Export leads in <span className="font-serif italic">one click</span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-black/70 sm:text-lg">
                Download verified leads as CSV or sync directly to your CRM. All contact data included — no hidden fields
                or extra charges.
              </p>

              <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                {exportFields.map((field) => (
                  <li key={field.label} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="text-base font-medium text-black">{field.label}</div>
                      <div className="mt-1 text-sm leading-relaxed text-black/60">{field.description}</div>
                    </div>
                  </li>
                ))}
              </ul>

            </div>

            {/* CSV Preview */}
            <div className="relative">
              <img
                src="/assets/Blue%20Gradient%20Image%20(2).png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -left-60 -top-46 w-200 max-w-none select-none opacity-80 blur-[2px]"
                draggable={false}
              />

              <img
                src="/assets/csvtable2.png"
                alt="CSV export preview"
                className="relative z-10 h-auto w-full lg:scale-105"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
