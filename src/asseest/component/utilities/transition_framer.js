import React from 'react';
import { motion } from 'framer-motion';

// Define the animation variants. These describe the 'initial', 'in', and 'out' states of your page.
const pageVariants = {
  initial: {
    opacity: 0,
    // Stays off-screen to the left initially for the slide effect
    scale: 0.8,  // Starts smaller for the zoom-in effect
  },
  in: {
    opacity: 1,
    x: 0,        // Moves to its natural position
    scale: 1,    // Zooms in to its normal size
  },
  out: {
    opacity: 0,
    // Exits completely off-screen to the right
    scale: 1.2,  // Slightly scales up as it exits (optional, but can add flair)
  },
};

// Define the transition properties (duration, easing, type).
const pageTransition = {
  type: "tween",       // 'tween' for a linear-like interpolation.
  ease: "easeInOut",   // Smooth easing for a professional feel
  duration: 0.6,       // The animation will take 0.5 seconds
};


/**
 * A reusable component to wrap individual pages for Framer Motion page transitions.
 * It applies entry and exit animations using predefined variants.
 *
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - The actual page content (e.g., <HomePage />, <AboutPage />).
 * @param {string} props.pageKey - A unique key for the current page (e.g., `location.pathname`).
 * Crucial for AnimatePresence to track page changes.
 */
const PageTransitionWrapper = ({ children, pageKey }) => {
  return (
    <motion.div
      key={pageKey}           // Unique key tells AnimatePresence when a component is entering/exiting
      initial="initial"       // Apply the 'initial' variant when the component first mounts
      animate="in"            // Animate to the 'in' variant after mounting
      exit="out"              // Animate to the 'out' variant when the component is unmounting
      variants={pageVariants} // Link to the defined animation states
      transition={pageTransition} // Link to the defined transition properties
      className="w-full h-full  " // Important for fullscreen transitions
// `absolute` allows pages to overlap during transition
    >
      {children} {/* Render the actual content of the page */}
    </motion.div>
  );
};

export default PageTransitionWrapper;