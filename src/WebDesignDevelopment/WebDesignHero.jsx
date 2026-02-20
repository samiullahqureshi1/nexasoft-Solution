import React, { useState } from "react";
import {
  FaLaptopCode,
  FaCube,
  FaDesktop,
  FaPenNib,
  FaBoxOpen,
} from "react-icons/fa";

const services = [
  { id: 1, name: "Website Design & Development", icon: <FaLaptopCode /> },
  { id: 2, name: "Brand Design", icon: <FaCube /> },
  { id: 3, name: "Web Design", icon: <FaDesktop /> },
  { id: 4, name: "Copywriting", icon: <FaPenNib /> },
  { id: 5, name: "E-Commerce / CMS", icon: <FaBoxOpen /> },
];

const WebDesignHero = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="w-full bg-[#F1F3F5] pt-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-20">
          <div className="max-w-[700px]">
            <p className="font-body text-xs tracking-[0.25em] text-gray-500 mb-8">
              WEBSITE DESIGN & DEVELOPMENT
            </p>

            <h1 className="font-heading text-[70px] leading-[1.02] tracking-[-0.02em]">
              <span className="text-[#1A1A1A] block">Websites That</span>

              <span className="block">
                <span className="text-[#9C0000]">Captivate</span>
                <span className="text-[#1A1A1A]"> & Convert</span>
              </span>
            </h1>
          </div>

          <div className="md:pt-16 max-w-[520px]">
            <p className="font-body text-[18px] leading-[1.8] text-gray-600">
              We build beautiful, responsive websites engineered with AI-driven
              insights to maximize engagement and drive results. Clarity,
              strategy, and seamless functionality—powered by intelligence.
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
      </div>
    </section>
  );
};

export default WebDesignHero;
