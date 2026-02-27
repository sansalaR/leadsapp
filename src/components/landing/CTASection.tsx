"use client";
import { ArrowRight, Check, Chrome, Monitor, Smartphone } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="pricing" className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-neutral-950 px-10 py-16 sm:px-14 sm:py-18 lg:px-20 lg:py-20">

            {/* Background gradients */}
            <div className="pointer-events-none absolute inset-0">
              <img
                src="/assets/Green%20Gradient%20Image%20(1).png"
                alt=""
                aria-hidden="true"
                className="absolute -right-72 -top-40 w-180 max-w-none select-none opacity-55 blur-[2px]"
                draggable={false}
              />
              <img
                src="/assets/Blue%20Gradient%20Image%20(2).png"
                alt=""
                aria-hidden="true"
                className="absolute -right-12 top-20 w-120 max-w-none select-none opacity-65 blur-[2px]"
                draggable={false}
              />
              <img
                src="/assets/doodle.svg"
                alt=""
                aria-hidden="true"
                className="absolute right-50 top-16 hidden w-28 select-none opacity-90 invert lg:block"
                draggable={false}
              />
            </div>

            <div className="relative">

              {/* Heading */}
              <h2 className="text-balance font-sans text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl">
                Start finding leads today.
                <span className="mt-3 block font-light italic text-white/60">
                  Get access to millions of verified B2B contacts.
                </span>
              </h2>

              {/* Buttons row */}
              <div className="mt-10 flex w-full flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-start">
                <button
                  type="button"
                  className="inline-flex items-center gap-3 rounded-full bg-lime-300 px-10 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-lime-400"
                >
                  VIEW PRICING
                  <ArrowRight className="h-4 w-4" />
                </button>

                <div className="hidden items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 sm:inline-flex">
                  <span className="h-2 w-2 rounded-full bg-lime-300" aria-hidden="true" />
                  Instant access
                </div>
              </div>

              {/* OS / Browser row */}
              <div className="mt-6 flex flex-wrap items-center gap-6 text-white/70">
                <div className="flex items-center gap-3">
                  <Monitor className="h-5 w-5 text-white" aria-hidden="true" />
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white">macOS</span>
                    <span className="text-xs text-white/40">·</span>
                    <span className="text-xs font-semibold text-white">WINDOWS</span>
                    <span className="text-xs text-white/40">·</span>
                    <span className="text-xs font-semibold text-white">LINUX</span>
                  </div>
                </div>

                <div className="hidden h-6 w-px bg-white/15 sm:block" />

                <div className="flex items-center gap-3">
                  <Chrome className="h-5 w-5 text-white" aria-hidden="true" />
                  <span className="text-xs font-semibold text-white">CHROME, SAFARI, &amp; FIREFOX</span>
                </div>

                <div className="hidden h-6 w-px bg-white/15 sm:block" />

                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-white" aria-hidden="true" />
                  <span className="text-xs font-semibold text-white">MOBILE FRIENDLY</span>
                </div>
              </div>

              {/* Feature pills */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
                {[
                  "No credit card required",
                  "Cancel anytime",
                  "95% accuracy",
                  "50 free exports daily",
                ].map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 ring-1 ring-white/15"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                      <Check className="h-4 w-4 text-white" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-white/80">{item}</span>
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