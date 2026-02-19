import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const DiscussCTA = () => {
const navigate=useNavigate()
  return (
    <section className="w-full bg-[#F1F3F5] py-16 px-6">
      
      <div className="max-w-7xl mx-auto">
        
        <div onClick={()=>{
            navigate("/contact")
        }} className="group border border-black/20 rounded-2xl px-16 py-10 flex items-center justify-between cursor-pointer transition hover:border-red-400">

          {/* TEXT */}
          <h2 className="font-heading text-6xl flex items-center gap-4">
            <span className="text-black">Let’s</span>

            <span className="stroke-text-red text-transparent">
              Discuss
            </span>

            {/* Red Dot */}
            <span className="w-3 h-3 bg-red-600 rounded-full ml-2"></span>
          </h2>

          {/* ARROW */}
          <div className="transition-transform duration-300 group-hover:rotate-0 rotate-45 text-red-600">
            <FiArrowUpRight size={60} strokeWidth={1.5} />
          </div>

        </div>

      </div>

    </section>
  );
};

export default DiscussCTA;
