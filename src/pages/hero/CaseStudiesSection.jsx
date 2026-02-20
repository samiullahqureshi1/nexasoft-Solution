import React from "react";

const projects = [
  {
    title: "Sable V",
    desc: "Social Media Design, SEO Strategy, Content Optimization",
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1600",
  },
  {
    title: "Tutti Frutti",
    desc: "Android, Firebase, Laravel, Google APIs",
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=1600",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="w-full bg-[#F1F3F5] py-28 border-b border-[#D9DADB] overflow-hidden">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-20 px-6">
        <p className="text-xs tracking-[4px] text-gray-500 font-body mb-4 uppercase">
          Our Work
        </p>

        <h2 className="font-heading text-5xl">
          Selected <span className="text-[#9C0000]">Case Studies</span>
        </h2>
      </div>

      {/* MARQUEE WRAPPER */}
      <div className="relative overflow-hidden">

        <div className="flex animate-marquee whitespace-nowrap">

          {/* FIRST SET */}
          <div className="flex gap-6 px-6">
            {projects.map((project, index) => (
              <div
                key={`first-${index}`}
                className="group cursor-pointer min-w-[600px]"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-500 font-body mb-2">
                    {project.desc}
                  </p>

                  <h3 className="text-2xl font-heading group-hover:text-[#9C0000] transition">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* DUPLICATE SET (IMPORTANT FOR NO GAP) */}
          <div className="flex gap-6 px-6">
            {projects.map((project, index) => (
              <div
                key={`second-${index}`}
                className="group cursor-pointer min-w-[600px]"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-500 font-body mb-2">
                    {project.desc}
                  </p>

                  <h3 className="text-2xl font-heading group-hover:text-[#9C0000] transition">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default CaseStudiesSection;
