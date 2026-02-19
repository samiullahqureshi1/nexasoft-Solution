import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="w-full bg-[#F1F3F5]">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20">

        {/* LEFT */}
        <div>
          <p className="text-xs tracking-[4px] text-gray-500 uppercase mb-6">
            • Contact Us
          </p>

          <h1 className="font-heading text-6xl leading-tight mb-6">
            Ready to Elevate Your Brand?
          </h1>
        </div>

        {/* RIGHT TEXT */}
        <div className="flex items-center">
          <p className="text-gray-600 font-body leading-relaxed max-w-md">
            Let’s build your advantage. We craft identities, digital experiences, 
            and campaigns that don’t just look good — they drive results.
          </p>
        </div>

      </div>

      {/* CONTACT SECTION */}
      <div className="bg-white/40 backdrop-blur-sm py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">

          {/* LEFT INFO */}
          <div>
            <button className="border border-black/30 px-6 py-2 rounded-full text-sm mb-8">
              GET IN TOUCH.
            </button>

            <h2 className="font-heading text-5xl mb-6">
              Let’s get in touch.
            </h2>

            <p className="text-gray-600 font-body mb-10 max-w-md">
              If you would like to work with us or just want to get in touch, 
              we’d love to hear from you!
            </p>

            <div className="space-y-4 mb-10">
              <p className="text-red-600 text-3xl font-heading">
                +92 344 1543209
              </p>
              <p className="text-red-600 text-3xl font-heading">
                +1 562 661 8210
              </p>
            </div>

            <p className="text-gray-600 font-body mb-6">
              support@nexasoft.com
            </p>

            <div className="flex gap-6 text-xl">
              <FaFacebookF className="hover:text-red-600 cursor-pointer transition" />
              <FaLinkedinIn className="hover:text-red-600 cursor-pointer transition" />
              <FaInstagram className="hover:text-red-600 cursor-pointer transition" />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <form className="space-y-6">

              {/* ROW 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-black/20 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-black/20 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition"
                />
              </div>

              {/* ROW 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Phone no"
                  className="border border-black/20 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition"
                />
                <select
                  className="border border-black/20 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition"
                >
                  <option>Select a service</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>UI/UX Design</option>
                  <option>Digital Marketing</option>
                </select>
              </div>

              {/* SUBJECT */}
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-black/20 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition"
              />

              {/* MESSAGE */}
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full border border-black/20 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition"
              ></textarea>

              {/* BUTTON */}
              <button
                type="submit"
                className="mt-6 border border-black/30 px-8 py-3 rounded-full hover:bg-black hover:text-white transition"
              >
                Let’s Talk
              </button>

            </form>
          </div>

        </div>
      </div>

    </section>
  );
};

export default ContactPage;
