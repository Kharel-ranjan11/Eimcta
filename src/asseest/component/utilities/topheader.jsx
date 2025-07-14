import { FileText, Phone, Mail, Facebook, Youtube, Linkedin } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: Facebook, color: "#1877F2" }, // Facebook Blue
  { href: "https://youtube.com", label: "YouTube", icon: Youtube, color: "#FF0000" },   // YouTube Red
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin, color: "#0A66C2" }, // LinkedIn Blue
];

const TopHeader = () => {
  const [hovered, setHovered] = useState(null);

  return (
    // Main container for the top header, with a dark indigo background and responsive padding
    <div className="w-full bg-[#1a237e] text-white py-2 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        {/* Company Name - Responsive text size and centered on small screens, with a vibrant lime color */}
        <p
          className="font-bold uppercase text-center text-xs sm:text-sm md:text-base lg:text-lg flex-1 text-lime-200" // Company name text color remains vibrant lime
        >
          Everest International Management Consultancy Training and Agency Pvt. Ltd.
        </p>

        {/* Social Icons - hidden on mobile, visible on sm and up */}
        <div className="hidden sm:flex items-center gap-3 sm:gap-5">
          {socialLinks.map(({ href, label, icon: Icon, color }, i) => ( // Destructure 'color' from socialLinks
            <div
              key={label}
              className="relative flex flex-col items-center cursor-pointer rounded-full transition-all duration-300 p-2 bg-transparent"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                // Box shadow only appears on hover, matching the brand color
                boxShadow:
                  hovered === i
                    ? `0 0 18px 6px ${color}B3` // Adding B3 for 70% opacity to the brand color
                    : "none", // No shadow when not hovered
                // Transform for lift and slight scale only on hover
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
                style={{ color: hovered === i ? color : "white" }} // Default white, brand color on hover
                aria-label={label}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>

              {/* Tooltip - appears on hover, positioned below the icon */}
              {hovered === i && (
                <div
                  className="absolute -bottom-6 text-white px-2 py-1 rounded text-xs whitespace-nowrap select-none pointer-events-none z-50 shadow-lg opacity-0 animate-fade-in-up"
                  style={{ backgroundColor: color }} // Tooltip background matches brand color
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

/*
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.2s ease-out forwards;
}
*/
