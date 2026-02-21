"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Search, Star, Mail, Phone, Briefcase, Download } from "lucide-react";

type Feature = {
  title: string;
  description: string;
  image1: string;
  image2: string;
  bg: string;
  blur: string;
  icon: React.ElementType;
};

const features: Feature[] = [
  {
    title: "Smart Search",
    description: "Filter by company, job title, location, industry, or company size to find exactly who you need.",
    image1: "/assets/image1-aaa.jpg",
    image2: "/assets/image1.jpg",
    bg: "bg-blue-50",
    blur: "hover:shadow-[0px_0px_30px_10px_rgba(59,130,246,0.3)]",
    icon: Search,
  },
  {
    title: "AI Lead Generation",
    description: "Describe your ideal customer and let AI generate a targeted list of prospects automatically.",
    image1: "/assets/image2b.png",
    image2: "/assets/image2aa.png",
    bg: "bg-blue-100",
    blur: "hover:shadow-[0px_0px_30px_10px_rgba(59,130,246,0.3)]",
    icon: Star,
  },
  {
    title: "Verified Emails",
    description: "Every email is verified in real-time with 95%+ deliverability guarantee.",
    image1: "/assets/image3b2.png",
    image2: "/assets/image3b1.jpg",
    bg: "bg-blue-50",
    blur: "hover:shadow-[0px_0px_30px_10px_rgba(59,130,246,0.3)]",
    icon: Mail,
  },
  {
    title: "Direct Dial Numbers",
    description: "Access mobile and direct dial numbers to connect with decision-makers faster.",
    image1: "/assets/image4a.jpg",
    image2: "/assets/image4.jpg",
    bg: "bg-blue-100",
    blur: "hover:shadow-[0px_0px_30px_10px_rgba(59,130,246,0.3)]",
    icon: Phone,
  },
  {
    title: "Rich Profiles",
    description: "View work history, education, skills, and social profiles for better personalization.",
    image1: "/assets/image5a.jpg",
    image2: "/assets/image5.jpg",
    bg: "bg-blue-50",
    blur: "hover:shadow-[0px_0px_30px_10px_rgba(59,130,246,0.3)]",
    icon: Briefcase,
  },
  {
    title: "CSV Export",
    description: "Export leads to CSV and import directly into Salesforce, HubSpot, or any CRM.",
    image1: "/assets/image6.jpg",
    image2: "/assets/image6a.jpg",
    bg: "bg-blue-100",
    blur: "hover:shadow-[0px_0px_30px_10px_rgba(59,130,246,0.3)]",
    icon: Download,
  },
];

export const FeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
         <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
            Everything you need to build your pipeline
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features to help you find, verify, and export B2B leads at scale.
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              tabIndex={0}
              className={`group relative rounded-2xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 cursor-pointer focus:outline-none ${feature.bg} ${feature.blur} ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{
                animationDelay: inView ? `${index * 0.15}s` : "0s",
              }}
            >
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <div className="mt-6 relative flex justify-center items-end h-48 z-10 w-full">
                <div className="relative w-full max-w-[260px] h-full flex justify-center">
                  {/* Back Image (Left) */}
                  <div className="absolute bottom-0 -rotate-6 transition-transform duration-500 group-hover:-rotate-12 group-focus:-rotate-12 group-hover:-translate-x-6 group-focus:-translate-x-6 group-hover:-translate-y-4 group-focus:-translate-y-4 origin-bottom-right z-0">
                    <Image
                      src={feature.image1}
                      alt={`${feature.title} back`}
                      width={220}
                      height={160}
                      className="rounded-xl shadow-md w-[220px] h-[160px] object-cover"
                    />
                    {/* Floating Icon Left */}
                    <div className="absolute -top-4 -left-4 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0">
                      <feature.icon className="w-5 h-5 text-blue-500" />
                    </div>
                  </div>
                  
                  {/* Front Image (Right) */}
                  <div className="absolute bottom-[-10px] rotate-6 transition-transform duration-500 group-hover:rotate-12 group-focus:rotate-12 group-hover:translate-x-6 group-focus:translate-x-6 group-hover:-translate-y-4 group-focus:-translate-y-4 origin-bottom-left z-10">
                    <Image
                      src={feature.image2}
                      alt={`${feature.title} front`}
                      width={220}
                      height={160}
                      className="rounded-xl shadow-xl w-[220px] h-[160px] object-cover"
                    />
                    {/* Floating Icon Right */}
                    <div className="absolute -top-4 -right-4 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-500 delay-200 translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0">
                      <feature.icon className="w-5 h-5 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
