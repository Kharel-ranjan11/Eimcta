import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// --- SVG Icons ---
// Replaced react-icons with inline SVGs for a self-contained component.
const FaAward = () => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 33.6l-20.9 42.3-46.7 6.8 33.8 32.9-8 46.5 41.8-22 41.8 22-8-46.5 33.8-32.9-46.7-6.8L256 33.6zM128 160H84.8c-11.2 0-21.2 9.1-22.3 20.3-1.1 11.2 6.8 21.2 17.5 23.4l96.8 20.3 33.8 91.5-60.1 29.1-85-85c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9l128 128c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9l-85-85 29.1-60.1 91.5 33.8 20.3 96.8c2.2 10.7 12.2 18.6 23.4 17.5 11.2-1.1 20.3-11.2 20.3-22.3V160h-43.2l-33.6 71.4-71.4-33.6L128 160zm256 0h43.2c11.2 0 21.2-9.1 22.3-20.3 1.1-11.2-6.8-21.2-17.5-23.4l-96.8-20.3-33.8-91.5 60.1-29.1 85 85c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9l-128-128c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4-24.6 0-33.9l85 85-29.1 60.1-91.5-33.8-20.3-96.8c-2.2-10.7-12.2-18.6-23.4-17.5-11.2 1.1-20.3 11.2-20.3 22.3V160h43.2l33.6 71.4 71.4-33.6L384 160z"></path></svg>);
const FaHardHat = () => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M571.3 133.3l-112-104c-18.3-17-44.5-17.6-63.5-1.4L291.1 128H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v80c0 26.5 21.5 48 48 48h48v32c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-80c0-26.5-21.5-48-48-48h-48v-48c0-23.2 16.5-42.9 38.9-47.2l45.4-8.8c13.2-2.6 22.7-14.8 21.5-28.1-1.2-13.3-12.8-23.4-26.1-22.1zM144 384v-32h320v32H144zm368-80v32h-48v-32h48zm-96 0v32h-48v-32h48zm-96 0v32h-48v-32h48zm-96 0v32h-48v-32h48z"></path></svg>);
const FaGraduationCap = () => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M622.34 153.2L343.4 27.2c-17.4-7.7-37.4-7.7-54.8 0L17.66 153.2c-17.4 7.7-17.4 28.3 0 36l271.4 126c17.4 7.7 37.4 7.7 54.8 0l271.4-126c17.4-7.7 17.4-28.3 0-36zM320 336c-20.9 0-40.4-3.5-58.5-9.8l-15.8 47.4c6 2 12.3 3.4 18.8 4.4l-11.4 34.1c-16.1-2.7-31.5-6.6-45.9-11.6l-11.3 34c16.3 5.4 33.3 9.4 50.8 11.9l-11.7 35c-20.9-3.2-41-8.3-59.8-15.1l-11.4 34c21.8 8.1 44.8 14.1 68.8 17.6l-11.8 35.4c-28.1-4.7-55.2-12-80.7-21.6L128 480h384l-31.4-94.2c-25.5 9.6-52.6 16.9-80.7 21.6l-11.8-35.4c24-3.5 47-9.5 68.8-17.6l-11.4-34c-18.8 6.8-38.9 11.9-59.8 15.1l-11.7-35c17.5-2.5 34.5-6.5 50.8-11.9l-11.3-34c-14.4 5-29.8 8.9-45.9 11.6l-11.4-34.1c6.5-1 12.8-2.4 18.8-4.4l-15.8-47.4c-18.1 6.3-37.6 9.8-58.5 9.8z"></path></svg>);
const FaTree = () => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M544 480h-48a16 16 0 0 0-16 16v-16h-64v16a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v-16h-64v16a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v-16H48v16a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h544a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM288 320a48 48 0 0 0 48-48V115.54a48 48 0 1 0-96 0V272a48 48 0 0 0 48 48zM520 208.23a16 16 0 0 0-10.47-15.11l-96-32A16 16 0 0 0 400 176v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-1.53-7.16l-38.4-64a16 16 0 0 0-13.51-7.15H368a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h22.63l19.2 32H384a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-1.37l28.8-48H504a16 16 0 0 0 16-16v-16a16 16 0 0 0-.53-.23zM96 160a16 16 0 0 0 13.51-7.15L144 88.46V176a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v32a16 16 0 0 0-1.53 7.16l-38.4 64A16 16 0 0 0 56 223.77V208a16 16 0 0 0 16-16h22.63l19.2-32H80a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-1.37l28.8 48H176a16 16 0 0 0 16-16v-16a16 16 0 0 0-.53-.23l-96 32A16 16 0 0 0 64 160.46V192a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16z"></path></svg>);
const FaShieldAlt = () => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 93.7 0 122.4 0 158.2v195.5A48.2 48.2 0 0 0 48.2 502h415.5A48.2 48.2 0 0 0 512 453.8V158.2c0-35.8-27.7-64.5-45.5-74.5zM256 448c-66.2 0-112-53.8-112-120s45.8-120 112-120 112 53.8 112 120-45.8 120-112 120z"></path></svg>);
const FaSearch = () => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>);
const FaFileAlt = () => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"></path></svg>);
const FaExternalLinkAlt = () => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>);
const FaPhone = () => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>);
const FaEnvelope = () => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2 0 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.4 73.4 41.4z"></path></svg>);
const FaMapMarkerAlt = () => (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67a24 24 0 0 1-35.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>);

