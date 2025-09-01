
import { Facebook, Youtube, Linkedin, Menu, X, Briefcase, BarChart3, Users, Building, Phone, Mail } from 'lucide-react';

// --- TopHeader Component (from previous context) ---
const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://youtube.com", label: "YouTube", icon: Youtube },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
];

const TopHeader = () => {
  return (
    <div className="w-full bg-slate-100 border-b border-slate-200 py-2 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-y-2 sm:gap-y-0">
        <p
          className="font-semibold uppercase text-center sm:text-left text-xs sm:text-sm flex-1"
          style={{
            letterSpacing: '1px',
            fontFamily: "'Arial Narrow', Arial, sans-serif",
            color: '#6F4E37',
          }}
        >
          Everest International Management Consultancy Training and Agency Pvt. Ltd.
        </p>
        <div className="flex items-center">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group px-3 py-1 border-r border-slate-300 last:border-r-0"
            >
              <Icon
                className="w-5 h-5 text-slate-600 transition-colors duration-300 ease-in-out group-hover:text-amber-600"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TopHeader;