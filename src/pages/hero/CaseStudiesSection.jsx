import React from "react";

const projects = [
  {
    title: "ERP System",
    desc: "Enterprise Resource Planning Solution for Business Automation",
    type: "image",
    image:
      "https://cdn.dribbble.com/userupload/8487632/file/original-278659aec7eb68f9ec56f44d3b5d55e3.png?resize=1024x768&vertical=center",
  },
  {
    title: "CRM System",
    desc: "Customer Relationship Management Platform for Sales & Growth",
    type: "image",
    image:
      "https://cdn.dribbble.com/userupload/43395603/file/original-4d875726d2a266fb1da5fe82baa5e4b7.png?resize=1024x768&vertical=center",
  },
  {
    title: "AI-Based HRMS",
    desc: "Smart HR Management System Powered by Artificial Intelligence",
    type: "video",
    video:
      "https://cdn.dribbble.com/userupload/43514193/file/original-222bd4f8369f5e9f77aa6ccd6287b03d.mp4", // Yahan apni HRMS video link dal dena
  },
  {
    title: "Shopify Fashion Store",
    desc: "Custom Shopify eCommerce Store for Fashion Brand",
    type: "video",
    video:
      "https://cdn.dribbble.com/userupload/3884018/file/original-47c1e3a80b5df282a8e8cdf89ef0d301.mp4",
  },
  {
    title: "Shopify Electronics Store",
    desc: "High-Converting Shopify Store for Electronics",
    type: "image",
    image:
      "https://cdn.dribbble.com/userupload/44954535/file/66e083474e5ee314098d6f9878f09545.png?resize=1024x768&vertical=center",
  },
  {
    title: "Shopify Beauty Store",
    desc: "Premium Shopify eCommerce Store for Beauty Products",
    type: "image",
    image:
      "https://cdn.dribbble.com/userupload/37863043/file/6b9a38f80b50a19125880bb6844f64c6.png?resize=1024x768&vertical=center",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="w-full bg-[#F1F3F5] py-28 border-b border-[#D9DADB]">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-20 px-6">
        <p className="text-xs tracking-[4px] text-gray-500 font-body mb-4 uppercase">
          Our Work
        </p>

        <h2 className="font-heading text-5xl">
          Selected <span className="text-[#9C0000]">Case Studies</span>
        </h2>
      </div>

      {/* GRID SECTION */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-500"
            >
              {/* MEDIA CONTAINER */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                {project.type === "video" ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <p className="text-sm text-gray-500 font-body mb-2">
                  {project.desc}
                </p>

                <h3 className="text-xl font-heading group-hover:text-[#9C0000] transition">
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

export default CaseStudiesSection;
