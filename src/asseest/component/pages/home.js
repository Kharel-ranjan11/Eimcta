import { motion, useScroll, useTransform } from 'framer-motion';
import ImageCarousel from "../utilities/caro";
import ParallaxBanner from "../utilities/parallelx";

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  // Parallax image translations
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const parallaxImages = [
    'https://images.unsplash.com/photo-1498496294664-d9372eb521f3?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2070&auto=format&fit=crop'
  ];

  return (
    <section className="p-0 overflow-hidden">
      {/* Hero Carousel */}
      <ImageCarousel />
      
      {/* First Parallax Section */}
      <ParallaxBanner image={parallaxImages[1]}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50 backdrop-blur-sm"></div>
        <motion.section 
          className="relative py-24 px-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Your Trusted Partner for ISO Certification
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Empowering businesses with global compliance standards, expert consultancy, and impactful training programs.
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="relative z-10">Request a Free Consultation</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
              <motion.button 
                className="bg-white text-blue-600 border-2 border-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 hover:border-blue-700 transition transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                Explore Our Expertise
              </motion.button>
            </div>
          </motion.div>
        </motion.section>
      </ParallaxBanner>

      {/* Features Section */}
      <section className="relative py-16 px-6 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <motion.h2 
            className="text-2xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Your Growth. Your Safety. Our Expertise.
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'End-to-End Solutions',
                desc: 'From documentation to final audits, we simplify every step of your certification journey.',
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              {
                title: 'Globally Recognized Standards',
                desc: 'Accredited certifications trusted across industries and countries.',
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              {
                title: 'Industry Specialists',
                desc: 'Consultants with years of hands-on experience in ISO, OHS, and environmental safety.',
                icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
              },
              {
                title: 'Tailored Programs',
                desc: 'Customized consultancy and training designed to meet your unique business requirements.',
                icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
              },
              {
                title: 'Proven Track Record',
                desc: 'We have helped hundreds of organizations achieve operational excellence and compliance.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform duration-300"
                    whileHover={{ rotate: 12, scale: 1.1 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-800 group-hover:text-blue-900 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workplace Safety & OHS */}
      <section className="relative py-24 px-6 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-blue-900/20"
          style={{ y: y1 }}
        ></motion.div>
        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <motion.img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="Workplace Safety"
                className="w-full h-auto object-cover"
                style={{ y: y2 }}
              />
            </div>
            <motion.div 
              className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg hidden md:block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-800">Safety First</h4>
                  <p className="text-sm text-gray-600">Certified OHS Solutions</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h2 
              className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Workplace Safety & OHS Solutions
            </motion.h2>
            <motion.p 
              className="text-gray-700 mb-6 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Create a safer and more compliant workplace with our OHS audits, risk assessments, and safety officer training programs. We design strategies to prevent accidents, reduce risks, and protect both employees and business assets.
            </motion.p>
            <motion.button 
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Client Success Section */}
      <section className="relative py-16 px-6 bg-gradient-to-br from-blue-800 to-blue-600 text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ y: y3 }}
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
        </motion.div>
        <div className="relative max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Client Success & Achievements</h2>
            <motion.div 
              className="w-24 h-1 bg-blue-300 mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Award-Winning Consultancy",
                desc: "Recognized for excellence in ISO certification and safety standards.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Trusted by Leading Brands",
                desc: "Partnered with top companies for end-to-end compliance.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              },
              {
                title: "Global Recognition",
                desc: "Delivering impactful results in quality, safety, and environmental initiatives.",
                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-white mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: `url(${parallaxImages[3]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: y3
          }}
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-600/60 backdrop-blur-sm"></div>
        <motion.section 
          className="relative py-24 px-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          >
            <motion.h2 
              className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Business Compliance?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Contact us today for a free consultation and take the first step towards achieving excellence in quality, safety, and environmental standards.
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="relative z-10">Get Started Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
              <motion.button 
                className="bg-white text-blue-600 border-2 border-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 hover:border-blue-700 transition transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                Call Our Experts
              </motion.button>
            </div>
          </motion.div>
        </motion.section>
      </section>
    </section>
  );
}