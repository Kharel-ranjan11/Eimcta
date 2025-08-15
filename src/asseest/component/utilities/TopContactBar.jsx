import React from "react";
import { Phone, Mail } from "lucide-react";
import iso from '../../img/iSO.png';

const TopContactBar = () => {
  const marqueeItems = [
    { content: "संस्थालाई व्यत्तिले होईन म्यानेज्मेन्ट सिस्टमले चलाउंछ ।" },
    { content: " सिस्टम नभएको संस्थाले संस्थापकलाई दिनहु जलाउंछ ॥" },
     { content: "संस्थालाई व्यत्तिले होईन म्यानेज्मेन्ट सिस्टमले चलाउंछ ।" },
    { content: " सिस्टम नभएको संस्थाले संस्थापकलाई दिनहु जलाउंछ ॥" },
  ];

  // Create the full content sequence (logo + items + logo)
  const createMarqueeSequence = () => (
    <>
      <img 
        src={iso} 
        alt="ISO Certified" 
        className="h-8 md:h-10 object-contain mx-2 md:mx-4"
      />
      {marqueeItems.map((item, index) => (
        <React.Fragment key={index}>
          <span className="text-gray-700 text-nowrap  font-medium
           text-xs md:text-sm mx-2 md:mx-4" style={{ fontFamily:  "Arial Narrow"  }}>
            {item.content}
          </span>
          <span className="text-gray-400 mx-1 md:mx-2">✦</span>
        </React.Fragment>
      ))}
      <img 
        src={iso} 
        alt="ISO Certified" 
        className="h-8 md:h-10 object-contain mx-2 md:mx-4"
      />
    </>
  );

  return (
    <div className="w-full bg-gray-100
     py-2 md:py-3 px-3 md:px-6 flex 
     flex-col md:flex-row items-center justify-between gap-2 md:gap-4 shadow-md">
      {/* Marquee Container */}
      <div className="w-full md:w-auto overflow-hidden relative">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {createMarqueeSequence()}
          </div>
        </div>
      </div>

      {/* Contact Icons */}
      <div className="flex gap-2 md:gap-4 text-gray-800 shrink-0">
        <a
          href="tel:+9779800000000"
          className="group relative flex flex-col items-center cursor-pointer"
        >
          <div className="bg-green-100 p-1 md:p-2 rounded-full hover:bg-green-200 transition-all duration-300 group-hover:shadow-lg">
            <Phone className="h-4 w-4 md:h-5 md:w-5 text-green-700 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
          </div>
          <span className="absolute bottom-full mb-1 text-[10px] md:text-xs text-white bg-green-600 border border-green-400 px-1.5 py-1 shadow-lg rounded-lg font-medium whitespace-nowrap opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
            +977-9800000000
          </span>
        </a>

        <a
          href="mailto:email@example.com"
          className="group relative flex flex-col items-center cursor-pointer"
        >
          <div className="bg-red-100 p-1 md:p-2 rounded-full hover:bg-red-200 transition-all duration-300 group-hover:shadow-lg">
            <Mail className="h-4 w-4 md:h-5 md:w-5 text-red-700 transition-transform duration-300 group-hover:scale-125" />
          </div>
          <span className="absolute bottom-full mb-1 text-[10px] md:text-xs text-white bg-red-600 border border-red-400 px-1.5 py-1 shadow-lg rounded-lg font-medium whitespace-nowrap opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
            email@example.com
          </span>
        </a>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .marquee-content {
          display: flex;
          align-items: center;
          width: fit-content;
          animation: marquee 25s linear infinite;
          will-change: transform;
        }
        
        .marquee-content:hover {
          animation-play-state: paused;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-66.66%);
          }
        }
        
        @media (max-width: 767px) {
          .marquee-content {
            animation-duration: 18s;
          }
        }
      `}</style>
    </div>
  );
};

export default TopContactBar;