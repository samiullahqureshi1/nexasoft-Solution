// import React from "react";
// import { FiArrowUpRight } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// const WhyNexasoftSection = () => {
//   const navigate = useNavigate();
//   return (
//     <section className="w-full bg-[#F1F3F5] py-32 border-t border-[#D9DADB]">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* MAIN HEADING */}
//         <div className="text-center mb-20">
//           <h2 className="font-heading text-6xl leading-tight">
//             Why <span className="text-[#9C0000]">Nexasoft</span>?
//           </h2>
//         </div>

//         {/* 3 COLUMNS */}
//         <div className="grid md:grid-cols-3 gap-16 mb-28">
//           {/* CARD */}
//           <div>
//             <div className="border-t border-black/20 pt-8">
//               <h3 className="font-heading text-2xl mb-6">Our Vision</h3>

//               <p className="font-body text-gray-600 leading-relaxed">
//                 We build clean, scalable and performance-driven digital
//                 solutions. Every decision is guided by clarity, user experience
//                 and long-term growth.
//               </p>
//             </div>
//           </div>

//           {/* CARD */}
//           <div>
//             <div className="border-t border-black/20 pt-8">
//               <h3 className="font-heading text-2xl mb-6">Our Mission</h3>

//               <p className="font-body text-gray-600 leading-relaxed">
//                 We engineer software with precision. From architecture to
//                 deployment, our focus is delivering reliable systems that
//                 convert and perform.
//               </p>
//             </div>
//           </div>

//           {/* CARD */}
//           <div>
//             <div className="border-t border-black/20 pt-8">
//               <h3 className="font-heading text-2xl mb-6">Our Commitment</h3>

//               <p className="font-body text-gray-600 leading-relaxed">
//                 We partner with clients, not just serve them. Our commitment is
//                 transparency, speed, innovation and measurable business impact.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM CTA */}
//         <div className="text-center">
//           <h3 className="font-heading text-4xl mb-6">Build or Scale?</h3>

//           <p className="font-body text-gray-600 mb-10">
//             Whether you're launching something new or improving what exists,
//             we’re ready to help you grow.
//           </p>

//           <button
//             onClick={() => {
//               navigate("/contact");
//             }}
//             className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#9C0000] text-[#9C0000] font-body transition hover:bg-[#9C0000] hover:text-white"
//           >
//             TALK NOW
//             <span className="transition-transform duration-300 rotate-45 group-hover:rotate-0">
//               <FiArrowUpRight size={18} />
//             </span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyNexasoftSection;
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const WhyNexasoftSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#F1F3F5] py-16 sm:py-20 md:py-24 lg:py-32 border-t border-[#D9DADB]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* MAIN HEADING */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Why <span className="text-[#9C0000]">Nexasoft</span>?
          </h2>
        </div>

        {/* 3 COLUMNS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 lg:gap-16 mb-20 md:mb-24 lg:mb-28">
          
          {/* CARD 1 */}
          <div>
            <div className="border-t border-black/20 pt-6 md:pt-8">
              <h3 className="font-heading text-xl md:text-2xl mb-4 md:mb-6">
                Our Vision
              </h3>

              <p className="font-body text-sm md:text-base text-gray-600 leading-relaxed">
                We build clean, scalable and performance-driven digital
                solutions. Every decision is guided by clarity, user experience
                and long-term growth.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div>
            <div className="border-t border-black/20 pt-6 md:pt-8">
              <h3 className="font-heading text-xl md:text-2xl mb-4 md:mb-6">
                Our Mission
              </h3>

              <p className="font-body text-sm md:text-base text-gray-600 leading-relaxed">
                We engineer software with precision. From architecture to
                deployment, our focus is delivering reliable systems that
                convert and perform.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div>
            <div className="border-t border-black/20 pt-6 md:pt-8">
              <h3 className="font-heading text-xl md:text-2xl mb-4 md:mb-6">
                Our Commitment
              </h3>

              <p className="font-body text-sm md:text-base text-gray-600 leading-relaxed">
                We partner with clients, not just serve them. Our commitment is
                transparency, speed, innovation and measurable business impact.
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM CTA */}
        <div className="text-center">
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
            Build or Scale?
          </h3>

          <p className="font-body text-sm md:text-base text-gray-600 mb-8 md:mb-10 max-w-xl mx-auto">
            Whether you're launching something new or improving what exists,
            we’re ready to help you grow.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full border border-[#9C0000] text-[#9C0000] text-xs sm:text-sm md:text-base font-body transition hover:bg-[#9C0000] hover:text-white"
          >
            TALK NOW
            <span className="transition-transform duration-300 rotate-45 group-hover:rotate-0">
              <FiArrowUpRight size={18} />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyNexasoftSection;