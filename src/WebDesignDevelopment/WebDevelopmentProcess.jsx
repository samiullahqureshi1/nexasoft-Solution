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
      title: "Luxury Beauty Store",
      category: "Ecommerce / Shopify",
      image:
        "https://www.thewahidsolutions.com/cdn/shop/files/image_124_900x.png?v=1769173531",
    },
    {
      title: "Premium Fashion Brand",
      category: "Web Design",
      image:
        "https://www.thewahidsolutions.com/cdn/shop/files/image_553_900x.png?v=1769173532",
    },
    {
      title: "Modern Accessories",
      category: "UI/UX Design",
      image:
        "https://www.thewahidsolutions.com/cdn/shop/files/image_124_900x.png?v=1769173531",
    },
  ];

  return (
    <>
      <section className="w-full bg-[#F1F3F5] pt-40">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-10 mb-16">
            <div>
              <span className="uppercase tracking-[3px] text-sm text-gray-500">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-3 text-gray-900">
                Our Web Development{" "}
                <span className="text-[#9C0000]">Process</span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-gray-600 leading-relaxed">
                A step-by-step guide to how we approach every project, ensuring
                consistency, quality, and client satisfaction from start to
                finish.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 border-t border-gray-300">
            {processSteps.map((step, index) => {
              const isLastRow = index >= 3;

              return (
                <div
                  key={index}
                  className={`
          p-10
          border-b border-gray-300
          
          sm:border-r sm:border-gray-300
          lg:border-gray-300
          
          lg:col-span-2
          ${isLastRow && index === 3 ? "lg:col-start-2" : ""}
        `}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
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
         <section className="w-full bg-[#F1F3F5] py-32 border-t border-[#D9DADB]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl mb-4">
            Examples of <span className="text-[#9C0000]">Our Work</span>
          </h2>
          <p className="text-gray-600 font-body">
            Premium digital products crafted for performance & growth.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white cursor-pointer"
            >
              
              {/* IMAGE WRAPPER */}
             <div className="relative h-[420px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-top 
               transition-transform duration-[2500ms] ease-linear
               group-hover:-translate-y-[65%]"
              />
            </div>
              {/* OVERLAY INFO */}
              <div className="absolute bottom-0 left-0 w-full bg-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm text-gray-500 font-body mb-2">
                  {project.category}
                </p>
                <h3 className="font-heading text-xl group-hover:text-[#9C0000] transition">
                  {project.title}
                </h3>
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
