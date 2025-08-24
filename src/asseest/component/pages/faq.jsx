// components/Faq.js
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { faqdata } from "../utilities/Array/data";

// Main animation settings
const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      delay: 0.2,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  },
  hidden: { 
    opacity: 0, 
    y: 80,
    transition: { duration: 0.6 }
  }
};

export const Faq = () => {
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timeout);
    }, []);

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="flex flex-col items-center gap-4">
                    <motion.div 
                        className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"
                        animate={{
                            rotate: 360
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    ></motion.div>
                    <motion.p 
                        className="text-xl font-semibold text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Loading FAQs...
                    </motion.p>
                    <motion.div
                        className="absolute w-2 h-2 bg-indigo-500 rounded-full"
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
                </div>
            </div>
        );
    }

    return (
        <motion.div 
            className="faq-page max-w-4xl mx-auto px-4 py-8"
            initial="hidden"
            animate="visible"
            variants={variants}
        >
            <motion.h1 
                className="text-3xl font-bold text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                ❓ Frequently Asked Questions
            </motion.h1>
            
            <div className="space-y-4">
                {faqdata.map(({ question, answer, icon: Icon }, index) => (
                    <motion.div
                        key={index}
                        className="border border-gray-300 rounded-xl p-4 shadow-sm bg-white transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: [0.2, 0.65, 0.3, 0.9]
                        }}
                        whileHover={{ 
                            y: -15,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.button
                            className="flex items-center justify-between w-full"
                            onClick={() => toggle(index)}
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
                            <div className="flex items-center gap-3 text-left text-lg font-semibold">
                                <Icon className="w-5 h-5 text-indigo-600" />
                                {question}
                            </div>
                            <span className="text-gray-500">
                                {activeIndex === index ? "−" : "+"}
                            </span>
                        </motion.button>

                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    className="mt-3 text-gray-700 overflow-hidden"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ 
                                        height: "auto", 
                                        opacity: 1,
                                        transition: {
                                            height: {
                                                duration: 0.4,
                                            },
                                            opacity: {
                                                duration: 0.3,
                                                delay: 0.1,
                                            }
                                        }
                                    }}
                                    exit={{ 
                                        height: 0, 
                                        opacity: 0,
                                        transition: {
                                            height: {
                                                duration: 0.3,
                                            },
                                            opacity: {
                                                duration: 0.2,
                                            }
                                        }
                                    }}
                                >
                                    <p className="pt-2">{answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};