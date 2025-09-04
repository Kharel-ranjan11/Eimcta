import { useState, useRef, useEffect } from "react";
import { Parallax } from "react-parallax";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

// Animation variants
const slideInRight = {
  hidden: { x: 80, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const slideInLeft = {
  hidden: { x: -80, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const underlineVariant = {
  hidden: { width: 0 },
  visible: { 
    width: "25%",
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const slideInUp = {
  hidden: { y: 60, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const rotate3D = {
  hidden: { y: 30, rotateX: -10, opacity: 0 },
  visible: { 
    y: 0, 
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Card component with hover animations
const ThreeDCard = ({ children, className = "", variants = slideInUp, custom = 0 }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -8,
        rotateX: 2,
        rotateY: -1,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      custom={custom}
      className={`rounded-xl bg-white/95 backdrop-blur-sm border border-amber-200/60 shadow-lg overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function Contact() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 min-h-screen" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Enhanced Particle background */}
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
                    value: "#f59e0b",
                  },
                },
              },
            },
            particles: {
              color: {
                value: "#f59e0b",
              },
              links: {
                color: "#f59e0b",
                distance: 150,
                enable: true,
                opacity: 0.2,
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
                speed: 0.8,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 50,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 4 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className="relative">
        {/* Enhanced Hero Section with Parallax */}
        <Parallax
          bgImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          bgImageAlt="Contact us background"
          strength={400}
          blur={{ min: -2, max: 3 }}
        >
          <div className="h-72 md:h-96 flex items-center justify-center bg-gradient-to-r from-amber-900/80 to-amber-800/70">
            <div className="text-center px-4 max-w-4xl mx-auto">
              <div className="mb-6">
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-500/20 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                >
                  <svg className="w-10 h-10 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </motion.div>
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-50 mb-4 relative"
                  variants={slideInRight}
                  initial="hidden"
                  animate="visible"
                >
                  Contact Us
                  <motion.span 
                    className="block w-24 h-1.5 bg-amber-400 rounded-full mx-auto mt-4"
                    variants={underlineVariant}
                    initial="hidden"
                    animate="visible"
                    style={{ originX: 0.5 }}
                  ></motion.span>
                </motion.h1>
              </div>
              <motion.p 
                className="text-lg md:text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed"
                variants={slideInLeft}
                initial="hidden"
                animate="visible"
              >
                Get in touch with our team for any questions about our services or to schedule a consultation. We're here to help you achieve your goals.
              </motion.p>
            </div>
          </div>
        </Parallax>

        {/* Contact Information Section */}
        <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 relative inline-block"
                variants={itemVariants}
              >
                Get In Touch
                <motion.span 
                  className="absolute left-0 right-0 -bottom-3 h-1.5 bg-amber-400 rounded-full"
                  variants={underlineVariant}
                  style={{ originX: 0.5 }}
                ></motion.span>
              </motion.h2>
              <motion.p 
                className="text-amber-700 max-w-2xl mx-auto text-lg"
                variants={itemVariants}
              >
                Reach out to us through any of these channels
              </motion.p>
            </motion.div>

            <ThreeDCard className="p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Contact Details */}
                <motion.div 
                  className="space-y-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ staggerChildren: 0.1 }}
                >
                  <div>
                    <motion.h3 
                      className="text-2xl font-semibold text-amber-900 mb-6 pb-2 border-b border-amber-200"
                      variants={itemVariants}
                    >
                      Contact Information
                    </motion.h3>
                    <div className="space-y-6">
                      <ThreeDCard variants={slideInUp} custom={0.1} className="p-4">
                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                          </div>
                          <div>
                            <p className="text-amber-900 font-medium text-lg mb-2">Phone Numbers</p>
                            <a href="tel:+977015903211" className="block text-amber-700 hover:text-amber-900 transition-colors duration-200 py-1 hover:underline">
                              +977-01-5903211
                            </a>
                            <a href="tel:+9779741766637" className="block text-amber-700 hover:text-amber-900 transition-colors duration-200 py-1 hover:underline">
                              +977 9741 766 637
                            </a>
                            <a href="tel:+9779862731591" className="block text-amber-700 hover:text-amber-900 transition-colors duration-200 py-1 hover:underline">
                              +977 9862 731 591
                            </a>
                            <p className="text-sm text-amber-600 mt-2">Click to call directly</p>
                          </div>
                        </div>
                      </ThreeDCard>

                      <ThreeDCard variants={slideInUp} custom={0.2} className="p-4">
                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                          <div>
                            <p className="text-amber-900 font-medium text-lg mb-2">Email Addresses</p>
                            <a href="mailto:info@everestconsultrain.com" className="block text-amber-700 hover:text-amber-900 transition-colors duration-200 py-1 hover:underline">
                              info@everestconsultrain.com
                            </a>
                            <a href="mailto:eimcta.md@gmail.com" className="block text-amber-700 hover:text-amber-900 transition-colors duration-200 py-1 hover:underline">
                              eimcta.md@gmail.com
                            </a>
                            <a href="mailto:iso.kathmandu@gmail.com" className="block text-amber-700 hover:text-amber-900 transition-colors duration-200 py-1 hover:underline">
                              iso.kathmandu@gmail.com
                            </a>
                            <p className="text-sm text-amber-600 mt-2">Click to send an email</p>
                          </div>
                        </div>
                      </ThreeDCard>

                      <ThreeDCard variants={slideInUp} custom={0.3} className="p-4">
                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                            </svg>
                          </div>
                          <div>
                            <p className="text-amber-900 font-medium text-lg mb-2">Website</p>
                            <a href="https://everestconsultrain.com" target="_blank" rel="noopener noreferrer" className="block text-amber-700 hover:text-amber-900 transition-colors duration-200 py-1 hover:underline">
                              https://everestconsultrain.com
                            </a>
                            <p className="text-sm text-amber-600 mt-2">Click to visit our website</p>
                          </div>
                        </div>
                      </ThreeDCard>
                    </div>
                  </div>
                </motion.div>

                {/* QR Codes and Social Media */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ staggerChildren: 0.1 }}
                >
                  <motion.h3 
                    className="text-2xl font-semibold text-amber-900 mb-6 pb-2 border-b border-amber-200"
                    variants={itemVariants}
                  >
                    Connect With Us
                  </motion.h3>
                  <div className="grid grid-cols-2 gap-5">
                    <ThreeDCard variants={rotate3D} custom={0.1} className="text-center p-4">
                      <div className="bg-white p-3 rounded-xl border border-amber-200 shadow-sm inline-block">
                        <img
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.facebook.com/eimctanepal`}
                          alt="Facebook QR Code"
                          className="w-32 h-32 mx-auto"
                        />
                      </div>
                      <p className="text-amber-700 mt-3 font-medium">Facebook</p>
                      <p className="text-sm text-amber-600">Scan to follow us</p>
                    </ThreeDCard>

                    <ThreeDCard variants={rotate3D} custom={0.2} className="text-center p-4">
                      <div className="bg-white p-3 rounded-xl border border-amber-200 shadow-sm inline-block">
                        <img
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.youtube.com/@ISO.EIMCTA`}
                          alt="YouTube QR Code"
                          className="w-32 h-32 mx-auto"
                        />
                      </div>
                      <p className="text-amber-700 mt-3 font-medium">YouTube</p>
                      <p className="text-sm text-amber-600">Scan to subscribe</p>
                    </ThreeDCard>

                    <ThreeDCard variants={rotate3D} custom={0.3} className="text-center p-4">
                      <div className="bg-white p-3 rounded-xl border border-amber-200 shadow-sm inline-block">
                        <img
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.linkedin.com/company/everest-international-management-consultancy-training-agency-pvt-ltd/?originalSubdomain=np`}
                          alt="LinkedIn QR Code"
                          className="w-32 h-32 mx-auto"
                        />
                      </div>
                      <p className="text-amber-700 mt-3 font-medium">LinkedIn</p>
                      <p className="text-sm text-amber-600">Scan to connect</p>
                    </ThreeDCard>

                    <ThreeDCard variants={rotate3D} custom={0.4} className="text-center p-4">
                      <div className="bg-white p-3 rounded-xl border border-amber-200 shadow-sm inline-block">
                        <img
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.instagram.com/everest_consultrain/`}
                          alt="Instagram QR Code"
                          className="w-32 h-32 mx-auto"
                        />
                      </div>
                      <p className="text-amber-700 mt-3 font-medium">Instagram</p>
                      <p className="text-sm text-amber-600">Scan to follow us</p>
                    </ThreeDCard>
                  </div>
                </motion.div>
              </div>
            </ThreeDCard>
          </div>
        </div>

        {/* Map Location */}
        <div className="container mx-auto px-4 sm:px-6 pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 relative inline-block"
                variants={itemVariants}
              >
                Find Us on the Map
                <motion.span 
                  className="absolute left-0 right-0 -bottom-3 h-1.5 bg-amber-400 rounded-full"
                  variants={underlineVariant}
                  style={{ originX: 0.5 }}
                ></motion.span>
              </motion.h2>
              <motion.p 
                className="text-amber-700 max-w-2xl mx-auto text-lg"
                variants={itemVariants}
              >
                Visit our office at the location below
              </motion.p>
            </motion.div>
            
            <ThreeDCard variants={scaleUp} className="w-full h-72 sm:h-80 md:h-96">
              <iframe
                title="EIMCTA Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.647673399961!2d85.36863727607958!3d27.72157447568726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1968cee7500d%3A0x260f11a4a2e7c416!2sEIMCTA!5e0!3m2!1sen!2snp!4v1693831942422!5m2!1sen!2snp"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 w-full h-full"
              ></iframe>
            </ThreeDCard>
            
            <motion.div 
              className="mt-6 text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="text-amber-700">
                <strong>Address:</strong> Everest International Management Consultancy & Training Agency Pvt. Ltd.
              </p>
              <a
                href="https://www.google.com/maps/place/Everest+International+Management+Consultancy+%26Training+Agency+Pvt.+Ltd./@27.7215243,85.3708094,42m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39eb1b94991c2f69:0xa6d7df8340d039b1!2sEverest+International+Management+Consultancy+%26Training+Agency+Pvt.+Ltd.!8m2!3d27.7215752!4d85.3708119!16s%2Fg%2F11vfb9tw0s!3m5!1s0x39eb1b94991c2f69:0xa6d7df8340d039b1!8m2!3d27.7215752!4d85.3708119!16s%2Fg%2F11vfb9tw0s?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-3 text-amber-600 hover:text-amber-800 font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Open in Google Maps
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}