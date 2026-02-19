import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const WhyNexasoftSection = () => {
  return (
    <section className="w-full bg-[#F1F3F5] py-32 border-t border-[#D9DADB]">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN HEADING */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-6xl leading-tight">
            Why <span className="text-red-600">Nexasoft</span>?
          </h2>
        </div>

        {/* 3 COLUMNS */}
        <div className="grid md:grid-cols-3 gap-16 mb-28">

          {/* CARD */}
          <div>
            <div className="border-t border-black/20 pt-8">
              <h3 className="font-heading text-2xl mb-6">
                Our Vision
              </h3>

              <p className="font-body text-gray-600 leading-relaxed">
                We build clean, scalable and performance-driven digital solutions.
                Every decision is guided by clarity, user experience and long-term growth.
              </p>
            </div>
          </div>

          {/* CARD */}
          <div>
            <div className="border-t border-black/20 pt-8">
              <h3 className="font-heading text-2xl mb-6">
                Our Mission
              </h3>

              <p className="font-body text-gray-600 leading-relaxed">
                We engineer software with precision. From architecture to deployment,
                our focus is delivering reliable systems that convert and perform.
              </p>
            </div>
          </div>

          {/* CARD */}
          <div>
            <div className="border-t border-black/20 pt-8">
              <h3 className="font-heading text-2xl mb-6">
                Our Commitment
              </h3>

              <p className="font-body text-gray-600 leading-relaxed">
                We partner with clients, not just serve them. Our commitment is
                transparency, speed, innovation and measurable business impact.
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM CTA */}
        <div className="text-center">
          <h3 className="font-heading text-4xl mb-6">
            Build or Scale?
          </h3>

          <p className="font-body text-gray-600 mb-10">
            Whether you're launching something new or improving what exists,
            we’re ready to help you grow.
          </p>

          <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-red-600 text-red-600 font-body transition hover:bg-red-600 hover:text-white">
            
            TALK NOW
            
            <span className="transition-transform duration-300 rotate-45 group-hover:rotate-0">
              <FiArrowUpRight size={18} />
            </span>

          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyNexasoftSection;
