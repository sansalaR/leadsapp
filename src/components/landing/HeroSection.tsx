"use client";

import { Button } from "@/components/ui/button";
import AnimatedDiv from "../common/fade-in";
import { Apple, ArrowUpRight, Chrome, Compass, Flame, Monitor, Terminal } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-background">
      {/* Soft page wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.92) 45%, rgba(255,255,255,0.98) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Corner gradients (like reference) */}
      <img
        src="/assets/yellow-gradient.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-35 top-30 z-0 w-[520px] max-w-none select-none opacity-70 blur-[1px]"
        draggable={false}
      />
      <img
        src="/assets/yellow-gradient.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-10 z-10 w-[420px] max-w-none select-none opacity-60 blur-[1px]"
        draggable={false}
      />
      <img
        src="/assets/Blue%20Gradient%20Image%20(2).png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-35 top-52 z-0 w-[420px] max-w-none select-none opacity-90 blur-[1px]"
        draggable={false}
      />
      <img
        src="/assets/Green%20Gradient%20Image%20(1).png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 bottom-16 w-[860px] max-w-none select-none opacity-65 blur-[1px]"
        draggable={false}
      />

      {/* Doodles */}
      <img
        src="/assets/Burst-pucker-1.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-16 top-[60%] hidden w-22 -translate-y-1/2 select-none md:block"
        draggable={false}
      />
      <img
        src="/assets/doodle.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-17 bottom-60 hidden w-40 select-none md:block"
        draggable={false}
      />
      <img
        src="/assets/3-line.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-45 top-30 hidden w-44 select-none md:block"
        draggable={false}
      />

      <div className="container relative mx-auto px-4 pb-20 pt-36 text-center sm:px-6 lg:px-8 md:pt-48">
        <div className="mx-auto max-w-5xl">
          <AnimatedDiv delay={0.1}>
            <h1 className="font-serif text-[48px] font-bold leading-[0.98] tracking-[-0.02em] text-black sm:text-[64px] md:text-[90px]">
              Find more and <span className="font-light italic">get</span>
              <br />
              <span className="font-light italic">visibility</span> on your leads
            </h1>
          </AnimatedDiv>

          <AnimatedDiv delay={0.2}>
            <p className="mx-auto mt-9 max-w-xl text-xl leading-relaxed text-black md:text-base">
              Discover verified B2B prospects, enrich contact data, and export lead lists in minutes — so your team can
              focus on closing.
            </p>
          </AnimatedDiv>

          <AnimatedDiv delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4">
              <Button
                size="lg"
                className="h-14 rounded-full bg-black px-12 py-4 text-[17px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-black/90"
              >
                <span className="flex items-center gap-2">
                  Try lead search
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Button>

            </div>
          </AnimatedDiv>
        </div>

        {/* Angled tablet image (below copy, like reference) */}
        <AnimatedDiv delay={0.45} className="relative mt-16 mb-8 md:mb-12">
          <div className="relative mx-auto h-[400px] max-w-6xl md:h-[700px]">             {/* Yellow gradient beside tab image */}
             <div className="absolute -left-20 -top-20 z-0 w-[400px] opacity-80 md:-left-30 md:-top-44 md:w-[600px]">
               <img src="/assets/yellow-gradient.png" alt="" className="h-auto w-full select-none" draggable={false} />
             </div>            <div className="absolute left-1/2 top-10 w-[800px] max-w-none -translate-x-1/2 rotate-[-8deg] md:left-[50%] md:top-0 md:w-[1000px]">
              <img
                src="/assets/tabshot.png"
                alt="Product preview"
                className="h-auto w-full select-none drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)]"
                draggable={false}
              />
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};