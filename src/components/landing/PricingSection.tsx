import { Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="pricing" className="relative py-12 overflow-hidden bg-muted/30">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-blue-400 opacity-[0.06] blur-3xl" />

      <div className="container relative mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
           <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-visible rounded-xl transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-blue-600 shadow-lg shadow-blue-100 z-10"
                  : "border border-border bg-card shadow-sm"
              }`}
            >
              {/* Most Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <Badge className="flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-800 to-blue-700 px-3 py-0.5 text-xs font-semibold text-white shadow-sm">
                    <Star className="h-2.5 w-2.5 fill-white" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardContent className={`p-6 flex flex-col h-full ${plan.popular ? "pt-8" : "pt-6"}`}>
                {/* Plan name */}
                <h3 className="text-lg font-bold text-foreground text-center">{plan.name}</h3>

                {/* Price */}
                <div className="mt-2 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">per month</span>
                </div>

                {/* Description */}
                <p className="mt-1.5 text-xs text-muted-foreground text-center leading-relaxed">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mt-5 space-y-2.5 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground">
                      <Zap className="h-3.5 w-3.5 shrink-0 text-blue-500 fill-blue-100" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-6">
                  {plan.currentPlan ? (
                    <p className="text-center text-sm text-muted-foreground font-medium">
                      Current Plan
                    </p>
                  ) : (
                    <Button
                      variant={plan.popular ? "default" : "outline"}
                      className={`w-full h-10 text-sm font-semibold rounded-lg ${
                        plan.popular ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md" : ""
                      }`}
                    >
                      Select Plan
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};