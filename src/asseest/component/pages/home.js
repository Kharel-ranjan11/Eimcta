import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { features, testimonials } from "../utilities/Array/data.js";
import { Img_home } from '../utilities/img_home.jsx';
import image_1 from '../../img/HOME_1.png';

// Lazy load components
const ImageCarousel = lazy(() => import("../utilities/caro"));
const ParallaxBanner = lazy(() => import("../utilities/parallelx"));

// Loading placeholder component
const LoadingPlaceholder = () => (
  <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
    <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

// Feature card component
const FeatureCard = ({ item }) => (
  <motion.div
    className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: item.id * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
      </svg>
    </div>
    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">{item.title}</h3>
    <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
  </motion.div>
);

// Testimonial card component with error handling
const TestimonialCard = ({ testimonial }) => (
  <motion.div
    className="bg-white p-6 sm:p-8 rounded-xl shadow-md"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center mb-4 sm:mb-6">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
        {testimonial?.name?.charAt(0) || 'U'}
      </div>
      <div className="ml-3 sm:ml-4">
        <h4 className="font-bold text-sm sm:text-base">{testimonial?.name || 'Anonymous'}</h4>
        <p className="text-gray-500 text-xs sm:text-sm">{testimonial?.position || 'Customer'}</p>
      </div>
    </div>
    <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">"{testimonial?.quote || 'Great service!'}"</p>
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </motion.div>
);

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 30 : 60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 40 : 80]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <section className="relative w-full">
          <ImageCarousel />
        </section>
      </Suspense>
      
      {/* ===== WHY ISO SECTION ===== */}
      <section className="relative w-full bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 py-20">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why <span className="text-blue-600">ISO Certification</span> Matters
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((item) => (
              <FeatureCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== POPULAR STANDARDS ===== */}
      <section className="relative w-full py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our <span className="text-blue-600">ISO Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Comprehensive support for all major ISO standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "ISO 9001",
                desc: "Quality Management System (QMS)",
                color: "from-blue-500 to-blue-700",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                features: [
                  "Customer focus and satisfaction",
                  "Process approach methodology",
                  "Continuous improvement cycle",
                  "Evidence-based decision making"
                ],
                benefits: [
                  "Improved product/service quality",
                  "Increased operational efficiency",
                  "Enhanced customer trust",
                  "Reduced waste and costs"
                ],
                link: "/iso-9001-guide"
              },
              {
                title: "ISO 27001",
                desc: "Information Security Management (ISMS)",
                color: "from-green-500 to-green-700",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                features: [
                  "Risk assessment methodology",
                  "Data confidentiality controls",
                  "Incident management procedures",
                  "Business continuity planning"
                ],
                benefits: [
                  "Protection against cyber threats",
                  "Compliance with regulations",
                  "Secure client data handling",
                  "Reduced breach risks"
                ],
                link: "/iso-27001-guide"
              },
              {
                title: "ISO 14001",
                desc: "Environmental Management System (EMS)",
                color: "from-emerald-500 to-emerald-700",
                icon: "M13 7h3m-3 4h3m-3 4h3M6 7h6v4H6zm0 6v-6H4v6h2zm6 0H8v-6h4v6zm4-6h-2v6h2v-6z",
                features: [
                  "Environmental impact assessment",
                  "Waste reduction strategies",
                  "Energy efficiency programs",
                  "Sustainable resource use"
                ],
                benefits: [
                  "Reduced environmental footprint",
                  "Compliance with environmental laws",
                  "Improved corporate image",
                  "Cost savings through efficiency"
                ],
                link: "/iso-14001-guide"
              },
              {
                title: "ISO 45001",
                desc: "Occupational Health & Safety (OH&S)",
                color: "from-orange-500 to-orange-700",
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                features: [
                  "Hazard identification",
                  "Risk prevention programs",
                  "Worker participation systems",
                  "Emergency preparedness"
                ],
                benefits: [
                  "Reduced workplace injuries",
                  "Improved employee morale",
                  "Lower insurance premiums",
                  "Legal compliance assurance"
                ],
                link: "/iso-45001-guide"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                <div className="p-4 sm:p-6 flex-grow">
                  <div className="flex items-start mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-opacity-20 flex items-center justify-center mr-3 sm:mr-4"
                      style={{ backgroundColor: item.color.split(' ')[1].replace('from-', '').replace('-500', '-100') }}>
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        style={{ color: item.color.split(' ')[1].replace('from-', '').replace('-500', '-600') }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">{item.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
                    </div>
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <h4 className="font-semibold text-sm sm:text-base text-gray-700 mb-1 sm:mb-2">Key Features:</h4>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-xs sm:text-sm text-gray-600">
                      {item.features.slice(0, 3).map((feature, j) => (
                        <li key={j}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <h4 className="font-semibold text-sm sm:text-base text-gray-700 mb-1 sm:mb-2">Main Benefits:</h4>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-xs sm:text-sm text-gray-600">
                      {item.benefits.slice(0, 2).map((benefit, j) => (
                        <li key={j}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative w-full py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials && testimonials.length > 0 ? (
              testimonials.map((testimonial, i) => (
                <TestimonialCard key={i} testimonial={testimonial} />
              ))
            ) : (
              <div className="col-span-3 text-center py-8 sm:py-10">
                <p className="text-gray-500 text-sm sm:text-base">No testimonials available yet</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Achieve ISO Certification?
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get a free consultation with our ISO experts today
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-blue-600 font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all text-sm sm:text-base">
              Get Started Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;