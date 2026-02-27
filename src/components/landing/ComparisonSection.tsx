"use client";

import { Check, X } from "lucide-react";

export const ComparisonSection = () => {
  return (
    <section id="comparison" className="relative overflow-hidden pt-14 pb-20 sm:pt-16 sm:pb-24">
      {/* Ambient glows */}
      <img
        src="/assets/3-line.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-30 top-65 hidden w-44 select-none md:block"
        draggable={false}
      />
      <img
        src="/assets/yellow-gradient.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-[30%] w-190 max-w-none select-none opacity-55 blur-[2px]"
        draggable={false}
      />
      <img
        src="/assets/Green%20Gradient%20Image%20(1).png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[70%] w-190 max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-65 blur-[1px]"
        draggable={false}
      />
      <img
        src="/assets/Blue%20Gradient%20Image%20(2).png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-[25%] w-190 max-w-none select-none opacity-50 blur-[2px]"
        draggable={false}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-sans text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-black sm:text-6xl">
            Why <span className="font-serif italic">AI Lead Generation</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-black/70 sm:text-lg">
            Choose the approach that fits your workflow. Use database search for specific criteria, or let AI suggest leads based on your ideal customer profile.
          </p>
        </div>

        {/* Cards */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Bottom-left doodle */}
          <img
            src="/assets/bottom-line.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 left-10 hidden w-84 select-none opacity-90 md:block"
            draggable={false}
          />

          {/* Column headers — OUTSIDE the cards */}
          <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
            {/* Left header */}
            <div className="flex items-center justify-center gap-3 lg:justify-center">
              <div className="text-3xl font-semibold tracking-[-0.02em] text-black">AI Lead Generation</div>
            </div>
            {/* Right header */}
            <div className="flex items-center justify-center lg:justify-center">
              <div className="text-3xl font-semibold tracking-[-0.02em] text-black">Lead Search</div>
            </div>
          </div>

          {/* Cards row with VS in between */}
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

            {/* VS green glow + badge — absolutely centered between cards */}
            <div
              className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 lg:block"
              style={{ width: "80px", zIndex: 10 }}
              aria-hidden="true"
            >
              
              {/* VS badge */}
              <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-600 text-base font-bold text-white shadow-lg" style={{ zIndex: 20 }}>
                VS
              </div>
            </div>

            {/* Left card */}
            <div className="rounded-xl bg-white p-10 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-black/60">AI-Powered :</div>
              <ul className="mt-8 space-y-6">
                {[
                  "Describe your ideal customer in plain text",
                  "AI finds similar profiles automatically",
                  "Discover leads you might have missed",
                  "Refine results with feedback",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-green-500 text-green-600">
                      <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <span className="text-lg text-black/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right card */}
            <div className="rounded-xl bg-white p-10 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-black/60">Manual Search :</div>
              <ul className="mt-8 space-y-6">
                {[
                  "Filter by title, company, industry, location",
                  "Boolean search for complex queries",
                  "Preview results before exporting",
                  "Limited exports & integrations",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-red-400 text-red-500">
                      <X className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <span className="text-lg text-black/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};