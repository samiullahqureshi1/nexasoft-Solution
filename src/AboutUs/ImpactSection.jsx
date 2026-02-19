import React from "react";
import { FiArrowUpRight, FiPlay } from "react-icons/fi";

const ImpactSection = () => {
  return (
    <section className="w-full bg-[#F1F3F5] py-32 border-t border-[#D9DADB]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="font-heading text-5xl leading-tight mb-6">
            Nexasoft Impact <br />
            <span className="text-red-600">In Numbers</span>
          </h2>

          <p className="text-gray-600 font-body mb-12 max-w-lg">
            See how we engineer, scale and accelerate digital businesses 
            with measurable growth and performance-driven solutions.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-10 mb-12">
            <div>
              <h3 className="font-heading text-3xl">150+</h3>
              <p className="text-gray-600 text-sm font-body mt-2">
                Projects Delivered
              </p>
            </div>

            <div>
              <h3 className="font-heading text-3xl">50+</h3>
              <p className="text-gray-600 text-sm font-body mt-2">
                Global Clients
              </p>
            </div>

            <div>
              <h3 className="font-heading text-3xl">$25M+</h3>
              <p className="text-gray-600 text-sm font-body mt-2">
                Revenue Generated
              </p>
            </div>
          </div>

        <button className="group flex items-center gap-3 px-8 py-4 rounded-full border border-red-600 text-red-600 font-body transition hover:bg-red-600 hover:text-white">
  
  JOIN OUR SUCCESS STORY
  
  <span className="transition-transform duration-300 rotate-45 group-hover:rotate-0">
    <FiArrowUpRight size={20} />
  </span>

</button>
        </div>

        {/* RIGHT SIDE - VIDEO */}
        <div className="relative group">
          
          <div className="rounded-3xl overflow-hidden border border-black/10 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1581090700227-4c4f50b3b1c6?q=80&w=1600"
              alt="Impact Video"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center cursor-pointer group-hover:scale-110 transition">
              <FiPlay className="text-red-600 text-3xl ml-1" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ImpactSection;
