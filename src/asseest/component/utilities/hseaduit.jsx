import React, { useState } from 'react';
import {
  ShieldCheck, Users, ClipboardList, TrendingUp,
  Video, HelpCircle, ChevronDown, Search, AlertTriangle,
  HardHat, Factory, Hospital, Droplet, CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

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

const HSEAudits = () => {
  // Helper component for section headers
  const SectionHeader = ({ icon, title, subtitle }) => {
    const Icon = icon;
    return (
      <motion.div
        className="mb-8 text-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.1 }}
        variants={variants}
      >
        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-amber-100 rounded-full">
          <Icon className="w-8 h-8 text-amber-700" />
        </div>
        <h2 className="text-3xl font-bold text-amber-900 mb-2 relative inline-block">
          {title}
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-amber-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
        </h2>
        {subtitle && <p className="text-lg text-amber-700 max-w-2xl mx-auto relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-amber-200 after:rounded-full">{subtitle}</p>}
      </motion.div>
    );
  };

  // FAQ Item Component
  const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <motion.div
        className="border-b border-amber-200 py-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.1 }}
        variants={variants}
      >
        <motion.button
          className="w-full flex justify-between items-center text-left font-semibold text-lg text-amber-800 hover:text-amber-900"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{
            x: 5,
            transition: { duration: 0.2 }
          }}
        >
          <span>{question}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
        {isOpen && (
          <motion.div
            className="mt-3 text-amber-700 pl-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </motion.div>
    );
  };

  // Industry Tag Component
  const IndustryTag = ({ icon, name }) => {
    const Icon = icon;
    return (
      <motion.div
        className="flex items-center bg-amber-100 px-4 py-3 rounded-lg hover:bg-amber-200 transition-colors"
        whileHover={{
          y: -5,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          transition: { duration: 0.3 }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.1 }}
        variants={variants}
      >
        <Icon className="w-5 h-5 mr-2 text-amber-700" />
        <span className="font-medium text-amber-800">{name}</span>
      </motion.div>
    );
  };

  // Audit Step Component
  const AuditStep = ({ number, title, description }) => (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow group"
      whileHover={{
        y: -15,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3 }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 0.1 }}
      variants={variants}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 bg-amber-100 w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-amber-200 transition-colors">
          <span className="font-bold text-amber-800">{number}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">{title}</h3>
          <p className="text-amber-700">{description}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Style tag for custom font and effects */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Arial+Narrow:wght@400;700&display=swap');
        body {
          font-family: 'Arial Narrow', sans-serif;
        }
        .hero-pattern {
          background-image: radial-gradient(#f9f5f0 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .hero-image::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to bottom, rgba(254,243,199,0) 0%, rgba(254,243,199,1) 100%);
          z-index: 1;
        }
        .highlight-text::after {
          content: '';
          position: absolute;
          bottom: 0.1em;
          left: 0;
          right: 0;
          height: 0.4em;
          background-color: rgba(253,230,138,0.5);
          z-index: -1;
          transform: rotate(-1deg);
        }
      `}</style>

      <div className="hero-pattern bg-amber-50 text-amber-900">
        {/* Hero Image Section */}
        <main>
          <motion.div
            className="hero-image relative h-96 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              alt="Safety inspection at workplace"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1600x600/f9f5f0/8B5A2B?text=Safety+Inspection'; }}
            />
          </motion.div>

          {/* Content Section */}
          <div className="content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-20 relative z-10">
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, threshold: 0.1 }}
              variants={variants}
            >
              {/* What is an HSE Audit? Section */}
              <section className="px-6 py-12 sm:px-12 md:px-16">
                <SectionHeader
                  icon={Search}
                  title="What is an HSE Audit?"
                  subtitle="A systematic evaluation of your organization's health, safety, and environmental management systems"
                />
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, threshold: 0.1 }}
                    variants={variants}
                  >
                    <p className="text-lg text-amber-800 mb-6 relative highlight-text">
                      HSE audits provide a structured approach to assessing workplace safety, identifying risks, and ensuring compliance with regulations. They serve as a critical tool for continuous improvement in occupational health and safety.
                    </p>
                    <motion.div
                      className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500 relative overflow-hidden"
                      whileHover={{
                        y: -5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.div
                        className="absolute -right-4 -top-4 w-24 h-24 bg-amber-100 rounded-full opacity-20"
                        animate={{
                          y: [0, (Math.random() - 0.5) * 20],
                          x: [0, (Math.random() - 0.5) * 10],
                          opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                          duration: Math.random() * 10 + 10,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "linear"
                        }}
                      />
                      <h3 className="font-bold text-xl text-amber-900 mb-3">Key Objectives:</h3>
                      <ul className="space-y-3">
                        {[
                          "Evaluate safety procedure effectiveness",
                          "Verify regulatory compliance",
                          "Identify potential hazards",
                          "Measure performance against standards",
                          "Recommend corrective actions"
                        ].map((item, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, threshold: 0.1 }}
                            variants={{
                              ...variants,
                              transition: {
                                duration: 0.8,
                                delay: index * 0.1,
                                ease: [0.2, 0.65, 0.3, 0.9]
                              }
                            }}
                          >
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-amber-800">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="bg-amber-50 rounded-xl overflow-hidden relative group"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, threshold: 0.1 }}
                    variants={variants}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Safety documents"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-amber-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </motion.div>
                </div>
              </section>

              {/* Benefits Section */}
              <section className="bg-amber-700 px-6 py-12 sm:px-12 md:px-16">
                <SectionHeader
                  icon={TrendingUp}
                  title="Why HSE Audits Matter"
                  subtitle="The measurable benefits of regular safety audits for your organization"
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: ShieldCheck,
                      title: "Risk Reduction",
                      desc: "Identify and mitigate potential hazards before incidents occur"
                    },
                    {
                      icon: AlertTriangle,
                      title: "Compliance",
                      desc: "Ensure adherence to local and international regulations"
                    },
                    {
                      icon: Users,
                      title: "Culture",
                      desc: "Foster a proactive safety mindset among employees"
                    },
                    {
                      icon: TrendingUp,
                      title: "Performance",
                      desc: "Improve operational efficiency through safer processes"
                    }
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
                      whileHover={{
                        y: -15,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                        transition: { duration: 0.3 }
                      }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, threshold: 0.1 }}
                      variants={{
                        ...variants,
                        transition: {
                          duration: 0.8,
                          delay: index * 0.1,
                          ease: [0.2, 0.65, 0.3, 0.9]
                        }
                      }}
                    >
                      <motion.div
                        className="absolute -right-6 -bottom-6 w-24 h-24 bg-amber-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        animate={{
                          y: [0, (Math.random() - 0.5) * 20],
                          x: [0, (Math.random() - 0.5) * 10],
                          opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                          duration: Math.random() * 10 + 10,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "linear"
                        }}
                      />
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                        <benefit.icon className="w-6 h-6 text-amber-700" />
                      </div>
                      <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">{benefit.title}</h3>
                      <p className="text-amber-700">{benefit.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Industries Section */}
              <section className="px-6 py-12 sm:px-12 md:px-16">
                <SectionHeader
                  icon={Factory}
                  title="Key Industries"
                  subtitle="These sectors benefit most from regular HSE audits"
                />
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <IndustryTag icon={HardHat} name="Construction" />
                  <IndustryTag icon={Factory} name="Manufacturing" />
                  <IndustryTag icon={Droplet} name="Oil & Gas" />
                  <IndustryTag icon={Hospital} name="Healthcare" />
                  <IndustryTag icon={ShieldCheck} name="Utilities" />
                </div>
              </section>

              {/* Audit Process Section */}
              <section className="bg-amber-50 px-6 py-12 sm:px-12 md:px-16">
                <SectionHeader
                  icon={ClipboardList}
                  title="The Audit Process"
                  subtitle="Our proven 6-step methodology for effective audits"
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AuditStep
                    number="1"
                    title="Planning"
                    description="Define scope, objectives, and audit criteria based on your operations"
                  />
                  <AuditStep
                    number="2"
                    title="Document Review"
                    description="Examine policies, procedures, and previous audit reports"
                  />
                  <AuditStep
                    number="3"
                    title="Fieldwork"
                    description="On-site inspections, employee interviews, and process observations"
                  />
                  <AuditStep
                    number="4"
                    title="Analysis"
                    description="Evaluate findings against regulatory requirements and best practices"
                  />
                  <AuditStep
                    number="5"
                    title="Reporting"
                    description="Document findings with prioritized recommendations"
                  />
                  <AuditStep
                    number="6"
                    title="Follow-up"
                    description="Verify implementation of corrective actions"
                  />
                </div>
              </section>

              {/* Visual Resources Section */}
              <section className="px-6 py-12 sm:px-12 md:px-16">
                <SectionHeader
                  icon={Video}
                  title="Learning Resources"
                  subtitle="Watch our experts explain HSE audit best practices"
                />
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    className="bg-amber-100 rounded-xl overflow-hidden aspect-w-16 aspect-h-9 relative group"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)",
                      transition: { duration: 0.3 }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, threshold: 0.1 }}
                    variants={variants}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center p-6 relative z-10">
                        <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-300 transition-colors">
                          <Video className="w-8 h-8 text-amber-700" />
                        </div>
                        <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">Conducting Effective Audits</h3>
                        <p className="text-amber-700 mb-4">15 min tutorial</p>
                        <motion.button
                          className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded-lg transition-colors"
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
                          Watch Now
                        </motion.button>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-amber-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </motion.div>
                  <motion.div
                    className="bg-amber-100 rounded-xl overflow-hidden aspect-w-16 aspect-h-9 relative group"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)",
                      transition: { duration: 0.3 }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, threshold: 0.1 }}
                    variants={variants}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center p-6 relative z-10">
                        <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-300 transition-colors">
                          <ClipboardList className="w-8 h-8 text-amber-700" />
                        </div>
                        <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">Audit Checklist Guide</h3>
                        <p className="text-amber-700 mb-4">Downloadable PDF</p>
                        <motion.button
                          className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded-lg transition-colors"
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
                          Download
                        </motion.button>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-amber-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </motion.div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="px-6 py-12 sm:px-12 md:px-16 bg-white">
                <SectionHeader
                  icon={HelpCircle}
                  title="Frequently Asked Questions"
                />
                <div className="max-w-3xl mx-auto space-y-4">
                  <FaqItem
                    question="How often should we conduct HSE audits?"
                    answer="Frequency depends on your industry risk level. Low-risk offices might audit annually, while high-risk industries like construction should conduct quarterly audits with monthly mini-audits of critical areas."
                  />
                  <FaqItem
                    question="What's the difference between internal and external audits?"
                    answer="Internal audits are conducted by your own trained staff and focus on continuous improvement. External audits are performed by independent certified auditors and provide objective compliance verification, often required for certifications."
                  />
                  <FaqItem
                    question="How long does a typical audit take?"
                    answer="Duration varies by facility size and complexity. A small office might require 1-2 days, while a large manufacturing plant could need 1-2 weeks for a comprehensive audit."
                  />
                  <FaqItem
                    question="What qualifications should auditors have?"
                    answer="Auditors should have formal training in HSE auditing, knowledge of relevant regulations, and ideally industry-specific experience. Certifications like ISO 45001 Lead Auditor add credibility."
                  />
                </div>
              </section>

              {/* CTA Section */}

            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
};

export default HSEAudits;