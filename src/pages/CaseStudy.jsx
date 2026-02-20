import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Luxury Beauty Store",
    category: "Ecommerce / Shopify",
    image:
      "https://www.thewahidsolutions.com/cdn/shop/files/image_124_900x.png?v=1769173531",
  },
  {
    id: 2,
    title: "Premium Fashion Brand",
    category: "Web Design",
    image:
      "https://www.thewahidsolutions.com/cdn/shop/files/image_553_900x.png?v=1769173532",
  },
  {
    id: 3,
    title: "Modern Accessories",
    category: "UI/UX Design",
    image:
      "https://www.thewahidsolutions.com/cdn/shop/files/image_124_900x.png?v=1769173531",
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
            <div className="relative h-[420px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-top 
               transition-transform duration-[2500ms] ease-linear
               group-hover:-translate-y-[65%]"
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute bottom-0 left-0 w-full bg-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-sm text-gray-500 font-body mb-2">
                {project.category}
              </p>

              <h3 className="font-heading text-xl group-hover:text-[#9C0000] transition duration-300">
                {project.title}
              </h3>

              <div className="mt-4 w-0 group-hover:w-12 h-[2px] bg-[#9C0000] transition-all duration-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage;
