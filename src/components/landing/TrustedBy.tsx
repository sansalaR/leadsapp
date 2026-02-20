// "use client";
// import { useEffect, useRef } from "react";
// import { Sparkles } from "lucide-react";

// export const TrustedBy = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const companies = [
//     { name: "Salesforce", size: "Enterprise" },
//     { name: "HubSpot", size: "Scale-up" },
//     { name: "Zendesk", size: "Enterprise" },
//     { name: "Stripe", size: "Scale-up" },
//     { name: "Slack", size: "Enterprise" },
//     { name: "Shopify", size: "Enterprise" },
//     { name: "Notion", size: "Scale-up" },
//     { name: "Figma", size: "Scale-up" },
//   ];

//   // Triple the array for seamless loop
//   const allCompanies = [...companies, ...companies, ...companies];

//   return (
//     <section className="py-15 border-y border-border/50 relative overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
//         <div className="text-center space-y-3">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-2">
//             <Sparkles className="w-3.5 h-3.5 text-primary" />
//             <span className="text-xs font-medium text-primary">Trusted by industry leaders</span>
//           </div>
//           <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
//             Join <span className="text-foreground font-semibold">10,000+ sales teams</span> at leading companies who trust our platform to generate high-quality leads
//           </p>
//         </div>
//       </div>
      
     

//       <style>{`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(calc(-100% / 3)); }
//         }
        
//         .animate-scroll:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </section>
//   );
// };

//not in use