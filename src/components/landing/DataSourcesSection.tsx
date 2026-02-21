"use client";

import Image from "next/image";
import {
  Globe,
  Users,
  Building2,
  Database,
  CheckCircle,
} from "lucide-react";

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
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Source Cards */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-6">
              Where does the data come from?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We aggregate contact information from multiple trusted sources and verify
              each data point in real-time to ensure maximum accuracy.
            </p>

            <div className="space-y-2">
              {sources.map((source) => (
                <div 
                  key={source.title} 
                  className="group relative flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500 border border-transparent hover:border-gray-100"
                >
                  {/* Animated left accent */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-blue-500 rounded-r-full transition-all duration-500 group-hover:h-3/4 opacity-0 group-hover:opacity-100" />

                  <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-500">
                    <source.icon className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors duration-500" />
                  </div>
                  
                  <div className="flex-1 pt-0.5">
                    <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {source.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {source.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image & Stats Overlay */}
          <div className="relative rounded-3xl overflow-hidden h-[500px] lg:h-[600px] shadow-2xl group">
            <Image 
              src="/assets/datanet.jpg" 
              alt="Data Network" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
            
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
              {/* Glassmorphism Stats Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 text-white transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                  Data quality you can trust
                </h3>
                
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-white/20">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {[
                    "GDPR & CCPA Compliant",
                    "SOC 2 Type II Certified",
                    "Real-time email verification",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                      <span className="text-sm sm:text-base text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
