import React from "react";
import { Link } from "react-router-dom";
import CustomHero from "../CustomSoftware/CustomHero";
import ContactPage from "./ContactPage";
import SEO from "../components/SEO";
import { FaCode, FaCogs, FaMobileAlt, FaDatabase, FaCloud, FaShieldAlt } from "react-icons/fa";

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
  "description": "Enterprise-grade custom software development including ERP systems, CRM platforms, mobile apps, and SaaS product development.",
  "serviceType": "Software Development",
  "areaServed": ["Pakistan", "United States", "United Kingdom"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise Resource Planning (ERP)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Customer Relationship Management (CRM)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Product Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does custom software development cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of custom software varies significantly based on complexity, features, and the platforms required. A simple web application might start around $10,000, while a complex, enterprise-wide ERP system can exceed $100,000. We provide a detailed, transparent quote after an initial discovery session to understand your precise requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build custom software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Development timelines depend on the project's scope. An MVP (Minimum Viable Product) can often be launched in 2 to 3 months. Full-scale enterprise systems typically take 4 to 8 months. We use Agile methodology, meaning we deliver functional parts of the software in 2-week sprints so you can see progress immediately."
      }
    },
    {
      "@type": "Question",
      "name": "Will I own the source code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely. Once the project is fully paid for and completed, 100% of the Intellectual Property (IP) and source code ownership is transferred to your company. We do not hold your code hostage."
      }
    },
    {
      "@type": "Question",
      "name": "What technologies do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are technology-agnostic but lean towards modern, highly scalable stacks. For the frontend, we excel in React.js and Vue.js. For the backend, we use Node.js, Python (Django/FastAPI), and PHP (Laravel). We handle mobile development with React Native and Flutter, and deploy on cloud infrastructure like AWS or Google Cloud."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide support after the software is launched?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, launching the software is just the beginning. We offer comprehensive Service Level Agreements (SLAs) for ongoing maintenance, bug fixing, server management, and future feature developments to ensure your software scales safely as your business grows."
      }
    }
  ]
};

