import React, { useState, useEffect } from "react";
import { navbarItems } from "../Array/data";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Enhanced utility to extract title and metadata
const renderTrainingData = (item) => ({
  title: typeof item === "string" ? item : item?.title || "Untitled",
  icon: item?.icon || null,
  description: item?.description || `Professional training program on ${typeof item === "string" ? item : item?.title || "relevant topic"}`,
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const cardHoverVariants = {
  rest: {
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  }
};

const Training = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [headerRef, headerInView] = useInView({ threshold: 0.1 });

  const trainingGroups =
    navbarItems?.find((item) => item?.title === "Training")?.children || [];

  // Find OHSE Training index and set as default active tab
  const ohseIndex = trainingGroups.findIndex(group =>
    group.title && group.title.toLowerCase() === "ohse training"
  );
  const [activeTab, setActiveTab] = useState(ohseIndex >= 0 ? ohseIndex : 0);

  // Calculate statistics
  const totalItems = trainingGroups.reduce(
    (acc, group) => acc + (group?.children?.length || 0),
    0
  );
  const totalCategories = trainingGroups.length;

  // Get active group data
  const activeGroup = trainingGroups[activeTab] || {};
  const { title: groupTitle, description: groupDescription } = renderTrainingData(activeGroup);
  const groupItems = activeGroup?.children || [];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Hero section with animated gradient */}
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: headerInView ? 1 : 0.8, y: headerInView ? 0 : -10 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden"
      >
        {/* Animated background gradient */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 bg-[length:300%_300%]"
        />

        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 sm:text-6xl"
            >
              Elevate Your Expertise
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-xl text-gray-700"
            >
              Master in-demand skills with our {totalItems}+ industry-recognized courses across {totalCategories} specialized domains
            </motion.p>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center px-6 py-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-white/20"
              >
                <div className="p-2 mr-3 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Courses Available</p>
                  <p className="text-2xl font-bold text-gray-900">{totalItems}+</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center px-6 py-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-white/20"
              >
                <div className="p-2 mr-3 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Categories</p>
                  <p className="text-2xl font-bold text-gray-900">{totalCategories}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center px-6 py-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-white/20"
              >
                <div className="p-2 mr-3 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 text-indigo-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Learning Paths</p>
                  <p className="text-2xl font-bold text-gray-900">12+</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center px-6 py-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-white/20"
              >
                <div className="p-2 mr-3 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Certifications</p>
                  <p className="text-2xl font-bold text-gray-900">30+</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Category tabs - Sticky navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12 sticky top-0 z-10 bg-white/80 backdrop-blur-md py-4 border-b border-gray-200"
        >
          <nav className="flex space-x-4 overflow-x-auto pb-1">
            {trainingGroups.map((group, idx) => {
              const { title: groupTitle } = renderTrainingData(group);
              return (
                <motion.button
                  key={`tab-${idx}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(idx)}
                  className={`relative whitespace-nowrap py-2 px-4 font-medium text-sm rounded-full transition-all duration-300 ${idx === activeTab
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                >
                  {groupTitle}
                  <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${idx === activeTab
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-800'
                    }`}>
                    {group?.children?.length || 0}
                  </span>
                </motion.button>
              );
            })}
          </nav>
        </motion.div>

        {/* Training content */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center">
              <motion.span
                whileHover={{ rotate: 360 }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-600 font-bold text-xl mr-4"
              >
                {activeTab + 1}
              </motion.span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {groupTitle}
                </h2>
                {groupDescription && (
                  <p className="text-gray-600 mt-2 text-lg">{groupDescription}</p>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {groupItems.map((item, itemIdx) => {
              const { title, description } = renderTrainingData(item);

              return (
                <motion.div
                  key={`item-${itemIdx}`}
                  variants={itemVariants}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  onMouseEnter={() => setHoveredCard(itemIdx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative rounded-2xl overflow-hidden bg-white border border-gray-100"
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="relative flex flex-col h-full p-6"
                  >
                    {/* Card accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />

                    {/* Card content */}
                    <div className="flex items-start mb-4">
                      <span className="flex-shrink-0 bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-800 text-sm font-medium mr-3 px-2.5 py-0.5 rounded-full">
                        {activeTab + 1}.{itemIdx + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                    </div>

                    <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>

                    {/* Card footer */}

                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
            

            
        
        <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-24 rounded-2xl shadow-xl overflow-hidden relative bg-gradient-to-r from-gray-900 to-blue-900"
>
  {/* CSS pattern background */}
  <div 
    className="absolute inset-0 opacity-5"
    style={{
      backgroundImage: 'linear-gradient(135deg, #ffffff 10%, transparent 10%, transparent 50%, #ffffff 50%, #ffffff 60%, transparent 60%, transparent 100%)',
      backgroundSize: '15px 15px'
    }}
  ></div>

  {/* Decorative elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-20 w-32 h-32 bg-white rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-10 right-20 w-40 h-40 bg-blue-300 rounded-full filter blur-3xl"></div>
  </div>
  
  <div className="px-6 py-16 sm:p-16 lg:p-20 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
      <motion.h2 
        whileInView={{ scale: [0.95, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold text-white sm:text-5xl"
      >
        Ready to transform your career?
      </motion.h2>
      <motion.p
        whileInView={{ opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-6 text-xl text-blue-100"
      >
        Join thousands of professionals who've accelerated their growth with our industry-leading programs.
      </motion.p>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [10, 0] }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
      >
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-2xl shadow-lg text-blue-900 bg-white hover:bg-blue-50 transition-all"
        >
          Get Full Course Catalog
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-2xl shadow-sm text-white bg-transparent hover:bg-white/10 transition-all"
        >
          Speak with an Advisor
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  </div>
</motion.section>
      </main>
    </div>
  );
};

export default Training;