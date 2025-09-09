import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    ShieldCheck, Users, ClipboardList, TrendingUp,
    Video, Search, AlertTriangle,
    HardHat, Factory, Hospital, Droplet, CheckCircle
} from 'lucide-react';

// --- Animation Variants ---
const animationVariants = {
    slideInRight: {
        hidden: { x: 80, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
    },
    slideInLeft: {
        hidden: { x: -80, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
    },
    sectionHeader: {
        hidden: { y: 40, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
    },
    underline: {
        hidden: { width: '0%' },
        visible: { width: '25%', transition: { duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } }
    },
    paragraph: {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }
    },
    slideInUp: {
        hidden: { y: 60, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.7 } }
    },
    scaleUp: {
        hidden: { scale: 0.92, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.7 } }
    }
};

const cardHoverEffect = {
    y: -8,
    rotateX: 2,
    rotateY: -1,
    transition: { duration: 0.3, ease: 'easeOut' }
};

// --- Data Constants ---
const benefitsData = [
    { icon: ShieldCheck, title: "Risk Reduction", desc: "Identify and mitigate potential hazards before incidents occur" },
    { icon: AlertTriangle, title: "Compliance", desc: "Ensure adherence to local and international regulations" },
    { icon: Users, title: "Culture", desc: "Foster a proactive safety mindset among employees" },
    { icon: TrendingUp, title: "Performance", desc: "Improve operational efficiency through safer processes" }
];

const industriesData = [
    { icon: HardHat, name: "Construction" },
    { icon: Factory, name: "Manufacturing" },
    { icon: Droplet, name: "Oil & Gas" },
    { icon: Hospital, name: "Healthcare" },
    { icon: ShieldCheck, name: "Utilities" }
];

const auditStepsData = [
    { number: "1", title: "Planning", description: "Define scope, objectives, and audit criteria based on your operations" },
    { number: "2", title: "Document Review", description: "Examine policies, procedures, and previous audit reports" },
    { number: "3", title: "Fieldwork", description: "On-site inspections, employee interviews, and process observations" },
    { number: "4", title: "Analysis", description: "Evaluate findings against regulatory requirements and best practices" },
    { number: "5", title: "Reporting", description: "Document findings with prioritized recommendations" },
    { number: "6", title: "Follow-up", description: "Verify implementation of corrective actions" }
];

// --- Animated Reusable Components ---

const AnimatedSection = ({ children, variant, className }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variant}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const SectionHeader = ({ icon: Icon, title, subtitle }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className="mb-12 text-center">
            <motion.div animate={controls} initial="hidden" variants={animationVariants.scaleUp}>
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-amber-100 rounded-full">
                    <Icon className="w-8 h-8 text-amber-600" />
                </div>
            </motion.div>
            <motion.h2
                animate={controls}
                initial="hidden"
                variants={animationVariants.sectionHeader}
                className="text-4xl font-bold text-amber-900 mb-8 tracking-tight relative inline-block"
            >
                {title}
                <motion.span
                    animate={controls}
                    initial="hidden"
                    variants={animationVariants.underline}
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-amber-400 rounded-lg"
                    style={{ originX: 0.5 }}
                ></motion.span>
            </motion.h2>
            <motion.p
                animate={controls}
                initial="hidden"
                variants={animationVariants.paragraph}
                className="text-lg text-amber-800 max-w-3xl mx-auto"
            >
                {subtitle}
            </motion.p>
        </div>
    );
};

const IndustryTag = ({ icon: Icon, name }) => (
    <motion.div
        whileHover={cardHoverEffect}
        className="flex items-center bg-amber-100 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
    >
        <Icon className="w-5 h-5 mr-3 text-amber-700" />
        <span className="font-medium text-amber-800">{name}</span>
    </motion.div>
);

const AuditStep = ({ number, title, description }) => (
    <motion.div
        whileHover={cardHoverEffect}
        className="bg-white p-6 rounded-xl shadow-sm border border-amber-100 group transition-shadow duration-300 hover:shadow-lg"
    >
        <div className="flex items-start">
            <div className="flex-shrink-0 bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mr-5 mt-1 group-hover:bg-amber-500 transition-colors duration-300">
                <span className="font-bold text-2xl text-amber-800 group-hover:text-white transition-colors duration-300">{number}</span>
            </div>
            <div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">{title}</h3>
                <p className="text-amber-700">{description}</p>
            </div>
        </div>
    </motion.div>
);

const BenefitCard = ({ icon: Icon, title, desc }) => (
    <motion.div
        whileHover={cardHoverEffect}
        className="bg-amber-50/30 backdrop-blur-sm p-6 rounded-lg shadow-sm group relative overflow-hidden border border-amber-100 transition-shadow duration-300 hover:shadow-xl"
    >
        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-amber-600" />
        </div>
        <h3 className="text-xl font-bold text-amber-900 mb-2">{title}</h3>
        <p className="text-amber-700">{desc}</p>
    </motion.div>
);

