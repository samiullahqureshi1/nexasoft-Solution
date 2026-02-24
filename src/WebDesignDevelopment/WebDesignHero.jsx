// import React, { useState } from "react";
// import {
//   FaLaptopCode,
//   FaCube,
//   FaDesktop,
//   FaPenNib,
//   FaBoxOpen,
// } from "react-icons/fa";

// const services = [
//   {
//     id: 1,
//     name: "Website Design & Development",
//     slug: "website-design-development",
//     icon: <FaLaptopCode />,
//     description:
//       "We design and develop high-performing websites built for scalability, seamless functionality, and long-term business growth.",
//     image:
//       "https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg",
//   },
//   {
//     id: 2,
//     name: "Strategic Brand Identity Design",
//     slug: "brand-design",
//     icon: <FaCube />,
//     description:
//       "We create strategic brand identities that communicate your values clearly and build lasting emotional connections with audiences.",
//     image:
//       "https://img.freepik.com/free-photo/hand-holding-notebook-with-drew-brand-logo-creative-design-ideas_53876-13985.jpg?ga=GA1.1.35512147.1759400476&semt=ais_hybrid&w=740&q=80",
//   },
//   {
//     id: 3,
//     name: "Creative Web Experience Design",
//     slug: "web-design",
//     icon: <FaDesktop />,
//     description:
//       "We craft visually compelling web experiences that enhance usability, improve engagement, and guide users toward meaningful actions.",
//     image:
//       "https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg",
//   },
//   {
//     id: 4,
//     name: "Conversion-Focused Copywriting",
//     slug: "copywriting",
//     icon: <FaPenNib />,
//     description:
//       "We write persuasive and strategic copy that builds trust, communicates value clearly, and turns visitors into loyal customers.",
//     image:
//       "https://img.freepik.com/free-photo/cropped-photo-serious-young-man-sitting-office-coworking_171337-17650.jpg?t=st=1771833951~exp=1771837551~hmac=958129242d57f7b1718e1498c757b896bafdc8a592a20a957bc043bda72ad030&w=1480",
//   },
//   {
//     id: 5,
//     name: "E-Commerce & CMS Development",
//     slug: "ecommerce-cms",
//     icon: <FaBoxOpen />,
//     description:
//       "We build powerful eCommerce and CMS platforms designed to streamline operations, increase conversions.",
//     image:
//       "https://img.freepik.com/premium-photo/home-office-online-shopping-cart-with-click-frenzy-discounts-desktop-computer_416256-121060.jpg?ga=GA1.1.35512147.1759400476&semt=ais_hybrid&w=740&q=80",
//   },
// ];

// const WebDesignHero = () => {
//   const [active, setActive] = useState(1);
//   const activeService = services.find((s) => s.id === active);
//   return (
//     <section className="w-full bg-[#F1F3F5] pt-40">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex flex-col md:flex-row justify-between gap-20">
//           <div className="max-w-[700px]">
//             <p className="font-body text-xs tracking-[0.25em] text-gray-500 mb-8">
//               WEBSITE DESIGN & DEVELOPMENT
//             </p>

//             <h1 className="font-heading text-[70px] leading-[1.02] tracking-[-0.02em]">
//               <span className="text-[#1A1A1A] block">Websites That</span>

//               <span className="block">
//                 <span className="text-[#9C0000]">Captivate</span>
//                 <span className="text-[#1A1A1A]"> & Convert</span>
//               </span>
//             </h1>
//           </div>

//           <div className="md:pt-16 max-w-[520px]">
//             <p className="font-body text-[18px] leading-[1.8] text-gray-600">
//               We build beautiful, responsive websites engineered with AI-driven
//               insights to maximize engagement and drive results. Clarity,
//               strategy, and seamless functionality—powered by intelligence.
//             </p>
//           </div>
//         </div>

//         <div className="mt-24 border-t border-[#D9DADB]">
//           <div className="flex justify-between text-center">
//             {services.map((service, index) => (
//               <div
//                 key={service.id}
//                 onClick={() => setActive(service.id)}
//                 className={`relative flex-1 cursor-pointer py-12 
//         transition-all duration-300 
//         ${active === service.id ? "text-[#9C0000]" : "text-gray-500 hover:text-black"}`}
//               >
//                 {/* Vertical Divider */}
//                 {index !== 0 && (
//                   <div className="absolute left-0 top-8 bottom-8 w-[1px] bg-[#E5E5E5]"></div>
//                 )}

//                 <div className="flex flex-col items-center gap-5">
//                   <div className="text-3xl opacity-60">{service.icon}</div>

//                   <p className="font-body text-sm">{service.name}</p>
//                 </div>

//                 {/* Active Bottom Line */}
//                 {active === service.id && (
//                   <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#9C0000]"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="py-20">
//           <div className="flex flex-col md:flex-row items-center gap-16">
//             {/* LEFT SIDE TEXT */}
//             {/* LEFT SIDE TEXT */}
//             <div className="flex-1 max-w-[550px]">
//               <h2 className="text-4xl md:text-5xl font-heading mb-6">
//                 <span className="text-[#9C0000]">{activeService.name}</span>
//               </h2>

//               <p className="text-gray-600 text-lg leading-relaxed mb-8">
//                 {activeService.description}
//               </p>

