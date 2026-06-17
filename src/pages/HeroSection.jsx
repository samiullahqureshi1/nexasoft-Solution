import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import AboutSection from "./hero/AboutSection";
import MarqueeSection from "./hero/MarqueeSection";
import ServicesSection from "./hero/ServicesSection";
import TechnologiesSection from "./hero/TechnologiesSection";
import CaseStudiesSection from "./hero/CaseStudiesSection";
import TestimonialsSection from "./hero/TestimonialsSection";
import DiscussCTA from "./hero/DiscussCTA";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Nexasoft Solutions",
  "url": "https://thenexasoftsolutions.com",
  "logo": "https://cdn.shopify.com/s/files/1/0676/1155/7936/files/20260228_1200_Image_Generation_simple_compose_01kjjxd1yge5p9bd1xhb63nv84.png?v=1772309488",
  "image": "https://cdn.shopify.com/s/files/1/0676/1155/7936/files/20260228_1200_Image_Generation_simple_compose_01kjjxd1yge5p9bd1xhb63nv84.png?v=1772309488",
  "description": "Nexasoft Solutions is a software agency specializing in custom software development, web design & development, and digital marketing services.",
  "email": "solutionsneasoft@gmail.com",
  "priceRange": "$$",
  "serviceType": [
    "Custom Software Development",
    "Web Design and Development",
    "Digital Marketing",
    "SEO Services",
    "Shopify Development",
    "ERP System Development"
  ],
  "areaServed": ["Pakistan", "United States", "United Kingdom"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software & Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Design & Development",
          "url": "https://thenexasoftsolutions.com/services/web-design-development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing",
          "url": "https://thenexasoftsolutions.com/services/digital-marketing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Software Development",
          "url": "https://thenexasoftsolutions.com/services/custom-software-development"
        }
      }
    ]
  }
};

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <SEO
        title="Software Agency | Web Design, Custom Software & Digital Marketing"
        description="Nexasoft Solutions is a software agency delivering custom software development, professional web design & development, and result-driven digital marketing. Serving Pakistan, the US & beyond."
        canonical="https://thenexasoftsolutions.com/"
        schema={homepageSchema}
      />

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
              <span className="text-[#9C0000]">Growth</span> &amp; Performance
            </h1>
          </div>

          {/* RIGHT SIDE CIRCLE */}
          <div
            onClick={() => {
              navigate("/case-study");
            }}
            className="hidden md:flex items-center justify-center cursor-pointer"
            aria-label="View our case studies"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 flex items-center justify-center">
              {/* Rotating Circular Text */}
              <svg
                className="absolute w-full h-full animate-spin-slow"
                viewBox="0 0 200 200"
                aria-hidden="true"
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
                <FiArrowUpRight size={24} strokeWidth={2} />
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
