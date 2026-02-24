import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
const Footer = () => {
  const socialLinks = [
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/thenexasoft.solutions/",
    },
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/people/NexaSoft-Solutions/61579774006246/",
    },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/company/nexasoft-solutions/",
    },
    {
      icon: SiUpwork,
      url: "https://www.upwork.com/agencies/1961784720708002202/",
    },
  ];
  return (
    <footer className="w-full bg-[#F1F3F5] border-t border-[#D9DADB] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-20">
          {/* LEFT COLUMN */}
          <div>
            <h2 className="font-heading text-2xl tracking-wide mb-6 text-[#1A1A1A]">
              NEXA<span className="text-[#9C0000]">SOFT</span> SOLUTIONS
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md">
              We are a modern software agency helping ambitious brands grow
              through Digital Marketing, Custom Software, Web Applications, and
              Shopify development solutions built to scale.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 text-lg text-[#1A1A1A]">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-[#9C0000]"
                  >
                    <Icon className="cursor-pointer" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* SUPPORT COLUMN */}
          <div>
            <h4 className="font-semibold mb-6 text-[#1A1A1A]">Support</h4>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="hover:text-[#9C0000] cursor-pointer transition">
                FAQs
              </li>
              <li className="hover:text-[#9C0000] cursor-pointer transition">
                Contact Us
              </li>
              <li className="hover:text-[#9C0000] cursor-pointer transition">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* QUICK LINKS COLUMN */}
          <div>
            <h4 className="font-semibold mb-6 text-[#1A1A1A]">Quick Links</h4>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="hover:text-[#9C0000] cursor-pointer transition">
                Digital Marketing
              </li>
              <li className="hover:text-[#9C0000] cursor-pointer transition">
                Custom Software
              </li>
              <li className="hover:text-[#9C0000] cursor-pointer transition">
                Web App Development
              </li>
              <li className="hover:text-[#9C0000] cursor-pointer transition">
                Shopify Development
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-[#D9DADB] pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Nexasoft Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
