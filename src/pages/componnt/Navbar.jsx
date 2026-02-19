import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle =
    "text-sm tracking-wider font-medium transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F1F3F5] border-b border-[rgba(0,0,0,0.05)] px-16 py-6 flex items-center justify-between font-body">
      
      {/* LEFT */}
      <div className="flex space-x-8">
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? "text-red-600" : "hover:text-gray-500"}`
          }
        >
          AGENCY
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? "text-red-600" : "hover:text-gray-500"}`
          }
        >
          SERVICES
        </NavLink>
      </div>

      {/* CENTER LOGO */}
      <NavLink
        to="/"
        className="text-3xl tracking-widest font-heading"
      >
        NEXA<span className="text-red-600">SOFT</span> SOLUTIONS
      </NavLink>

      {/* RIGHT */}
      <div className="flex space-x-8">
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? "text-red-600" : "hover:text-gray-500"}`
          }
        >
          THOUGHTS
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? "text-red-600" : "hover:text-gray-500"}`
          }
        >
          GET THROUGH
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
