import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ISO_CREDENTIALS = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef(null);

  const credentials = [
    {
      title: "ISO 9001 Certified",
      description: "Quality Management System certification demonstrating our commitment to consistent quality.",
      image: "/images/iso9001.jpg",
      year: "2023"
    },
    {
      title: "ISO 27001 Certified",
      description: "Information Security Management certification ensuring robust data protection.",
      image: "/images/iso27001.jpg",
      year: "2022"
    },
    {
      title: "Industry Excellence Award",
      description: "Recognized as industry leader for innovative solutions and customer satisfaction.",
      image: "/images/award.jpg",
      year: "2021"
    },
    {
      title: "Environmental Certification",
      description: "Demonstrating our commitment to sustainable and eco-friendly practices.",
      image: "/images/environmental.jpg",
      year: "2023"
    },
    {
      title: "Customer Satisfaction Award",
      description: "Awarded for exceptional customer service and support.",
      image: "/images/customer-award.jpg",
      year: "2023"
    },
    {
      title: "Innovation Excellence",
      description: "Recognized for groundbreaking technological advancements.",
      image: "/images/innovation.jpg",
      year: "2022"
    }
  ];

  // Auto-scroll effect remains the same
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % credentials.length);
    }, 3000);

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

  // Handle swipe gestures for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) handleNext();
    if (touchStart - touchEnd < -50) handlePrev();
  };

  return (
    <div className="w-full bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Arial Narrow',Arial,sans-serif]">
            Our <span className="text-amber-600">Achievements & Accreditations</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Desktop Arrows */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white text-gray-500 shadow-lg hover:bg-amber-50 transition-all items-center justify-center border border-amber-100"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white text-gray-500 shadow-lg hover:bg-amber-50 transition-all items-center justify-center border border-amber-100"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile Arrows */}
          <div className="sm:hidden flex justify-between w-full mb-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white text-gray-500 shadow hover:bg-amber-50 transition-all flex items-center justify-center border border-amber-100"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white text-gray-500 shadow hover:bg-amber-50 transition-all flex items-center justify-center border border-amber-100"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carousel Items */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col lg:flex-row border border-amber-100">
                  {/* Image */}
                  <motion.div
                    className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 relative overflow-hidden"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={credentials[activeIndex].image}
                      alt={credentials[activeIndex].title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                  </motion.div>

                  {/* Text */}
                  <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                    <motion.h3
                      className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-['Arial Narrow',Arial,sans-serif]"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {credentials[activeIndex].title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-700 mb-6 text-sm sm:text-base md:text-lg italic font-['Arial Narrow',Arial,sans-serif]"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {credentials[activeIndex].description}
                    </motion.p>
                    <motion.div
                      className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-2 rounded-full self-start text-xs sm:text-sm font-['Arial Narrow',Arial,sans-serif]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {credentials[activeIndex].year}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {credentials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToItem(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-orange-400 scale-125" : "bg-gray-300"
                }`}
                aria-label={`Go to credential ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};