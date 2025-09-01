import React from "react";

const Scroll_x = () => {

  const marqueeItems = [
    { content: "| https://everestconsultrain.com |" },
    { content: "| info@everestconsultrain.com |" },
    { content: "  | +977 1 5903211 | 974-1766637 |" },
    { content: "| Bouddha, Kathmandu |" },
  ];

  // Create the full content sequence (logo + items + logo)
  const createMarqueeSequence = () => (
    <>

      {marqueeItems.map((item, index) => (
        <React.Fragment key={index}>
          <span className="text-gray-700 text-nowrap  font-medium
           text-xs md:text-sm mx-2 md:mx-4" style={{ fontFamily: "Arial Narrow" }}>
            {item.content}
          </span>
          <span className="text-gray-400 mx-1 md:mx-2">✦</span>
        </React.Fragment>
      ))}

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
export default Scroll_x;