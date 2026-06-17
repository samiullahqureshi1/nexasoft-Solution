import React from "react";
import { Link } from "react-router-dom";
import WebDesignHero from "../WebDesignDevelopment/WebDesignHero";
import WebDevelopmentProcess from "../WebDesignDevelopment/WebDevelopmentProcess";
import ContactPage from "./ContactPage";
import SEO from "../components/SEO";
import { FaLaptopCode, FaMobileAlt, FaSearchPlus, FaPaintBrush, FaShoppingCart, FaChartLine } from "react-icons/fa";

const webDesignSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Design & Development Services",
  "provider": {
    "@type": "Organization",
    "name": "Nexasoft Solutions",
    "url": "https://thenexasoftsolutions.com"
  },
  "url": "https://thenexasoftsolutions.com/services/web-design-development",
  "description": "Professional web design and development services including responsive websites, e-commerce platforms, CMS development, and brand identity design. Built to convert visitors into customers.",
  "serviceType": "Web Design and Development",
  "areaServed": ["Pakistan", "United States", "United Kingdom"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Design Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design & Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Strategic Brand Identity Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce & CMS Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversion-Focused Copywriting" } }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to design and build a custom website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The timeline depends on the complexity of the project. A standard business website typically takes 4 to 6 weeks from strategy to launch. More complex e-commerce platforms or web applications can take 8 to 12 weeks. We provide a detailed timeline during our initial discovery phase."
      }
    },
    {
      "@type": "Question",
      "name": "Do you use templates or custom designs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialise in custom web design. While templates have their place, we believe that serious businesses need a unique digital footprint. Every website we build is designed from scratch to align perfectly with your brand identity, target audience, and business goals."
      }
    },
    {
      "@type": "Question",
      "name": "Will my website be mobile-friendly and responsive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. With over 60% of global web traffic coming from mobile devices, we take a mobile-first approach to design. Your website will adapt seamlessly to any screen size, ensuring a flawless user experience on smartphones, tablets, and desktop computers."
      }
    },
    {
      "@type": "Question",
      "name": "Can I update the website content myself after it launches?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We build our websites on user-friendly Content Management Systems (CMS) like WordPress, Shopify, or custom headless CMS solutions like Sanity. Once your site is live, we provide training so you can easily update text, images, and blog posts without needing to know how to code."
      }
    },
    {
      "@type": "Question",
      "name": "Is SEO included in your web design services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, foundational technical SEO is built into every website we launch. We ensure your site has a clean code structure, fast loading speeds, mobile responsiveness, proper heading hierarchy, and meta tags. If you require advanced ongoing SEO, we offer dedicated Digital Marketing services to help you rank higher."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide hosting and maintenance services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We do. We offer secure, high-performance hosting solutions on AWS, Vercel, and dedicated servers. We also provide ongoing maintenance packages that include regular backups, security updates, uptime monitoring, and technical support to keep your website running smoothly."
      }
    }
  ]
};

