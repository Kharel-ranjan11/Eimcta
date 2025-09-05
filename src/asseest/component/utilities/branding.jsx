import { useState } from 'react';
import { motion } from 'framer-motion';

// Import all brand images
import brand1 from '../../img/brand1.jpg';
import brand2 from '../../img/brand2.png';
import brand3 from '../../img/brand3.jpg';
import brand4 from '../../img/brand4.jpg';
import brand5 from '../../img/brand5.gif';
import brand6 from '../../img/brand6.jpg';
import brand7 from '../../img/brand7.jpg';
import brand8 from '../../img/brand8.jpg';
import brand9 from '../../img/brand9.jpg';
import brand10 from '../../img/brand10.jpg';
import brand11 from '../../img/brand11.png';
import brand12 from '../../img/brand12.png';
import brand13 from '../../img/brand13.jpg';

export const Branding = () => {
  const logos = [
    { src: brand1, alt: "Brand 1" },
    { src: brand2, alt: "Brand 2" },
    { src: brand3, alt: "Brand 3" },
    { src: brand4, alt: "Brand 4" },
    { src: brand5, alt: "Brand 5" },
    { src: brand6, alt: "Brand 6" },
    { src: brand7, alt: "Brand 7" },
    { src: brand8, alt: "Brand 8" },
    { src: brand9, alt: "Brand 9" },
    { src: brand10, alt: "Brand 10" },
    { src: brand11, alt: "Brand 11" },
    { src: brand12, alt: "Brand 12" },
    { src: brand13, alt: "Brand 13" },
  ];

  const [loaded, setLoaded] = useState(Array(logos.length).fill(false));

  const handleImageLoad = (index) => {
    setLoaded(prev => prev.map((status, i) => (i === index ? true : status)));
  };

  return (
    <div className="w-full bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 font-['Arial Narrow',Arial,sans-serif]">
             <span className="text-amber-600">Clientele</span>
          </h2>
          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-gray-400 to-gray-500 mx-auto rounded-full" />
        </motion.div>

        {/* Logo Grid */}
        <div className="relative">
          <div className="overflow-hidden py-2 sm:py-4">
            <div className="animate-infinite-scroll whitespace-nowrap flex items-center">
              {[...logos, ...logos].map((logo, index) => (
                <motion.div
                  key={`${logo.alt}-${index}`}
                  className="inline-flex items-center justify-center mx-2 sm:mx-4"
                  style={{
                    width: 'clamp(100px, 20vw, 180px)',
                    height: 'clamp(60px, 15vw, 140px)',
                    minWidth: '100px' // Ensure minimum size on mobile
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white rounded-lg sm:rounded-xl shadow-xs sm:shadow-sm p-2 sm:p-4 h-full w-full flex items-center justify-center border border-gray-200 relative">
                    {/* Image container with consistent aspect ratio */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Background div to maintain consistent space */}
                      <div 
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ padding: '10%' }}
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className={`
                            w-full h-full object-contain transition-opacity duration-300
                            ${loaded[index % logos.length] ? 'opacity-100' : 'opacity-0'}
                            ${logo.src.includes('gif') ? 'max-h-[70%]' : ''}
                          `}
                          onLoad={() => handleImageLoad(index % logos.length)}
                          loading="lazy"
                          decoding="async"
                          style={{
                            objectPosition: 'center',
                            maxWidth: '100%',
                            maxHeight: '100%'
                          }}
                        />
                      </div>
                      
                      {/* Loading spinner */}
                      {!loaded[index % logos.length] && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 border-3 sm:border-4 border-gray-300 border-t-amber-500 rounded-full animate-spin"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-infinite-scroll {
          display: inline-flex;
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

        @media (max-width: 640px) {
          .animate-infinite-scroll {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  );
};