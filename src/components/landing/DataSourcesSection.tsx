"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Building2, Database } from "lucide-react";
import AnimatedDiv from "@/components/common/fade-in";

// --- Previews ---

const PostPerMonth = ({ active }: { active?: boolean }) => {
  return (
    <div className="size-full flex flex-col items-center justify-center overflow-visible">
      <div className="w-[40%] relative *:transition-all *:shadow-xl *:ease-in *:duration-400 *:rounded-md *:overflow-hidden">
        <div className={cn(
          'absolute w-full aspect-square bg-gray-200',
          'rotate-[20deg]',
          (active ? 'translate-y-[-35%] translate-x-[15%] rotate-[30deg]' : ''),
          'group-hover:translate-y-[-35%] group-hover:translate-x-[15%] group-hover:rotate-[30deg]'
        )}>
          <Image fill alt="" src={'/assets/datanet.jpg'} className="object-cover" />
        </div>
        <div className={cn(
          'absolute w-full aspect-square bg-gray-300',
          'rotate-[-20deg]',
          (active ? 'translate-y-[-35%] translate-x-[-15%] rotate-[-30deg]' : ''),
          'group-hover:translate-y-[-35%] group-hover:translate-x-[-15%] group-hover:rotate-[-30deg]'
        )}>
          <Image fill alt="" src={'/assets/usecase3b.jpg'} className="object-cover" />
        </div>
        <div className={cn(
          'absolute w-full aspect-square bg-gray-100',
          (active ? 'translate-y-[-45%]' : 'translate-y-[30%]'),
          'group-hover:translate-y-[-45%]'
        )}>
          <Image fill alt="" src={'/assets/card2.jpg'} className="object-cover" />
        </div>
        <div className={cn(
          'absolute w-full aspect-square bg-gray-200',
          'rotate-[20deg]',
          (active ? 'translate-y-[-10%] translate-x-0 rotate-[23deg]' : 'translate-y-[-25%] translate-x-[10%]'),
          'group-hover:translate-y-[-10%] group-hover:translate-x-0 group-hover:rotate-[23deg]'
        )}>
          <Image fill alt="" src={'/assets/card2a.jpg'} className="object-cover" />
        </div>
        <div className={cn(
          'absolute w-full aspect-square bg-white',
          'rotate-[-20deg]',
          (active ? 'translate-y-[-10%] translate-x-0 rotate-[-23deg]' : 'translate-y-[-25%] translate-x-[-10%]'),
          'group-hover:translate-y-[-10%] group-hover:translate-x-0 group-hover:rotate-[-23deg]'
        )}>
          <Image fill alt="" src={'/assets/card1a.jpg'} className="object-cover" />
        </div>
      </div>
    </div>
  );
};

const SocialMediaPlatforms = ({ active }: { active?: boolean }) => {
  return (
    <div className="size-full flex flex-col items-center justify-center overflow-visible">
      <div className="w-full items-center -space-x-10 justify-center flex flex-row relative *:transition-all *:shadow *:ease-in *:duration-400 *:overflow-hidden">
        <div className={cn(
          'w-[35%] min-w-[6rem] aspect-square relative rounded-full bg-gray-200',
          'translate-y-[10%] rotate-[-20deg]',
          active ? 'translate-x-[-10%] rotate-[-25deg] scale-105' : '',
          'group-hover:translate-x-[-10%] group-hover:rotate-[-25deg] group-hover:scale-105'
        )}>
           <Image fill alt="" src={'/assets/c2.jpg'} className="object-cover" />
        </div>
        <div className={cn(
          'w-[35%] min-w-[6rem] aspect-square relative rounded-full bg-gray-300',
          'translate-y-[10%] rotate-[20deg]',
          active ? 'translate-x-[10%] rotate-[25deg] scale-105' : '',
          'group-hover:translate-x-[10%] group-hover:rotate-[25deg] group-hover:scale-105'
        )}>
          <Image fill alt="" src={'/assets/c1b.jpg'} className="object-cover" />
        </div>
      </div>
    </div>
  );
};

const Insights = ({ active }: { active?: boolean }) => {
  return (
     <div className="size-full flex flex-col items-center justify-end">
      <div className="w-full items-end justify-center flex flex-row relative *:transition-all *:ease-in *:duration-400 *:overflow-hidden">
         <div className={cn(
          "absolute w-[80px] h-[80px]",
          "top-0 translate-y-[-20%] translate-x-[-60%] rotate-[-20deg]",
          active ? 'rotate-[-25deg] translate-y-[-40%] translate-x-[-75%] scale-110' : '',
          'group-hover:rotate-[-25deg] group-hover:translate-y-[-40%] group-hover:translate-x-[-75%] group-hover:scale-110'
        )}>
           <Image fill alt="" src={'/assets/c3.png'} className="object-contain" />
        </div>  
        <div className={cn(
          "absolute w-[55px] h-[55px]",
          "bottom-0 translate-y-[20%] translate-x-[120%] rotate-[20deg]",
          active ? 'rotate-[25deg] translate-y-[0%] translate-x-[130%] scale-110' : '',
          'group-hover:rotate-[25deg] group-hover:translate-y-[0%] group-hover:translate-x-[130%] group-hover:scale-110'
        )}>
           <Image fill alt="" src={'/assets/c4.png'} className="object-contain" />
        </div>  
        <div className={cn(
          'size-20 bg-[#292D32] p-2.5 flex items-center justify-center rounded-t-xl z-[1]',
          active ? 'translate-y-[-20%] rounded-xl scale-110' : 'translate-y-[25%]',
          'group-hover:translate-y-[-20%] group-hover:rounded-xl group-hover:scale-110'
        )}>
          <Building2 className={cn(
            'text-white size-full transition-all ease-in',
            active ? 'translate-y-0' : 'translate-y-[15%]',
            'group-hover:translate-y-0'
          )}/>
        </div>
      </div>
    </div>      
  );
};

const BusinessRegistriesPreview = ({ active }: { active?: boolean }) => {
  return (
    <div className="size-full flex flex-col items-center justify-center overflow-visible">
      <div className="w-full items-center justify-center flex relative *:transition-all *:ease-in-out *:duration-500 translate-y-[40%]">
        <div className={cn(
          "absolute bg-slate-100 rounded-lg w-[80px] h-[105px] flex items-center justify-center z-10 overflow-hidden",
          active ? "translate-y-[-15px] shadow-xl" : "",
          "group-hover:translate-y-[-15px] group-hover:shadow-xl"
        )}>
          <Image fill alt="" src={'/assets/c52.jpg'} className="object-cover" />
        </div>
        {/* Papers sliding out */}
        <div className={cn(
          "absolute bg-white border border-slate-200 rounded-lg w-[70px] h-[90px] z-0 overflow-hidden",
          active ? "translate-x-[-55px] translate-y-[15px] rotate-[-10deg]" : "",
          "group-hover:translate-x-[-55px] group-hover:translate-y-[15px] group-hover:rotate-[-10deg]"
        )}>
          <Image fill alt="" src={'/assets/c11.png'} className="object-cover" />
        </div>
        <div className={cn(
          "absolute bg-white border border-slate-200 rounded-lg w-[70px] h-[90px] z-0 overflow-hidden",
          active ? "translate-x-[55px] translate-y-[15px] rotate-[10deg]" : "",
          "group-hover:translate-x-[55px] group-hover:translate-y-[15px] group-hover:rotate-[10deg]"
        )}>
          <Image fill alt="" src={'/assets/c12.jpg'} className="object-cover" />
        </div>
      </div>
    </div>
  );
};

