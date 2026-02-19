import React from "react";

const AboutSection = () => {
  return (
    <section className="relative w-full bg-[#F1F3F5] px-16 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm tracking-[3px] font-body text-gray-500 mb-4">
            ABOUT US.
          </p>

          <h2 className="font-heading text-4xl leading-tight mb-6">
            Leading <span className="text-red-600">Software Development</span>
            <br /> Agency Pakistan & US
          </h2>

          <p className="font-body text-gray-600 leading-relaxed mb-8 max-w-xl">
            We are a custom software agency focused on building scalable,
            high-performance digital products. From web and mobile applications
            to enterprise systems, we deliver solutions that drive measurable
            business growth.
          </p>

          <div className="border-b border-black/10 mb-8"></div>

          {/* Stats */}
          <div className="flex gap-16">
            <div>
              <h3 className="text-3xl font-heading text-red-600">150+</h3>
              <p className="text-xs tracking-[2px] font-body text-gray-500 mt-2">
                PROJECTS DELIVERED
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-heading text-red-600">12+</h3>
              <p className="text-xs tracking-[2px] font-body text-gray-500 mt-2">
                INDUSTRIES SERVED
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <div className="relative overflow-hidden">
            <video
              src="https://api.sevenkoncepts.com/uploads/Collage_Animation_1_c9965468d1.mp4" // 👈 apni video path lagana
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Red Diagonal Shape */}
          </div>

          {/* Experience Text */}
          <div>
            <h3 className="text-2xl font-heading mb-2">8+ Years</h3>
            <p className="text-sm tracking-[3px] text-gray-500 font-body uppercase">
              Building Reliable Software Solutions Worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
