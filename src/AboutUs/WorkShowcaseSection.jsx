// import React from "react";

// const projects = [
//   {
//     title: "Luxury Beauty Store",
//     category: "Ecommerce / Shopify",
//     image:
//       "https://www.thewahidsolutions.com/cdn/shop/files/image_124_900x.png?v=1769173531",
//   },
//   {
//     title: "Premium Fashion Brand",
//     category: "Web Design",
//     image:
//       "https://www.thewahidsolutions.com/cdn/shop/files/image_553_900x.png?v=1769173532",
//   },
//   {
//     title: "Modern Accessories",
//     category: "UI/UX Design",
//     image:
//       "https://www.thewahidsolutions.com/cdn/shop/files/image_124_900x.png?v=1769173531",
//   },

//   // NEW ADDED PROJECTS

//   {
//     title: "Luxury Store UI",
//     category: "Shopify Development",
//     image:
//       "https://www.thewahidsolutions.com/cdn/shop/files/image_519_900x.png?v=1769173532",
//   },
//   {
//     title: "Brand Website Design",
//     category: "Web Development",
//     image:
//       "https://www.thewahidsolutions.com/cdn/shop/files/image_129_900x.png?v=1769173532",
//   },
//   {
//     title: "MezCrafts Ecommerce",
//     category: "Ecommerce Store",
//     image:
//       "https://www.thewahidsolutions.com/cdn/shop/files/screencapture-mezcrafts-2025-11-20-11_16_48_2_900x.png?v=1769173532",
//   },
//   {
//     title: "Modern Store Layout",
//     category: "UI/UX Design",
//     image:
//       "https://www.thewahidsolutions.com/cdn/shop/files/image_511_900x.png?v=1769173531",
//   },
//   {
//     title: "Custom Ecommerce Platform",
//     category: "Full Stack Development",
//     image:
//       "http://thewahidsolutions.com/cdn/shop/files/image_408_900x.png?v=1769173532",
//   },
//   {
//     title: "Luxury Beauty Variation",
//     category: "Shopify Store",
//     image:
//       "https://www.thewahidsolutions.com/cdn/shop/files/image_124_900x.png?v=1769173531",
//   },
// ];
// const WorkShowcaseSection = () => {
//   return (
//     <section className="w-full bg-[#F1F3F5] py-32 border-t border-[#D9DADB]">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="text-center mb-20">
//           <h2 className="font-heading text-5xl mb-4">
//             Examples of <span className="text-[#9C0000]">Our Work</span>
//           </h2>
//           <p className="text-gray-600 font-body">
//             Premium digital products crafted for performance & growth.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white cursor-pointer"
//             >
              
//               {/* IMAGE WRAPPER */}
//              <div className="relative h-[420px] overflow-hidden">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full object-top 
//                transition-transform duration-[2500ms] ease-linear
//                group-hover:-translate-y-[65%]"
//               />
//             </div>
//               {/* OVERLAY INFO */}
//               <div className="absolute bottom-0 left-0 w-full bg-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
//                 <p className="text-sm text-gray-500 font-body mb-2">
//                   {project.category}
//                 </p>
//                 <h3 className="font-heading text-xl group-hover:text-[#9C0000] transition">
//                   {project.title}
//                 </h3>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WorkShowcaseSection;
import React from "react";

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
  {
    title: "Luxury Store UI",
    category: "Shopify Development",
    image:
      "https://www.thewahidsolutions.com/cdn/shop/files/image_519_900x.png?v=1769173532",
  },
  {
    title: "Brand Website Design",
    category: "Web Development",
    image:
      "https://www.thewahidsolutions.com/cdn/shop/files/image_129_900x.png?v=1769173532",
  },
  {
    title: "MezCrafts Ecommerce",
    category: "Ecommerce Store",
    image:
      "https://www.thewahidsolutions.com/cdn/shop/files/screencapture-mezcrafts-2025-11-20-11_16_48_2_900x.png?v=1769173532",
  },
  {
    title: "Modern Store Layout",
    category: "UI/UX Design",
    image:
      "https://www.thewahidsolutions.com/cdn/shop/files/image_511_900x.png?v=1769173531",
  },
  {
    title: "Custom Ecommerce Platform",
    category: "Full Stack Development",
    image:
      "http://thewahidsolutions.com/cdn/shop/files/image_408_900x.png?v=1769173532",
  },
  {
    title: "Luxury Beauty Variation",
    category: "Shopify Store",
    image:
      "https://www.thewahidsolutions.com/cdn/shop/files/image_124_900x.png?v=1769173531",
  },
];

const WorkShowcaseSection = () => {
  return (
    <section className="w-full bg-[#F1F3F5] py-16 sm:py-20 md:py-24 lg:py-32 border-t border-[#D9DADB]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
            Examples of <span className="text-[#9C0000]">Our Work</span>
          </h2>
          <p className="text-gray-600 font-body text-sm md:text-base">
            Premium digital products crafted for performance & growth.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white cursor-pointer"
            >
              
              {/* IMAGE WRAPPER */}
              <div className="relative h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-top 
                  transition-transform duration-[2500ms] ease-linear
                  group-hover:-translate-y-[65%]"
                />
              </div>

              {/* OVERLAY INFO */}
              <div className="
                absolute bottom-0 left-0 w-full bg-white p-5 md:p-6
                translate-y-0 md:translate-y-full 
                md:group-hover:translate-y-0 
                transition-transform duration-500
              ">
                <p className="text-xs md:text-sm text-gray-500 font-body mb-2">
                  {project.category}
                </p>
                <h3 className="font-heading text-base md:text-xl group-hover:text-[#9C0000] transition">
                  {project.title}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkShowcaseSection;