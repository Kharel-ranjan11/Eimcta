import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const relatedServices = [
  {
    id: 1,
    title: "ISO 9001 Certification",
    description: "Quality Management Systems consultancy and certification",
    category: "ISO",
    icon: "fas fa-certificate",
    features: ["Gap Analysis", "Documentation", "Internal Audit"],
  },
  {
    id: 1.5,
    title: "ISO 9001 Certification",
    description: "Quality Management Systems consultancy and certification",
    category: "ISO",
    icon: "fas fa-certificate",
    features: ["Gap Analysis", "Documentation", "Internal Audit"],
  },
  {
    id: 2,
    title: "Workplace Safety Audit",
    description: "Comprehensive OHS audit for industrial safety compliance",
    category: "OHS",
    icon: "fas fa-hard-hat",
    features: ["Hazard Identification", "Risk Assessment", "PPE Compliance"],
  },
  {
    id: 3,
    title: "Environmental Monitoring",
    description: "Air, Water and Noise pollution studies and compliance reports",
    category: "Environmental",
    icon: "fas fa-leaf",
    features: ["EIA Reporting", "Monitoring Plan", "Regulatory Support"],
  },
  {
    id: 4,
    title: "Fire Safety Training",
    description: "Hands-on safety training for fire prevention and response",
    category: "Training",
    icon: "fas fa-fire-extinguisher",
    features: ["Mock Drills", "Evacuation Training", "Fire Watch Programs"],
  },
  {
    id: 5,
    title: "Safety Signage Installation",
    description: "Industrial and commercial signage solutions",
    category: "Safety",
    icon: "fas fa-exclamation-triangle",
    features: ["Directional Signs", "Hazard Warnings", "Exit Signage"],
  },
];

const uniqueCategories = [...new Set(relatedServices.map((s) => s.category))];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(uniqueCategories[0]);
  const filteredServices = relatedServices.filter((s) => s.category === activeCategory);

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Hero with Parallax */}
        <Parallax bgImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" strength={300}>
          <div className="h-96 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                We are one of the leading global providers of accredited ISO certification and management consultancy services.
              </p>
            </motion.div>
          </div>
        </Parallax>

        {/* Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center gap-4 flex-wrap my-16"
        >
          {uniqueCategories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 hover:text-blue-600 hover:shadow-md"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="p-8 border rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white group hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50"
              whileHover={{ y: -10 }}
            >
              <div className="flex flex-col gap-4 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl group-hover:rotate-12 transition-transform duration-300">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <div className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                  >
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-xs font-medium group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors duration-300">
                  {service.category}
                </span>
                <Link
                  to="/form"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 text-sm rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Safety Equipment Section */}
        <Parallax bgImage="https://images.unsplash.com/photo-1581093057305-25a0a6b9a8b0" strength={500}>
          <div className="py-20 bg-black bg-opacity-70 rounded-2xl my-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Safety Signs & PPE Equipment</h2>
              <p className="text-xl text-gray-200">
                Complete range of safety equipment and signage solutions
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
            >
              {[
                {
                  title: "Safety Signs",
                  image:
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=300",
                  desc: "Professional safety signage for workplace compliance",
                },
                {
                  title: "PPE & Safety Requisites",
                  image:
                    "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=400&h=300",
                  desc: "Personal protective equipment and safety gear",
                },
                {
                  title: "Fire Safety Equipment",
                  image:
                    "https://images.unsplash.com/photo-1520637836862-4d197d17c50a?auto=format&fit=crop&w=400&h=300",
                  desc: "Complete fire safety and rescue equipment",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-6 border rounded-2xl bg-white bg-opacity-90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="overflow-hidden rounded-lg mb-4">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="rounded-lg w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.desc}</p>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow hover:shadow-md">
                    View Products
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Parallax>
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-12 rounded-2xl shadow-inner">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Need Help Choosing the Right Service?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Our experts are here to help you find the perfect solution for your business needs
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/form"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
              </Link>
              <Link
                to="/contact-us"
                className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}