const VerifiedPartnersPreview = ({ active }: { active?: boolean }) => {
  return (
    <div className="size-full flex flex-col items-center justify-center overflow-visible">
      <div className="w-full items-center justify-center flex flex-col relative *:transition-all *:ease-in-out *:duration-500">
        <div className={cn(
          "bg-emerald-100 rounded-t-lg w-[75px] h-[30px] mb-1",
          active ? "translate-y-[-15px] bg-emerald-400" : "",
          "group-hover:translate-y-[-15px] group-hover:bg-emerald-400"
        )} />
        <div className={cn(
          "bg-emerald-200 rounded-sm w-[75px] h-[30px] mb-1 flex items-center justify-center z-10",
          active ? "scale-110 bg-emerald-500 shadow-lg shadow-emerald-500/30" : "",
          "group-hover:scale-110 group-hover:bg-emerald-500 group-hover:shadow-lg group-hover:shadow-emerald-500/30"
        )}>
          <Database className={cn("w-6 h-6 transition-colors duration-500", active ? "text-white" : "text-emerald-700", "group-hover:text-white")}/>
        </div>
        <div className={cn(
          "bg-emerald-100 rounded-b-lg w-[75px] h-[30px]",
          active ? "translate-y-[15px] bg-emerald-400" : "",
          "group-hover:translate-y-[15px] group-hover:bg-emerald-400"
        )} />
      </div>
    </div>
  );
};

import React, { useState } from "react";

const Card = ({ no, prefix, title, previewComponent, index }: {
  no: number | string,
  prefix?: string,
  title: string,
  previewComponent?: React.ReactNode,
  index: number
}) => {
  const [active, setActive] = useState(false);

  // Detect touch/click for mobile, toggle active state
  const handleCardClick = () => {
    setActive((prev) => !prev);
  };

  // Remove active state on blur (optional, for accessibility)
  const handleBlur = () => {
    setActive(false);
  };

  return (
    <AnimatedDiv
      delay={(index + 1) * 0.15}
      className={
        `w-[80%] md:w-full max-w-[280px] group flex flex-col items-center justify-between ${active ? "active" : ""}`
      }
      tabIndex={0}
      onClick={handleCardClick}
      onBlur={handleBlur}
      role="button"
      aria-pressed={active}
      style={{ outline: "none" }}
    >
      <div className="pt-2.5">
        <p className="tracking-[-4%] text-gray-900 font-medium text-4xl md:text-5xl">{no}{prefix}</p>
      </div>
      <div className="flex-1 flex items-center justify-center w-full border-b border-gray-200 overflow-y-hidden pt-6 pb-4">
        <div className="h-[100px] w-full flex items-center justify-center overflow-visible">
          {/* Pass active state as prop for animation control */}
          {React.isValidElement(previewComponent)
            ? React.cloneElement(previewComponent as React.ReactElement<any>, { active })
            : previewComponent}
        </div>
      </div>
      <div className="p-4 text-center">
        <p className="text-center whitespace-pre-wrap text-gray-600 font-medium text-base">{title}</p>
      </div>
    </AnimatedDiv>
  );
};

// --- Main Section ---

export const DataSourcesSection = () => {
  return (
  <section className="py-16 lg:py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-16">
    <div className="text-center flex flex-col items-center">
      <AnimatedDiv>
      <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
        Where does the data come from?
      </h2>
      </AnimatedDiv>
      <AnimatedDiv delay={0.1}>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        We aggregate contact information from multiple trusted sources and verify
        each data point in real-time to ensure maximum accuracy.
      </p>
      </AnimatedDiv>
    </div>

    <div className="flex flex-col items-center justify-center md:grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 lg:gap-10 place-items-center mb-16 max-w-3xl mx-auto">
      <Card 
        index={0} 
        no="350M" 
        prefix="+" 
        previewComponent={<PostPerMonth />}
        title={`Public & Professional\nData Sources`} 
      />
      <Card 
        index={1} 
        no="50" 
        prefix="+" 
        previewComponent={<SocialMediaPlatforms />} 
        title={`Professional Networks,\nBusiness Platforms & Directories`} 
      />
    </div>

    <div className="flex flex-col items-center justify-center md:grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 lg:gap-10 place-items-center max-w-3xl mx-auto">
      <Card 
        index={2} 
        no="95%" 
        prefix="+" 
        previewComponent={<Insights />}
        title={`Business Registries &\nOfficial Company Filings`} 
      />
      <Card 
        index={3} 
        no="24h" 
        prefix="" 
        previewComponent={<BusinessRegistriesPreview />}
        title={`Data Providers with\nVerified B2B Contacts`} 
      />
    </div>
    </div>
  </section>
  );
};

