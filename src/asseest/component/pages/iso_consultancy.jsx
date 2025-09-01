import { useState, useRef } from "react";
import { FiChevronRight, FiMail, FiPhone, FiGlobe, FiCheckCircle, FiAward, FiFileText, FiUsers, FiShield, FiGlobe as FiEarth, FiTrendingUp, FiClock, FiLayers } from "react-icons/fi";

// Import an ISO-related image (you'll need to add this to your project)
// import isoHeaderImage from './path-to-your-image.jpg';

const ISOConsultancy = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);

  // Standard data with icons and colors
  const allStandards = [
    {
      id: "9001",
      name: "ISO 9001:2015",
      focus: "Quality Management",
      industries: "All industries",
      icon: <FiAward className="text-amber-600" />,
    },
    {
      id: "14001",
      name: "ISO 14001:2015",
      focus: "Environmental Management",
      industries: "Manufacturing, Construction",
      icon: <FiEarth className="text-amber-600" />,
    },
    {
      id: "45001",
      name: "ISO 45001:2018",
      focus: "Occupational Health & Safety",
      industries: "Factories, Hospitals",
      icon: <FiShield className="text-amber-600" />,
    },
    {
      id: "27001",
      name: "ISO 27001:2022",
      focus: "Information Security",
      industries: "IT, Banking, Healthcare",
      icon: <FiFileText className="text-amber-600" />,
    },
    {
      id: "39001",
      name: "ISO 39001:2012",
      focus: "Road Traffic Safety",
      industries: "Transportation, Logistics",
      icon: <FiTrendingUp className="text-amber-600" />,
    },
    {
      id: "15189",
      name: "ISO 15189:2022",
      focus: "Medical Laboratories",
      industries: "Healthcare, Diagnostics",
      icon: <FiCheckCircle className="text-amber-600" />,
    },
    {
      id: "26000",
      name: "ISO 26000:2010",
      focus: "Social Responsibility",
      industries: "All industries",
      icon: <FiUsers className="text-amber-600" />,
    },
    {
      id: "55001",
      name: "ISO 55001:2014",
      focus: "Asset Management",
      industries: "Utilities, Infrastructure",
      icon: <FiLayers className="text-amber-600" />,
    },
    {
      id: "50001",
      name: "ISO 50001:2018",
      focus: "Energy Management",
      industries: "Manufacturing, Energy",
      icon: <FiClock className="text-amber-600" />,
    },
    {
      id: "41001",
      name: "ISO 41001:2018",
      focus: "Facility Management",
      industries: "Real Estate, Corporate",
      icon: <FiGlobe className="text-amber-600" />,
    },
    {
      id: "28001",
      name: "ISO 28001",
      focus: "Supply Chain Security",
      industries: "Logistics, Shipping",
      icon: <FiShield className="text-amber-600" />,
    },
    {
      id: "SA8000",
      name: "SA 8000",
      focus: "Social Accountability",
      industries: "Textiles, Manufacturing",
      icon: <FiUsers className="text-amber-600" />,
    }
  ];

  // Tab data
  const tabs = [
    {
      id: "overview",
      title: "Overview",
      icon: "🧭",
      content: (
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-md border border-amber-200 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-amber-100 text-amber-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl">🧭</span>
              What is ISO Consultancy?
            </h3>
            <p className="text-lg mb-6 leading-relaxed">
              <strong className="font-semibold text-amber-800">ISO Consultancy</strong> provides expert guidance to implement international standards,
              streamline processes, and achieve certification. We bridge the gap between your current systems and ISO requirements.
            </p>
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
              <p className="text-amber-800 text-lg">
                Whether it's <strong>ISO 9001 (Quality)</strong>, <strong>ISO 14001 (Environment)</strong>,
                or <strong>ISO 45001 (Safety)</strong>, we customize solutions for <strong>your industry needs</strong>.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md border border-amber-200 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-amber-100 text-amber-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl">🔍</span>
              Why ISO Standards Matter
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "📈", title: "Operational Excellence", desc: "Streamline processes for maximum efficiency" },
                { icon: "⚖️", title: "Regulatory Compliance", desc: "Meet legal and customer requirements" },
                { icon: "🌐", title: "Global Recognition", desc: "Enhance credibility in international markets" },
                { icon: "🛡️", title: "Risk Management", desc: "Proactively identify and mitigate risks" },
                { icon: "🔄", title: "Continuous Improvement", desc: "Implement PDCA cycle for growth" },
                { icon: "💼", title: "Competitive Advantage", desc: "Stand out in procurement processes" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-amber-200 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "standards",
      title: "Standards",
      icon: "📘",
      content: (
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-amber-200 shadow-md transition-all duration-300 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-amber-100 text-amber-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl">📘</span>
              Comprehensive ISO Standards Coverage
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              We specialize in implementing a wide range of international standards across industries.
              Select a standard to learn more about its benefits and implementation process.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allStandards.map((standard, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border
                 border-amber-200 overflow-hidden transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start mb-4">
                    <div className="bg-amber-100 p-2 rounded-lg mr-4">
                      <div className="text-2xl">
                        {standard.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{standard.name}</h3>
                      <p className="text-sm text-gray-500">{standard.id}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{standard.focus}</p>
                  <div className="bg-amber-50 p-2 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Industries:</span> {standard.industries}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "process",
      title: "Process",
      icon: "🛠️",
      content: (
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-amber-400 via-amber-300 to-amber-200 transform -translate-x-1/2"></div>

          {[
            {
              id: 1,
              title: "Initial Assessment",
              desc: "Comprehensive gap analysis of current systems",
              icon: "🔍",
            },
            {
              id: 2,
              title: "Planning",
              desc: "Develop customized implementation roadmap",
              icon: "📝",
            },
            {
              id: 3,
              title: "Documentation",
              desc: "Create policies, procedures and records",
              icon: "📑",
            },
            {
              id: 4,
              title: "Implementation",
              desc: "Train teams and integrate systems",
              icon: "🔄",
            },
            {
              id: 5,
              title: "Internal Audit",
              desc: "Conduct compliance verification audits",
              icon: "✔️",
            },
            {
              id: 6,
              title: "Certification",
              desc: "Coordinate with accredited certification bodies",
              icon: "🏆",
            },
          ].map((step, i) => (
            <div key={i} className={`relative mb-8 ${i % 2 === 0 ? "lg:w-1/2 lg:pr-12 lg:mr-auto" : "lg:w-1/2 lg:pl-12 lg:ml-auto"}`}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-200 h-full transition-all duration-300 hover:shadow-md">
                <div className="flex items-start">
                  <div className="bg-amber-100 rounded-lg w-14 h-14 flex items-center justify-center mr-4 flex-shrink-0 text-2xl">
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <div className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">
                        {step.id}
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.desc}</p>
                    {i === 2 && (
                      <div className="mt-4 bg-amber-50 p-3 rounded-lg">
                        <p className="text-sm text-amber-800 font-medium">Key Documents:</p>
                        <ul className="text-xs text-amber-700 list-disc list-inside mt-1">
                          <li>Quality Manual</li>
                          <li>Process Maps</li>
                          <li>Standard Operating Procedures</li>
                        </ul>
                      </div>
                    )}
                    {i === 4 && (
                      <div className="mt-4 bg-amber-50 p-3 rounded-lg">
                        <p className="text-sm text-amber-800 font-medium">Audit Focus Areas:</p>
                        <ul className="text-xs text-amber-700 list-disc list-inside mt-1">
                          <li>Clause-by-clause compliance</li>
                          <li>Effectiveness measurement</li>
                          <li>Opportunities for improvement</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-amber-100 min-h-screen">
      {/* Header Image - Uncomment when you have the image */}
      {/* <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
        <img src={isoHeaderImage} alt="ISO Certification" className="w-full h-64 object-cover" />
      </div> */}

      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-block mb-6">
          <div className="bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold inline-flex items-center">
            <FiAward className="mr-2" /> ISO Certification Experts
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 relative after:content-['']
         after:absolute after:-bottom-2 after:left-1/4 after:w-1/2 after:h-1 after:bg-yellow-400 after:rounded-full">
          ISO Consultancy Services
        </h1>
        <p className="text-xl text-amber-800 max-w-3xl mx-auto">
          Streamline your path to international standards certification with our proven methodology
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-all duration-300 hover:bg-amber-700 hover:shadow-lg">
            Get Started <FiChevronRight className="ml-2" />
          </button>
          <button className="bg-white border border-amber-300 text-amber-800 px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md">
            View Case Studies
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="relative">
          <div className="flex space-x-1 overflow-x-auto pb-2 scrollbar-hide">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                onMouseEnter={() => setHoveredTab(i)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`px-6 py-3 font-medium rounded-t-lg transition-colors relative ${activeTab === i ? 'text-amber-700' : 'text-amber-600 hover:text-amber-800'}`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.title}
                {(hoveredTab === i || activeTab === i) && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500 rounded-t" />
                )}
              </button>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200"></div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="pt-6">
        {tabs[activeTab].content}
      </div>

      {/* Clients Section */}
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-900 relative after:content-['']
         after:absolute after:-bottom-2 after:left-1/4 after:w-2/4 after:h-1 after:bg-yellow-400 after:rounded-full">
          Trusted By Organizations Across Industries
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { type: "Manufacturers", icon: "🏭", count: "120+" },
            { type: "Healthcare", icon: "🏥", count: "80+" },
            { type: "Education", icon: "🎓", count: "45+" },
            { type: "IT Companies", icon: "💻", count: "65+" },
            { type: "Agriculture", icon: "🌾", count: "30+" },
            { type: "Government", icon: "🏛️", count: "25+" },
          ].map((client, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-amber-200 text-center transition-all duration-300 hover:shadow-md">
              <div className="text-4xl mb-4">{client.icon}</div>
              <h3 className="font-bold text-lg mb-1">{client.type}</h3>
              <p className="text-sm text-gray-500">{client.count} clients</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ISOConsultancy;