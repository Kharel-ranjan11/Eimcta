import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Building,
  Crown,
  BarChart2,
  Wrench,
  Settings2,
  TrendingUp,
  Rocket,
  Globe2,
  Handshake,
  Target,
  BookOpen,
  Factory,
  Search,
  RefreshCcw,
  HardHat,
  Briefcase,
  AlertTriangle,
  Shield,
  Hammer,
  FileText,
  BarChart3
} from 'lucide-react';
import caro1 from '../../img/car1.jpg';
import caro2 from '../../img/caro2.jpg';
import caro3 from '../../img/caro3.jpg'

// Define icon colors per carousel item to use for their clauses
const iconColors = [
  '#ffffff', // blue-purple gradient related color (ISO 9001)
  '#FFFFFF', // cyan-teal (ISO 14001)
  '#FFFFFF', // orange-amber (ISO 45001)
];

const carouselItems = [
  {
    standard: 'ISO 9001:2015',
    title: 'Quality Management System',
    description: 'Framework for consistent quality delivery and customer satisfaction',
    clauses: [
      { number: '4.0', title: 'Organizational Context', icon: Building },
      { number: '5.0', title: 'Leadership', icon: Crown },
      { number: '6.0', title: 'Planning', icon: BarChart2 },
      { number: '7.0', title: 'Support', icon: Wrench },
      { number: '8.0', title: 'Operations', icon: Settings2 },
      { number: '9.0', title: 'Evaluation', icon: TrendingUp },
      { number: '10.0', title: 'Improvement', icon: Rocket }
    ],
    image: caro1,
    ratio: "portrait",
    bgGradient: 'bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800'
  },
  {
    standard: 'ISO 14001:2015',
    title: 'Environmental Management',
    description: 'Systematic approach to environmental responsibility and sustainability',
    clauses: [
      { number: '4.0', title: 'Context Analysis', icon: Globe2 },
      { number: '5.0', title: 'Leadership', icon: Handshake },
      { number: '6.0', title: 'Planning', icon: Target },
      { number: '7.0', title: 'Support', icon: BookOpen },
      { number: '8.0', title: 'Operations', icon: Factory },
      { number: '9.0', title: 'Evaluation', icon: Search },
      { number: '10.0', title: 'Improvement', icon: RefreshCcw }
    ],
    image: caro2,
    ratio: "landscape",
    bgGradient: 'bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700'
  },
  {
    standard: 'ISO 45001:2018',
    title: 'Occupational Health & Safety',
    description: 'Framework for worker safety and risk minimization',
    clauses: [
      { number: '4.0', title: 'Context', icon: HardHat },
      { number: '5.0', title: 'Leadership', icon: Briefcase },
      { number: '6.0', title: 'Planning', icon: AlertTriangle },
      { number: '7.0', title: 'Support', icon: Shield },
      { number: '8.0', title: 'Operations', icon: Hammer },
      { number: '9.0', title: 'Evaluation', icon: FileText },
      { number: '10.0', title: 'Improvement', icon: BarChart3 }
    ],
    image: caro3,
    ratio: "landscape",
    bgGradient: 'bg-gradient-to-br from-orange-500 via-amber-600 to-yellow-500'
  }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [previewOpen, setPreviewOpen] = useState(false);
  const carouselRef = useRef(null);
  const currentItem = carouselItems[currentIndex];
  const isLandscape = currentItem.ratio === 'landscape';

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
    const handleEsc = (e) => {
      if (e.key === 'Escape') setPreviewOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <div
        ref={carouselRef}
        className={`relative w-full ${currentItem.bgGradient} overflow-hidden flex items-center justify-center py-10 px-4 sm:px-6 md:px-12 lg:px-24`}
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
                <ul className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  {currentItem.clauses.map((clause, i) => {
                    const IconComp = clause.icon;
                    const iconColor = iconColors[currentIndex];
                    return (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={clauseVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05, boxShadow: `0 0 12px ${iconColor}` }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="p-4 rounded-xl backdrop-blur-sm bg-white/15 border border-white/30 flex items-center gap-x-5 cursor-pointer transform-gpu shadow-md hover:bg-white/25"
                      >
                        <IconComp
                          size={32}
                          color={iconColor}
                          strokeWidth={2.2}
                          className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                        />
                        <div>
                          <span className="text-xs sm:text-sm opacity-80 block select-none">
                            Clause {clause.number}
                          </span>
                          <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                            {clause.title}
                          </h3>
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              {/* Right Image */}
              <div
                className="flex justify-center items-center cursor-pointer"
                onClick={() => isLandscape && setPreviewOpen(true)}
              >
                <motion.img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className={`
                    w-full 
                    max-w-[90%] 
                    ${isLandscape ? 'object-cover' : 'aspect-[1118/1600] object-contain'}
                    rounded-3xl 
                    shadow-2xl 
                    border-4 border-white/30
                    transition-transform duration-300 ease-in-out
                    hover:scale-[1.03]
                  `}
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
                index === currentIndex
                  ? 'w-8 bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]'
                  : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={() => {
            setDirection(-1);
            setCurrentIndex(
              (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
            );
          }}
          className="absolute left-4 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white drop-shadow-md" />
        </button>

        {/* Next Button */}
        <button
          onClick={() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
          }}
          className="absolute right-4 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white drop-shadow-md" />
        </button>
      </div>

      {/* Image Full Preview */}
      <AnimatePresence>
        {previewOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewOpen(false)} // click outside to close
          >
            <motion.img
              src={currentItem.image}
              alt="Preview"
              className="
                rounded-xl
                shadow-2xl
                max-w-[108vw] 
                max-h-[108vh] 
                w-auto 
                h-auto 
                object-contain
                cursor-zoom-out
              "
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // prevent close when clicking image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageCarousel;
