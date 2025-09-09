import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ISO_CREDENTIALS = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef(null);

  const credentials = [
   
    {
      title: "Industry Excellence Award",
      description: "Recognized as industry leader for innovative solutions, exceptional service delivery, and outstanding customer satisfaction metrics.",
      image: "/images/award.jpg",
      year: "2021",
      icon: "✨"
    },
    {
      title: "Environmental Certification",
      description: "Demonstrating our commitment to sustainable practices, carbon footprint reduction, and eco-friendly operations.",
      image: "/images/environmental.jpg",
      year: "2023",
      icon: "🌱"
    },
    
    {
      title: "Innovation Excellence",
      description: "Recognized for groundbreaking technological advancements and digital transformation solutions.",
      image: "/images/innovation.jpg",
      year: "2022",
      icon: "💡"
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % credentials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, credentials.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % credentials.length);
    pauseAutoPlay();
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + credentials.length) % credentials.length);
    pauseAutoPlay();
  };

  const scrollToItem = (index) => {
    setActiveIndex(index);
    pauseAutoPlay();
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="w-full bg-gray-50  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Arial Narrow',Arial,sans-serif]">
            Our <span className="text-amber-600">Accolades & Accreditations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Recognized excellence in quality, security, and innovation
          </p>
        </motion.div>

        {/* Vertical Carousel Container */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Column - Credential List */}
          <div className="w-full lg:w-2/5 space-y-4">
            {credentials.map((credential, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`cursor-pointer p-5 rounded-xl transition-all duration-300 ${activeIndex === index ? 'bg-white shadow-lg border-l-4 border-amber-400' : 'bg-amber-50 shadow-md hover:bg-amber-200'}`}
                onClick={() => scrollToItem(index)}
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{credential.icon}</div>
                  <div>
                    <h3 className={`text-lg font-bold ${activeIndex === index ? 'text-amber-900' : 'text-amber-900'}`}>
                      {credential.title}
                    </h3>
                    <p className={`text-sm ${activeIndex === index ? 'text-amber-800' : 'text-amber-800'}`}>
                      {credential.year}
                    </p>
                  </div>
                  {activeIndex === index && (
                    <motion.div 
                      className="ml-auto"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500 }}
                    >
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Active Credential Display */}
          <div className="w-full lg:w-3/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden h-full"
              >
                <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
                  <img
                    src={credentials[activeIndex].image}
                    alt={credentials[activeIndex].title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <motion.div 
                      className="text-5xl mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {credentials[activeIndex].icon}
                    </motion.div>
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {credentials[activeIndex].title}
                    </motion.h3>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <motion.p
                    className="text-gray-700 text-lg mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {credentials[activeIndex].description}
                  </motion.p>
                  <motion.div
                    className="flex justify-between items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex gap-2">
                      <button
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 shadow hover:bg-amber-100 transition-all flex items-center justify-center"
                        aria-label="Previous"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 shadow hover:bg-amber-100 transition-all flex items-center justify-center"
                        aria-label="Next"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                    <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-5 py-2 rounded-full text-sm font-medium">
                      Awarded {credentials[activeIndex].year}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-12 gap-2">
          {credentials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToItem(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? "bg-orange-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to credential ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};