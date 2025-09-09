import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  ChevronRight,
  HelpCircle,
  Link as LinkIcon,
  FileText,
  MessageSquare,
  Youtube,
  MapPin,
  Clock,
} from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer ref={ref} className="relative text-amber-900 bg-gradient-to-b from-amber-100 to-amber-100 font-['Arial_Narrow'] font-bold">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-4 bg-amber-300 opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-amber-600 opacity-30"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Logo + Contact */}
          <motion.div className="space-y-6" variants={slideFromLeft}>
            <div className="flex flex-col items-center md:items-start">
              <motion.div 
                className="text-3xl font-bold mb-2 tracking-widest"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-amber-800 drop-shadow-md">EIMCTA</span>
              </motion.div>
              <p className="text-amber-800 text-sm max-w-xs">
                Everest International Management Consultancy Training & Agency Pvt. Ltd.
              </p>
            </div>

            <motion.div className="space-y-3" variants={itemVariants}>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="text-amber-800 mr-3" size={18} />
                <div>
                  <p className="text-amber-800 text-sm">Location</p>
                  <p className="text-amber-900">Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="text-amber-800 mr-3" size={18} />
                <div>
                  <p className="text-amber-800 text-sm">Working Hours</p>
                  <p className="text-amber-900">Sun-Fri: 9AM - 5PM</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <div className="flex items-center justify-center md:justify-start">
              <Phone className="text-amber-800 mr-2" size={20} />
              <h3 className="text-lg font-semibold text-amber-900">Phone Numbers</h3>
            </div>
            <ul className="space-y-2">
              {[
                "+977 1 5903211",
                "+977 9741 766 637", 
                "+977 9862 731 591"
              ].map((number, idx) => (
                <motion.li 
                  key={idx} 
                  className="group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-center justify-center md:justify-start">
                    <ChevronRight className="text-amber-700 mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                    <a href={`tel:${number}`} className="text-amber-900 group-hover:text-amber-800 transition-colors">
                      {number}
                    </a>
                  </div>
                </motion.li>
              ))}
            </ul>
            
            <div className="flex items-center justify-center md:justify-start mt-6">
              <Mail className="text-amber-800 mr-2" size={20} />
              <h3 className="text-lg font-semibold text-amber-900">Email Addresses</h3>
            </div>
            <ul className="space-y-2">
              {[
                "info@everestconsultrain.com",
                "eimcta.md@gmail.com",
                "iso.kathmandu@gmail.com"
              ].map((email, idx) => (
                <motion.li 
                  key={idx} 
                  className="group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-center justify-center md:justify-start">
                    <ChevronRight className="text-amber-700 mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                    <a href={`mailto:${email}`} className="text-amber-900 group-hover:text-amber-800 transition-colors text-sm">
                      {email}
                    </a>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <div className="flex items-center justify-center md:justify-start">
              <LinkIcon className="text-amber-800 mr-2" size={20} />
              <h3 className="text-lg font-semibold text-amber-900">Quick Links</h3>
            </div>
            <ul className="space-y-2">
              {[
                "ISO Related Links",
                "Health & Safety Links",
                "Environmental Links",
                "OHS Calculator",
                "CO2 Calculator",
              ].map((link, idx) => (
                <motion.li 
                  key={idx} 
                  className="group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-center justify-center md:justify-start">
                    <ChevronRight className="text-amber-700 mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                    <span className="text-amber-900 group-hover:text-amber-800 transition-colors">{link}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
            
            <div className="flex items-center justify-center md:justify-start mt-6">
              <HelpCircle className="text-amber-800 mr-2" size={20} />
              <h3 className="text-lg font-semibold text-amber-900">FAQ's</h3>
            </div>
            <ul className="space-y-2">
              {[
                "Which ISO Standard is suitable?",
                "Why get ISO Certification?",
                "Benefits of ISO Certification",
              ].map((question, idx) => (
                <motion.li 
                  key={idx} 
                  className="group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-center justify-center md:justify-start">
                    <ChevronRight className="text-amber-700 mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                    <span className="text-amber-900 group-hover:text-amber-800 transition-colors">{question}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* YouTube Video + Social */}
          <motion.div className="space-y-6" variants={slideFromRight}>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <Youtube className="text-amber-800 mr-2" size={20} />
                <h3 className="text-lg font-semibold text-amber-900">Our Videos</h3>
              </div>
              <motion.div 
                className="relative h-40 overflow-hidden rounded-lg border-2 border-amber-700 shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed?listType=playlist&list=PLYOURPLAYLISTID&autoplay=0&mute=1&controls=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </motion.div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-amber-900 text-center md:text-left">Follow Us</h3>
              <motion.div 
                className="flex justify-center md:justify-start space-x-4"
                variants={containerVariants}
              >
                {[
                  { icon: Facebook, color: "hover:bg-blue-600" },
                  { icon: Twitter, color: "hover:bg-sky-500" },
                  { icon: Instagram, color: "hover:bg-pink-600" },
                  { icon: Linkedin, color: "hover:bg-blue-700" },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    className={`p-3 rounded-full bg-amber-300 text-amber-900 ${social.color} transition shadow-md`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
            
            {/* Newsletter Subscription */}
           
          </motion.div>
        </motion.div>

      
      </div>
    </footer>
  );
};

export default Footer;