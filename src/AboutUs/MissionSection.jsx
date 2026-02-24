// import React from "react";

// const MissionSection = () => {
//   return (
//     <section className="relative w-full bg-[#F1F3F5] py-32 overflow-hidden">

//       {/* CONTENT */}
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">

//         {/* LEFT */}
//         <div>
//           <p className="text-xs tracking-[4px] text-gray-600 uppercase mb-6 flex items-center gap-3">
//             <span className="w-2 h-2 bg-[#9C0000] rounded-full"></span>
//             WHERE VISION MEETS BORDERLESS INNOVATION
//           </p>

//           <h2 className="font-heading text-6xl leading-tight">
//             Our <span className="text-[#9C0000]">Mission</span>
//           </h2>
//         </div>

//         {/* RIGHT */}
//         <div>
//           <p className="text-gray-600 font-body leading-relaxed text-lg max-w-xl">
//             We’re your partners in digital growth, not just vendors. 
//             We leverage advanced AI to amplify our U.S.-based strategic 
//             vision and 24/7 global execution, crafting scalable, 
//             intelligent solutions that outlast trends and outperform competitors.
//           </p>
//         </div>

//       </div>

//       {/* CENTERED BACKGROUND TEXT */}
//       <div className="absolute inset-0 flex items-center pointer-events-none">

//         <h1 className="whitespace-nowrap font-heading font-bold text-[160px] leading-none flex opacity-[0.07]">

//           <span className="text-black mr-10">
//             JUST
//           </span>

//           <span className="stroke-text-red text-transparent mr-10 opacity-100">
//             ABOUT US
//           </span>

//           <span className="text-black">
//             ABOUT
//           </span>

//         </h1>

//       </div>

//     </section>
//   );
// };

// export default MissionSection;
import React from "react";

const MissionSection = () => {
  return (
    <section className="relative w-full bg-[#F1F3F5] py-16 md:py-24 lg:py-32 overflow-hidden">

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center relative z-10">

        {/* LEFT */}
        <div>
          <p className="text-[10px] sm:text-xs tracking-[3px] md:tracking-[4px] text-gray-600 uppercase mb-5 md:mb-6 flex items-center gap-3">
            <span className="w-2 h-2 bg-[#9C0000] rounded-full"></span>
            WHERE VISION MEETS BORDERLESS INNOVATION
          </p>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Our <span className="text-[#9C0000]">Mission</span>
          </h2>
        </div>

        {/* RIGHT */}
        <div>
          <p className="text-gray-600 font-body leading-relaxed text-sm sm:text-base md:text-lg max-w-xl">
            We’re your partners in digital growth, not just vendors.
            We leverage advanced AI to amplify our U.S.-based strategic
            vision and 24/7 global execution, crafting scalable,
            intelligent solutions that outlast trends and outperform competitors.
          </p>
        </div>

      </div>

      {/* CENTERED BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-center pointer-events-none justify-center">

        <h1 className="whitespace-nowrap font-heading font-bold 
        text-[60px] sm:text-[90px] md:text-[120px] lg:text-[160px] 
        leading-none flex opacity-[0.05]">

          <span className="text-black mr-6 md:mr-10">
            JUST
          </span>

          <span className="stroke-text-red text-transparent mr-6 md:mr-10 opacity-100">
            ABOUT US
          </span>

          <span className="text-black">
            ABOUT
          </span>

        </h1>

      </div>

    </section>
  );
};

export default MissionSection;