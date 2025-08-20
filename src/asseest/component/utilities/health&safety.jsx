import React from 'react';
import { ShieldCheck, Users, ListChecks, Building, FileText, BarChart, Video, ThumbsUp } from 'lucide-react';

const HealthSafety = () => {
  // Helper component for list items with icons
  const BenefitItem = ({ children }) => (
    <li className="flex items-start text-[#8B5A2B] mb-4">
      <ShieldCheck className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
      <span className="text-lg">{children}</span>
    </li>
  );
  
  // Helper component for section headers
  const SectionHeader = ({ icon, title }) => {
    const Icon = icon;
    return (
      <div className="flex items-center mb-8 group">
        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-5">
          <Icon className="w-6 h-6 text-yellow-600 group-hover:text-yellow-700 transition-colors" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#5D3A1A] relative highlight-text">
          {title}
          <span className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-100 transform origin-left transition-all duration-300 group-hover:scale-x-100 scale-x-90"></span>
        </h2>
      </div>
    );
  };

  return (
    <div className="bg-[#f9f5f0] font-sans text-[#5D3A1A]">
      {/* Hero Section with Image */}
      <div className="relative h-96 w-full">
        <img 
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
          alt="Healthcare professionals discussing ISO standards" 
          className="w-full h-full object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1600x600/f9f5f0/8B5A2B?text=Healthcare+ISO+Standards'; }}
        />
        <div className="absolute inset-0 bg-[#8B5A2B] bg-opacity-30 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
              <span className="relative highlight-text">
                Ensuring Quality and Safety in Healthcare
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-yellow-200 opacity-70 -z-10"></span>
              </span>
            </h1>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto drop-shadow-md">
              Implementing ISO Standards for Superior Patient Care and Operational Excellence
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Intro Section */}
          <section className="px-8 py-12 sm:px-12 text-center">
            <p className="text-xl text-[#8B5A2B] max-w-3xl mx-auto">
              In an era of rapid medical advancement, managing complexity and risk is paramount. A robust Health and Safety Plan, guided by international standards, is the key to protecting patients and enhancing care.
            </p>
          </section>

          {/* Why ISO Matters Section */}
          <section className="px-8 py-12 sm:px-12 bg-yellow-50">
            <SectionHeader icon={ShieldCheck} title="Why ISO Standards Matter in Healthcare" />
            <p className="mb-8 text-lg text-[#8B5A2B]">
              ISO standards provide healthcare organizations with structured processes to manage risks, improve patient safety, and protect sensitive data. Some of the most relevant ISO standards in healthcare include:
            </p>
            <ul className="space-y-6">
              <li className="p-6 bg-white rounded-xl border-l-4 border-yellow-500 shadow-sm hover:shadow-md transition-shadow">
                <strong className="block text-xl font-semibold text-[#5D3A1A] mb-2">ISO 9001 (Quality Management)</strong>
                <p className="text-[#8B5A2B]">Ensures consistent quality in patient care and services through standardized processes and continuous improvement.</p>
              </li>
              <li className="p-6 bg-white rounded-xl border-l-4 border-yellow-500 shadow-sm hover:shadow-md transition-shadow">
                <strong className="block text-xl font-semibold text-[#5D3A1A] mb-2">ISO 45001 (Occupational Health & Safety)</strong>
                <p className="text-[#8B5A2B]">Protects healthcare workers and reduces workplace hazards through systematic risk management.</p>
              </li>
              <li className="p-6 bg-white rounded-xl border-l-4 border-yellow-500 shadow-sm hover:shadow-md transition-shadow">
                <strong className="block text-xl font-semibold text-[#5D3A1A] mb-2">ISO 27001 (Information Security)</strong>
                <p className="text-[#8B5A2B]">Safeguards sensitive medical and patient data against breaches and cyber threats.</p>
              </li>
            </ul>
            <p className="mt-8 text-lg text-[#8B5A2B]">
              By adopting these standards, healthcare providers can enhance safety, improve quality of care, ensure regulatory compliance, and streamline operations.
            </p>
          </section>

          {/* Key Benefits Section */}
          <section className="px-8 py-12 sm:px-12">
            <SectionHeader icon={BarChart} title="Key Benefits of ISO Standards" />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-yellow-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <ul className="space-y-5">
                  <BenefitItem><strong>Improved Patient Safety</strong> – Streamlined processes reduce errors and risks, leading to better outcomes and higher quality care.</BenefitItem>
                  <BenefitItem><strong>Data Protection</strong> – Strengthened cybersecurity measures safeguard sensitive patient information and maintain confidentiality.</BenefitItem>
                  <BenefitItem><strong>Regulatory Compliance</strong> – Aligns healthcare facilities with national and international requirements, reducing legal risks.</BenefitItem>
                </ul>
              </div>
              <div className="bg-yellow-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <ul className="space-y-5">
                  <BenefitItem><strong>Operational Efficiency</strong> – Optimized systems reduce costs, eliminate redundancies, and improve clinical workflows.</BenefitItem>
                  <BenefitItem><strong>Enhanced Reputation</strong> – ISO certification builds trust with patients, staff, and stakeholders through demonstrated commitment to quality.</BenefitItem>
                  <BenefitItem><strong>Risk Management</strong> – Proactive identification and mitigation of potential hazards in healthcare delivery.</BenefitItem>
                </ul>
              </div>
            </div>
          </section>

          {/* Who Can Apply Section */}
          <section className="px-8 py-12 sm:px-12 bg-yellow-50">
            <SectionHeader icon={Users} title="Who Can Apply ISO Standards?" />
            <p className="mb-8 text-lg text-[#8B5A2B]">ISO certification is not limited to hospitals. Any healthcare-related organization can benefit, including:</p>
            <div className="flex flex-wrap gap-4">
              {['Hospitals & Clinics', 'Nursing Homes', 'Diagnostic Laboratories', 'Pharmaceutical Companies', 'Medical Device Manufacturers', 'Healthcare IT Providers', 'Dental Practices', 'Rehabilitation Centers'].map((item, index) => (
                <span key={index} className="bg-yellow-100 text-[#5D3A1A] px-5 py-2 rounded-full font-medium text-lg hover:bg-yellow-200 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Steps to Apply Section */}
          <section className="px-8 py-12 sm:px-12">
            <SectionHeader icon={ListChecks} title="Steps to Apply ISO Standards" />
            <ol className="relative border-l-2 border-yellow-200 ml-6 space-y-10">
              {[
                {
                  step: "1",
                  title: "Understand the Requirements",
                  description: "Study relevant standards like ISO 9001, ISO 45001, and ISO 27001 to determine which apply to your healthcare organization."
                },
                {
                  step: "2",
                  title: "Conduct a Gap Analysis",
                  description: "Identify areas where your current practices fall short of ISO requirements through comprehensive assessment."
                },
                {
                  step: "3",
                  title: "Develop an Action Plan",
                  description: "Create a detailed roadmap with training programs, policy updates, and necessary system upgrades."
                },
                {
                  step: "4",
                  title: "Implementation",
                  description: "Integrate ISO guidelines into daily healthcare operations across all departments and levels."
                },
                {
                  step: "5",
                  title: "Audit & Certification",
                  description: "Perform rigorous internal audits, then apply for external certification from accredited bodies."
                },
                {
                  step: "6",
                  title: "Continuous Improvement",
                  description: "Regularly review and update processes through PDCA (Plan-Do-Check-Act) cycles to maintain compliance."
                }
              ].map((item, index) => (
                <li key={index} className="relative pl-8">
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-full -left-5 ring-4 ring-white text-lg font-bold text-[#8B5A2B]">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold text-[#5D3A1A] mb-2">{item.title}</h3>
                  <p className="text-lg text-[#8B5A2B]">{item.description}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Video Guide Section */}
          <section className="px-8 py-12 sm:px-12 bg-yellow-50 text-center">
            <SectionHeader icon={Video} title="Watch a Practical Guide" />
            <p className="mb-8 text-lg text-[#8B5A2B] max-w-3xl mx-auto">
              For a step-by-step overview of implementing ISO standards in healthcare, watch our expert guide.
            </p>
            <div className="aspect-w-16 aspect-h-9 bg-yellow-100 rounded-xl overflow-hidden flex items-center justify-center relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center group-hover:bg-yellow-300 transition-colors">
                  <Video className="w-10 h-10 text-yellow-600" />
                </div>
              </div>
              <div className="absolute inset-0 bg-[#8B5A2B] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          </section>

          {/* Final Thoughts Section */}
          

          {/* Footer with SEO Keywords */}
         
        </div>
      </div>
    </div>
  );
};

export default HealthSafety;