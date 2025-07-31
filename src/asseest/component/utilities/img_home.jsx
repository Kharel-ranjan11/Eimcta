import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export const Img_home = ({ src,rotate }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop animations
  const scaleDesktop = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]); // Bigger zoom level
  const opacityDesktop = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  // Mobile animations
  const yMobile = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
  const opacityMobile = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-gradient-to-br
      from-green-950 to-blue-950 
      flex items-center justify-center p-4 md:p-8 overflow-hidden"
    >
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          height: isMobile ? '100vh' : 'auto'
        }}
      >
        <motion.div
          className="flex items-center justify-center w-full h-full"
          style={{
            y: isMobile ? yMobile : 0,
            scale: isMobile ? 1 : scaleDesktop,
            opacity: isMobile ? opacityMobile : opacityDesktop
          }}
        >
          <div className="relative flex items-center justify-center w-full h-full">
            <img
              src={src}
              alt="Presentation Image"
              className={`
                object-contain
                ${isMobile ? `${rotate} scale-[1.44]  max-w-[80vh] max-h-[80vw]` : 'max-w-[90%] max-h-[90vh]'}
              `}
              style={{
                transformOrigin: 'center center',
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};