import { Link } from 'react-router-dom';
import { FileText, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

import logo from '../../img/eimcta.png';

const ThemedContactItem = ({ icon, title, subtitle, href, to, isBlinking = false, hideIconOnMobile = false, className = '' }) => {
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
        <p className="text-md text-stone-500">
          {subtitle}
        </p>
      </div>
    </LinkComponent>
  );
};

const AnimatedContactItem = ({ icon, title, subtitle, href, to, isBlinking = false, hideIconOnMobile = false, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <ThemedContactItem
        icon={icon}
        title={title}
        subtitle={subtitle}
        href={href}
        to={to}
        isBlinking={isBlinking}
        hideIconOnMobile={hideIconOnMobile}
      />
    </motion.div>
  );
};

const TopContactBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      // Small delay before starting animation
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <motion.header
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white w-full border-b border-stone-200 hidden md:block"
    >
      <style>
        {`
          @keyframes pulse {
            50% { opacity: .2; }
          }
          .animate-pulse {
            animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}
      </style>

      <nav className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        {/* Logo with Link - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/">
            <img src={logo} alt="Logo" className="w-[10rem] object-contain" />
          </Link>
        </motion.div>

        {/* Desktop Contact Items - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6">
          <AnimatedContactItem
            icon={<FileText size={44} strokeWidth={1.5} />}
            title="Get a Quote"
            subtitle="Click to fill form"
            to="/form"
            isBlinking={true}
            index={0}
          />

          <AnimatedContactItem
            icon={<Mail size={44} strokeWidth={1.5} />}
            title="Email Us"
            subtitle="info@everestconsultrain.com"
            href="mailto:info@everestconsultrain.com"
            hideIconOnMobile={true}
            index={1}
          />

          <AnimatedContactItem
            icon={<Phone size={44} strokeWidth={1.5} />}
            title="Contact Us"
            subtitle="+977-01-5903211"
            href="+977-01-5903211"
            hideIconOnMobile={true}
            index={2}
          />
        </div>
      </nav>
    </motion.header>
  );
};

export default TopContactBar;