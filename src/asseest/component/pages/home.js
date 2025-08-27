import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { features } from "../utilities/Array/data.js";
import { Testimonials } from '../utilities/testimonials.jsx';
import { ISO_CREDENTIALS } from '../utilities/Iso_service.jsx';
import { Branding } from '../utilities/branding.jsx';
import ImageGallery3D from '../utilities/gallery.jsx';
import ModalPage from '../utilities/modal.jsx';

// Lazy load components
const ImageCarousel = lazy(() => import("../utilities/caro"));

// Loading placeholder component
const LoadingPlaceholder = () => (
  <div className="flex items-center justify-center h-screen bg-gradient-to-br from-amber-50 to-amber-100">
    <div className="w-16 h-16 border-4 rounded-full border-amber-200 border-t-amber-600 animate-spin"></div>
  </div>
);

// Feature card component
const FeatureCard = ({ item }) => (
  <motion.div
    className="flex flex-col h-full p-6 transition-all bg-white border border-gray-100 rounded-xl shadow-sm group hover:shadow-md sm:p-8"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: item.id * 0.1, type: "spring", stiffness: 100 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
  >
    <div className="flex items-center justify-center w-12 h-12 mb-4 transition-colors rounded-lg bg-amber-100 group-hover:bg-amber-200 sm:w-14 sm:h-14 sm:mb-6">
      <svg className="w-5 h-5 text-amber-600 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
      </svg>
    </div>
    <h3 className="mb-2 text-lg font-bold text-gray-800 italic sm:text-xl sm:mb-3">{item.title}</h3>
    <p className="text-sm font-light leading-relaxed text-gray-600 sm:text-base">{item.desc}</p>
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

  return (
    <div className="bg-white overflow-hidden bg-[#f4d58e]" style={{ fontFamily: "'Arial Narrow', Arial, sans-serif" }}>
      {/* ===== HERO SECTION ===== */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <section className="relative w-full">
          <ImageCarousel />
        </section>
      </Suspense>

      {/* ===== WHY ISO SECTION ===== */}
      <section className="relative w-full bg-gradient-to-br pt-9 from-amber-50 to-white">
        <div className="container px-4 mx-auto sm:px-6">
          <motion.div
            className="mb-16  text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-amber-600 md:text-5xl">
              Why <span className="text-[#580203] not-italic">ISO Certification</span> <span className="font-light">Matters?</span>
            </h2>

            <div className="w-24 h-1 mx-auto mb-8 bg-amber-500"></div>
            <p className="max-w-3xl mx-auto text-lg font-light leading-relaxed text-gray-600">
              <span className="font-normal">Internationally recognized standards</span> that help organizations improve quality, safety, and efficiency while meeting regulatory requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((item) => <FeatureCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      {/* ===== ISO SERVICES ===== */}
      <ISO_CREDENTIALS />

      {/* ===== GALLERY ===== */}
      {/* <ImageGallery3D /> */}

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== BRANDING ===== */}
      <Branding />

      {/* ===== MODAL ===== */}
      <ModalPage />
    </div>
  );
};

export default Home;