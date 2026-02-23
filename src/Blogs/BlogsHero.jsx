import React from "react";

const BlogHero = () => {
  return (
    <section className="w-full bg-[#F1F3F5] pt-40 pb-28">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Small Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 bg-[#9C0000] rounded-full"></span>
          <p className="uppercase tracking-[0.3em] text-sm text-gray-600">
            Our Blog
          </p>
        </div>

        {/* Heading */}
        <h1 className="font-heading text-[80px] leading-[1.05] tracking-[-0.02em]">
          <span className="text-[#1A1A1A]">Thoughts & </span>
          <span className="text-[#9C0000]">Trends.</span>
        </h1>

      </div>
    </section>
  );
};

export default BlogHero;