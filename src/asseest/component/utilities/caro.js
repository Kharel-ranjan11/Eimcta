import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import caro1 from '../../img/car1.jpg';

const carouselItems = [
  {
    standard: 'ISO 9001:2015',
    title: 'Quality Management System',
    description: 'Framework for consistent quality delivery and customer satisfaction',
    clauses: [
      { number: '4.0', title: 'Organizational Context', icon: '🏛️' },
      { number: '5.0', title: 'Leadership', icon: '👑' },
      { number: '6.0', title: 'Planning', icon: '📊' },
      { number: '7.0', title: 'Support', icon: '🛠️' },
      { number: '8.0', title: 'Operations', icon: '⚙️' },
      { number: '9.0', title: 'Evaluation', icon: '📈' },
      { number: '10.0', title: 'Improvement', icon: '🚀' }
    ],
    image: caro1,
    bgGradient: 'bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800'
  },
  {
    standard: 'ISO 14001:2015',
    title: 'Environmental Management',
    description: 'Systematic approach to environmental responsibility and sustainability',
    clauses: [
      { number: '4.0', title: 'Context Analysis', icon: '🌎' },
      { number: '5.0', title: 'Leadership', icon: '🤝' },
      { number: '6.0', title: 'Planning', icon: '🎯' },
      { number: '7.0', title: 'Support', icon: '📚' },
      { number: '8.0', title: 'Operations', icon: '🏭' },
      { number: '9.0', title: 'Evaluation', icon: '🔍' },
      { number: '10.0', title: 'Improvement', icon: '🔄' }
    ],
    image: caro1,
    bgGradient: 'bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700'
  },
  {
    standard: 'ISO 45001:2018',
    title: 'Occupational Health & Safety',
    description: 'Framework for worker safety and risk minimization',
    clauses: [
      { number: '4.0', title: 'Context', icon: '👷' },
      { number: '5.0', title: 'Leadership', icon: '💼' },
      { number: '6.0', title: 'Planning', icon: '⚠️' },
      { number: '7.0', title: 'Support', icon: '🛡️' },
      { number: '8.0', title: 'Operations', icon: '⚒️' },
      { number: '9.0', title: 'Evaluation', icon: '📝' },
      { number: '10.0', title: 'Improvement', icon: '📊' }
    ],
    image: caro1,
    bgGradient: 'bg-gradient-to-br from-orange-500 via-amber-600 to-yellow-500'
  }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const carouselRef = useRef(null);
  const currentItem = carouselItems[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '30%' : '-30%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-30%' : '30%',
      opacity: 0,
      transition: { duration: 0.5 }
    })
  };

  const clauseVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  useEffect(() => {
    const handleResize = () => {
      // alert(`Window resized to: ${window.innerWidth} x ${window.innerHeight}`);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // run once on mount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={carouselRef}
      className={`relative w-full ${currentItem.bgGradient} 
      overflow-hidden flex items-center
       justify-center
        py-10 px-4 sm:px-6 md:px-12 lg:px-24`}

    >
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="relative w-full flex justify-center items-center"
        >
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <div className="space-y-1">
                <span className="text-lg sm:text-xl md:text-2xl font-light tracking-wider">
                  {currentItem.standard}
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {currentItem.title}
                </h1>
              </div>
              <p className="text-base sm:text-lg md:text-xl opacity-90">
                {currentItem.description}
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                {currentItem.clauses.map((clause, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={clauseVariants}
                    initial="hidden"
                    animate="visible"
                    className="p-3 sm:p-4 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{clause.icon}</span>
                      <div>
                        <span className="text-xs sm:text-sm opacity-80">
                          Clause {clause.number}
                        </span>
                        <h3 className="text-sm sm:text-base md:text-lg font-medium">
                          {clause.title}
                        </h3>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="flex justify-center items-center">
              <motion.img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-[59rem]
                 sm:w-[12rem] md:max-w-md 
                 lg:max-w-lg xl:max-w-xl
                  aspect-video object-contain rounded-2xl shadow-2xl border-4 border-white/20"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={() => {
          setDirection(-1);
          setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
        }}
        className="absolute left-4 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Next Button */}
      <button
        onClick={() => {
          setDirection(1);
          setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
        }}
        className="absolute right-4 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default ImageCarousel;
