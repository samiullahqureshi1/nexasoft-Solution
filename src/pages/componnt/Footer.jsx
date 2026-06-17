import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/thenexasoft.solutions/",
      label: "Nexasoft Solutions on Instagram",
    },
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/people/NexaSoft-Solutions/61579774006246/",
      label: "Nexasoft Solutions on Facebook",
    },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/company/nexasoft-solutions/",
      label: "Nexasoft Solutions on LinkedIn",
    },
    {
      icon: SiUpwork,
      url: "https://www.upwork.com/agencies/1961784720708002202/",
      label: "Nexasoft Solutions on Upwork",
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
                    aria-label={item.label}
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
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#9C0000] transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-[#9C0000] transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-[#9C0000] transition"
                >
                  Blog &amp; Insights
                </Link>
              </li>
              <li>
                <a
                  href="mailto:solutionsneasoft@gmail.com"
                  className="hover:text-[#9C0000] transition"
                >
                  solutionsneasoft@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS COLUMN */}
          <div>
            <h4 className="font-semibold mb-6 text-[#1A1A1A]">Our Services</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <Link
                  to="/services/digital-marketing"
                  className="hover:text-[#9C0000] transition"
                >
                  Digital Marketing &amp; SEO
                </Link>
              </li>

              <li>
                <Link
                  to="/services/custom-software-development"
                  className="hover:text-[#9C0000] transition"
                >
                  Custom Software Development
                </Link>
              </li>

              <li>
                <Link
                  to="/services/web-design-development"
                  className="hover:text-[#9C0000] transition"
                >
                  Web Design &amp; Development
                </Link>
              </li>

              <li>
                <Link
                  to="/services/web-design-development"
                  className="hover:text-[#9C0000] transition"
                >
                  Shopify &amp; E-Commerce
                </Link>
              </li>

              <li>
                <Link
                  to="/case-study"
                  className="hover:text-[#9C0000] transition"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-[#D9DADB] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Nexasoft Solutions. All Rights Reserved.</p>
          <p>
            Built by{" "}
            <a
              href="https://thenexasoftsolutions.com"
              className="hover:text-[#9C0000] transition font-medium"
            >
              Nexasoft Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
