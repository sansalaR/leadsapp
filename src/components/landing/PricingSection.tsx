"use client";

import AnimatedDiv from "@/components/common/fade-in";
import { Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "For individuals getting started with lead generation.",
    features: [
      "200 lead searches/month",
      "50 email lookups",
      "Basic filters",
      "CSV export",
      "Email support",
    ],
    popular: false,
    currentPlan: false,
  },
  {
    name: "Professional",
    price: "$79",
    description: "For growing teams that need more power and integrations.",
    features: [
      "Unlimited searches",
      "500 email lookups",
      "Advanced AI filters",
      "CRM integrations",
      "Team collaboration",
      "Priority support",
    ],
    popular: true,
    currentPlan: false,
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For large organizations with custom needs at scale.",
    features: [
      "Everything in Professional",
      "Unlimited email lookups",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "SSO & security controls",
    ],
    popular: false,
    currentPlan: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="relative overflow-hidden bg-white pt-14 pb-16 lg:pt-20 lg:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/assets/yellow-gradient.png"
          alt=""
          aria-hidden="true"
          className="absolute -left-64 top-6 w-200 max-w-none select-none opacity-80 blur-[2px]"
          draggable={false}
        />
        <img
          src="/assets/Blue%20Gradient%20Image%20(2).png"
          alt=""
          aria-hidden="true"
          className="absolute -left-54 top-56 w-200 max-w-none select-none opacity-70 blur-[2px]"
          draggable={false}
        />
        <img
          src="/assets/Green%20Gradient%20Image%20(1).png"
          alt=""
          aria-hidden="true"
          className="absolute -right-64 top-6 w-200 max-w-none select-none opacity-65 blur-[2px]"
          draggable={false}
        />
      </div>

      <div className="container relative mx-auto px-6 max-w-6xl">
        <div className="mx-auto max-w-3xl text-center relative">
          <img
            src="/assets/3-line.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-1 -top-15 hidden w-44 -translate-x-1/2 select-none md:block"
            draggable={false}
          />
          <AnimatedDiv>
            <h2 className="text-balance font-sans text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-black sm:text-6xl">
              Simple, transparent <span className="font-serif italic">pricing</span>
            </h2>
          </AnimatedDiv>
          <AnimatedDiv delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-black/70 sm:text-lg max-w-2xl mx-auto">
              Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
          </AnimatedDiv>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3 items-stretch">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;
            return (
              <AnimatedDiv key={plan.name} delay={0.12 * (index + 1)} className="h-full">
                <div
                  className={
                    "group relative h-full overflow-hidden rounded-2xl ring-1 transition-all duration-300 hover:-translate-y-0.5 " +
                    (isPopular
                      ? "bg-neutral-950 text-white ring-white/10 shadow-lg shadow-black/10"
                      : "bg-white text-gray-900 ring-black/5 shadow-sm")
                  }
                >
                  {isPopular && (
                    <div className="absolute left-1/2 top-4 -translate-x-1/2">
                      <Badge className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                        <Star className="h-3 w-3 fill-white" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className={"p-7 flex h-full flex-col " + (isPopular ? "pt-14" : "")}> 
                    <h3 className={"text-lg font-semibold text-center " + (isPopular ? "text-white" : "text-gray-900")}>
                      {plan.name}
                    </h3>

                    <div className="mt-3 flex items-baseline justify-center gap-2">
                      <span className={"text-4xl font-semibold tracking-tight " + (isPopular ? "text-white" : "text-gray-900")}>
                        {plan.price}
                      </span>
                      <span className={isPopular ? "text-white/60 text-sm" : "text-gray-500 text-sm"}>
                        per month
                      </span>
                    </div>

                    <p className={"mt-3 text-sm text-center leading-relaxed " + (isPopular ? "text-white/70" : "text-gray-600")}>
                      {plan.description}
                    </p>

                    <div className={"mt-6 h-px w-full " + (isPopular ? "bg-white/10" : "bg-black/5")} />

                    <ul className="mt-6 space-y-3 flex-1">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className={
                            "flex items-start gap-3 text-sm " +
                            (isPopular ? "text-white/80" : "text-gray-700")
                          }
                        >
                          <Zap
                            className={
                              "mt-0.5 h-4 w-4 shrink-0 " +
                              (isPopular ? "text-lime-300" : "text-emerald-600")
                            }
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      {plan.currentPlan ? (
                        <p className={"text-center text-sm font-medium " + (isPopular ? "text-white/70" : "text-gray-500")}>
                          Current Plan
                        </p>
                      ) : (
                        <Button
                          variant={isPopular ? "default" : "outline"}
                          className={
                            "w-full h-11 rounded-xl text-sm font-semibold " +
                            (isPopular
                              ? "bg-lime-400 text-black hover:bg-lime-300"
                              : "")
                          }
                        >
                          Select Plan
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
};