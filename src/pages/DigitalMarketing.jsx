import React from "react";
import { Link } from "react-router-dom";
import DigitalMarketingHero from "../digitalMarketing/DigitalmarketingHero";
import DigitalProcess from "../digitalMarketing/DigitalProcess";
import ContactPage from "./ContactPage";
import SEO from "../components/SEO";
import { FaSearchDollar, FaPenNib, FaUserFriends, FaEnvelopeOpenText, FaChartPie, FaVideo } from "react-icons/fa";

const digitalMarketingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Digital Marketing & SEO Services",
  "provider": {
    "@type": "Organization",
    "name": "Nexasoft Solutions",
    "url": "https://thenexasoftsolutions.com"
  },
  "url": "https://thenexasoftsolutions.com/services/digital-marketing",
  "description": "Data-driven digital marketing services including SEO, PPC, social media management, and content marketing designed to increase organic traffic and lead generation.",
  "serviceType": "Digital Marketing",
  "areaServed": ["Pakistan", "United States", "United Kingdom"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimization (SEO)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pay-Per-Click Advertising (PPC)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing & Strategy" } }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to see results from SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO is a long-term strategy. Typically, you can expect to see noticeable improvements in rankings and organic traffic within 3 to 6 months. However, highly competitive industries may take 6 to 12 months for significant lead generation. The results, once achieved, provide sustainable and compounding ROI."
      }
    },
    {
      "@type": "Question",
      "name": "Should I invest in SEO or PPC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We usually recommend a balanced approach. PPC (Google Ads, Meta Ads) provides immediate traffic and leads, making it perfect for short-term goals or new product launches. SEO takes longer but builds sustainable, free traffic over time. Using both simultaneously ensures immediate cash flow while building long-term authority."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide monthly reporting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, transparency is core to our process. We provide detailed monthly performance reports covering key metrics such as organic traffic growth, keyword rankings, cost-per-acquisition (CPA), conversion rates, and overall ROI. We also schedule monthly strategy calls to review the data together."
      }
    },
    {
      "@type": "Question",
      "name": "What platforms do you manage for social media marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We manage campaigns across all major platforms including LinkedIn (ideal for B2B), Meta (Facebook & Instagram), TikTok, and X (Twitter). We select the platforms that align best with where your specific target audience spends their time."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to sign a long-term contract?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While digital marketing requires consistency, we don't believe in locking clients into inflexible long-term contracts. We typically operate on rolling 3-month or 6-month agreements to allow enough time to generate real results while keeping us accountable to your success."
      }
    }
  ]
};

