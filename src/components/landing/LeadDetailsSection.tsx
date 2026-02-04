"use client";
import { Mail, Phone, Briefcase, GraduationCap, Award, Building, Check, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fields = [
  {
    icon: Mail,
    label: "Email address",
    description: "Work email, verified monthly",
    availability: "95%",
    gradient: "from-slate-500/10 to-gray-500/10",
    iconBg: "bg-slate-500/10",
    iconColor: "text-slate-700 dark:text-slate-300"
  },
  {
    icon: Phone,
    label: "Phone number",
    description: "Direct line when available",
    availability: "70%",
    gradient: "from-zinc-500/10 to-neutral-500/10",
    iconBg: "bg-zinc-500/10",
    iconColor: "text-zinc-700 dark:text-zinc-300"
  },
  {
    icon: Briefcase,
    label: "Work history",
    description: "Current and past positions",
    availability: "90%",
    gradient: "from-gray-500/10 to-slate-500/10",
    iconBg: "bg-gray-500/10",
    iconColor: "text-gray-700 dark:text-gray-300"
  },
  {
    icon: Building,
    label: "Company details",
    description: "Name, size, industry, location",
    availability: "98%",
    gradient: "from-neutral-500/10 to-stone-500/10",
    iconBg: "bg-neutral-500/10",
    iconColor: "text-neutral-700 dark:text-neutral-300"
  },
  {
    icon: GraduationCap,
    label: "Education",
    description: "Schools and degrees",
    availability: "85%",
    gradient: "from-stone-500/10 to-gray-500/10",
    iconBg: "bg-stone-500/10",
    iconColor: "text-stone-700 dark:text-stone-300"
  },
  {
    icon: Award,
    label: "Skills",
    description: "Listed professional skills",
    availability: "80%",
    gradient: "from-slate-600/10 to-zinc-500/10",
    iconBg: "bg-slate-600/10",
    iconColor: "text-slate-700 dark:text-slate-300"
  }
];

export const LeadDetailsSection = () => {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What each lead includes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every lead record contains structured professional information. 
            Not all fields are available for every contact.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {fields.map((field, index) => (
            <Card 
              key={field.label}
              className="group relative overflow-hidden border-border hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${field.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <CardContent className="p-6 relative">
                <div className="flex items-start gap-4">
                  {/* Icon with glow effect */}
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl ${field.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                      <field.icon className={`w-6 h-6 ${field.iconColor}`} />
                    </div>
                    {/* Icon glow */}
                    <div className={`absolute inset-0 rounded-xl ${field.iconBg} blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground group-hover:text-foreground transition-colors">
                        {field.label}
                      </h3>
                      <Badge 
                        variant="secondary" 
                        className="text-xs font-medium shrink-0"
                      >
                        {field.availability}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {field.description}
                    </p>
                    
                    {/* Check indicator on hover */}
                    <div className="flex items-center gap-1.5 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Check className={`w-3.5 h-3.5 ${field.iconColor}`} />
                      <span className={`text-xs font-medium ${field.iconColor}`}>
                        Verified data
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${field.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};