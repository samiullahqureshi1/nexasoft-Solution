// import React from "react";
// import { FiArrowUpRight } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// const ImpactSection = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="w-full bg-[#F1F3F5] py-16 md:py-24 lg:py-32 border-t border-[#D9DADB]">
//       <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
        
//         {/* LEFT SIDE */}
//         <div>
//           <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
//             Nexasoft Impact <br />
//             <span className="text-[#9C0000]">In Numbers</span>
//           </h2>

//           <p className="text-gray-600 font-body text-sm sm:text-base mb-10 md:mb-12 max-w-lg">
//             See how we engineer, scale and accelerate digital businesses with
//             measurable growth and performance-driven solutions.
//           </p>

//           {/* STATS */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-10 mb-10 md:mb-12">
//             <div>
//               <h3 className="font-heading text-2xl md:text-3xl">150+</h3>
//               <p className="text-gray-600 text-xs md:text-sm font-body mt-2">
//                 Projects Delivered
//               </p>
//             </div>

//             <div>
//               <h3 className="font-heading text-2xl md:text-3xl">50+</h3>
//               <p className="text-gray-600 text-xs md:text-sm font-body mt-2">
//                 Global Clients
//               </p>
//             </div>

//             <div>
//               <h3 className="font-heading text-2xl md:text-3xl">$25M+</h3>
//               <p className="text-gray-600 text-xs md:text-sm font-body mt-2">
//                 Revenue Generated
//               </p>
//             </div>
//           </div>

//           <button
//             onClick={() => navigate("/contact")}
//             className="group flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full border border-[#9C0000] text-[#9C0000] text-xs sm:text-sm md:text-base font-body transition hover:bg-[#9C0000] hover:text-white"
//           >
//             JOIN OUR SUCCESS STORY
//             <span className="transition-transform duration-300 rotate-45 group-hover:rotate-0">
//               <FiArrowUpRight size={18} />
//             </span>
//           </button>
//         </div>

//         {/* RIGHT SIDE - IMAGE */}
//         <div className="relative group">
//           <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-black/10 shadow-lg">
//             <img
//               src="https://img.freepik.com/free-photo/group-young-business-people-working-office_158595-5210.jpg?ga=GA1.1.35512147.1759400476&semt=ais_hybrid&w=740&q=80"
//               alt="Impact"
//               className="w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[400px] object-cover"
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ImpactSection;
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ImpactSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#F1F3F5] py-14 sm:py-16 md:py-24 lg:py-32 border-t border-[#D9DADB]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
        
        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-5 md:mb-6">
            Nexasoft Impact <br />
            <span className="text-[#9C0000]">In Numbers</span>
          </h2>

          <p className="text-gray-600 font-body text-sm sm:text-base mb-8 md:mb-12 max-w-lg mx-auto lg:mx-0">
            See how we engineer, scale and accelerate digital businesses with
            measurable growth and performance-driven solutions.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-10 mb-8 md:mb-12">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl">
                150+
              </h3>
              <p className="text-gray-600 text-[11px] sm:text-xs md:text-sm font-body mt-2">
                Projects Delivered
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl">
                50+
              </h3>
              <p className="text-gray-600 text-[11px] sm:text-xs md:text-sm font-body mt-2">
                Global Clients
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl">
                $25M+
              </h3>
              <p className="text-gray-600 text-[11px] sm:text-xs md:text-sm font-body mt-2">
                Revenue Generated
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/contact")}
            className="group w-full sm:w-auto flex justify-center items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full border border-[#9C0000] text-[#9C0000] text-xs sm:text-sm md:text-base font-body transition hover:bg-[#9C0000] hover:text-white"
          >
            JOIN OUR SUCCESS STORY
            <span className="transition-transform duration-300 rotate-45 group-hover:rotate-0">
              <FiArrowUpRight size={18} />
            </span>
          </button>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="relative">
          <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-black/10 shadow-lg">
            <img
              src="https://img.freepik.com/free-photo/group-young-business-people-working-office_158595-5210.jpg?ga=GA1.1.35512147.1759400476&semt=ais_hybrid&w=740&q=80"
              alt="Impact"
              className="w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;