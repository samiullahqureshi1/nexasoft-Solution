import React, { useState } from "react";
import blogsData from "../data/blogs";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(blogsData.map((b) => b.category))];

  const filteredBlogs = blogsData.filter((blog) => {
    const matchesCategory = filter === "All" || blog.category === filter;

    const matchesSearch = blog.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
   <section className="w-full bg-[#F1F3F5] py-16 sm:py-20 md:py-24 lg:py-28">
  <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

    {/* FILTER + SEARCH */}
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 md:mb-14">

      {/* FILTER */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full lg:w-auto">
        <span className="text-gray-500 text-sm sm:text-base">
          Filter
        </span>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full sm:w-[220px] h-[44px] sm:h-[48px] px-4 border border-gray-300 bg-[#F8F9FA] 
          rounded-md text-sm sm:text-base text-gray-700 focus:outline-none focus:border-gray-400"
        >
          {categories.map((cat, i) => (
            <option key={i}>{cat}</option>
          ))}
        </select>
      </div>

      {/* SEARCH */}
      <div className="w-full lg:max-w-md">
        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-[44px] sm:h-[48px] px-5 border border-gray-300 bg-[#F8F9FA] 
          rounded-md text-sm sm:text-base text-gray-700 placeholder-gray-400 
          focus:outline-none focus:border-gray-400"
        />
      </div>

    </div>

    {/* BLOG GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

      {filteredBlogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white rounded-2xl overflow-hidden border border-black/10 
          transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="flex flex-col md:flex-row h-full">

            {/* IMAGE */}
            <div className="md:w-1/2 w-full">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[220px] sm:h-[260px] md:h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
              <p className="text-xs sm:text-sm text-gray-500 mb-2">
                {blog.date}
              </p>

              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 mb-4">
                {blog.category}
              </p>

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-6 leading-snug">
                {blog.title}
              </h3>

              <Link
                to={`/blogs/${blog.slug}`}
                className="w-fit bg-[#9C0000] text-white px-5 py-2 rounded-md text-xs sm:text-sm 
                hover:bg-black transition"
              >
                Learn More
              </Link>
            </div>

          </div>
        </div>
      ))}

    </div>

  </div>
</section>
  );
};

export default BlogSection;
