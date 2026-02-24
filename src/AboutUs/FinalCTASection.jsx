// import React from "react";
// import { FiArrowUpRight } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// const FinalCTASection = () => {
//   const navigate = useNavigate();
//   return (
//     <section
//       className="relative w-full py-40 flex items-center justify-center text-center overflow-hidden bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://sevenkoncepts.com/textures/texture.png')",
//       }}
//     >
//       {/* Optional overlay for softness */}
     

//       <div className="relative z-10 max-w-4xl px-6">

//         {/* Small Tag */}
//         <div className="inline-flex items-center gap-3 border border-black/20 px-6 py-2  rounded-full text-sm tracking-[3px] font-body mb-10">
//           <span className="w-2 h-2 bg-[#9C0000] rounded-full"></span>
//           GET IN TOUCH
//           <span className="w-2 h-2 bg-[#9C0000] rounded-full"></span>
//         </div>

//         {/* Main Heading */}
//         <h2 className="font-heading text-6xl leading-tight mb-12">
//           Have a <span className="text-[#9C0000]">project</span> in mind?
//           <br />
//           Let’s get to work.
//         </h2>

//         {/* Circle Button */}
//         <div className="flex justify-center">
//           <button onClick={()=>{
//             navigate("/contact")
//           }} className="group hover:bg-[#9C0000] relative w-40 h-40 rounded-full border border-black/20 flex flex-col hover:text-white items-center justify-center font-body tracking-widest text-sm transition hover:border-[#9C0000]">
            
//             <span className="transition-transform duration-300 rotate-45 group-hover:rotate-0 mb-2">
//               <FiArrowUpRight size={22} />
//             </span>

//             GET IN TOUCH

//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FinalCTASection;
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const FinalCTASection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full py-20 sm:py-28 md:py-32 lg:py-40 
      flex items-center justify-center text-center 
      overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://sevenkoncepts.com/textures/texture.png')",
      }}
    >
      <div className="relative z-10 max-w-4xl px-6 md:px-10">

        {/* Small Tag */}
        <div className="inline-flex items-center gap-2 md:gap-3 
        border border-black/20 
        px-4 md:px-6 py-2 
        rounded-full 
        text-[10px] sm:text-xs md:text-sm 
        tracking-[2px] md:tracking-[3px] 
        font-body mb-8 md:mb-10">
          
          <span className="w-2 h-2 bg-[#9C0000] rounded-full"></span>
          GET IN TOUCH
          <span className="w-2 h-2 bg-[#9C0000] rounded-full"></span>
        </div>

        {/* Main Heading */}
        <h2 className="font-heading 
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        leading-tight mb-8 md:mb-12">
          Have a <span className="text-[#9C0000]">project</span> in mind?
          <br />
          Let’s get to work.
        </h2>

        {/* Circle Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/contact")}
            className="group relative 
            w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 
            rounded-full border border-black/20 
            flex flex-col items-center justify-center 
            font-body tracking-widest text-[10px] sm:text-xs md:text-sm 
            transition hover:bg-[#9C0000] hover:text-white hover:border-[#9C0000]"
          >
            <span className="transition-transform duration-300 rotate-45 group-hover:rotate-0 mb-2">
              <FiArrowUpRight size={18} />
            </span>

            GET IN TOUCH
          </button>
        </div>

      </div>
    </section>
  );
};

export default FinalCTASection;