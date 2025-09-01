import VideoPlayer from "../utilities/Video";

// A generic Icon component to render SVG paths. This makes it easy to manage icons.
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {path}
  </svg>
);

// Icon paths inspired by the Lucide icon library.
const ICONS = {
  about: <><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></>,
  benefits: <><path d="M3.85 8.62a4 4 0 0 1 4.78-4.78l1.37.37a2 2 0 0 0 1.95 0l1.37-.37a4 4 0 0 1 4.78 4.78l-.37 1.37a2 2 0 0 0 0 1.95l.37 1.37a4 4 0 0 1-4.78 4.78l-1.37-.37a2 2 0 0 0-1.95 0l-1.37.37a4 4 0 0 1-4.78-4.78l.37-1.37a2 2 0 0 0 0-1.95l-.37-1.37z" /><path d="m9 12 2 2 4-4" /></>,
  who: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  how: <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></>,
  why: <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.05A5.73 5.73 0 0 0 4.5 16.5z" /><path d="m12 15-3-3a2.25 2.25 0 0 1 0-3l3-3a2.25 2.25 0 0 1 3 0l3 3a2.25 2.25 0 0 1 0 3l-3 3a2.25 2.25 0 0 1-3 0z" /><path d="m21 21-1.5-1.5" /></>,
  improvement: <><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M21 21v-5h-5" /></>,
  check: <path d="M20 6 9 17l-5-5" />,
};

// A styled section title component with an icon.
const SectionTitle = ({ icon, children }) => (
  <div className="relative mb-8 text-center">
    <div className="flex items-center justify-center gap-3">
      <div className="text-yellow-400 bg-yellow-100 rounded-full p-2">{icon}</div>
      <h2 className="text-3xl md:text-4xl font-bold text-amber-900 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-1 after:w-16 after:bg-yellow-400 after:rounded-full">
        {children}
      </h2>
    </div>
  </div>
);

// A card for displaying features, benefits, or process steps.
const InfoCard = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-center gap-4">
      <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-amber-900">{title}</h3>
    </div>
    <p className="mt-4 text-amber-900/80 leading-relaxed">{children}</p>
  </div>
);

