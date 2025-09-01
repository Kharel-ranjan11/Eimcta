import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { FaAward, FaHardHat, FaGraduationCap, FaTree, FaShieldAlt, FaSearch, FaFileAlt, FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Modal from "react-modal";

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
      icon: <FaAward size={24} className="text-yellow-400" />,
      description: "Complete ISO certification services for various standards",
    },
    {
      title: "OHS Consultancy",
      icon: <FaHardHat size={24} className="text-yellow-400" />,
      description: "Occupational health and safety management",
    },
    {
      title: "Training Programs",
      icon: <FaGraduationCap size={24} className="text-yellow-400" />,
      description: "Professional development and certification training",
    },
    {
      title: "Environmental Services",
      icon: <FaTree size={24} className="text-yellow-400" />,
      description: "Environmental impact assessment and management",
    },
    {
      title: "Safety Equipment",
      icon: <FaShieldAlt size={24} className="text-yellow-400" />,
      description: "PPE and safety equipment supply",
    },
    {
      title: "Third Party Audits",
      icon: <FaSearch size={24} className="text-yellow-400" />,
      description: "Independent audit and assessment services",
    },
  ];

  const isoStandards = [
    "ISO 9001:2015 QMS",
    "ISO 45001:2018 OHSMS",
    "ISO 14001:2015 EMS",
    "ISO 39001:2012 RTSMS",
    "ISO 27001:2022 ISMS",
    "ISO 15189:2022 Path Lab",
    "ISO 26000:2010 SR",
    "SA 8000",
    "ISO 55001:2014 Asset Mgmt",
    "ISO 50001:2018 Energy M",
    "ISO 41001:2018 FMS",
    "ISO 28001 Security & Resilience MS",
  ];

  const specializedServices = [
    "CE Marking",
    "RBA CoC (SVAP, SeQ)",
    "SMETA Sedex",
    "QAA",
    "HACCP",
    "HALAL",
    "GMP",
    "Third Party Audit",
    "Emergency Management",
    "Technical Bids",
  ];

  const additionalServices = [
    "ISO & OHS Consultancy",
    "ISO & OHS Trainings",
    "HRD Training Need Analysis",
    "Post Training Evaluation",
    "HR Audit",
    "Customer Excellence Program",
    "Workshops & Campaigns",
    "Emergency & Disaster Management",
    "OHS Plans & SoPs",
    "Content Writing",
    "Technical Bids/Tender Preparation",
    "Feasibility Study",
    "First Aid Training"
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
  const PatternBackground = ({ color = "from-amber-700 to-amber-900" }) => (
    <div className={`absolute inset-0 opacity-5 bg-gradient-to-r ${color}`}
      style={{
        backgroundImage: 'linear-gradient(135deg, #ffffff 10%, transparent 10%, transparent 50%, #ffffff 50%, #ffffff 60%, transparent 60%, transparent 100%)',
        backgroundSize: '15px 15px'
      }}
    ></div>
  );

  return (
    <div className="py-12 md:py-20 bg-gradient-to-br from-amber-50 to-amber-100 relative overflow-hidden" style={{ fontFamily: "'Arial Narrow', Arial, sans-serif" }}>
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
                value: ["#b45309", "#92400e", "#78350f"],
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
        <div className="text-center mb-12 md:mb-16 relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-700 to-amber-900 p-8 md:p-12 text-white">
          <PatternBackground color="from-amber-700 to-amber-900" />
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-amber-300 to-amber-100 bg-clip-text text-transparent">
                About EIMCTA - Leading ISO Certification Experts
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400"></span>
            </h1>
            <p className="text-lg sm:text-xl text-amber-100 max-w-3xl mx-auto">
              EIMCTA (Everestconsultrain) is a premier Management Consultancy specializing in ISO certification, training, and safety management solutions across industries.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center mb-16 md:mb-20">
          <div className="w-full lg:w-1/2">
            <Parallax y={[-10, 10]} className="w-full">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
                  alt="EIMCTA team working on ISO certification"
                  className="rounded-xl shadow-lg w-full h-auto"
                  loading="lazy"
                />
              </div>
            </Parallax>
          </div>

          <div className="w-full lg:w-1/2">
            <Parallax y={[-30, 30]} className="w-full">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-amber-900 relative inline-block pb-2">
                  Our Mission & Vision
                  <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-yellow-400"></span>
                </h2>
                <p className="text-gray-700 text-base md:text-lg">
                  EIMCTA (Everestconsultrain) is a Management Consultancy providing comprehensive Documentation, Training, Implementation and Audit Services for Certification of Various ISO Standards, CE Marking, RBA CoC, SMETA Sedex, and QAA.
                </p>
                <p className="text-gray-700 text-base md:text-lg">
                  We specialize in helping organizations achieve excellence through systematic approaches to quality, safety, and environmental management systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>ISO 9001:2015 QMS Certification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>ISO 45001:2018 OHSMS Implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>ISO 14001:2015 EMS Consulting</span>
                  </li>
                </ul>
              </div>
            </Parallax>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-8 md:mb-12 text-center relative inline-block pb-2">
            Our Comprehensive Services
            <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-yellow-400 mx-auto right-0"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative p-4 sm:p-6 bg-white rounded-xl overflow-hidden transition-all duration-300 border border-amber-200 shadow-md hover:shadow-lg"
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div className="pb-3 sm:pb-4 flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center text-xl">
                      {service.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-amber-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-8 md:mb-12 text-center relative inline-block pb-2">
            Additional Professional Services
            <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-yellow-400 mx-auto right-0"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="relative p-4 sm:p-5 bg-amber-100/50 rounded-lg transition-all duration-300 border border-amber-200 shadow-sm"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-amber-700 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-base font-medium text-amber-800">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Policies Section */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-8 md:mb-12 text-center relative inline-block pb-2">
            Our Policies & Procedures
            <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-yellow-400 mx-auto right-0"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="relative p-4 sm:p-6 bg-white rounded-xl overflow-hidden transition-all duration-300 border border-amber-200 shadow-md hover:shadow-lg"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="pb-3 sm:pb-4 flex items-center gap-3">
                    <FaFileAlt size={20} className="text-amber-600" />
                    <h3 className="text-base sm:text-lg font-semibold text-amber-900">
                      {policy.name}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    {policy.description}
                  </p>
                  <div className="mt-auto flex gap-3 sm:gap-4">
                    <button
                      onClick={() => openModal(policy.thumbnail, "image")}
                      className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-amber-600 hover:text-amber-800 transition-colors w-fit"
                    >
                      <span>Preview</span>
                    </button>
                    {policy.preview && (
                      <button
                        onClick={() => openModal(policy.preview, "pdf")}
                        className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-amber-600 hover:text-amber-800 transition-colors w-fit"
                      >
                        <FaFilePdf className="text-red-500" />
                        <span>View PDF</span>
                      </button>
                    )}
                    {policy.pageLink && (
                      <Link to={policy.pageLink} className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-amber-600 hover:text-amber-800 transition-colors">
                        <FaExternalLinkAlt size={12} />
                        <span>Details</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
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
                className="px-3 sm:px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors text-sm sm:text-base"
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
        <div className="bg-gradient-to-br from-amber-700 to-amber-900 rounded-xl p-6 sm:p-8 mb-16 md:mb-20 relative overflow-hidden shadow-xl">
          <PatternBackground color="from-amber-800 to-amber-900" />
          <div className="relative z-10 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center relative inline-block pb-2">
              Our Certifications & Specializations
              <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-yellow-400 mx-auto right-0"></span>
            </h2>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-amber-100">
                  ISO Standards
                </h3>
                <div className="flex flex-wrap gap-2">
                  {isoStandards.map((standard) => (
                    <span
                      key={standard}
                      className="inline-block bg-white bg-opacity-10 border border-white border-opacity-20 text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full transition-all duration-300 cursor-pointer hover:bg-opacity-20"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-amber-100">
                  Specialized Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {specializedServices.map((service) => (
                    <span
                      key={service}
                      className="inline-block bg-white bg-opacity-10 border border-white border-opacity-20 text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full transition-all duration-300 cursor-pointer hover:bg-opacity-20"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Optimization Section */}
        <div className="bg-white rounded-xl p-6 md:p-8 mb-16 md:mb-20 border border-amber-200 shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6 text-center relative inline-block pb-2">
            Why Choose EIMCTA for Your Certification Needs?
            <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-yellow-400 mx-auto right-0"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-4">Expertise & Experience</h3>
              <p className="text-gray-700 mb-4">
                With years of industry experience, our team of certified professionals provides comprehensive consultancy services tailored to your organization's specific needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Industry-experienced consultants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Proven track record of successful certifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Customized solutions for each client</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-4">Comprehensive Support</h3>
              <p className="text-gray-700 mb-4">
                From initial assessment to final certification and beyond, we provide end-to-end support throughout your compliance journey.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Documentation preparation and review</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Employee training and awareness programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Continuous improvement support</span>
                </li>
              </ul>
            </div>
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
        
        /* Arial Narrow font application */
        body, html {
          font-family: 'Arial Narrow', Arial, sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}