import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // ✅ Use NavLink
import logo from "../../img/eimcta.png";

import { menuitems } from "../utilities/JSON/Navbardata";
import {
  Info,
  Layers,
  FileText,
  PhoneCall,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  X,
  Menu,
} from "lucide-react";

const iconMap = {
  about: <Info size={20} className="mr-1" />,
  services: <Layers size={20} className="mr-1" />,
  blog: <FileText size={20} className="mr-1" />,
  contact: <PhoneCall size={20} className="mr-1" />,
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const getIcon = (title) => {
    const lower = title.toLowerCase();
    if (lower.includes("about")) return iconMap.about;
    if (lower.includes("service")) return iconMap.services;
    if (lower.includes("blog") || lower.includes("offer")) return iconMap.blog;
    if (lower.includes("contact")) return iconMap.contact;
    return null;
  };

  return (
    <nav className="bg-white shadow-md sticky p-2 z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0 transition-transform duration-300 hover:scale-125">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setOpenDropdownIndex(null);
            }}
            className="text-gray-800 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-[17px] font-semibold">
          {menuitems.map((item, idx) => (
            <div key={idx} className="relative group">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center capitalize transition duration-200 ${
                    isActive ? "text-blue-700 font-bold" : "text-gray-800 hover:text-blue-600"
                  }`
                }
              >
                {getIcon(item.title)}
                {item.title}
                {item.children && (
                  <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition" />
                )}
              </NavLink>

              {item.children && (
                <div className="pointer-events-none group-hover:pointer-events-auto absolute left-0 mt-1 min-w-max bg-white border rounded-md shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top z-40 capitalize">
                  {item.children.map((child, cIdx) => (
                    <NavLink
                      key={cIdx}
                      to={child.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-[15px] transition ${
                          isActive
                            ? "bg-blue-100 text-blue-700 font-medium"
                            : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                        }`
                      }
                    >
                      {child.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-md border-t border-gray-200 transition-all duration-300 text-[17px] font-semibold">
          {menuitems.map((item, idx) => (
            <div key={idx} className="mb-2">
              <div
                className="flex items-center justify-between py-2 cursor-pointer text-gray-800"
                onClick={() =>
                  item.children ? toggleDropdown(idx) : setMobileMenuOpen(false)
                }
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 ${
                      isActive ? "text-blue-700 font-bold" : ""
                    }`
                  }
                >
                  {getIcon(item.title)} {item.title}
                </NavLink>
                {item.children &&
                  (openDropdownIndex === idx ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  ))}
              </div>

              {item.children && openDropdownIndex === idx && (
                <div className="ml-4 border-l border-gray-300 pl-4 text-[15px] transition-all duration-300">
                  {item.children.map((child, cIdx) => (
                    <NavLink
                      key={cIdx}
                      to={child.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center capitalize p-1.5 rounded-sm transition duration-200 ${
                          isActive
                            ? "bg-blue-500 text-white font-medium"
                            : "text-gray-900 hover:text-white hover:bg-blue-500"
                        }`
                      }
                    >
                      {child.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
