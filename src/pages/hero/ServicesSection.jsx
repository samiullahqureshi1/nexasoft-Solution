import React from "react";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaCode, FaBullhorn, FaCogs, FaCube } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section className="w-full bg-[#F1F3F5]  py-28 border-b border-[#D9DADB]">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto flex justify-between items-start gap-20 mb-24">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <p className="text-xs tracking-[4px] text-gray-500 font-body mb-6 uppercase">
            Powered by AI and Built for You
          </p>

          <h2 className="font-heading text-[64px] leading-[1.1] text-black">
            Smarter, Faster <br />
            Digital Solutions
          </h2>
        </div>

        {/* RIGHT SIDE */}
      </div>

      {/* Services Grid */}
      <div className="  grid md:grid-cols-4 border-t border-[#D9DADB]">
        {/* CARD 1 */}
        <div className="p-10 border-r border-[#D9DADB]">
          <FaCode className="text-4xl text-gray-500 mb-6" />
          <h3 className="font-heading text-xl mb-4">
            Website Design & Development
          </h3>
          <p className="text-gray-600 font-body mb-6">
            Custom websites built for performance, SEO, and user experience.
          </p>

          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-red-50 transition">
              <FiArrowUpRight className="text-red-500" />
            </div>
            <span className="text-sm tracking-wider font-body">READ MORE</span>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="p-10 border-r border-[#D9DADB]">
          <FaBullhorn className="text-4xl text-gray-500 mb-6" />
          <h3 className="font-heading text-xl mb-4">
            Digital Marketing Services
          </h3>
          <p className="text-gray-600 font-body mb-6">
            Data-driven strategies to scale your online presence.
          </p>

          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-red-50 transition">
              <FiArrowUpRight className="text-red-500" />
            </div>
            <span className="text-sm tracking-wider font-body">READ MORE</span>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="p-10 border-r border-[#D9DADB]">
          <FaCogs className="text-4xl text-gray-500 mb-6" />
          <h3 className="font-heading text-xl mb-4">
            Custom Software Development
          </h3>
          <p className="text-gray-600 font-body mb-6">
            Scalable enterprise solutions tailored to your needs.
          </p>

          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-red-50 transition">
              <FiArrowUpRight className="text-red-500" />
            </div>
            <span className="text-sm tracking-wider font-body">READ MORE</span>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="p-10">
          <FaCube className="text-4xl text-gray-500 mb-6" />
          <h3 className="font-heading text-xl mb-4">
            Dedicated Resource Model
          </h3>
          <p className="text-gray-600 font-body mb-6">
            Build and scale your remote development team effortlessly.
          </p>

          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-red-50 transition">
              <FiArrowUpRight className="text-red-500" />
            </div>
            <span className="text-sm tracking-wider font-body">READ MORE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
