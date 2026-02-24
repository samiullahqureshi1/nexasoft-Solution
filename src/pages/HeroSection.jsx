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
        className="relative w-full 
  py-20 md:py-28 lg:py-32 
  px-6 md:px-10 lg:px-16 
  overflow-hidden bg-cover bg-center 
  border-b border-[#D9DADB]"
        style={{
          backgroundImage:
            "url('https://sevenkoncepts.com/textures/texture.png')",
        }}
      >
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-[#F1F3F5]/90 -z-10"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-16 md:gap-10">
          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-body tracking-wide mb-4 md:mb-6 text-gray-600">
              Engineering Software That Drives Innovation
            </p>

            <h1
              className="font-heading 
        text-4xl sm:text-5xl md:text-6xl lg:text-[68px] 
        leading-[1.1] md:leading-[1.05] text-black"
            >
              Software Agency
              <br />
              Delivering
              <br />
              <span className="text-[#9C0000]">Growth</span> & Performance
            </h1>
          </div>

          {/* RIGHT SIDE CIRCLE */}
          <div className="hidden md:flex items-center justify-center cursor-pointer">
            <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 flex items-center justify-center">
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
              <div className="text-[#434343]">
                <FiArrowUpRight size={24} md:size={26} strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <MarqueeSection />
      <ServicesSection />
      <TechnologiesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <DiscussCTA />
    </>
  );
};

export default HeroSection;
