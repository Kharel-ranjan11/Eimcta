import React from "react";
// Framer Motion is used for animations. Ensure it's added as a dependency.
import { motion } from "framer-motion";

// --- INLINE SVG ICON COMPONENTS ---
const ShieldIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2.163c-2.831 0-5.323 1.04-7.293 2.793-1.97 1.753-3.207 4.25-3.207 7.044 0 4.142 2.682 7.822 6.375 9.382.479.202.99.303 1.5.303s1.021-.101 1.5-.303c3.693-1.56 6.375-5.24 6.375-9.382 0-2.794-1.237-5.291-3.207-7.044C17.323 3.203 14.831 2.163 12 2.163z" />
    </svg>
);

const LeafIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
       <path d="M17.61,4.24C15.5,2.14,12.22,2,10.11,4.11L4.12,10.1a7.41,7.41,0,0,0,0,10.49h0a7.41,7.41,0,0,0,10.49,0l5.48-5.48A7.41,7.41,0,0,0,17.61,4.24ZM12,18.88a5.29,5.29,0,0,1-7.48,0h0a5.29,5.29,0,0,1,0-7.48L9.89,6.05a.5.5,0,0,1,.71,0l5.35,5.35a.5.5,0,0,1,0,.71Z"/>
    </svg>
);

const UserTieIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12,2A5,5,0,0,0,7,7a5,5,0,0,0,5,5,5,5,0,0,0,5-5A5,5,0,0,0,12,2Zm0,9a3,3,0,1,1,3-3A3,3,0,0,1,12,11Zm5.5,2H6.5A4.5,4.5,0,0,0,2,17.5V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1v-1.5A4.5,4.5,0,0,0,17.5,13Z"/>
      <path d="M12.25 13.2a1 1 0 0 1-.5 0 1 1 0 0 1-.4-.8l-.5-2.5h2l-.5 2.5a1 1 0 0 1-.6.8z"/>
  </svg>
);

const ChartLineIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3.5,18.49l6-6.01,4,4L22,6.92,20.59,5.51,13.5,12.51,9.5,8.51,2,15.08Z" />
  </svg>
);

const CertificateIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12,2a9,9,0,1,0,9,9A9,9,0,0,0,12,2Zm4.3,13.84-2.4-1.78a.5.5,0,0,1,0-.82l2.4-1.78a.5.5,0,0,0-.29-.89l-2.85-.41a.5.5,0,0,1-.38-.27L11.7,7.14a.5.5,0,0,0-.89,0L9.73,9.89a.5.5,0,0,1-.38.27L6.5,10.57a.5.5,0,0,0-.29.89l2.4,1.78a.5.5,0,0,1,0,.82l-2.4,1.78a.5.5,0,0,0,.29.89l2.85.41a.5.5,0,0,1,.38.27l1.08,2.75a.5.5,0,0,0,.89,0l1.08-2.75a.5.5,0,0,1,.38-.27l2.85-.41a.5.5,0,0,0,.29-.89Z"/>
    </svg>
);

const PlayCircleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm-1.25,13.5V8.5L16,12Z" />
  </svg>
);

const ProgressionIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
    <path d="M12 2L6 8h12z"/>
  </svg>
);

const TeamIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <circle cx="9" cy="8" r="4"/>
    <path d="M9,14c-2.67,0-8,1.34-8,4v2h16v-2C17,15.34,11.67,14,9,14Z"/>
    <path d="M23.11,16.44A4.51,4.51,0,0,0,22,15a5.45,5.45,0,0,0-5-4,1,1,0,0,0-1,1,3.31,3.31,0,0,1,3,3,1,1,0,0,0,1,1,3.31,3.31,0,0,1,3,3,1,1,0,0,0,1,1,5.45,5.45,0,0,0-1-10.44Z"/>
  </svg>
);

const hseImage = "https://placehold.co/1200x400/0f172a/f59e0b?text=Health,+Safety+%26+Environment";

// --- ANIMATION VARIANTS ---
const customEase = [0.25, 0.46, 0.45, 0.94];

const slideInRight = {
    hidden: { x: 80, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: customEase } }
};

const slideInLeft = {
    hidden: { x: -80, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: customEase } }
};

const slideInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: customEase } }
};

const sectionHeaderVariant = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: customEase } }
};

const underlineVariant = {
    hidden: { width: "0%" },
    visible: { width: "25%", transition: { duration: 0.8, ease: customEase, delay: 0.3 } }
};

const paragraphVariant = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3, ease: customEase } }
};

const cardHover = {
    y: -8,
    rotateX: 2,
    rotateY: -1,
    transition: { duration: 0.3, ease: "easeOut" }
};

