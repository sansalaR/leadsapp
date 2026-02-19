"use client";

import {
  Globe,
  Users,
  Building2,
  Database,
  CheckCircle,
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";

const sources = [
  {
    icon: Globe,
    title: "Public Web",
    description: "Company websites and publicly available professional profiles.",
  },
  {
    icon: Users,
    title: "Professional Networks",
    description: "Aggregated from business directories and professional platforms.",
  },
  {
    icon: Building2,
    title: "Business Registries",
    description: "Official company registrations and corporate filings.",
  },
  {
    icon: Database,
    title: "Verified Partners",
    description: "Third-party data providers with verified B2B contacts.",
  },
];

const stats = [
  { value: "95%+", label: "Email accuracy" },
  { value: "90%+", label: "Phone accuracy" },
  { value: "24h", label: "Data refresh" },
];

export const DataSourcesSection = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Where does the data come from?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We aggregate contact information from multiple trusted sources and verify
              each data point to ensure accuracy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sources.map((source) => (
                <Card key={source.title} className="p-4">
                  <CardContent className="flex gap-3 p-0">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <source.icon className="w-5 h-5 text-blue-700" />
                    </div>

                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        {source.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {source.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <Card className="p-8">
              <CardHeader className="p-0">
                <h3 className="text-xl font-semibold text-foreground">
                  Data quality you can trust
                </h3>
              </CardHeader>

              <CardContent className="p-0">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust badges */}
                <div className="space-y-3">
                  {[
                    "GDPR & CCPA Compliant",
                    "SOC 2 Type II Certified",
                    "Real-time verification",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
