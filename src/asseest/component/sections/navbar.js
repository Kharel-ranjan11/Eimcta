import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import logo from "../../img/logo.jpg";

const navItems = [
  {
    title: "Home",
    path: "/home",
    children: [
      { title: "Overview", path: "/home/overview" },
      { title: "Stats", path: "/home/stats" },
      { title: "Reports", path: "/home/reports" },
      { title: "Profile", path: "/home/profile" },
      { title: "Settings", path: "/home/settings" },
      { title: "Activity", path: "/home/activity" },
    ],
  },
  {
    title: "Services",
    path: "/services",
    children: [
      { title: "Consulting", path: "/services/consulting" },
      { title: "Strategy", path: "/services/strategy" },
      { title: "Audit", path: "/services/audit" },
      { title: "Support", path: "/services/support" },
      { title: "Technical", path: "/services/technical" },
      { title: "Customer", path: "/services/customer" },
    ],
  },
  {
    title: "About",
    path: "/about",
    children: [
      { title: "Company", path: "/about/company" },
      { title: "History", path: "/about/history" },
      { title: "Team", path: "/about/team" },
      { title: "Careers", path: "/about/careers" },
      { title: "Openings", path: "/about/openings" },
      { title: "Internships", path: "/about/internships" },
    ],
  },
];

const Dropdown = ({ items, closeAll }) => (
  <ul className="absolute bg-white border border-blue-200 shadow-lg rounded-md outline-none w-56 py-1 z-50">
    {items.map((item, i) => (
      <li key={i} className="border-t first:border-t-0 last:border-b hover:bg-blue-50 transition-colors duration-200">
        <Link
          to={item.path}
          onClick={closeAll}
          className="block px-4 py-2 text-gray-700 hover:text-blue-700"
        >
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const navRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const closeAll = () => {
    setActiveIndex(null);
    setMobileOpen(false);
    setSearchFocus(false);
  };

  useEffect(() => {
    document.body.style.overflowX = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeAll();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-24 sm:h-10 sm:w-28 md:h-12 md:w-36 lg:h-14 lg:w-40 object-contain"
            />
          </Link>
        </div>

        {/* Desktop nav (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-6 flex-1 justify-end relative">
          <ul className="flex space-x-6 items-center">
            {navItems.map((item, index) => {
              const isOpen = activeIndex === index;
              const isActive = location.pathname.startsWith(item.path);
              return (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <button
                    onClick={() => navigate(item.path)}
                    className={`font-inter flex items-center space-x-1 pb-1 text-gray-700 hover:text-blue-600 transition duration-300 transform hover:scale-105 ${
    isActive
      ? "border-b-2 border-blue-600 font-semibold"
      : "border-b-2 border-transparent"
  }`}
                  >
                     <span className="">{item.title}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {isOpen && item.children && <Dropdown items={item.children} closeAll={closeAll} />}
                </li>
              );
            })}
          </ul>

          {/* Search box (desktop only) */}
          <div className="relative ml-4 transition-all duration-300 ease-in-out">
            <input
              type="search"
              placeholder="Search..."
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
              className={`transition-all duration-300 ease-in-out border px-3 py-1.5 rounded-md focus:outline-none ${
                searchFocus
                  ? "w-60 border-blue-500 ring-2 ring-blue-300 bg-blue-50 shadow"
                  : "w-32 border-gray-300 bg-white"
              }`}
            />
            <Search className="absolute right-2 top-2.5 text-blue-500 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile search input */}
      {mobileOpen && (
        <div className="md:hidden px-6 bg-white border-t border-gray-200">
          <div className="py-3">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-3 text-blue-500 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu with scroll */}
      {mobileOpen && (
        <div className="md:hidden px-6 pt-1 pb-6 bg-white border-t border-gray-200 shadow-md max-h-[70vh] overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <MobileFolder key={index} item={item} closeAll={closeAll} />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

const MobileFolder = ({ item, closeAll }) => {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center font-medium text-gray-700 hover:text-blue-600 py-2 focus:outline-none"
      >
        <span>{item.title}</span>
        <ChevronDown
          className={`w-5 h-5 transform transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {open && (
        <ul className="pl-4 border-l border-gray-300 mt-1 space-y-1">
          {item.children.map((child, i) => (
            <li key={i}>
              <Link
                to={child.path}
                onClick={closeAll}
                className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {child.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Navbar;
