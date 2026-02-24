
import React, { useState } from "react";
import {
  FaBullhorn,
  FaSearch,
  FaMousePointer,
  FaHashtag,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "Digital Marketing",
    icon: <FaBullhorn />,
    description:
      "Comprehensive digital strategies designed to build visibility, attract the right audience, and drive measurable business growth.",
    image:
      "https://img.freepik.com/free-photo/notebook-with-words-digital-marketing_1134-434.jpg",
  },
  {
    id: 2,
    name: "SEO",
    icon: <FaSearch />,
    description:
      "Search engine optimization strategies that improve rankings, increase organic traffic, and deliver long-term results.",
    image:
      "https://img.freepik.com/free-photo/magnifying-glass-with-seo-concepts_1134-81.jpg",
  },
  {
    id: 3,
    name: "PPC",
    icon: <FaMousePointer />,
    description:
      "Targeted pay-per-click campaigns built to maximize ROI, increase conversions, and scale performance efficiently.",
    image:
      "https://img.freepik.com/free-photo/online-marketing-commercial-connection-technology_53876-132688.jpg",
  },
  {
    id: 4,
    name: "Social Media",
    icon: <FaHashtag />,
    description:
      "Creative and strategic social media campaigns that build engagement, trust, and strong brand communities.",
    image:
      "https://img.freepik.com/free-psd/instagram-social-media-marketing-banner-business-promotion-design-template_47987-20513.jpg",
  },
  {
    id: 5,
    name: "Performance Marketing",
    icon: <FaChartLine />,
    description:
      "Data-focused marketing campaigns optimized continuously to improve results and drive sustainable growth.",
    image:
      "https://img.freepik.com/premium-photo/floating-laptop-bar-chart-with-marketing-performance-text-concept-as-sleek-vector-illustration_980716-709557.jpg",
  },
];

const DigitalMarketingHero = () => {
  const [active, setActive] = useState(1);
  const activeService = services.find((s) => s.id === active);

  return (
    <section className="w-full bg-[#F1F3F5] pt-24 sm:pt-28 md:pt-32 lg:pt-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
          <div className="max-w-[700px]">
            <p className="font-body text-[10px] sm:text-xs tracking-[0.25em] text-gray-500 mb-6 md:mb-8">
              DIGITAL MARKETING SERVICES
            </p>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[70px] leading-[1.05] tracking-[-0.02em]">
              <span className="text-[#9C0000]">Marketing</span>
              <span className="text-[#1A1A1A]"> That Moves</span>
            </h1>
          </div>

          <div className="lg:pt-16 max-w-[520px]">
            <p className="font-body text-sm sm:text-base md:text-lg leading-[1.8] text-gray-600">
              Data-driven strategies, powered by AI. We cut through the noise to build
              campaigns that attract, engage, and convert your ideal audience,
              driving real growth and lasting loyalty.
            </p>
          </div>
        </div>

        {/* TABS */}
        <div className="mt-16 md:mt-24 border-t border-[#D9DADB]">
          <div className="flex overflow-x-auto scrollbar-hide text-center">
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => setActive(service.id)}
                className={`relative min-w-[170px] md:min-w-0 md:flex-1 cursor-pointer py-8 md:py-12 px-4 transition-all duration-300
                ${active === service.id ? "text-[#9C0000]" : "text-gray-500 hover:text-black"}`}
              >
                {/* Divider Desktop Only */}
                {index !== 0 && (
                  <div className="hidden md:block absolute left-0 top-8 bottom-8 w-[1px] bg-[#E5E5E5]"></div>
                )}

                <div className="flex flex-col items-center gap-4 md:gap-5">
                  <div className="text-2xl md:text-3xl opacity-60">
                    {service.icon}
                  </div>

                  <p className="font-body text-xs md:text-sm">
                    {service.name}
                  </p>
                </div>

                {active === service.id && (
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#9C0000]"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="py-14 md:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">

            {/* TEXT */}
            <div className="flex-1 max-w-[550px] text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading mb-6">
                <span className="text-[#9C0000]">{activeService.name}</span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
                {activeService.description}
              </p>

              <button className="group w-full sm:w-auto flex justify-center items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full border border-[#9C0000] text-[#9C0000] font-body transition hover:bg-[#9C0000] hover:text-white">
                Let’s Make Something Together
              </button>
            </div>

            {/* IMAGE */}
            <div className="flex-1 w-full">
              <img
                src={activeService.image}
                alt={activeService.name}
                className="w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-auto object-cover rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default DigitalMarketingHero;