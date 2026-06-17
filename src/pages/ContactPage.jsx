import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import SEO from "../components/SEO";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Nexasoft Solutions",
  "url": "https://thenexasoftsolutions.com/contact",
  "description": "Get in touch with Nexasoft Solutions for a free consultation on web design, custom software development, or digital marketing services.",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Nexasoft Solutions",
    "url": "https://thenexasoftsolutions.com",
    "email": "solutionsneasoft@gmail.com",
    "description": "Nexasoft Solutions is a software agency offering custom software development, web design & development, and digital marketing services.",
    "priceRange": "$$",
    "sameAs": [
      "https://www.instagram.com/thenexasoft.solutions/",
      "https://www.facebook.com/people/NexaSoft-Solutions/61579774006246/",
      "https://www.linkedin.com/company/nexasoft-solutions/"
    ]
  }
};

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kgitu7o",
        "template_9jvqnue",
        form.current,
        "8AH1m3WErX1snjvZK",
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
        },
        (error) => {
          alert("Failed to send message");
          console.log(error);
        },
      );

    e.target.reset();
  };

  return (
    <section className="w-full bg-[rgb(241,243,245)]">
      <SEO
        title="Contact Us — Get a Free Consultation for Your Project"
        description="Ready to grow your business? Contact Nexasoft Solutions today for a free consultation on web design, custom software development, or digital marketing. We'd love to hear about your project."
        canonical="https://thenexasoftsolutions.com/contact"
        schema={contactSchema}
      />

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-28 grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
        <div>
          <p className="text-[10px] sm:text-xs tracking-[4px] text-gray-500 uppercase mb-4 md:mb-6">
            • Contact Us
          </p>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Ready to Elevate Your Brand?
          </h1>
        </div>

        <div className="flex items-center">
          <p className="text-sm sm:text-base text-gray-600 font-body leading-relaxed max-w-md">
            Let's build your advantage. We craft identities, digital
            experiences, and campaigns that don't just look good — they drive
            results.
          </p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="bg-white/40 backdrop-blur-sm py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* LEFT INFO */}
          <div className="text-center lg:text-left">
            <button className="border border-black/30 px-5 md:px-6 py-2 rounded-full text-xs md:text-sm mb-6 md:mb-8">
              GET IN TOUCH.
            </button>

            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
              Let's get in touch.
            </h2>

            <p className="text-sm sm:text-base text-gray-600 font-body mb-8 md:mb-10 max-w-md mx-auto lg:mx-0">
              If you would like to work with us or just want to get in touch,
              we'd love to hear from you!
            </p>

            <p className="text-sm sm:text-base text-gray-600 font-body mb-6">
              <a
                href="mailto:solutionsneasoft@gmail.com"
                className="hover:text-[#9C0000] transition"
                aria-label="Email Nexasoft Solutions"
              >
                solutionsneasoft@gmail.com
              </a>
            </p>

            <div className="flex justify-center lg:justify-start gap-6 text-lg md:text-xl">
              <a
                href="https://www.facebook.com/people/NexaSoft-Solutions/61579774006246/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nexasoft Solutions on Facebook"
              >
                <FaFacebookF className="hover:text-[#9C0000] cursor-pointer transition" />
              </a>
              <a
                href="https://www.linkedin.com/company/nexasoft-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nexasoft Solutions on LinkedIn"
              >
                <FaLinkedinIn className="hover:text-[#9C0000] cursor-pointer transition" />
              </a>
              <a
                href="https://www.instagram.com/thenexasoft.solutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nexasoft Solutions on Instagram"
              >
                <FaInstagram className="hover:text-[#9C0000] cursor-pointer transition" />
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5 md:space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  aria-label="Your name"
                  className="border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  aria-label="Your email address"
                  className="border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  aria-label="Your phone number"
                  className="border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
                />
                {/* SERVICES DROPDOWN */}
                <select
                  name="service"
                  required
                  aria-label="Select a service"
                  className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
                >
                  <option value="">Select a Service</option>
                  <option value="website_design">
                    Website Design &amp; Development
                  </option>
                  <option value="ecommerce">Shopify / E-commerce</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="digital_marketing">
                    Digital Marketing / SEO
                  </option>
                  <option value="custom_software">Custom Software Development</option>
                  <option value="web_app">Web App Development</option>
                </select>
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                aria-label="Message subject"
                className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Tell us about your project..."
                required
                aria-label="Your message"
                className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
              ></textarea>

              <button
                type="submit"
                id="contact-submit-btn"
                className="w-full sm:w-auto mt-4 md:mt-6 border border-black/30 px-6 md:px-8 py-3 rounded-full text-sm md:text-base hover:bg-[#9C0000] hover:text-white transition"
              >
                Send Message — Let's Talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
