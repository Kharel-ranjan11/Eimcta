import React, { useState, useEffect } from "react";
import { Rocket } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [launch, setLaunch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 900);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
window.addEventListener("scroll",()=>{
  console.log(window.scrollY > 200,window.scrollY)
})
  const scrollToTop = () => {
    setLaunch(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
    setTimeout(() => setLaunch(false), 100);
  };

  return (
    <>
      {/* Gas flames under rocket */}
      {launch && (
        <div className="fixed bottom-[58px] right-[34px] z-40 flex flex-col items-center animate-gas-flicker pointer-events-none">
          <div className="w-1 h-3 bg-orange-400 rounded-full blur-sm mb-0.5 opacity-90"></div>
          <div className="w-1.5 h-2.5 bg-yellow-300 rounded-full blur-sm opacity-80"></div>
        </div>
      )}

      {/* Scroll to Top Rocket Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full transition-all duration-300
          bg-gradient-to-br from-blue-800 via-indigo-900 to-blue-950
          hover:scale-110 hover:shadow-2xl focus:outline-none
          ring-1 ring-blue-500 shadow-blue-500/30
          ${
            visible
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
          ${launch ? "animate-rocket-launch" : ""}
        `}
        aria-label="Scroll to top"
      >
        <Rocket
          size={26}
          strokeWidth={2}
          className="text-white rotate-[315deg] drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
        />
      </button>

      {/* Keyframe styles */}
      <style>{`
        @keyframes rocket-launch {
          0% {
            transform: translateY(0) scale(1);
          }
          40% {
            transform: translateY(-20px) scale(1.1);
          }
          70% {
            transform: translateY(-40px) scale(1.15);
          }
          100% {
            transform: translateY(-60px) scale(1.2);
          }
        }

        @keyframes gas-flicker {
          0%, 100% { opacity: 0.9; transform: scaleY(1); }
          50% { opacity: 0.5; transform: scaleY(1.3); }
        }

        .animate-rocket-launch {
          animation: rocket-launch 0.8s ease-out;
        }

        .animate-gas-flicker {
          animation: gas-flicker 0.4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};
export default ScrollToTopButton;