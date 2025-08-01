import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { FaAward, FaHardHat, FaGraduationCap, FaTree, FaShieldAlt, FaSearch, FaFileAlt, FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Modal from "react-modal";

Modal.setAppElement('#root');

export default function About() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState({ url: "", type: "" });

  const policies = [
    {
      name: "Quality Policy",
      description: "Commitment to delivering excellence in all our services",
      preview: "/docs/quality-policy.pdf",
      thumbnail: "/images/quality-thumb.jpg",
      pageLink: "/policies/quality"
    },
    {
      name: "Anti-Bribery Policy",
      description: "Zero tolerance for corruption and unethical practices",
      preview: "/docs/anti-bribery-policy.pdf",
      thumbnail: "/images/anti-bribery-thumb.jpg",
      pageLink: "/policies/anti-bribery"
    },
    {
      name: "OHS Policy",
      description: "Prioritizing occupational health and safety",
      preview: "/docs/ohs-policy.pdf",
      thumbnail: "/images/ohs-thumb.jpg",
      pageLink: "/policies/ohs"
    },
    {
      name: "Impartiality Policy",
      description: "Ensuring fair and unbiased service delivery",
      preview: "/docs/impartiality.pdf",
      thumbnail: "/images/impartiality-thumb.jpg",
      pageLink: "/policies/impartiality"
    },
  ];

  const services = [
    {
      title: "ISO Certification",
      icon: <FaAward size={24} className="text-blue-600 group-hover:text-white" />,
      description: "Complete ISO certification services for various standards",
    },
    {
      title: "OHS Consultancy",
      icon: <FaHardHat size={24} className="text-blue-600 group-hover:text-white" />,
      description: "Occupational health and safety management",
    },
    {
      title: "Training Programs",
      icon: <FaGraduationCap size={24} className="text-blue-600 group-hover:text-white" />,
      description: "Professional development and certification training",
    },
    {
      title: "Environmental Services",
      icon: <FaTree size={24} className="text-blue-600 group-hover:text-white" />,
      description: "Environmental impact assessment and management",
    },
    {
      title: "Safety Equipment",
      icon: <FaShieldAlt size={24} className="text-blue-600 group-hover:text-white" />,
      description: "PPE and safety equipment supply",
    },
    {
      title: "Third Party Audits",
      icon: <FaSearch size={24} className="text-blue-600 group-hover:text-white" />,
      description: "Independent audit and assessment services",
    },
  ];

  const isoStandards = [
    "ISO 9001:2015",
    "ISO 45001:2018",
    "ISO 14001:2015",
    "ISO 39001:2012",
    "ISO 27001:2022",
    "ISO 15189:2022",
    "ISO 26000:2010",
    "SA 8000",
    "ISO 55001:2014",
    "ISO 50001:2018",
    "ISO 41001:2018",
    "ISO 28001",
  ];

  const specializedServices = [
    "CE Marking",
    "RBA CoC",
    "SMETA Sedex",
    "QAA",
    "HACCP",
    "HALAL",
    "GMP",
    "Third Party Audit",
    "Emergency Management",
    "Technical Bids",
  ];

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const openModal = (fileUrl, fileType) => {
    setCurrentFile({ url: fileUrl, type: fileType });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Pattern background component
  const PatternBackground = ({ color = "from-blue-600 to-blue-800" }) => (
    <div className={`absolute inset-0 opacity-5 bg-gradient-to-r ${color}`}
      style={{
        backgroundImage: 'linear-gradient(135deg, #ffffff 10%, transparent 10%, transparent 50%, #ffffff 50%, #ffffff 60%, transparent 60%, transparent 100%)',
        backgroundSize: '15px 15px'
      }}
    ></div>
  );

  return (
    <div className="py-12 md:py-20 bg-slate-50 relative overflow-hidden">
      {/* Enhanced Particles Background */}
      <div className="absolute inset-0 z-0 h-full">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: ["#3b82f6", "#1e40af", "#065f46"],
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 0.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 80,
              },
              opacity: {
                value: { min: 0.1, max: 0.5 },
              },
              shape: {
                type: ["circle", "square", "triangle"],
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Hero Section with Pattern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 to-green-800 p-8 md:p-12 text-white"
        >
          <PatternBackground color="from-blue-700 to-green-800" />
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
                About EIMCTA - Leading ISO Certification Experts
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              EIMCTA (Everestconsultrain) is a premier Management Consultancy specializing in ISO certification, training, and safety management solutions across industries.
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center mb-16 md:mb-20">
          <div className="w-full lg:w-1/2">
            <Parallax y={[-10, 10]} className="w-full">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
                  alt="EIMCTA team working on ISO certification"
                  className="rounded-xl shadow-lg w-full h-auto"
                  loading="lazy"
                />
              </motion.div>
            </Parallax>
          </div>

          <div className="w-full lg:w-1/2">
            <Parallax y={[-30, 30]} className="w-full">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4 md:space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission & Vision</h2>
                <p className="text-gray-700 text-base md:text-lg">
                  EIMCTA is dedicated to providing comprehensive Management Consultancy services including Documentation, Training, Implementation, and Audit Services for various ISO Standards and certifications.
                </p>
                <p className="text-gray-700 text-base md:text-lg">
                  We specialize in helping organizations achieve excellence through systematic approaches to quality, safety, and environmental management systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>ISO 9001:2015 QMS Certification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>ISO 45001:2018 OHSMS Implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>ISO 14001:2015 EMS Consulting</span>
                  </li>
                </ul>
              </motion.div>
            </Parallax>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center"
          >
            Our Comprehensive Services
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-4 sm:p-6 bg-white rounded-xl group overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div className="pb-3 sm:pb-4 flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl group-hover:text-white group-hover:bg-gradient-to-r from-blue-500 to-green-600 transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Policies Section */}
        <div className="mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center"
          >
            Our Policies & Procedures
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-4 sm:p-6 bg-white rounded-xl group overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="pb-3 sm:pb-4 flex items-center gap-3">
                    <FaFileAlt size={20} className="text-blue-600 group-hover:text-green-600 transition-colors" />
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {policy.name}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors mb-3 sm:mb-4">
                    {policy.description}
                  </p>
                  <div className="mt-auto flex gap-3 sm:gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openModal(policy.thumbnail, "image")}
                      className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-blue-600 hover:text-blue-800 transition-colors w-fit"
                    >
                      <span>Preview</span>
                    </motion.button>
                    {policy.preview && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openModal(policy.preview, "pdf")}
                        className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-blue-600 hover:text-blue-800 transition-colors w-fit"
                      >
                        <FaFilePdf className="text-red-500" />
                        <span>View PDF</span>
                      </motion.button>
                    )}
                    {policy.pageLink && (
                      <Link to={policy.pageLink} className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-blue-600 hover:text-blue-800 transition-colors">
                        <FaExternalLinkAlt size={12} />
                        <span>Details</span>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Document Viewer"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="bg-white rounded-lg p-4 w-full mx-4 sm:mx-auto my-8 max-w-4xl max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg sm:text-xl font-semibold">Document Preview</h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
            <div className="border rounded-lg p-2 sm:p-4 bg-gray-50">
              {currentFile.type === "pdf" ? (
                <iframe 
                  src={currentFile.url} 
                  className="w-full h-[60vh] sm:h-[70vh]" 
                  title="PDF Viewer"
                  loading="lazy"
                >
                  <p>Your browser does not support PDFs. <a href={currentFile.url}>Download PDF</a>.</p>
                </iframe>
              ) : (
                <img 
                  src={currentFile.url} 
                  alt="Document preview" 
                  className="w-full h-auto max-h-[70vh] object-contain"
                  loading="lazy"
                />
              )}
            </div>
            <div className="mt-4 flex justify-end gap-3">
              <a 
                href={currentFile.url} 
                download
                className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                Download
              </a>
              <button
                onClick={closeModal}
                className="px-3 sm:px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>

        {/* Expertise Section with Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-700 to-green-800 rounded-xl p-6 sm:p-8 mb-16 md:mb-20 relative overflow-hidden shadow-xl"
        >
          <PatternBackground color="from-blue-800 to-green-900" />
          <div className="relative z-10 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
              Our Certifications & Specializations
            </h2>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                  ISO Standards
                </h3>
                <div className="flex flex-wrap gap-2">
                  {isoStandards.map((standard) => (
                    <motion.span
                      key={standard}
                      whileHover={{
                        scale: 1.05,
                        background: "linear-gradient(45deg, #3b82f6, #10b981)",
                        color: "white"
                      }}
                      className="inline-block bg-white bg-opacity-10 border border-white border-opacity-20 text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full
                                 transition-all duration-300 cursor-pointer hover:bg-opacity-20"
                    >
                      {standard}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                  Specialized Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {specializedServices.map((service) => (
                    <motion.span
                      key={service}
                      whileHover={{
                        scale: 1.05,
                        background: "linear-gradient(45deg, #10b981, #3b82f6)",
                        color: "white"
                      }}
                      className="inline-block bg-white bg-opacity-10 border border-white border-opacity-20 text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full
                                 transition-all duration-300 cursor-pointer hover:bg-opacity-20"
                    >
                      {service}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4"
          >
            Ready to Achieve ISO Certification?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto"
          >
            Contact our ISO certification experts today to start your compliance journey
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/form"
                className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all shadow-md text-sm sm:text-base"
                aria-label="Get a quote for ISO certification"
              >
                Get Free Quote
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/contact-us"
                className="inline-block border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all shadow-sm text-sm sm:text-base"
                aria-label="Contact our ISO consultants"
              >
                Speak to Consultant
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal Styles */}
      <style jsx global>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.7);
          z-index: 1000;
          overflow-y: auto;
          backdrop-filter: blur(5px);
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999;
        }
      `}</style>
    </div>
  );
}