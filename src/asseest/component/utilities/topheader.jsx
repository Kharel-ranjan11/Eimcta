import {  Phone, Mail, Facebook, Youtube, Linkedin } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: Facebook, color: "#6F4E37" }, // Coffee
  { href: "https://youtube.com", label: "YouTube", icon: Youtube, color: "#ADD8E6" },   // Light Blue
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin, color: "#FAFAD2" }, // Light Yellow
];

const TopHeader = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div 
      className="w-full bg-[#6F4E37] text-white py-2 px-3 sm:px-6" 
      style={{ fontFamily: "'Arial Narrow', Arial, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        {/* Company Name - Responsive text sizing */}
        <p
          className="font-bold 
          uppercase text-center md:text-left lg:text-left  text-xs 
           sm:text-sm md:text-base lg:text-lg flex-1"
          style={{
            letterSpacing: '3px',
            fontFamily: "'Arial Narrow', Arial, sans-serif",
            color: '#FAFAD2', // Light Yellow for text
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            wordBreak: 'break-word'
          }}
        >
          Everest International Management Consultancy Training and Agency Pvt. Ltd.
        </p>

        {/* Contact Info - Visible on mobile */}
      
        {/* Social Icons - Updated with new color theme */}
        <div className="flex items-center gap-3 sm:gap-5">
          {socialLinks.map(({ href, label, icon: Icon, color }, i) => (
            <div
              key={label}
              className="relative flex flex-col items-center cursor-pointer rounded-full transition-all duration-300 p-1 sm:p-2 bg-transparent"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                boxShadow: hovered === i ? `0 0 12px 4px ${color}B3` : "none",
                transform: hovered === i ? "translateY(-2px) scale(1.05)" : "translateY(0) scale(1)",
              }}
            >
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`transition-transform duration-300 ease-in-out ${
                  hovered === i ? "scale-110" : "scale-100"
                }`}
                style={{ 
                  color: hovered === i ? color : "#FAFAD2", // Light Yellow default
                  textShadow: hovered === i ? `0 0 6px ${color}` : "none"
                }}
                aria-label={label}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>

              {/* Tooltip */}
              {hovered === i && (
                <div
                  className="absolute -bottom-7 text-white px-2 py-1 rounded text-xs whitespace-nowrap select-none pointer-events-none z-50 shadow-lg opacity-0 animate-fade-in-up"
                  style={{ 
                    backgroundColor: color,
                    fontFamily: "'Arial Narrow', Arial, sans-serif",
                    fontWeight: 'bold'
                  }}
                >
                  {label}
                </div>
              )}
            </div>
          ))}

          {/* Contact Info - Visible on desktop */}
         
        </div>
      </div>
    </div>
  );
};

export default TopHeader;