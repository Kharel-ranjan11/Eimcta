import { useState, useRef, useEffect } from "react";
import { Parallax } from "react-parallax";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

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
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100" style={{ fontFamily: 'Arial Narrow, sans-serif' }}>
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
          <div className="h-64 md:h-96 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-3 md:mb-4 relative inline-block after:absolute after:w-full after:h-2 after:bg-yellow-400 after:left-0 after:-bottom-2 after:rounded-full">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-amber-800 max-w-3xl mx-auto mt-6">
                Get in touch with our team for any questions about our services
                or to schedule a consultation.
              </p>
            </div>
          </div>
        </Parallax>

        {/* Map Location */}
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6 md:mb-8 text-center relative inline-block after:absolute after:w-full after:h-2 after:bg-yellow-400 after:left-0 after:-bottom-2 after:rounded-full">
              Find Us on the Map
            </h2>
            <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg border border-yellow-300 bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}