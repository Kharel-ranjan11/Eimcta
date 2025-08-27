import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import image4 from '../../img/caro4.jpg';
import environmentImg from '../../img/environment.jpg';
import img from '../../img/ISO 210012018.png';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import img5 from '../../img/5.jpg';
import img6 from '../../img/6.jpg';
import img7 from '../../img/7.jpg';



const ImageCarousel = () => {
    const slides = [
        { url: img1 },
        { url: img2 },
        { url: img3 },
        { url: img4 },
        { url: img5 },
        { url: img6 },
        { url: img7 },

    ];

    // State management for the carousel
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Ref for the autoplay interval
    const autoPlayRef = useRef(null);

    // --- Navigation Functions ---
    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
    }, [currentIndex, slides.length]);

    const goToPrevious = useCallback(() => {
        const isFirstSlide = currentIndex === 0;
        setCurrentIndex(isFirstSlide ? slides.length - 1 : currentIndex - 1);
    }, [currentIndex, slides.length]);

    const goToSlide = (slideIndex) => {
        if (slideIndex === currentIndex) return;
        setCurrentIndex(slideIndex);
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

    return (
        <div className="">
            <div
                className=" relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Main Slide Image */}
                <div className=" flex items-center justify-center">
                    <img
                        src={slides[currentIndex].url}
                        alt={`Slide ${currentIndex + 1}`}
                        className="w-auto h-auto max-w-full max-h-full object-contain"
                        style={{
                            minWidth: '100%',
                            minHeight: '100%',
                            // Maintain aspect ratio for larger screens
                            aspectRatio: '1800/750'
                        }}
                    />
                </div>

                {/* Left Arrow */}
                <button
                    onClick={goToPrevious}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all duration-300 focus:outline-none z-10"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-6 w-6 md:h-10 md:w-10" />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={goToNext}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all duration-300 focus:outline-none z-10"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-6 w-6 md:h-10 md:w-10" />
                </button>

                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
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