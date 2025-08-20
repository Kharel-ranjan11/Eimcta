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
      icon: <FaHandshake className="text-[#6B4F4F]" size={24} />,
      color: "bg-[#FFF3E4]"
    },
    {
      title: "ISO GAP Analysis",
      description: "Comprehensive assessment of your current systems against ISO requirements",
      icon: <FaSearch className="text-[#6B4F4F]" size={24} />,
      color: "bg-[#FFF3E4]"
    },
    {
      title: "Stage-I ISO Audit",
      description: "Documentation review to verify your preparedness for implementation",
      icon: <FaClipboardCheck className="text-[#6B4F4F]" size={24} />,
      color: "bg-[#FFF3E4]"
    },
    {
      title: "Stage-II ISO Audit",
      description: "On-site evaluation of your implemented management system",
      icon: <FaBuilding className="text-[#6B4F4F]" size={24} />,
      color: "bg-[#FFF3E4]"
    },
    {
      title: "Closeout of Audit",
      description: "Addressing any non-conformities identified during audits",
      icon: <FaCheckCircle className="text-[#6B4F4F]" size={24} />,
      color: "bg-[#FFF3E4]"
    },
    {
      title: "Management Review",
      description: "Executive evaluation of system performance and effectiveness",
      icon: <FaChartLine className="text-[#6B4F4F]" size={24} />,
      color: "bg-[#FFF3E4]"
    },
    {
      title: "Registration of ISO Certificate",
      description: "Official certification issued by accredited body",
      icon: <FaCertificate className="text-[#6B4F4F]" size={24} />,
      color: "bg-[#FFF3E4]"
    },
    {
      title: "Handover of ISO Certification",
      description: "Delivery of your certificate and supporting documents",
      icon: <FaAward className="text-[#6B4F4F]" size={24} />,
      color: "bg-[#FFF3E4]"
    },
    {
      title: "Surveillance Audit",
      description: "Annual audits to maintain certification validity",
      icon: <FaShieldAlt className="text-[#6B4F4F]" size={24} />,
      color: "bg-[#FFF3E4]"
    },
    {
      title: "End of Services",
      description: "Completion of 3-year cycle with option for recertification",
      icon: <FaFlagCheckered className="text-[#6B4F4F]" size={24} />,
      color: "bg-[#FFF3E4]"
    }
  ];

  const isoStandards = [
    { name: "ISO 9001", description: "Quality Management System", color: "bg-[#FFF3E4] text-[#483434]" },
    { name: "ISO 14001", description: "Environmental Management", color: "bg-[#FFF3E4] text-[#483434]" },
    { name: "ISO 45001", description: "Occupational Health & Safety", color: "bg-[#FFF3E4] text-[#483434]" },
    { name: "ISO 27001", description: "Information Security", color: "bg-[#FFF3E4] text-[#483434]" },
    { name: "ISO 22000", description: "Food Safety Management", color: "bg-[#FFF3E4] text-[#483434]" },
    { name: "ISO 50001", description: "Energy Management", color: "bg-[#FFF3E4] text-[#483434]" }
  ];

  return (
    <motion.div
      className="p-4 md:p-12 space-y-10 w-full font-['Arial_Narrow'] font-bold bg-[#FFF3E4]"
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
          className="text-3xl md:text-5xl font-bold text-[#483434]"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <FaFire className="inline mr-3 mb-1 text-[#6B4F4F]" />
          Premium ISO Certification
          <FaMedal className="inline ml-3 mb-1 text-[#6B4F4F]" />
        </motion.h2>
        <p className="text-base md:text-xl text-[#6B4F4F] max-w-3xl mx-auto">
          Accelerate your business growth with internationally recognized certifications
        </p>
        <motion.div
          className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="bg-[#483434] p-8 rounded-xl text-[#FFF3E4] text-center">
            <FaTrophy className="mx-auto text-5xl mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Industry-Leading Certification</h3>
            <p className="text-[#EED6C4]">90% first-time pass rate with our expert guidance</p>
          </div>
        </motion.div>
      </motion.div>
      <ISOCertificationForm />
      {/* Value Proposition Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* What is ISO */}
        <motion.div
          className="bg-white p-5 md:p-7 rounded-xl shadow-sm border border-[#EED6C4] hover:shadow-md transition-all"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center mb-4">
            <div className="bg-[#FFF3E4] p-3 rounded-full mr-4">
              <FaLightbulb className="h-6 w-6 text-[#6B4F4F]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#483434]">What is ISO Certification?</h3>
          </div>
          <p className="text-[#6B4F4F] pl-0 md:pl-14 text-sm md:text-base font-normal">
            International recognition that your organization meets rigorous global standards for quality (ISO 9001), safety (ISO 45001), information security (ISO 27001), and more. It's a mark of excellence that builds trust with clients and partners worldwide.
          </p>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="bg-white p-5 md:p-7 rounded-xl shadow-sm border border-[#EED6C4] hover:shadow-md transition-all"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center mb-4">
            <div className="bg-[#FFF3E4] p-3 rounded-full mr-4">
              <FaCheck className="h-6 w-6 text-[#6B4F4F]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#483434]">Why Choose Us?</h3>
          </div>
          <ul className="space-y-3 pl-0 md:pl-14">
            {[
              "90% first-time pass rate",
              "Industry-specific consultants",
              "End-to-end support",
              "60% faster certification",
              "Ongoing compliance support"
            ].map((item, index) => (
              <li key={index} className="flex items-start text-[#6B4F4F] text-sm md:text-base font-normal">
                <FaCheck className="h-5 w-5 text-[#6B4F4F] mr-2 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Process Section - Updated to Grid Layout */}
      <motion.div
        className="mt-12 md:mt-16 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-center text-[#483434] mb-8 md:mb-12">
          Our <span className="text-[#6B4F4F]">10-Step</span> Certification Process
        </h3>

        {/* Grid Layout for Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`p-5 rounded-xl shadow-md ${step.color} border border-[#EED6C4] flex flex-col h-full`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-4 border-[#6B4F4F] flex items-center justify-center shadow-lg mb-4">
                <span className="text-base font-bold text-[#483434]">{index + 1}</span>
              </div>
              <div className="flex items-center mb-3">
                <div className="bg-white p-2 rounded-full mr-3 shadow-sm">
                  {step.icon}
                </div>
                <h4 className="text-lg font-bold text-[#483434]">{step.title}</h4>
              </div>
              <p className="text-sm text-[#6B4F4F] font-normal mt-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Standards Section */}
      <motion.div
        className="mt-12 md:mt-20 bg-[#FFF3E4] p-6 md:p-8 rounded-2xl border border-[#EED6C4] max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-center text-[#483434] mb-6 md:mb-8">
          Popular <span className="text-[#6B4F4F]">ISO Standards</span> We Certify
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {isoStandards.map((standard, index) => (
            <motion.div
              key={index}
              className={`p-4 md:p-5 rounded-xl shadow-sm transition-all hover:shadow-md ${standard.color} border border-[#EED6C4]`}
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
    </motion.div>
  );
};