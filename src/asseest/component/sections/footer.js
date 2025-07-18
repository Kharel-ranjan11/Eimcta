import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

const Footer = () => {
  const companyInfo = {
    name: "Innovate Solutions Inc.",
    description:
      "Your partner in digital transformation. We build cutting-edge solutions that empower businesses to thrive in the modern era.",
    details: [
      "123 Tech Avenue, Silicon Valley, CA 90001",
      "info@innovatesolutions.com",
      "+1 (555) 123-4567",
    ],
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, path: "/facebook", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, path: "/twitter", color: "hover:text-sky-400" },
    { name: "Instagram", icon: Instagram, path: "/instagram", color: "hover:text-pink-500" },
    { name: "LinkedIn", icon: Linkedin, path: "/linkedin", color: "hover:text-blue-700" },
    { name: "GitHub", icon: Github, path: "/github", color: "hover:text-gray-400" },
  ];

  const svgPaths = [
    "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
    "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z",
    "M2 2H22V22H2V2Z",
    "M12 2L2 22H22L12 2Z",
    "M12 2L2 12L12 22L22 12L12 2Z",
  ];

  const colors = [
    "#38bdf8", "#7dd3fc", "#bae6fd", "#0ea5e9", "#0284c7",
    "#f0abfc", "#c084fc", "#a78bfa", "#818cf8", "#60a5fa",
  ];

  const getRandomSvgProps = (index) => ({
    top: `${Math.random() * 90}%`,
    left: `${Math.random() * 90}%`,
    animationDuration: `${10 + Math.random() * 10}s`,
    animationDelay: `${Math.random() * 2}s`,
    path: svgPaths[index % svgPaths.length],
    size: 16 + Math.random() * 40,
    color: colors[index % colors.length],
    floatX: 3 + Math.random() * 40,
    floatY: 3 + Math.random() * 40,
  });

  const svgIconProps = Array.from({ length: 40 }).map((_, i) => getRandomSvgProps(i));

  return (
    <footer className="relative text-gray-200 py-14 px-6 overflow-hidden bg-[#0f172a]">
      <style>{`
        @keyframes float-glow {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0.2; }
          50% { transform: translate(var(--float-x), var(--float-y)) rotate(180deg); opacity: 0.4; }
          100% { transform: translate(0, 0) rotate(360deg); opacity: 0.2; }
        }
      `}</style>

      {/* Floating SVG Icons */}
      {svgIconProps.map((props, index) => (
        <svg
          key={index}
          className="absolute"
          style={{
            top: props.top,
            left: props.left,
            width: `${props.size}px`,
            height: `${props.size}px`,
            fill: props.color,
            filter: `drop-shadow(0 0 2px ${props.color})`,
            animation: `float-glow ${props.animationDuration} ease-in-out ${props.animationDelay} infinite`,
            pointerEvents: "none",
            transformOrigin: "center",
            "--float-x": `${props.floatX}px`,
            "--float-y": `${props.floatY}px`,
          }}
          viewBox="0 0 24 24"
        >
          <path d={props.path} />
        </svg>
      ))}

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">{companyInfo.name}</h2>
          <p className="text-gray-400 mb-4">{companyInfo.description}</p>
          <div className="text-sm text-gray-300 space-y-2">
            <div className="flex items-center"><MapPin size={16} className="mr-2 text-blue-400" /> {companyInfo.details[0]}</div>
            <div className="flex items-center"><Mail size={16} className="mr-2 text-blue-400" /> {companyInfo.details[1]}</div>
            <div className="flex items-center"><Phone size={16} className="mr-2 text-blue-400" /> {companyInfo.details[2]}</div>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-base">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={link.path} className="hover:text-sky-400 transition-colors duration-300">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-gray-100 placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Social Media */}
      <div className="relative z-10 flex justify-center mt-12 pt-8 border-t border-blue-900">
        <div className="flex space-x-6">
          {socialLinks.map((social, idx) => (
            <Link
              key={idx}
              to={social.path}
              className={`relative group text-gray-300 ${social.color} hover:scale-110 transition-transform duration-300`}
            >
              <social.icon size={28} />
              <span className="absolute bottom-full mb-2 hidden group-hover:block px-3 py-1 bg-gray-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {social.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
