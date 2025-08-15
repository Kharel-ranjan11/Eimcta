import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ModalPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [offers, setOffers] = useState([]);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setOffers([
        { 
          id: 1, 
          title: "Summer Sale", 
          description: "Get 20% off on all products", 
          expiry: "2023-08-31", 
          current: true,
          image: "/summer-sale.jpg"
        },
        { 
          id: 2, 
          title: "New User Discount", 
          description: "15% off for first-time customers", 
          expiry: "2023-09-15", 
          current: false,
          image: "/new-user.jpg"
        }
      ]);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setShowModal(false);

  return (
    <AnimatePresence>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-y-auto">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-5xl mx-auto max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 bg-gradient-to-r from-amber-300 to-orange-400 rounded-t-xl">
              <div className="flex items-center gap-3">
                <div className="bg-white p-1 rounded-full">
                  <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 tracking-tight">
                  Company <span className="text-amber-600">Offers</span> & Certifications
                </h2>
              </div>
              <button
                onClick={closeModal}
                aria-label="Close modal"
                className="text-gray-900 dark:text-gray-50 hover:text-amber-600 text-3xl transition"
              >
                &times;
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-8">
              {isLoading ? (
                <div className="flex flex-col justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600 mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">Loading information...</p>
                </div>
              ) : (
                <>
                  {/* ISO Section */}
                  <section className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 relative h-48 md:h-auto rounded-lg overflow-hidden shadow-sm">
                      <img src="/iso-certified.jpg" alt="ISO" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-500 via-transparent to-transparent opacity-70 flex items-center justify-center">
                        <span className="bg-amber-600 text-white px-3 py-1 rounded font-semibold text-sm md:text-base">
                          ISO 9001:2015 Certified
                        </span>
                      </div>
                    </div>
                    <div className="md:w-2/3 space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                        International Organization for Standardization (ISO)
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        ISO develops international standards to ensure the quality, safety, and efficiency of products and services. 
                        Our partnership with EIMCTA ensures compliance with ISO 9001:2015 standards.
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md border-l-4 border-amber-500">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100">Our Certification</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Demonstrates our ability to consistently meet customer and regulatory requirements. Certified since 2018.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Offers Section */}
                  <section>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-4">
                      Current & <span className="text-amber-600">Upcoming</span> Offers
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {offers.length > 0 ? (
                        offers.map(offer => (
                          <motion.div
                            key={offer.id}
                            whileHover={{ scale: 1.03 }}
                            className={`border rounded-lg overflow-hidden shadow-sm transition ${offer.current ? 'border-amber-400' : 'border-orange-400'}`}
                          >
                            <div className="relative h-40">
                              <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
                              <span className={`absolute top-2 right-2 px-2 py-1 text-xs rounded-full font-semibold text-white ${offer.current ? 'bg-amber-600' : 'bg-orange-600'}`}>
                                {offer.current ? 'Current' : 'Upcoming'}
                              </span>
                            </div>
                            <div className="p-4 space-y-2">
                              <h4 className="text-gray-900 dark:text-gray-50 font-bold">{offer.title}</h4>
                              <p className="text-gray-700 dark:text-gray-300 text-sm italic">{offer.description}</p>
                              <div className="flex justify-between items-center mt-2">
                                <span className="text-xs text-gray-500 dark:text-gray-400">Expires: {offer.expiry}</span>
                                <button className="text-xs bg-amber-100 dark:bg-amber-700 text-amber-800 dark:text-amber-50 px-2 py-1 rounded hover:bg-amber-200 dark:hover:bg-amber-600 transition font-semibold">
                                  View Details
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <div className="col-span-full text-center py-12">
                          <img src="/no-offers.svg" alt="No offers" className="mx-auto h-24 mb-4" />
                          <p className="text-gray-500 dark:text-gray-400">No offers available at the moment</p>
                        </div>
                      )}
                    </div>
                  </section>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-b-xl border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <img src="/secure-payment.png" alt="Secure Payment" className="h-8" />
                <span className="text-xs text-gray-500 dark:text-gray-400">100% Secure Transactions</span>
              </div>
              <button
                onClick={closeModal}
                className="w-full sm:w-auto px-5 py-2 bg-gradient-to-r from-amber-300 to-orange-400 text-gray-900 dark:text-gray-900 rounded-lg font-semibold hover:from-amber-400 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
              >
                Close Window
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
