import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Parallax } from "react-parallax";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  FaLeaf,
  FaCalculator,
  FaGavel,
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaViber,
  FaFacebook,
  FaUser,
  FaPaperPlane,
  FaCommentAlt,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("form"); // 'form' or 'chat'
  const formRef = useRef(null);

  // Track window width for responsive adjustments
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  // Custom cursor effect - only on desktop
  useEffect(() => {
    if (windowWidth < 1024) return; // Disable on mobile

    const cursor = document.querySelector(".custom-cursor");
    const cursorFollower = document.querySelector(".cursor-follower");
    const links = document.querySelectorAll("a, button, .hover-effect, input, textarea");

    const moveCursor = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      cursorFollower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const handleLinkHover = () => {
      cursor.classList.add("cursor-hover");
      cursorFollower.classList.add("cursor-follower-hover");
    };

    const handleLinkLeave = () => {
      cursor.classList.remove("cursor-hover");
      cursorFollower.classList.remove("cursor-follower-hover");
    };

    window.addEventListener("mousemove", moveCursor);

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, [windowWidth]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);

    // Reset form after animation
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const resources = [
    {
      title: "CO2 Emission Calculator",
      icon: FaLeaf,
      description: "Calculate your carbon footprint",
      to: "/co2-calculator",
      color: "from-green-100 to-green-50",
      textColor: "text-green-600"
    },
    {
      title: "OHS Injury Cost Calculator",
      icon: FaCalculator,
      description: "Assess workplace injury costs",
      to: "/ohs-injury-cost-calculator",
      color: "from-blue-100 to-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "Labour Law Nepal",
      icon: FaGavel,
      description: "Nepal labour law resources",
      to: "/labour-law-nepal",
      color: "from-purple-100 to-purple-50",
      textColor: "text-purple-600"
    },
    {
      title: "Download Brochures",
      icon: FaDownload,
      description: "PPE and safety brochures",
      to: "/download-brochures",
      color: "from-orange-100 to-orange-50",
      textColor: "text-orange-600"
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const leftSlideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const rightSlideIn = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.98 },
    submitting: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
    submitted: {
      scale: 1,
      backgroundColor: "#10B981",
    },
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Custom cursor elements - only on desktop */}
      {windowWidth >= 1024 && (
        <>
          <div className="custom-cursor fixed w-4 h-4 bg-blue-600
           rounded-full pointer-events-none z-50 mix-blend-difference 
           transform -translate-x-1/2 -translate-y-1/2 transition-transform
            duration-100 ease-out"></div>
          <div className="cursor-follower fixed w-8 h-8 border-2
           border-blue-400 rounded-full pointer-events-none z-40 
           transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"></div>
        </>
      )}

      {/* Particle background */}
      <div className="absolute inset-0 -z-10">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
              },
              modes: {
                bubble: {
                  distance: 100,
                  duration: 2,
                  opacity: 0.8,
                  size: 6,
                  color: {
                    value: "#3b82f6",
                  },
                },
              },
            },
            particles: {
              color: {
                value: "#3b82f6",
              },
              links: {
                color: "#3b82f6",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 40,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-12 md:py-20 relative"
      >
        {/* Hero Section with Parallax */}
        <Parallax
          bgImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          bgImageAlt="Contact us background"
          strength={300}
          className="mb-12 md:mb-16"
        >
          <div className="h-64 md:h-96 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div
              variants={itemVariants}
              className="text-center px-4"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Get in touch with our team for any questions about our services
                or to schedule a consultation.
              </p>
            </motion.div>
          </div>
        </Parallax>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div
              variants={leftSlideIn}
              className="space-y-6 md:space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Get in Touch
              </h2>

              <div className="space-y-4 md:space-y-6">
                {/* Email */}
                <motion.div
                  whileHover={{ y: windowWidth >= 768 ? -5 : 0 }}
                  className="p-4 sm:p-6 border rounded-lg shadow-sm bg-white hover:shadow-lg transition-all hover-effect"
                >
                  <div className="flex items-center">
                    <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mr-3 sm:mr-4 group cursor-pointer">
                      <FaEnvelope className="text-blue-600 text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800">Email</h3>
                      <a href="mailto:info@eimcta.com" className="text-gray-600 hover:text-blue-600 transition-colors">info@eimcta.com</a>
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ y: windowWidth >= 768 ? -5 : 0 }}
                  className="p-4 sm:p-6 border rounded-lg shadow-sm bg-white hover:shadow-lg transition-all hover-effect"
                >
                  <div className="flex items-center">
                    <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mr-3 sm:mr-4 group cursor-pointer">
                      <FaPhone className="text-blue-600 text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800">Phone</h3>
                      <div className="space-y-1">
                        <a href="tel:+9779761754799" className="block text-gray-600 hover:text-blue-600 transition-colors">
                          +977 9761754799
                        </a>
                        <a href="tel:+9779741766637" className="block text-gray-600 hover:text-blue-600 transition-colors">
                          +977 9741766637
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  whileHover={{ y: windowWidth >= 768 ? -5 : 0 }}
                  className="p-4 sm:p-6 border rounded-lg shadow-sm bg-white hover:shadow-lg transition-all hover-effect"
                >
                  <div className="flex items-center">
                    <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mr-3 sm:mr-4 group cursor-pointer">
                      <FaMapMarkerAlt className="text-blue-600 text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800">Location</h3>
                      <p className="text-gray-600">Kathmandu, Nepal</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Alternative Contact Methods */}
              <motion.div
                whileHover={{ scale: windowWidth >= 768 ? 1.01 : 1 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 hover-effect"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                  Alternative Contact Methods
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <motion.a
                    whileHover={{ x: windowWidth >= 768 ? 5 : 0 }}
                    href="https://wa.me/9779761754799"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 sm:space-x-3 group hover:text-green-700 transition-colors cursor-pointer text-sm sm:text-base"
                  >
                    <FaWhatsapp className="text-green-500 text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-gray-700">WhatsApp: +977 9761754799</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ x: windowWidth >= 768 ? 5 : 0 }}
                    href="viber://chat?number=%2B9779741766637"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 sm:space-x-3 group hover:text-purple-700 transition-colors cursor-pointer text-sm sm:text-base"
                  >
                    <FaViber className="text-purple-500 text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-gray-700">Viber: +977 9741766637</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ x: windowWidth >= 768 ? 5 : 0 }}
                    href="https://m.me/eimcta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 sm:space-x-3 group hover:text-blue-700 transition-colors cursor-pointer text-sm sm:text-base"
                  >
                    <FaFacebook className="text-blue-600 text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-gray-700">Facebook Messenger</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                whileHover={{ scale: windowWidth >= 768 ? 1.01 : 1 }}
                className="mt-6 md:mt-8 hover-effect"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                  Business Hours
                </h3>
                <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 text-sm space-y-1 sm:space-y-2 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-600">
                      <MdAccessTime className="mr-2 text-blue-500" />
                      <span>Sunday - Friday:</span>
                    </div>
                    <span className="text-gray-800 font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-600">
                      <MdAccessTime className="mr-2 text-blue-500" />
                      <span>Saturday:</span>
                    </div>
                    <span className="text-gray-800 font-medium">Closed</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form / Chat Toggle */}
            <motion.div
              variants={rightSlideIn}
              ref={formRef}
              className="sticky top-24"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('form')}
                    className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${activeTab === 'form' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    Contact Form
                  </button>
                  <button
                    onClick={() => setActiveTab('chat')}
                    className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${activeTab === 'chat' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    Live Chat
                  </button>
                </div>

                <div className="p-6 sm:p-8">
                  <AnimatePresence mode="wait">
                    {activeTab === 'form' ? (
                      <motion.div
                        key="form"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={tabVariants}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                      >
                        <div className="mb-6">
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                            Send us a Message
                          </h2>
                          <p className="text-gray-600 mt-2 text-sm sm:text-base">
                            Fill out the form below and we'll get back to you as soon as
                            possible.
                          </p>
                        </div>

                        {submitted ? (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg flex items-center"
                          >
                            <FaPaperPlane className="mr-2 text-green-600" />
                            Thank you for your message! We will get back to you soon.
                          </motion.div>
                        ) : (
                          <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                              <label
                                htmlFor="name"
                                className="block mb-2 font-medium text-gray-700 text-sm sm:text-base"
                              >
                                Name
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <FaUser className="text-gray-400" />
                                </div>
                                <input
                                  type="text"
                                  name="name"
                                  id="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                  className="w-full pl-10 rounded-lg border border-gray-300 px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                  placeholder="Your name"
                                />
                              </div>
                            </div>

                            <div className="relative">
                              <label
                                htmlFor="email"
                                className="block mb-2 font-medium text-gray-700 text-sm sm:text-base"
                              >
                                Email
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <FaEnvelope className="text-gray-400" />
                                </div>
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  className="w-full pl-10 rounded-lg border border-gray-300 px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                  placeholder="Your email"
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="message"
                                className="block mb-2 font-medium text-gray-700 text-sm sm:text-base"
                              >
                                Message
                              </label>
                              <textarea
                                name="message"
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 sm:py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                placeholder="Your message"
                              />
                            </div>
                            <motion.button
                              type="submit"
                              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 sm:py-3 rounded-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
                              variants={buttonVariants}
                              initial="initial"
                              animate={isSubmitting ? "submitting" : submitted ? "submitted" : "initial"}
                              whileHover="hover"
                              whileTap="tap"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? (
                                <>
                                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  <span>Sending...</span>
                                </>
                              ) : submitted ? (
                                <>
                                  <FiSend className="text-lg" />
                                  <span>Message Sent!</span>
                                </>
                              ) : (
                                <>
                                  <FiSend className="text-lg" />
                                  <span>Send Message</span>
                                </>
                              )}
                            </motion.button>
                          </form>
                        )}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="chat"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={tabVariants}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col items-center justify-center py-8 text-center"
                      >
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                          <FaCommentAlt className="text-blue-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          Live Chat Support
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-md mx-auto">
                          Our team is available to chat Monday-Friday from 9am-5pm.
                        </p>
                        <div className="space-y-3    w-full max-w-xs">
                          <a
                            href="viber://chat?number=%2B9779741766637"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" bg-green-500
                             hover:bg-green-600 
                             text-white font-medium
                              py-2 px-4 rounded-lg 
                              transition-colors flex items-center justify-center space-x-2"
                          >
                            <FaWhatsapp className="text-xl" />
                            <span>Chat on Viber</span>
                          </a>
                          
                          <a
                            href="viber://chat?number=%2B9779741766637"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" bg-purple-500
                             hover:bg-purple-600 
                             text-white font-medium
                              py-2 px-4 rounded-lg 
                              transition-colors flex items-center justify-center space-x-2"
                          >
                            <FaViber className="text-xl" />
                            <span>Chat on Viber</span>
                          </a>
                          <a
                            href="https://m.me/eimcta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                          >
                            <FaFacebook className="text-xl" />
                            <span>Chat on Messenger</span>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 md:mt-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 md:mb-12 text-center">
              Additional Resources
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {resources.map(({ title, icon: Icon, description, to, color, textColor }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: windowWidth >= 768 ? -10 : 0,
                    boxShadow: windowWidth >= 768 ? "0 10px 25px -5px rgba(0, 0, 0, 0.1)" : "none"
                  }}
                  className={`p-4 sm:p-6 border rounded-xl bg-white hover:shadow-lg transition-all hover-effect ${color}`}
                >
                  <div className="text-center mb-3 sm:mb-4">
                    <div className={`bg-gradient-to-r ${color} w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group cursor-pointer`}>
                      <Icon className={`${textColor} text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110`} />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800">{title}</h4>
                  </div>
                  <p className="text-center text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{description}</p>
                  <div className="text-center">
                    <Link
                      to={to}
                      className={`${textColor} hover:underline text-xs sm:text-sm font-medium flex items-center justify-center`}
                    >
                      Access Tool <span className="ml-1">→</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map Location */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 md:mt-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
              Find Us on the Map
            </h2>
            <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-20 z-10 pointer-events-none"></div>
              <iframe
                title="EIMCTA Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0343517296677!2d85.32424907450653!3d27.714929776190727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18f6c16d7f67%3A0xfdbb4aa7d74814f!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1693831942422!5m2!1sen!2snp"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Custom styles for cursor */}
      <style jsx>{`
        .custom-cursor {
          width: 8px;
          height: 8px;
          z-index: 9999;
        }
        
        .cursor-follower {
          width: 24px;
          height: 24px;
          z-index: 9998;
        }
        
        .cursor-hover {
          transform: scale(1.5);
          background-color: #ffffff;
        }
        
        .cursor-follower-hover {
          transform: scale(0.5);
          background-color: rgba(255, 255, 255, 0.5);
          border-color: transparent;
        }
        
        .hover-effect {
          transition: all 0.3s ease;
        }
        
        .hover-effect:hover {
          transform: translateY(5px);
        }

        @media (max-width: 767px) {
          .hover-effect:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}