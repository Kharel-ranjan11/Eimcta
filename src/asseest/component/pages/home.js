import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { features } from "../utilities/Array/data.js";
import { Testimonials } from '../utilities/testimonials.jsx';
import { ISO_CREDENTIALS } from '../utilities/Iso_service.jsx';
import { Branding } from '../utilities/branding.jsx';
import ImageGallery3D from '../utilities/gallery.jsx';
import  ModalPage  from '../utilities/modal.jsx';

// Lazy load components
const ImageCarousel = lazy(() => import("../utilities/caro"));
const ParallaxBanner = lazy(() => import("../utilities/parallelx"));

// Loading placeholder component
const LoadingPlaceholder = () => (
  <div className="h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100">
    <div className="w-16 h-16 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin"></div>
  </div>
);

// Feature card component
const FeatureCard = ({ item }) => (
  <motion.div
    className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col h-full border border-gray-100 group"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: item.id * 0.1, type: "spring", stiffness: 100 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
  >
    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-amber-200 transition-colors">
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
      </svg>
    </div>
    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800 italic">{item.title}</h3>
    <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">{item.desc}</p>
  </motion.div>
);

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 30 : 60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 40 : 80]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ISO Services JSON with images


  return (
    <div className="bg-white overflow-hidden" style={{ fontFamily: "'Arial Narrow', Arial, sans-serif" }}>
      {/* ===== HERO SECTION ===== */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <section className="relative w-full">
          <ImageCarousel />
        </section>
      </Suspense>

      {/* ===== WHY ISO SECTION ===== */}
      <section className="relative w-full bg-gradient-to-br from-amber-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl 
            md:text-5xl font-bold text-gray-900 mb-4 tracking-tight 
            ">
              Why <span className="text-amber-600 not-italic">ISO Certification</span> <span className="font-light">Matters?</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed font-light">
              <span className="font-normal ">Internationally recognized standards</span> that help organizations improve quality, safety, and efficiency while meeting regulatory requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item) => <FeatureCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      {/* ===== ISO SERVICES ===== */}

      <ISO_CREDENTIALS />
      <ImageGallery3D />
      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

    {/* Branding  */}
      <Branding/>
      <ModalPage />
      {/* ===== CTA SECTION ===== */}
      <section className="relative w-full py-20 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight italic">
              Ready to Get <span className="not-italic">ISO Certified?</span>
            </h2>
            <p className="text-amber-100 max-w-2xl mx-auto text-lg mb-8 leading-relaxed font-light">
              <span className="font-normal italic">Our experts</span> will guide you through the entire certification process with minimal disruption to your operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg italic">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors italic">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;