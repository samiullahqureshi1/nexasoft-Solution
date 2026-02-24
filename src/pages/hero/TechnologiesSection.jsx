// import React, { useState } from "react";
// import { FaFigma, FaReact, FaNodeJs, FaShopify } from "react-icons/fa";
// import { FaMeta } from "react-icons/fa6";
// import { SiAdobe, SiCanva, SiWebflow, SiMongodb } from "react-icons/si";

// const data = [
//   {
//     title: "Digital Marketing Services",
//     tech: [
//       {
//         img: "https://sevenkoncepts.com/_next/image/?url=https%3A%2F%2Fapi.sevenkoncepts.com%2Fuploads%2Fgoogleads_cd6cee20ef.png&w=640&q=75",
//         name: "Google Ads",
//       },
//       {
//         img: "https://sevenkoncepts.com/_next/image/?url=https%3A%2F%2Fapi.sevenkoncepts.com%2Fuploads%2Fmeta_5db30f718c.png&w=640&q=75",
//         name: "Meta",
//       },
//       {
//         img: "https://sevenkoncepts.com/_next/image/?url=https%3A%2F%2Fapi.sevenkoncepts.com%2Fuploads%2Fgooglekp_bd1a664328.png&w=640&q=75",
//         name: "Google KP",
//       },
//       {
//         img: "https://sevenkoncepts.com/_next/image/?url=https%3A%2F%2Fapi.sevenkoncepts.com%2Fuploads%2Fmailchimp_5ff475f4fb.png&w=640&q=75",
//         name: "Mailchimp",
//       },
//     ],
//   },
//   {
//     title: "Designing and Branding",
//     tech: [
//       { icon: <FaFigma />, name: "Figma" },
//       { icon: <SiAdobe />, name: "Adobe" },
//       { icon: <SiCanva />, name: "Canva" },
//       { icon: <SiWebflow />, name: "Webflow" },
//     ],
//   },
//   {
//     title: "Front-end Tech",
//     tech: [
//       { icon: <FaReact />, name: "React" },
//       { icon: <SiWebflow />, name: "Webflow" },
//       { icon: <FaFigma />, name: "Figma" },
//       { icon: <SiAdobe />, name: "Adobe" },
//     ],
//   },
//   {
//     title: "Back-end Tech",
//     tech: [
//       { icon: <FaNodeJs />, name: "Node JS" },
//       { icon: <SiMongodb />, name: "MongoDB" },
//       { icon: <FaReact />, name: "Next JS" },
//       { icon: <FaShopify />, name: "API" },
//     ],
//   },
//   {
//     title: "Third Party API",
//     tech: [
//       { icon: <FaShopify />, name: "Stripe" },
//       { icon: <SiAdobe />, name: "Google API" },
//       { icon: <FaNodeJs />, name: "REST API" },
//       { icon: <FaReact />, name: "GraphQL" },
//     ],
//   },
//   {
//     title: "Ecommerce & CMS",
//     tech: [
//       { icon: <FaShopify />, name: "Shopify" },
//       { icon: <SiWebflow />, name: "Webflow" },
//       { icon: <SiAdobe />, name: "Adobe CMS" },
//       { icon: <FaReact />, name: "Headless CMS" },
//     ],
//   },
// ];

// const TechnologiesSection = () => {
//   const [active, setActive] = useState(0);

//   return (
//     <section className="w-full bg-[#F1F3F5] px-6 md:px-10 lg:px-16 py-16 md:py-24 lg:py-28 border-b border-[#D9DADB]">
//       <div className="max-w-7xl mx-auto">
        
//         {/* HEADER */}
//         <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-14 md:mb-20">
//           <div>
//             <p className="text-xs tracking-[4px] text-gray-500 font-body mb-4 uppercase">
//               Skills & Experience
//             </p>

//             <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-tight">
//               <span className="text-[#9C0000]">Technologies</span> We Work with
//             </h2>
//           </div>

//           <button className="w-fit px-6 md:px-8 py-3 border border-black/30 rounded-full text-xs md:text-sm tracking-wider font-body hover:bg-black hover:text-white transition">
//             SERVICES
//           </button>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          
//           {/* LEFT SIDE */}
//           <div>
//             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:flex lg:gap-8 gap-6 mb-10">
//               {data[active].tech.map((item, index) => (
//                 <div
//                   key={index}
//                   className="w-full max-w-[160px] mx-auto lg:mx-0 h-44 md:h-52 rounded-[40px] md:rounded-[60px] border border-black/10 flex flex-col items-center justify-center text-center transition hover:border-[#9C0000]"
//                 >
//                   <div className="text-3xl md:text-4xl text-gray-600 mb-4 flex items-center justify-center">
//                     {item.img ? (
//                       <img
//                         src={item.img}
//                         alt={item.name}
//                         className="w-10 h-10 md:w-12 md:h-12 object-contain"
//                       />
//                     ) : (
//                       item.icon
//                     )}
//                   </div>

//                   <p className="font-body text-sm md:text-base text-gray-600">
//                     {item.name}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* DOTS */}
//             <div className="flex gap-3 justify-center md:justify-start">
//               {data.map((_, index) => (
//                 <span
//                   key={index}
//                   className={`w-2 h-2 rounded-full ${
//                     active === index ? "bg-[#9C0000]" : "bg-gray-300"
//                   }`}
//                 ></span>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="space-y-6 md:space-y-8 lg:space-y-10">
//             {data.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => setActive(index)}
//                 className="flex items-center gap-4 md:gap-6 cursor-pointer group"
//               >
//                 <span className="text-gray-400 font-body text-sm md:text-lg">
//                   {String(index + 1).padStart(2, "0")}
//                 </span>

