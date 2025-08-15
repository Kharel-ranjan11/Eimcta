import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../../img/iSO.png';

export const Branding = () => {
  const logos = [
    { src: logo, alt: "ISO Logo 1" },
    { src: logo, alt: "ISO Logo 2" },
    { src: logo, alt: "ISO Logo 3" },
    { src: logo, alt: "ISO Logo 4" },
    { src: logo, alt: "ISO Logo 5" },
    { src: logo, alt: "ISO Logo 6" },
    { src: logo, alt: "ISO Logo 7" },
    { src: logo, alt: "ISO Logo 8" },
    { src: logo, alt: "ISO Logo 9" },
    { src: logo, alt: "ISO Logo 10" },
  ];

  const [loaded, setLoaded] = useState(Array(logos.length).fill(false));

  const handleImageLoad = (index) => {
    setLoaded(prev => prev.map((status, i) => (i === index ? true : status)));
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Arial Narrow',Arial,sans-serif]">
            Our <span className="text-amber-600">Trusted Partners</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-500 mx-auto rounded-full" />
        </motion.div>

        {/* Logo Grid */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="animate-infinite-scroll whitespace-nowrap">
              {[...logos, ...logos].map((logo, index) => (
                <motion.div
                  key={`${logo.alt}-${index}`}
                  className="inline-block mx-4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white rounded-xl shadow-sm p-4 h-full flex items-center justify-center border border-gray-200">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={`max-h-full max-w-full object-contain transition-all ${
                        loaded[index % logos.length] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(index % logos.length)}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-xs text-gray-600 text-center max-w-md mx-auto font-['Arial Narrow',Arial,sans-serif]">
            Logos sourced from royalty-free platforms with commercial licenses.
            All trademarks belong to their respective owners.
          </p>
        </div>
      </div>

      <style jsx>{`
        .animate-infinite-scroll {
          display: inline-block;
          animation: 20s scroll infinite linear;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};