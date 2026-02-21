"use client";
import Lottie from "lottie-react";
import skillsAnimation from "@/animations/skills.json";
import chartAnimation from "@/animations/chart.json";
import schoolAnimation from "@/animations/school.json";
import emailAnimation from "@/animations/email.json";
import phoneAnimation from "@/animations/phone.json";
import caseAnimation from "@/animations/case.json";

const fields = [
  {
    animation: emailAnimation,
    label: "Email address",
    description: "Work email, verified monthly",
    position: "top-[5%] left-[10%]",
    bubblePos: "bottom",
    bgColor: "bg-blue-50",
  },
  {
    animation: phoneAnimation,
    label: "Phone number",
    description: "Direct line when available",
    position: "top-[40%] left-[10%]",
    bubblePos: "bottom",
    bgColor: "bg-blue-100",
  },
  {
    animation: caseAnimation,
    label: "Work history",
    description: "Current and past positions",
    position: "bottom-[20%] left-[32%]",
    bubblePos: "bottom",
    bgColor: "bg-blue-50",
  },
  {
    animation: chartAnimation,
    label: "Company details",
    description: "Name, size, industry, location",
    position: "bottom-[20%] right-[32%]",
    bubblePos: "bottom",
    bgColor: "bg-blue-100",
  },
  {
    animation: schoolAnimation,
    label: "Education",
    description: "Schools and degrees",
    position: "top-[40%] right-[10%]",
    bubblePos: "bottom",
    bgColor: "bg-blue-50",
  },
  {
    animation: skillsAnimation,
    label: "Skills",
    description: "Listed professional skills",
    position: "top-[5%] right-[10%]",
    bubblePos: "bottom",
    bgColor: "bg-blue-100",
  }
];

const renderBubble = (text: string, pos: string, heading: string) => {
  switch (pos) {
    case 'top':
      return (
        <div className="absolute bottom-full mb-4 w-max max-w-[220px] bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-3 text-center z-10">
          <h4 className="text-sm font-semibold text-gray-900 mb-1">{heading}</h4>
          <p className="text-xs text-gray-600">{text}</p>
          <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-gray-200 rotate-45"></div>
        </div>
      );
    case 'bottom':
      return (
        <div className="absolute top-full mt-4 w-max max-w-[220px] bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-3 text-center z-10">
          <h4 className="text-sm font-semibold text-gray-900 mb-1">{heading}</h4>
          <p className="text-xs text-gray-600">{text}</p>
          <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-gray-200 rotate-45"></div>
        </div>
      );
    case 'left':
      return (
        <div className="absolute right-full mr-4 w-max max-w-[220px] bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-3 text-center z-10">
          <h4 className="text-sm font-semibold text-gray-900 mb-1">{heading}</h4>
          <p className="text-xs text-gray-600">{text}</p>
          <div className="absolute -right-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-gray-200 rotate-45"></div>
        </div>
      );
    case 'right':
      return (
        <div className="absolute left-full ml-4 w-max max-w-[220px] bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-3 text-center z-10">
          <h4 className="text-sm font-semibold text-gray-900 mb-1">{heading}</h4>
          <p className="text-xs text-gray-600">{text}</p>
          <div className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white border-b border-l border-gray-200 rotate-45"></div>
        </div>
      );
  }
};

export const LeadDetailsSection = () => {
  return (
    <section className="pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Desktop Layout (U-Shape) */}
        <div className="hidden md:block relative w-full h-[600px]">
          {/* Central Text */}
          <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 text-center w-full max-w-lg z-0">
            <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
              What each lead includes
            </h2>
            <p className="text-lg text-gray-600">
              Every lead record contains structured professional information. 
              Not all fields are available for every contact.
            </p>
          </div>

          {/* Floating Elements */}
          {fields.map((field, index) => (
            <div 
              key={index} 
              className={`absolute flex flex-col items-center justify-center ${field.position}`}
            >
              {renderBubble(field.description, field.bubblePos, field.label)}
              <div className={`w-20 h-20 rounded-full ${field.bgColor} flex items-center justify-center shadow-md overflow-hidden border border-white hover:scale-105 transition-transform duration-300`}>
                <Lottie 
                  animationData={field.animation} 
                  loop 
                  autoplay 
                  className="w-12 h-12" 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout (Stacked) */}
        <div className="md:hidden flex flex-col items-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal text-gray-900 mb-4">
              What each lead includes
            </h2>
            <p className="text-base text-gray-600">
              Every lead record contains structured professional information. 
              Not all fields are available for every contact.
            </p>
          </div>

          <div className="flex flex-col gap-12 w-full max-w-sm">
            {fields.map((field, index) => (
              <div key={index} className="flex flex-col items-center relative">
                <div className={`w-20 h-20 rounded-full ${field.bgColor} flex items-center justify-center shadow-md overflow-hidden border border-white mb-4`}>
                  <Lottie 
                    animationData={field.animation} 
                    loop 
                    autoplay 
                    className="w-12 h-12" 
                  />
                </div>
                <div className="bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-3 text-center relative w-full">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">{field.label}</h4>
                  <p className="text-xs text-gray-600">{field.description}</p>
                  <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-gray-200 rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};