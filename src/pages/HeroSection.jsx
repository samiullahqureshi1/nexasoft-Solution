import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import AboutSection from "./hero/AboutSection";
import MarqueeSection from "./hero/MarqueeSection";
import ServicesSection from "./hero/ServicesSection";
import TechnologiesSection from "./hero/TechnologiesSection";
import CaseStudiesSection from "./hero/CaseStudiesSection";
import TestimonialsSection from "./hero/TestimonialsSection";
import DiscussCTA from "./hero/DiscussCTA";

const HeroSection = () => {
  return (
    <>
      <section
        className="relative w-full py-32 px-16 overflow-hidden bg-cover bg-center border-b border-[#D9DADB] "
        style={{
          backgroundImage:
            "url('https://sevenkoncepts.com/textures/texture.png')",
        }}
      >
        {/* Light Overlay (optional – subtle premium effect) */}
        <div className="absolute inset-0 bg-[#F1F3F5]/90 -z-10"></div>

        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            <p className="text-sm font-body tracking-wide mb-6 text-gray-600">
              Engineering Software That Drives Innovation
            </p>

            <h1 className="font-heading text-[68px] leading-[1.05] text-black">
              Software Agency
              <br />
              Delivering
              <br />
              <span className="text-red-600">Growth</span> & Performance
            </h1>
          </div>

          {/* RIGHT SIDE CIRCLE */}
          <div className="hidden md:flex items-center justify-center cursor-pointer">
            <div className="relative w-52 h-52 flex items-center justify-center">
              {/* Rotating Circular Text */}
              <svg
                className="absolute w-full h-full animate-spin-slow"
                viewBox="0 0 200 200"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="
            M 100,100
            m -80,0
            a 80,80 0 1,1 160,0
            a 80,80 0 1,1 -160,0
          "
                  />
                </defs>

                <text
                  fill="#434343"
                  fontSize="13"
                  letterSpacing="5"
                  fontFamily="Poppins"
                >
                  <textPath href="#circlePath" startOffset="0%">
                    OUR CASE STUDIES • OUR CASE STUDIES •
                  </textPath>
                </text>
              </svg>

              {/* Center Arrow */}
              <div className="text-[#434343] ">
                <FiArrowUpRight size={28} strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
       <MarqueeSection />
       <ServicesSection/>
       <TechnologiesSection/>
       <CaseStudiesSection/>
       <TestimonialsSection/>
       <DiscussCTA/>
    </>
  );
};

export default HeroSection;
