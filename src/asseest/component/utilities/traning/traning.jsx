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
  rest: { y: 0 },
  hover: { y: -10 }
};

const LoadingSkeleton = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Skeleton */}
      <div className="max-w-3xl mb-12">
        <div className="h-12 bg-gray-200 rounded-full w-3/4 mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded-full w-full mb-8 animate-pulse"></div>
        <div className="flex gap-4">
          <div className="h-20 bg-gray-200 rounded-xl w-1/2 animate-pulse"></div>
          <div className="h-20 bg-gray-200 rounded-xl w-1/2 animate-pulse"></div>
        </div>
      </div>

      {/* Tabs Skeleton */}
      <div className="flex gap-4 mb-8 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-12 bg-gray-200 rounded-full w-24 animate-pulse"></div>
        ))}
      </div>

      {/* Content Skeleton */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-96 bg-gray-200 rounded-xl animate-pulse"></div>
        ))}
      </div>
    </div>
  </div>
);

const Training = () => {
  const [loading, setLoading] = useState(true);
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
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Animated header section */}
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: headerInView ? 1 : 0.8, y: headerInView ? 0 : -10 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              Professional Training Programs
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-xl text-gray-600"
            >
              Enhance your skills with our {totalItems}+ courses across {totalCategories} specialized categories
            </motion.p>
            
            {/* Stats bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="flex items-center px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="p-2 mr-3 rounded-full bg-blue-100 text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Courses</p>
                  <p className="text-2xl font-bold text-gray-900">{totalItems}</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="flex items-center px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="p-2 mr-3 rounded-full bg-green-100 text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Categories</p>
                  <p className="text-2xl font-bold text-gray-900">{totalCategories}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Category tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8 relative"
        >
          <div className="absolute bottom-0 h-0.5 bg-gray-200 w-full"></div>
          <nav className="flex space-x-8 overflow-x-auto pb-1">
            {trainingGroups.map((group, idx) => {
              const { title: groupTitle } = renderTrainingData(group);
              return (
                <motion.button
                  key={`tab-${idx}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(idx)}
                  className={`relative whitespace-nowrap py-4 px-1 font-medium text-sm transition-all duration-300 ${idx === activeTab ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  {groupTitle}
                  <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${idx === activeTab ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                    {group?.children?.length || 0}
                  </span>
                  {idx === activeTab && (
                    <motion.span 
                      layoutId="tabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
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
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center">
              <motion.span 
                whileHover={{ rotate: 360 }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold mr-4"
              >
                {activeTab + 1}
              </motion.span>
              <h2 className="text-3xl font-bold text-gray-900">
                {groupTitle}
              </h2>
            </div>
            {groupDescription && (
              <p className="text-gray-600 max-w-3xl text-lg pl-14">{groupDescription}</p>
            )}
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
                  className="relative rounded-xl overflow-hidden bg-white shadow-lg"
                >
                  <motion.div 
                    variants={cardHoverVariants}
                    className="relative flex flex-col h-full p-6"
                  >
                    {/* Card background effect */}
                    <AnimatePresence>
                      {hoveredCard === itemIdx && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500"
                        />
                      )}
                    </AnimatePresence>
                    
                    <div className="flex items-start mb-4">
                      <span className="flex-shrink-0 bg-blue-100 text-blue-800 text-sm font-medium mr-3 px-2.5 py-0.5 rounded-full">
                        {activeTab + 1}.{itemIdx + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
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
          className="mt-20 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="px-6 py-16 sm:p-16 lg:p-20">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                whileInView={{ scale: [0.95, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-extrabold text-white sm:text-4xl"
              >
                Ready to transform your career?
              </motion.h2>
              <motion.p
                whileInView={{ opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-4 text-xl text-blue-100"
              >
                Join our community of professionals who've accelerated their growth with our training programs.
              </motion.p>
              <motion.div
                whileInView={{ opacity: [0, 1], y: [10, 0] }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-2xl shadow-sm text-blue-600 bg-white hover:bg-blue-50"
                >
                  Get course catalog
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                  </svg>
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-2xl shadow-sm text-white bg-transparent hover:bg-white hover:bg-opacity-10"
                >
                  Speak with an advisor
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
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