import React from "react";
import { motion } from "framer-motion";
import {
    ClipboardList,
    ShieldCheck,
    FileText,
    ListChecks,
    Users,
    Factory,
    HeartPulse,
    Utensils,
    Server,
    Truck,
    Zap,
    School,
    CalendarCheck,
    AlertCircle,
    CheckCircle,
    Eye,
    TrendingUp,
    LayoutGrid,
    BookOpen,
    RefreshCw,
    ChevronRight,
    ArrowRight,
    BadgeCheck,
    BarChart2,
    Clock,
    Lock,
    Globe,
    Circle
} from "lucide-react";

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

// Container variants for staggered animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Item variants for staggered animations
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9]
    } 
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9]
    } 
  }
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9]
    } 
  }
};

const ISOAuditGuide = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans bg-gray-50">
            {/* Hero Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, threshold: 0.1 }}
                variants={variants}
                className="text-center mb-20 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 text-white shadow-2xl overflow-hidden relative"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"></div>
                {/* Animated particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
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

                <motion.div variants={variants} className="relative z-10">
                    <motion.div 
                      variants={variants}
                      className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
                    >
                        <BadgeCheck className="mr-2" />
                        <span>ISO Compliance Guide</span>
                    </motion.div>
                    <motion.h2 variants={variants} className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Master Your <span className="text-yellow-300">ISO Audits</span> <br />With Confidence
                    </motion.h2>
                    <motion.p variants={variants} className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
                        The Complete Framework for ISO 9001, 45001, 14001 & 22000 Compliance
                    </motion.p>

                    <motion.div variants={variants} className="flex flex-wrap justify-center gap-4">
                        <motion.button
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
                            className="flex items-center bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl shadow-lg"
                        >
                            <ClipboardList className="mr-2" />
                            Get Started
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </motion.button>
                        <motion.button
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
                            className="flex items-center bg-transparent border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-xl"
                        >
                            <BookOpen className="mr-2" />
                            Learn More
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* What is ISO Audit */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, threshold: 0.1 }}
                variants={variants}
                className="mb-24"
            >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <motion.div variants={variants} className="md:w-1/2">
                        <div className="flex items-center mb-8">
                            <motion.div 
                              whileHover={{ scale: 1.05 }}
                              className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-xl shadow-lg mr-4"
                            >
                                <FileText className="text-white w-6 h-6" />
                            </motion.div>
                            <h2 className="text-2xl font-bold text-gray-800">Understanding ISO Audits</h2>
                        </div>

                        <motion.p variants={variants} className="text-gray-700 mb-6 text-lg leading-relaxed">
                            An <span className="font-semibold text-blue-600">ISO audit</span> is a systematic, independent process that evaluates your organization's compliance with international standards through documented evidence and process verification.
                        </motion.p>

                        <motion.div variants={container} className="space-y-4">
                            {[
                                "Verification of process effectiveness",
                                "Identification of improvement opportunities",
                                "Assessment of regulatory compliance",
                                "Evaluation of risk management practices",
                                "Validation of continuous improvement"
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={item}
                                    whileHover={{ 
                                      y: -5,
                                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                      transition: { duration: 0.3 }
                                    }}
                                    className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                                >
                                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">{point}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={variants}
                        whileHover={{ 
                          y: -5,
                          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                          transition: { duration: 0.3 }
                        }}
                        className="md:w-1/2 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
                    >
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                            <div className="flex items-center">
                                <ShieldCheck className="w-8 h-8 mr-3" />
                                <h3 className="text-xl font-bold">Audit Benefits</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: <TrendingUp className="w-6 h-6 text-blue-600" />, text: "Performance Improvement" },
                                    { icon: <Lock className="w-6 h-6 text-green-600" />, text: "Risk Mitigation" },
                                    { icon: <Globe className="w-6 h-6 text-purple-600" />, text: "Regulatory Compliance" },
                                    { icon: <Users className="w-6 h-6 text-amber-600" />, text: "Stakeholder Confidence" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ 
                                          y: -8,
                                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                                          transition: { duration: 0.3 }
                                        }}
                                        className="bg-gray-50 p-4 rounded-lg text-center"
                                    >
                                        <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-sm">
                                            {item.icon}
                                        </div>
                                        <p className="font-medium text-gray-700">{item.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Audit Process */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, threshold: 0.1 }}
                variants={variants}
                className="mb-24 bg-white rounded-3xl shadow-lg p-8 border border-gray-100"
            >
                <motion.div variants={variants} className="text-center mb-12">
                    <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
                        <ListChecks className="mr-2" />
                        <span>Systematic Approach</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">The ISO Audit Process</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A structured methodology to ensure comprehensive evaluation and continuous improvement.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {[
                        {
                            step: 1,
                            title: "Planning Phase",
                            description: "Define scope, objectives, and criteria",
                            icon: <CalendarCheck className="w-6 h-6 text-blue-600" />,
                            color: "bg-blue-100"
                        },
                        {
                            step: 2,
                            title: "Preparation",
                            description: "Review documents and prepare checklists",
                            icon: <FileText className="w-6 h-6 text-indigo-600" />,
                            color: "bg-indigo-100"
                        },
                        {
                            step: 3,
                            title: "Opening Meeting",
                            description: "Align expectations with auditees",
                            icon: <Users className="w-6 h-6 text-purple-600" />,
                            color: "bg-purple-100"
                        },
                        {
                            step: 4,
                            title: "Execution",
                            description: "Conduct interviews and collect evidence",
                            icon: <Eye className="w-6 h-6 text-amber-600" />,
                            color: "bg-amber-100"
                        },
                        {
                            step: 5,
                            title: "Findings Analysis",
                            description: "Identify non-conformities",
                            icon: <AlertCircle className="w-6 h-6 text-red-600" />,
                            color: "bg-red-100"
                        },
                        {
                            step: 6,
                            title: "Closing Meeting",
                            description: "Present findings and agree on actions",
                            icon: <CheckCircle className="w-6 h-6 text-green-600" />,
                            color: "bg-green-100"
                        },
                        {
                            step: 7,
                            title: "Reporting",
                            description: "Document comprehensive audit report",
                            icon: <ClipboardList className="w-6 h-6 text-teal-600" />,
                            color: "bg-teal-100"
                        },
                        {
                            step: 8,
                            title: "Follow-up",
                            description: "Verify corrective actions",
                            icon: <RefreshCw className="w-6 h-6 text-cyan-600" />,
                            color: "bg-cyan-100"
                        }
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            whileHover={{ 
                              y: -10, 
                              scale: 1.02,
                              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                              transition: { duration: 0.3 }
                            }}
                            className={`${step.color} p-6 rounded-2xl shadow-md transition-all`}
                        >
                            <div className="flex items-center mb-4">
                                <div className="bg-white p-2 rounded-lg shadow-inner mr-3">
                                    {step.icon}
                                </div>
                                <div className="bg-black/10 text-gray-800 text-xs font-bold px-2 py-1 rounded-full">
                                    Step {step.step}
                                </div>
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-800">{step.title}</h3>
                            <p className="text-gray-700">{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Audit Types */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, threshold: 0.1 }}
                variants={variants}
                className="mb-24"
            >
                <motion.div variants={variants} className="text-center mb-12">
                    <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
                        <LayoutGrid className="mr-2" />
                        <span>Audit Variations</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Types of ISO Audits</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Different audit approaches tailored to specific organizational needs and requirements.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {[
                        {
                            type: "Internal Audits",
                            description: "First-party evaluations conducted by your own organization to assess compliance and identify improvement areas.",
                            icon: <Users className="w-8 h-8 text-blue-600" />,
                            frequency: "6-12 months",
                            color: "border-blue-200"
                        },
                        {
                            type: "Supplier Audits",
                            description: "Second-party assessments performed by customers on their vendors to ensure quality standards are met.",
                            icon: <FileText className="w-8 h-8 text-green-600" />,
                            frequency: "As per contract",
                            color: "border-green-200"
                        },
                        {
                            type: "Certification Audits",
                            description: "Third-party evaluations by accredited bodies to grant official ISO certification.",
                            icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
                            frequency: "Every 3 years",
                            color: "border-purple-200"
                        }
                    ].map((audit, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            whileHover={{ 
                              y: -8,
                              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                              transition: { duration: 0.3 }
                            }}
                            className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 ${audit.color} transition-all`}
                        >
                            <div className="bg-white p-3 rounded-xl shadow-inner w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                {audit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4 text-gray-800">{audit.type}</h3>
                            <p className="text-gray-600 mb-6 text-center">{audit.description}</p>
                            <div className="flex items-center justify-center text-sm font-medium text-gray-500">
                                <Clock className="w-4 h-4 mr-2" />
                                Recommended frequency: {audit.frequency}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Industry Frequency */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, threshold: 0.1 }}
                variants={variants}
                className="mb-24 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white"
            >
                <motion.div variants={variants} className="text-center mb-12">
                    <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
                        <Clock className="mr-2" />
                        <span>Industry Standards</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Audit Frequency by Industry</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Recommended audit intervals based on industry risk profiles and regulatory requirements.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {[
                        {
                            industry: "Manufacturing",
                            frequency: "Bi-annually",
                            risk: "High",
                            icon: <Factory className="w-6 h-6" />,
                            color: "bg-blue-500/10"
                        },
                        {
                            industry: "Healthcare",
                            frequency: "Quarterly",
                            risk: "Critical",
                            icon: <HeartPulse className="w-6 h-6" />,
                            color: "bg-red-500/10"
                        },
                        {
                            industry: "Food Services",
                            frequency: "Monthly",
                            risk: "Critical",
                            icon: <Utensils className="w-6 h-6" />,
                            color: "bg-amber-500/10"
                        },
                        {
                            industry: "Information Technology",
                            frequency: "Annually",
                            risk: "Medium",
                            icon: <Server className="w-6 h-6" />,
                            color: "bg-indigo-500/10"
                        },
                        {
                            industry: "Construction",
                            frequency: "Quarterly",
                            risk: "High",
                            icon: <Truck className="w-6 h-6" />,
                            color: "bg-yellow-500/10"
                        },
                        {
                            industry: "Energy",
                            frequency: "Quarterly",
                            risk: "Critical",
                            icon: <Zap className="w-6 h-6" />,
                            color: "bg-purple-500/10"
                        },
                        {
                            industry: "Education",
                            frequency: "Annually",
                            risk: "Medium",
                            icon: <School className="w-6 h-6" />,
                            color: "bg-green-500/10"
                        },
                        {
                            industry: "Financial Services",
                            frequency: "Semi-annually",
                            risk: "High",
                            icon: <BarChart2 className="w-6 h-6" />,
                            color: "bg-emerald-500/10"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            whileHover={{ 
                              y: -8,
                              boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.1)",
                              transition: { duration: 0.3 }
                            }}
                            className={`${item.color} p-6 rounded-xl border border-white/10 transition-all`}
                        >
                            <div className="flex items-center mb-4">
                                <div className="bg-white/10 p-2 rounded-lg mr-3">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-lg">{item.industry}</h3>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-300">Frequency</span>
                                <span className="font-medium text-white">{item.frequency}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-300">Risk Level</span>
                                <span className={`text-xs font-medium px-2 py-1 rounded-full ${item.risk === "Critical" ? "bg-red-500/20 text-red-300" :
                                        item.risk === "High" ? "bg-amber-500/20 text-amber-300" :
                                            "bg-green-500/20 text-green-300"
                                    }`}>
                                    {item.risk}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* ISO Clauses */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, threshold: 0.1 }}
                variants={variants}
                className="mb-24"
            >
                <motion.div variants={variants} className="text-center mb-12">
                    <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
                        <BookOpen className="mr-2" />
                        <span>Standard Requirements</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Key ISO Clauses</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Essential sections across major ISO standards that govern audit requirements.
                    </p>
                </motion.div>

                <motion.div variants={variants} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-8 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Standard</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Internal Audit</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Improvement</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Documentation</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {[
                                    {
                                        standard: "ISO 9001:2015 (QMS)",
                                        clauses: {
                                            audit: "9.2",
                                            improvement: "10.2",
                                            documentation: "7.5"
                                        }
                                    },
                                    {
                                        standard: "ISO 45001:2018 (OHS)",
                                        clauses: {
                                            audit: "9.2",
                                            improvement: "10.2",
                                            documentation: "7.5"
                                        }
                                    },
                                    {
                                        standard: "ISO 14001:2015 (EMS)",
                                        clauses: {
                                            audit: "9.2",
                                            improvement: "10.2",
                                            documentation: "7.5"
                                        }
                                    },
                                    {
                                        standard: "ISO 22000:2018 (FSMS)",
                                        clauses: {
                                            audit: "9.2.1",
                                            improvement: "10.3",
                                            documentation: "7.5"
                                        }
                                    },
                                    {
                                        standard: "ISO 27001:2022 (ISMS)",
                                        clauses: {
                                            audit: "9.2",
                                            improvement: "10.1",
                                            documentation: "7.5"
                                        }
                                    }
                                ].map((row, i) => (
                                    <motion.tr
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ 
                                          duration: 0.8,
                                          delay: i * 0.1,
                                          ease: [0.2, 0.65, 0.3, 0.9]
                                        }}
                                        viewport={{ once: true, threshold: 0.1 }}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-8 py-4 whitespace-nowrap font-medium text-gray-900">
                                            {row.standard}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                                                {row.clauses.audit}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                                                {row.clauses.improvement}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                                                {row.clauses.documentation}
                                            </span>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </motion.section>

            {/* Final CTA */}
           
        </div>
    );
};

export default ISOAuditGuide;