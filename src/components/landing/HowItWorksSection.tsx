"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import AnimatedDiv from "../common/fade-in";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

const steps = [
  {
    step: "1",
    title: "Search or describe",
    description: "Use filters to search manually, or describe your ideal customer and let AI find matches.",
    image: "/assets/step-search3.png",
    bgColor: "#cffafe", // indigo-100
  },
  {
    step: "2", 
    title: "We aggregate data",
    description: "Our system pulls from public sources, professional networks, and verified databases.",
    image: "/assets/step-ag.jpg",
    bgColor: "#dbeafe", // blue-100
  },
  {
    step: "3",
    title: "Real-time verification",
    description: "Every email and phone number is verified before you see it. No bounces, no wasted time.",
    image: "/assets/step-verify.jpg",
    bgColor: "#e0f2fe", // sky-100
  },
  {
    step: "4",
    title: "Export & outreach",
    description: "Download as CSV or sync directly to your CRM. Start your outreach in minutes.",
    image: "/assets/step-export.jpg",
    bgColor: "#e0e7ff", // light-blue/cyan-100
  },
];

export const HowItWorksSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const lastCardRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!titleRef.current || !lastCardRef.current) return;

      const titleRect = titleRef.current.getBoundingClientRect();
      const lastCardRect = lastCardRef.current.getBoundingClientRect();
      
      // Start fading much earlier to prevent overlap
      const buffer = 150; 
      const triggerPoint = titleRect.bottom + buffer;
      
      if (lastCardRect.top <= triggerPoint) {
        // Calculate progress of the overlap (0 to 1)
        const overlapDistance = triggerPoint - lastCardRect.top;
        const maxOverlap = titleRect.height + buffer;
        const progress = Math.min(overlapDistance / maxOverlap, 1);
        
        // Apply smooth transforms based on progress - fade faster
        titleRef.current.style.transform = `translateY(-${progress * 100}%)`;
        titleRef.current.style.opacity = `${Math.max(1 - progress * 1.5, 0)}`;
      } else {
        titleRef.current.style.transform = 'translateY(0)';
        titleRef.current.style.opacity = '1';
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="how-it-works"
      className={`w-full px-6 pt-20 pb-10 relative z-0 min-h-screen flex flex-col items-center justify-start bg-white ${jakarta.className}`}
    >
      {/* Sticky Title */}
      <div 
        ref={titleRef}
        className="w-full sticky top-[10vh] z-30 bg-white pb-6 pt-4 transition-all duration-100 ease-out"
      >
        <AnimatedDiv>
          <div className="max-w-3xl text-center mx-auto">
            <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-6">
              How LeadFlow Works?
            </h2>
            <p className="text-base text-slate-600">
              From search to outreach in four simple steps.
            </p>
          </div>
        </AnimatedDiv>
      </div>

      {/* Cards Section */}
      <ul className="list-none grid grid-cols-1 w-full max-w-3xl md:max-w-4xl gap-16 mt-4">
        {steps.map((step, idx) => (
          <li 
            key={idx} 
            ref={idx === steps.length - 1 ? lastCardRef : null}
            className="sticky top-[12rem] z-10"
          >
            <div
              className="relative h-auto md:h-[28rem] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 pl-6 md:pl-10 pt-6 md:pt-10 pr-6 md:pr-10 pb-6 md:pb-10 flex flex-col md:flex-row items-center justify-between overflow-hidden transition-all"
            >
              {/* Large Background Number */}
              <div className="absolute md:top-[-3rem] top-[-1rem] md:left-[-1.5rem] left-[-1rem] md:text-[12rem] text-[5rem] font-bold select-none pointer-events-none">
                <p style={{ color: step.bgColor, opacity: 0.8 }}>0{step.step}</p>
              </div>
              
              {/* Text Content */}
              <div className="md:w-5/12 w-full text-center md:text-left space-y-3 pr-6 md:pr-6 relative z-10 mt-10 md:mt-0">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">{step.description}</p>
              </div>
              
              {/* Image Content */}
              <div className="md:w-7/12 w-full mt-8 md:mt-0 flex justify-end relative z-10 h-full">
                <div 
                  className="w-full h-full pt-6 pl-6 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-xl flex items-end justify-end overflow-hidden" 
                  style={{ backgroundColor: step.bgColor }}
                >
                  <div className="w-full h-full relative rounded-tl-xl overflow-hidden shadow-sm border-t border-l border-white/50 bg-white flex items-center justify-center min-h-[200px] translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4">
                    <Image 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover"
                      width={800} 
                      height={500} 
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Optional space after last card */}
      <div className="h-[9vh]" />
    </section>
  );
};