//                 <h3
//                   className={`font-heading text-lg md:text-xl lg:text-2xl transition ${
//                     active === index
//                       ? "text-[#9C0000]"
//                       : "text-black group-hover:text-[#9C0000]"
//                   }`}
//                 >
//                   {item.title}
//                 </h3>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechnologiesSection;
import React, { useState } from "react";
import { FaFigma, FaReact, FaNodeJs, FaShopify } from "react-icons/fa";
import { SiAdobe, SiCanva, SiWebflow, SiMongodb } from "react-icons/si";

const data = [
  {
    title: "Digital Marketing Services",
    tech: [
      {
        img: "https://sevenkoncepts.com/_next/image/?url=https%3A%2F%2Fapi.sevenkoncepts.com%2Fuploads%2Fgoogleads_cd6cee20ef.png&w=640&q=75",
        name: "Google Ads",
      },
      {
        img: "https://sevenkoncepts.com/_next/image/?url=https%3A%2F%2Fapi.sevenkoncepts.com%2Fuploads%2Fmeta_5db30f718c.png&w=640&q=75",
        name: "Meta",
      },
      {
        img: "https://sevenkoncepts.com/_next/image/?url=https%3A%2F%2Fapi.sevenkoncepts.com%2Fuploads%2Fgooglekp_bd1a664328.png&w=640&q=75",
        name: "Google KP",
      },
      {
        img: "https://sevenkoncepts.com/_next/image/?url=https%3A%2F%2Fapi.sevenkoncepts.com%2Fuploads%2Fmailchimp_5ff475f4fb.png&w=640&q=75",
        name: "Mailchimp",
      },
    ],
  },
  {
    title: "Designing and Branding",
    tech: [
      { icon: <FaFigma />, name: "Figma" },
      { icon: <SiAdobe />, name: "Adobe" },
      { icon: <SiCanva />, name: "Canva" },
      { icon: <SiWebflow />, name: "Webflow" },
    ],
  },
  {
    title: "Front-end Tech",
    tech: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiWebflow />, name: "Webflow" },
      { icon: <FaFigma />, name: "Figma" },
      { icon: <SiAdobe />, name: "Adobe" },
    ],
  },
  {
    title: "Back-end Tech",
    tech: [
      { icon: <FaNodeJs />, name: "Node JS" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <FaReact />, name: "Next JS" },
      { icon: <FaShopify />, name: "API" },
    ],
  },
  {
    title: "Third Party API",
    tech: [
      { icon: <FaShopify />, name: "Stripe" },
      { icon: <SiAdobe />, name: "Google API" },
      { icon: <FaNodeJs />, name: "REST API" },
      { icon: <FaReact />, name: "GraphQL" },
    ],
  },
  {
    title: "Ecommerce & CMS",
    tech: [
      { icon: <FaShopify />, name: "Shopify" },
      { icon: <SiWebflow />, name: "Webflow" },
      { icon: <SiAdobe />, name: "Adobe CMS" },
      { icon: <FaReact />, name: "Headless CMS" },
    ],
  },
];

const TechnologiesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#F1F3F5] px-6 md:px-10 lg:px-16 py-16 md:py-24 lg:py-28 border-b border-[#D9DADB]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-14 md:mb-20">
          <div>
            <p className="text-xs tracking-[4px] text-gray-500 font-body mb-4 uppercase">
              Skills & Experience
            </p>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              <span className="text-[#9C0000]">Technologies</span> We Work with
            </h2>
          </div>

          <button className="w-fit px-6 md:px-8 py-3 border border-black/30 rounded-full text-xs md:text-sm tracking-wider font-body hover:bg-black hover:text-white transition">
            SERVICES
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">

          {/* LEFT SIDE */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:flex lg:flex-wrap gap-5 md:gap-6 lg:gap-8 mb-10">
              {data[active].tech.map((item, index) => (
                <div
                  key={index}
                  className="w-full lg:w-[160px] h-40 sm:h-44 md:h-52 rounded-[35px] md:rounded-[50px] lg:rounded-[60px] border border-black/10 flex flex-col items-center justify-center text-center transition hover:border-[#9C0000]"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl text-gray-600 mb-3 md:mb-4 flex items-center justify-center">
                    {item.img ? (
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                      />
                    ) : (
                      item.icon
                    )}
                  </div>

                  <p className="font-body text-xs sm:text-sm md:text-base text-gray-600 px-2">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>

            {/* DOTS */}
            <div className="flex gap-3 justify-center md:justify-start">
              {data.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full transition ${
                    active === index ? "bg-[#9C0000]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-5 md:space-y-7 lg:space-y-10">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => setActive(index)}
                className="flex items-start gap-4 md:gap-6 cursor-pointer group"
              >
                <span className="text-gray-400 font-body text-xs sm:text-sm md:text-lg min-w-[30px]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className={`font-heading text-base sm:text-lg md:text-xl lg:text-2xl transition ${
                    active === index
                      ? "text-[#9C0000]"
                      : "text-black group-hover:text-[#9C0000]"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;