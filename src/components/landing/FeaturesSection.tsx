"use client";
import { ArrowUpRight } from "lucide-react";

export const FeaturesSection = () => {
  // 4 cards like the reference (black CTA tile is separate)
  const featureCards = [
    {
      title: "Smart Search & AI Lead Generation",
      description: "Filter by company, job title, location, industry, or company size, or let AI generate targeted leads automatically.",
      icon: "/assets/searchAi.png",
    },
    {
      title: "Verified Contacts",
      description: "Every email is verified in real-time with 95%+ deliverability, plus access to direct dial numbers.",
      icon: "/assets/verifi.png",
    },
    {
      title: "Rich Profiles",
      description: "View work history, education, skills, and social profiles for better personalization.",
      icon: "/assets/richp.png",
    },
    {
      title: "Easy Export",
      description: "Export leads to CSV and import directly into Salesforce, HubSpot, or any CRM.",
      icon: "/assets/ex.png",
    },
  ];

  return (
    <section id="features" className="relative overflow-hidden py-8 lg:py-12">
      {/* Background gradients (paths kept; you can swap files later) */}
      <img
        src="/assets/yellow-gradient.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-10 w-190 max-w-none select-none opacity-55 blur-[2px]"
        draggable={false}
      />
      <img
        src="/assets/Blue%20Gradient%20Image%20(2).png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-1/2 w-215 max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-45 blur-[2px]"
        draggable={false}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-12 gap-6 lg:gap-8">
              {/* Black CTA tile */}
              <div className="relative col-span-12 overflow-hidden rounded-3xl bg-black p-10 text-white shadow-xl lg:col-span-8">
                <img
                  src="/assets/line3.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1 top-9 w-15 select-none invert"
                  draggable={false}
                />

                <h2 className="mt-4 font-sans text-4xl font-semibold leading-[1.05] sm:text-5xl">
                  Find, verify, and connect
                </h2>
                <p className="mt-2 font-serif text-4xl italic leading-[1.05] text-white/70 sm:text-5xl">
                  all in one place.
                </p>
                <p className="mt-4 text-base leading-relaxed text-white/60">
                  Everything you need to identify, verify, and connect with your ideal customers.
                </p>

                <button
                  type="button"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-lime-300 px-10 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-lime-400"
                >
                  See all features
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              {/* Top-right feature card */}
              <div className="col-span-12 rounded-3xl bg-white p-8 shadow-lg ring-1 ring-black/5 lg:col-span-4">
                <div className="mb-4">
                  <img
                    src={featureCards[0].icon}
                    alt=""
                    aria-hidden="true"
                    className="h-30 w-30 select-none object-contain"
                    draggable={false}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{featureCards[0].title}</h3>
                <p className="mt-4 text-base leading-relaxed text-gray-600">{featureCards[0].description}</p>
              </div>

              {/* Bottom row (3 cards) */}
              {featureCards.slice(1).map((feature) => (
                <div
                  key={feature.title}
                  className="col-span-12 rounded-3xl bg-white p-8 shadow-lg ring-1 ring-black/5 sm:col-span-6 lg:col-span-4"
                >
                  <div className="mb-4">
                    <img
                      src={feature.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-30 w-30 select-none object-contain"
                      draggable={false}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};
