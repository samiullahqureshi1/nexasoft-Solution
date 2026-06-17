import React from 'react'
import MissionSection from '../AboutUs/MissionSection'
import ValuesSection from '../AboutUs/ValuesSection'
import ImpactSection from '../AboutUs/ImpactSection'
import WhyNexasoftSection from '../AboutUs/WhyNexasoftSection'
import TestimonialsSection from './hero/TestimonialsSection'
import TechnologiesSection from './hero/TechnologiesSection'
import WorkShowcaseSection from '../AboutUs/WorkShowcaseSection'
import FinalCTASection from '../AboutUs/FinalCTASection'
import SEO from '../components/SEO'

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Nexasoft Solutions",
  "url": "https://thenexasoftsolutions.com/about-us",
  "description": "Nexasoft Solutions is a modern software agency with 5+ years of experience delivering custom software, web design, and digital marketing services to businesses worldwide.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Nexasoft Solutions",
    "foundingDate": "2020",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "10-50"
    },
    "knowsAbout": [
      "Custom Software Development",
      "Web Design and Development",
      "Digital Marketing",
      "Shopify Development",
      "ERP Systems"
    ]
  }
};

const AboutUs = () => {
  return (
    <div>
      <SEO
        title="About Us — Custom Software & Web Agency with 5+ Years Experience"
        description="Learn about Nexasoft Solutions — a software agency with 5+ years of experience delivering custom software, web design & development, and digital marketing services to businesses in Pakistan, the US, and worldwide."
        canonical="https://thenexasoftsolutions.com/about-us"
        schema={aboutSchema}
      />
      <MissionSection/>
      <ImpactSection/>
      <WhyNexasoftSection/>
      <TestimonialsSection/>
      <TechnologiesSection/>
      <WorkShowcaseSection/>
      <FinalCTASection/>
    </div>
  )
}

export default AboutUs
