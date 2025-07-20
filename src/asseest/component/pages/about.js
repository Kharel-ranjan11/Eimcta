import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { FaAward, FaHardHat, FaGraduationCap, FaTree, FaShieldAlt, FaSearch, FaFileAlt, FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Modal from "react-modal";

// Make sure to bind modal to your appElement
Modal.setAppElement('#root');

export default function About() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPdf, setCurrentPdf] = useState("");

  const policies = [
    {
      name: "Quality Policy",
      description: "Commitment to delivering excellence in all our services",
      preview: "/docs/quality-policy.pdf",
      pageLink: "/policies/quality"
    },
    {
      name: "Anti-Bribery Policy",
      description: "Zero tolerance for corruption and unethical practices",
      preview: "/docs/anti-bribery-policy.pdf",
      pageLink: "/policies/anti-bribery"
    },
    {
      name: "OHS Policy",
      description: "Prioritizing occupational health and safety",
      preview: "/docs/ohs-policy.pdf",
      pageLink: "/policies/ohs"
    },
    {
      name: "Impartiality Policy",
      description: "Ensuring fair and unbiased service delivery",
      preview: "/docs/impartiality.pdf",
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

  const openPdfModal = (url) => {
    console.log("Opening PDF:", url);
    setCurrentPdf("");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Particles Background - Positioned at bottom */}
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
                value: "#3b82f6",
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 40,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: ["circle", "square", "triangle"],
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
            // Position particles mostly at the bottom
            emitters: {
              position: {
                x: 50,
                y: 100
              },
              size: {
                width: 100,
                height: 0
              },
              rate: {
                delay: 0.1,
                quantity: 1
              },
              life: {
                count: 0,
                duration: 3,
                delay: 5
              }
            }
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About EIMCTA</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EIMCTA (Everestconsultrain) is a leading Management Consultancy
            providing comprehensive solutions for ISO certification, training,
            and safety management.
          </p>
        </motion.div>

        {/* Main Content with Enhanced Parallax Effect */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
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
                className="rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] w-full h-auto"
              />
            </motion.div>
          </Parallax>

          <Parallax y={[-30, 30]} className="w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-700">
                EIMCTA is dedicated to providing comprehensive Management
                Consultancy services including Documentation, Training,
                Implementation, and Audit Services for various ISO Standards and
                certifications. We specialize in helping organizations achieve
                excellence through systematic approaches to quality, safety, and
                environmental management.
              </p>
              <p className="text-gray-700">
                Our services encompass ISO 9001:2015 QMS, ISO 45001:2018 OHSMS, ISO
                14001:2015 EMS, ISO 39001:2012 RTSMS, ISO 27001:2022 ISMS, and many
                other international standards. We also provide specialized services
                like CE Marking, RBA CoC, SMETA Sedex, and comprehensive training
                programs.
              </p>
            </motion.div>
          </Parallax>
        </div>

        {/* Services Grid with Rotating Gradient Border */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Our Core Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(239, 246, 255, 1)' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 bg-white rounded-xl group overflow-hidden hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div className="pb-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl group-hover:text-white group-hover:bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Policies Section with Modal PDF Viewer */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Our Policies
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(239, 246, 255, 1)' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 bg-white rounded-xl group overflow-hidden hover:bg-blue-50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)]"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="pb-4 flex items-center gap-3">
                    <FaFileAlt size={24} className="text-blue-600 group-hover:text-purple-600 transition-colors" />
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {policy.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors mb-4">
                    {policy.description}
                  </p>
                  <div className="mt-auto flex gap-4">
                    {policy.preview && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openPdfModal(policy.preview)}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors w-fit"
                      >
                        <FaFilePdf className="text-red-500" />
                        <span>View PDF</span>
                      </motion.button>
                    )}
                    {policy.pageLink && (
                      <Link to={policy.pageLink} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                        <FaExternalLinkAlt size={14} />
                        <span>Learn More</span>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PDF Viewer Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="PDF Viewer"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="bg-white rounded-lg p-4 max-w-4xl mx-auto my-8 max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Policy Document</h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <iframe 
                src={currentPdf} 
                className="w-full h-[70vh]" 
                title="PDF Viewer"
              >
                <p>Your browser does not support PDFs. Please download the PDF to view it: <a href={currentPdf}>Download PDF</a>.</p>
              </iframe>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 mb-20 relative overflow-hidden shadow-[0_20px_50px_rgba(59,130,246,0.1)]"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 animate-spin-slow"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  ISO Standards
                </h3>
                <div className="flex flex-wrap gap-2">
                  {isoStandards.map((standard) => (
                    <motion.span
                      key={standard}
                      whileHover={{
                        scale: 1.05,
                        background: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                        color: "white"
                      }}
                      className="inline-block bg-white border border-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full
                                 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                    >
                      {standard}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Specialized Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {specializedServices.map((service) => (
                    <motion.span
                      key={service}
                      whileHover={{
                        scale: 1.05,
                        background: "linear-gradient(45deg, #8b5cf6, #3b82f6)",
                        color: "white"
                      }}
                      className="inline-block bg-white border border-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full
                                 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
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
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Ready to Work With Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8"
          >
            Let's discuss how we can help your organization achieve its
            certification goals
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/form"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all shadow-[0_4px_15px_rgba(59,130,246,0.3)]"
              >
                Get Quote
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/contact-us"
                className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all shadow-[0_4px_15px_rgba(59,130,246,0.1)]"
              >
                Contact Us
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
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 999;
        }
      `}</style>
    </div>
  );
}