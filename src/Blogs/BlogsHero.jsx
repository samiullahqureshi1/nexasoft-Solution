import React from "react";

const BlogHero = () => {
  return (
    <section className="w-full bg-[#F1F3F5] pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Small Label */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-2 h-2 bg-[#9C0000] rounded-full"></span>
          <p className="uppercase tracking-[0.25em] text-[10px] sm:text-xs md:text-sm text-gray-600">
            Our Blog
          </p>
        </div>

        {/* Heading */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] leading-[1.05] tracking-[-0.02em]">
          <span className="text-[#1A1A1A] block">Thoughts &</span>
          <span className="text-[#9C0000] block">Trends.</span>
        </h1>

      </div>
    </section>
  );
};

export default BlogHero;