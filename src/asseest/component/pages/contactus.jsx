import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useInView } from "framer-motion";

export default function Contact() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const mapRef = useRef(null);
  const isMapInView = useInView(mapRef, { threshold: 0.1, once: true });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  // Main animation settings
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.2,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    },
    hidden: { 
      opacity: 0, 
      y: 80,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="relative overflow-hidden">
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

      <div className="relative">
        {/* Hero Section with Parallax */}
        <Parallax
          bgImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          bgImageAlt="Contact us background"
          strength={300}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className="h-64 md:h-96 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Get in touch with our team for any questions about our services
                or to schedule a consultation.
              </p>
            </div>
          </motion.div>
        </Parallax>

        {/* Map Location */}
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
          <motion.div
            ref={mapRef}
            initial="hidden"
            animate={isMapInView ? "visible" : "hidden"}
            variants={variants}
            className="mt-16 md:mt-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Find Us on the Map
              </span>
            </h2>
            <motion.div 
              className="w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl relative"
              whileHover={{ 
                y: -15,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}