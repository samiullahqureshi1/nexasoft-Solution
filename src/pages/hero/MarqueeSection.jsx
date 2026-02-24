// import React from "react";

// const MarqueeSection = () => {
//   return (
//     <section className="w-full bg-[#F1F3F5] border-b border-[#D9DADB] overflow-hidden py-10">
//       <div className="flex w-max animate-marquee">
//         {/* FIRST SET */}
//         <div className="flex items-center">
//           <h2 className="text-[140px] font-heading font-bold text-black mr-16 whitespace-nowrap">
//             WEBSITE DESIGN
//           </h2>

//           <h2 className="text-[140px] font-heading font-bold stroke-text-red mr-16 whitespace-nowrap">
//             & DEVELOPMENT
//           </h2>
//         </div>

//         {/* DUPLICATE SET (IMPORTANT for seamless loop) */}
//         <div className="flex items-center">
//           <h2 className="text-[140px] font-heading font-bold text-black mr-16 whitespace-nowrap">
//             CUSTOM SOFTWARE
//           </h2>

//           <h2 className="text-[140px] font-heading font-bold text-transparent stroke-text mr-16 whitespace-nowrap">
//             & DEVELOPMENT
//           </h2>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarqueeSection;
import React from "react";

const MarqueeSection = () => {
  return (
    <section className="w-full bg-[#F1F3F5] border-b border-[#D9DADB] overflow-hidden py-6 md:py-8 lg:py-10">
      <div className="flex w-max animate-marquee">
        
        {/* FIRST SET */}
        <div className="flex items-center">
          <h2 className="text-[48px] sm:text-[70px] md:text-[100px] lg:text-[140px] font-heading font-bold text-black mr-6 md:mr-10 lg:mr-16 whitespace-nowrap">
            WEBSITE DESIGN
          </h2>

          <h2 className="text-[48px] sm:text-[70px] md:text-[100px] lg:text-[140px] font-heading font-bold stroke-text-red mr-6 md:mr-10 lg:mr-16 whitespace-nowrap">
            & DEVELOPMENT
          </h2>
        </div>

        {/* DUPLICATE SET */}
        <div className="flex items-center">
          <h2 className="text-[48px] sm:text-[70px] md:text-[100px] lg:text-[140px] font-heading font-bold text-black mr-6 md:mr-10 lg:mr-16 whitespace-nowrap">
            CUSTOM SOFTWARE
          </h2>

          <h2 className="text-[48px] sm:text-[70px] md:text-[100px] lg:text-[140px] font-heading font-bold text-transparent stroke-text mr-6 md:mr-10 lg:mr-16 whitespace-nowrap">
            & DEVELOPMENT
          </h2>
        </div>

      </div>
    </section>
  );
};

export default MarqueeSection;