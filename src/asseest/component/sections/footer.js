
import React, { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom"; 

const Footer = () => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const isVideoInView = useInView(videoRef, { margin: "-10%" });
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    // Auto-play video when it comes into view
    if (isVideoInView) {
      setPlayVideo(true);
    }
  }, [isVideoInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const slideFromLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const slideFromRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  const phoneNumbers = ["+977-01-5903211", "+977 9741 766 637", "+977 9862 731 591"];
  const emails = ["info@everestconsultrain.com", "eimcta.md@gmail.com", "iso.kathmandu@gmail.com"];
  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/eimctanepal", color: "hover:bg-blue-600" },
    { icon: Youtube, url: "https://www.youtube.com/watch?v=pqaihirDdBU", color: "hover:bg-red-600" },
    { icon: Instagram, url: "https://www.instagram.com/everest_consultrain/", color: "hover:bg-pink-600" },
    { icon: Linkedin, url: "https://www.linkedin.com/company/everest-international-management-consultancy-training-agency-pvt-ltd/?originalSubdomain=np", color: "hover:bg-blue-700" },
  ];

  const faqs = [
    { question: "What is EIMCTA?", link: "/Blog-Offers/FAQ" },
    { question: "What does EIMCTA do?", link: "/Blog-Offers/FAQ" },
    { question: "What is ISO certification?", link: "/Blog-Offers/FAQ" },
  ];

  // YouTube video ID
  const ytVideoId = "pqaihirDdBU";
  const ytThumbnail = `https://img.youtube.com/vi/${ytVideoId}/hqdefault.jpg`;

  return (
    <footer ref={ref} className="relative text-amber-900 bg-gradient-to-b from-amber-100 to-amber-100 font-['Arial_Narrow'] font-bold">
      <div className="absolute top-0 left-0 w-full h-4 bg-amber-300 opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-amber-600 opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16 space-y-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Logo + Contact */}
          <motion.div className="space-y-6" variants={slideFromLeft}>
            <div className="flex flex-col items-center md:items-start">
              <motion.div className="text-3xl font-bold mb-2 tracking-widest" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
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
              {phoneNumbers.map((number, idx) => (
                <motion.li key={idx} className="group cursor-pointer" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <div className="flex items-center justify-center md:justify-start">
                    <ChevronRight className="text-amber-700 mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                    <a href={`tel:${number}`} className="text-amber-900 group-hover:text-amber-800 transition-colors">{number}</a>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center justify-center md:justify-start mt-6">
              <Mail className="text-amber-800 mr-2" size={20} />
              <h3 className="text-lg font-semibold text-amber-900">Email Addresses</h3>
            </div>
            <ul className="space-y-2">
              {emails.map((email, idx) => (
                <motion.li key={idx} className="group cursor-pointer" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <div className="flex items-center justify-center md:justify-start">
                    <ChevronRight className="text-amber-700 mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                    <a href={`mailto:${email}`} className="text-amber-900 group-hover:text-amber-800 transition-colors text-sm">{email}</a>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links / FAQ */}
          <motion.div className="space-y-6" variants={slideFromRight}>
            <h3 className="text-lg font-semibold text-amber-900 text-center md:text-left">FAQs</h3>
            <ul className="space-y-3">
              {faqs.map((faq, idx) => (
                <motion.li key={idx} className="group border-l-4 border-amber-500 pl-4 hover:bg-amber-100 transition cursor-pointer rounded-md" whileHover={{ x: 5 }}>
                  <Link to={faq.link} className="flex items-center justify-between py-2">
                    <span className="text-amber-900 font-semibold">{faq.question}</span>
                    <ChevronRight className="text-amber-700 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social + YouTube */}
          <motion.div className="space-y-6" variants={slideFromRight}>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <Youtube className="text-amber-800 mr-2" size={20} />
                <h3 className="text-lg font-semibold text-amber-900">Our Videos</h3>
              </div>

              <motion.div
                ref={videoRef}
                className="relative h-40 overflow-hidden rounded-lg border-2 border-amber-700 shadow-md cursor-pointer flex items-center justify-center bg-amber-200"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {playVideo ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${ytVideoId}?autoplay=1&rel=0`}
                    title="YouTube video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img src={ytThumbnail} alt="YouTube Video Thumbnail" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 bg-opacity-80">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white ml-1">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-amber-900 text-center md:text-left">Follow Us</h3>
              <motion.div className="flex justify-center md:justify-start space-x-4" variants={containerVariants}>
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-amber-300 text-amber-900 ${social.color} transition shadow-md`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;