//               {/* CTA Button */}
//               <button className="group flex items-center gap-3 px-8 py-4 rounded-full border border-[#9C0000] text-[#9C0000] font-body transition hover:bg-[#9C0000] hover:text-white">
//                 Let’s Make Something Together
//               </button>
//             </div>

//             {/* RIGHT SIDE IMAGE */}
//             <div className="flex-1">
//               <img
//                 src={activeService.image}
//                 alt={activeService.name}
//                 className="w-full rounded-xl shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WebDesignHero;
import React, { useState } from "react";
import {
  FaLaptopCode,
  FaCube,
  FaDesktop,
  FaPenNib,
  FaBoxOpen,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "Website Design & Development",
    slug: "website-design-development",
    icon: <FaLaptopCode />,
    description:
      "We design and develop high-performing websites built for scalability, seamless functionality, and long-term business growth.",
    image:
      "https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg",
  },
  {
    id: 2,
    name: "Strategic Brand Identity Design",
    slug: "brand-design",
    icon: <FaCube />,
    description:
      "We create strategic brand identities that communicate your values clearly and build lasting emotional connections with audiences.",
    image:
      "https://img.freepik.com/free-photo/hand-holding-notebook-with-drew-brand-logo-creative-design-ideas_53876-13985.jpg",
  },
  {
    id: 3,
    name: "Creative Web Experience Design",
    slug: "web-design",
    icon: <FaDesktop />,
    description:
      "We craft visually compelling web experiences that enhance usability, improve engagement, and guide users toward meaningful actions.",
    image:
      "https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg",
  },
  {
    id: 4,
    name: "Conversion-Focused Copywriting",
    slug: "copywriting",
    icon: <FaPenNib />,
    description:
      "We write persuasive and strategic copy that builds trust, communicates value clearly, and turns visitors into loyal customers.",
    image:
      "https://img.freepik.com/free-photo/cropped-photo-serious-young-man-sitting-office-coworking_171337-17650.jpg",
  },
  {
    id: 5,
    name: "E-Commerce & CMS Development",
    slug: "ecommerce-cms",
    icon: <FaBoxOpen />,
    description:
      "We build powerful eCommerce and CMS platforms designed to streamline operations, increase conversions.",
    image:
      "https://img.freepik.com/premium-photo/home-office-online-shopping-cart-with-click-frenzy-discounts-desktop-computer_416256-121060.jpg",
  },
];

const WebDesignHero = () => {
  const [active, setActive] = useState(1);
  const activeService = services.find((s) => s.id === active);

  return (
    <section className="w-full bg-[#F1F3F5] pt-24 sm:pt-28 md:pt-32 lg:pt-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
          
          <div className="max-w-[700px]">
            <p className="font-body text-[10px] sm:text-xs tracking-[0.25em] text-gray-500 mb-6 md:mb-8">
              WEBSITE DESIGN & DEVELOPMENT
            </p>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[70px] leading-[1.05] tracking-[-0.02em]">
              <span className="text-[#1A1A1A] block">Websites That</span>
              <span className="block">
                <span className="text-[#9C0000]">Captivate</span>
                <span className="text-[#1A1A1A]"> & Convert</span>
              </span>
            </h1>
          </div>

          <div className="lg:pt-16 max-w-[520px]">
            <p className="font-body text-sm sm:text-base md:text-lg leading-[1.8] text-gray-600">
              We build beautiful, responsive websites engineered with AI-driven
              insights to maximize engagement and drive results. Clarity,
              strategy, and seamless functionality—powered by intelligence.
            </p>
          </div>
        </div>

        {/* SERVICES TABS */}
        <div className="mt-16 md:mt-24 border-t border-[#D9DADB]">
          <div className="flex overflow-x-auto scrollbar-hide text-center">
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => setActive(service.id)}
                className={`relative min-w-[180px] md:min-w-0 md:flex-1 cursor-pointer py-8 md:py-12 px-4
                transition-all duration-300
                ${active === service.id ? "text-[#9C0000]" : "text-gray-500 hover:text-black"}`}
              >
                {/* Vertical Divider Desktop Only */}
                {index !== 0 && (
                  <div className="hidden md:block absolute left-0 top-8 bottom-8 w-[1px] bg-[#E5E5E5]"></div>
                )}

                <div className="flex flex-col items-center gap-4 md:gap-5">
                  <div className="text-2xl md:text-3xl opacity-60">
                    {service.icon}
                  </div>

                  <p className="font-body text-xs md:text-sm">
                    {service.name}
                  </p>
                </div>

                {active === service.id && (
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#9C0000]"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="py-14 md:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">

            {/* TEXT */}
            <div className="flex-1 max-w-[550px] text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading mb-6">
                <span className="text-[#9C0000]">{activeService.name}</span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
                {activeService.description}
              </p>

              <button className="group w-full sm:w-auto flex justify-center items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full border border-[#9C0000] text-[#9C0000] font-body transition hover:bg-[#9C0000] hover:text-white">
                Let’s Make Something Together
              </button>
            </div>

            {/* IMAGE */}
            <div className="flex-1 w-full">
              <img
                src={activeService.image}
                alt={activeService.name}
                className="w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-auto object-cover rounded-xl shadow-lg"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WebDesignHero;