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
    <section className="w-full bg-[#F1F3F5] ">
      <div className="max-w-7xl mx-auto px-6">
        {/* FILTER + SEARCH */}
        <div className="flex flex-col md:flex-row items-center  gap-6 mb-12">
          {/* LEFT SIDE - FILTER */}
          <div className="flex items-center gap-6 w-full md:w-auto">
            <span className="text-gray-500 text-lg">Filter</span>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-[260px] h-[48px] px-4 border border-gray-300 bg-[#F8F9FA] 
      rounded-md text-gray-700 focus:outline-none focus:border-gray-400"
            >
              {categories.map((cat, i) => (
                <option key={i}>{cat}</option>
              ))}
            </select>
          </div>

          {/* RIGHT SIDE - SEARCH */}
          <div className="w-full">
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-[48px] px-5 border border-gray-300 bg-[#F8F9FA] 
      rounded-md text-gray-700 placeholder-gray-400 
      focus:outline-none focus:border-gray-400"
            />
          </div>
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 gap-12">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden border border-black/10 mb-6"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* LEFT SIDE IMAGE */}
                <div className="md:w-1/2 flex items-center justify-center ">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className=" object-contain"
                  />
                </div>

                {/* RIGHT SIDE CONTENT */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <p className="text-sm text-gray-500 mb-3">{blog.date}</p>

                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
                    {blog.category}
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 leading-snug">
                    {blog.title}
                  </h3>

                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="w-fit bg-[#9C0000] text-white px-5 py-2 rounded-md text-sm hover:bg-black transition inline-block"
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
