import Image from "next/image";

const features = [
  {
    title: "Smart AI That Sounds Just Like You",
    description:
      "Crafted to match your brand's tone, voice, and vibe—no more generic content.",
    image: "/assets/images/image-1.png",
    glow: "/assets/images/glow-1.png",
    bg: "bg-[#E4F1FF]",
  },
  {
    title: "AI That Improves Your Results",
    description:
      "Underperforming post? Baked auto-tweaks it to boost engagement and ROI.",
    image: "/assets/images/image-2.png",
    glow: "/assets/images/glow-2.png",
    bg: "bg-purple-50",
  },
  {
    title: "1-Click Scheduling Across Platforms",
    description:
      "Post to Instagram, LinkedIn, Facebook, X, and more in one go.",
    image: "/assets/images/image-3.png",
    glow: "/assets/images/glow-3.png",
    bg: "bg-orange-50",
    wide: true,
  },
];

const View = () => {
  return (
    <section className="px-6 md:px-16 py-16 max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-normal text-center mb-3">
        Why Marketers Love Baked.
      </h2>
      <p className="text-center text-md text-gray-600 mb-12">
        Forget spending hours creating posts. Baked takes heavy lifting off your
        plates so you can focus on growing your business
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {features.slice(0, 2).map((feature, index) => (
          <div
            key={index}
            className={`relative rounded-2xl pt-6 px-6 ${feature.bg} flex flex-col justify-between overflow-hidden`}
          >
            {/* Shadow behind image */}
            <div className="relative z-10 text-center">
              <h3 className="text-xl font-medium px-20 mb-5">{feature.title}</h3>
              <p className="text-gray-500 text-sm px-12">{feature.description}</p>
            </div>
            <div className="mt-4 relative flex justify-center z-10">
              <Image
                src={feature.image}
                alt={feature.title}
                width={400}
                height={210}
                className="relative z-10 w-[20rem]"
              />
              <Image
                src={feature.glow}
                alt="glow"
                width={600}
                height={315}
                className="absolute top-[-5rem] left-0 w-[30rem] pointer-events-none z-0"
              />
            </div>
          </div>
        ))}

        {/* Bottom Feature */}
        <div
          className={`relative md:col-span-2 rounded-2xl p-6 ${features[2].bg} overflow-hidden`}
        >
          <div className="grid md:grid-cols-2 items-center relative z-10">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-5 px-20">
                {features[2].title}
              </h3>
              <p className="text-gray-500 text-sm px-12">{features[2].description}</p>
            </div>
            <div className="flex justify-center mt-6 md:mt-0 relative">
              <Image
                src={features[2].image}
                alt={features[2].title}
                width={400}
                height={300}
                className="relative z-10"
              />
              <Image
                src={features[2].glow}
                alt="glow"
                width={400}
                height={300}
                className="absolute top-6 left-4 w-[30rem] pointer-events-none z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { View };
