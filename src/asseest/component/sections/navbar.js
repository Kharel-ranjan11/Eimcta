import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/eimcta.png";
import { menuitems } from "../utilities/Array/data.js";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdownIndex(null);
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
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-0" : "bg-white shadow-md py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <NavLink to="/" onClick={closeMobileMenu}>
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-auto object-contain"
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuitems.map((item, idx) => (
              <div key={idx} className="relative group">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`
                  }
                >
                  {getIcon(item.title)}
                  {item.title}
                  {item.children && (
                    <ChevronDown
                      size={16}
                      className="ml-1 group-hover:rotate-180 transition-transform duration-200"
                    />
                  )}
                </NavLink>

                {item.children && (
                  <div className="absolute left-1/2 transform 
                  -translate-x-1/2 mt-1
                   w-66 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top z-50">
                    <div className="py-1">
                      {item.children.map((child, cIdx) => (
                        <NavLink
                          key={cIdx}
                          to={child.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm text-wrap capitalize ${
                              isActive
                                ? "bg-blue-100 text-blue-700"
                                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            }`
                          }
                        >
                          {child.title}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setOpenDropdownIndex(null);
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition duration-150"
              aria-label="Main menu"
            >
              {mobileMenuOpen ? (
                <X size={24} className="h-6 w-6" />
              ) : (
                <Menu size={24} className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b border-gray-200">
          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
          </NavLink>
          <button
            onClick={closeMobileMenu}
            className="p-1 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-2 pt-2 pb-3 space-y-1 overflow-y-auto h-[calc(100%-60px)]">
          {menuitems.map((item, idx) => (
            <div key={idx} className="mb-1">
              <div
                className={`flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
                  openDropdownIndex === idx
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
                onClick={() => item.children && toggleDropdown(idx)}
              >
                <NavLink
                  to={item.path}
                  onClick={!item.children ? closeMobileMenu : undefined}
                  className="flex items-center flex-grow"
                >
                  {getIcon(item.title)}
                  <span className="ml-2">{item.title}</span>
                </NavLink>
                {item.children &&
                  (openDropdownIndex === idx ? (
                    <ChevronUp size={20} className="ml-2" />
                  ) : (
                    <ChevronRight size={20} className="ml-2" />
                  ))}
              </div>

              {item.children && openDropdownIndex === idx && (
                <div className="mt-1 ml-8 pl-2 space-y-1 border-l-2 border-blue-100">
                  {item.children.map((child, cIdx) => (
                    <NavLink
                      key={cIdx}
                      to={child.path}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-sm font-medium ${
                          isActive
                            ? "bg-blue-100 text-blue-700"
                            : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
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

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;