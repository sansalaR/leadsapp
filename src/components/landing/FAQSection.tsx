"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import AnimatedDiv from "@/components/common/fade-in";

const faqs = [
  {
    question: "Is it legal to use this data for outreach?",
    answer: "We collect publicly available business contact information. Using this data for B2B outreach is generally permitted, but you should comply with applicable laws in your jurisdiction (like GDPR, CAN-SPAM, or CCPA). We recommend consulting legal counsel for your specific use case."
  },
  {
    question: "Where does the data come from?",
    answer: "Our data comes from public sources including professional networking sites, company websites, business directories, and public records. We do not purchase data from data brokers or use private data sources."
  },
  {
    question: "How accurate is the contact information?",
    answer: "Email addresses are verified monthly using SMTP validation. Phone numbers are validated against carrier databases when possible. We estimate around 85% accuracy for email addresses. Stale data is flagged or removed automatically."
  },
  {
    question: "Can people request to be removed from your database?",
    answer: "Yes. Anyone can request removal by emailing privacy@leadfind.com. We process removal requests within 7 business days and the contact will not reappear in future data updates."
  },
  {
    question: "Do you share or sell my search data?",
    answer: "No. Your searches, saved leads, and export history are private to your account. We do not sell user data or share it with third parties except as required for service operation."
  },
  {
    question: "What's the difference between free and paid plans?",
    answer: "Free accounts can search and preview leads but have limited exports (25/day). Paid plans increase export limits, add team features, and provide API access. See our pricing page for full details."
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="relative overflow-hidden bg-white py-20 sm:py-24">

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedDiv>
            <h2 className="text-balance font-sans text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-black sm:text-6xl">
              Frequently asked <span className="font-serif italic">questions</span>
            </h2>
          </AnimatedDiv>
          <AnimatedDiv delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-black/70 sm:text-lg max-w-2xl mx-auto">
              Common questions about our data, legality, and how LeadFind works.
            </p>
          </AnimatedDiv>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl items-start gap-10 lg:grid-cols-2">
          {/* Image Side */}
          <div className="order-2 hidden items-center justify-center sm:flex lg:order-1">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="pointer-events-none absolute -left-14 -top-10 h-52 w-52 rounded-full bg-yellow-500/15 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl" />
              <Image
                src="/Questions-bro.svg"
                alt="Frequently Asked Questions"
                width={500}
                height={500}
                className="relative z-10 h-auto w-full"
                priority
              />
            </div>
          </div>

          {/* Accordion Side */}
          <div className="order-1 lg:order-2">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="overflow-hidden rounded-2xl bg-white px-6 ring-1 ring-black/10 border-black/10 last:border-b transition-all duration-300 hover:ring-black/15 data-[state=open]:bg-black/5 data-[state=open]:ring-black/20 data-[state=open]:border-black/20"
                >
                  <AccordionTrigger className="py-4 text-left font-semibold text-black hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 leading-relaxed text-black/70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

          </div>
        </div>
      </div>
    </section>
  );
};