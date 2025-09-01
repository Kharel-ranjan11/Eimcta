import React from "react";
import { 
  FaLeaf, 
  FaRecycle, 
  FaFlask, 
  FaChartLine, 
  FaShieldAlt, 
  FaUsers, 
  FaCheck,
  FaCertificate 
} from "react-icons/fa";

// Pattern background component
const PatternBackground = () => (
  <div className="absolute inset-0 opacity-5" 
    style={{
      backgroundImage: 'linear-gradient(135deg, #ffffff 10%, transparent 10%, transparent 50%, #ffffff 50%, #ffffff 60%, transparent 60%, transparent 100%)',
      backgroundSize: '15px 15px'
    }}
  ></div>
);

const EnvironmentalServices = () => {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-amber-100 text-gray-800 px-4 py-8 md:px-8 lg:px-20 max-w-7xl mx-auto font-['Arial_Narrow']">
      {/* Hero Section */}
      <section className="text-center mb-12 relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 p-8 md:p-12 text-white">
        <PatternBackground />
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-24 after:h-1 after:bg-yellow-400 pb-2">
            <span className="text-amber-900">
              ISO-Based Environmental Services
            </span>
          </h1>
          <p className="text-lg md:text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
            At EIMCTA, we offer comprehensive environmental services grounded in ISO standards and best practices to promote sustainability, regulatory compliance, and natural resource protection.
          </p>
        </div>
      </section>

      {/* EIA Section */}
      <section className="mb-16 bg-white rounded-xl p-6 md:p-8 shadow-md border border-amber-200 relative overflow-hidden hover:shadow-lg transition-shadow">
        <PatternBackground />
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <div className="bg-amber-100 p-3 rounded-full mr-4">
              <FaLeaf className="text-yellow-400 text-xl" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-amber-900 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-16 after:h-1 after:bg-yellow-400 pb-1">Environmental Impact Assessment (EIA)</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                EIA is a systematic process to evaluate the potential environmental effects of proposed projects before implementation. Our ISO-aligned assessments help organizations:
              </p>
              <ul className="space-y-3">
                {[
                  "Identify potential environmental risks early",
                  "Develop effective mitigation strategies",
                  "Ensure regulatory compliance",
                  "Enhance project sustainability",
                  "Improve stakeholder confidence"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-yellow-400 mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 shadow-sm">
              <h3 className="font-semibold text-amber-800 mb-3">Strategic Environmental Assessment (SEA)</h3>
              <p className="text-gray-700 mb-4">
                For policies, plans and programs, we conduct SEAs to integrate environmental considerations at the highest decision-making levels.
              </p>
              <div className="bg-amber-100/50 p-4 rounded-lg">
                <p className="text-amber-800 font-medium">
                  "Our SEA services help align development strategies with environmental sustainability goals."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="mb-16 relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-50 to-amber-100 p-8 hover:shadow-md transition-shadow">
        <PatternBackground />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-amber-900 mb-8 text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-20 after:h-1 after:bg-yellow-400 pb-1">
            Our <span className="text-amber-800">Core Principles</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaFlask className="text-2xl" />, title: "Sampling & Analysis", desc: "Accurate collection and standardized lab methods for air, water, soil, and waste samples" },
              { icon: <FaChartLine className="text-2xl" />, title: "QA/QC Processes", desc: "Rigorous quality assurance and control for credible, defensible results" },
              { icon: <FaShieldAlt className="text-2xl" />, title: "Regulatory Compliance", desc: "Monitoring aligned with local and international environmental regulations" },
              { icon: <FaUsers className="text-2xl" />, title: "Risk Assessment", desc: "Comprehensive evaluation of environmental and public health risks" }
            ].map((principle, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-amber-200 hover:shadow-md transition-shadow"
              >
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-yellow-400">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{principle.title}</h3>
                <p className="text-amber-800">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16 bg-white rounded-xl p-8 relative overflow-hidden border border-amber-200 hover:shadow-md transition-shadow">
        <PatternBackground />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-amber-900 mb-6 text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-20 after:h-1 after:bg-yellow-400 pb-1">
            Key Benefits of Our Environmental Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Environmental protection and pollution reduction",
              "Full regulatory compliance assurance",
              "Early hazard detection and prevention",
              "Public health and safety enhancement",
              "Sustainable resource management",
              "Stakeholder engagement and education",
              "Data-driven policy development",
              "Cost savings through efficiency",
              "Improved corporate reputation",
              "Climate change mitigation",
              "Waste minimization strategies",
              "Circular economy implementation"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                  <FaCheck className="text-yellow-400 text-sm" />
                </div>
                <span className="text-amber-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waste Management */}
      <section className="mb-16 relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-50 to-amber-100 p-8 hover:shadow-md transition-shadow">
        <PatternBackground />
        <div className="relative z-10">
          <div className="flex items-center mb-6">
            <div className="bg-amber-100 p-3 rounded-full mr-4">
              <FaRecycle className="text-yellow-400 text-xl" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-amber-900 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-16 after:h-1 after:bg-yellow-400 pb-1">Comprehensive Waste Management Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Solid Waste Management Solutions",
              "Hazardous Waste Handling",
              "Medical Waste Disposal",
              "Waste Minimization Strategies",
              "Water Reuse Systems",
              "Landfill Management",
              "Industrial Water Audits",
              "Wastewater Treatment",
              "Effluent System Design",
              "Air Pollution Control",
              "Decontamination Services",
              "Clean Technology Integration"
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg border border-amber-200 hover:border-yellow-400 transition-colors flex items-center shadow-sm"
              >
                <FaCheck className="text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-amber-800">{service}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-amber-700 italic bg-amber-100/50 p-3 rounded-lg">
            All services comply with ISO 14001:2015 Environmental Management System standards and relevant local regulations.
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="mb-16 relative overflow-hidden rounded-xl bg-white p-8 border border-amber-200 hover:shadow-md transition-shadow">
        <PatternBackground />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-amber-900 mb-8 text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-20 after:h-1 after:bg-yellow-400 pb-1">
            Additional <span className="text-amber-800">Environmental Services</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Environmental Consulting",
              "Biodiversity Conservation",
              "Eco-Tourism Planning",
              "Green Building Certification",
              "Environmental Education",
              "Carbon Footprint Analysis",
              "Ecosystem Valuation",
              "Renewable Energy Advisory",
              "Sustainable Agriculture",
              "Water Resource Management",
              "Circular Economy Transition",
              "Life Cycle Assessment"
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-amber-50 hover:bg-amber-100 p-4 rounded-lg transition-colors text-center text-amber-800 border border-amber-200 shadow-sm"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="mb-16 bg-gradient-to-r from-amber-500 to-amber-700 rounded-xl p-8 relative overflow-hidden hover:shadow-md transition-shadow">
        <PatternBackground />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-20 after:h-1 after:bg-yellow-400 pb-1">
            Aligned with <span className="text-amber-200">International Standards</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { code: "ISO 14001", name: "Environmental Management" },
              { code: "ISO 14064", name: "Greenhouse Gas Accounting" },
              { code: "ISO 50001", name: "Energy Management" },
              { code: "ISO 9001", name: "Quality Management" },
              { code: "ISO 46001", name: "Water Efficiency" },
              { code: "ISO 14040", name: "Life Cycle Assessment" },
              { code: "ISO 14020", name: "Environmental Labeling" },
              { code: "ISO 14044", name: "LCA Requirements" }
            ].map((standard, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-90 p-5 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-400">
                  <FaCertificate className="text-xl" />
                </div>
                <h3 className="font-bold text-lg text-amber-900">{standard.code}</h3>
                <p className="text-amber-800 text-sm">{standard.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalServices;