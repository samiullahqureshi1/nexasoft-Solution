// import React from 'react'
// import { FiArrowUpRight } from "react-icons/fi";

// const Footer = () => {
//   return (
//     <div>
//       <section className="w-full">

//   {/* ================= TOP BLACK CTA ================= */}
//   <div className="bg-black text-white px-16 py-24 relative overflow-hidden">

//     <div className="mx-auto flex justify-between items-start">

//       {/* LEFT TEXT */}
//       <h2 className="text-6xl font-light leading-tight max-w-4xl">
//         Sit, Relax & Envision <br />
//         Let <span className="text-[#FF6701] font-medium">NexaSoft</span> handle the rest.
//       </h2>

//       {/* RIGHT LOGO MARK */}
//       <div className="flex items-center gap-3 mt-4">

//         <div className="grid grid-cols-2 gap-2">
//           <div className="w-6 h-6 bg-[#FF6701] rounded-md"></div>
//           <div className="w-6 h-6 bg-[#FF6701] rounded-md"></div>
//           <div className="w-6 h-6 bg-[#FF6701] rounded-md"></div>
//           <div className="w-6 h-6 bg-[#FF6701] rounded-md"></div>
//         </div>

//         <div className="w-4 h-20 bg-white rounded-md mx-4"></div>

//         <div className="grid grid-cols-2 gap-2">
//           <div className="w-6 h-6 bg-[#FF6701] rounded-md"></div>
//           <div className="w-6 h-6 bg-[#FF6701] rounded-md"></div>
//           <div className="w-6 h-6 bg-[#FF6701] rounded-md"></div>
//           <div className="w-6 h-6 bg-[#FF6701] rounded-md"></div>
//         </div>

//       </div>

//     </div>
//   </div>

//   {/* ================= BOTTOM LIGHT FOOTER ================= */}
//   <div className="bg-[#f3f3f3] px-16 py-20">

//     <div className=" mx-auto flex justify-between">

//       {/* LEFT SIDE */}
//       <div className="max-w-md">

//         {/* Logo */}
//         <div className="flex items-center gap-2 text-2xl font-semibold mb-6">
//           <span className="text-[#FF6701] text-3xl font-bold">//</span>
//           <span>
//             <span className="text-[#FF6701]">NexaSoft</span>
//             <span className="text-gray-800 font-light">Solutions</span>
//           </span>
//         </div>

//         <p className="text-gray-600 mb-8 leading-relaxed">
//           We help businesses grow with smart design, reliable technology,
//           and solutions built around real user needs.
//         </p>

//         {/* Links */}
//         <div className="flex flex-wrap gap-6 text-gray-700 text-sm">
//           <a className="hover:text-[#FF6701] transition">Home</a>
//           <a className="hover:text-[#FF6701] transition">Magic Work</a>
//           <a className="hover:text-[#FF6701] transition">About Us</a>
//           <a className="hover:text-[#FF6701] transition">Blogs</a>
//           <a className="text-[#FF6701]">Contact</a>
//           <a className="hover:text-[#FF6701] transition">Privacy Policy</a>
//           <a className="hover:text-[#FF6701] transition">Terms & Conditions</a>
//         </div>

//       </div>

//       {/* RIGHT SIDE */}
//       <div className="text-right">

//         <p className="text-gray-500 mb-2">Email us at:</p>

//         <p className="text-3xl text-gray-900 mb-6">
//           admin@nexasoft.com
//         </p>

//         {/* CTA Button */}
//         <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-[#FF6701] transition-all duration-300 ml-auto">
//           Let’s Talk Growth
//           <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
//             <FiArrowUpRight size={18} />
//           </div>
//         </button>

//         {/* Social Links */}
//         <div className="flex justify-end gap-6 text-gray-700 mt-10 text-sm">
//           <a className="hover:text-[#FF6701] transition">Facebook</a>
//           <a className="hover:text-[#FF6701] transition">Instagram</a>
//           <a className="hover:text-[#FF6701] transition">Youtube</a>
//           <a className="hover:text-[#FF6701] transition">Linkedin</a>
//         </div>

//       </div>

//     </div>

//     {/* COPYRIGHT */}
//     <div className="text-center text-gray-500 text-sm mt-16">
//       © 2025 NexaSoft Solutions
//     </div>

//   </div>

// </section>
//     </div>
//   )
// }

// export default Footer
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F1F3F5] border-t border-[#D9DADB] pt-20">

      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16 pb-20">

        {/* COLUMN 1 */}
        <div>
          <h4 className="font-heading text-lg mb-6">
            Nexasoft Solutions LLC.
          </h4>

          <p className="text-gray-600 font-body mb-4">
            2108 N ST, SACRAMENTO, CA 95816
          </p>

          <p className="text-gray-600 font-body mb-2">
            hello@nexasoft.com
          </p>

          <p className="text-gray-600 font-body mb-2">
            +1 654 201 2365
          </p>

          {/* <p className="text-gray-600 font-body">
            EIN: 20-2461019916
          </p> */}
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4 className="font-heading text-lg mb-6">
            Nexasoft Pvt Ltd.
          </h4>

          <p className="text-gray-600 font-body mb-4">
            Office # 3, Plaza 63, Civic Center, Bahria Town Phase 4, Islamabad
          </p>

          <p className="text-gray-600 font-body mb-2">
            support@nexasoft.com
          </p>

          <p className="text-gray-600 font-body mb-2">
            +92 344 1543209
          </p>

          {/* <p className="text-gray-600 font-body">
            NTN: 0100630
          </p> */}
        </div>

        {/* COLUMN 3 */}
        <div>
          <h4 className="font-heading text-lg mb-6">
            Join Our Team
          </h4>

          <p className="text-gray-600 font-body mb-4">
            Join our fast-moving creative team — we’d love to have you on board.
          </p>

          <p className="text-gray-600 font-body mb-2">
            hr@nexasoft.com
          </p>

          <p className="text-gray-600 font-body mb-2">
            +92 311 5050327
          </p>

          <button className="text-red-600 font-body mt-4 hover:underline">
            Apply Now →
          </button>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h4 className="font-heading text-lg mb-6">
            Social
          </h4>

          <div className="flex gap-6 text-xl text-black">
            <FaFacebookF className="cursor-pointer hover:text-red-600 transition" />
            <FaLinkedinIn className="cursor-pointer hover:text-red-600 transition" />
            <FaInstagram className="cursor-pointer hover:text-red-600 transition" />
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#D9DADB] py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* Scroll To Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <FiArrowUp />
          </button>

          <h3 className="font-heading tracking-widest">
            NEXA<span className="text-red-600">SOFT</span>
          </h3>

          <p className="text-gray-500 font-body text-sm">
            © {new Date().getFullYear()} Nexasoft Solutions
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
