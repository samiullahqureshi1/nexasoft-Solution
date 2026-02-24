import React, { useState } from "react";

const projects = [
  // SOFTWARE PROJECTS
  {
    id: 1,
    title: "ERP System",
    category: "Custom Software Development",
    type: "image",
    disableSlide: true,
    image:
      "https://cdn.dribbble.com/userupload/8487632/file/original-278659aec7eb68f9ec56f44d3b5d55e3.png",
  },
  {
    id: 2,
    title: "CRM System",
    category: "Custom Software Development",
    type: "image",
    disableSlide: true,
    image:
      "https://cdn.dribbble.com/userupload/43395603/file/original-4d875726d2a266fb1da5fe82baa5e4b7.png",
  },
  {
    id: 3,
    title: "AI-Based HRMS",
    category: "Custom Software Development",
    type: "video",
    disableSlide: true,
    video:
      "https://cdn.dribbble.com/userupload/43514193/file/original-222bd4f8369f5e9f77aa6ccd6287b03d.mp4",
  },

  // SHOPIFY PROJECTS
  {
    id: 4,
    title: "Luxury Beauty Store",
    category: "Ecommerce / Shopify",
    type: "image",
    disableSlide: false,
    image:
      "https://www.thewahidsolutions.com/cdn/shop/files/image_124_900x.png?v=1769173531",
  },
  {
    id: 5,
    title: "Shopify Fashion Store",
    category: "Ecommerce / Shopify",
    type: "video",
    disableSlide: false,
    video:
      "https://cdn.dribbble.com/userupload/3884018/file/original-47c1e3a80b5df282a8e8cdf89ef0d301.mp4",
  },
  {
    id: 6,
    title: "Shopify Electronics Store",
    category: "Ecommerce / Shopify",
    type: "image",
    disableSlide: true,
    image:
      "https://cdn.dribbble.com/userupload/44954535/file/66e083474e5ee314098d6f9878f09545.png",
  },

  // WEBSITE DESIGN
  {
    id: 7,
    title: "Premium Fashion Brand",
    category: "Website Design & Development",
    type: "image",
    disableSlide: false,
    image:
      "https://www.thewahidsolutions.com/cdn/shop/files/image_553_900x.png?v=1769173532",
  },
  {
    id: 8,
    title: "Brand Website Design",
    category: "Website Design & Development",
    type: "image",
    disableSlide: false,
    image:
      "https://www.thewahidsolutions.com/cdn/shop/files/image_129_900x.png?v=1769173532",
  },

  // UI/UX
  {
    id: 9,
    title: "Modern Accessories UI",
    category: "Website Design & Development",
    type: "image",
    disableSlide: true,
    image:
      "https://www.thewahidsolutions.com/cdn/shop/files/image_511_900x.png?v=1769173531",
  },
];
const filters = [
  "All",
  "Website Design & Development",
  "Digital Marketing",
  "Custom Software Development",
  "Dedicated Resource Model",
  "Ecommerce / Shopify",
];
const CaseStudiesPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-[#F1F3F5] min-h-screen pt-40 px-16">
      {/* HERO */}
      <div className="max-w-7xl mx-auto mb-20">
        <p className="font-body text-sm tracking-widest mb-6 flex items-center gap-2 text-gray-600">
          <span className="w-2 h-2 bg-[#9C0000] rounded-full"></span>
          FROM VISION TO REALITY
        </p>

        <h1 className="font-heading text-[90px] leading-none">
          <span className="text-black">Case </span>
          <span className="text-[#9C0000]">Studies</span>
        </h1>
      </div>

      {/* FILTER BAR */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-white rounded-2xl px-8 py-4 flex flex-wrap gap-6 font-semibold text-sm">
          <span className="text-gray-500">Filter By :</span>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`transition ${
                activeFilter === filter
                  ? "text-[#9C0000]"
                  : "text-gray-700 hover:text-[#9C0000]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* PROJECT GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 pb-32">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white cursor-pointer transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              {project.type === "video" ? (
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-linear
      ${project.disableSlide ? "" : "group-hover:scale-105"}`}
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className={`w-full h-full object-cover object-top transition-transform duration-[2000ms] ease-linear
      ${project.disableSlide ? "" : "group-hover:-translate-y-[65%]"}`}
                />
              )}
            </div>

            {/* OVERLAY */}
            {/* <div className="absolute bottom-0 left-0 w-full bg-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-sm text-gray-500 font-body mb-2">
                {project.category}
              </p>

              <h3 className="font-heading text-xl group-hover:text-[#9C0000] transition duration-300">
                {project.title}
              </h3>

              <div className="mt-4 w-0 group-hover:w-12 h-[2px] bg-[#9C0000] transition-all duration-300"></div>
            </div> */}
            <div className="absolute bottom-0 left-0 w-full bg-white p-6">
              <p className="text-sm text-gray-500 font-body mb-2">
                {project.category}
              </p>

              <h3 className="font-heading text-xl transition duration-300">
                {project.title}
              </h3>

              <div className="mt-4 w-12 h-[2px] bg-[#9C0000]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage;
