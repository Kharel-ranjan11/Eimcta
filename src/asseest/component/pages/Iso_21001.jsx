import VideoPlayer from "../utilities/Video";

const ISO21001Guide = () => {
  // Data arrays for different sections of the guide
  const features = [
    'Enhanced focus on learning outcomes',
    'Inclusive education for learners with diverse needs',
    'Consistent stakeholder satisfaction',
    'Improved processes for assessment and evaluation',
  ];

  const benefits = [
    { title: 'Improved Quality of Education', description: 'Provides a structured approach to enhancing the quality of education through systematic planning and monitoring.' },
    { title: 'Better Stakeholder Satisfaction', description: 'Effectively meets the needs and expectations of learners, parents, staff, and other stakeholders.' },
    { title: 'Increased Operational Efficiency', description: 'Optimizes processes, reduces inefficiencies, and allocates resources more effectively.' },
    { title: 'Global Recognition', description: 'Certification provides international recognition, giving institutions a competitive edge in attracting students and partnerships.' },
    { title: 'Enhanced Learner Focus', description: 'Emphasizes learner-centered education, ensuring learners\' needs are prioritized in decision-making.' },
  ];

  const applicants = [
    'Primary and secondary schools',
    'Colleges and universities',
    'Technical and vocational training institutions',
    'E-Learning providers',
    'Corporate training departments',
  ];

  const applicationSteps = [
    { title: 'Evaluate Current Systems', description: 'Conduct a thorough evaluation of your existing management system to identify gaps and areas for improvement.' },
    { title: 'Develop Policies and Objectives', description: 'Align your policies and objectives with the requirements of ISO 21001:2018 to ensure they meet the needs of learners and stakeholders.' },
    { title: 'Implement and Monitor', description: 'Introduce necessary changes and continuously monitor your processes to maintain alignment with the standard.' },
    { title: 'Internal Audits', description: 'Perform internal audits to assess your institution\'s readiness for certification.' },
    { title: 'Engage a Certification Body', description: 'Contact an accredited certification body to perform the external audit and grant certification upon compliance.' },
  ];

  // A reusable Heading component for section titles
  const SectionHeading = ({ icon, children }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-amber-900 pb-2 mb-6 relative
     after:absolute after:left-1 after:-bottom-2 after:h-1 after:w-1/2 after:bg-yellow-400
      after:rounded-full flex items-center ">

      <span className="flex items-center justify-center bg-yellow-100 text-yellow-400 
       rounded-full w-10 h-10 mr-3 text-xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      {children}
    </h2>
  );

  return (
    <div className="bg-gradient-to-br from-amber-50 to-amber-100 w-full min-h-screen font-['Arial_Narrow']">
      <article className="w-full bg-white shadow-lg mx-auto overflow-hidden">
        {/* --- IMAGE HEADER --- */}
        <header>
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80"
            alt="Students studying together in a modern educational environment"
            className="w-full h-48 md:h-64 object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x400/cccccc/333333?text=Educational+Excellence'; }}
          />
        </header>

        {/* --- TITLE SECTION --- */}
        <section className="bg-amber-800 p-6 sm:p-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            <span className="text-yellow-400 mr-3">📜</span> ISO 21001:2018
          </h1>
          <p className="text-amber-100 mt-2 text-lg font-semibold max-w-3xl mx-auto">
            A Comprehensive Guide to Educational Organization Management Systems (EOMS)
          </p>
        </section>

        <main className="p-6 sm:p-8 md:p-12 space-y-12 max-w-5xl mx-auto">
          {/* --- ABOUT THE STANDARD --- */}
          <section className="group hover:shadow-md p-6 rounded-lg transition-shadow duration-300">
            <SectionHeading icon="📚">About The Standard</SectionHeading>
            <p className="text-amber-800 leading-relaxed text-base md:text-lg">
              ISO 21001:2018 is a management system standard specifically developed for educational organizations, including schools, colleges, universities, and training institutions. It focuses on optimizing the delivery of educational services to meet learners' needs and ensure consistent quality. The standard helps educational institutions establish policies and procedures that align with their vision and mission, thereby promoting continuous improvement and learner engagement.
            </p>
          </section>

          {/* --- KEY FEATURES & WHO CAN APPLY (2-COLUMN LAYOUT ON LARGER SCREENS) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 space-y-12 lg:space-y-0">
            {/* --- KEY FEATURES --- */}
            <section className="group hover:shadow-md p-6 rounded-lg transition-shadow duration-300">
              <SectionHeading icon="✨">Key Features</SectionHeading>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start text-base md:text-lg group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-yellow-400 font-bold mr-3 mt-1">✓</span>
                    <span className="text-amber-800">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* --- WHO CAN APPLY --- */}
            <section className="group hover:shadow-md p-6 rounded-lg transition-shadow duration-300">
              <SectionHeading icon="🏫">Who Can Apply?</SectionHeading>
              <p className="text-amber-800 mb-4 text-base md:text-lg">This standard is applicable to all types of educational organizations, including:</p>
              <ul className="space-y-2 text-amber-800 text-base md:text-lg">
                {applicants.map((applicant, index) => (
                  <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-yellow-400 font-bold mr-3 mt-1">•</span>
                    {applicant}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* --- BENEFITS --- */}
          <section className="group hover:shadow-md p-6 rounded-lg transition-shadow duration-300">
            <SectionHeading icon="🌟">Benefits of ISO 21001:2018</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-5 rounded-lg border border-yellow-200 shadow-sm hover:shadow-md hover:border-yellow-300 transition-all duration-300">
                  <h3 className="font-bold text-amber-900 text-lg mb-2">{benefit.title}</h3>
                  <p className="text-amber-800">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* --- HOW TO APPLY --- */}
          <section className="group hover:shadow-md p-6 rounded-lg transition-shadow duration-300">
            <SectionHeading icon="🎯">How Can You Apply?</SectionHeading>
            <ol className="space-y-6">
              {applicationSteps.map((step, index) => (
                <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                  <div className="flex-shrink-0 bg-amber-800 text-yellow-400 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4 hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900 text-lg">{step.title}</h3>
                    <p className="text-amber-800">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

        </main>
      </article>
      <VideoPlayer title="" src="" link=""/>
    </div>
  );
};

export default ISO21001Guide;