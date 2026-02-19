import React from "react";

const projects = [
  {
    title: "Luxury Beauty Store",
    category: "Ecommerce / Shopify",
    image:
      "https://www.thewahidsolutions.com/cdn/shop/files/image_124_900x.png?v=1769173531",
  },
  {
    title: "Premium Fashion Brand",
    category: "Web Design",
    image:
      "https://www.thewahidsolutions.com/cdn/shop/files/image_553_900x.png?v=1769173532",
  },
  {
    title: "Modern Accessories",
    category: "UI/UX Design",
    image:
      "https://www.thewahidsolutions.com/cdn/shop/files/image_124_900x.png?v=1769173531",
  },
];

const WorkShowcaseSection = () => {
  return (
    <section className="w-full bg-[#F1F3F5] py-32 border-t border-[#D9DADB]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl mb-4">
            Examples of <span className="text-red-600">Our Work</span>
          </h2>
          <p className="text-gray-600 font-body">
            Premium digital products crafted for performance & growth.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white cursor-pointer"
            >
              
              {/* IMAGE WRAPPER */}
              <div className="h-[420px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition-transform duration-700 ease-in-out group-hover:-translate-y-10"
                />
              </div>

              {/* OVERLAY INFO */}
              <div className="absolute bottom-0 left-0 w-full bg-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm text-gray-500 font-body mb-2">
                  {project.category}
                </p>
                <h3 className="font-heading text-xl group-hover:text-red-600 transition">
                  {project.title}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkShowcaseSection;
