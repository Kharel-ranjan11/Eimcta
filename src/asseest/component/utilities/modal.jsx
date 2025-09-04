import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, BarChart3, GraduationCap, Award, Globe, Facebook, Twitter, Instagram } from 'lucide-react';

const ModalPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setShowModal(false);

  // Data for list items and services for easier management
  const achievements = [
    "150+ Successful Projects Completed",
    "50+ Certified Professionals",
    "Global Client Base",
    "ISO 9001:2015 Certified",
    "Customized Training Solutions"
  ];

  const services = [
    { icon: <BarChart3 className="w-8 h-8 text-[#8B5A2B] mx-auto mb-2" />, title: "Business Consulting" },
    { icon: <GraduationCap className="w-8 h-8 text-[#8B5A2B] mx-auto mb-2" />, title: "Training Programs" },
    { icon: <Award className="w-8 h-8 text-[#8B5A2B] mx-auto mb-2" />, title: "Certification" },
    { icon: <Globe className="w-8 h-8 text-[#8B5A2B] mx-auto mb-2" />, title: "Global Standards" }
  ];

  return (
    <AnimatePresence>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 overflow-y-auto">
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 150 }}
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-6xl mx-auto max-h-[90vh] overflow-y-auto"
          >
            {/* Hero Section */}
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-t-xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                alt="Everest Consultrain Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5A2B] to-transparent opacity-90 flex items-center p-8 md:p-12">
                <div className="max-w-xl">
                  <div className="flex items-center mb-4">
                    <img src="https://placehold.co/100x48/ffffff/8B5A2B?text=Everest" alt="Everest Consultrain" className="h-12 mr-4 rounded" />
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                      Everest <span className="text-yellow-300">Consultrain</span>
                    </h1>
                  </div>
                  <p className="text-white text-lg md:text-xl mb-6">
                    Transforming businesses through strategic consulting and world-class training solutions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-yellow-500 bg-opacity-90 text-white px-3 py-1 rounded-full text-sm font-medium">ISO Certified</span>
                    <span className="bg-yellow-500 bg-opacity-90 text-white px-3 py-1 rounded-full text-sm font-medium">Since 2005</span>
                    <span className="bg-yellow-500 bg-opacity-90 text-white px-3 py-1 rounded-full text-sm font-medium">Global Reach</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all z-10"
            >
              <X className="h-6 w-6 text-[#5D3A1A]" />
            </button>

            {/* Main Content */}
            <div className="p-6 md:p-8 space-y-8">
              {isLoading ? (
                <div className="flex flex-col justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8B5A2B] mb-4"></div>
                  <p className="text-[#5D3A1A] font-medium">Loading company information...</p>
                </div>
              ) : (
                <>
                  {/* About Section */}
                  <section className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#5D3A1A] mb-4 relative pb-2">
                        <span className="relative z-10">About Everest Consultrain</span>
                        <span className="absolute bottom-0 left-0 w-16 h-1 bg-yellow-300 rounded-full"></span>
                      </h2>
                      <p className="text-[#8B5A2B] text-lg mb-4">
                        Founded in 2005, Everest Consultrain has established itself as a premier provider of business consulting and professional training services across multiple industries.
                      </p>
                      <ul className="space-y-3">
                        {achievements.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-[#5D3A1A]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[#f9f5f0] p-6 rounded-xl border border-yellow-200">
                      <h3 className="text-xl font-bold text-[#5D3A1A] mb-4">Our Core Services</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {services.map((service, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                            {service.icon}
                            <h4 className="font-semibold text-[#5D3A1A]">{service.title}</h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Certification Section */}
                  <section className="bg-[#f9f5f0] rounded-xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3 flex justify-center">
                        <div className="bg-white p-4 rounded-lg shadow-md border-2 border-yellow-300">
                          <img src="https://placehold.co/400x300/f0f0f0/333333?text=ISO+9001%3A2015" alt="ISO Certificate" className="w-full h-auto max-h-48 object-contain rounded" />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h2 className="text-2xl font-bold text-[#5D3A1A] mb-4">ISO 9001:2015 Certified</h2>
                        <p className="text-[#8B5A2B] mb-4">
                          Our certification demonstrates our commitment to quality management systems and continuous improvement in all our services.
                        </p>
                        <div className="bg-white p-4 rounded-lg border-l-4 border-[#8B5A2B]">
                          <h3 className="font-bold text-[#5D3A1A] mb-2">Certification Highlights</h3>
                          <ul className="list-disc list-inside text-[#8B5A2B] space-y-1">
                            <li>Quality Management System certified since 2018</li>
                            <li>Regular audits to maintain standards</li>
                            <li>Client-focused service delivery</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Special Offer Section */}
                  <section className="bg-gradient-to-r from-[#8B5A2B] to-[#5D3A1A] rounded-xl p-6 md:p-8 text-white overflow-hidden relative">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-300 rounded-full opacity-10"></div>
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-yellow-300 rounded-full opacity-10"></div>
                    <div className="relative z-10">
                      <h2 className="text-2xl font-bold mb-2">Limited Time Offer</h2>
                      <h3 className="text-3xl font-bold mb-4 text-yellow-300">20% Off Training Programs</h3>
                      <p className="mb-6 max-w-2xl">
                        Register for any of our professional training programs before the end of next month and receive an exclusive discount.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <button className="bg-yellow-400 hover:bg-yellow-300 text-[#5D3A1A] font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105">
                          Enroll Now
                        </button>
                        <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-3 px-6 rounded-lg border border-white border-opacity-30 transition">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </section>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="bg-[#5D3A1A] text-white p-6 rounded-b-xl">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <img src="https://placehold.co/100x40/5D3A1A/FFFFFF?text=Everest" alt="Everest Consultrain" className="h-10 rounded" />
                  <div>
                    <p className="font-medium">Everest Consultrain Pvt. Ltd.</p>
                    <p className="text-sm opacity-80">Transforming businesses since 2005</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-yellow-300 transition" aria-label="Facebook">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-yellow-300 transition" aria-label="Twitter">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-yellow-300 transition" aria-label="Instagram">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// It's good practice to have a root component to render the main page/component.
export default ModalPage; 