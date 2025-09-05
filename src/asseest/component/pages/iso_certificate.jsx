import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import { Handshake, Search, ClipboardCheck, Building, CheckCircle, LineChart, Award, ShieldCheck, Flag, Check, Lightbulb, Flame, Medal, Trophy, PlayCircle } from 'lucide-react';

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
        <PlayCircle className="text-6xl md:text-8xl transform group-hover:scale-110 transition-transform" />
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
const ISO_certification = () => {
  const processSteps = [
    { title: "Free Consultation", description: "Initial discussion to understand your needs and recommend the right ISO standards", icon: <Handshake className="text-amber-600" size={24} /> },
    { title: "ISO GAP Analysis", description: "Comprehensive assessment of your current systems against ISO requirements", icon: <Search className="text-amber-600" size={24} /> },
    { title: "Stage-I ISO Audit", description: "Documentation review to verify your preparedness for implementation", icon: <ClipboardCheck className="text-amber-600" size={24} /> },
    { title: "Stage-II ISO Audit", description: "On-site evaluation of your implemented management system", icon: <Building className="text-amber-600" size={24} /> },
    { title: "Closeout of Audit", description: "Addressing any non-conformities identified during audits", icon: <CheckCircle className="text-amber-600" size={24} /> },
    { title: "Management Review", description: "Executive evaluation of system performance and effectiveness", icon: <LineChart className="text-amber-600" size={24} /> },
    { title: "Registration", description: "Official certification issued by accredited body", icon: <Trophy className="text-amber-600" size={24} /> },
    { title: "Handover", description: "Delivery of your certificate and supporting documents", icon: <Trophy className="text-amber-600" size={24} /> },
    { title: "Surveillance Audit", description: "Annual audits to maintain certification validity", icon: <ShieldCheck className="text-amber-600" size={24} /> },
    { title: "End of Services", description: "Completion of 3-year cycle with option for recertification", icon: <Flag className="text-amber-600" size={24} /> }
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
            <span className="bg-yellow-100 rounded-full p-2 mr-3"><Award /></span>
            Premium ISO Certification
            <span className="bg-yellow-100 rounded-full p-2 ml-3"><Medal /></span>
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
            <span className="bg-yellow-100 rounded-full p-3 inline-flex mb-4"><Trophy className="text-amber-600" size={40}/></span>
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
            <div className="bg-yellow-100 p-3 rounded-full mr-4"><Lightbulb className="h-6 w-6 text-amber-600" /></div>
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
            <div className="bg-yellow-100 p-3 rounded-full mr-4"><Check className="h-6 w-6 text-amber-600" /></div>
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
                <Check className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />{item}
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

export default ISO_certification;