const Websitedesign = () => {
  return (
    <div>
      <SEO
        title="Web Design & Development Services — Responsive, Fast & SEO-Ready Websites"
        description="Professional website design and development services that convert visitors into customers. We build responsive, fast, SEO-optimized websites, e-commerce stores, and brand identities for businesses worldwide."
        canonical="https://thenexasoftsolutions.com/services/web-design-development"
        schema={[webDesignSchema, faqSchema]}
      />
      <WebDesignHero />
      
      {/* EXPANDED CONTENT SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-[#9C0000] font-bold tracking-widest uppercase mb-4 text-sm">Strategic Web Design</h2>
            <h3 className="font-heading text-4xl md:text-5xl text-black mb-6">Your Website is Your Hardest Working Employee. Is It Doing Its Job?</h3>
            <p className="text-gray-600 font-body text-lg leading-relaxed">
              In today’s digital landscape, a website is no longer just a digital brochure; it is the core engine of your business growth. When potential clients search for your services, they make a split-second decision about your credibility based entirely on your website's design, speed, and usability. At <Link to="/" className="text-[#9C0000] font-semibold hover:underline">Nexasoft Solutions</Link>, we don't just build websites that look beautiful—we build high-performance digital assets engineered to rank on Google, capture attention, and convert casual visitors into loyal customers.
            </p>
          </div>

          {/* WHAT WE OFFER */}
          <div className="mb-24">
            <h3 className="font-heading text-3xl md:text-4xl text-black mb-12 text-center">Comprehensive Web Development Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <FaPaintBrush className="text-4xl text-[#9C0000] mb-6" />
                <h4 className="text-xl font-bold text-black mb-3">Custom UI/UX Design</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  We create visually stunning, user-centric interfaces designed specifically for your target audience. We move beyond generic templates to craft a unique digital identity that perfectly aligns with your brand guidelines and business objectives.
                </p>
                <Link to="/blogs/ui-ux-design-principles-that-increase-conversions" className="text-[#9C0000] text-sm font-semibold hover:underline">Read about UI/UX principles →</Link>
              </div>
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <FaLaptopCode className="text-4xl text-[#9C0000] mb-6" />
                <h4 className="text-xl font-bold text-black mb-3">Front-End & Back-End Development</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our development team utilises the latest modern frameworks like React.js, Next.js, and Node.js. We ensure your website is built on a clean, scalable, and secure architecture capable of handling high traffic and complex functional requirements.
                </p>
              </div>
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <FaShoppingCart className="text-4xl text-[#9C0000] mb-6" />
                <h4 className="text-xl font-bold text-black mb-3">E-Commerce Solutions</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  We build high-converting online stores on platforms like Shopify and WooCommerce. From secure payment gateway integrations to complex inventory management systems, we create frictionless shopping experiences that drive revenue.
                </p>
                <Link to="/blogs/shopify-vs-woocommerce-which-is-right-for-your-store" className="text-[#9C0000] text-sm font-semibold hover:underline">Shopify vs WooCommerce →</Link>
              </div>
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <FaMobileAlt className="text-4xl text-[#9C0000] mb-6" />
                <h4 className="text-xl font-bold text-black mb-3">Mobile-First Responsiveness</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  With the majority of web traffic originating from smartphones, a mobile-first approach is mandatory. We meticulously test every website across all devices and screen sizes to ensure flawless navigation and visual consistency everywhere.
                </p>
              </div>
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <FaSearchPlus className="text-4xl text-[#9C0000] mb-6" />
                <h4 className="text-xl font-bold text-black mb-3">SEO-Optimised Architecture</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A beautiful website is useless if no one can find it. We bake technical SEO into the foundation of your site—from lightning-fast server response times and schema markup to semantic HTML5 structure, ensuring Google loves your website.
                </p>
              </div>
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <FaChartLine className="text-4xl text-[#9C0000] mb-6" />
                <h4 className="text-xl font-bold text-black mb-3">Conversion Rate Optimisation (CRO)</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  We strategically place calls-to-action (CTAs), design persuasive user journeys, and eliminate friction points to ensure that the maximum number of visitors take the desired action, whether that's filling out a form or making a purchase.
                </p>
                <Link to="/blogs/how-to-improve-website-conversion-rate" className="text-[#9C0000] text-sm font-semibold hover:underline">Learn about CRO →</Link>
              </div>
            </div>
          </div>

          {/* INDUSTRIES WE SERVE */}
          <div className="mb-24 bg-[#F1F3F5] rounded-3xl p-10 md:p-16">
            <h3 className="font-heading text-3xl md:text-4xl text-black mb-6">Industries We Empower</h3>
            <p className="text-gray-600 mb-10 max-w-3xl leading-relaxed">
              We don't believe in a one-size-fits-all approach. Different industries have entirely different user expectations, regulatory requirements, and conversion metrics. We have deep experience building bespoke digital experiences across a wide variety of sectors:
            </p>
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-black font-semibold">
              <li className="flex items-center border-b border-gray-300 pb-3"><span className="text-[#9C0000] mr-3">✓</span> Corporate & Professional Services</li>
              <li className="flex items-center border-b border-gray-300 pb-3"><span className="text-[#9C0000] mr-3">✓</span> Healthcare & Medical Clinics</li>
              <li className="flex items-center border-b border-gray-300 pb-3"><span className="text-[#9C0000] mr-3">✓</span> Real Estate & Property Management</li>
              <li className="flex items-center border-b border-gray-300 pb-3"><span className="text-[#9C0000] mr-3">✓</span> E-Commerce & Retail Brands</li>
              <li className="flex items-center border-b border-gray-300 pb-3"><span className="text-[#9C0000] mr-3">✓</span> Technology & SaaS Startups</li>
              <li className="flex items-center border-b border-gray-300 pb-3"><span className="text-[#9C0000] mr-3">✓</span> Education & E-Learning Platforms</li>
            </ul>
            <div className="mt-10">
              <Link to="/case-study" className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-[#9C0000] transition-colors font-bold">
                View Our Portfolio Projects
              </Link>
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <h3 className="font-heading text-3xl md:text-4xl text-black mb-6">Why Choose Nexasoft Solutions for Your Next Website?</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Building a website is a significant investment. You need a partner who understands that the ultimate goal isn't just to launch a site, but to generate a tangible return on investment. 
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Unlike typical agencies that deliver a site and disappear, we act as your strategic technical partners. We take the time to deeply understand your business model, your competitors, and your long-term goals before writing a single line of code. We pride ourselves on transparent communication, adherence to strict deadlines, and a relentless commitment to quality.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our team combines aesthetic brilliance with technical mastery. We don't just use page builders; we write clean, custom code that ensures your website is fast, secure, and infinitely scalable as your business grows. When you work with us, you are getting an entire department of designers, developers, and SEO strategists dedicated to your success.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80" 
                  alt="Web Development Team" 
                  className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
                />
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-20 max-w-4xl mx-auto">
            <h3 className="font-heading text-3xl md:text-4xl text-black mb-10 text-center">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, idx) => (
                <div key={idx} className="bg-[#F1F3F5] rounded-xl p-6 md:p-8">
                  <h4 className="text-lg font-bold text-black mb-3">{faq.name}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <WebDevelopmentProcess />
      <ContactPage />
    </div>
  );
};

export default Websitedesign;
