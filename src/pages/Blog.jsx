import React from 'react'
import BlogHero from '../Blogs/BlogsHero'
import BlogSection from '../Blogs/BlogSection'
import SEO from '../components/SEO'

const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Nexasoft Solutions Blog",
  "url": "https://thenexasoftsolutions.com/blog",
  "description": "Expert insights on web design, custom software development, digital marketing, SEO, and technology trends from the Nexasoft Solutions team.",
  "publisher": {
    "@type": "Organization",
    "name": "Nexasoft Solutions",
    "url": "https://thenexasoftsolutions.com",
    "logo": "https://cdn.shopify.com/s/files/1/0676/1155/7936/files/20260228_1200_Image_Generation_simple_compose_01kjjxd1yge5p9bd1xhb63nv84.png?v=1772309488"
  }
};

const Blog = () => {
  return (
    <div>
      <SEO
        title="Blog — Web Design, Marketing & Software Development Insights"
        description="Read expert articles on web design, custom software development, digital marketing, SEO strategies, and technology trends from the Nexasoft Solutions team. Stay ahead in the digital world."
        canonical="https://thenexasoftsolutions.com/blog"
        schema={blogListingSchema}
      />
      <BlogHero/>
      <BlogSection/>
    </div>
  )
}

export default Blog
