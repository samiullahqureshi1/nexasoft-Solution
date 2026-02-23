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
      <section className="w-full bg-[#F1F3F5] pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* CATEGORY */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 bg-[#9C0000] rounded-full"></span>
            <p className="uppercase tracking-[0.3em] text-sm text-gray-600">
              {blog.category}
            </p>
          </div>

          {/* TITLE */}
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight mb-16">
            {blog.title}
          </h1>

          {/* AUTHOR + DATE */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-10">
            {/* AUTHOR */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <p className="text-sm text-gray-500">Author</p>
                <p className="font-medium text-gray-900">{blog.author}</p>
              </div>
            </div>

            {/* PUBLISHED */}
            <div>
              <p className="text-sm text-gray-500">Published</p>
              <p className="font-medium text-gray-900">{blog.published}</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG CONTENT SECTION */}
      <section className="w-full bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          {" "}
          <div
            className="
    blog-content
    text-gray-700
    leading-relaxed
    text-lg
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
