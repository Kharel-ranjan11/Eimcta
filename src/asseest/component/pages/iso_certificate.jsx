import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";

// --- SVG Icons (replaces react-icons dependency) ---
const IconWrapper = ({ children, className, size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size} className={className} fill="currentColor">
        {children}
    </svg>
);

const FaHandshake = (props) => (<IconWrapper {...props}><path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-7.5 6.9-11.9 16.5-11.9 26.6v5.6c0 12.6 5.1 24.3 13.8 32.7L344 320H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h216c8.8 0 16.8-3.9 22.4-10.5l112-131.2c13-15.1 14-36.4 2.4-52.6L456.3 72.4c-5.9-5.4-13.6-8.4-21.6-8.4zM0 288c0-10.6 4.4-20.5 12-27.2l80-73.8c7.5-6.9 17.3-11 27.6-11h16.5c10.3 0 20.1 4.1 27.6 11l80 73.8c7.6 6.7 12 16.6 12 27.2v16c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-16z"/></IconWrapper>);
const FaSearch = (props) => (<IconWrapper {...props}><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0-70.7-57.2 128-128 128z"/></IconWrapper>);
const FaClipboardCheck = (props) => (<IconWrapper {...props}><path d="M432 0H80C35.8 0 0 35.8 0 80v352c0 44.2 35.8 80 80 80h352c44.2 0 80-35.8 80-80V80c0-44.2-35.8-80-80-80zM236.8 385.5c-4.7 4.7-12.3 4.7-17 0l-71-71c-4.7-4.7-4.7-12.3 0-17l17-17c4.7-4.7 12.3-4.7 17 0l47.5 47.5 105.5-105.5c4.7-4.7 12.3-4.7 17 0l17 17c4.7 4.7 4.7 12.3 0 17l-124 124z"/></IconWrapper>);
const FaBuilding = (props) => (<IconWrapper {...props}><path d="M480 32H32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM160 160c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32zm0 128c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32zm160-128c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32zm0 128c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32z"/></IconWrapper>);
const FaCheckCircle = (props) => (<IconWrapper {...props}><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 34z"/></IconWrapper>);
const FaChartLine = (props) => (<IconWrapper {...props}><path d="M502.6 214.6c12.5-12.5 12.5-32.8 0-45.3l-40-40c-12.5-12.5-32.8-12.5-45.3 0L320 226.7 203.4 110.1c-12.5-12.5-32.8-12.5-45.3 0l-40 40c-12.5 12.5-12.5 32.8 0 45.3L128 266.7l-86.6 86.6C12.5 382.1 12.5 402.4 25.4 415.2l40 40c12.5 12.5 32.8 12.5 45.3 0L224 341.3l116.6 116.6c12.5 12.5 32.8 12.5 45.3 0l40-40c12.5-12.5 12.5-32.8 0-45.3L320 282.7l96.6-96.6z"/></IconWrapper>);
const FaCertificate = (props) => (<IconWrapper {...props}><path d="M256 0c-17.7 0-32 14.3-32 32V64H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v32c0 17.7 14.3 32 32 32s32-14.3 32-32V128h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288V32c0-17.7-14.3-32-32-32zM416 320c0 88.4-71.6 160-160 160S96 408.4 96 320c0-68.9 44.2-128.9 108.8-151.6c6.2-2.2 12.9-1.3 18.2 2.6c5.4 3.9 8.9 9.9 8.9 16.3V256c0 6.6-3.8 12.7-9.8 15.6C216 279.1 208 298.6 208 320c0 26.5 21.5 48 48 48s48-21.5 48-48c0-21.4-8-40.9-20.2-50.4c-6-3-9.8-9-9.8-15.6V187.3c0-6.4 3.6-12.4 8.9-16.3c5.3-3.9 12-4.8 18.2-2.6C371.8 191.1 416 251.1 416 320z"/></IconWrapper>);
const FaAward = (props) => (<IconWrapper {...props}><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm22.6-214.6l-52.1 26.6c-4.9 2.5-10.7 2.5-15.6 0L158.6 270.8c-4.6-2.3-7.9-6.8-8.8-11.9l-12.4-69c-1.3-7.3 4-13.9 11.4-13.9h54.9c5 0 9.7 2.2 12.8 6l42.4 51.6c3.4 4.1 8.4 6.5 13.6 6.5s10.3-2.4 13.6-6.5l42.4-51.6c3.1-3.8 7.8-6 12.8-6h54.9c7.3 0 12.7 6.6 11.4 13.9l-12.4 69c-.9 5.1-4.2 9.6-8.8 11.9l-52.1 26.6c-4.9 2.5-10.7 2.5-15.6 0l-26.6-13.5c-4.3-2.2-9.5-2.2-13.8 0l-26.6 13.5z"/></IconWrapper>);
const FaShieldAlt = (props) => (<IconWrapper {...props}><path d="M256 0L48 102.4V288c0 114.7 94.6 209.7 208 224c113.4-14.3 208-109.3 208-224V102.4L256 0z"/></IconWrapper>);
const FaFlagCheckered = (props) => (<IconWrapper {...props}><path d="M32 0H0v32h32V0zm32 32h32V0h-32v32zm0 32H32v32h32V64zm32 32h32V64h-32v32zM32 64H0v32h32V64zm64-32h32V0h-32v32zm-32 0V0H32v32h32zm64 32h32V32h-32v32zM96 64H64v32h32V64zm32-32V0H96v32h32zm0 64H96v32h32V96zm32-32h32V32h-32v32zM128 64V32h-32v32h32zm32 32V64h-32v32h32zm32-64h32V0h-32v32zM160 32V0h-32v32h32zm32 32h32V32h-32v32zM160 96V64h-32v32h32zm32 0h32V64h-32v32zm32-32h32V32h-32v32zm32 32h32V64h-32v32zM224 32h32V0h-32v32zm32 32h32V32h-32v32zM224 96h32V64h-32v32zm64-64h32V0h-32v32zm-32 0h32V0h-32v32zm32 32h32V32h-32v32zM256 96h32V64h-32v32zm32 0h32V64h-32v32zm32-32h32V32h-32v32zm32 32h32V64h-32v32zM352 32h32V0h-32v32zm32 32h32V32h-32v32zM352 96h32V64h-32v32zm64-64h32V0h-32v32zm-32 0h32V0h-32v32zm32 32h32V32h-32v32zM384 96h32V64h-32v32zm32 0h32V64h-32v32zm32-32h32V32h-32v32zm32 32h32V64h-32v32zm32 32h32V96h-32v32zm-32 0h32V96h-32v32zM0 128H32v32H0v-32zm32 32h32v32H32v-32zm32 0H32v-32h32v32zm32-32v32h32v-32H96zM64 128v32h32v-32H64zM0 192h32v32H0v-32zm32 32h32v32H32v-32zm32-32v32h32v-32H64zm32 0h32v32H96v-32zM64 192v32h32v-32H64zm64-64h32v32h-32v-32zm-32 0v32h32v-32H96zm32 32h32v32h-32v-32zm-32-32H96v-32h32v32zm32 0V96H96v32h32zm0 32v32h32v-32h-32zm32-32h32v32h-32v-32zm-32 0h-32v-32h32v32zm0 64h32v32h-32v-32zm-32 0v32h32v-32h-32zm32-32h32v32h-32v-32zm-32 0v-32h-32v32h32zm64-32h32v32h-32v-32zm-32-32v32h32v-32h-32zm32 0V96h-32v32h32zm32 32h32v32h-32v-32zm-32 0v-32h-32v32h32zm32 32h32v32h-32v-32zm-32 0h-32v-32h32v32zm64-32h32v32h-32v-32zm-32-32v32h32v-32h-32zm32 0V96h-32v32h32zm32 32h32v32h-32v-32zm-32 0v-32h-32v32h32zm32 32h32v32h-32v-32zm-32 0h-32v-32h32v32zm64-32h32v32h-32v-32zm-32-32v32h32v-32h-32zm32 0V96h-32v32h32zm32 32h32v32h-32v-32zm-32 0v-32h-32v32h32zm32 32h32v32h-32v-32zm-32 0h-32v-32h32v32zm64-32h32v32h-32v-32zm-32-32v32h32v-32h-32zm32 0V96h-32v32h32zm32 32h32v32h-32v-32zm-32 0v-32h-32v32h32zm32 32h32v32h-32v-32zm-32 0h-32v-32h32v32zm64-32h32v32h-32v-32zm-32-32v32h32v-32h-32zm32 0V96h-32v32h32zm32 32h32v32h-32v-32zm-32 0v-32h-32v32h32zm32 32h32v32h-32v-32zm-32 0h-32v-32h32v32zm-96-64h32v32h-32v-32zm-32-32v32h32v-32h-32zm32 0h32v32h-32v-32zm32 32h32v32h-32v-32zm-32-32v32h32v-32h-32zm0 64h32v32h-32v-32zm32 0h32v32h-32v-32zm-32 32v32h32v-32h-32zm32 0h32v32h-32v-32zM0 256v32h32v-32H0zm32 32v32h32v-32H32zm32 0v-32h32v32H64zm32-32v32h32v-32H96zm-32-32v32h32v-32H64zM0 320v32h32v-32H0zm32 32v32h32v-32H32zm32-32v32h32v-32H64zm32 0v32h32v-32H96zm-32-32v32h32v-32H64zM0 384v32h32v-32H0zm32 32v32h32v-32H32zm32-32v32h32v-32H64zm32 0v32h32v-32H96zm-32-32v32h32v-32H64zM0 448v32h32v-32H0zm32 32v32h32v-32H32zm32-32v32h32v-32H64zm32 0v32h32v-32H96zm-32-32v32h32v-32H64zM256 512V384H128v128h128z"/></IconWrapper>);
const FaCheck = (props) => (<IconWrapper {...props}><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"/></IconWrapper>);
const FaLightbulb = (props) => (<IconWrapper {...props}><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256s114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32c0-13.3 10.7-24 24-24zm-96 96c-13.3 0-24-10.7-24-24s10.7-24 24-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32zm192 0c-13.3 0-24-10.7-24-24s10.7-24 24-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32zm-96 96c-13.3 0-24-10.7-24-24s10.7-24 24-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32z"/></IconWrapper>);
const FaFire = (props) => (<IconWrapper {...props} viewBox="0 0 384 512"><path d="M153.6 29.9l-20.7 41.4c-6.2 12.5-23.7 12.5-29.9 0L82.3 29.9c-2.4-4.8-7.3-7.9-12.7-7.9H25.6C16 22 7.1 29.4 6.2 38.8L0 64l51.2 51.2c12.5 12.5 32.8 12.5 45.3 0l51.2-51.2 6.2-25.2c.9-9.4-6.4-16.8-15.8-16.8H166.3c-5.4 0-10.3-3.1-12.7-7.9zM384 192c0 87.4-117 243-168.3 307.2C208.3 506.5 198.8 512 192 512s-16.3-5.5-23.7-12.8C117 435 0 279.4 0 192 0 86 86 0 192 0s192 86 192 192zM96 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></IconWrapper>);
const FaMedal = (props) => (<IconWrapper {...props} viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm-8.5-144.5l-42.9 21.8c-7.9 4-17.1-2.1-17.1-10.8V237.1c0-6.1 3.5-11.6 8.8-14.3l74.3-37.9c4.9-2.5 10.7-2.5 15.6 0l74.3 37.9c5.3 2.7 8.8 8.1 8.8 14.3v141.4c0 8.7-9.2 14.8-17.1 10.8l-42.9-21.8c-4.3-2.2-9.5-2.2-13.8 0zM256 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></IconWrapper>);
const FaTrophy = (props) => (<IconWrapper {...props} viewBox="0 0 576 512"><path d="M544 32H32C14.3 32 0 46.3 0 64v192c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V64h192v224c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM288 384c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z"/></IconWrapper>);
const FaPlayCircle = (props) => (<IconWrapper {...props}><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 192v128l96-64-96-64z"/></IconWrapper>);


// --- Animation Variants ---
const ease = [0.25, 0.46, 0.45, 0.94];

const slideInRight = {
  hidden: { x: 80, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease } }
};

const slideInLeft = {
  hidden: { x: -80, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease } }
};

const slideInUp = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease } }
};

const scaleUp = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.7, ease } }
};

const headerVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease } }
};

const underlineVariant = {
  hidden: { scaleX: 0, y: 5, opacity: 0 },
  visible: {
    scaleX: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const cardHover = {
  rotateX: 2,
  rotateY: -1,
  transition: { duration: 0.3, ease: 'easeOut' }
};

// --- Custom Hook for Scroll Animations ---
const useScrollAnimate = (threshold = 0.3) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return { ref, controls };
};


// --- Mocked Components ---
const Image = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-full h-auto object-cover rounded-lg shadow-lg border-4 border-white"/>
);

const VideoPlayer = () => {
  const { ref, controls } = useScrollAnimate();
  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={slideInUp} className="max-w-4xl mx-auto mt-12">
      <AnimatedHeader text="Learn More About" highlight="Our Process" />
      <div className="bg-gray-800 aspect-video rounded-xl border-4 border-amber-200 shadow-2xl flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer group">
        <FaPlayCircle className="text-6xl md:text-8xl transform group-hover:scale-110 transition-transform" />
      </div>
    </motion.div>
  );
};

const ISOCertificationForm = () => {
  const { ref, controls } = useScrollAnimate();
  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={slideInUp} className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-2xl border border-yellow-200 shadow-xl mb-10 -mt-16 relative z-10">
      <motion.h3 variants={headerVariants} className="text-2xl md:text-3xl font-bold text-center text-amber-900 relative pb-4 mb-6">
        Start Your Certification Journey Today
        <motion.div
          variants={underlineVariant}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[3px] bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
        />
      </motion.h3>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" placeholder="Your Full Name" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 outline-none transition" />
        <input type="email" placeholder="Business Email Address" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 outline-none transition" />
        <input type="text" placeholder="Company Name" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 outline-none transition" />
        <input type="tel" placeholder="Phone Number" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 outline-none transition" />
        <textarea placeholder="Your Message (Optional)" rows="4" className="md:col-span-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 outline-none transition"></textarea>
        <button type="submit" className="md:col-span-2 bg-amber-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-700 transition-all text-lg shadow-md hover:shadow-lg">
          Get a Free Consultation
        </button>
      </form>
    </motion.div>
  );
};

