import { FileText, Phone, Mail, Facebook, Youtube, Linkedin } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: Facebook, color: "#f97316" }, // Orange
  { href: "https://youtube.com", label: "YouTube", icon: Youtube, color: "#f59e0b" },   // Amber
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin, color: "#eab308" }, // Yellow
];

const TopHeader = () => {
  const [hovered, setHovered] = useState(null);

  return (
    // Main container with Arial Narrow font family
    <div className="w-full bg-orange-700 text-white py-2 px-3 sm:px-6" style={{ fontFamily: "'Arial Narrow', Arial, sans-serif" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        {/* Company Name with Arial Narrow font */}
        <p
          className="font-bold  uppercase text-center text-xs sm:text-sm md:text-base lg:text-lg flex-1 text-lime-200"
          style={{letterSpacing:'5px', fontFamily: "'Arial Narrow', Arial, sans-serif" }}
        >
          Everest International Management Consultancy Training and Agency Pvt. Ltd.
        </p>

        {/* Social Icons with updated hover colors */}
        <div className="hidden sm:flex items-center gap-3 sm:gap-5">
          {socialLinks.map(({ href, label, icon: Icon, color }, i) => (
            <div
              key={label}
              className="relative flex flex-col items-center cursor-pointer rounded-full transition-all duration-300 p-2 bg-transparent"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                boxShadow:
                  hovered === i
                    ? `0 0 18px 6px ${color}B3`
                    : "none",
                transform: hovered === i ? "translateY(-4px) scale(1.05)" : "translateY(0) scale(1)",
              }}
            >
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`transition-transform duration-300 ease-in-out ${
                  hovered === i ? "scale-125" : "scale-100"
                }`}
                style={{ 
                  color: hovered === i ? color : "white",
                  // Add text shadow for better visibility on hover
                  textShadow: hovered === i ? `0 0 8px ${color}` : "none"
                }}
                aria-label={label}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>

              {/* Tooltip with matching color */}
              {hovered === i && (
                <div
                  className="absolute -bottom-6 text-white px-2 py-1 rounded text-xs whitespace-nowrap select-none pointer-events-none z-50 shadow-lg opacity-0 animate-fade-in-up"
                  style={{ 
                    backgroundColor: color,
                    fontFamily: "'Arial Narrow', Arial, sans-serif"
                  }}
                >
                  {label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;