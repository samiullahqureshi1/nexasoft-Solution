import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const FinalCTASection = () => {
  return (
    <section
      className="relative w-full py-40 flex items-center justify-center text-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://sevenkoncepts.com/textures/texture.png')",
      }}
    >
      {/* Optional overlay for softness */}
     

      <div className="relative z-10 max-w-4xl px-6">

        {/* Small Tag */}
        <div className="inline-flex items-center gap-3 border border-black/20 px-6 py-2  rounded-full text-sm tracking-[3px] font-body mb-10">
          <span className="w-2 h-2 bg-[#9C0000] rounded-full"></span>
          GET IN TOUCH
          <span className="w-2 h-2 bg-[#9C0000] rounded-full"></span>
        </div>

        {/* Main Heading */}
        <h2 className="font-heading text-6xl leading-tight mb-12">
          Have a <span className="text-[#9C0000]">project</span> in mind?
          <br />
          Let’s get to work.
        </h2>

        {/* Circle Button */}
        <div className="flex justify-center">
          <button className="group hover:bg-[#9C0000] relative w-40 h-40 rounded-full border border-black/20 flex flex-col hover:text-white items-center justify-center font-body tracking-widest text-sm transition hover:border-[#9C0000]">
            
            <span className="transition-transform duration-300 rotate-45 group-hover:rotate-0 mb-2">
              <FiArrowUpRight size={22} />
            </span>

            GET IN TOUCH

          </button>
        </div>

      </div>
    </section>
  );
};

export default FinalCTASection;
