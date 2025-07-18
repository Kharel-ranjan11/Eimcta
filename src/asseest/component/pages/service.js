import { useState } from "react";
import { Link } from "react-router-dom"; // react-router for internal pages

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

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(uniqueCategories[0]);
  const filteredServices = relatedServices.filter((s) => s.category === activeCategory);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are one of the leading global providers of accredited ISO certification and management consultancy services.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {uniqueCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white"
            >
              <div className="flex flex-col gap-2 mb-4">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 text-2xl">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <div className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                    <i className="fas fa-check text-green-500 mt-1"></i>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  {service.category}
                </span>
                <Link
                  to="/quote"
                  className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Safety Equipment Section */}
        <div className="py-20 bg-gray-50 rounded-xl mt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Safety Signs & PPE Equipment</h2>
            <p className="text-xl text-gray-600">
              Complete range of safety equipment and signage solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div key={idx} className="p-6 border rounded-xl bg-white shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  View Products
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help Choosing the Right Service?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our experts are here to help you find the perfect solution for your business needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/contact"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
