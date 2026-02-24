import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const DiscussCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#F1F3F5] py-10 sm:py-12 md:py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        <div
          onClick={() => navigate("/contact")}
          className="group border border-black/20 rounded-xl
          px-6 md:px-10
          py-6 md:py-8
          flex items-center justify-between
          cursor-pointer transition-all duration-300
          hover:border-[#9C0000] hover:shadow-md"
        >

          {/* TEXT */}
          <h2 className="font-heading 
            text-xl sm:text-2xl md:text-3xl lg:text-4xl
            flex items-center gap-3 leading-tight"
          >
            <span className="text-black">Let’s</span>

            <span className="stroke-text-red text-transparent">
              Discuss
            </span>

            <span className="w-2 h-2 bg-[#9C0000] rounded-full"></span>
          </h2>

          {/* ARROW */}
          <div className="text-[#9C0000] transition-transform duration-300 rotate-45 group-hover:rotate-0">
            <FiArrowUpRight size={28} strokeWidth={1.5} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DiscussCTA;