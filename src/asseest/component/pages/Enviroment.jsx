import React from "react";
import { motion } from "framer-motion";
import { 
  FaLeaf, 
  FaRecycle, 
  FaFlask, 
  FaChartLine, 
  FaShieldAlt, 
  FaUsers, 
  FaCheck,
  FaCertificate 
} from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
};

const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
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

const EnvironmentalServices = () => {
  return (
    <div className="bg-white text-gray-800 px-4 py-8 md:px-8 lg:px-20 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.section 
        className="text-center mb-12 relative overflow-hidden rounded-xl bg-gradient-to-r from-green-700 to-blue-700 p-8 md:p-12 text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <PatternBackground />
        <div className="relative z-10">
          <motion.h1 
            className="text-3xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
              ISO-Based Environmental Services
            </span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            At EIMCTA, we offer comprehensive environmental services grounded in ISO standards and best practices to promote sustainability, regulatory compliance, and natural resource protection.
          </motion.p>
        </div>
      </motion.section>

      {/* EIA Section */}
      <motion.section 
        className="mb-16 bg-green-50 rounded-xl p-6 md:p-8 shadow-sm relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <PatternBackground />
        <div className="relative z-10">
          <motion.div className="flex items-center mb-4" variants={itemVariants}>
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <FaLeaf className="text-green-600 text-xl" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-green-700">Environmental Impact Assessment (EIA)</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={slideInFromLeft}>
              <p className="text-gray-700 mb-4 leading-relaxed">
                EIA is a systematic process to evaluate the potential environmental effects of proposed projects before implementation. Our ISO-aligned assessments help organizations:
              </p>
              <ul className="space-y-3">
                {[
                  "Identify potential environmental risks early",
                  "Develop effective mitigation strategies",
                  "Ensure regulatory compliance",
                  "Enhance project sustainability",
                  "Improve stakeholder confidence"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg border border-green-100"
              variants={slideInFromRight}
            >
              <h3 className="font-semibold text-green-700 mb-3">Strategic Environmental Assessment (SEA)</h3>
              <p className="text-gray-700 mb-4">
                For policies, plans and programs, we conduct SEAs to integrate environmental considerations at the highest decision-making levels.
              </p>
              <motion.div 
                className="bg-green-100 p-4 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-green-800 font-medium">
                  "Our SEA services help align development strategies with environmental sustainability goals."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Principles */}
      <motion.section 
        className="mb-16 relative overflow-hidden rounded-xl bg-gradient-to-r from-green-50 to-blue-50 p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <PatternBackground />
        <div className="relative z-10">
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-green-700 mb-8 text-center"
            variants={itemVariants}
          >
            Our <span className="text-blue-600">Core Principles</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaFlask className="text-2xl" />, title: "Sampling & Analysis", desc: "Accurate collection and standardized lab methods for air, water, soil, and waste samples" },
              { icon: <FaChartLine className="text-2xl" />, title: "QA/QC Processes", desc: "Rigorous quality assurance and control for credible, defensible results" },
              { icon: <FaShieldAlt className="text-2xl" />, title: "Regulatory Compliance", desc: "Monitoring aligned with local and international environmental regulations" },
              { icon: <FaUsers className="text-2xl" />, title: "Risk Assessment", desc: "Comprehensive evaluation of environmental and public health risks" }
            ].map((principle, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                custom={index}
              >
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-green-600">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{principle.title}</h3>
                <p className="text-gray-600">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="mb-16 bg-blue-50 rounded-xl p-8 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <PatternBackground />
        <div className="relative z-10">
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-blue-700 mb-6 text-center"
            variants={itemVariants}
          >
            Key Benefits of Our Environmental Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Environmental protection and pollution reduction",
              "Full regulatory compliance assurance",
              "Early hazard detection and prevention",
              "Public health and safety enhancement",
              "Sustainable resource management",
              "Stakeholder engagement and education",
              "Data-driven policy development",
              "Cost savings through efficiency",
              "Improved corporate reputation",
              "Climate change mitigation",
              "Waste minimization strategies",
              "Circular economy implementation"
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-start"
                variants={itemVariants}
                custom={index}
              >
                <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                  <FaCheck className="text-blue-600 text-sm" />
                </div>
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Waste Management */}
      <motion.section 
        className="mb-16 relative overflow-hidden rounded-xl bg-gradient-to-r from-green-50 to-blue-50 p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <PatternBackground />
        <div className="relative z-10">
          <motion.div className="flex items-center mb-6" variants={itemVariants}>
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <FaRecycle className="text-orange-600 text-xl" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Comprehensive Waste Management Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Solid Waste Management Solutions",
              "Hazardous Waste Handling",
              "Medical Waste Disposal",
              "Waste Minimization Strategies",
              "Water Reuse Systems",
              "Landfill Management",
              "Industrial Water Audits",
              "Wastewater Treatment",
              "Effluent System Design",
              "Air Pollution Control",
              "Decontamination Services",
              "Clean Technology Integration"
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-green-300 transition-colors flex items-center"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                custom={index}
              >
                <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                <span>{service}</span>
              </motion.div>
            ))}
          </div>
          <motion.p 
            className="mt-6 text-sm text-gray-500 italic"
            variants={itemVariants}
          >
            All services comply with ISO 14001:2015 Environmental Management System standards and relevant local regulations.
          </motion.p>
        </div>
      </motion.section>

      {/* Other Services */}
      <motion.section 
        className="mb-16 relative overflow-hidden rounded-xl bg-white p-8 border border-gray-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <PatternBackground />
        <div className="relative z-10">
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center"
            variants={itemVariants}
          >
            Additional <span className="text-green-600">Environmental Services</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Environmental Consulting",
              "Biodiversity Conservation",
              "Eco-Tourism Planning",
              "Green Building Certification",
              "Environmental Education",
              "Carbon Footprint Analysis",
              "Ecosystem Valuation",
              "Renewable Energy Advisory",
              "Sustainable Agriculture",
              "Water Resource Management",
              "Circular Economy Transition",
              "Life Cycle Assessment"
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 hover:bg-green-50 p-4 rounded-lg transition-colors text-center"
                variants={itemVariants}
                whileHover={{ y: -3 }}
                custom={index}
              >
                {service}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Standards Section */}
      <motion.section 
        className="mb-16 bg-gradient-to-r from-green-700 to-blue-700 rounded-xl p-8 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <PatternBackground />
        <div className="relative z-10">
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center"
            variants={itemVariants}
          >
            Aligned with <span className="text-green-300">International Standards</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { code: "ISO 14001", name: "Environmental Management" },
              { code: "ISO 14064", name: "Greenhouse Gas Accounting" },
              { code: "ISO 50001", name: "Energy Management" },
              { code: "ISO 9001", name: "Quality Management" },
              { code: "ISO 46001", name: "Water Efficiency" },
              { code: "ISO 14040", name: "Life Cycle Assessment" },
              { code: "ISO 14020", name: "Environmental Labeling" },
              { code: "ISO 14044", name: "LCA Requirements" }
            ].map((standard, index) => (
              <motion.div 
                key={index}
                className="bg-white bg-opacity-90 p-5 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                custom={index}
              >
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  <FaCertificate className="text-xl" />
                </div>
                <h3 className="font-bold text-lg text-gray-800">{standard.code}</h3>
                <p className="text-gray-600 text-sm">{standard.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 md:p-12 text-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <PatternBackground />
        <div className="relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-4"
              variants={itemVariants}
            >
              Ready to Enhance Your Environmental Performance?
            </motion.h2>
            <motion.p 
              className="text-lg text-blue-100 mb-8"
              variants={itemVariants}
            >
              Contact our team of ISO-certified environmental specialists for assessments, consulting, and implementation support tailored to your organization's needs.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={containerVariants}
            >
              <motion.button 
                className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Consultation
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default EnvironmentalServices;