import React from "react";
import { Link } from "react-router-dom";
import {
  FaAward,           // instead of Award
  FaHardHat,         // instead of HardHat (from react-icons/fa6 or fa5)
  FaGraduationCap,   // instead of UserGraduate
  FaTree,            // instead of Tree
  FaShieldAlt,       // instead of Shield
  FaSearch,          // same for Search
  FaFileAlt,         // instead of FileText
} from "react-icons/fa";

export default function About() {
  const policies = [
    {
      name: "Quality Policy",
      description: "Commitment to delivering excellence in all our services",
    },
    {
      name: "Anti-Bribery Policy",
      description: "Zero tolerance for corruption and unethical practices",
    },
    {
      name: "OHS Policy",
      description: "Prioritizing occupational health and safety",
    },
    {
      name: "Impartiality Policy",
      description: "Ensuring fair and unbiased service delivery",
    },
  ];

  const services = [
    {
      title: "ISO Certification",
      icon: <FaAward size={24} className="text-blue-600" />,
      description: "Complete ISO certification services for various standards",
    },
    {
      title: "OHS Consultancy",
      icon: <FaHardHat size={24} className="text-blue-600" />,
      description: "Occupational health and safety management",
    },
    {
      title: "Training Programs",
      icon: <FaGraduationCap size={24} className="text-blue-600" />,
      description: "Professional development and certification training",
    },
    {
      title: "Environmental Services",
      icon: <FaTree size={24} className="text-blue-600" />,
      description: "Environmental impact assessment and management",
    },
    {
      title: "Safety Equipment",
      icon: <FaShieldAlt size={24} className="text-blue-600" />,
      description: "PPE and safety equipment supply",
    },
    {
      title: "Third Party Audits",
      icon: <FaSearch size={24} className="text-blue-600" />,
      description: "Independent audit and assessment services",
    },
  ];

  const isoStandards = [
    "ISO 9001:2015",
    "ISO 45001:2018",
    "ISO 14001:2015",
    "ISO 39001:2012",
    "ISO 27001:2022",
    "ISO 15189:2022",
    "ISO 26000:2010",
    "SA 8000",
    "ISO 55001:2014",
    "ISO 50001:2018",
    "ISO 41001:2018",
    "ISO 28001",
  ];

  const specializedServices = [
    "CE Marking",
    "RBA CoC",
    "SMETA Sedex",
    "QAA",
    "HACCP",
    "HALAL",
    "GMP",
    "Third Party Audit",
    "Emergency Management",
    "Technical Bids",
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About EIMCTA</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EIMCTA (Everestconsultrain) is a leading Management Consultancy
            providing comprehensive solutions for ISO certification, training,
            and safety management.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
              alt="EIMCTA team working on ISO certification"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              EIMCTA is dedicated to providing comprehensive Management
              Consultancy services including Documentation, Training,
              Implementation, and Audit Services for various ISO Standards and
              certifications. We specialize in helping organizations achieve
              excellence through systematic approaches to quality, safety, and
              environmental management.
            </p>
            <p className="text-gray-700 mb-6">
              Our services encompass ISO 9001:2015 QMS, ISO 45001:2018 OHSMS, ISO
              14001:2015 EMS, ISO 39001:2012 RTSMS, ISO 27001:2022 ISMS, and many
              other international standards. We also provide specialized services
              like CE Marking, RBA CoC, SMETA Sedex, and comprehensive training
              programs.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="pb-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600 text-xl">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Policies Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Policies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow flex flex-col"
              >
                <div className="pb-4 flex items-center gap-3">
                  <FaFileAlt size={24} className="text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {policy.name}
                  </h3>
                </div>
                <p className="text-gray-600">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ISO Standards
              </h3>
              <div className="flex flex-wrap gap-2">
                {isoStandards.map((standard) => (
                  <span
                    key={standard}
                    className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full
                               transition transform hover:scale-110 hover:bg-blue-200 cursor-pointer"
                  >
                    {standard}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Specialized Services
              </h3>
              <div className="flex flex-wrap gap-2">
                {specializedServices.map((service) => (
                  <span
                    key={service}
                    className="inline-block border border-blue-600 text-blue-600 text-sm font-medium px-3 py-1 rounded-full
                               transition transform hover:scale-110 hover:bg-blue-50 cursor-pointer"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help your organization achieve its
            certification goals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/form"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </Link>
            <Link
              to="/contact-us"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
