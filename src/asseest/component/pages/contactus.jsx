import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  // Custom cursor effect
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const cursorFollower = document.querySelector(".cursor-follower");
    const links = document.querySelectorAll("a, button, .hover-effect");

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
  }, []);

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
    },
    {
      title: "OHS Injury Cost Calculator",
      icon: FaCalculator,
      description: "Assess workplace injury costs",
      to: "/ohs-injury-cost-calculator",
    },
    {
      title: "Labour Law Nepal",
      icon: FaGavel,
      description: "Nepal labour law resources",
      to: "/labour-law-nepal",
    },
    {
      title: "Download Brochures",
      icon: FaDownload,
      description: "PPE and safety brochures",
      to: "/download-brochures",
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

  return (
    <div className="relative overflow-hidden">
      {/* Custom cursor elements */}
      <div className="custom-cursor fixed w-4 h-4 bg-blue-600 rounded-full pointer-events-none z-50 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"></div>
      <div className="cursor-follower fixed w-8 h-8 border-2 border-blue-400 rounded-full pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"></div>
      
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
        className="py-20 relative"
      >
        {/* Hero Section with Parallax */}
        <Parallax
          bgImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          bgImageAlt="Contact us background"
          strength={300}
          className="mb-16"
        >
          <div className="h-96 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div
              variants={itemVariants}
              className="text-center px-4"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Get in touch with our team for any questions about our services
                or to schedule a consultation.
              </p>
            </motion.div>
          </div>
        </Parallax>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={leftSlideIn}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-800">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-lg transition-all hover-effect"
                >
                  <div className="flex items-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group cursor-pointer">
                      <FaEnvelope className="text-blue-600 text-xl transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">info@eimcta.com</p>
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-lg transition-all hover-effect"
                >
                  <div className="flex items-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group cursor-pointer">
                      <FaPhone className="text-blue-600 text-xl transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">
                        +977 9761754799
                        <br />
                        +977 9741766637
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-lg transition-all hover-effect"
                >
                  <div className="flex items-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group cursor-pointer">
                      <FaMapMarkerAlt className="text-blue-600 text-xl transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Location</h3>
                      <p className="text-gray-600">Kathmandu, Nepal</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Alternative Contact Methods */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 hover-effect"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Alternative Contact Methods
                </h3>
                <div className="space-y-3">
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="https://wa.me/9779761754799"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 group hover:text-green-700 transition-colors cursor-pointer"
                  >
                    <FaWhatsapp className="text-green-500 text-xl transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-gray-700">WhatsApp: +977 9761754799</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ x: 5 }}
                    href="viber://chat?number=%2B9779741766637"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 group hover:text-purple-700 transition-colors cursor-pointer"
                  >
                    <FaViber className="text-purple-500 text-xl transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-gray-700">Viber: +977 9741766637</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ x: 5 }}
                    href="https://m.me/eimcta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 group hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    <FaFacebook className="text-blue-600 text-xl transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-gray-700">Facebook Messenger</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="mt-8 hover-effect"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Business Hours
                </h3>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm space-y-2 shadow-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday - Friday:</span>
                    <span className="text-gray-800 font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="text-gray-800 font-medium">Closed</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={rightSlideIn}
              ref={formRef}
              className="sticky top-24"
            >
              <div className="p-8 border rounded-xl shadow-lg bg-white hover:shadow-xl transition-all">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600 mt-2">
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
                        className="block mb-2 font-medium text-gray-700"
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
                          className="w-full pl-10 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="block mb-2 font-medium text-gray-700"
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
                          className="w-full pl-10 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your message"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2"
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
                          <FiSend className="text-xl" />
                          <span>Message Sent!</span>
                        </>
                      ) : (
                        <>
                          <FiSend className="text-xl" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Additional Resources */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Additional Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map(({ title, icon: Icon, description, to }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="p-6 border rounded-xl bg-white hover:shadow-lg transition-all hover-effect"
                >
                  <div className="text-center mb-4">
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group cursor-pointer">
                      <Icon className="text-gradient-to-r from-green-600 to-blue-600 text-2xl transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
                  </div>
                  <p className="text-center text-gray-600 text-sm mb-4">{description}</p>
                  <div className="text-center">
                    <Link
                      to={to}
                      className="text-gradient-to-r from-green-600 to-blue-600 hover:underline text-sm font-medium flex items-center justify-center"
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
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Find Us on the Map
            </h2>
            <div className="w-full h-96 rounded-xl overflow-hidden shadow-2xl relative">
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
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
}