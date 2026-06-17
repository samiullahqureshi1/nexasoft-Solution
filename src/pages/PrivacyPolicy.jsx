import React from "react";
import SEO from "../components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#F1F3F5] min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-20">
      <SEO
        title="Privacy Policy"
        description="Read the Privacy Policy of Nexasoft Solutions. Learn how we collect, use, and protect your personal information when you use our website and services."
        canonical="https://thenexasoftsolutions.com/privacy-policy"
      />
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16 bg-white p-8 md:p-12 rounded-2xl shadow-sm">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-8 text-[#9C0000]">
          Privacy Policy
        </h1>
        
        <div className="text-gray-700 space-y-6 font-body text-sm sm:text-base leading-relaxed">
          <p>Last updated: June 2026</p>

          <h2 className="text-xl sm:text-2xl font-bold text-black mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to Nexasoft Solutions. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website 
            (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-black mt-8 mb-4">2. The Data We Collect About You</h2>
          <p>
            Personal data, or personal information, means any information about an individual from which that person can be identified.
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-black mt-8 mb-4">3. How We Use Your Personal Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-black mt-8 mb-4">4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.
            In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-black mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact us using the details set out below:
          </p>
          <p>Email: <a href="mailto:solutionsneasoft@gmail.com" className="text-[#9C0000] hover:underline">solutionsneasoft@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
