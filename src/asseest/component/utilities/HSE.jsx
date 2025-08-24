import React from "react";
import { FaShieldAlt, FaLeaf, FaUserTie, FaChartLine, FaCertificate, FaPlayCircle } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import hseImage from "../../img/health&safety.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

// Section wrapper component
const AnimatedSection = ({ children, className = "" }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Card component with hover effects
const AnimatedCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ 
        y: -15,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// List item with staggered animation
const AnimatedListItem = ({ children, index, className = "" }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.2, 0.65, 0.3, 0.9]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const HSEAwarenessTraining = () => {
    return (
        <main>
        <div className="w-full mx-auto px-4 py-8 font-['Arial_Narrow'] bg-[#f9f5f0]">
            {/* Hero Banner */}
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-4 md:mb-8 lg:mb-16 w-full max-w-full overflow-hidden"
            >
                <img
                    src={hseImage}
                    alt="HSE Awareness Training"
                    title="HSE Awareness Training"
                    className="w-full h-auto object-cover"
                />
            </motion.div>

            {/* Intro Section */}
            <AnimatedSection className="max-w-6xl mx-auto my-16 p-8 bg-white rounded-xl shadow-lg relative before:absolute before:-top-4 before:-left-4 before:w-24 before:h-24 before:bg-[#8B5A2B] before:rounded-lg before:z-[-1] after:absolute after:-bottom-4 after:-right-4 after:w-24 after:h-24 after:bg-yellow-400 after:rounded-lg after:z-[-1]">
                <p className="text-xl text-gray-700 leading-relaxed">
                    A safe workplace and a clean environment are not just legal requirements—they are the backbone of a responsible and successful organization. <span className="font-bold text-[#8B5A2B]">HSE Awareness Training</span> gives you the skills to protect people, safeguard the planet, and comply with global standards.
                </p>
            </AnimatedSection>

            {/* Standards Section */}
            <AnimatedSection className="max-w-6xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-[#8B5A2B] mb-12 text-center relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-yellow-400">
                    Why These Standards Matter
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            icon: <FaLeaf className="text-4xl text-green-600" />,
                            title: "ISO 14001:2015",
                            desc: "Helps organizations manage waste, reduce pollution, save resources, and adopt eco-friendly practices."
                        },
                        {
                            icon: <FaShieldAlt className="text-4xl text-blue-600" />,
                            title: "ISO 45001:2018",
                            desc: "Focuses on workplace safety, preventing accidents, and creating a healthier environment for employees."
                        }
                    ].map((item, index) => (
                        <AnimatedCard key={index} className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 border-l-4 border-yellow-400">
                            <div className="flex items-center mb-4">
                                <div className="mr-4 p-3 bg-[#f9f5f0] rounded-full">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-[#8B5A2B]">{item.title}</h3>
                            </div>
                            <p className="text-gray-700">{item.desc}</p>
                        </AnimatedCard>
                    ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, threshold: 0.1 }}
                  className="mt-12 bg-[#fff8e1] p-6 rounded-lg border border-yellow-200 flex items-start"
                >
                    <GiProgression className="text-3xl text-[#8B5A2B] mr-4 mt-1" />
                    <p className="text-gray-700">
                        Both follow the <span className="font-bold text-[#8B5A2B]">Plan-Do-Check-Act (PDCA) cycle</span>, making them practical, systematic, and easy to integrate.
                    </p>
                </motion.div>
            </AnimatedSection>

            {/* Benefits Section */}
            <AnimatedSection className="max-w-6xl mx-auto mb-20 bg-[#8B5A2B] p-10 rounded-xl text-white">
                <h2 className="text-3xl font-bold text-yellow-300 mb-12 text-center relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-yellow-400">
                    Benefits of HSE Awareness Training
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { icon: "🛡️", text: "Stronger Safety Culture – Reduce workplace accidents, injuries, and risks." },
                        { icon: "🌱", text: "Sustainability Commitment – Protect the environment with structured eco-friendly practices." },
                        { icon: "⚖️", text: "Legal Compliance – Stay aligned with local and international HSE regulations." },
                        { icon: "💼", text: "Operational Efficiency – Cut costs by preventing downtime, fines, and resource waste." },
                        { icon: "📜", text: "Certification Ready – Gain the knowledge to prepare for ISO 14001 & ISO 45001 certification." },
                        { icon: "📈", text: "Competitive Advantage – Demonstrate commitment to sustainability and safety to clients." }
                    ].map((item, index) => (
                        <AnimatedListItem 
                          key={index} 
                          index={index}
                          className="flex items-start bg-white/10 p-5 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                        >
                            <span className="text-2xl mr-4">{item.icon}</span>
                            <div>
                                <span className="font-bold text-yellow-300">{item.text.split('–')[0]}</span>
                                <span>{item.text.split('–')[1]}</span>
                            </div>
                        </AnimatedListItem>
                    ))}
                </div>
            </AnimatedSection>

            {/* Audience Section */}
            <AnimatedSection className="max-w-6xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-[#8B5A2B] mb-12 text-center relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-yellow-400">
                    Who Should Join?
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { icon: <FaUserTie className="text-yellow-600" />, text: "HSE Managers and Coordinators" },
                        { icon: <FaShieldAlt className="text-yellow-600" />, text: "Safety Officers & Environmental Officers" },
                        { icon: <RiTeamFill className="text-yellow-600" />, text: "Business Leaders & Decision-Makers" },
                        { icon: <FaChartLine className="text-yellow-600" />, text: "Employees with safety or environmental duties" },
                        { icon: <FaCertificate className="text-yellow-600" />, text: "Consultants and Auditors in HSE" },
                        { icon: <FaLeaf className="text-yellow-600" />, text: "Sustainability Champions in Organizations" }
                    ].map((item, index) => (
                        <AnimatedListItem 
                          key={index} 
                          index={index}
                          className="flex items-center bg-white p-4 rounded-lg shadow-sm transition-all hover:border-l-4 hover:border-yellow-400"
                        >
                            <span className="mr-4 text-xl">{item.icon}</span>
                            <span>{item.text}</span>
                        </AnimatedListItem>
                    ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true, threshold: 0.1 }}
                  className="mt-10 bg-[#f9f5f0] p-6 rounded-lg border border-[#8B5A2B]/30"
                >
                    <p className="text-center text-lg text-[#8B5A2B]">
                        Whether you are starting your career or leading an organization, this training provides the foundation for <span className="font-bold">world-class HSE practices</span>.
                    </p>
                </motion.div>
            </AnimatedSection>

            {/* How to Apply Section */}
            <AnimatedSection className="max-w-6xl mx-auto mb-20 bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-[#8B5A2B] mb-8 text-center relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-yellow-400">
                    How Can You Apply?
                </h2>
                
                <div className="space-y-6">
                    <AnimatedCard className="bg-[#f9f5f0] p-6 rounded-lg border-l-4 border-[#8B5A2B]">
                        <p className="text-gray-700 mb-6">Applying the knowledge from this HSE awareness training course involves the following steps:</p>
                        
                        <ol className="space-y-4 list-decimal pl-6">
                            {[
                                "Learn the ISO Framework: Understand the high-level structure and framework of ISO 14001:2015 and ISO 45001:2018 standards through the course.",
                                "Assess Current Systems: Conduct an internal assessment to identify gaps in your current HSE management systems in relation to ISO standards.",
                                "Implement the Plan-Do-Check-Act Cycle: Use the PDCA model to establish a process for continuous improvement in your organization's HSE practices.",
                                "Create and Maintain Documentation: Learn how to create and manage documented information in line with ISO standards, including hazard identification and risk assessment processes.",
                                "Prepare for Certification: Familiarize yourself with the ISO 14001 and ISO 45001 registration process and the steps required for certification, ensuring your organization is ready for an external audit."
                            ].map((item, index) => (
                                <motion.li 
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                  viewport={{ once: true, threshold: 0.1 }}
                                  className="text-gray-700"
                                >
                                    <span className="font-semibold">{item.split(':')[0]}:</span>
                                    {item.split(':')[1]}
                                </motion.li>
                            ))}
                        </ol>
                    </AnimatedCard>
                </div>
            </AnimatedSection>

            {/* Video Section */}
            <AnimatedSection className="max-w-4xl mx-auto mb-20 bg-gradient-to-br from-[#8B5A2B] to-[#5D3A1A] p-1 rounded-xl">
                <div className="bg-white p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-[#8B5A2B] mb-6 text-center relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-yellow-400">
                        Video Guide
                    </h2>
                    <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
                        Watch this video to see how ISO 14001:2015 & ISO 45001:2018 improve safety and sustainability in real workplaces:
                    </p>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden relative group cursor-pointer"
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <motion.div
                              animate={{
                                y: [0, (Math.random() - 0.5) * 10],
                                x: [0, (Math.random() - 0.5) * 5],
                                opacity: [0.8, 1, 0.8],
                              }}
                              transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear"
                              }}
                            >
                                <FaPlayCircle className="text-6xl text-[#8B5A2B]" />
                            </motion.div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div 
                              animate={{ 
                                scale: [1, 1.5, 1],
                                opacity: [0.2, 0.1, 0.2]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="h-20 w-20 rounded-full bg-yellow-400"
                            ></motion.div>
                        </div>
                    </motion.div>
                </div>
            </AnimatedSection>

            {/* FAQ Section */}
            <AnimatedSection className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg mb-20">
                <h2 className="text-3xl font-bold text-[#8B5A2B] mb-10 text-center relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-yellow-400">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                    {[
                        {
                            question: "What is HSE Awareness Training?",
                            answer: "It is a course that teaches employees and managers how to manage Health, Safety, and Environmental systems using international ISO standards."
                        },
                        {
                            question: "Why are ISO 14001 and ISO 45001 important?",
                            answer: "They help organizations reduce risks, protect employees, and manage environmental responsibilities in a structured, compliant way."
                        },
                        {
                            question: "Do I need prior experience for this training?",
                            answer: "No. This training is suitable for beginners as well as experienced HSE professionals."
                        },
                        {
                            question: "Will this help in getting ISO certification?",
                            answer: "Yes. It prepares organizations for ISO 14001 and ISO 45001 certification audits."
                        },
                        {
                            question: "Who benefits the most from this training?",
                            answer: "Healthcare, manufacturing, construction, energy, and service-based organizations benefit significantly, as well as individual HSE professionals."
                        }
                    ].map((faq, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true, threshold: 0.1 }}
                          className="border-b border-[#8B5A2B]/20 pb-6 last:border-0 group"
                        >
                            <h3 className="text-xl font-semibold text-[#8B5A2B] mb-2 flex items-center">
                                <motion.span 
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                  className="w-3 h-3 bg-yellow-400 rounded-full mr-3"
                                ></motion.span>
                                {faq.question}
                            </h3>
                            <p className="text-gray-700 pl-6">{faq.answer}</p>
                        </motion.div>
                    ))}
                </div>
            </AnimatedSection>
        </div>
        </main>
    );
};

export default HSEAwarenessTraining;