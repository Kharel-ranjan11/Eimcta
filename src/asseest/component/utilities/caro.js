import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';

const carouselItems = [
  {
    title: 'ISO Certification Solutions',
    quote: 'Achieve global recognition with our seamless ISO certification consultancy.',
    items: [
      'ISO 9001 – Quality Management',
      'ISO 14001 – Environmental Management',
      'ISO 45001 – Occupational Health & Safety',
      'ISO Documentation & Pre-Audit Support',
      'End-to-End Certification Guidance',
    ],
    cta: 'Learn More',
    illustration: 'https://illustrations.popsy.co/amber/digital-nomad.svg',
    bgColor: 'from-purple-600 to-indigo-700',
  },
  {
    title: 'OHS Solutions',
    quote: 'Empowering workplaces to become safer, compliant, and risk-free.',
    items: [
      'Workplace Risk Assessments',
      'Safety Officer & Fire Warden Training',
      'Disaster Preparedness & Emergency Drills',
      'Compliance with National & International Safety Standards',
      'OHS Audits and Reporting',
    ],
    cta: 'Explore OHS Solutions',
    illustration: 'https://illustrations.popsy.co/amber/security-on.svg',
    bgColor: 'from-amber-600 to-orange-600',
  },
  {
    title: 'Environmental Solutions',
    quote: 'Driving sustainability with advanced environmental management practices.',
    items: [
      'Environmental Audits & Analysis',
      'Waste Management Strategies',
      'ISO 14001 Environmental Compliance',
      'Energy Efficiency Programs',
      'Pollution Control & Impact Assessments',
    ],
    cta: 'See Environmental Services',
    illustration: 'https://illustrations.popsy.co/amber/earth-day.svg',
    bgColor: 'from-emerald-600 to-teal-700',
  },
  {
    title: 'Professional Training Programs',
    quote: 'Skill-building programs designed to create impact and ensure compliance.',
    items: [
      'Lead Auditor Trainings (ISO 9001, IRCA-approved)',
      'Food Safety & HACCP Programs',
      'Fire & First Aid Training',
      'Disaster Management Workshops',
      'Customized Corporate Training Modules',
    ],
    cta: 'Enroll in Training',
    illustration: 'https://illustrations.popsy.co/amber/teacher.svg',
    bgColor: 'from-blue-600 to-cyan-600',
  },
];

const ImageCarousel = ({ scrollTargetRef }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);
  const currentItem = carouselItems[currentIndex];

  // Auto-advance carousel
  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        if (!isHovering) {
          goToNext();
        }
      }, 6000);
    };

    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [isHovering]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    resetInterval();
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isHovering) {
        goToNext();
      }
    }, 6000);
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: scrollTargetRef.current?.offsetTop || 700,
      behavior: 'smooth',
    });
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.3,
      },
    }),
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentItem.bgColor} opacity-90`} />

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 py-20"
        >
          {/* Content */}
          <div className="w-full md:w-1/2 text-white z-10 mb-10 md:mb-0">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {currentItem.title}
            </motion.h2>
            
            <motion.p
              className="text-xl md:text-2xl mb-8 text-white/90 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              "{currentItem.quote}"
            </motion.p>
            
            <motion.ul className="space-y-2 mb-8">
              {currentItem.items.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3" />
                  <span className="text-lg md:text-xl">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full font-semibold text-lg bg-white ${
                currentItem.bgColor.includes('purple') ? 'text-purple-600' :
                currentItem.bgColor.includes('amber') ? 'text-amber-600' :
                currentItem.bgColor.includes('emerald') ? 'text-emerald-600' :
                'text-blue-600'
              } shadow-lg hover:shadow-xl transition-all`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {currentItem.cta}
            </motion.button>
          </div>
          
          {/* Illustration */}
          <motion.div 
            className="w-full md:w-1/2 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <img 
              src={currentItem.illustration} 
              alt={currentItem.title} 
              className="max-w-full h-auto max-h-[400px] md:max-h-[500px] object-contain"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <motion.button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} className="text-white" />
      </motion.button>
      
      <motion.button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next slide"
      >
        <ChevronRight size={28} className="text-white" />
      </motion.button>

      {/* Scroll Down Button */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll down"
      >
        <ArrowDown size={24} className="text-white" />
      </motion.button>
    </div>
  );
};

export default ImageCarousel;