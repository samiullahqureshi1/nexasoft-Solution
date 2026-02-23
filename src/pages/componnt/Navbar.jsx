// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const linkStyle =
//     "text-sm tracking-wider font-medium transition";

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-[#F1F3F5] border-b border-[rgba(0,0,0,0.05)] px-16 py-6 flex items-center justify-between font-body">

//       {/* LEFT */}
//       <div className="flex space-x-8">
//         <NavLink
//           to="/about-us"
//           className={({ isActive }) =>
//             `${linkStyle} ${isActive ? "text-[#9C0000]" : "hover:text-[#9C0000]"}`
//           }
//         >
//           AGENCY
//         </NavLink>

//         <NavLink
//           to="/services"
//           className={({ isActive }) =>
//             `${linkStyle} ${isActive ? "text-[#9C0000]" : "hover:text-[#9C0000]"}`
//           }
//         >
//           SERVICES
//         </NavLink>
//       </div>

//       {/* CENTER LOGO */}
//       <NavLink
//         to="/"
//         className="text-3xl tracking-widest font-heading"
//       >
//         NEXA<span className="text-[#9C0000]">SOFT</span> SOLUTIONS
//       </NavLink>

//       {/* RIGHT */}
//       <div className="flex space-x-8">
//         <NavLink
//           to="/blog"
//           className={({ isActive }) =>
//             `${linkStyle} ${isActive ? "text-[#9C0000]" : "hover:text-[#9C0000]"}`
//           }
//         >
//           THOUGHTS
//         </NavLink>

//         <NavLink
//           to="/contact"
//           className={({ isActive }) =>
//             `${linkStyle} ${isActive ? "text-[#9C0000]" : "hover:text-[#9C0000]"}`
//           }
//         >
//           GET THROUGH
//         </NavLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const navigate = useNavigate();
  const linkStyle =
    "text-sm tracking-wider font-medium transition duration-300";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F1F3F5] border-b border-[rgba(0,0,0,0.05)] px-16 py-6 font-body">
      <div className="flex items-center justify-between">
        {/* LEFT */}
        <div className="flex space-x-8 relative">
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? "text-[#9C0000]" : "hover:text-[#9C0000]"}`
            }
          >
            AGENCY
          </NavLink>

          {/* SERVICES WITH DROPDOWN */}
          <div className="relative group">
            <NavLink className={`${linkStyle} hover:text-[#9C0000]`}>
              SERVICES
            </NavLink>

            <div className="absolute top-12 left-0 w-[1000px] bg-[#F5F5F5] border border-[#E5E5E5] shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              {/* LEFT */}
              <div className="w-1/2 p-10 border-r border-[#E5E5E5]">
                <h3 className="font-heading tracking-wide mb-6 pb-4 border-b border-[#E5E5E5]">
                  AGENCY SERVICES – NEXASOFT SOLUTIONS
                </h3>

                <ul className="space-y-6 font-body text-[15px] text-[#333]">
                  <li>
                    <NavLink
                      to="/services/web-design-development"
                      className={({ isActive }) =>
                        `transition-colors duration-300 block ${
                          isActive ? "text-[#9C0000]" : "hover:text-[#9C0000]"
                        }`
                      }
                    >
                      Website Design & Development
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/services/digital-marketing"
                      className={({ isActive }) =>
                        `transition-colors duration-300 block ${
                          isActive ? "text-[#9C0000]" : "hover:text-[#9C0000]"
                        }`
                      }
                    >
                      Digital Marketing
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/services/custom-software-development"
                      className={({ isActive }) =>
                        `transition-colors duration-300 block ${
                          isActive ? "text-[#9C0000]" : "hover:text-[#9C0000]"
                        }`
                      }
                    >
                      Custom Software Development
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* RIGHT */}
              <div className="w-1/2 p-10 bg-[#ECECEC]">
                <div className="pb-6 border-b border-[#DADADA] mb-6">
                  <h4 className="font-heading text-[18px]">
                    E-Commerce Platform
                  </h4>
                  <p className="font-body text-[14px] text-gray-600 mt-2">
                    Increased conversions by 120%
                  </p>
                </div>

                <div className="pb-6 border-b border-[#DADADA] mb-8">
                  <h4 className="font-heading text-[18px]">
                    Healthcare Portal
                  </h4>
                  <p className="font-body text-[14px] text-gray-600 mt-2">
                    Streamlined patient management
                  </p>
                </div>

                <button
                  onClick={() => {
                    navigate("/case-study");
                  }}
                  className="w-full py-4 bg-[#9C0000] text-white 
font-body font-semibold text-[15px] 
tracking-[0.08em] 
rounded-md 
border-2 border-[#9C0000] 
hover:bg-white hover:text-[#9C0000] 
transition-all duration-300 ease-in-out"
                >
                  Our Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER LOGO */}
        <NavLink to="/" className="text-3xl tracking-widest font-heading">
          NEXA<span className="text-[#9C0000]">SOFT</span> SOLUTIONS
        </NavLink>

        {/* RIGHT */}
        <div className="flex space-x-8">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? "text-[#9C0000]" : "hover:text-[#9C0000]"}`
            }
          >
            THOUGHTS
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? "text-[#9C0000]" : "hover:text-[#9C0000]"}`
            }
          >
            GET THROUGH
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
