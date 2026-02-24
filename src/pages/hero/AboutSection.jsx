// import React from "react";

// const AboutSection = () => {
//   return (
//     <section className="relative w-full bg-[#F1F3F5] px-16 py-24">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
//         {/* LEFT CONTENT */}
//         <div>
//           <p className="text-sm tracking-[3px] font-body text-gray-500 mb-4">
//             ABOUT US.
//           </p>

//           <h2 className="font-heading text-4xl leading-tight mb-6">
//             Leading <span className="text-[#9C0000]">Software Development</span>
//             <br /> Agency Pakistan & US
//           </h2>

//           <p className="font-body text-gray-600 leading-relaxed mb-8 max-w-xl">
//             We are a custom software agency focused on building scalable,
//             high-performance digital products. From web and mobile applications
//             to enterprise systems, we deliver solutions that drive measurable
//             business growth.
//           </p>

//           <div className="border-b border-black/10 mb-8"></div>

//           {/* Stats */}
//           <div className="flex gap-16">
//             <div>
//               <h3 className="text-3xl font-heading text-[#9C0000]">150+</h3>
//               <p className="text-xs tracking-[2px] font-body text-gray-500 mt-2">
//                 PROJECTS DELIVERED
//               </p>
//             </div>

//             <div>
//               <h3 className="text-3xl font-heading text-[#9C0000]">12+</h3>
//               <p className="text-xs tracking-[2px] font-body text-gray-500 mt-2">
//                 INDUSTRIES SERVED
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT CONTENT */}
//         <div>
//           <div className="relative overflow-hidden">
//             <img
//               src="https://img.freepik.com/free-photo/asian-female-developer-coding-cloud-computing-applications-pc_482257-124536.jpg?ga=GA1.1.35512147.1759400476&semt=ais_hybrid&w=740&q=80" // 👈 apni video path lagana

//               className="w-full h-full object-cover border rounded-xl"
//             />

//             {/* Red Diagonal Shape */}
//           </div>

//           {/* Experience Text */}
//           <div>
//             <h3 className="text-2xl font-heading mb-2">5+ Years</h3>
//             <p className="text-sm tracking-[3px] text-gray-500 font-body uppercase">
//               Building Reliable Software Solutions Worldwide
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
import React from "react";

const AboutSection = () => {
  return (
    <section className="relative w-full bg-[#F1F3F5] px-6 md:px-10 lg:px-16 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs sm:text-sm tracking-[3px] font-body text-gray-500 mb-4">
            ABOUT US.
          </p>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl leading-tight mb-6">
            Leading <span className="text-[#9C0000]">Software Development</span>
            <br className="hidden sm:block" /> Agency Pakistan & US
          </h2>

          <p className="font-body text-sm md:text-base text-gray-600 leading-relaxed mb-8 max-w-xl">
            We are a custom software agency focused on building scalable,
            high-performance digital products. From web and mobile applications
            to enterprise systems, we deliver solutions that drive measurable
            business growth.
          </p>

          <div className="border-b border-black/10 mb-8"></div>

          {/* Stats */}
          <div className="flex justify-between items-start gap-6 sm:gap-16">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-heading text-[#9C0000]">
                150+
              </h3>
              <p className="text-[10px] md:text-xs tracking-[2px] font-body text-gray-500 mt-2">
                PROJECTS DELIVERED
              </p>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-heading text-[#9C0000]">
                12+
              </h3>
              <p className="text-[10px] md:text-xs tracking-[2px] font-body text-gray-500 mt-2">
                INDUSTRIES SERVED
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="https://img.freepik.com/free-photo/asian-female-developer-coding-cloud-computing-applications-pc_482257-124536.jpg?ga=GA1.1.35512147.1759400476&semt=ais_hybrid&w=740&q=80"
              alt="Software Development"
              className="w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover border rounded-xl"
            />
          </div>

          {/* Experience Text */}
          <div>
            <h3 className="text-xl md:text-2xl font-heading mb-2">5+ Years</h3>
            <p className="text-[11px] md:text-sm tracking-[3px] text-gray-500 font-body uppercase">
              Building Reliable Software Solutions Worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
