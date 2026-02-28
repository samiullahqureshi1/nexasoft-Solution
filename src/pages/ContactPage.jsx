// import React from "react";
// import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// const ContactPage = () => {
//   return (
//     <section className="w-full bg-[rgb(241,243,245)]">

//       {/* TOP SECTION */}
//       <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-28 grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">

//         {/* LEFT */}
//         <div>
//           <p className="text-[10px] sm:text-xs tracking-[4px] text-gray-500 uppercase mb-4 md:mb-6">
//             • Contact Us
//           </p>

//           <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
//             Ready to Elevate Your Brand?
//           </h1>
//         </div>

//         {/* RIGHT TEXT */}
//         <div className="flex items-center">
//           <p className="text-sm sm:text-base text-gray-600 font-body leading-relaxed max-w-md">
//             Let’s build your advantage. We craft identities, digital experiences,
//             and campaigns that don’t just look good — they drive results.
//           </p>
//         </div>

//       </div>

//       {/* CONTACT SECTION */}
//       <div className="bg-white/40 backdrop-blur-sm py-16 sm:py-20 md:py-24 lg:py-28">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">

//           {/* LEFT INFO */}
//           <div className="text-center lg:text-left">
//             <button className="border border-black/30 px-5 md:px-6 py-2 rounded-full text-xs md:text-sm mb-6 md:mb-8">
//               GET IN TOUCH.
//             </button>

//             <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
//               Let’s get in touch.
//             </h2>

//             <p className="text-sm sm:text-base text-gray-600 font-body mb-8 md:mb-10 max-w-md mx-auto lg:mx-0">
//               If you would like to work with us or just want to get in touch,
//               we’d love to hear from you!
//             </p>

//             <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
//               <p className="text-[#9C0000] text-xl sm:text-2xl md:text-3xl font-heading">
//                 +92 344 1543209
//               </p>
//               <p className="text-[#9C0000] text-xl sm:text-2xl md:text-3xl font-heading">
//                 +1 562 661 8210
//               </p>
//             </div>

//             <p className="text-sm sm:text-base text-gray-600 font-body mb-6">
//               support@nexasoft.com
//             </p>

//             <div className="flex justify-center lg:justify-start gap-6 text-lg md:text-xl">
//               <FaFacebookF className="hover:text-[#9C0000] cursor-pointer transition" />
//               <FaLinkedinIn className="hover:text-[#9C0000] cursor-pointer transition" />
//               <FaInstagram className="hover:text-[#9C0000] cursor-pointer transition" />
//             </div>
//           </div>

//           {/* RIGHT FORM */}
//           <div>
//             <form className="space-y-5 md:space-y-6">

//               {/* ROW 1 */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
//                 />
//               </div>

//               {/* ROW 2 */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
//                 <input
//                   type="text"
//                   placeholder="Phone no"
//                   className="border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
//                 />
//                 <select
//                   className="border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
//                 >
//                   <option>Select a service</option>
//                   <option>Web Development</option>
//                   <option>App Development</option>
//                   <option>UI/UX Design</option>
//                   <option>Digital Marketing</option>
//                 </select>
//               </div>

//               {/* SUBJECT */}
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
//               />

//               {/* MESSAGE */}
//               <textarea
//                 rows="5"
//                 placeholder="Message"
//                 className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
//               ></textarea>

//               {/* BUTTON */}
//               <button
//                 type="submit"
//                 className="w-full sm:w-auto mt-4 md:mt-6 border border-black/30 px-6 md:px-8 py-3 rounded-full text-sm md:text-base hover:bg-[#9C0000] hover:text-white transition"
//               >
//                 Let’s Talk
//               </button>

//             </form>
//           </div>

//         </div>
//       </div>

//     </section>
//   );
// };

// export default ContactPage;
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kgitu7o", // 🔥 Paste Service ID here
        "template_9jvqnue", // 🔥 Paste Template ID here
        form.current,
        "8AH1m3WErX1snjvZK", // 🔥 Paste Public Key here
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
            Let’s build your advantage. We craft identities, digital
            experiences, and campaigns that don’t just look good — they drive
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
              Let’s get in touch.
            </h2>

            <p className="text-sm sm:text-base text-gray-600 font-body mb-8 md:mb-10 max-w-md mx-auto lg:mx-0">
              If you would like to work with us or just want to get in touch,
              we’d love to hear from you!
            </p>

            <p className="text-sm sm:text-base text-gray-600 font-body mb-6">
              solutionsneasoft@gmail.com
            </p>

            <div className="flex justify-center lg:justify-start gap-6 text-lg md:text-xl">
              <FaFacebookF className="hover:text-[#9C0000] cursor-pointer transition" />
              <FaLinkedinIn className="hover:text-[#9C0000] cursor-pointer transition" />
              <FaInstagram className="hover:text-[#9C0000] cursor-pointer transition" />
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
                  placeholder="Name"
                  required
                  className="border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone no"
                  className="border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
                />
                {/* SERVICES DROPDOWN */}
                <select
                  name="service"
                  required
                  className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
                >
                  <option value="">Select a Service</option>

                  <option>Website Design & Development</option>
                  <option>Strategic Brand Identity Design</option>
                  <option>Creative Web Experience Design</option>
                  <option>Conversion-Focused Copywriting</option>
                  <option>E-Commerce & CMS Development</option>

                  <option>Digital Marketing</option>
                  <option>SEO</option>
                  <option>PPC</option>
                  <option>Social Media</option>
                  <option>Performance Marketing</option>

                  <option>Web App Development</option>
                  <option>App Development</option>
                  <option>Business Solutions</option>
                </select>

                {/* SUBJECT DROPDOWN */}
                {/* <select
  name="subject"
  required
  className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
>
  <option value="">Select Inquiry Type</option>
  <option>General Inquiry</option>
  <option>Project Discussion</option>
  <option>Request a Quote</option>
  <option>Partnership Opportunity</option>
  <option>Support Request</option>
</select> */}
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Message"
                required
                className="w-full border border-black/20 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#9C0000] transition"
              ></textarea>

              <button
                type="submit"
                className="w-full sm:w-auto mt-4 md:mt-6 border border-black/30 px-6 md:px-8 py-3 rounded-full text-sm md:text-base hover:bg-[#9C0000] hover:text-white transition"
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
