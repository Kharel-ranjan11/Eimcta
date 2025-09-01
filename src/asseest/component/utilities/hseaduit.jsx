import React, { useState } from 'react';
import {
  ShieldCheck, Users, ClipboardList, TrendingUp,
  Video, HelpCircle, ChevronDown, Search, AlertTriangle,
  HardHat, Factory, Hospital, Droplet, CheckCircle
} from 'lucide-react';

const HSEAudits = () => {
  // Helper component for section headers
  const SectionHeader = ({ icon, title, subtitle }) => {
    const Icon = icon;
    return (
      <div className="mb-8 text-center relative">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-amber-100 rounded-full">
          <Icon className="w-8 h-8 text-amber-400" />
        </div>
        <h2 className="text-3xl font-bold text-amber-900 mb-2 relative inline-block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-yellow-400 after:scale-x-100">
          {title}
        </h2>
        {subtitle && <p className="text-lg text-amber-800 max-w-2xl mx-auto relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-amber-200 after:rounded-full">{subtitle}</p>}
      </div>
    );
  };

  // FAQ Item Component
  const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border-b border-amber-200 py-4">
        <button
          className="w-full flex justify-between items-center text-left font-semibold text-lg text-amber-800 hover:text-amber-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{question}</span>
          <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>
        {isOpen && (
          <div className="mt-3 text-amber-700 pl-2">
            <p>{answer}</p>
          </div>
        )}
      </div>
    );
  };

  // Industry Tag Component
  const IndustryTag = ({ icon, name }) => {
    const Icon = icon;
    return (
      <div className="flex items-center bg-amber-100 px-4 py-3 rounded-lg hover:bg-amber-200 transition-colors duration-300 shadow-sm hover:shadow-md">
        <Icon className="w-5 h-5 mr-2 text-amber-700" />
        <span className="font-medium text-amber-800">{name}</span>
      </div>
    );
  };

  // Audit Step Component
  const AuditStep = ({ number, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow duration-300 group">
      <div className="flex items-start">
        <div className="flex-shrink-0 bg-amber-100 w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-amber-200 transition-colors duration-300">
          <span className="font-bold text-amber-800">{number}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">{title}</h3>
          <p className="text-amber-700">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Style tag for custom font */}
      <style>{`
        body {
          font-family: 'Arial Narrow', sans-serif;
        }
        .hero-image::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to bottom, rgba(254,243,199,0) 0%, rgba(254,243,199,1) 100%);
          z-index: 1;
        }
      `}</style>

      <div className="bg-gradient-to-br from-amber-50 to-amber-100 text-amber-900">
        {/* Hero Image Section */}
        <main>
          <div className="hero-image relative h-96 w-full">
            <img
              src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
              alt="Safety inspection at workplace"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1600x600/f9f5f0/8B5A2B?text=Safety+Inspection'; }}
            />
          </div>

          {/* Content Section */}
          <div className="content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-20 relative z-10">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* What is an HSE Audit? Section */}
              <section className="px-6 py-12 sm:px-12 md:px-16">
                <SectionHeader
                  icon={Search}
                  title="What is an HSE Audit?"
                  subtitle="A systematic evaluation of your organization's health, safety, and environmental management systems"
                />
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg text-amber-800 mb-6 relative">
                      HSE audits provide a structured approach to assessing workplace safety, identifying risks, and ensuring compliance with regulations. They serve as a critical tool for continuous improvement in occupational health and safety.
                    </p>
                    <div className="bg-amber-100/50 p-6 rounded-xl border-l-4 border-amber-500 relative overflow-hidden hover:shadow-md transition-shadow duration-300">
                      <h3 className="font-bold text-xl text-amber-900 mb-3">Key Objectives:</h3>
                      <ul className="space-y-3">
                        {[
                          "Evaluate safety procedure effectiveness",
                          "Verify regulatory compliance",
                          "Identify potential hazards",
                          "Measure performance against standards",
                          "Recommend corrective actions"
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start"
                          >
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-amber-800">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-amber-50 rounded-xl overflow-hidden relative group">
                    <img
                      src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Safety documents"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-amber-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                </div>
              </section>

              {/* Benefits Section */}
              <section className="bg-amber-700 px-6 py-12 sm:px-12 md:px-16">
                <SectionHeader
                  icon={TrendingUp}
                  title="Why HSE Audits Matter"
                  subtitle="The measurable benefits of regular safety audits for your organization"
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: ShieldCheck,
                      title: "Risk Reduction",
                      desc: "Identify and mitigate potential hazards before incidents occur"
                    },
                    {
                      icon: AlertTriangle,
                      title: "Compliance",
                      desc: "Ensure adherence to local and international regulations"
                    },
                    {
                      icon: Users,
                      title: "Culture",
                      desc: "Foster a proactive safety mindset among employees"
                    },
                    {
                      icon: TrendingUp,
                      title: "Performance",
                      desc: "Improve operational efficiency through safer processes"
                    }
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group relative overflow-hidden"
                    >
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                        <benefit.icon className="w-6 h-6 text-amber-400" />
                      </div>
                      <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">{benefit.title}</h3>
                      <p className="text-amber-700">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Industries Section */}
              <section className="px-6 py-12 sm:px-12 md:px-16">
                <SectionHeader
                  icon={Factory}
                  title="Key Industries"
                  subtitle="These sectors benefit most from regular HSE audits"
                />
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <IndustryTag icon={HardHat} name="Construction" />
                  <IndustryTag icon={Factory} name="Manufacturing" />
                  <IndustryTag icon={Droplet} name="Oil & Gas" />
                  <IndustryTag icon={Hospital} name="Healthcare" />
                  <IndustryTag icon={ShieldCheck} name="Utilities" />
                </div>
              </section>

              {/* Audit Process Section */}
              <section className="bg-amber-50 px-6 py-12 sm:px-12 md:px-16">
                <SectionHeader
                  icon={ClipboardList}
                  title="The Audit Process"
                  subtitle="Our proven 6-step methodology for effective audits"
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AuditStep
                    number="1"
                    title="Planning"
                    description="Define scope, objectives, and audit criteria based on your operations"
                  />
                  <AuditStep
                    number="2"
                    title="Document Review"
                    description="Examine policies, procedures, and previous audit reports"
                  />
                  <AuditStep
                    number="3"
                    title="Fieldwork"
                    description="On-site inspections, employee interviews, and process observations"
                  />
                  <AuditStep
                    number="4"
                    title="Analysis"
                    description="Evaluate findings against regulatory requirements and best practices"
                  />
                  <AuditStep
                    number="5"
                    title="Reporting"
                    description="Document findings with prioritized recommendations"
                  />
                  <AuditStep
                    number="6"
                    title="Follow-up"
                    description="Verify implementation of corrective actions"
                  />
                </div>
              </section>

              {/* Visual Resources Section */}
              <section className="px-6 py-12 sm:px-12 md:px-16">
                <SectionHeader
                  icon={Video}
                  title="Learning Resources"
                  subtitle="Watch our experts explain HSE audit best practices"
                />
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-amber-100 rounded-xl overflow-hidden aspect-w-16 aspect-h-9 relative group hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center p-6 relative z-10">
                        <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-300 transition-colors duration-300">
                          <Video className="w-8 h-8 text-amber-700" />
                        </div>
                        <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">Conducting Effective Audits</h3>
                        <p className="text-amber-700 mb-4">15 min tutorial</p>
                        <button className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                          Watch Now
                        </button>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-amber-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  <div className="bg-amber-100 rounded-xl overflow-hidden aspect-w-16 aspect-h-9 relative group hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center p-6 relative z-10">
                        <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-300 transition-colors duration-300">
                          <ClipboardList className="w-8 h-8 text-amber-700" />
                        </div>
                        <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">Audit Checklist Guide</h3>
                        <p className="text-amber-700 mb-4">Downloadable PDF</p>
                        <button className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                          Download
                        </button>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-amber-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="px-6 py-12 sm:px-12 md:px-16 bg-white">
                <SectionHeader
                  icon={HelpCircle}
                  title="Frequently Asked Questions"
                />
                <div className="max-w-3xl mx-auto space-y-4">
                  <FaqItem
                    question="How often should we conduct HSE audits?"
                    answer="Frequency depends on your industry risk level. Low-risk offices might audit annually, while high-risk industries like construction should conduct quarterly audits with monthly mini-audits of critical areas."
                  />
                  <FaqItem
                    question="What's the difference between internal and external audits?"
                    answer="Internal audits are conducted by your own trained staff and focus on continuous improvement. External audits are performed by independent certified auditors and provide objective compliance verification, often required for certifications."
                  />
                  <FaqItem
                    question="How long does a typical audit take?"
                    answer="Duration varies by facility size and complexity. A small office might require 1-2 days, while a large manufacturing plant could need 1-2 weeks for a comprehensive audit."
                  />
                  <FaqItem
                    question="What qualifications should auditors have?"
                    answer="Auditors should have formal training in HSE auditing, knowledge of relevant regulations, and ideally industry-specific experience. Certifications like ISO 45001 Lead Auditor add credibility."
                  />
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default HSEAudits;