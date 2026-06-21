import React from "react";
import { useParams } from "react-router-dom";
import blogsData from "../data/blogs";
import DiscussCTA from "../pages/hero/DiscussCTA";
import SEO from "../components/SEO"

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="p-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading mb-4">Blog Not Found</h1>
          <p className="text-gray-600">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // Extract a clean text excerpt from the HTML content for meta description
  const getExcerpt = (htmlContent, maxLength = 155) => {
    const text = htmlContent.replace(/<[^>]*>/g, "").trim();
    return text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text;
  };

  const metaDescription = blog.excerpt || getExcerpt(blog.content);

  const blogUrl = `https://thenexasoftsolutions.com/blogs/${blog.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "description": metaDescription,
    "image": blog.image,
    "author": {
      "@type": "Person",
      "name": blog.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nexasoft Solutions",
      "url": "https://thenexasoftsolutions.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cdn.shopify.com/s/files/1/0676/1155/7936/files/20260228_1200_Image_Generation_simple_compose_01kjjxd1yge5p9bd1xhb63nv84.png?v=1772309488"
      }
    },
    "datePublished": blog.published,
    "dateModified": blog.published,
    "url": blogUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": blogUrl
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thenexasoftsolutions.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://thenexasoftsolutions.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blog.title,
        "item": blogUrl
      }
    ]
  };

  return (
    <>
      <SEO
        title={blog.title}
        description={metaDescription}
        canonical={blogUrl}
        ogImage={blog.image}
        schema={[articleSchema, breadcrumbSchema]}
      />

      {/* HERO SECTION */}
      <section className="w-full bg-[#F1F3F5] pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">

          {/* BREADCRUMB — also visible for UX */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
            <a href="/" className="hover:text-[#9C0000] transition">Home</a>
            <span>›</span>
            <a href="/blog" className="hover:text-[#9C0000] transition">Blog</a>
            <span>›</span>
            <span className="text-gray-700 truncate max-w-[200px]">{blog.title}</span>
          </nav>

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
              mb-16
            "
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* AUTHOR BIO SECTION */}
          <div className="bg-[#F1F3F5] rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
            <div className="w-24 h-24 rounded-full bg-[#9C0000] text-white flex items-center justify-center text-3xl font-bold flex-shrink-0">
              {blog.author.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-xl text-black mb-2">{blog.author}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {blog.author === "Samiullah Qureshi"
                  ? "Founder & CEO of Nexasoft Solutions. A visionary entrepreneur and technologist with deep expertise in custom software development, web design, and digital marketing strategy. Samiullah leads Nexasoft's mission to help businesses worldwide build powerful digital products that drive real growth."
                  : "Senior Technical Writer & Strategist at Nexasoft Solutions. Specializing in digital transformation, software architecture, and data-driven marketing strategies to help businesses scale efficiently."}
              </p>
              <a
                href={blog.author === "Samiullah Qureshi"
                  ? "https://pk.linkedin.com/in/samiullah-qureshi-756261318"
                  : "https://pk.linkedin.com/in/samiullah-qureshi-756261318"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9C0000] text-sm font-semibold hover:underline"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>

        </div>
      </section>

      <DiscussCTA />
    </>
  );
};

export default BlogDetail;
