
import React from "react";

const processSteps = [
  {
    title: "Understand Your Goals",
    desc: "We start by listening learning about your business, audience, and vision to create a tailored plan.",
  },
  {
    title: "Design with Intent",
    desc: "Wireframes and mockups that balance creativity with usability, refined until every detail feels right.",
  },
  {
    title: "Develop for Performance",
    desc: "Clean code, fast load times, and SEO best practices ensure your site looks great and works flawlessly.",
  },
  {
    title: "Test Thoroughly",
    desc: "Cross-browser checks, mobile responsiveness tests, and user feedback to ensure everything meets your standards.",
  },
  {
    title: "Launch with Confidence",
    desc: "We hand over the keys with training and documentation, so you feel empowered to manage your new site.",
  },
];

const WebDevelopmentProcess = () => {
  const projects = [
    {
      category: "Ecommerce / Shopify",
      image:
        "https://www.thewahidsolutions.com/cdn/shop/files/image_519_900x.png?v=1769173532",
    },
    {
      category: "Web Design",
      image:
        "https://www.thewahidsolutions.com/cdn/shop/files/image_129_900x.png?v=1769173532",
    },
    {
      category: "UI/UX Design",
      image:
        "https://www.thewahidsolutions.com/cdn/shop/files/screencapture-mezcrafts-2025-11-20-11_16_48_2_900x.png?v=1769173532",
    },
    {
      category: "Shopify Development",
      image:
        "https://www.thewahidsolutions.com/cdn/shop/files/image_511_900x.png?v=1769173531",
    },
    {
      category: "Custom Ecommerce",
      image:
        "https://thewahidsolutions.com/cdn/shop/files/image_408_900x.png?v=1769173532",
    },
    {
      category: "Luxury Store",
      image:
        "https://www.thewahidsolutions.com/cdn/shop/files/image_124_900x.png?v=1769173531",
    },
  ];

  return (
    <>
      {/* PROCESS SECTION */}
      <section className="w-full bg-[#F1F3F5] pt-24 sm:pt-28 md:pt-32 lg:pt-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 mb-12 md:mb-16">
            <div>
              <span className="uppercase tracking-[3px] text-xs sm:text-sm text-gray-500">
                Our Process
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 text-gray-900">
                Our Web Development{" "}
                <span className="text-[#9C0000]">Process</span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                A step-by-step guide to how we approach every project, ensuring
                consistency, quality, and client satisfaction from start to
                finish.
              </p>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 border-t border-gray-300">
            {processSteps.map((step, index) => {
              const isLastRow = index >= 3;

              return (
                <div
                  key={index}
                  className={`
                    p-6 sm:p-8 md:p-10
                    border-b border-gray-300
                    sm:border-r
                    lg:border-gray-300
                    lg:col-span-2
                    ${isLastRow && index === 3 ? "lg:col-start-2" : ""}
                  `}
                >
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORK SECTION */}
      <section className="w-full bg-[#F1F3F5] py-16 sm:py-20 md:py-24 lg:py-32 border-t border-[#D9DADB]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          {/* Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
              Examples of <span className="text-[#9C0000]">Our Work</span>
            </h2>
            <p className="text-gray-600 font-body text-sm md:text-base">
              Premium digital products crafted for performance & growth.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white cursor-pointer"
              >
                <div className="relative h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden">
                  <img
                    src={project.image}
                    alt="project"
                    className="w-full object-top 
                    transition-transform duration-[2500ms] ease-linear
                    group-hover:-translate-y-[65%]"
                  />
                </div>

                <div className="absolute bottom-0 left-0 w-full bg-white p-4 md:p-6 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs md:text-sm text-gray-500 font-body">
                    {project.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default WebDevelopmentProcess;