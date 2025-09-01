import { Link } from 'react-router-dom';
import { FileText, Mail, Phone } from 'lucide-react';

import logo from '../../img/eimcta.png';

const ThemedContactItem = ({ icon, title, subtitle, href,
  to, isBlinking = false, hideIconOnMobile = false, className = '' }) => {
  const LinkComponent = to ? Link : 'a';
  const linkProps = to ? { to } : { href };

  return (
    <LinkComponent
      {...linkProps}
      className={`flex items-center rounded-lg cursor-pointer group p-2 ${className}`}
    >
      <div className={`text-stone-700 mr-3 transition-transform group-hover:scale-110
         ${hideIconOnMobile ? 'hidden md:block' : ''}`}>
        {icon}
      </div>
      <div className="font-sans text-left">
        <p
          className={`font-bold text-lg transition-colors 
            ${isBlinking ? 'animate-pulse text-red-600' : 'text-stone-800 group-hover:text-red-700'}`}
        >
          {title}
        </p>
        <p className="text-sm text-stone-500">
          {subtitle}
        </p>
      </div>
    </LinkComponent>
  );
};

const TopContactBar = () => {
  return (
    <header className="bg-white w-full border-b border-stone-200 hidden md:block">
      <style>
        {`
          @keyframes pulse {
            50% { opacity: .7; }
          }
          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}
      </style>

      <nav className="max-w-6xl mx-auto p-4 flex items-center justify-between ">
        {/* Logo with Link - Hidden on mobile */}
        <Link to="/" className="">

          <img src={logo} alt="Logo" className=" w-[10rem] object-contain" />
        </Link>

        {/* Desktop Contact Items - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6">
          <ThemedContactItem
            icon={<FileText size={24} strokeWidth={1.5} />}
            title="Get a Quote"
            subtitle="Click to fill form"
            to="/form"
            isBlinking={true}
          />

          <ThemedContactItem
            icon={<Mail size={24} strokeWidth={1.5} />}
            title="Email Us"
            subtitle="info@example.com"
            href="mailto:info@example.com"
            hideIconOnMobile={true}
          />

          <ThemedContactItem
            icon={<Phone size={24} strokeWidth={1.5} />}
            title="Contact Us"
            subtitle="+1234567890"
            href="tel:+1234567890"
            hideIconOnMobile={true}
          />
        </div>
      </nav>
    </header>
  );
};

export default TopContactBar;