import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import qrImg from '../../img/qr.jpg'; // Fixed: Importing
import image1 from '../../img/caro5.jpg';
import image4 from '../../img/caro4.jpg';
import envoronmentImg from '../../img/environment.jpg' // Fixed: Importing
// Fixedconst slides = [
const ImageCarousel = () => {
    const slides = [
        {
            url: image1,
            title: 'ISO 9001:2015 QMS',
            subtitle: 'Driving excellence and consistency with a robust Quality Management System.'
        },
        {
            url: envoronmentImg,
            title: 'ISO 45001: Health & Safety',
            subtitle: 'Prioritizing well-being and preventing workplace incidents with OHS standards.'
        },
        {
            url: image4,
            title: 'ISO 21001: Educational Systems',
            subtitle: 'Enhancing learning services and satisfaction for all educational stakeholders.'
        },
        {
            url: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=2070&auto=format&fit=crop',
            title: 'ISO 14001: Environmental Management',
            subtitle: 'Building a sustainable future by managing environmental responsibilities.'
        },
    ];

    // State management for the carousel
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [animatingTiles, setAnimatingTiles] = useState([]);

    // Ref for the autoplay interval
    const autoPlayRef = useRef(null);

    // Configuration for the shatter animation
    const gridConfig = { rows: 7, cols: 10 }; // Increased grid size for a more detailed effect on large screens

    // --- Animation Trigger Function ---
    const triggerAnimation = (nextIndexCallback) => {
        if (isAnimating) return;
        setIsAnimating(true);

        const newTiles = [];
        for (let i = 0; i < gridConfig.rows; i++) {
            for (let j = 0; j < gridConfig.cols; j++) {
                newTiles.push({
                    id: `${i}-${j}`,
                    imageUrl: slides[currentIndex].url,
                    delay: Math.random() * 0.5,
                    row: i,
                    col: j,
                });
            }
        }
        setAnimatingTiles(newTiles);

        // Wait for tiles to animate out
        setTimeout(() => {
            const newIndex = nextIndexCallback();
            setCurrentIndex(newIndex);

            // Wait for new slide to fade in before cleaning up
            setTimeout(() => {
                setIsAnimating(false);
                setAnimatingTiles([]);
            }, 600); // This should match the fade-in duration
        }, 800); // This should be long enough for the shatter effect
    };

    // --- Navigation Functions ---
    const goToNext = useCallback(() => {
        triggerAnimation(() => {
            const isLastSlide = currentIndex === slides.length - 1;
            return isLastSlide ? 0 : currentIndex + 1;
        });
    }, [currentIndex, slides, isAnimating]);

    const goToPrevious = () => {
        triggerAnimation(() => {
            const isFirstSlide = currentIndex === 0;
            return isFirstSlide ? slides.length - 1 : currentIndex - 1;
        });
    };

    const goToSlide = (slideIndex) => {
        if (slideIndex === currentIndex) return;
        triggerAnimation(() => slideIndex);
    };

    // --- Autoplay Effect ---
    useEffect(() => {
        if (!isHovered) {
            autoPlayRef.current = setInterval(goToNext, 5000);
        }
        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [goToNext, isHovered]);

    // --- SVG Icon Components ---
    const ChevronLeftIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    );

    const ChevronRightIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    );

    return (
        <div
            className="h-screen w-screen"
            style={{ fontFamily: 'Arial, sans-serif' }}
        >
            <div
                className="w-full h-full relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* --- Main Slide Image and Content --- */}
                <div
                    key={currentIndex}
                    className="w-full h-full bg-cover bg-center transition-opacity duration-500 ease-in-out"
                    style={{
                        backgroundImage: `url(${slides[currentIndex].url})`,
                        opacity: isAnimating ? 0 : 1
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg transition-all duration-500 ease-out" style={{ transform: isAnimating ? 'translateY(20px)' : 'translateY(0)', opacity: isAnimating ? 0 : 1 }}>
                            {slides[currentIndex].title}
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl drop-shadow-md transition-all duration-500 ease-out delay-100" style={{ transform: isAnimating ? 'translateY(20px)' : 'translateY(0)', opacity: isAnimating ? 0 : 1 }}>
                            {slides[currentIndex].subtitle}
                        </p>
                    </div>
                </div>

                {/* --- Tiles for Shatter Animation --- */}
                {animatingTiles.map((tile) => {
                    const tileWidth = 100 / gridConfig.cols;
                    const tileHeight = 100 / gridConfig.rows;
                    return (
                        <div
                            key={tile.id}
                            className="absolute top-0 left-0 h-full w-full bg-cover"
                            style={{
                                height: `${tileHeight}%`,
                                width: `${tileWidth}%`,
                                top: `${tile.row * tileHeight}%`,
                                left: `${tile.col * tileWidth}%`,
                                backgroundImage: `url(${tile.imageUrl})`,
                                backgroundPosition: `${tile.col * (100 / (gridConfig.cols - 1))}% ${tile.row * (100 / (gridConfig.rows - 1))}%`,
                                backgroundSize: `${gridConfig.cols * 100}% ${gridConfig.rows * 100}%`,
                                transition: `transform 0.8s cubic-bezier(0.25, 1, 0.35, 1), opacity 0.8s ease-out`,
                                transitionDelay: `${tile.delay}s`,
                                transform: isAnimating
                                    ? `scale(0.5) rotate(${Math.random() * 40 - 20}deg)`
                                    : 'scale(1) rotate(0deg)',
                                opacity: isAnimating ? 0 : 1,
                            }}
                        />
                    );
                })}

                {/* --- QR Code Overlay --- */}
                <div className="absolute bottom-6 right-6 w-24 h-24 md:w-32 md:h-32 p-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg z-20">
                    <img
                        src={qrImg}
                        alt="QR Code"
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>

                {/* --- Left Arrow --- */}
                <button
                    onClick={goToPrevious}
                    className="absolute top-1/2 left-6 -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 transition-all duration-300 focus:outline-none z-10"
                    aria-label="Previous slide"
                >
                    <ChevronLeftIcon />
                </button>

                {/* --- Right Arrow --- */}
                <button
                    onClick={goToNext}
                    className="absolute top-1/2 right-6 -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 transition-all duration-300 focus:outline-none z-10"
                    aria-label="Next slide"
                >
                    <ChevronRightIcon />
                </button>

                {/* --- Navigation Dots --- */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4 z-10">
                    {slides.map((_, slideIndex) => (
                        <button
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-white scale-125' : 'bg-white bg-opacity-50'}`}
                            aria-label={`Go to slide ${slideIndex + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;