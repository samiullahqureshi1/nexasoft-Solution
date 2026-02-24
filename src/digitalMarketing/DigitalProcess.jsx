// import React from "react";

// const processSteps = [
//   {
//     title: "Discovery & Research",
//     desc: "We begin by understanding your goals, audience, and market landscape to define a strong strategic foundation.",
//   },
//   {
//     title: "Strategy & Planning",
//     desc: "A clear roadmap is created outlining structure, user flow, and technical requirements for seamless execution.",
//   },

//   {
//     title: "Development & Integration",
//     desc: "Clean, scalable code and modern technologies bring your digital product to life with optimal performance.",
//   },
//   {
//     title: "Testing & Optimization",
//     desc: "Rigorous testing ensures functionality, responsiveness, and speed across all devices and platforms.",
//   },
//   {
//     title: "Launch & Growth",
//     desc: "After launch, we continuously monitor, refine, and optimize to drive long-term growth and results.",
//   },
// ];

// const DigitalProcess = () => {
//   const projects = [
//     {
//       category: "Ecommerce / Shopify",
//       image:
//         "https://www.thewahidsolutions.com/cdn/shop/files/image_519_900x.png?v=1769173532",
//     },
//     {
//       category: "Web Design",
//       image:
//         "https://www.thewahidsolutions.com/cdn/shop/files/image_129_900x.png?v=1769173532",
//     },
//     {
//       category: "UI/UX Design",
//       image:
//         "https://www.thewahidsolutions.com/cdn/shop/files/screencapture-mezcrafts-2025-11-20-11_16_48_2_900x.png?v=1769173532",
//     },
//     {
//       category: "Shopify Development",
//       image:
//         "https://www.thewahidsolutions.com/cdn/shop/files/image_511_900x.png?v=1769173531",
//     },
//     {
//       category: "Custom Ecommerce",
//       image:
//         "https://thewahidsolutions.com/cdn/shop/files/image_408_900x.png?v=1769173532",
//     },
//     {
//       category: "Luxury Store",
//       image:
//         "https://www.thewahidsolutions.com/cdn/shop/files/image_124_900x.png?v=1769173531",
//     },
//   ];

//   return (
//     <>
//       <section className="w-full bg-[#F1F3F5] pt-40">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Header Section */}
//           <div className="flex flex-col lg:flex-row justify-between gap-10 mb-16">
//             <div>
//               <span className="uppercase tracking-[3px] text-sm text-gray-500">
//                 OUR PROCESS
//               </span>
//               <h2 className="text-3xl md:text-4xl font-semibold mt-3 text-gray-900">
//                 Our Strategic{" "}
//                 <span className="text-[#9C0000]">Development Approach</span>
//               </h2>
//             </div>

//             <div className="max-w-md">
//               <p className="text-gray-600 leading-relaxed">
//                 A structured, insight-driven process designed to transform ideas
//                 into scalable digital solutions—ensuring clarity, performance,
//                 and measurable success at every stage.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 border-t border-gray-300">
//             {processSteps.map((step, index) => {
//               const isLastRow = index >= 3;

//               return (
//                 <div
//                   key={index}
//                   className={`
//           p-10
//           border-b border-gray-300
          
//           sm:border-r sm:border-gray-300
//           lg:border-gray-300
          
//           lg:col-span-2
//           ${isLastRow && index === 3 ? "lg:col-start-2" : ""}
//         `}
//                 >
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                     {index + 1}. {step.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed text-sm">
//                     {step.desc}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//       <section className="w-full bg-[#F1F3F5] py-32 border-t border-[#D9DADB]">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* HEADER */}
//           <div className="text-center mb-20">
//             <h2 className="font-heading text-5xl mb-4">
//               Examples of <span className="text-[#9C0000]">Our Work</span>
//             </h2>
//             <p className="text-gray-600 font-body">
//               Premium digital products crafted for performance & growth.
//             </p>
//           </div>

//           {/* GRID */}
//           <div className="grid md:grid-cols-3 gap-10">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white cursor-pointer"
//               >
//                 {/* IMAGE WRAPPER */}
//                 <div className="relative h-[420px] overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt="project"
//                     className="w-full object-top 
//           transition-transform duration-[2500ms] ease-linear
//           group-hover:-translate-y-[65%]"
//                   />
//                 </div>

//                 {/* OPTIONAL CATEGORY ONLY (Title Removed) */}
//                 <div className="absolute bottom-0 left-0 w-full bg-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
//                   <p className="text-sm text-gray-500 font-body">
//                     {project.category}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default DigitalProcess;
import React from "react";

const processSteps = [
  {
    title: "Discovery & Research",
    desc: "We begin by understanding your goals, audience, and market landscape to define a strong strategic foundation.",
  },
  {
    title: "Strategy & Planning",
    desc: "A clear roadmap is created outlining structure, user flow, and technical requirements for seamless execution.",
  },
  {
    title: "Development & Integration",
    desc: "Clean, scalable code and modern technologies bring your digital product to life with optimal performance.",
  },
  {
    title: "Testing & Optimization",
    desc: "Rigorous testing ensures functionality, responsiveness, and speed across all devices and platforms.",
  },
  {
    title: "Launch & Growth",
    desc: "After launch, we continuously monitor, refine, and optimize to drive long-term growth and results.",
  },
];

const DigitalProcess = () => {
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
                OUR PROCESS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 text-gray-900">
                Our Strategic{" "}
                <span className="text-[#9C0000]">Development Approach</span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                A structured, insight-driven process designed to transform ideas
                into scalable digital solutions—ensuring clarity, performance,
                and measurable success at every stage.
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

export default DigitalProcess;