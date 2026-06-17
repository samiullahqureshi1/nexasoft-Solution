import React from "react";
import WebDesignHero from "../WebDesignDevelopment/WebDesignHero";
import WebDevelopmentProcess from "../WebDesignDevelopment/WebDevelopmentProcess";
import WorkShowcaseSection from "../AboutUs/WorkShowcaseSection";
import ContactPage from "./ContactPage";
import SEO from "../components/SEO";

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

const Websitedesign = () => {
  return (
    <div>
      <SEO
        title="Web Design & Development Services — Responsive, Fast & SEO-Ready Websites"
        description="Professional website design and development services that convert visitors into customers. We build responsive, fast, SEO-optimized websites, e-commerce stores, and brand identities for businesses worldwide."
        canonical="https://thenexasoftsolutions.com/services/web-design-development"
        schema={webDesignSchema}
      />
      <WebDesignHero />
      <WebDevelopmentProcess />
      <ContactPage/>
    </div>
  );
};

export default Websitedesign;
