import React from "react";
import { useParams } from "react-router-dom";
import blogsData from "../data/blogs";
import DiscussCTA from "../pages/hero/DiscussCTA";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="p-20">Blog not found.</div>;
  }

  return (
   <>
  {/* HERO SECTION */}
  <section className="w-full bg-[#F1F3F5] pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24">
    <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">

      {/* CATEGORY */}
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <span className="w-2 h-2 bg-[#9C0000] rounded-full"></span>
        <p className="uppercase tracking-[0.25em] text-[10px] sm:text-xs md:text-sm text-gray-600">
          {blog.category}
        </p>
      </div>

      {/* TITLE */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] mb-10 md:mb-14">
        {blog.title}
      </h1>

      {/* AUTHOR + DATE */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">

        {/* AUTHOR */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full"></div>
          <div>
            <p className="text-xs sm:text-sm text-gray-500">Author</p>
            <p className="text-sm sm:text-base font-medium text-gray-900">
              {blog.author}
            </p>
          </div>
        </div>

        {/* PUBLISHED */}
        <div>
          <p className="text-xs sm:text-sm text-gray-500">Published</p>
          <p className="text-sm sm:text-base font-medium text-gray-900">
            {blog.published}
          </p>
        </div>

      </div>

    </div>
  </section>

  {/* BLOG CONTENT */}
  <section className="w-full bg-white py-16 sm:py-20 md:py-24">
    <div className="max-w-3xl mx-auto px-6 md:px-10">

      <div
        className="
          blog-content
          text-gray-700
          text-base sm:text-lg
          leading-[1.9]
        "
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

    </div>
  </section>

  <DiscussCTA />
</>
  );
};

export default BlogDetail;