const HSEAwarenessTraining = () => {
    return (
        <main>
            <div className="w-full mx-auto px-4 py-8 font-['Arial_Narrow'] bg-gradient-to-br from-amber-50 to-amber-100 overflow-x-hidden">
                {/* Hero Banner */}
                <motion.div 
                    className="mb-4 md:mb-8 lg:mb-16 w-full max-w-full overflow-hidden rounded-lg shadow-md"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: customEase }}
                >
                    <img
                        src={hseImage}
                        alt="HSE Awareness Training"
                        title="HSE Awareness Training"
                        className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                </motion.div>

                {/* Intro Section */}
                <motion.div 
                    className="max-w-6xl mx-auto my-16 p-8 bg-white rounded-xl shadow-lg border border-amber-200 relative"
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={slideInRight} className="text-4xl font-bold text-amber-900 mb-4">HSE Awareness Training</motion.h1>
                    <motion.p variants={slideInLeft} className="text-xl text-gray-700 leading-relaxed">
                        A safe workplace and a clean environment are not just legal requirements—they are the backbone of a responsible and successful organization. <span className="font-bold text-amber-900">HSE Awareness Training</span> gives you the skills to protect people, safeguard the planet, and comply with global standards.
                    </motion.p>
                </motion.div>

                {/* Standards Section */}
                <div className="max-w-6xl mx-auto mb-20">
                    <motion.h2 
                        className="text-3xl font-bold text-amber-900 mb-12 text-center relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={sectionHeaderVariant}
                    >
                        Why These Standards Matter
                        <motion.div 
                            className="absolute -bottom-2 left-1/2 h-1 bg-yellow-400 rounded-lg"
                            style={{ transform: 'translateX(-50%)', originX: 0.5 }}
                            variants={underlineVariant}
                        />
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: <LeafIcon className="w-10 h-10 text-4xl text-green-600" />,
                                title: "ISO 14001:2015",
                                desc: "Helps organizations manage waste, reduce pollution, save resources, and adopt eco-friendly practices."
                            },
                            {
                                icon: <ShieldIcon className="w-10 h-10 text-4xl text-blue-600" />,
                                title: "ISO 45001:2018",
                                desc: "Focuses on workplace safety, preventing accidents, and creating a healthier environment for employees."
                            }
                        ].map((item, index) => (
                            <motion.div 
                                key={index} 
                                className="bg-white p-8 rounded-lg shadow-md border-l-4 border-yellow-400 group"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={slideInUp}
                                whileHover={cardHover}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="mr-4 p-3 bg-yellow-100 rounded-full transition-transform duration-300 group-hover:rotate-12">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-amber-900">{item.title}</h3>
                                </div>
                                <p className="text-gray-700">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        className="mt-12 bg-amber-100/50 p-6 rounded-lg border border-amber-200 flex items-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}
                        variants={paragraphVariant}
                    >
                        <ProgressionIcon className="w-8 h-8 text-3xl text-amber-900 mr-4 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">
                            Both follow the <span className="font-bold text-amber-900">Plan-Do-Check-Act (PDCA) cycle</span>, making them practical, systematic, and easy to integrate.
                        </p>
                    </motion.div>
                </div>

                {/* Benefits Section */}
                <div className="max-w-6xl mx-auto mb-20 bg-amber-900 p-10 rounded-xl text-white">
                    <motion.h2 
                        className="text-3xl font-bold text-yellow-400 mb-12 text-center relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={sectionHeaderVariant}
                    >
                        Benefits of HSE Awareness Training
                        <motion.div 
                            className="absolute -bottom-2 left-1/2 h-1 bg-yellow-400 rounded-lg"
                            style={{ transform: 'translateX(-50%)', originX: 0.5 }}
                            variants={underlineVariant}
                        />
                    </motion.h2>

                    <motion.div 
                        className="grid md:grid-cols-2 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {[
                            { icon: "🛡️", text: "Stronger Safety Culture – Reduce workplace accidents, injuries, and risks." },
                            { icon: "🌱", text: "Sustainability Commitment – Protect the environment with structured eco-friendly practices." },
                            { icon: "⚖️", text: "Legal Compliance – Stay aligned with local and international HSE regulations." },
                            { icon: "💼", text: "Operational Efficiency – Cut costs by preventing downtime, fines, and resource waste." },
                            { icon: "📜", text: "Certification Ready – Gain the knowledge to prepare for ISO 14001 & ISO 45001 certification." },
                            { icon: "📈", text: "Competitive Advantage – Demonstrate commitment to sustainability and safety to clients." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start bg-white/10 p-5 rounded-lg backdrop-blur-sm"
                                variants={slideInUp}
                                whileHover={{scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)'}}
                            >
                                <span className="text-2xl mr-4">{item.icon}</span>
                                <div>
                                    <span className="font-bold text-yellow-400">{item.text.split('–')[0]}</span>
                                    <span>{item.text.split('–')[1]}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Audience Section */}
                <div className="max-w-6xl mx-auto mb-20">
                    <motion.h2 
                        className="text-3xl font-bold text-amber-900 mb-12 text-center relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={sectionHeaderVariant}
                    >
                        Who Should Join?
                        <motion.div 
                            className="absolute -bottom-2 left-1/2 h-1 bg-yellow-400 rounded-lg"
                            style={{ transform: 'translateX(-50%)', originX: 0.5 }}
                            variants={underlineVariant}
                        />
                    </motion.h2>

                    <motion.div 
                        className="grid md:grid-cols-2 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {[
                            { icon: <UserTieIcon className="w-6 h-6 text-yellow-400" />, text: "HSE Managers and Coordinators" },
                            { icon: <ShieldIcon className="w-6 h-6 text-yellow-400" />, text: "Safety Officers & Environmental Officers" },
                            { icon: <TeamIcon className="w-6 h-6 text-yellow-400" />, text: "Business Leaders & Decision-Makers" },
                            { icon: <ChartLineIcon className="w-6 h-6 text-yellow-400" />, text: "Employees with safety or environmental duties" },
                            { icon: <CertificateIcon className="w-6 h-6 text-yellow-400" />, text: "Consultants and Auditors in HSE" },
                            { icon: <LeafIcon className="w-6 h-6 text-yellow-400" />, text: "Sustainability Champions in Organizations" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                                whileHover={cardHover}
                            >
                                <span className="mr-4 text-xl bg-yellow-100 p-2 rounded-full">{item.icon}</span>
                                <span className="text-amber-800">{item.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div 
                        className="mt-10 bg-amber-100/50 p-6 rounded-lg border border-amber-200"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}
                        variants={paragraphVariant}
                    >
                        <p className="text-center text-lg text-amber-900">
                            Whether you are starting your career or leading an organization, this training provides the foundation for <span className="font-bold">world-class HSE practices</span>.
                        </p>
                    </motion.div>
                </div>

                {/* How to Apply Section */}
                <div className="max-w-6xl mx-auto mb-20 bg-white p-8 rounded-xl shadow-lg border border-amber-200">
                    <motion.h2 
                        className="text-3xl font-bold text-amber-900 mb-8 text-center relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={sectionHeaderVariant}
                    >
                        How Can You Apply?
                        <motion.div 
                            className="absolute -bottom-2 left-1/2 h-1 bg-yellow-400 rounded-lg"
                            style={{ transform: 'translateX(-50%)', originX: 0.5 }}
                            variants={underlineVariant}
                        />
                    </motion.h2>

                    <motion.div 
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={slideInUp}
                    >
                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-900">
                            <p className="text-gray-700 mb-6">Applying the knowledge from this HSE awareness training course involves the following steps:</p>

                            <ol className="space-y-4 list-decimal pl-6">
                                {[
                                    "Learn the ISO Framework: Understand the high-level structure and framework of ISO 14001:2015 and ISO 45001:2018 standards through the course.",
                                    "Assess Current Systems: Conduct an internal assessment to identify gaps in your current HSE management systems in relation to ISO standards.",
                                    "Implement the Plan-Do-Check-Act Cycle: Use the PDCA model to establish a process for continuous improvement in your organization's HSE practices.",
                                    "Create and Maintain Documentation: Learn how to create and manage documented information in line with ISO standards, including hazard identification and risk assessment processes.",
                                    "Prepare for Certification: Familiarize yourself with the ISO 14001 and ISO 45001 registration process and the steps required for certification, ensuring your organization is ready for an external audit."
                                ].map((item, index) => (
                                    <li key={index} className="text-gray-700">
                                        <span className="font-semibold text-amber-800">{item.split(':')[0]}:</span>
                                        {item.split(':')[1]}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </motion.div>
                </div>

                {/* Video Section */}
                <div className="max-w-4xl mx-auto mb-20 bg-gradient-to-br from-amber-900 to-amber-800 p-1 rounded-xl">
                    <motion.div 
                        className="bg-white p-8 rounded-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={slideInUp}
                    >
                        <motion.h2 
                            className="text-3xl font-bold text-amber-900 mb-6 text-center relative"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={sectionHeaderVariant}
                        >
                            Video Guide
                            <motion.div 
                                className="absolute -bottom-2 left-1/2 h-1 bg-yellow-400 rounded-lg"
                                style={{ transform: 'translateX(-50%)', originX: 0.5 }}
                                variants={underlineVariant}
                            />
                        </motion.h2>
                        <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
                            Watch this video to see how ISO 14001:2015 & ISO 45001:2018 improve safety and sustainability in real workplaces:
                        </p>
                        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden relative group cursor-pointer hover:shadow-md transition-shadow duration-300">
                            <div className="w-full h-full flex items-center justify-center bg-amber-50">
                                <PlayCircleIcon className="w-16 h-16 text-6xl text-amber-900 transition-transform duration-300 group-hover:scale-110" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default HSEAwarenessTraining;