// --- Animation Variants ---
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } };
const itemVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } } };
const slideInLeft = { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } };
const slideInRight = { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } };
const slideInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } } };
const scaleUp = { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } } };
const rotate3D = { hidden: { opacity: 0, rotateX: -10, y: 30 }, visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } };
const underlineVariant = { hidden: { width: 0 }, visible: { width: "25%", transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 } } };

// --- Reusable Helper Components ---

const PatternBackground = ({ color = "from-amber-700 to-amber-900" }) => (
  <div className={`absolute inset-0 opacity-5 bg-gradient-to-r ${color}`}
    style={{
      backgroundImage: 'linear-gradient(135deg, #ffffff 10%, transparent 10%, transparent 50%, #ffffff 50%, #ffffff 60%, transparent 60%, transparent 100%)',
      backgroundSize: '15px 15px'
    }}
  ></div>
);

const SectionHeader = ({ children, className = "", viewState = true }) => (
  <motion.div
    className={`relative inline-block ${className}`}
    initial="hidden"
    animate={viewState ? "visible" : "hidden"}
    variants={containerVariants}
  >
    <motion.h2
      variants={itemVariants}
      className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center inline-block"
    >
      {children}
    </motion.h2>
    <motion.div
      variants={underlineVariant}
      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-amber-600 rounded-lg"
      style={{ originX: 0.5 }}
    />
  </motion.div>
);

const ThreeDCard = ({ children, className = "" }) => (
  <motion.div
    whileHover={{
      y: -8,
      rotateX: 2,
      rotateY: -1,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
    className={`transform-gpu transition-all duration-400 hover:shadow-xl ${className}`}
    style={{
      transformStyle: 'preserve-3d',
      perspective: '1000px'
    }}
  >
    {children}
  </motion.div>
);

// --- Custom Modal Component ---
const CustomModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white rounded-lg p-4 w-full max-w-4xl max-h-[90vh] overflow-auto focus:outline-none"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </motion.div>
        </div>
    );
};


// --- Business Quote Form Component ---