const ResourceCard = ({ icon: Icon, title, subtitle, buttonText }) => (
    <motion.div
        whileHover={cardHoverEffect}
        className="bg-amber-100 rounded-xl p-8 relative group text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300 ring-4 ring-amber-200 group-hover:ring-amber-300">
            <Icon className="w-8 h-8 text-amber-700" />
        </div>
        <h3 className="text-xl font-bold text-amber-900 mb-2">{title}</h3>
        <p className="text-amber-700 mb-6">{subtitle}</p>
        <motion.button
             whileHover={{ y: -2, scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
            className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 shadow-md"
        >
            {buttonText}
        </motion.button>
    </motion.div>
);

// --- Main Page Component ---
const HSEAudits = () => {
    return (
        <>
            <style>{`
              body { 
                font-family: 'Arial Narrow', sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
            `}</style>
            <div className="bg-gray-50 text-amber-900">
                <main>
                    {/* Hero Section */}
                    <header className="relative h-[500px] w-full flex items-center justify-center text-center text-white px-4 overflow-hidden">
                        <div className="absolute inset-0 bg-stone-900">
                             <img
                                src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                                alt="Safety inspection at a modern industrial workplace"
                                className="w-full h-full object-cover opacity-40"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1600x500/854d0e/fefce8?text=Safety+First'; }}
                            />
                        </div>
                        <div className="relative z-10">
                            <motion.h1 initial="hidden" animate="visible" variants={animationVariants.slideInRight} className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">Comprehensive HSE Audits</motion.h1>
                            <motion.p initial="hidden" animate="visible" variants={animationVariants.slideInLeft} className="text-xl md:text-2xl max-w-3xl mx-auto text-amber-200">Ensuring workplace safety, compliance, and operational excellence through systematic evaluation.</motion.p>
                        </div>
                    </header>
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-12">
                            {/* What is an HSE Audit? Section */}
                            <section className="py-12">
                                <SectionHeader icon={Search} title="What is an HSE Audit?" subtitle="A systematic evaluation of your organization's health, safety, and environmental management systems" />
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <AnimatedSection variant={animationVariants.paragraph}>
                                        <p className="text-lg text-amber-800 mb-6">
                                            HSE audits provide a structured approach to assessing workplace safety, identifying risks, and ensuring compliance with regulations. They serve as a critical tool for continuous improvement in occupational health and safety.
                                        </p>
                                        <div className="bg-amber-50/50 p-6 rounded-xl border-l-4 border-amber-500">
                                            <h3 className="font-bold text-xl text-amber-900 mb-4">Key Objectives:</h3>
                                            <ul className="space-y-3">
                                                {["Evaluate safety procedure effectiveness", "Verify regulatory compliance", "Identify potential hazards", "Measure performance against standards", "Recommend corrective actions"].map((item, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                                                        <span className="text-amber-800">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </AnimatedSection>
                                    <AnimatedSection variant={animationVariants.slideInRight} className="rounded-xl overflow-hidden shadow-lg group">
                                        <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Safety documents" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </AnimatedSection>
                                </div>
                            </section>

                            {/* Benefits Section */}
                            <section className="bg-amber-100 -mx-6 sm:-mx-12 px-6 sm:px-12 py-16">
                                <SectionHeader icon={TrendingUp} title="Why HSE Audits Matter" subtitle="The measurable benefits of regular safety audits for your organization" />
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {benefitsData.map((benefit, index) => (
                                        <AnimatedSection variant={animationVariants.slideInUp} key={index}>
                                            <BenefitCard {...benefit} />
                                        </AnimatedSection>
                                    ))}
                                </div>
                            </section>

                            {/* Industries Section */}
                            <section className="py-16">
                                <SectionHeader icon={Factory} title="Key Industries" subtitle="These sectors benefit most from regular HSE audits" />
                                <div className="flex flex-wrap justify-center gap-4">
                                    {industriesData.map((industry, index) => (
                                        <AnimatedSection variant={animationVariants.scaleUp} key={index}>
                                            <IndustryTag {...industry} />
                                        </AnimatedSection>
                                    ))}
                                </div>
                            </section>

                            {/* Audit Process Section */}
                            <section className="bg-amber-50 -mx-6 sm:-mx-12 px-6 sm:px-12 py-16">
                                <SectionHeader icon={ClipboardList} title="The Audit Process" subtitle="Our proven 6-step methodology for effective audits" />
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {auditStepsData.map((step) => (
                                        <AnimatedSection variant={animationVariants.slideInUp} key={step.number}>
                                            <AuditStep {...step} />
                                        </AnimatedSection>
                                    ))}
                                </div>
                            </section>

                            {/* Visual Resources Section */}
                            <section className="py-16">
                                <SectionHeader icon={Video} title="Learning Resources" subtitle="Watch our experts explain HSE audit best practices" />
                                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                   <AnimatedSection variant={animationVariants.scaleUp}>
                                       <ResourceCard icon={Video} title="Conducting Effective Audits" subtitle="15 min tutorial" buttonText="Watch Now" />
                                   </AnimatedSection>
                                   <AnimatedSection variant={animationVariants.scaleUp}>
                                       <ResourceCard icon={ClipboardList} title="Audit Checklist Guide" subtitle="Downloadable PDF" buttonText="Download" />
                                   </AnimatedSection>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default HSEAudits;

