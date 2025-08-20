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
  BookOpen,
  ClipboardCheck,
  Award,
  GraduationCap,
  FileSearch,
  Leaf,
  Tag,
  Megaphone,
  HelpCircle,
  Share2,
  MailCheck,
} from "lucide-react";

// Default icon mapping (fallback when no icon is provided in menuitems)
const defaultIconMap = {
  about: <Info size={20} className="mr-2" />,
  services: <Layers size={20} className="mr-2" />,
  blog: <FileText size={20} className="mr-2" />,
  contact: <PhoneCall size={20} className="mr-2" />,
  // Service submenu icons
  "iso consultancy": <BookOpen size={18} className="mr-2" />,
  "iso audit": <ClipboardCheck size={18} className="mr-2" />,
  "iso certification": <Award size={18} className="mr-2" />,
  "training": <GraduationCap size={18} className="mr-2" />,
  "tender": <FileSearch size={18} className="mr-2" />,
  "environmental": <Leaf size={18} className="mr-2" />,
  "supply of sign": <Tag size={18} className="mr-2" />,
  // Blog submenu icons
  "offers": <Megaphone size={18} className="mr-2" />,
  "faq": <HelpCircle size={18} className="mr-2" />,
  "social": <Share2 size={18} className="mr-2" />,
  "quote": <MailCheck size={18} className="mr-2" />,
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

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

  const toggleNestedDropdown = (path) => {
    setOpenDropdownIndex(openDropdownIndex === path ? null : path);
  };

  const toggleItemExpansion = (path) => {
    setExpandedItems(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdownIndex(null);
    setExpandedItems({});
  };

  const getIcon = (item, level = 0) => {
    // First try to use the icon provided in the menu item data
    if (item.icon && React.isValidElement(item.icon)) {
      return React.cloneElement(item.icon, {
        size: level > 0 ? 18 : 20,
        className: `mr-2 ${item.icon.props?.className || ''}`
      });
    }
    
    // Fall back to default icon mapping based on title
    const lower = item.title.toLowerCase();
    if (lower.includes("about")) return defaultIconMap.about;
    if (lower.includes("service")) return defaultIconMap.services;
    if (lower.includes("blog") || lower.includes("offer")) return defaultIconMap.blog;
    if (lower.includes("contact")) return defaultIconMap.contact;
    if (lower.includes("consultancy")) return defaultIconMap["iso consultancy"];
    if (lower.includes("audit")) return defaultIconMap["iso audit"];
    if (lower.includes("certification")) return defaultIconMap["iso certification"];
    if (lower.includes("training")) return defaultIconMap["training"];
    if (lower.includes("tender") || lower.includes("bid")) return defaultIconMap["tender"];
    if (lower.includes("environmental")) return defaultIconMap["environmental"];
    if (lower.includes("supply")) return defaultIconMap["supply of sign"];
    if (lower.includes("offers") || lower.includes("contents")) return defaultIconMap["offers"];
    if (lower.includes("faq")) return defaultIconMap["faq"];
    if (lower.includes("fb") || lower.includes("social")) return defaultIconMap["social"];
    if (lower.includes("quote") || lower.includes("eligibility")) return defaultIconMap["quote"];
    
    // Ultimate fallback icons
    return level === 0 ? <Info size={20} className="mr-2" /> : <FileText size={18} className="mr-2" />;
  };

  // Recursive function to render dropdown items
  const renderDropdownItems = (items, level = 0, parentIndex = '') => {
    return items.map((item, idx) => {
      const uniqueKey = `${parentIndex}-${idx}`;
      const hasChildren = item.children && item.children.length > 0;
      
      return (
        <div key={uniqueKey} className="relative group">
          <div className="flex items-center justify-between">
            <NavLink
              to={item.path}
              onClick={(e) => {
                if (hasChildren) {
                  e.preventDefault();
                  toggleItemExpansion(uniqueKey);
                } else {
                  closeMobileMenu();
                }
              }}
              className={({ isActive }) =>
                `flex items-center flex-grow px-4 py-2 text-sm ${
                  isActive && !hasChildren
                    ? "bg-amber-100 text-amber-700"
                    : "text-gray-700 hover:bg-amber-50 hover:text-amber-700"
                }`
              }
            >
              {getIcon(item, level)}
              <span>{item.title}</span>
            </NavLink>
            {hasChildren && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItemExpansion(uniqueKey);
                }}
                className="p-1 rounded-md hover:bg-amber-100"
              >
                {expandedItems[uniqueKey] ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
            )}
          </div>
          
          {hasChildren && expandedItems[uniqueKey] && (
            <div className={`ml-4 pl-2 border-l-2 border-amber-200 ${
              level > 0 ? "mt-1" : "mt-0"
            }`}>
              {renderDropdownItems(item.children, level + 1, uniqueKey)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 font-['Arial_Narrow'] font-bold ${
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
                    `flex items-center px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                      isActive
                        ? "text-amber-700 bg-amber-50"
                        : "text-gray-700 hover:text-amber-700 hover:bg-amber-50"
                    }`
                  }
                >
                  {getIcon(item)}
                  {item.title}
                  {item.children && (
                    <ChevronDown
                      size={16}
                      className="ml-1 group-hover:rotate-180 transition-transform duration-200"
                    />
                  )}
                </NavLink>

                {item.children && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top z-50">
                    <div className="py-1">
                      {renderDropdownItems(item.children, 1, `d-${idx}`)}
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
                setExpandedItems({});
              }}
              className="inline-flex items-center 
              justify-center p-2 rounded-md text-gray-700
               hover:text-amber-600 hover:bg-amber-50 
               focus:outline-none transition duration-150"
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
        className={`fixed inset-y-0 right-0 w-64 bg-white
           shadow-xl z-50 transform transition-transform duration-300 
           ease-in-out ${
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
            className="p-1 rounded-md text-gray-700
             hover:text-amber-600 hover:bg-amber-50 focus:outline-none"
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-2 pt-2 pb-3 space-y-1 overflow-y-auto h-[calc(100%-60px)]">
          {menuitems.map((item, idx) => (
            <div key={idx} className="mb-1">
              <div
                className={`flex items-center justify-between px-3 py-2 rounded-md text-base ${
                  openDropdownIndex === `l1-${idx}`
                    ? "bg-amber-50 text-amber-700"
                    : "text-gray-700 hover:bg-amber-50 hover:text-amber-700"
                }`}
                onClick={() => {
                  if (item.children) {
                    toggleNestedDropdown(
                      openDropdownIndex === `l1-${idx}` ? null : `l1-${idx}`
                    );
                  }
                }}
              >
                <NavLink
                  to={item.path}
                  onClick={!item.children ? closeMobileMenu : (e) => {
                    if (item.children) e.preventDefault();
                  }}
                  className="flex items-center flex-grow"
                >
                  {getIcon(item)}
                  <span className="ml-2">{item.title}</span>
                </NavLink>
                {item.children &&
                  (openDropdownIndex === `l1-${idx}` ? (
                    <ChevronUp size={20} className="ml-2" />
                  ) : (
                    <ChevronRight size={20} className="ml-2" />
                  ))}
              </div>

              {item.children && openDropdownIndex === `l1-${idx}` && (
                <div className="mt-1 ml-8 pl-2 space-y-1 border-l-2
                 border-amber-200">
                  {renderDropdownItems(item.children, 1, `m-${idx}`)}
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