// --- Main About Component ---
export default function About() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState({ url: "", type: "" });
  const [activeSection, setActiveSection] = useState("mission");
  const sectionsRef = useRef({});

  // Refs for scroll animations
  const missionRef = useRef(null);
  const servicesRef = useRef(null);
  const policiesRef = useRef(null);
  const expertiseRef = useRef(null);
  const contactRef = useRef(null);
  const whyChooseRef = useRef(null);
  const coreServicesRef = useRef(null);
  const valuesRef = useRef(null);

  const isMissionInView = useInView(missionRef, { once: true, margin: "-20%" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-20%" });
  const isPoliciesInView = useInView(policiesRef, { once: true, margin: "-20%" });
  const isExpertiseInView = useInView(expertiseRef, { once: true, margin: "-20%" });
  const isWhyChooseInView = useInView(whyChooseRef, { once: true, margin: "-20%" });
  const isCoreServicesInView = useInView(coreServicesRef, { once: true, margin: "-20%" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-20%" });


  // --- Data Arrays ---
  const policies = [
    { name: "Quality Policy", description: "Commitment to delivering excellence in all our services", preview: "https://placehold.co/600x400/92400e/FFFFFF?text=Quality+Policy", pageLink: "#" },
    { name: "Anti-Bribery Policy", description: "Zero tolerance for corruption and unethical practices", preview: "https://placehold.co/600x400/b45309/FFFFFF?text=Anti-Bribery", pageLink: "#" },
    { name: "OHS Policy", description: "Prioritizing occupational health and safety", preview: "https://placehold.co/600x400/d97706/FFFFFF?text=OHS+Policy", pageLink: "#" },
    { name: "Impartiality Policy", description: "Ensuring fair and unbiased service delivery", preview: "https://placehold.co/600x400/f59e0b/FFFFFF?text=Impartiality", pageLink: "#" },
  ];
  const services = [
    { title: "ISO Certification & Training", icon: <FaAward size={24} className="text-amber-700 group-hover:text-white" />, description: "Certification for standards like ISO 9001, 45001, 14001, and more, plus expert training." },
    { title: "OHS & Consultancy", icon: <FaHardHat size={24} className="text-amber-700 group-hover:text-white" />, description: "Health plans, environmental services, GMP, HACCP, CE marking, and disaster management." },
    { title: "Digital Transformation", icon: <FaGraduationCap size={24} className="text-amber-700 group-hover:text-white" />, description: "Paperless systems, marketing strategies, data analysis, and ERP solutions for efficiency." },
    { title: "Corporate Training", icon: <FaTree size={24} className="text-amber-700 group-hover:text-white" />, description: "ISO Auditor, OHS, fire safety, road safety, Lean Six Sigma, PMP, and Primavera training." },
    { title: "Supply & Outsourcing", icon: <FaShieldAlt size={24} className="text-amber-700 group-hover:text-white" />, description: "OHS signage, traffic safety equipment, PPEs, and fire safety gear." },
    { title: "Third Party Services", icon: <FaSearch size={24} className="text-amber-700 group-hover:text-white" />, description: "Audits, inspections, incident investigations, testing, calibration, and certification." },
  ];
  const values = [
    { title: 'Our Belief', description: 'We see every client relationship as more than just business; it is a long-term partnership built on trust.' },
    { title: 'Our Path', description: 'Delivering competitive, reliable, ethical, and timely services to ensure the highest level of client satisfaction.' },
    { title: 'Our Mission', description: 'To provide ethical, impartial, and professional services anytime, anywhere.' },
    { title: 'Our Vision', description: 'Expanding our services across Nepal, neighboring countries, and beyond to meet the expectations of world-class clients.' },
  ];
  const isoStandards = ["ISO 9001:2015 QMS", "ISO 45001:2018 OHSMS", "ISO 14001:2015 EMS", "ISO 39001:2012 RTSMS", "ISO 27001:2022 ISMS", "ISO 15189:2022 Path Lab", "ISO 26000:2010 SR", "SA 8000", "ISO 55001:2014 Asset Mgmt", "ISO 50001:2018 Energy M", "ISO 41001:2018 FMS", "ISO 28001 Security & Resilience MS"];
  const specializedServices = ["CE Marking", "RBA CoC (SVAP, SeQ)", "SMETA Sedex", "QAA", "HACCP", "HALAL", "GMP", "Third Party Audit", "Emergency Management", "Technical Bids"];

  // --- Functions ---
  const openModal = (fileUrl) => {
    setCurrentFile({ url: fileUrl });
    setModalIsOpen(true);
  };
  const closeModal = () => { setModalIsOpen(false); };
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    sectionsRef.current[sectionId]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-12 md:py-20 bg-amber-50 relative overflow-hidden font-sans">
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm shadow-md hidden md:block">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-6 py-3">
            {[
              { id: "mission", label: "About Us" }, { id: "services", label: "Services" },
              { id: "policies", label: "Policies" }, { id: "expertise", label: "Expertise" },
              { id: "contact", label: "Contact" }
            ].map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === item.id ? "bg-amber-100 text-amber-800" : "text-gray-600 hover:text-amber-700 hover:bg-amber-50"}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Hero Section */}
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="text-center mb-12 md:mb-16 relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-700 to-amber-900 p-8 md:p-12 text-white">
          <PatternBackground color="from-amber-700 to-amber-900" />
          <div className="relative z-10">
            <motion.h1 variants={slideInRight} className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-amber-300 to-amber-100 bg-clip-text text-transparent">About EIMCTA - Your Partner in Excellence</span>
            </motion.h1>
            <motion.p variants={slideInLeft} className="text-lg sm:text-xl text-amber-100 max-w-3xl mx-auto">
              Welcome to Everest International Management Consultancy & Training Agency (EIMCTA), your trusted partner for comprehensive management solutions.
            </motion.p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <div ref={el => { sectionsRef.current.mission = el; missionRef.current = el; }} className="mb-16 md:mb-20">
          <motion.div initial={{ opacity: 0 }} animate={isMissionInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8 }} className="w-full">
            <div className="flex justify-center mb-8"><SectionHeader viewState={isMissionInView}>About Our Agency</SectionHeader></div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={isMissionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full mb-8">
              <img src="https://placehold.co/1200x800/d97706/FFFFFF?text=Everest+International" alt="EIMCTA Team Collaboration" className="rounded-xl shadow-lg w-full h-auto" loading="lazy" />
            </motion.div>
             <motion.div initial={{ opacity: 0, y: 30 }} animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 0.3 }} className="space-y-4 text-gray-700 text-base md:text-lg bg-white p-6 md:p-8 rounded-xl shadow-md border border-amber-100">
                <p>
                    We specialize in helping businesses achieve competitive, adaptable, and result-oriented management systems, conforming to international standards such as ISO, CE, BS, IEC/EN, and ANSI.
                </p>
                <p>
                    Our expert team brings extensive experience in consultancy and certification services. We assist organizations in documenting and streamlining their operational processes to meet ISO standards, ensuring your business runs more efficiently and autonomously. ISO standards are not just a formal requirement; they are essential tools for improving overall business performance.
                </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Why Choose Section */}
        <div ref={whyChooseRef} className="mb-16 md:mb-20">
            <div className="flex justify-center mb-8"><SectionHeader viewState={isWhyChooseInView}>Why Choose EIMCTA?</SectionHeader></div>
            <motion.div className="grid md:grid-cols-2 gap-8 mt-8" variants={containerVariants} initial="hidden" animate={isWhyChooseInView ? "visible" : "hidden"}>
                <ThreeDCard><motion.div variants={slideInLeft} className="bg-white p-8 rounded-xl shadow-lg border border-amber-100 h-full"><h4 className="font-bold text-xl mb-3 text-amber-700">Tailored Solutions</h4><p className="text-gray-600">Our consultancy services are designed to fit seamlessly into your business processes, making ISO standards and certifications highly adaptable and workable for your organization.</p></motion.div></ThreeDCard>
                <ThreeDCard><motion.div variants={slideInRight} className="bg-white p-8 rounded-xl shadow-lg border border-amber-100 h-full"><h4 className="font-bold text-xl mb-3 text-amber-700">Client Satisfaction</h4><p className="text-gray-600">We are proud to have been recognized by our clients for our practical and effective solutions, which consistently meet their needs.</p></motion.div></ThreeDCard>
            </motion.div>
        </div>

        {/* Services Grid (Main Services) */}
        <div ref={el => { sectionsRef.current.services = el; servicesRef.current = el; }} className="mb-16 md:mb-20">
          <div className="flex justify-center mb-8"><SectionHeader viewState={isServicesInView}>Our Core Services</SectionHeader></div>
          <motion.div variants={containerVariants} initial="hidden" animate={isServicesInView ? "visible" : "hidden"} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const animationVariants = [slideInLeft, slideInUp, slideInRight];
              const variant = animationVariants[index % 3];
              return (
              <ThreeDCard key={index}>
                <motion.div variants={variant} whileHover={{ y: -12, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)", transition: { duration: 0.3, ease: "easeOut" } }} className="relative p-6 bg-white rounded-xl group overflow-hidden hover:shadow-lg transition-all duration-400 border border-amber-100 h-full" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="pb-4 flex items-center gap-4">
                      <motion.div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-xl group-hover:text-white group-hover:bg-gradient-to-r from-amber-600 to-amber-800 transition-all duration-400" whileHover={{ rotate: 8, scale: 1.05 }}>
                        {service.icon}
                      </motion.div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">{service.title}</h3>
                    </div>
                    <p className="text-base text-gray-600 group-hover:text-gray-700 transition-colors">{service.description}</p>
                  </div>
                </motion.div>
              </ThreeDCard>
            )})}
          </motion.div>
        </div>
        
        {/* Our Values Section */}
        <div ref={valuesRef} className="mb-16 md:mb-20">
            <div className="flex justify-center mb-8"><SectionHeader viewState={isValuesInView}>Our Values</SectionHeader></div>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8" variants={containerVariants} initial="hidden" animate={isValuesInView ? "visible" : "hidden"}>
                {values.map((value, index) => {
                    const animationVariants = [slideInLeft, slideInUp, slideInUp, slideInRight];
                    return (
                        <ThreeDCard key={index}>
                            <motion.div variants={animationVariants[index % 4]} className="bg-white p-6 rounded-xl shadow-lg border border-amber-100 h-full text-center flex flex-col justify-center items-center">
                                <h4 className="font-bold text-amber-700 text-xl mb-2">{value.title}</h4>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        </ThreeDCard>
                    )
                })}
            </motion.div>
        </div>

        {/* Policies Section */}
        <div ref={el => { sectionsRef.current.policies = el; policiesRef.current = el; }} className="mb-16 md:mb-20">
            <div className="flex justify-center mb-8"><SectionHeader viewState={isPoliciesInView}>Our Policies & Procedures</SectionHeader></div>
            <motion.div variants={containerVariants} initial="hidden" animate={isPoliciesInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {policies.map((policy, index) => (
                    <ThreeDCard key={index}>
                        <motion.div variants={index % 2 === 0 ? rotate3D : scaleUp} className="relative bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-400 border border-amber-100 group" style={{ transformStyle: 'preserve-3d' }}>
                            <button onClick={() => openModal(policy.preview)} className="block w-full h-48 bg-gray-200 cursor-zoom-in overflow-hidden relative">
                                <img src={policy.preview} alt={policy.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-400 flex items-center justify-center">
                                    <div className="text-white bg-amber-600 bg-opacity-0 group-hover:bg-opacity-80 rounded-full p-3 transition-all duration-300 scale-0 group-hover:scale-100"><FaSearch size={20} /></div>
                                </div>
                            </button>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3"><FaFileAlt size={20} className="text-amber-600" /><h3 className="text-lg font-semibold text-gray-900">{policy.name}</h3></div>
                                <p className="text-gray-600 mb-4">{policy.description}</p>
                                <div className="flex gap-4">
                                    <motion.button whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={() => openModal(policy.preview)} className="flex items-center gap-2 text-amber-600 hover:text-amber-800 transition-colors">
                                        <FaSearch className="text-blue-500" /><span>Preview Image</span>
                                    </motion.button>
                                    <motion.a href={policy.pageLink} className="flex items-center gap-2 text-amber-600 hover:text-amber-800 transition-colors" whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                        <FaExternalLinkAlt size={12} /><span>Details</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </ThreeDCard>
                ))}
            </motion.div>
        </div>

        {/* Custom Modal for Policy Previews */}
        <CustomModal isOpen={modalIsOpen} onClose={closeModal}>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg sm:text-xl font-semibold">Document Preview</h3>
                <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={closeModal} className="text-gray-500 hover:text-gray-900 text-2xl transition-colors" aria-label="Close modal">&times;</motion.button>
            </div>
            <div className="border rounded-lg p-2 sm:p-4 bg-gray-50">
                <motion.img initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} src={currentFile.url} alt="Document preview" className="w-full h-auto max-h-[70vh] object-contain" loading="lazy" />
            </div>
            <div className="mt-4 flex justify-end">
                <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} onClick={closeModal} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">Close</motion.button>
            </div>
        </CustomModal>

        {/* Expertise Section */}
        <div ref={el => { sectionsRef.current.expertise = el; expertiseRef.current = el; }} className="mb-16 md:mb-20">
            <div className="flex justify-center mb-8"><SectionHeader viewState={isExpertiseInView}>Our Certifications & Specializations</SectionHeader></div>
            <motion.div initial={{ opacity: 0 }} animate={isExpertiseInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-amber-700 to-amber-900 rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
                <PatternBackground color="from-amber-800 to-amber-900" />
                <div className="relative z-10 text-white">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                        <div className="flex-1"><h3 className="text-lg md:text-xl font-semibold mb-4">ISO Standards</h3><div className="flex flex-wrap gap-2">{isoStandards.map((standard, index) => (<motion.span key={standard} initial={{ opacity: 0, scale: 0.8 }} animate={isExpertiseInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 0.4, delay: index * 0.04 }} whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.2)", transition: { duration: 0.2 } }} className="inline-block bg-white bg-opacity-10 border border-white border-opacity-20 text-white text-xs sm:text-sm font-medium px-3 py-2 rounded-full transition-all duration-300 cursor-default">{standard}</motion.span>))}</div></div>
                        <div className="flex-1"><h3 className="text-lg md:text-xl font-semibold mb-4">Specialized Services</h3><div className="flex flex-wrap gap-2">{specializedServices.map((service, index) => (<motion.span key={service} initial={{ opacity: 0, scale: 0.8 }} animate={isExpertiseInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 0.4, delay: index * 0.04 + 0.2 }} whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.2)", transition: { duration: 0.2 } }} className="inline-block bg-white bg-opacity-10 border border-white border-opacity-20 text-white text-xs sm:text-sm font-medium px-3 py-2 rounded-full transition-all duration-300 cursor-default">{service}</motion.span>))}</div></div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Contact Section */}
        <div ref={el => { sectionsRef.current.contact = el; contactRef.current = el; }}>
            {/* <BusinessQuoteForm /> */}
        </div>
      </div>
    </div>
  );
}

