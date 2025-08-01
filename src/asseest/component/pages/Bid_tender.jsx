import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animated Component Wrapper
const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay }
        },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      {children}
    </motion.div>
  );
};

const TechnicalBidComponent = () => {
  // Hover animation variants
  const cardHover = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  const buttonHover = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  // Pattern background component
  const PatternBackground = () => (
    <div className="absolute inset-0 opacity-5" 
      style={{
        backgroundImage: 'linear-gradient(135deg, #ffffff 10%, transparent 10%, transparent 50%, #ffffff 50%, #ffffff 60%, transparent 60%, transparent 100%)',
        backgroundSize: '15px 15px'
      }}
    ></div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans bg-white">
      {/* Hero Section with Pattern Background */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20 px-8 mb-16">
        <PatternBackground />
        
        <div className="relative z-10 max-w-2xl">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Craft <span className="text-amber-300">Winning</span> Technical Bids <br />
            <span className="text-blue-200">That Stand Out</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ISO-compliant bid solutions with proven success frameworks
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button 
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-blue-900 font-semibold rounded-xl shadow-lg"
              whileHover="hover"
              whileTap="tap"
              variants={buttonHover}
            >
              Get Started With Templates
            </motion.button>
          </motion.div>
        </div>
        
        {/* 3D Illustration with Parallax Effect */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 h-64 md:h-96 xl:h-[28rem]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src="" 
            alt="3D bid document illustration"
            className="h-full w-auto object-contain"
          />
        </motion.div>
        
        {/* Floating elements for depth */}
        <motion.div 
          className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-800 opacity-20"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </section>

      {/* What is a Technical Bid? */}
      <AnimatedSection delay={0.1}>
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
          <div className="lg:w-1/2">
            <motion.div 
              className="inline-flex items-center bg-blue-100 text-blue-800 px-5 py-2 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="mr-2">📋</span>
              <span>Technical Bid Definition</span>
            </motion.div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              A Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Document</span> That Wins Projects
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A technical bid is your organization's comprehensive response to an RFP, demonstrating 
              technical capabilities, compliance with standards (ISO 9001, 21500, 31000), and 
              your unique value proposition to deliver the project successfully.
            </p>
            
            <motion.div 
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-semibold text-xl mb-4 text-blue-700">Core Components:</h3>
              <ul className="space-y-4">
                {[
                  "Technical methodology & approach",
                  "ISO-aligned quality management",
                  "Risk assessment framework",
                  "Staff competency matrix",
                  "Regulatory compliance proof",
                  "Detailed project timeline"
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-blue-500 mr-3 text-xl">•</span>
                    <span className="text-gray-800">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <motion.div 
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-200 shadow-sm h-full relative overflow-hidden"
              initial={{ rotateY: 0 }}
              whileHover={{ rotateY: 2 }}
            >
              <PatternBackground />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Bid Preparation Timeline
                  </span>
                </h3>
                
                <div className="relative">
                  {/* Animated timeline line */}
                  <motion.div 
                    className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-purple-300"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  />
                  
                  {[
                    { step: "1", title: "RFP Analysis", icon: "🔍", duration: "1-3 days" },
                    { step: "2", title: "Solution Design", icon: "✏️", duration: "2-5 days" },
                    { step: "3", title: "Draft Creation", icon: "📝", duration: "3-7 days" },
                    { step: "4", title: "Review & Refine", icon: "🔎", duration: "2-4 days" },
                    { step: "5", title: "Final Compliance", icon: "✅", duration: "1-2 days" },
                    { step: "6", title: "Submission", icon: "📤", duration: "1 day" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="relative pl-10 md:pl-0 mb-10 last:mb-0"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="md:flex items-start">
                        <div className="hidden md:flex w-16 justify-center">
                          <motion.div 
                            className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold shadow-lg"
                            whileHover={{ scale: 1.1 }}
                          >
                            {item.step}
                          </motion.div>
                        </div>
                        
                        <div className="md:ml-6 bg-white p-6 rounded-xl border border-gray-200 shadow-xs flex-1">
                          <div className="flex items-center mb-2">
                            <span className="text-2xl mr-3">{item.icon}</span>
                            <h4 className="text-lg font-medium">{item.title}</h4>
                          </div>
                          <p className="text-sm text-gray-500">{item.duration}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Technical Bids Matter */}
      <AnimatedSection delay={0.2}>
        <div className="text-center mb-16">
          <motion.div 
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white px-6 py-1 rounded-full">
              <p className="text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Strategic Value
              </p>
            </div>
          </motion.div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Technical Bids</span> Matter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than documentation - they're your competitive advantage
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🥇",
              title: "Competitive Edge",
              desc: "Showcase unique capabilities and ISO-aligned processes",
              color: "from-blue-100 to-blue-50",
              border: "border-blue-200"
            },
            {
              icon: "📡",
              title: "Clear Communication",
              desc: "Ensure perfect alignment of project goals",
              color: "from-purple-100 to-purple-50",
              border: "border-purple-200"
            },
            {
              icon: "🧾",
              title: "Professional Image",
              desc: "Build trust through structured documentation",
              color: "from-amber-100 to-amber-50",
              border: "border-amber-200"
            },
            {
              icon: "⚠️",
              title: "Risk Management",
              desc: "Demonstrate ISO 31000-based planning",
              color: "from-red-100 to-red-50",
              border: "border-red-200"
            },
            {
              icon: "✅",
              title: "Regulatory Compliance",
              desc: "Meet all legal and ISO requirements",
              color: "from-green-100 to-green-50",
              border: "border-green-200"
            },
            {
              icon: "📈",
              title: "Business Growth",
              desc: "Win more tenders and expand market share",
              color: "from-indigo-100 to-indigo-50",
              border: "border-indigo-200"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className={`bg-gradient-to-br ${item.color} p-8 rounded-2xl border ${item.border} shadow-sm relative overflow-hidden`}
              variants={cardHover}
              whileHover="hover"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <PatternBackground />
              <div className="relative z-10">
                <motion.div 
                  className="text-4xl mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Industry Applications */}
      <AnimatedSection delay={0.3}>
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-3xl p-12 mb-20 overflow-hidden relative" style={{marginTop:'29px'}}>
          <PatternBackground />
          
          {/* Floating elements */}
          <motion.div 
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gray-600 opacity-25"
            animate={{
              scale: [1, 1.9, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">We Serve</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { icon: "🏗️", title: "Construction", desc: "Infrastructure, EPC" },
                { icon: "💻", title: "Technology", desc: "Software, IT" },
                { icon: "🏭", title: "Manufacturing", desc: "Industrial, Automation" },
                { icon: "💼", title: "Consulting", desc: "Management, ISO" },
                { icon: "🌿", title: "Energy", desc: "Renewables, Utilities" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20 text-center hover:border-opacity-40 transition-all relative overflow-hidden"
                  whileHover={{ 
                    y: -10,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderColor: "rgba(255,255,255,0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <PatternBackground />
                  <div className="relative z-10">
                    <motion.div 
                      className="text-5xl mb-4"
                      whileHover={{ scale: 1.2 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-80">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection delay={0.4}>
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-gray-900 to-blue-900 text-white p-12 text-center">
          <PatternBackground />
          
          <div className="relative z-10">
            <motion.div 
              className="inline-block mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-full">
                <div className="bg-white px-8 py-2 rounded-full">
                  <p className="text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Ready to Transform Your Bids?
                  </p>
                </div>
              </div>
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-6">
              Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">Winning</span> Technical Proposals
            </h2>
            
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Our experts help you craft ISO-compliant bids that stand out in competitive tenders
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl shadow-lg"
                whileHover="hover"
                whileTap="tap"
                variants={buttonHover}
              >
                Schedule Consultation
              </motion.button>
              
              <motion.button 
                className="px-8 py-4 bg-white text-blue-700 font-semibold border-2 border-blue-200 rounded-xl shadow-lg"
                whileHover="hover"
                whileTap="tap"
                variants={buttonHover}
              >
                Download ISO Templates
              </motion.button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default TechnicalBidComponent;