// Main application component
export default function ISO45001Certification() {
  return (
    <div style={{ fontFamily: "'Arial Narrow', Arial, sans-serif" }} className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 text-gray-800 antialiased">
      <div className="bg-white shadow-xl">
        <header className="bg-amber-800 text-white p-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-wide text-amber-900">ISO 45001 Certification</h1>
          <p className="mt-2 text-lg text-amber-200">Safety Management System (SMS) – ISO 45001:2018</p>
        </header>

        <img
          src="https://placehold.co/1600x500/FBBF24/451A0E?text=Building+a+Safer+Tomorrow"
          alt="Illustration of safety gear and certified documents, symbolizing protection and compliance."
          className="w-full h-56 md:h-72 object-cover"
        />

        <main className="container mx-auto px-4 py-16 space-y-20">
          {/* Introduction Section */}
          <section className="text-center max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-amber-900/80 leading-relaxed">
              ISO 45001:2018 is the global standard for Occupational Health and Safety Management. It provides a framework to proactively improve employee safety, reduce workplace risks, and create better, safer working conditions.
            </p>
          </section>

          {/* About the Standard Section */}
          <section>
            <SectionTitle icon={<Icon path={ICONS.about} />}>About the ISO 45001 Standard</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <InfoCard icon={<Icon path={ICONS.check} />} title="Identify Hazards">Proactively find and manage potential workplace dangers.</InfoCard>
              <InfoCard icon={<Icon path={ICONS.check} />} title="Implement Measures">Establish effective preventive and corrective actions.</InfoCard>
              <InfoCard icon={<Icon path={ICONS.check} />} title="Improve Performance">Continuously enhance your health and safety record.</InfoCard>
              <InfoCard icon={<Icon path={ICONS.check} />} title="Ensure Compliance">Meet all relevant national and international legal requirements.</InfoCard>
            </div>
          </section>

          {/* Benefits Section */}
          <section>
            <SectionTitle icon={<Icon path={ICONS.benefits} />}>Benefits of Certification</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <InfoCard icon={<Icon path={ICONS.check} />} title="Legal Compliance">Avoid costly penalties by staying aligned with regulations.</InfoCard>
              <InfoCard icon={<Icon path={ICONS.check} />} title="Fewer Accidents">Reduce incidents and lost productivity with proactive risk management.</InfoCard>
              <InfoCard icon={<Icon path={ICONS.check} />} title="Cost Savings">Minimize claims, compensation, and insurance premiums.</InfoCard>
              <InfoCard icon={<Icon path={ICONS.check} />} title="Stronger Safety Culture">Build employee commitment to a safer workplace.</InfoCard>
              <InfoCard icon={<Icon path={ICONS.check} />} title="Stakeholder Trust">Demonstrate responsibility to clients, partners, and regulators.</InfoCard>
              <InfoCard icon={<Icon path={ICONS.check} />} title="Operational Efficiency">Improve processes and reduce downtime.</InfoCard>
            </div>
          </section>

          {/* Who Can Apply Section */}
          <section>
            <SectionTitle icon={<Icon path={ICONS.who} />}>Who Can Apply?</SectionTitle>
            <p className="text-center max-w-3xl mx-auto mb-8 text-amber-900/80">ISO 45001 is designed for any organization, regardless of size or industry. It's especially vital for:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InfoCard icon={<Icon path={ICONS.check} />} title="Manufacturing & Construction">Manage high-risk environments with strict safety controls.</InfoCard>
              <InfoCard icon={<Icon path={ICONS.check} />} title="Healthcare & Logistics">Ensure staff well-being in critical, fast-paced operations.</InfoCard>
              <InfoCard icon={<Icon path={ICONS.check} />} title="Service Industries">Build trust and safeguard employees in all sectors.</InfoCard>
            </div>
          </section>

          {/* How to Get Certification Section */}
          <section>
            <SectionTitle icon={<Icon path={ICONS.how} />}>The Certification Process</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <InfoCard icon={<Icon path={ICONS.check} />} title="1. Gap Analysis">Review current practices against ISO 45001 requirements.</InfoCard>
              <InfoCard icon={<Icon path={ICONS.check} />} title="2. Documentation">Update policies and procedures to align with the standard.</InfoCard>
              <InfoCard icon={<Icon path={ICONS.check} />} title="3. Employee Training">Engage your workforce in new safety initiatives.</InfoCard>
              <InfoCard icon={<Icon path={ICONS.check} />} title="4. Internal Audits">Evaluate system performance and fix non-conformities.</InfoCard>
              <InfoCard icon={<Icon path={ICONS.check} />} title="5. Certification Audit">An accredited body conducts the final audit for certification.</InfoCard>
            </div>
          </section>

          {/* Why Choose & Continuous Improvement */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-amber-100/50 p-8 rounded-2xl hover:shadow-md transition-all duration-300">
            <div>
              <h3 className="text-2xl font-bold text-amber-900 flex items-center gap-3">
                <Icon path={ICONS.why} className="text-yellow-400 bg-yellow-100 rounded-full p-1 w-8 h-8" />
                Why Choose Everest Consultrain?
              </h3>
              <p className="mt-4 text-amber-900/80">
                Our expert consultants simplify the certification journey with end-to-end guidance, customized solutions, and effective training, ensuring your success is efficient and cost-effective.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-amber-900 flex items-center gap-3">
                <Icon path={ICONS.improvement} className="text-yellow-400 bg-yellow-100 rounded-full p-1 w-8 h-8" />
                A Journey of Continuous Improvement
              </h3>
              <p className="mt-4 text-amber-900/80">
                Certification is just the beginning. We help you sustain a strong safety culture through regular audits and performance reviews, keeping you compliant and resilient.
              </p>
            </div>
          </section>
        </main>
      </div>
      <VideoPlayer title="" src="" link="" />
    </div>
  );
}