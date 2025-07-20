import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ISOConsultancy = () => {
  const isoStandards = [
    {
      id: "iso9001",
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      description: "Elevating Your Business with Quality Management",
      clauses: [
        "Clause 4: Context of the organization",
        "Clause 5: Leadership",
        "Clause 6: Planning",
        "Clause 7: Support",
        "Clause 8: Operation",
        "Clause 9: Performance evaluation",
        "Clause 10: Improvement",
      ],
      color: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "iso45001",
      title: "ISO 45001:2018",
      subtitle: "Occupational Health, Safety & Environment",
      description: "Safety Management System Certification",
      clauses: [
        "Clause 4: Context of the organization",
        "Clause 5: Leadership and worker participation",
        "Clause 6: Planning",
        "Clause 7: Support",
        "Clause 8: Operation",
        "Clause 9: Performance evaluation",
        "Clause 10: Improvement",
      ],
      color: "bg-red-500",
      image: "https://images.unsplash.com/photo-1581093196270-c4b05a7f3cc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "iso22000",
      title: "ISO 22000",
      subtitle: "Food Safety Standard & HACCP",
      description: "Food Safety Management System Certification",
      clauses: [
        "Clause 4: Context of the organization",
        "Clause 5: Leadership",
        "Clause 6: Planning",
        "Clause 7: Support",
        "Clause 8: Operation",
        "Clause 9: Performance evaluation",
        "Clause 10: Improvement",
      ],
      color: "bg-green-500",
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "iso21001",
      title: "ISO 21001:2018",
      subtitle: "Educational Organization Management System",
      description: "Enhancing Educational Service Quality",
      clauses: [
        "Clause 4: Context of the organization",
        "Clause 5: Leadership",
        "Clause 6: Planning",
        "Clause 7: Support",
        "Clause 8: Operation",
        "Clause 9: Performance evaluation",
        "Clause 10: Improvement",
      ],
      color: "bg-yellow-500",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
  ];

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const processItemVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-blue-800 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          ISO Consultancy
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          We are one of the leading global providers of accredited ISO certification. 
          We offer a broad portfolio of services within management system ISO certification 
          and related services.
        </p>
      </motion.div>

      {/* ISO Standards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        {isoStandards.map((standard, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover="hover"
            className="relative rounded-xl overflow-hidden shadow-2xl h-full"
          >
            <Link to={`/iso-standards/${standard.id}`} className="block h-full">
              <motion.div
                variants={cardHoverVariants}
                className={`h-full ${standard.color} bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 flex flex-col`}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={standard.image} 
                    alt={standard.title}
                    className="w-full h-full object-cover opacity-20"
                  />
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-6 text-white flex flex-col h-full">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{standard.title}</h2>
                    <h3 className="text-xl font-semibold mb-3">{standard.subtitle}</h3>
                    <p className="mb-4">{standard.description}</p>
                  </div>

                  {/* Clause Section with Smooth Expand */}
                  <motion.div 
                    className="mt-auto"
                    
                  >
                    <div className="pt-4 border-t border-white 
                    border-opacity-20 overflow-hidden">
                     
                        
                    </div>
                  </motion.div>
                  
                  <button className="mt-9 px-6 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full font-medium transition-all duration-300 self-start">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Certification Process */}
      <motion.div 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-24 max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold text-white text-center mb-8"
        >
          Our Certification Process
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: 1, title: "Gap Analysis", desc: "Identify current state vs requirements" },
            { step: 2, title: "Documentation", desc: "Develop required policies & procedures" },
            { step: 3, title: "Implementation", desc: "Train staff and deploy processes" },
            { step: 4, title: "Internal Audit", desc: "Verify system effectiveness" },
            { step: 5, title: "Certification", desc: "Official accreditation body audit" },
          ].map((process, i) => (
            <motion.div
              key={i}
              variants={processItemVariants}
              className="bg-white bg-opacity-10 p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                {process.step}
              </div>
              <h3 className="font-semibold text-white mb-2">{process.title}</h3>
              <p className="text-blue-100 text-sm">{process.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ISOConsultancy;