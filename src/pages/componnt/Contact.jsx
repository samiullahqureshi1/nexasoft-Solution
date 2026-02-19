import React from "react";
import { FiMessageCircle } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      <section className="w-full py-24 px-16">
        <div className=" mx-auto grid grid-cols-2 gap-20">
          {/* ================= LEFT SIDE ================= */}
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              Get in touch with us today!
            </h2>

            <p className="text-gray-600 mb-12 max-w-md">
              Whatever you need, whenever you need it, our team is dedicated to
              support you every step of the way.
            </p>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center">
                <FiMessageCircle className="text-gray-700" size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Message us
                </h3>

                <p className="text-gray-600 text-sm max-w-sm">
                  Use our online chat system to message us and get support.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-300 pt-6">
              <a
                href="mailto:admin@nexasoft.com"
                className="text-gray-800 underline hover:text-[#FF6701] transition"
              >
                admin@nexasoft.com
              </a>
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="bg-[#e9e9eb] rounded-3xl p-10 shadow-sm">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-white rounded-full px-6 py-4 text-sm outline-none"
              />

              <input
                type="email"
                placeholder="you@company.com"
                className="w-full bg-white rounded-full px-6 py-4 text-sm outline-none"
              />

              <input
                type="tel"
                placeholder="+1 555 000-0000"
                className="w-full bg-white rounded-full px-6 py-4 text-sm outline-none"
              />

              {/* Consent */}
              <div className="flex items-start gap-3 text-xs text-gray-600">
                <input type="checkbox" className="mt-1" />
                <p>
                  By checking this box, I consent to receive text messages
                  related to ongoing business matters from NexaSoft Solutions. For
                  more information, please visit our
                  <span className="text-[#FF6701] underline ml-1">
                    Terms of Use
                  </span>
                  and
                  <span className="text-[#FF6701] underline ml-1">
                    Privacy Policy
                  </span>
                  .
                </p>
              </div>

              {/* Message */}
              <textarea
                placeholder="How Can We Help?"
                rows={5}
                className="w-full bg-white rounded-2xl px-6 py-4 text-sm outline-none resize-none"
              ></textarea>

              {/* Services */}
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-4">
                  Services
                </h4>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Website Design
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    AI Product
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    UX Design
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Strategy & Consulting
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    User Research
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Other
                  </label>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-white text-gray-800 py-4 rounded-full hover:bg-[#FF6701] hover:text-white transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
