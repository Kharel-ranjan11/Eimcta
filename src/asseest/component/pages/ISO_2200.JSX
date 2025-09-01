import React from 'react';
import VideoPlayer from '../utilities/Video';

// Simple icons as React components for visual enhancement
const IconCheck = () => (
  <div className="rounded-full bg-amber-100 p-1 mr-3 flex-shrink-0">
    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  </div>
);

const IconArrow = () => (
  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
  </svg>
);

const Iso_2200 = () => {
  // --- Data for sections to keep the JSX clean ---
  const benefits = [
    { title: 'Enhanced Food Safety', description: 'Implements a systematic approach to manage food safety risks, ensuring products meet the highest standards.' },
    { title: 'Compliance with Regulations', description: 'Helps you comply with international food safety regulations and local laws, minimizing legal risks.' },
    { title: 'Improved Consumer Trust', description: 'Demonstrates your commitment to quality, enhancing your reputation and building long-term customer trust.' },
    { title: 'Reduction in Risks', description: 'Reduces the risk of foodborne illnesses and contamination, leading to fewer product recalls and less waste.' },
    { title: 'Increased Market Opportunities', description: 'Gain access to new markets and business opportunities, as many large retailers require certification.' },
    { title: 'Streamlined Processes', description: 'Promotes a structured approach to management, helping you optimize processes and improve efficiency.' },
  ];

  const applicationSteps = [
    { title: 'Conduct a Gap Analysis', description: 'Assess your current food safety practices to identify areas for improvement against ISO 22000 requirements.' },
    { title: 'Develop a Food Safety Policy', description: 'Establish and communicate a clear policy that outlines your organization’s commitment to food safety.' },
    { title: 'Implement HACCP Principles', description: 'Integrate HACCP to identify hazards, establish critical control points, and implement controls.' },
    { title: 'Train Employees', description: 'Ensure all employees understand their roles in maintaining food safety and compliance with the standard.' },
    { title: 'Conduct Internal Audits', description: 'Perform regular internal audits to evaluate the effectiveness of your FSMS and correct non-conformities.' },
    { title: 'Certification Audit', description: 'Engage an accredited body to conduct the final audit. Upon compliance, you will receive certification.' },
  ];

  return (
    <main style={{ fontFamily: "'Arial Narrow', Arial, sans-serif" }} className="bg-gradient-to-br from-amber-50 to-amber-100 text-amber-900">
      {/* 1. Hero Section */}
      <header className="relative bg-gradient-to-r from-amber-700 to-amber-800 text-white py-16 sm:py-20 px-4 text-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            ISO 22000 Certification
          </h1>
          <p className="mt-4 text-lg text-amber-200">
            A Comprehensive Food Safety Management System (FSMS) with HACCP
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto p-6 md:p-10 space-y-16">
        {/* 2. About ISO 22000 Section */}
        <section aria-labelledby="about-iso" className="hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg">
          <h2 id="about-iso" className="text-3xl font-bold text-amber-900 mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-16 after:bg-amber-400 after:rounded-full">
            About ISO 22000 Certification
          </h2>
          <div className="space-y-4 text-lg text-amber-800 leading-relaxed">
            <p>
              As consumer awareness and regulatory demands increase, ensuring food safety has become more critical than ever. Implementing <strong>ISO 22000 Certification</strong> demonstrates your organization’s commitment to delivering safe, high-quality food products. It also helps you meet global food safety regulations and maintain trust with customers and stakeholders.
            </p>
            <p>
              ISO 22000 integrates the principles of <strong>HACCP (Hazard Analysis and Critical Control Points)</strong>, a risk management system that identifies, evaluates, and controls hazards related to food safety. By combining ISO 22000 and HACCP, your organization can establish a robust FSMS that minimizes risks and ensures safe food handling at all stages.
            </p>
          </div>
        </section>

        {/* 3. Key Benefits Section */}
        <section aria-labelledby="benefits-iso" className="hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg">
          <h2 id="benefits-iso" className="text-3xl font-bold text-amber-900 mb-8 text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-1 after:w-16 after:bg-amber-400 after:rounded-full">
            Key Benefits of ISO 22000 Certification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-amber-200 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-3">
                  <div className="rounded-full bg-amber-100 p-2 mr-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-amber-900">{benefit.title}</h3>
                </div>
                <p className="text-amber-800">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. How to Apply Section */}
        <section aria-labelledby="apply-iso" className="hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg">
          <h2 id="apply-iso" className="text-3xl font-bold text-amber-900 mb-8 text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-1 after:w-16 after:bg-amber-400 after:rounded-full">
            How to Apply for ISO 22000 Certification
          </h2>
          <ol className="space-y-6">
            {applicationSteps.map((step, index) => (
              <li key={index} className="flex items-start hover:bg-amber-50/50 p-3 rounded-lg transition-colors duration-300">
                <div className="flex-shrink-0 bg-amber-900 text-amber-100 font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
                  {index + 1}
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-xl text-amber-900">{step.title}</h3>
                  <p className="mt-1 text-amber-800">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 5. Call to Action (CTA) Section */}
      
        {/* 6. Conclusion */}
        <section aria-labelledby="conclusion-iso" className="hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg bg-amber-100/50">
          <h2 id="conclusion-iso" className="text-2xl font-bold text-amber-900 mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-16 after:bg-amber-400 after:rounded-full">
            A Commitment to Global Food Safety
          </h2>
          <p className="text-lg text-amber-800 leading-relaxed">
            Achieving <strong>ISO 22000 Certification</strong> is crucial for businesses that want to ensure the safety of their food products and meet global regulatory requirements. For additional information, you can visit the official <a href="https://www.iso.org" target="_blank" rel="noopener noreferrer" className="text-amber-600 font-semibold hover:underline">ISO website</a> to learn more about global food safety standards.
          </p>
        </section>
      </div>
       <VideoPlayer title="" src="" link=""/>
    </main>
  );
};

export default Iso_2200;