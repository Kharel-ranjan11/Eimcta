import React from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Enhanced Animated Component Wrapper
const AnimatedSection = ({ children, delay = 0, threshold = 0.1 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
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
          transition: { 
            duration: 0.8, 
            delay,
            ease: [0.2, 0.65, 0.3, 0.9]
          }
        },
        hidden: { 
          opacity: 0, 
          y: 80,
          transition: { duration: 0.6 }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

// Particle Background Component
const ParticleBackground = ({ count = 30 }) => {
  const particles = Array.from({ length: count });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400 opacity-10"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Interactive Card Component
const InteractiveCard = ({ icon, title, description, color, index }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl p-8 h-full border border-opacity-20 ${color.border}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.2, 0.65, 0.3, 0.9]
      }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      whileHover={{ 
        y: -15,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3 }
      }}
    >
      <div className={`absolute inset-0 opacity-10 ${color.bg}`} />
      <ParticleBackground count={5} />
      
      <div className="relative z-10">
        <motion.div 
          className={`w-16 h-16 rounded-xl ${color.bg} ${color.text} flex items-center justify-center text-3xl mb-6`}
          whileHover={{ 
            rotate: 10,
            scale: 1.1,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          {icon}
        </motion.div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
        
        <motion.div
          className={`absolute -bottom-3 left-0 right-0 h-1 ${color.bg} opacity-80 `}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

const TechnicalBidComponent = () => {
  // Color schemes for cards
  const colorSchemes = [
    { 
      bg: "bg-blue-600", 
      text: "text-white",
      border: "border-blue-500",
      hover: "hover:bg-blue-700"
    },
    { 
      bg: "bg-purple-600", 
      text: "text-white",
      border: "border-purple-500",
      hover: "hover:bg-purple-700"
    },
    { 
      bg: "bg-amber-500", 
      text: "text-white",
      border: "border-amber-400",
      hover: "hover:bg-amber-600"
    },
    { 
      bg: "bg-emerald-600", 
      text: "text-white",
      border: "border-emerald-500",
      hover: "hover:bg-emerald-700"
    },
    { 
      bg: "bg-rose-600", 
      text: "text-white",
      border: "border-rose-500",
      hover: "hover:bg-rose-700"
    },
    { 
      bg: "bg-indigo-600", 
      text: "text-white",
      border: "border-indigo-500",
      hover: "hover:bg-indigo-700"
    }
  ];

  // Interactive button component
  const InteractiveButton = ({ children, color, className = "" }) => (
    <motion.button
      className={`px-8 py-4 rounded-xl font-semibold text-white ${color.bg} ${color.hover} ${className}`}
      whileHover={{ 
        y: -3,
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
    >
      {children}
    </motion.button>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans bg-white overflow-hidden">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden rounded-3xl mb-20">
        {/* Animated background gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        {/* Floating particles */}
        <ParticleBackground count={50} />
        
        {/* Floating document elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm border border-white border-opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm border border-white border-opacity-20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative z-10 text-center px-6 py-12 max-w-4xl">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="inline-block mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-full">
                  <div className="bg-white px-6 py-1 rounded-full">
                    <p className="text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Technical Bid Solutions
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="inline-block">
                  <motion.span 
                    className="inline-block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Elevate{" "}
                  </motion.span>
                  <motion.span 
                    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-amber-400"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    Your Bids
                  </motion.span>
                </span>
                <br />
                <span className="inline-block">
                  <motion.span 
                    className="inline-block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    With{" "}
                  </motion.span>
                  <motion.span 
                    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-purple-400"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    Cinematic Impact
                  </motion.span>
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                Transform your technical proposals into compelling visual stories that win contracts
              </motion.p>
              
              <motion.div
                className="flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <InteractiveButton color={colorSchemes[0]}>
                  Explore Templates
                </InteractiveButton>
                
                <InteractiveButton 
                  color={{ 
                    bg: "bg-white bg-opacity-20", 
                    hover: "hover:bg-opacity-30",
                    text: "text-white"
                  }}
                >
                  Watch Demo
                </InteractiveButton>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Floating 3D document */}
        <motion.div
          className="absolute right-10 bottom-10 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
          initial={{ opacity: 0, y: 100, rotate: 15 }}
          animate={{ opacity: 0.8, y: 0, rotate: -5 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          whileHover={{ 
            rotate: 0,
            y: -10,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <div className="relative w-full h-full">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-2xl"
              animate={{
                rotateY: [0, 5, 0],
                rotateX: [0, -5, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm flex items-center justify-center text-white text-4xl"
              animate={{
                y: [0, -5, 0],
                x: [-5, 0, -5]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              📄
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What is a Technical Bid? - Parallax Section */}
      <AnimatedSection delay={0.2}>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-blue-50 p-12 mb-20">
          <ParticleBackground count={20} />
          
          <div className="relative z-10">
            <motion.div 
              className="inline-flex items-center bg-white text-blue-800 px-6 py-3 rounded-full mb-8 shadow-sm"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
              }}
            >
              <span className="text-2xl mr-3">📋</span>
              <span className="font-medium">Technical Bid Definition</span>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2 
                  className="text-4xl font-bold text-gray-900 mb-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Strategic Advantage</span> in Competitive Bidding
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-700 mb-8 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  A technical bid is more than documentation—it's a visual narrative of your capabilities, 
                  demonstrating technical excellence, ISO compliance (9001, 21500, 31000), and your unique 
                  value proposition through compelling data visualization and interactive elements.
                </motion.p>
                
                <motion.div 
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <h3 className="font-semibold text-xl mb-6 text-blue-700">Core Components:</h3>
                  <ul className="space-y-4">
                    {[
                      "Interactive technical methodology visualization",
                      "ISO-aligned quality management dashboard",
                      "Animated risk assessment framework",
                      "3D staff competency matrix",
                      "Regulatory compliance proof with hover details",
                      "Interactive project timeline with milestones"
                    ].map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-blue-500 mr-3 text-xl transition-transform group-hover:scale-125">•</span>
                        <span className="text-gray-800 group-hover:text-blue-600 transition-colors">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              <div className="relative h-full">
                {/* Animated timeline visualization */}
                <motion.div 
                  className="sticky top-24"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-semibold mb-8 text-center">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Interactive Bid Timeline
                      </span>
                    </h3>
                    
                    <div className="relative">
                      {/* Animated timeline line */}
                      <motion.div 
                        className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 to-purple-300"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                      />
                      
                      {[
                        { step: "1", title: "RFP Analysis", icon: "🔍", duration: "1-3 days", color: "bg-blue-600" },
                        { step: "2", title: "Solution Design", icon: "✏️", duration: "2-5 days", color: "bg-purple-600" },
                        { step: "3", title: "Draft Creation", icon: "📝", duration: "3-7 days", color: "bg-amber-500" },
                        { step: "4", title: "Review & Refine", icon: "🔎", duration: "2-4 days", color: "bg-emerald-600" },
                        { step: "5", title: "Final Compliance", icon: "✅", duration: "1-2 days", color: "bg-rose-600" },
                        { step: "6", title: "Submission", icon: "📤", duration: "1 day", color: "bg-indigo-600" }
                      ].map((item, i) => (
                        <motion.div 
                          key={i} 
                          className="relative pl-10 md:pl-0 mb-10 last:mb-0 group"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.03,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <div className="md:flex items-start">
                            <div className="hidden md:flex w-16 justify-center">
                              <motion.div 
                                className={`w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform`}
                                whileHover={{ 
                                  scale: 1.2,
                                  rotate: 360,
                                  transition: { type: "spring", stiffness: 300 }
                                }}
                              >
                                {item.step}
                              </motion.div>
                            </div>
                            
                            <div className="md:ml-6 bg-white p-6 rounded-xl border border-gray-200 shadow-xs flex-1 group-hover:shadow-sm transition-shadow">
                              <div className="flex items-center mb-2">
                                <span className="text-2xl mr-3 group-hover:text-3xl transition-all">{item.icon}</span>
                                <h4 className="text-lg font-medium group-hover:text-xl transition-all">{item.title}</h4>
                              </div>
                              <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">{item.duration}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Technical Bids Matter - Card Grid */}
      <AnimatedSection delay={0.3} threshold={0.05}>
        <div className="text-center mb-16">
          <motion.div 
            className="inline-block mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-full">
              <div className="bg-white px-8 py-2 rounded-full">
                <p className="text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Strategic Value Proposition
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Technical Bids</span> Win Projects
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            More than documentation - they're your competitive advantage visualized
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🥇",
              title: "Competitive Differentiation",
              description: "Interactive showcases of unique capabilities with ISO-aligned processes",
              color: colorSchemes[0]
            },
            {
              icon: "📡",
              title: "Visual Communication",
              description: "Animated alignment of project goals and client expectations",
              color: colorSchemes[1]
            },
            {
              icon: "🧾",
              title: "Professional Storytelling",
              description: "Cinematic presentation of your expertise and approach",
              color: colorSchemes[2]
            },
            {
              icon: "⚠️",
              title: "Risk Visualization",
              description: "Interactive ISO 31000-based risk matrices and mitigation plans",
              color: colorSchemes[3]
            },
            {
              icon: "✅",
              title: "Compliance Dashboard",
              description: "Visual proof of all legal and ISO requirements met",
              color: colorSchemes[4]
            },
            {
              icon: "📈",
              title: "Growth Engine",
              description: "Data-driven proposals that convert tenders to contracts",
              color: colorSchemes[5]
            }
          ].map((item, i) => (
            <InteractiveCard 
              key={i}
              icon={item.icon}
              title={item.title}
              description={item.description}
              color={item.color}
              index={i}
            />
          ))}
        </div>
      </AnimatedSection>

      {/* Industry Applications - Parallax Section */}
      <AnimatedSection delay={0.4}>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white p-12 mb-20">
          {/* Animated background elements */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 30%), radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.4) 0%, transparent 30%)',
              backgroundSize: 'cover'
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
          
          <ParticleBackground count={30} />
          
          <div className="relative z-10">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
                Industry-Specific
              </span> Bid Solutions
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { 
                  icon: "🏗️", 
                  title: "Construction", 
                  description: "EPC, Infrastructure",
                  stats: "87% win rate"
                },
                { 
                  icon: "💻", 
                  title: "Technology", 
                  description: "Software, IT Services",
                  stats: "92% compliance"
                },
                { 
                  icon: "🏭", 
                  title: "Manufacturing", 
                  description: "Industrial Automation",
                  stats: "85% success"
                },
                { 
                  icon: "💼", 
                  title: "Consulting", 
                  description: "Management, ISO",
                  stats: "94% approval"
                },
                { 
                  icon: "🌿", 
                  title: "Energy", 
                  description: "Renewables, Utilities",
                  stats: "89% impact"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm border border-white border-opacity-20 hover:border-opacity-40 transition-all relative overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderColor: "rgba(255,255,255,0.4)"
                  }}
                >
                  <motion.div 
                    className="text-5xl mb-6 group-hover:text-6xl transition-all duration-300"
                    whileHover={{ 
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-80 mb-4">{item.description}</p>
                  
                  <motion.div
                    className="text-xs font-mono opacity-60 group-hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {item.stats}
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA - Cinematic Section */}
     
    </div>
  );
};

export default TechnicalBidComponent;