import { motion } from "framer-motion";
import {
  FaHandshake,
  FaSearch,
  FaClipboardCheck,
  FaBuilding,
  FaCheckCircle,
  FaChartLine,
  FaCertificate,
  FaAward,
  FaShieldAlt,
  FaFlagCheckered,
  FaCheck,
  FaLightbulb,
  FaPhoneAlt,
  FaEnvelope,
  FaFire,
  FaMedal,
  FaTrophy
} from "react-icons/fa";
import ISOCertificationForm from "../utilities/gloabal";

export const ISO_certification = () => {
  const processSteps = [
    {
      title: "Free Consultation",
      description: "Initial discussion to understand your needs and recommend the right ISO standards",
      icon: <FaHandshake className="text-amber-600" size={24} />,
      color: "bg-amber-50"
    },
    {
      title: "ISO GAP Analysis",
      description: "Comprehensive assessment of your current systems against ISO requirements",
      icon: <FaSearch className="text-orange-500" size={24} />,
      color: "bg-orange-50"
    },
    {
      title: "Stage-I ISO Audit",
      description: "Documentation review to verify your preparedness for implementation",
      icon: <FaClipboardCheck className="text-yellow-600" size={24} />,
      color: "bg-yellow-50"
    },
    {
      title: "Stage-II ISO Audit",
      description: "On-site evaluation of your implemented management system",
      icon: <FaBuilding className="text-amber-700" size={24} />,
      color: "bg-amber-100"
    },
    {
      title: "Closeout of Audit",
      description: "Addressing any non-conformities identified during audits",
      icon: <FaCheckCircle className="text-orange-600" size={24} />,
      color: "bg-orange-50"
    },
    {
      title: "Management Review",
      description: "Executive evaluation of system performance and effectiveness",
      icon: <FaChartLine className="text-amber-800" size={24} />,
      color: "bg-amber-50"
    },
    {
      title: "Registration of ISO Certificate",
      description: "Official certification issued by accredited body",
      icon: <FaCertificate className="text-yellow-700" size={24} />,
      color: "bg-yellow-100"
    },
    {
      title: "Handover of ISO Certification",
      description: "Delivery of your certificate and supporting documents",
      icon: <FaAward className="text-amber-600" size={24} />,
      color: "bg-amber-50"
    },
    {
      title: "Surveillance Audit",
      description: "Annual audits to maintain certification validity",
      icon: <FaShieldAlt className="text-orange-700" size={24} />,
      color: "bg-orange-50"
    },
    {
      title: "End of Services",
      description: "Completion of 3-year cycle with option for recertification",
      icon: <FaFlagCheckered className="text-amber-900" size={24} />,
      color: "bg-amber-100"
    }
  ];

  const isoStandards = [
    { name: "ISO 9001", description: "Quality Management System", color: "bg-amber-100 text-amber-800" },
    { name: "ISO 14001", description: "Environmental Management", color: "bg-orange-100 text-orange-800" },
    { name: "ISO 45001", description: "Occupational Health & Safety", color: "bg-yellow-100 text-yellow-800" },
    { name: "ISO 27001", description: "Information Security", color: "bg-amber-200 text-amber-900" },
    { name: "ISO 22000", description: "Food Safety Management", color: "bg-orange-200 text-orange-900" },
    { name: "ISO 50001", description: "Energy Management", color: "bg-yellow-200 text-yellow-900" }
  ];

  return (
    <motion.div
      className="p-4 md:p-12 space-y-10 w-full font-['Arial_Narrow'] font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ fontFamily: "'Arial Narrow', sans-serif" }}
    >
      {/* Hero Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 text-center max-w-6xl mx-auto"
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-900 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <FaFire className="inline mr-3 mb-1" />
          Premium ISO Certification
          <FaMedal className="inline ml-3 mb-1" />
        </motion.h2>
        <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
          Accelerate your business growth with internationally recognized certifications
        </p>
        <motion.div
          className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-8 rounded-xl text-white text-center">
            <FaTrophy className="mx-auto text-5xl mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Industry-Leading Certification</h3>
            <p className="text-amber-100">90% first-time pass rate with our expert guidance</p>
          </div>
        </motion.div>
      </motion.div>
      <ISOCertificationForm />
      {/* Value Proposition Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* What is ISO */}
        <motion.div
          className="bg-white p-5 md:p-7 rounded-xl shadow-sm border border-amber-100 hover:shadow-md transition-all"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center mb-4">
            <div className="bg-amber-100 p-3 rounded-full mr-4">
              <FaLightbulb className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">What is ISO Certification?</h3>
          </div>
          <p className="text-gray-700 pl-0 md:pl-14 text-sm md:text-base font-normal">
            International recognition that your organization meets rigorous global standards for quality (ISO 9001), safety (ISO 45001), information security (ISO 27001), and more. It's a mark of excellence that builds trust with clients and partners worldwide.
          </p>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="bg-white p-5 md:p-7 rounded-xl shadow-sm border border-amber-100 hover:shadow-md transition-all"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <FaCheck className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">Why Choose Us?</h3>
          </div>
          <ul className="space-y-3 pl-0 md:pl-14">
            {[
              "90% first-time pass rate",
              "Industry-specific consultants",
              "End-to-end support",
              "60% faster certification",
              "Ongoing compliance support"
            ].map((item, index) => (
              <li key={index} className="flex items-start text-gray-700 text-sm md:text-base font-normal">
                <FaCheck className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Process Section */}
      <motion.div
        className="mt-12 md:mt-16 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
          Our <span className="text-amber-600">10-Step</span> Certification Process
        </h3>

        {/* Mobile View - Vertical List */}
        <div className="md:hidden space-y-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`p-5 rounded-xl shadow-md ${step.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-4 border-amber-500 flex items-center justify-center shadow-lg">
                  <span className="text-base font-bold text-gray-800">{index + 1}</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">{step.title}</h4>
                  <p className="text-sm text-gray-600 font-normal">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop View - Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-amber-300 to-orange-300 transform -translate-x-1/2"></div>

          {/* Process steps */}
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-row items-center relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Left side steps */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-10 text-right' : 'pl-10'}`}>
                  {index % 2 === 0 && (
                    <motion.div
                      className={`inline-block p-6 rounded-2xl shadow-md ${step.color} hover:shadow-lg transition-all`}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center justify-end space-x-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-800">{step.title}</h4>
                          <p className="text-gray-600 font-normal">{step.description}</p>
                        </div>
                        <div className="bg-white p-3 rounded-full shadow-sm">
                          {step.icon}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Step indicator (centered) */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-4 border-amber-500 flex items-center justify-center shadow-lg z-10">
                  <span className="text-xl font-bold text-gray-800">{index + 1}</span>
                </div>

                {/* Right side steps */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-10' : 'pr-10 text-right'}`}>
                  {index % 2 !== 0 && (
                    <motion.div
                      className={`inline-block p-6 rounded-2xl shadow-md ${step.color} hover:shadow-lg transition-all`}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-white p-3 rounded-full shadow-sm">
                          {step.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800">{step.title}</h4>
                          <p className="text-gray-600 font-normal">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Standards Section */}
      <motion.div
        className="mt-12 md:mt-20 bg-gradient-to-r from-amber-50 to-orange-50 p-6 md:p-8 rounded-2xl border border-amber-100 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6 md:mb-8">
          Popular <span className="text-amber-600">ISO Standards</span> We Certify
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {isoStandards.map((standard, index) => (
            <motion.div
              key={index}
              className={`p-4 md:p-5 rounded-xl shadow-sm transition-all hover:shadow-md ${standard.color} border border-amber-200`}
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl md:text-2xl font-bold mb-2">{standard.name}</h4>
              <p className="text-sm md:text-lg opacity-90 font-normal">{standard.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="mt-12 md:mt-20 p-6 md:p-12 bg-white rounded-2xl shadow-xl text-center space-y-6 relative overflow-hidden border border-amber-200 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-amber-100 opacity-40"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-orange-100 opacity-40"></div>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 relative z-10">
          Ready to Elevate Your Business?
        </h3>
        <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto relative z-10 font-normal">
          Get your ISO certification with our premium service
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
          <motion.a
            href="#contact"
            className="px-6 py-3 md:px-8 md:py-3 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhoneAlt className="mr-2" />
            Book Free Consultation
          </motion.a>

          <motion.a
            href="#quote"
            className="px-6 py-3 md:px-8 md:py-3 bg-white border-2 border-amber-500 text-amber-600 rounded-lg font-bold shadow-sm hover:shadow-md transition-all flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="mr-2" />
            Request Custom Quote
          </motion.a>
        </div>

        <p className="text-gray-500 text-xs md:text-sm mt-6 relative z-10 font-normal">
          <FaCheck className="inline mr-1 text-amber-500" />
          Typically respond within 2 business hours
        </p>
      </motion.div>
    </motion.div>
  );
};