import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { useState, useRef } from "react";
import { FiChevronRight, FiMail, FiPhone, FiGlobe, FiCheckCircle, FiAward, FiFileText, FiUsers, FiShield, FiGlobe as FiEarth, FiTrendingUp, FiClock, FiLayers } from "react-icons/fi";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  }
};

const cardHoverVariants = {
  rest: { 
    y: 0,
    scale: 1,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  },
  hover: { 
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const buttonHoverVariants = {
  rest: { 
    scale: 1,
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    scale: 1.05,
    y: -2,
    boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.4)",
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: { 
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
};

const ISOConsultancy = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);

  // Standard data with icons and colors
  const allStandards = [
    {
      id: "9001",
      name: "ISO 9001:2015",
      focus: "Quality Management",
      industries: "All industries",
      icon: <FiAward className="text-blue-500" />,
      gradient: "from-blue-100 to-blue-50"
    },
    {
      id: "14001",
      name: "ISO 14001:2015",
      focus: "Environmental Management",
      industries: "Manufacturing, Construction",
      icon: <FiEarth className="text-green-500" />,
      gradient: "from-green-100 to-green-50"
    },
    {
      id: "45001",
      name: "ISO 45001:2018",
      focus: "Occupational Health & Safety",
      industries: "Factories, Hospitals",
      icon: <FiShield className="text-orange-500" />,
      gradient: "from-orange-100 to-orange-50"
    },
    {
      id: "27001",
      name: "ISO 27001:2022",
      focus: "Information Security",
      industries: "IT, Banking, Healthcare",
      icon: <FiFileText className="text-purple-500" />,
      gradient: "from-purple-100 to-purple-50"
    },
    {
      id: "39001",
      name: "ISO 39001:2012",
      focus: "Road Traffic Safety",
      industries: "Transportation, Logistics",
      icon: <FiTrendingUp className="text-red-500" />,
      gradient: "from-red-100 to-red-50"
    },
    {
      id: "15189",
      name: "ISO 15189:2022",
      focus: "Medical Laboratories",
      industries: "Healthcare, Diagnostics",
      icon: <FiCheckCircle className="text-cyan-500" />,
      gradient: "from-cyan-100 to-cyan-50"
    },
    {
      id: "26000",
      name: "ISO 26000:2010",
      focus: "Social Responsibility",
      industries: "All industries",
      icon: <FiUsers className="text-yellow-500" />,
      gradient: "from-yellow-100 to-yellow-50"
    },
    {
      id: "55001",
      name: "ISO 55001:2014",
      focus: "Asset Management",
      industries: "Utilities, Infrastructure",
      icon: <FiLayers className="text-indigo-500" />,
      gradient: "from-indigo-100 to-indigo-50"
    },
    {
      id: "50001",
      name: "ISO 50001:2018",
      focus: "Energy Management",
      industries: "Manufacturing, Energy",
      icon: <FiClock className="text-emerald-500" />,
      gradient: "from-emerald-100 to-emerald-50"
    },
    {
      id: "41001",
      name: "ISO 41001:2018",
      focus: "Facility Management",
      industries: "Real Estate, Corporate",
      icon: <FiGlobe className="text-amber-500" />,
      gradient: "from-amber-100 to-amber-50"
    },
    {
      id: "28001",
      name: "ISO 28001",
      focus: "Supply Chain Security",
      industries: "Logistics, Shipping",
      icon: <FiShield className="text-blue-600" />,
      gradient: "from-blue-100 to-blue-50"
    },
    {
      id: "SA8000",
      name: "SA 8000",
      focus: "Social Accountability",
      industries: "Textiles, Manufacturing",
      icon: <FiUsers className="text-pink-500" />,
      gradient: "from-pink-100 to-pink-50"
    }
  ];

  // Tab data
  const tabs = [
    {
      id: "overview",
      title: "Overview",
      icon: "🧭",
      content: (
        <div className="space-y-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow-sm border border-blue-100"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl">🧭</span>
              What is ISO Consultancy?
            </h3>
            <p className="text-lg mb-6 leading-relaxed">
              <strong className="font-semibold text-blue-700">ISO Consultancy</strong> provides expert guidance to implement international standards,
              streamline processes, and achieve certification. We bridge the gap between your current systems and ISO requirements.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-50/80 p-6 rounded-xl border border-blue-200 backdrop-blur-sm"
            >
              <p className="text-blue-700 text-lg">
                Whether it's <strong>ISO 9001 (Quality)</strong>, <strong>ISO 14001 (Environment)</strong>,
                or <strong>ISO 45001 (Safety)</strong>, we customize solutions for <strong>your industry needs</strong>.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl shadow-sm border border-green-100"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl">🔍</span>
              Why ISO Standards Matter
            </h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: "📈", title: "Operational Excellence", desc: "Streamline processes for maximum efficiency" },
                { icon: "⚖️", title: "Regulatory Compliance", desc: "Meet legal and customer requirements" },
                { icon: "🌐", title: "Global Recognition", desc: "Enhance credibility in international markets" },
                { icon: "🛡️", title: "Risk Management", desc: "Proactively identify and mitigate risks" },
                { icon: "🔄", title: "Continuous Improvement", desc: "Implement PDCA cycle for growth" },
                { icon: "💼", title: "Competitive Advantage", desc: "Stand out in procurement processes" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  className="bg-white p-5 rounded-xl border border-gray-200"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      )
    },
    {
      id: "standards",
      title: "Standards",
      icon: "📘",
      content: (
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border border-purple-100"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl">📘</span>
              Comprehensive ISO Standards Coverage
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              We specialize in implementing a wide range of international standards across industries.
              Select a standard to learn more about its benefits and implementation process.
            </p>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {allStandards.map((standard, i) => (
                <motion.div
                  key={i}
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  className={`bg-gradient-to-br ${standard.gradient} p-6 rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative`}
                >
                  <div className="absolute -right-6 -top-6 text-7xl opacity-10">
                    {standard.icon}
                  </div>
                  <div className="flex items-start mb-4 relative z-10">
                    <div className="bg-white p-2 rounded-lg shadow-xs mr-4">
                      <div className="text-2xl">
                        {standard.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{standard.name}</h3>
                      <p className="text-sm text-gray-500">{standard.id}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 relative z-10">{standard.focus}</p>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white/70 p-2 rounded-lg backdrop-blur-sm"
                  >
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Industries:</span> {standard.industries}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      )
    },
    {
      id: "process",
      title: "Process",
      icon: "🛠️",
      content: (
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 transform -translate-x-1/2"></div>

          {[
            {
              id: 1,
              title: "Initial Assessment",
              desc: "Comprehensive gap analysis of current systems",
              icon: "🔍",
              color: "from-indigo-100 to-indigo-50"
            },
            {
              id: 2,
              title: "Planning",
              desc: "Develop customized implementation roadmap",
              icon: "📝",
              color: "from-blue-100 to-blue-50"
            },
            {
              id: 3,
              title: "Documentation",
              desc: "Create policies, procedures and records",
              icon: "📑",
              color: "from-cyan-100 to-cyan-50"
            },
            {
              id: 4,
              title: "Implementation",
              desc: "Train teams and integrate systems",
              icon: "🔄",
              color: "from-green-100 to-green-50"
            },
            {
              id: 5,
              title: "Internal Audit",
              desc: "Conduct compliance verification audits",
              icon: "✔️",
              color: "from-yellow-100 to-yellow-50"
            },
            {
              id: 6,
              title: "Certification",
              desc: "Coordinate with accredited certification bodies",
              icon: "🏆",
              color: "from-purple-100 to-purple-50"
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative mb-8 ${i % 2 === 0 ? "lg:w-1/2 lg:pr-12 lg:mr-auto" : "lg:w-1/2 lg:pl-12 lg:ml-auto"}`}
            >
              <motion.div 
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                className={`bg-gradient-to-br ${step.color} p-6 rounded-2xl shadow-sm border border-gray-100 h-full`}
              >
                <div className="flex items-start">
                  <motion.div 
                    initial={{ scale: 0.8, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.15 + 0.2, type: "spring" }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg w-14 h-14 flex items-center justify-center mr-4 flex-shrink-0 shadow-xs text-2xl"
                  >
                    {step.icon}
                  </motion.div>
                  <div>
                    <div className="flex items-center mb-1">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
                        viewport={{ once: true }}
                        className="bg-white text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2"
                      >
                        {step.id}
                      </motion.div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.desc}</p>
                    {i === 2 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{ opacity: 1, height: "auto" }}
                        transition={{ delay: i * 0.15 + 0.5 }}
                        viewport={{ once: true }}
                        className="mt-4 bg-white/70 p-3 rounded-lg backdrop-blur-sm overflow-hidden"
                      >
                        <p className="text-sm text-gray-600 font-medium">Key Documents:</p>
                        <ul className="text-xs text-gray-500 list-disc list-inside mt-1">
                          <li>Quality Manual</li>
                          <li>Process Maps</li>
                          <li>Standard Operating Procedures</li>
                        </ul>
                      </motion.div>
                    )}
                    {i === 4 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{ opacity: 1, height: "auto" }}
                        transition={{ delay: i * 0.15 + 0.5 }}
                        viewport={{ once: true }}
                        className="mt-4 bg-white/70 p-3 rounded-lg backdrop-blur-sm overflow-hidden"
                      >
                        <p className="text-sm text-gray-600 font-medium">Audit Focus Areas:</p>
                        <ul className="text-xs text-gray-500 list-disc list-inside mt-1">
                          <li>Clause-by-clause compliance</li>
                          <li>Effectiveness measurement</li>
                          <li>Opportunities for improvement</li>
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      )
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          className="inline-block mb-6"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-full text-sm font-semibold inline-flex items-center">
            <FiAward className="mr-2" /> ISO Certification Experts
          </div>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            ISO Consultancy Services
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Streamline your path to international standards certification with our proven methodology
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            variants={buttonHoverVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center"
          >
            Get Started <FiChevronRight className="ml-2" />
          </motion.button>
          <motion.button
            variants={buttonHoverVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center shadow-sm"
          >
            View Case Studies
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mb-8"
      >
        <div className="relative">
          <div className="flex space-x-1 overflow-x-auto pb-2 scrollbar-hide">
            {tabs.map((tab, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveTab(i)}
                onMouseEnter={() => setHoveredTab(i)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`px-6 py-3 font-medium rounded-t-lg transition-colors relative ${activeTab === i ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.title}
                {(hoveredTab === i || activeTab === i) && (
                  <motion.div
                    layoutId="tabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-t"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
        </div>
      </motion.div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tabs[activeTab].id}
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="pt-6"
        >
          {tabs[activeTab].content}
        </motion.div>
      </AnimatePresence>

      {/* Clients Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
        className="my-20"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Trusted By Organizations Across Industries
        </motion.h2>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { type: "Manufacturers", icon: "🏭", count: "120+" },
            { type: "Healthcare", icon: "🏥", count: "80+" },
            { type: "Education", icon: "🎓", count: "45+" },
            { type: "IT Companies", icon: "💻", count: "65+" },
            { type: "Agriculture", icon: "🌾", count: "30+" },
            { type: "Government", icon: "🏛️", count: "25+" },
          ].map((client, i) => (
            <motion.div
              key={i}
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <div className="text-4xl mb-4">{client.icon}</div>
              <h3 className="font-bold text-lg mb-1">{client.type}</h3>
              <p className="text-sm text-gray-500">{client.count} clients</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
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
      </div>
    </div>
  );
};

export default ISOConsultancy;