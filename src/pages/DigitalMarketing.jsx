import React from "react";
import DigitalMarketingHero from "../digitalMarketing/DigitalmarketingHero";
import ContactPage from "./ContactPage";
import DigitalProcess from "../digitalMarketing/DigitalProcess";
import SEO from "../components/SEO";

const digitalMarketingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Digital Marketing Services",
  "provider": {
    "@type": "Organization",
    "name": "Nexasoft Solutions",
    "url": "https://thenexasoftsolutions.com"
  },
  "url": "https://thenexasoftsolutions.com/services/digital-marketing",
  "description": "Data-driven digital marketing services including SEO, PPC advertising, social media marketing, and performance marketing campaigns. We drive real growth and measurable results.",
  "serviceType": "Digital Marketing",
  "areaServed": ["Pakistan", "United States", "United Kingdom"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimization (SEO)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pay-Per-Click (PPC) Advertising" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Marketing" } }
    ]
  }
};

const DigitalMarketing = () => {
  return (
    <div>
      <SEO
        title="Digital Marketing Services — SEO, PPC & Social Media Marketing"
        description="Drive real business growth with Nexasoft's digital marketing services. We offer SEO, PPC advertising, social media marketing, and performance marketing campaigns designed to attract, engage, and convert your ideal audience."
        canonical="https://thenexasoftsolutions.com/services/digital-marketing"
        schema={digitalMarketingSchema}
      />
      <DigitalMarketingHero />
      <DigitalProcess />
      <ContactPage />
    </div>
  );
};

export default DigitalMarketing;
