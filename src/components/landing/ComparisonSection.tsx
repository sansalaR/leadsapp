"use client";

import { Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ComparisonSection = () => {
  return (
    <section id="features" className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
            Lead Search vs AI Lead Generation
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Choose the approach that fits your workflow. Use database search for specific criteria, 
            or let AI suggest leads based on your ideal customer profile.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">

          {/* Manual Lead Search */}
          <Card className="border border-border rounded-lg p-6 sm:p-8 bg-card">
            <div className="mb-4">
              <Badge variant="secondary" className="px-3 py-1 rounded-full text-sm">
                Manual Search
              </Badge>
            </div>
            <h3 className="text-xl font-medium -mt-4">Lead Search</h3>
            <p className="text-muted-foreground -mt-3">
              Search our database using filters like job title, company, location, 
              industry, and company size.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Filter by title, company, industry, location</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Boolean search for complex queries</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Preview results before exporting</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Save searches for later</span>
              </li>
            </ul>
          </Card>

          {/* AI Lead Generation */}
          <Card className="border-2 border-primary rounded-lg p-8 bg-card relative">
            {/* Recommended Badge */}
            <div className="absolute -top-3 left-6">
              <Badge className="px-3 py-1 text-xs">
                Recommended
              </Badge>
            </div>

            <div className="mt-2">
              <Badge variant="secondary" className="px-3 py-1 rounded-full text-sm">
                AI-Powered
              </Badge>
            </div>
            <h3 className="text-xl font-medium">AI Lead Generation</h3>
            <p className="text-muted-foreground -mt-3">
              Describe your ideal customer in plain language. Our AI finds matching 
              profiles automatically.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Describe your ideal customer in plain text</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>AI finds similar profiles automatically</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Discover leads you might have missed</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Refine results with feedback</span>
              </li>
            </ul>
          </Card>

        </div>
      </div>
    </section>
  );
};
