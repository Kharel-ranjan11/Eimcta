import {
  FaHandshake,
  FaSearch,
  FaClipboardCheck,
  FaBuilding,
  FaCheckCircle,
  FaChartLine,
  FaCertificate,
  FaAward,
  FaShieldAlt,
  FaFlagCheckered,
  FaCheck,
  FaLightbulb,
  FaPhoneAlt,
  FaEnvelope,
  FaFire,
  FaMedal,
  FaTrophy
} from "react-icons/fa";
import ISOCertificationForm from "../utilities/gloabal";

export const ISO_certification = () => {
  const processSteps = [
    {
      title: "Free Consultation",
      description: "Initial discussion to understand your needs and recommend the right ISO standards",
      icon: <FaHandshake className="text-amber-600" size={24} />,
    },
    {
      title: "ISO GAP Analysis",
      description: "Comprehensive assessment of your current systems against ISO requirements",
      icon: <FaSearch className="text-amber-600" size={24} />,
    },
    {
      title: "Stage-I ISO Audit",
      description: "Documentation review to verify your preparedness for implementation",
      icon: <FaClipboardCheck className="text-amber-600" size={24} />,
    },
    {
      title: "Stage-II ISO Audit",
      description: "On-site evaluation of your implemented management system",
      icon: <FaBuilding className="text-amber-600" size={24} />,
    },
    {
      title: "Closeout of Audit",
      description: "Addressing any non-conformities identified during audits",
      icon: <FaCheckCircle className="text-amber-600" size={24} />,
    },
    {
      title: "Management Review",
      description: "Executive evaluation of system performance and effectiveness",
      icon: <FaChartLine className="text-amber-600" size={24} />,
    },
    {
      title: "Registration of ISO Certificate",
      description: "Official certification issued by accredited body",
      icon: <FaCertificate className="text-amber-600" size={24} />,
    },
    {
      title: "Handover of ISO Certification",
      description: "Delivery of your certificate and supporting documents",
      icon: <FaAward className="text-amber-600" size={24} />,
    },
    {
      title: "Surveillance Audit",
      description: "Annual audits to maintain certification validity",
      icon: <FaShieldAlt className="text-amber-600" size={24} />,
    },
    {
      title: "End of Services",
      description: "Completion of 3-year cycle with option for recertification",
      icon: <FaFlagCheckered className="text-amber-600" size={24} />,
    }
  ];

  const isoStandards = [
    { name: "ISO 9001", description: "Quality Management System" },
    { name: "ISO 14001", description: "Environmental Management" },
    { name: "ISO 45001", description: "Occupational Health & Safety" },
    { name: "ISO 27001", description: "Information Security" },
    { name: "ISO 22000", description: "Food Safety Management" },
    { name: "ISO 50001", description: "Energy Management" }
  ];

  return (
    <div className="p-4 md:p-12 space-y-10 w-full bg-gradient-to-br from-amber-50 to-amber-100">
      {/* Hero Section */}
      <div className="space-y-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-amber-900 relative after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:transform after:-translate-x-1/2 after:w-24 after:h-1 after:bg-yellow-400">
          <span className="inline-flex items-center justify-center">
            <span className="bg-yellow-100 rounded-full p-2 mr-3">
              <FaFire className="text-yellow-400" />
            </span>
            Premium ISO Certification
            <span className="bg-yellow-100 rounded-full p-2 ml-3">
              <FaMedal className="text-yellow-400" />
            </span>
          </span>
        </h2>
        <p className="text-base md:text-xl text-amber-800 max-w-3xl mx-auto">
          Accelerate your business growth with internationally recognized certifications
        </p>
        <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
          <div className="bg-white p-8 rounded-xl border border-yellow-200 shadow-md text-center">
            <span className="bg-yellow-100 rounded-full p-3 inline-flex mb-4">
              <FaTrophy className="text-amber-600 text-4xl" />
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">Industry-Leading Certification</h3>
            <p className="text-amber-700">90% first-time pass rate with our expert guidance</p>
          </div>
        </div>
      </div>
      
      <ISOCertificationForm />
      
      {/* Value Proposition Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* What is ISO */}
        <div className="bg-white p-5 md:p-7 rounded-xl border border-yellow-200 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-100 p-3 rounded-full mr-4">
              <FaLightbulb className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-amber-900">What is ISO Certification?</h3>
          </div>
          <p className="text-amber-800 pl-0 md:pl-14 text-sm md:text-base">
            International recognition that your organization meets rigorous global standards for quality (ISO 9001), safety (ISO 45001), information security (ISO 27001), and more. It's a mark of excellence that builds trust with clients and partners worldwide.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white p-5 md:p-7 rounded-xl border border-yellow-200 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-100 p-3 rounded-full mr-4">
              <FaCheck className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-amber-900">Why Choose Us?</h3>
          </div>
          <ul className="space-y-3 pl-0 md:pl-14">
            {[
              "90% first-time pass rate",
              "Industry-specific consultants",
              "End-to-end support",
              "60% faster certification",
              "Ongoing compliance support"
            ].map((item, index) => (
              <li key={index} className="flex items-start text-amber-800 text-sm md:text-base">
                <FaCheck className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Process Section */}
      <div className="mt-12 md:mt-16 max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-amber-900 mb-8 md:mb-12 relative after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:transform after:-translate-x-1/2 after:w-24 after:h-1 after:bg-yellow-400">
          Our <span className="text-amber-800">10-Step</span> Certification Process
        </h3>

        {/* Grid Layout for Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border border-yellow-200 shadow-md flex flex-col h-full transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-100 border-4 border-amber-600 flex items-center justify-center shadow-lg mb-4">
                <span className="text-base font-bold text-amber-900">{index + 1}</span>
              </div>
              <div className="flex items-center mb-3">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  {step.icon}
                </div>
                <h4 className="text-lg font-bold text-amber-900">{step.title}</h4>
              </div>
              <p className="text-sm text-amber-800 mt-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Standards Section */}
      <div className="mt-12 md:mt-20 bg-amber-100/50 p-6 md:p-8 rounded-2xl border border-yellow-200 max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-amber-900 mb-6 md:mb-8 relative after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:transform after:-translate-x-1/2 after:w-24 after:h-1 after:bg-yellow-400">
          Popular <span className="text-amber-800">ISO Standards</span> We Certify
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {isoStandards.map((standard, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-5 rounded-xl border border-yellow-200 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
            >
              <h4 className="text-xl md:text-2xl font-bold text-amber-900 mb-2">{standard.name}</h4>
              <p className="text-sm md:text-lg text-amber-800">{standard.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};