import React, { useState } from "react";
import {
  FaLaptopCode,
  FaGlobe,
  FaMobileAlt,
  FaBriefcase,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "Custom Software ",
    slug: "custom-software-development",
    icon: <FaLaptopCode />,
    description:
      "We build tailored software solutions designed around your unique business needs,  scalability, and long-term success.",
    image:
      "https://img.freepik.com/premium-photo/erp-system-enterprise-resource-planning-blurred-background-business-automation-innovation-concept_161452-1369.jpg?ga=GA1.1.35512147.1759400476&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    name: "Web App Development",
    slug: "web-app-development",
    icon: <FaGlobe />,
    description:
      "Modern, secure, and high-performing web applications engineered to streamline workflows and enhance user experience.",
    image:
      "https://img.freepik.com/premium-photo/technology-design-interface-mobile-development-app-user-web-application-website-layout-bu_1064589-172675.jpg?ga=GA1.1.35512147.1759400476&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 3,
    name: "App Development",
    slug: "app-development",
    icon: <FaMobileAlt />,
    description:
      "Robust mobile applications designed for performance, usability, and seamless cross-platform experiences.",
    image:
      "https://img.freepik.com/premium-photo/technology-design-interface-mobile-development-app-user-web-application-website-layout-bu_1064589-172675.jpg?ga=GA1.1.35512147.1759400476&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 4,
    name: "Business Solutions",
    slug: "business-solutions",
    icon: <FaBriefcase />,
    description:
      "Intelligent software systems that automate operations, optimize processes, and drive measurable growth.",
    image:
      "https://img.freepik.com/free-photo/businesswoman-holding-cup-coffee-while-discussing-with-multi-ethnic-teamwork-solving-management-project-using-graphs-paperwork-diverse-coworkers-working-meeting-room-late-night_482257-15811.jpg?ga=GA1.1.35512147.1759400476&semt=ais_hybrid&w=740&q=80",
  },
];

const CustomHero = () => {
  const [active, setActive] = useState(1);
  const activeService = services.find((s) => s.id === active);
  return (
    <section className="w-full bg-[#F1F3F5] pt-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-20">
          <div className="max-w-[700px]">
            <p className="font-body text-xs tracking-[0.25em] text-gray-500 mb-8 uppercase">
              CUSTOM SOFTWARE DEVELOPMENT
            </p>

            <h1 className="font-heading text-[70px] leading-[1.02] tracking-[-0.02em]">
              <span className="text-[#1A1A1A] block">Built-for-You</span>
              <span className="text-[#9C0000] block">Software</span>
            </h1>
          </div>

          <div className="md:pt-16 max-w-[520px]">
            <p className="font-body text-[18px] leading-[1.8] text-gray-600">
              Tired of clunky tools that slow you down? We design AI-powered
              custom software that solves real challenges – streamlining
              workflows, automating tasks, and delighting your customers.
            </p>
          </div>
        </div>

        <div className="mt-24 border-t border-[#D9DADB]">
          <div className="flex justify-between text-center">
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => setActive(service.id)}
                className={`relative flex-1 cursor-pointer py-12 
        transition-all duration-300 
        ${active === service.id ? "text-[#9C0000]" : "text-gray-500 hover:text-black"}`}
              >
                {/* Vertical Divider */}
                {index !== 0 && (
                  <div className="absolute left-0 top-8 bottom-8 w-[1px] bg-[#E5E5E5]"></div>
                )}

                <div className="flex flex-col items-center gap-5">
                  <div className="text-3xl opacity-60">{service.icon}</div>

                  <p className="font-body text-sm">{service.name}</p>
                </div>

                {/* Active Bottom Line */}
                {active === service.id && (
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#9C0000]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="py-20">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* LEFT SIDE TEXT */}
            {/* LEFT SIDE TEXT */}
            <div className="flex-1 max-w-[550px]">
              <h2 className="text-4xl md:text-5xl font-heading mb-6">
                <span className="text-[#9C0000]">{activeService.name}</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {activeService.description}
              </p>

              {/* CTA Button */}
              <button className="group flex items-center gap-3 px-8 py-4 rounded-full border border-[#9C0000] text-[#9C0000] font-body transition hover:bg-[#9C0000] hover:text-white">
                Let’s Make Something Together
              </button>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex-1">
              <img
                src={activeService.image}
                alt={activeService.name}
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomHero;
