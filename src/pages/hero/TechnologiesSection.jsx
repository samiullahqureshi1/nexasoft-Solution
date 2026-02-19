import React, { useState } from "react";
import { FaFigma, FaReact, FaNodeJs, FaShopify } from "react-icons/fa";
import { SiAdobe, SiCanva, SiWebflow, SiMongodb } from "react-icons/si";

const data = [
  {
    title: "Digital Marketing Services",
    tech: [
      { icon: <FaReact />, name: "React" },
      { icon: <FaNodeJs />, name: "Node JS" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <FaShopify />, name: "Shopify" },
    ],
  },
  {
    title: "Designing and Branding",
    tech: [
      { icon: <FaFigma />, name: "Figma" },
      { icon: <SiAdobe />, name: "Adobe" },
      { icon: <SiCanva />, name: "Canva" },
      { icon: <SiWebflow />, name: "Webflow" },
    ],
  },
  {
    title: "Front-end Tech",
    tech: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiWebflow />, name: "Webflow" },
      { icon: <FaFigma />, name: "Figma" },
      { icon: <SiAdobe />, name: "Adobe" },
    ],
  },
  {
    title: "Back-end Tech",
    tech: [
      { icon: <FaNodeJs />, name: "Node JS" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <FaReact />, name: "Next JS" },
      { icon: <FaShopify />, name: "API" },
    ],
  },
  {
    title: "Third Party API",
    tech: [
      { icon: <FaShopify />, name: "Stripe" },
      { icon: <SiAdobe />, name: "Google API" },
      { icon: <FaNodeJs />, name: "REST API" },
      { icon: <FaReact />, name: "GraphQL" },
    ],
  },
  {
    title: "Ecommerce & CMS",
    tech: [
      { icon: <FaShopify />, name: "Shopify" },
      { icon: <SiWebflow />, name: "Webflow" },
      { icon: <SiAdobe />, name: "Adobe CMS" },
      { icon: <FaReact />, name: "Headless CMS" },
    ],
  },
];

const TechnologiesSection = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="w-full bg-[#F1F3F5] px-16 py-28 border-b border-[#D9DADB]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-20">
          <div>
            <p className="text-xs tracking-[4px] text-gray-500 font-body mb-4 uppercase">
              Skills & Experience
            </p>

            <h2 className="font-heading text-5xl leading-tight">
              <span className="text-red-600">Technologies</span> We Work with
            </h2>
          </div>

          <button className="px-8 py-3 border border-black/30 rounded-full text-sm tracking-wider font-body hover:bg-black hover:text-white transition">
            SERVICES
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE (Dynamic Tech Cards) */}
          <div>
            <div className="flex gap-8 mb-10">
              {data[active].tech.map((item, index) => (
                <div
                  key={index}
                  className="w-40 h-52 rounded-[60px] border border-black/10 flex flex-col items-center justify-center text-center transition hover:border-red-400"
                >
                  <div className="text-4xl text-gray-600 mb-4">
                    {item.icon}
                  </div>
                  <p className="font-body text-gray-600">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>

            {/* DOTS */}
            <div className="flex gap-3">
              {data.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    active === index
                      ? "bg-red-600"
                      : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE (Selectable List) */}
          <div className="space-y-10">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => setActive(index)}
                className="flex items-center gap-6 cursor-pointer group"
              >
                <span className="text-gray-400 font-body text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className={`font-heading text-2xl transition ${
                    active === index
                      ? "text-red-600"
                      : "text-black group-hover:text-red-600"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechnologiesSection;
