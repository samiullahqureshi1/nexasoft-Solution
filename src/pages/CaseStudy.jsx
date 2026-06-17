import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import caseStudies from "../data/caseStudies";

const filters = [
  "All",
  "Website Design & Development",
  "Digital Marketing",
  "Custom Software Development",
  "Ecommerce / Shopify",
];

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Case Studies — Nexasoft Solutions Portfolio",
  "url": "https://thenexasoftsolutions.com/case-study",
  "description": "Browse Nexasoft Solutions' portfolio of ERP systems, CRM platforms, Shopify stores, web design projects, and custom software delivered across industries.",
  "provider": {
    "@type": "Organization",
    "name": "Nexasoft Solutions",
    "url": "https://thenexasoftsolutions.com"
  }
};

const CaseStudiesPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-[#F1F3F5] min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-40">
      <SEO
        title="Case Studies — Our Portfolio of Software, Web Design & Marketing Projects"
        description="Browse Nexasoft Solutions' portfolio of delivered projects including ERP systems, CRM platforms, Shopify e-commerce stores, web design, and custom software solutions across industries."
        canonical="https://thenexasoftsolutions.com/case-study"
        schema={portfolioSchema}
      />

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mb-12 sm:mb-16 md:mb-20">
        <p className="font-body text-[10px] sm:text-xs tracking-[0.25em] mb-6 flex items-center gap-2 text-gray-600">
          <span className="w-2 h-2 bg-[#9C0000] rounded-full"></span>
          FROM VISION TO REALITY
        </p>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[90px] leading-[1.05]">
          <span className="text-black">Case </span>
          <span className="text-[#9C0000]">Studies</span>
        </h1>
      </div>

      {/* FILTER BAR */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 mb-10 md:mb-14">
        <div className="bg-white rounded-xl sm:rounded-2xl px-5 sm:px-8 py-4 flex flex-wrap items-center gap-4 sm:gap-6 font-semibold text-xs sm:text-sm shadow-sm">
          <span className="text-gray-500">Filter :</span>

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
      <div
        className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
    gap-6 sm:gap-8 md:gap-10 pb-20 sm:pb-24 md:pb-28"
      >
        {filteredProjects.map((project) => (
          <Link
            to={`/case-study/${project.slug}`}
            key={project.id}
            className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-[#E5E5E5] bg-white cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block"
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
                  aria-label={`${project.title} — ${project.category}`}
                  className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-linear
              ${project.disableSlide ? "" : "group-hover:scale-105"}`}
                />
              ) : (
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.category} by Nexasoft Solutions`}
                  loading="lazy"
                  className={`w-full h-full object-cover object-top transition-transform duration-[2000ms] ease-linear
              ${project.disableSlide ? "" : "group-hover:-translate-y-[55%]"}`}
                />
              )}
            </div>

            {/* INFO */}
            <div className="absolute bottom-0 left-0 w-full bg-white p-4 sm:p-6">
              <p className="text-xs sm:text-sm text-gray-500 mb-2">
                {project.category}
              </p>

              <h2 className="font-heading text-base sm:text-lg md:text-xl">
                {project.title}
              </h2>

              <div className="mt-3 sm:mt-4 w-10 sm:w-12 h-[2px] bg-[#9C0000]"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage;