const DigitalMarketing = () => {
  return (
    <div>
      <SEO
        title="Digital Marketing & SEO Services — Grow Your Traffic & Leads"
        description="Data-driven digital marketing agency offering SEO, PPC, social media, and content strategies. We help businesses increase organic traffic and generate qualified leads."
        canonical="https://thenexasoftsolutions.com/services/digital-marketing"
        schema={[digitalMarketingSchema, faqSchema]}
      />
      <DigitalMarketingHero />
      
      {/* EXPANDED CONTENT SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-[#9C0000] font-bold tracking-widest uppercase mb-4 text-sm">Data-Driven Growth</h2>
            <h3 className="font-heading text-4xl md:text-5xl text-black mb-6">Stop Guessing with Your Marketing Budget</h3>
            <p className="text-gray-600 font-body text-lg leading-relaxed">
              Traffic without conversions is just vanity. In a crowded digital space, you don't just need more visitors—you need the <em>right</em> visitors. At <Link to="/" className="text-[#9C0000] font-semibold hover:underline">Nexasoft Solutions</Link>, we engineer comprehensive digital marketing strategies that connect your brand with high-intent buyers exactly when they are searching for your solutions. From dominating Google's search results to launching highly profitable ad campaigns, we turn your marketing budget into a predictable revenue engine.
            </p>
          </div>

          {/* WHAT WE OFFER */}
          <div className="mb-24">
            <h3 className="font-heading text-3xl md:text-4xl text-black mb-12 text-center">Our Core Marketing Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <FaSearchDollar className="text-4xl text-[#9C0000] mb-6" />
                <h4 className="text-xl font-bold text-black mb-3">Search Engine Optimisation (SEO)</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  We don't just chase keywords; we chase revenue. Our comprehensive SEO strategy covers deep technical audits, high-quality backlink acquisition, and intent-driven content creation to secure top positions on Google for the search terms that actually drive business.
                </p>
                <Link to="/blogs/local-seo-guide-for-small-businesses" className="text-[#9C0000] text-sm font-semibold hover:underline">Read our Local SEO Guide →</Link>
              </div>
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <FaChartPie className="text-4xl text-[#9C0000] mb-6" />
                <h4 className="text-xl font-bold text-black mb-3">Pay-Per-Click (PPC) Advertising</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Maximise your ROI with highly targeted Google Ads and Meta Ads campaigns. We handle everything from exhaustive keyword research and compelling ad copywriting to continuous A/B testing and bid management to drive down your cost-per-acquisition.
                </p>
              </div>
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <FaUserFriends className="text-4xl text-[#9C0000] mb-6" />
                <h4 className="text-xl font-bold text-black mb-3">Social Media Management</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Build a community of loyal brand advocates. We craft engaging social media strategies, create stunning visual content, and manage community interactions across LinkedIn, Instagram, Facebook, and Twitter to elevate your brand authority.
                </p>
                <Link to="/blogs/social-media-marketing-trends-2026" className="text-[#9C0000] text-sm font-semibold hover:underline">View 2026 Social Trends →</Link>
              </div>
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <FaPenNib className="text-4xl text-[#9C0000] mb-6" />
                <h4 className="text-xl font-bold text-black mb-3">Content Marketing</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Content is the fuel for your digital growth. Our specialist writers produce high-quality, authoritative blog posts, whitepapers, case studies, and engaging video scripts that educate your audience, build profound trust, and naturally attract high-value inbound links.
                </p>
              </div>
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <FaEnvelopeOpenText className="text-4xl text-[#9C0000] mb-6" />
                <h4 className="text-xl font-bold text-black mb-3">Email Marketing Automation</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Convert casual leads into lifelong customers. We design sophisticated, automated email drip campaigns, segment your audience for hyper-personalisation, and craft compelling newsletters that boast industry-leading open and click-through rates.
                </p>
                <Link to="/blogs/email-marketing-for-e-commerce" className="text-[#9C0000] text-sm font-semibold hover:underline">Email Marketing Tips →</Link>
              </div>
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <FaVideo className="text-4xl text-[#9C0000] mb-6" />
                <h4 className="text-xl font-bold text-black mb-3">Conversion Rate Optimisation (CRO)</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We use advanced heatmapping, user session recordings, and rigorous A/B split testing to identify exactly where users are dropping off on your website, transforming your existing traffic into a significantly higher volume of qualified leads.
                </p>
              </div>
            </div>
          </div>

          {/* OUR PROCESS */}
          <div className="mb-24 bg-[#F1F3F5] rounded-3xl p-10 md:p-16">
            <h3 className="font-heading text-3xl md:text-4xl text-black mb-10 text-center">Our Proven Marketing Process</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#9C0000] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h4 className="font-bold text-black mb-2">Discovery & Audit</h4>
                <p className="text-sm text-gray-600">Deep dive into your industry, competitors, and current analytics to identify massive growth opportunities.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#9C0000] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h4 className="font-bold text-black mb-2">Strategy Formation</h4>
                <p className="text-sm text-gray-600">Developing a bespoke, multi-channel roadmap aligned strictly with your specific revenue targets.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#9C0000] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h4 className="font-bold text-black mb-2">Execution</h4>
                <p className="text-sm text-gray-600">Deploying ad campaigns, publishing SEO content, and optimising your technical foundation flawlessly.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#9C0000] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h4 className="font-bold text-black mb-2">Analyse & Scale</h4>
                <p className="text-sm text-gray-600">Continuous monitoring via GA4, A/B testing, and shifting budget to the highest-performing channels.</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link to="/blogs/google-analytics-4-beginners-guide" className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-[#9C0000] transition-colors font-bold">
                Learn About Analytics
              </Link>
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
              <div className="md:w-1/2">
                <h3 className="font-heading text-3xl md:text-4xl text-black mb-6">Why Partner With Nexasoft Solutions?</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The digital marketing industry is full of vanity metrics. "Impressions" and "Likes" do not pay your payroll. We focus entirely on the metrics that matter to your bottom line: Cost Per Lead, Customer Acquisition Cost, and Return on Ad Spend (ROAS).
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Because we are a full-service agency featuring both elite developers and seasoned marketers under one roof, we eliminate the friction usually found between marketing and IT departments. If an SEO strategy requires a complex technical implementation or a new landing page, our development team executes it instantly.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We don't use black-hat tactics or risky shortcuts. We build sustainable, compounding digital authority that protects your brand and secures long-term market dominance against your toughest competitors.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                  alt="Digital Marketing Analytics" 
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

      <DigitalProcess />
      <ContactPage />
    </div>
  );
};

export default DigitalMarketing;
