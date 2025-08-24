import { motion } from "framer-motion";
import { 
  FaChartLine, 
  FaFlask, 
  FaChalkboardTeacher, 
  FaShieldAlt, 
  FaLeaf, 
  FaIndustry,
  FaUserTie,
  FaCertificate,
  FaHandsHelping,
  FaAward
} from "react-icons/fa";

const Services = () => {
  // Gradient backgrounds for service cards
  const cardGradients = [
    "bg-gradient-to-br from-blue-500 to-blue-700",
    "bg-gradient-to-br from-emerald-500 to-emerald-700",
    "bg-gradient-to-br from-purple-500 to-purple-700",
    "bg-gradient-to-br from-rose-500 to-rose-700",
    "bg-gradient-to-br from-teal-500 to-teal-700",
    "bg-gradient-to-br from-amber-500 to-amber-700"
  ];

  // Main animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      transition: { duration: 0.6 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.2,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    },
    hover: { 
      y: -15,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: { 
      y: -3,
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  // Services data
  const services = [
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "ISO Consultancy Services",
      description: "We guide your organization through every stage of ISO implementation from gap analysis to certification readiness.",
      items: [
        "ISO 9001 - Quality Management",
        "ISO 14001 - Environmental Management",
        "ISO 45001 - Occupational Health & Safety",
        "ISO 22000 & HACCP - Food Safety",
        "ISO 27001 - Information Security"
      ],
      cta: "Get Certified"
    },
    {
      icon: <FaFlask className="text-4xl" />,
      title: "Accredited Testing & Calibration",
      description: "Precision services including equipment calibration and comprehensive testing per ISO/IEC 17025 standards.",
      items: [
        "Equipment calibration services",
        "Food, water, environmental testing",
        "Laboratory setup consulting",
        "Quality assurance programs",
        "Compliance verification"
      ],
      cta: "Schedule Testing"
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl" />,
      title: "Professional Training Programs",
      description: "Specialized training to build competence aligned with ISO requirements and industry standards.",
      items: [
        "Lead Auditor certification",
        "Food safety trainings (HACCP)",
        "Occupational health workshops",
        "Environmental compliance",
        "Soft skills development"
      ],
      cta: "View Courses"
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Occupational Health & Safety",
      description: "Creating proactive safety cultures that reduce risk and enhance workplace productivity.",
      items: [
        "Hazard Identification & Risk Assessment",
        "Emergency preparedness planning",
        "Safety audits and compliance",
        "PPE consultation",
        "Incident investigation"
      ],
      cta: "Improve Safety"
    },
    {
      icon: <FaLeaf className="text-4xl" />,
      title: "Environmental Management",
      description: "Comprehensive solutions supporting your environmental responsibility and sustainability goals.",
      items: [
        "Environmental Impact Assessments",
        "Waste management planning",
        "Sustainability consulting",
        "Regulatory compliance",
        "Carbon footprint analysis"
      ],
      cta: "Go Green"
    },
    {
      icon: <FaIndustry className="text-4xl" />,
      title: "Industry-Specific Solutions",
      description: "Tailored approaches addressing unique challenges across various sectors.",
      items: [
        "Manufacturing & Industrial",
        "Healthcare & Pharmaceutical",
        "Food Production & Hospitality",
        "Educational Institutions",
        "Service Industries"
      ],
      cta: "Sector Solutions"
    }
  ];

  const benefits = [
    {
      icon: <FaUserTie className="text-3xl" />,
      title: "Experienced Consultants",
      description: "Seasoned professionals with 10+ years in ISO implementation"
    },
    {
      icon: <FaCertificate className="text-3xl" />,
      title: "Customized Solutions",
      description: "Tailored to your organization's specific needs"
    },
    {
      icon: <FaHandsHelping className="text-3xl" />,
      title: "End-to-End Support",
      description: "From documentation to certification and beyond"
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "Commitment to Excellence",
      description: "Driving continual improvement and sustainable compliance"
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden" style={{ fontFamily: "'Arial Narrow', Arial, sans-serif" }}>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-r from-blue-100 to-transparent opacity-20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.2, 0.65, 0.3, 0.9]
            }
          }}
          viewport={{ once: true, threshold: 0.1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800" style={{ fontFamily: "'Arial Narrow', Arial, sans-serif", fontWeight: 'bold' }}>
            Our Premium Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering your organization with <span className="font-semibold text-blue-600">international standards compliance</span> and operational excellence.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className={`relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${cardGradients[index]}`}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative p-8 h-full flex flex-col text-white">
                <div className="mb-6 p-3 bg-white bg-opacity-20 rounded-full w-max">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Arial Narrow', Arial, sans-serif", fontWeight: 'bold' }}>{service.title}</h2>
                <p className="mb-6 opacity-90">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-white opacity-80 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="mt-auto"
                >
                  <button className="w-full py-3 px-6 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-lg font-medium transition-all duration-300 border border-white border-opacity-30 hover:border-opacity-50 flex items-center justify-between" style={{ fontFamily: "'Arial Narrow', Arial, sans-serif", fontWeight: 'bold' }}>
                    {service.cta}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: { 
              duration: 0.8, 
              delay: 0.4,
              ease: [0.2, 0.65, 0.3, 0.9]
            }
          }}
          viewport={{ once: true, threshold: 0.1 }}
          className="mt-24"
        >
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-10 text-white relative overflow-hidden">
            {/* CSS pattern background */}
            <div className="absolute inset-0 opacity-5" 
            style={{
              backgroundImage: 'linear-gradient(135deg, #ffffff 10%, transparent 10%, transparent 50%, #ffffff 50%, #ffffff 60%, transparent 60%, transparent 100%)',
              backgroundSize: '15px 15px'
            }}></div>
            
            <div className="relative">
              <h3 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Arial Narrow', Arial, sans-serif", fontWeight: 'bold' }}>Why Choose Us?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: [0.2, 0.65, 0.3, 0.9]
                      }
                    }}
                    viewport={{ once: true, threshold: 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20 hover:border-opacity-40 transition-all"
                  >
                    <div className="p-3 bg-white bg-opacity-20 rounded-full w-max mb-4">
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Arial Narrow', Arial, sans-serif", fontWeight: 'bold' }}>{benefit.title}</h4>
                    <p className="opacity-80">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ scale: 0.95 }}
                whileInView={{ 
                  scale: 1,
                  transition: { 
                    type: "spring", 
                    stiffness: 100,
                    duration: 0.8,
                    ease: [0.2, 0.65, 0.3, 0.9]
                  }
                }}
                viewport={{ once: true, threshold: 0.1 }}
                className="mt-12 text-center"
              >
                <motion.button 
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="py-4 px-8 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto"
                  style={{ fontFamily: "'Arial Narrow', Arial, sans-serif", fontWeight: 'bold' }}
                >
                  Get Your Free Consultation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;