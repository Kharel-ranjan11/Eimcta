import React from "react";
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
    { name: "Home", path: "#" },
    { name: "Services", path: "#" },
    { name: "About Us", path: "#" },
    { name: "Portfolio", path: "#" },
    { name: "Blog", path: "#" },
    { name: "Privacy Policy", path: "#" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "hover:text-blue-700",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      color: "hover:text-gray-700",
    },
  ];

  const svgPaths = [
    "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
    "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z",
    "M2 2H22V22H2V2Z",
    "M12 2L2 22H22L12 2Z",
    "M12 2L2 12L12 22L22 12L12 2Z",
  ];

  const colors = [
    "#A3CEF1", "#FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAEA",
    "#C7CEEA", "#FF9AA2", "#FFD6E8", "#B3E5FC", "#D6EAF8",
  ];

  const getRandomSvgProps = (index) => ({
    top: `${5 + Math.random() * 90}%`,
    left: `${5 + Math.random() * 90}%`,
    animationDuration: `${10 + Math.random() * 10}s`,
    animationDelay: `${Math.random() * 1}s`,
    path: svgPaths[index % svgPaths.length],
    size: 20 + Math.random() * 30,
    color: colors[index % colors.length],
    floatX: 3 + Math.random() * 8,
    floatY: 3 + Math.random() * 8,
  });

  const svgIconProps = Array.from({ length: 50 }).map((_, i) =>
    getRandomSvgProps(i)
  );

  return (
    <footer className="relative text-gray-200 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a]">
      <style>{`
        @keyframes float-glow {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translate(var(--float-x), var(--float-y)) rotate(180deg);
            opacity: 0.5;
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
            opacity: 0.3;
          }
        }
      `}</style>

      {/* Floating glowing SVGs */}
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
            filter: `drop-shadow(0 0 6px ${props.color})`,
            animation: `float-glow ${props.animationDuration} ease-in-out ${props.animationDelay} infinite`,
            pointerEvents: "none",
            userSelect: "none",
            transformOrigin: "center",
            "--float-x": `${props.floatX}px`,
            "--float-y": `${props.floatY}px`,
          }}
          viewBox="0 0 24 24"
        >
          <path d={props.path} />
        </svg>
      ))}

      {/* Footer content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-3xl font-bold mb-4 text-white">{companyInfo.name}</h3>
          <p className="text-sm leading-relaxed mb-4 text-gray-300">
            {companyInfo.description}
          </p>
          <div className="space-y-2 text-sm text-gray-300">
            <p className="flex items-center justify-center md:justify-start">
              <MapPin size={16} className="mr-2 text-blue-400" />
              {companyInfo.details[0]}
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <Mail size={16} className="mr-2 text-blue-400" />
              {companyInfo.details[1]}
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <Phone size={16} className="mr-2 text-blue-400" />
              {companyInfo.details[2]}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-base"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <form className="w-full max-w-sm space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-blue-800/50 border border-blue-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-blue-800/50 border border-blue-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-blue-800/50 border border-blue-700 text-gray-100 placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Social Icons */}
      <div className="relative z-10 flex justify-center items-center mt-12 pt-8 border-t border-blue-700">
        <div className="flex space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-300 ${social.color} transform hover:scale-125 transition-transform duration-300 group`}
              aria-label={social.name}
            >
              <social.icon size={28} />
              <span className="absolute bottom-full mb-2 hidden group-hover:block px-3 py-1 bg-gray-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;
