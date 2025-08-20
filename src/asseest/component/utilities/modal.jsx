import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  return (
    <AnimatePresence>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 overflow-y-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
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
                    <img src="/everest-logo.png" alt="Everest Consultrain" className="h-12 mr-4" />
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
              className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#5D3A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
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
                        {[
                          "150+ Successful Projects Completed",
                          "50+ Certified Professionals",
                          "Global Client Base",
                          "ISO 9001:2015 Certified",
                          "Customized Training Solutions"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[#5D3A1A]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[#f9f5f0] p-6 rounded-xl border border-yellow-200">
                      <h3 className="text-xl font-bold text-[#5D3A1A] mb-4">Our Core Services</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { icon: '📊', title: "Business Consulting" },
                          { icon: '🎓', title: "Training Programs" },
                          { icon: '📝', title: "Certification" },
                          { icon: '🌐', title: "Global Standards" }
                        ].map((service, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                            <span className="text-2xl block mb-2">{service.icon}</span>
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
                          <img src="/iso-certificate.jpg" alt="ISO Certificate" className="w-full h-auto max-h-48 object-contain" />
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
                        Register for any of our professional training programs before August 31st and receive an exclusive discount.
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
                  <img src="/everest-logo-white.png" alt="Everest Consultrain" className="h-10" />
                  <div>
                    <p className="font-medium">Everest Consultrain Pvt. Ltd.</p>
                    <p className="text-sm opacity-80">Transforming businesses since 2005</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-yellow-300 transition">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-yellow-300 transition">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-yellow-300 transition">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
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

export default ModalPage;