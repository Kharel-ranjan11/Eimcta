import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const carouselItems = [
  {
    id: 1,
    type: 'image',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop',
    alt: 'Misty Pine Forest',
    heading: 'Whispers of the Wild',
    description: 'Step into the tranquil mystery of the misty pines.',
  },
  {
    id: 2,
    type: 'video',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-the-jungle-2325-large.mp4',
    poster: 'https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-the-jungle-2325-large.jpg',
    alt: 'Jungle Waterfall',
    heading: 'Jungle Cascade',
    description: 'Nature’s thunderous symphony echoes through the falls.',
  },
  {
    id: 3,
    type: 'image',
    image: 'https://images.unsplash.com/photo-1513189737555-dc667baf4f45?q=80&w=2070&auto=format&fit=crop',
    alt: 'Tokyo Lights',
    heading: 'City of Neon Dreams',
    description: 'Feel the pulse of Tokyo as it glows under the night sky.',
  },
];

const professions = ['Developer', 'Designer', 'Teacher', 'Digital Marketer'];

const ImageCarousel = ({ scrollTargetRef }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typeIndex, setTypeIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const videoRefs = useRef([]);

  const currentItem = carouselItems[currentIndex];

  // Typewriter effect
  useEffect(() => {
    const current = professions[typeIndex % professions.length];
    const timeout = setTimeout(() => {
      setText((prev) =>
        deleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && text === '') {
        setDeleting(false);
        setTypeIndex((prev) => (prev + 1) % professions.length);
      }
    }, deleting ? 50 : 120);
    return () => clearTimeout(timeout);
  }, [text, deleting, typeIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  const handleScrollDown = () => {
    // alert('test')
    // console.log(scrollTargetReftw, scrollTargetRef)
    window.scrollTo({
    top: 700, // ← adjust to match where your next section starts
    behavior: 'smooth',
  });
  };

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <div className="relative h-screen">
        <AnimatePresence mode="wait">
          {currentItem.type === 'image' ? (
            <motion.img
              key={currentItem.id}
              src={currentItem.image}
              alt={currentItem.alt}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            />
          ) : (
            <motion.video
              key={currentItem.id}
              ref={(el) => (videoRefs.current[currentIndex] = el)}
              src={currentItem.video}
              poster={currentItem.poster}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            />
          )}
        </AnimatePresence>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end px-6 pb-28 text-white">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {currentItem.heading}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-4 text-gray-300"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {currentItem.description}
          </motion.p>

          <motion.div
            className="text-2xl md:text-4xl font-extrabold tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I am a{" "}
            <span className="text-transparent  bg-clip-text stroke-text ">
              {text}
            </span>
          </motion.div>
        </div>

        {/* Prev/Next Buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
          <button
            onClick={goToPrev}
            className="bg-black/40 hover:bg-black/60 p-3 rounded-full text-white shadow-lg transition"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
          <button
            onClick={goToNext}
            className="bg-black/40 hover:bg-black/60 p-3 rounded-full text-white shadow-lg transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Scroll Down Button */}
        <motion.div
          onClick={handleScrollDown}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 cursor-pointer bg-cyan-600 hover:bg-cyan-700 p-3 rounded-full shadow-lg"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDownCircle size={32} className="text-white drop-shadow" />
        </motion.div>
      </div>
    </div>
  );
};

export default ImageCarousel;
