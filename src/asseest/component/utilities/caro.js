import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Fixed: Using require() for image imports to ensure correct bundling
const carouselItems = [
  {
    image: require('../../img/caro4.jpg'),
    title: "Modern Infrastructure",
    description: "State-of-the-art facilities designed for efficiency and sustainability.",
    cta: "Explore Our Facilities",
  },
  {
    image: require('../../img/caro5.jpg'),
    title: "Innovative Solutions",
    description: "Cutting-edge technology driving industry advancements.",
    cta: "Discover Our Technology",
  },
  {
    image: require('../../img/health&safety.jpg'),
    title: "Health & Safety",
    description: "Committed to the highest standards of workplace safety.",
    cta: "Learn About Our Standards",
  },
  {
    image: require('../../img/environment.jpg'),
    title: "Environmental Responsibility",
    description: "Sustainable practices for a greener future.",
    cta: "See Our Initiatives",
  }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const autoplayRef = useRef(null);

  const currentItem = carouselItems[currentIndex];

  const stopAutoplay = () => clearInterval(autoplayRef.current);
  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % carouselItems.length);
    }, 5000);
  };

  // Autoplay functionality
  useEffect(() => {
    startAutoplay();
    return stopAutoplay; // Clear interval on component unmount
  }, []);

  // Preload images
  useEffect(() => {
    const loadImages = () => {
      const promises = carouselItems.map(item => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = item.image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(promises)
        .then(() => setIsLoading(false))
        .catch(err => console.error("Failed to load images", err));
    };

    loadImages();
  }, []);

  // Fixed: Simplified animation variants
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
    })
  };
  
  const handleInteraction = (action) => {
    stopAutoplay();
    action();
    startAutoplay();
  };

  const goToNext = () => {
     handleInteraction(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % carouselItems.length);
    });
  };

  const goToPrev = () => {
    handleInteraction(() => {
      setDirection(-1);
      setCurrentIndex(prev => (prev - 1 + carouselItems.length) % carouselItems.length);
    });
  };

  const goToImage = (index) => {
    handleInteraction(() => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    });
  };

  if (isLoading) {
    return (
      <div className="relative w-full h-screen flex items-center justify-center bg-gray-200">
        <div className="text-xl font-semibold text-gray-600">Loading Carousel...</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Main Carousel */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }} // Fixed: Moved transition here
          className="absolute w-full h-full"
        >
          {/* Background Image */}
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5OTkiPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+";
            }}
          />
          
          {/* --- Responsive Overlays --- */}
          {/* Mobile Overlay (Darker, from bottom) */}
          <div className="absolute inset-0 block md:hidden bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          
          {/* Desktop Overlay (Lighter, from left) */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 pb-20 md:justify-center md:p-24 lg:p-32 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-xl text-center md:text-left"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {currentItem.title}
              </h2>
              <p className="text-base md:text-lg lg:text-xl mb-8">
                {currentItem.description}
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
                {currentItem.cta}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition backdrop-blur-sm"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition backdrop-blur-sm"
        aria-label="Next Slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'w-6 bg-white' : 'w-3 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;