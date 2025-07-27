import { useState, useEffect, lazy, Suspense, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {features} from "../utilities/Array/data.js";
import {testimonials} from "../utilities/Array/data.js";
// Lazy load heavy components
const ImageCarousel = lazy(() => import("../utilities/caro"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: false
});

const ParallaxBanner = lazy(() => import("../utilities/parallelx"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

// FeatureCard component
const FeatureCard = ({ item }) => (
  <motion.div
    className="relative bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      delay: item.id * 0.05 + 0.2,
      duration: 0.4,
      ease: "easeOut"
    }}
    viewport={{ once: true, margin: "-50px" }}
    style={{ willChange: 'transform, opacity' }}
  >
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white mb-4">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
        </svg>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-blue-800">{item.title}</h3>
      <p className="text-gray-600 text-sm">{item.desc}</p>
    </div>
  </motion.div>
);

// TestimonialCard component
const TestimonialCard = ({ item }) => (
  <motion.div 
    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      delay: item.id * 0.1 + 0.3,
      duration: 0.4
    }}
    viewport={{ once: true }}
    style={{ willChange: 'transform, opacity' }}
  >
    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
      </svg>
    </div>
    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
    <p className="text-blue-100 text-sm">{item.desc}</p>
  </motion.div>
);

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Define all data arrays
  const parallaxImages = [
    'https://images.unsplash.com/photo-1498496294664-d9372eb521f3?auto=compress&w=1200&q=80',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=compress&w=1200&q=80',
    'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=compress&w=1200&q=80',
    'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=compress&w=1200&q=80'
  ];




  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Optimized scroll effects
  const { scrollYProgress } = useScroll({
    offset: ['start start', 'end end']
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 30 : 60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 40 : 80]);
  
  // Memoize parallax values
  const parallaxValues = useMemo(() => ({
    y1: y1,
    y2: y2
  }), [isMobile]);

  return (
    <section className="p-0 overflow-hidden">
      {/* Hero Carousel */}
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <ImageCarousel />
      </Suspense>
      
      {/* First Parallax Section */}
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <ParallaxBanner image={parallaxImages[1]}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50"></div>
          <motion.section 
            className="relative py-16 px-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg">
              <motion.h1 
                className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                Your Trusted Partner for ISO Certification
              </motion.h1>
              <motion.p 
                className="text-base md:text-lg text-gray-700 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Empowering businesses with global compliance standards, expert consultancy, and impactful training programs.
              </motion.p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium py-2 px-6 rounded-full hover:shadow-md transition-all duration-200"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Request a Free Consultation
                </motion.button>
                <motion.button 
                  className="bg-white text-blue-600 border border-blue-600 font-medium py-2 px-6 rounded-full hover:bg-blue-50 transition duration-200"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Explore Our Expertise with us 
                </motion.button>
              </div>
            </div>
          </motion.section>
        </ParallaxBanner>
      </Suspense>

      {/* Features Section */}
      <section className="relative py-12 px-6 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="relative max-w-7xl mx-auto">
          <motion.h2 
            className="text-xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Your Growth. Your Safety. Our Expertise.
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item) => (
              <FeatureCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Workplace Safety & OHS */}
      <section className="relative py-16 px-6">
        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <motion.img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=compress&w=1200&q=80"
                alt="Workplace Safety"
                className="w-full h-auto object-cover"
                loading="lazy"
                style={{ y: parallaxValues.y2 }}
              />
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600 mb-4">
              Workplace Safety & OHS Solutions
            </h2>
            <p className="text-gray-700 mb-6">
              Create a safer and more compliant workplace with our OHS audits, risk assessments, and safety officer training programs.
            </p>
            <button 
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium py-2 px-6 rounded-full hover:shadow-md transition-all duration-200"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Client Success Section */}
      <section className="relative py-12 px-6 bg-gradient-to-br from-blue-800 to-blue-600 text-white">
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-3xl font-bold mb-4">Client Success & Achievements</h2>
            <div className="w-16 h-1 bg-blue-300 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-6">
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: `url(${parallaxImages[3]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: parallaxValues.y1
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-600/60"></div>
        <div className="relative max-w-4xl mx-auto bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600 mb-4">
            Ready to Transform Your Business Compliance?
          </h2>
          <p className="text-gray-700 mb-6">
            Contact us today for a free consultation and take the first step towards achieving excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button 
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium py-2 px-6 rounded-full hover:shadow-md transition-all duration-200"
            >
              Get Started Now
            </button>
            <button 
              className="bg-white text-blue-600 border border-blue-600 font-medium py-2 px-6 rounded-full hover:bg-blue-50 transition duration-200"
            >
              Call Our Experts
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}