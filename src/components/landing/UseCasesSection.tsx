"use client";
import Image from "next/image";

const useCases = [
  {
    title: "Sales Teams",
    description: "Build targeted prospect lists for outbound campaigns. Find decision-makers at companies matching your ideal profile.",
    image: "/assets/usecase1a.jpg",
    stats: "5K+ teams",
    bg: "bg-[#6B8A9C]", // Muted blue-grey
  },
  {
    title: "Recruiters",
    description: "Source candidates with specific skills and experience. Search by job title, company, or use AI to find matching professionals.",
    image: "/assets/usecase2.jpg",
    stats: "2K+ recruiters",
    bg: "bg-[#E8E4D9]", // Warm beige
  },
  {
    title: "Founders",
    description: "Research potential customers, partners, or investors. Get contact information without paying for enterprise sales tools.",
    image: "/assets/usecase3b.jpg",
    stats: "3K+ startups",
    bg: "bg-[#EAEBE9]", // Light grey
  }
];

export const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
            Who uses LeadFind
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
           LeadFind helps anyone who needs to find and reach business professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className={`relative rounded-2xl overflow-hidden h-[500px] group ${useCase.bg}`}
            >
              {/* Background Image */}
              <Image
                src={useCase.image}
                alt={useCase.title}
                fill
                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60" />

              {/* Content Container */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="flex justify-between items-start mb-4 border-b border-gray-200 pb-4">
                    <h3 className="text-2xl font-medium text-gray-900">
                      {useCase.title}
                    </h3>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {useCase.stats}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};