// --- Reusable Animated Header Component ---
const AnimatedHeader = ({ text, highlight }) => {
    const { ref, controls } = useScrollAnimate(0.5);
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            className="text-center mb-8 md:mb-12"
        >
            <motion.h3
                variants={headerVariants}
                className="text-2xl md:text-3xl font-bold text-amber-900 relative pb-4"
            >
                {text} <span className="text-amber-800">{highlight}</span>
                <motion.div
                    variants={underlineVariant}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[3px] bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
                />
            </motion.h3>
        </motion.div>
    );
};


// --- Main Page Component ---
export const ISO_certification = () => {
  const processSteps = [
    { title: "Free Consultation", description: "Initial discussion to understand your needs and recommend the right ISO standards", icon: <FaHandshake className="text-amber-600" size={24} /> },
    { title: "ISO GAP Analysis", description: "Comprehensive assessment of your current systems against ISO requirements", icon: <FaSearch className="text-amber-600" size={24} /> },
    { title: "Stage-I ISO Audit", description: "Documentation review to verify your preparedness for implementation", icon: <FaClipboardCheck className="text-amber-600" size={24} /> },
    { title: "Stage-II ISO Audit", description: "On-site evaluation of your implemented management system", icon: <FaBuilding className="text-amber-600" size={24} /> },
    { title: "Closeout of Audit", description: "Addressing any non-conformities identified during audits", icon: <FaCheckCircle className="text-amber-600" size={24} /> },
    { title: "Management Review", description: "Executive evaluation of system performance and effectiveness", icon: <FaChartLine className="text-amber-600" size={24} /> },
    { title: "Registration", description: "Official certification issued by accredited body", icon: <FaCertificate className="text-amber-600" size={24} /> },
    { title: "Handover", description: "Delivery of your certificate and supporting documents", icon: <FaAward className="text-amber-600" size={24} /> },
    { title: "Surveillance Audit", description: "Annual audits to maintain certification validity", icon: <FaShieldAlt className="text-amber-600" size={24} /> },
    { title: "End of Services", description: "Completion of 3-year cycle with option for recertification", icon: <FaFlagCheckered className="text-amber-600" size={24} /> }
  ];

  const isoStandards = [
    { name: "ISO 9001", description: "Quality Management System" },
    { name: "ISO 14001", description: "Environmental Management" },
    { name: "ISO 45001", description: "Occupational Health & Safety" },
    { name: "ISO 27001", description: "Information Security" },
    { name: "ISO 22000", description: "Food Safety Management" },
    { name: "ISO 50001", description: "Energy Management" }
  ];

  const { ref: valueCardsRef, controls: valueCardsControls } = useScrollAnimate();
  const { ref: processCardsRef, controls: processCardsControls } = useScrollAnimate();
  const { ref: standardsCardsRef, controls: standardsCardsControls } = useScrollAnimate();

  return (
    <div className="p-4 md:p-12 space-y-10 w-full bg-gradient-to-br from-amber-50 to-amber-100 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <div className="space-y-6 text-center max-w-6xl mx-auto">
        <motion.h2 initial="hidden" animate="visible" variants={slideInRight} className="text-3xl md:text-5xl font-bold text-amber-900 relative pb-6">
          <span className="inline-flex items-center justify-center">
            <span className="bg-yellow-100 rounded-full p-2 mr-3"><FaFire /></span>
            Premium ISO Certification
            <span className="bg-yellow-100 rounded-full p-2 ml-3"><FaMedal /></span>
          </span>
           <motion.div
              variants={underlineVariant}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[3px] bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
            />
        </motion.h2>
        <motion.p initial="hidden" animate="visible" variants={slideInLeft} className="text-base md:text-xl text-amber-800 max-w-3xl mx-auto">
          Accelerate your business growth with internationally recognized certifications.
        </motion.p>
        <motion.div initial="hidden" animate="visible" variants={scaleUp} className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden">
          <div className="bg-white p-8 rounded-xl border border-yellow-200 shadow-md text-center">
            <span className="bg-yellow-100 rounded-full p-3 inline-flex mb-4"><FaTrophy className="text-amber-600" size={40}/></span>
            <motion.h3 variants={headerVariants} className="text-2xl md:text-3xl font-bold text-amber-900 mb-2 relative pb-4">
              Industry-Leading Certification
              <motion.div
                  variants={underlineVariant}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[3px] bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
              />
            </motion.h3>
            <p className="text-amber-700">90% first-time pass rate with our expert guidance.</p>
          </div>
        </motion.div>
      </div>

      <motion.div initial="hidden" animate="visible" variants={slideInUp} className="max-w-5xl mx-auto my-10">
        <Image src="https://placehold.co/1200x600/FFF8E1/92400E?text=ISO+Certified+Excellence" alt="Abstract image representing ISO 9001 Certification and quality standards"/>
      </motion.div>
      
      <ISOCertificationForm />

      {/* Value Proposition Cards */}
      <motion.div ref={valueCardsRef} initial="hidden" animate={valueCardsControls} variants={containerStagger} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <motion.div variants={slideInLeft} whileHover={cardHover} className="bg-white p-5 md:p-7 rounded-xl border border-yellow-200 shadow-md">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-100 p-3 rounded-full mr-4"><FaLightbulb className="h-6 w-6 text-amber-600" /></div>
            <motion.h3 variants={headerVariants} className="text-xl md:text-2xl font-bold text-amber-900 relative pb-3">
              What is ISO Certification?
              <motion.div
                variants={underlineVariant}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[3px] bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
              />
            </motion.h3>
          </div>
          <p className="text-amber-800 pl-0 md:pl-16 text-sm md:text-base">
            International recognition that your organization meets rigorous global standards for quality (ISO 9001), safety (ISO 45001), information security (ISO 27001), and more. It's a mark of excellence that builds trust with clients and partners worldwide.
          </p>
        </motion.div>
        <motion.div variants={slideInRight} whileHover={cardHover} className="bg-white p-5 md:p-7 rounded-xl border border-yellow-200 shadow-md">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-100 p-3 rounded-full mr-4"><FaCheck className="h-6 w-6 text-amber-600" /></div>
            <motion.h3 variants={headerVariants} className="text-xl md:text-2xl font-bold text-amber-900 relative pb-3">
              Why Choose Us?
               <motion.div
                variants={underlineVariant}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[3px] bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
              />
            </motion.h3>
          </div>
          <ul className="space-y-3 pl-0 md:pl-16">
            {["90% first-time pass rate", "Industry-specific consultants", "End-to-end support", "60% faster certification", "Ongoing compliance support"].map((item, index) => (
              <li key={index} className="flex items-start text-amber-800 text-sm md:text-base">
                <FaCheck className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />{item}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Process Section */}
      <div className="mt-12 md:mt-16 max-w-6xl mx-auto">
        <AnimatedHeader text="Our" highlight="10-Step Certification Process" />
        <motion.div ref={processCardsRef} initial="hidden" animate={processCardsControls} variants={containerStagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {processSteps.map((step, index) => (
            <motion.div key={index} variants={slideInUp} whileHover={cardHover} className="bg-white p-5 rounded-xl border border-yellow-200 shadow-md flex flex-col h-full">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-100 border-4 border-amber-600 flex items-center justify-center shadow-lg mb-4">
                <span className="text-base font-bold text-amber-900">{index + 1}</span>
              </div>
              <div className="flex items-center mb-3">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">{step.icon}</div>
                <h4 className="text-lg font-bold text-amber-900">{step.title}</h4>
              </div>
              <p className="text-sm text-amber-800 mt-auto">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Standards Section */}
      <div className="mt-12 md:mt-20 bg-amber-100/50 p-6 md:p-8 rounded-2xl border border-yellow-200 max-w-6xl mx-auto">
        <AnimatedHeader text="Popular" highlight="ISO Standards We Certify" />
        <motion.div ref={standardsCardsRef} initial="hidden" animate={standardsCardsControls} variants={containerStagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {isoStandards.map((standard, index) => (
            <motion.div key={index} variants={slideInUp} whileHover={cardHover} className="bg-white p-4 md:p-5 rounded-xl border border-yellow-200 shadow-sm">
              <h4 className="text-xl md:text-2xl font-bold text-amber-900 mb-2">{standard.name}</h4>
              <p className="text-sm md:text-lg text-amber-800">{standard.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <VideoPlayer />
    </div>
  );
};