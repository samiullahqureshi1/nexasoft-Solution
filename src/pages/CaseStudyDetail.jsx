import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import caseStudies from "../data/caseStudies";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = caseStudies.find((p) => p.slug === id);
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate("/404");
    }
  }, [id, navigate]);

  if (!project) return null;

  return (
    <div className="bg-[#F1F3F5] min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-20">
      <SEO
        title={`${project.title} | Nexasoft Solutions Case Study`}
        description={`Read the case study for ${project.client}. ${project.overview}`}
        canonical={`https://thenexasoftsolutions.com/case-study/${project.slug}`}
        type="Article"
        image={project.image}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <Link
          to="/case-study"
          className="inline-flex items-center text-[#9C0000] hover:text-black font-semibold mb-8 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back to Case Studies
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mb-10">
          <div className="inline-block bg-[#9C0000] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            {project.category}
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black mb-6">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-6 text-sm font-semibold text-gray-500 mb-10">
            <div>
              <span className="block text-xs uppercase tracking-wider text-gray-400">Client</span>
              <span className="text-black">{project.client}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-gray-400">Duration</span>
              <span className="text-black">{project.duration}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-gray-400">Tech Stack</span>
              <span className="text-[#9C0000]">{project.techStack.join(", ")}</span>
            </div>
          </div>

          <div className="w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-10">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                Media Available
              </div>
            )}
          </div>

          <div className="prose prose-lg max-w-none font-body">
            <h2 className="text-2xl font-bold text-black mb-4">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-8">{project.overview}</p>

            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <div className="bg-[#F1F3F5] p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-black mb-4">The Challenge</h3>
                <p className="text-gray-700 leading-relaxed">{project.problem}</p>
              </div>
              <div className="bg-[#9C0000] p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">The Solution</h3>
                <p className="leading-relaxed text-gray-100">{project.solution}</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-black mb-4">Key Features Implemented</h2>
            <ul className="grid md:grid-cols-2 gap-4 mb-10 list-none pl-0">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-[#9C0000] mt-1.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-semibold">{feature}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-black mb-4">The Results</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-2xl mb-10">
              <p className="text-gray-800 text-lg font-medium italic">"{project.results}"</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black text-white rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">Ready to Build Your Success Story?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            Whether you need custom software, a high-converting website, or a digital marketing strategy, our team is ready to deliver.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#9C0000] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-colors"
          >
            Start Your Project Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