const CustomSoftware = () => {
  return (
    <div>
      <SEO
        title="Custom Software Development — ERP, CRM & SaaS Solutions"
        description="Scalable, secure, and robust custom software development. We build enterprise ERPs, bespoke CRMs, mobile applications, and high-performance SaaS products."
        canonical="https://thenexasoftsolutions.com/services/custom-software-development"
        schema={[customSoftwareSchema, faqSchema]}
      />
      <CustomHero />
      
      {/* EXPANDED CONTENT SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-[#9C0000] font-bold tracking-widest uppercase mb-4 text-sm">Enterprise Engineering</h2>
            <h3 className="font-heading text-4xl md:text-5xl text-black mb-6">Software Engineered to Solve Complex Business Problems</h3>
            <p className="text-gray-600 font-body text-lg leading-relaxed">
              Off-the-shelf software forces your business to adapt to its limitations. Custom software forces technology to adapt to your unique business model. At <Link to="/" className="text-[#9C0000] font-semibold hover:underline">Nexasoft Solutions</Link>, we architect, design, and engineer bespoke software solutions—from comprehensive ERP systems that unify disparate departments to highly scalable SaaS products ready for global launch. If your team is drowning in spreadsheets, or your current systems cannot communicate with each other, it's time to build a digital infrastructure that actually works for you.
            </p>
          </div>

          {/* WHAT WE OFFER */}
          <div className="mb-24">
            <h3 className="font-heading text-3xl md:text-4xl text-black mb-12 text-center">Custom Software Capabilities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <FaCogs className="text-4xl text-[#9C0000] mb-6" />
                <h4 className="text-xl font-bold text-black mb-3">Enterprise Resource Planning (ERP)</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  We build centralised systems that integrate your finance, HR, inventory, and supply chain into one unified source of truth, eliminating data silos and reducing administrative overhead by up to 60%.
                </p>
                <Link to="/blogs/what-is-erp-and-does-your-business-need-one" className="text-[#9C0000] text-sm font-semibold hover:underline">Do you need an ERP? →</Link>
              </div>
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <FaDatabase className="text-4xl text-[#9C0000] mb-6" />
                <h4 className="text-xl font-bold text-black mb-3">Custom CRM Systems</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Salesforce and HubSpot are powerful, but often bloated with features you don't need. We build tailored Customer Relationship Management platforms that match your exact sales funnel and operational workflows perfectly.
                </p>
              </div>
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <FaCloud className="text-4xl text-[#9C0000] mb-6" />
                <h4 className="text-xl font-bold text-black mb-3">SaaS Product Development</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Have an idea for a disruptive software product? We help startups and enterprises take SaaS concepts from mere wireframes to fully-fledged, subscription-ready cloud platforms built on highly scalable, multi-tenant architectures.
                </p>
              </div>
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <FaMobileAlt className="text-4xl text-[#9C0000] mb-6" />
                <h4 className="text-xl font-bold text-black mb-3">Mobile Application Development</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We develop native-feeling iOS and Android applications using React Native and Flutter. Whether it's a consumer-facing app or an internal field-service tool for your workforce, we deliver seamless mobile experiences.
                </p>
              </div>
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <FaCode className="text-4xl text-[#9C0000] mb-6" />
                <h4 className="text-xl font-bold text-black mb-3">API Development & Integration</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We build robust RESTful and GraphQL APIs that allow your existing legacy systems to communicate securely with modern web and mobile applications, extending the lifespan of your current technological investments.
                </p>
              </div>
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <FaShieldAlt className="text-4xl text-[#9C0000] mb-6" />
                <h4 className="text-xl font-bold text-black mb-3">AI & Automation Solutions</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  We integrate Large Language Models (like OpenAI) and Machine Learning algorithms into your software to automate complex decision-making, screen data, and provide predictive analytics that give you a massive competitive edge.
                </p>
                <Link to="/blogs/ai-in-business-practical-applications-in-2026" className="text-[#9C0000] text-sm font-semibold hover:underline">Read about AI in 2026 →</Link>
              </div>
            </div>
          </div>

          {/* DEVELOPMENT PROCESS */}
          <div className="mb-24 bg-[#F1F3F5] rounded-3xl p-10 md:p-16">
            <h3 className="font-heading text-3xl md:text-4xl text-black mb-10 text-center">Our Agile Engineering Process</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#9C0000] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h4 className="font-bold text-black mb-2">Discovery & Architecture</h4>
                <p className="text-sm text-gray-600">We map out user journeys, define the database architecture, and select the optimal technology stack to guarantee long-term scalability.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#9C0000] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h4 className="font-bold text-black mb-2">UI/UX Prototyping</h4>
                <p className="text-sm text-gray-600">Before writing code, we create high-fidelity, clickable prototypes so you can see exactly how the software will look and function.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#9C0000] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h4 className="font-bold text-black mb-2">Agile Sprints</h4>
                <p className="text-sm text-gray-600">We build the software in 2-week iterations, deploying code to a staging environment so you can test features as they are completed.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#9C0000] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h4 className="font-bold text-black mb-2">QA & Deployment</h4>
                <p className="text-sm text-gray-600">Rigorous automated and manual testing ensures absolute security and stability before deploying to your production environment.</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link to="/blogs/how-to-choose-the-right-software-development-company" className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-[#9C0000] transition-colors font-bold">
                Guide to Choosing an Agency
              </Link>
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <h3 className="font-heading text-3xl md:text-4xl text-black mb-6">Why Trust Us With Your Software Architecture?</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Developing custom software is a complex undertaking with a high rate of failure when handled by inexperienced teams. Poor database architecture can cripple your software when you try to scale, and messy code can make future updates prohibitively expensive.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At Nexasoft Solutions, we write clean, well-documented, and highly secure code. We utilise industry best practices, implement robust CI/CD pipelines, and design microservice-ready architectures. This ensures your software doesn't just work today, but can handle the stress of thousands of concurrent users tomorrow.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Most importantly, we are business consultants first and coders second. We will never suggest building a $50,000 custom feature if an existing $50/month API can solve the problem just as effectively.
                </p>
                <Link to="/case-study" className="text-[#9C0000] font-bold hover:underline">
                  View Our Custom Software Case Studies →
                </Link>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                  alt="Software Development Team" 
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

      <ContactPage />
    </div>
  );
};

export default CustomSoftware;
