import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <>
      <SEO
        title="404 — Page Not Found"
        description="The page you're looking for doesn't exist. Return to the Nexasoft Solutions homepage."
        noIndex={true}
      />
      <section className="min-h-screen bg-[#F1F3F5] flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <p className="text-[10px] tracking-[4px] text-gray-400 uppercase mb-6">
            Error 404
          </p>
          <h1 className="font-heading text-6xl md:text-8xl text-[#9C0000] mb-6">
            404
          </h1>
          <h2 className="font-heading text-2xl md:text-3xl text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-10">
            Oops! The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-[#9C0000] text-white px-8 py-3 rounded-full font-medium hover:bg-black transition-all duration-300"
            >
              Go to Homepage
            </Link>
            <Link
              to="/contact"
              className="border border-[#9C0000] text-[#9C0000] px-8 py-3 rounded-full font-medium hover:bg-[#9C0000] hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-600">
            <Link to="/services/web-design-development" className="hover:text-[#9C0000] transition">
              Web Design
            </Link>
            <Link to="/services/digital-marketing" className="hover:text-[#9C0000] transition">
              Digital Marketing
            </Link>
            <Link to="/services/custom-software-development" className="hover:text-[#9C0000] transition">
              Custom Software
            </Link>
            <Link to="/about-us" className="hover:text-[#9C0000] transition">
              About Us
            </Link>
            <Link to="/case-study" className="hover:text-[#9C0000] transition">
              Case Studies
            </Link>
            <Link to="/blog" className="hover:text-[#9C0000] transition">
              Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
