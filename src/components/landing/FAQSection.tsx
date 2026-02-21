"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

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
    <section id="faq" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about our data, legality, and how LeadFind works.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="order-2 lg:order-1 flex items-center justify-center hidden sm:flex">
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-foreground/5 rounded-full blur-3xl" />
              <Image
                src="/Questions-pana1.png"
                alt="Frequently Asked Questions"
                width={500}
                height={500}
                className="relative z-10 w-full h-auto"
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
                  className="border border-border rounded-xl px-5 data-[state=open]:bg-muted/50 data-[state=open]:border-foreground/20 transition-all duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 font-semibold text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
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