// import React from "react";
// import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { FaCode, FaBullhorn, FaCogs, FaCube } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const ServicesSection = () => {
//   return (
//     <section className="w-full bg-[#F1F3F5]  py-28 border-b border-[#D9DADB]">
//       {/* Top Header */}
//       <div className="max-w-7xl mx-auto flex justify-between items-start gap-20 mb-24">
//         {/* LEFT SIDE */}
//         <div className="flex-1">
//           <p className="text-xs tracking-[4px] text-gray-500 font-body mb-6 uppercase">
//             Powered by AI and Built for You
//           </p>

//           <h2 className="font-heading text-[64px] leading-[1.1] text-black">
//             Smarter, Faster <br />
//             Digital Solutions
//           </h2>
//         </div>

//         {/* RIGHT SIDE */}
//       </div>

//       {/* Services Grid */}
//       <div className="  grid md:grid-cols-3 border-t border-[#D9DADB]">
//         {/* CARD 1 */}
//         <div className="p-10 border-r border-[#D9DADB]">
//           <FaCode className="text-4xl text-gray-500 mb-6" />
//           <h3 className="font-heading text-xl mb-4">
//             Website Design & Development
//           </h3>
//           <p className="text-gray-600 font-body mb-6">
//             Custom websites built for performance, SEO, and user experience.
//           </p>

//           <Link
//             to="/services/web-design-development"
//             className="flex items-center gap-3 cursor-pointer group"
//           >
//             <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-red-50 transition">
//               <FiArrowUpRight className="text-[#9C0000]" />
//             </div>
//             <span className="text-sm tracking-wider font-body">READ MORE</span>
//           </Link>
//         </div>

//         {/* CARD 2 */}
//         <div className="p-10 border-r border-[#D9DADB]">
//           <FaBullhorn className="text-4xl text-gray-500 mb-6" />
//           <h3 className="font-heading text-xl mb-4">
//             Digital Marketing Services
//           </h3>
//           <p className="text-gray-600 font-body mb-6">
//             Data-driven strategies to scale your online presence.
//           </p>

//           <Link
//             to="/services/digital-marketing"
//             className="flex items-center gap-3 cursor-pointer group"
//           >
//             <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-red-50 transition">
//               <FiArrowUpRight className="text-[#9C0000]" />
//             </div>
//             <span className="text-sm tracking-wider font-body">READ MORE</span>
//           </Link>
//         </div>

//         {/* CARD 3 */}
//         <div className="p-10 border-r border-[#D9DADB]">
//           <FaCogs className="text-4xl text-gray-500 mb-6" />
//           <h3 className="font-heading text-xl mb-4">
//             Custom Software Development
//           </h3>
//           <p className="text-gray-600 font-body mb-6">
//             Scalable enterprise solutions tailored to your needs.
//           </p>

//           <Link
//             to="/services/custom-software-development"
//             className="flex items-center gap-3 cursor-pointer group"
//           >
//             <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-red-50 transition">
//               <FiArrowUpRight className="text-[#9C0000]" />
//             </div>
//             <span className="text-sm tracking-wider font-body">READ MORE</span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaCode, FaBullhorn, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="w-full bg-[#F1F3F5] py-16 md:py-24 lg:py-28 border-b border-[#D9DADB]">
      
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20 mb-16 md:mb-24">
        
        {/* LEFT SIDE */}
        <div className="flex-1">
          <p className="text-xs tracking-[4px] text-gray-500 font-body mb-4 md:mb-6 uppercase">
            Powered by AI and Built for You
          </p>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[1.1] text-black">
            Smarter, Faster <br />
            Digital Solutions
          </h2>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-[#D9DADB]">
        
        {/* CARD 1 */}
        <div className="p-6 md:p-8 lg:p-10 border-b sm:border-r sm:border-b lg:border-r border-[#D9DADB]">
          <FaCode className="text-3xl md:text-4xl text-gray-500 mb-6" />
          <h3 className="font-heading text-lg md:text-xl mb-4">
            Website Design & Development
          </h3>
          <p className="text-gray-600 font-body mb-6 text-sm md:text-base">
            Custom websites built for performance, SEO, and user experience.
          </p>

          <Link
            to="/services/web-design-development"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-red-50 transition">
              <FiArrowUpRight className="text-[#9C0000]" />
            </div>
            <span className="text-xs md:text-sm tracking-wider font-body">
              READ MORE
            </span>
          </Link>
        </div>

        {/* CARD 2 */}
        <div className="p-6 md:p-8 lg:p-10 border-b lg:border-r border-[#D9DADB]">
          <FaBullhorn className="text-3xl md:text-4xl text-gray-500 mb-6" />
          <h3 className="font-heading text-lg md:text-xl mb-4">
            Digital Marketing Services
          </h3>
          <p className="text-gray-600 font-body mb-6 text-sm md:text-base">
            Data-driven strategies to scale your online presence.
          </p>

          <Link
            to="/services/digital-marketing"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-red-50 transition">
              <FiArrowUpRight className="text-[#9C0000]" />
            </div>
            <span className="text-xs md:text-sm tracking-wider font-body">
              READ MORE
            </span>
          </Link>
        </div>

        {/* CARD 3 */}
        <div className="p-6 md:p-8 lg:p-10">
          <FaCogs className="text-3xl md:text-4xl text-gray-500 mb-6" />
          <h3 className="font-heading text-lg md:text-xl mb-4">
            Custom Software Development
          </h3>
          <p className="text-gray-600 font-body mb-6 text-sm md:text-base">
            Scalable enterprise solutions tailored to your needs.
          </p>

          <Link
            to="/services/custom-software-development"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-red-50 transition">
              <FiArrowUpRight className="text-[#9C0000]" />
            </div>
            <span className="text-xs md:text-sm tracking-wider font-body">
              READ MORE
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;