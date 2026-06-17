import React from 'react'
import CustomHero from '../CustomSoftware/CustomHero'
import WorkShowcaseSection from '../AboutUs/WorkShowcaseSection'
import WebDevelopmentProcess from '../WebDesignDevelopment/WebDevelopmentProcess'
import SEO from '../components/SEO'

const customSoftwareSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Software Development Services",
  "provider": {
    "@type": "Organization",
    "name": "Nexasoft Solutions",
    "url": "https://thenexasoftsolutions.com"
  },
  "url": "https://thenexasoftsolutions.com/services/custom-software-development",
  "description": "End-to-end custom software development services including ERP systems, CRM platforms, AI-powered HRMS, web applications, and enterprise software solutions tailored to your business needs.",
  "serviceType": "Custom Software Development",
  "areaServed": ["Pakistan", "United States", "United Kingdom"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Custom Software Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ERP System Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM Software Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI-Powered HRMS" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Application Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } }
    ]
  }
};

const CustomSoftware = () => {
  return (
    <div>
      <SEO
        title="Custom Software Development — ERP, CRM, Web & Mobile Apps"
        description="We develop end-to-end custom software solutions including ERP systems, CRM platforms, AI-powered HRMS, web applications, and enterprise software. Scalable, reliable, and built to grow with your business."
        canonical="https://thenexasoftsolutions.com/services/custom-software-development"
        schema={customSoftwareSchema}
      />
      <CustomHero/>
      <WebDevelopmentProcess/>
    </div>
  )
}

export default CustomSoftware
