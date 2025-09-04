import React from "react";

// --- SVG Icon Components ---
const FaLeaf = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M576 64a64 64 0 0 0-64-64H64A64 64 0 0 0 0 64v384a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V64zM320 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-160 0c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm224 256H128V288h384v96z"></path>
  </svg>
);
const FaRecycle = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M480 182.21v147.58a23.94 23.94 0 0 1-13.31 21.51l-183.2 105.77a24 24 0 0 1-26.62 0L73.31 351.3a23.94 23.94 0 0 1-13.31-21.51V182.21a23.94 23.94 0 0 1 13.31-21.51l183.2-105.77a24 24 0 0 1 26.62 0l183.2 105.77a23.94 23.94 0 0 1 13.31 21.51z"></path>
  </svg>
);
const FaFlask = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M480 416V256l-64-64V96h-32v96l-64-64V32h-32v96l-64-64V32h-32v96L128 192V96H96v96L32 256v160H0v32h512v-32h-32zM288 320a32 32 0 1 1-64 0 32 32 0 0 1 64 0z"></path>
  </svg>
);
const FaChartLine = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M64 64h384v32H64V64zm384 64H64v32h384v-32zM64 256h384v32H64v-32zm384 64H64v32h384v-32zM64 416h384v32H64v-32z"></path>
  </svg>
);
const FaShieldAlt = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-41 0l-192 80A48 48 0 0 0 0 127.9v192.2a48 48 0 0 0 45.5 47.8l192 40a48.2 48.2 0 0 0 41 0l192-40A48 48 0 0 0 512 320.1V127.9a48 48 0 0 0-45.5-44.2z"></path>
  </svg>
);
const FaUsers = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M624 208h-64v-64c0-35.3-28.7-64-64-64h-32V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64H80c-35.3 0-64 28.7-64 64v64H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 35.3 28.7 64 64 64h32v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h16c35.3 0 64-28.7 64-64v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"></path>
  </svg>
);
const FaCheck = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path>
  </svg>
);
const FaCertificate = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M480 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm-48 112c-22.09 0-40-17.91-40-40s17.91-40 40-40 40 17.91 40 40-17.91 40-40 40zM96 144c-22.09 0-40-17.91-40-40s17.91-40 40-40 40 17.91 40 40-17.91 40-40 40zm320 272H96V224h320v192z"></path>
  </svg>
);
const FaPlayCircle = (props) => (
    <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path>
    </svg>
);

// Helper Component: Image with placeholder
const Image = ({ src, alt, className }) => (
  <img 
    src={src} 
    alt={alt} 
    className={`w-full h-auto object-cover rounded-lg shadow-md ${className}`} 
    onError={(e) => {
      e.target.onerror = null; 
      e.target.src='https://placehold.co/1024x400/f59e0b/333333?text=EIMCTA+Services';
    }}
  />
);

// Pattern background component
const PatternBackground = () => (
  <div className="absolute inset-0 opacity-10" 
    style={{
      backgroundImage: 'linear-gradient(135deg, #fef3c7 10%, transparent 10%, transparent 50%, #fef3c7 50%, #fef3c7 60%, transparent 60%, transparent 100%)',
      backgroundSize: '20px 20px'
    }}
  ></div>
);

// Helper Component: Video Player with placeholder
const VideoPlayer = ({ title, src, link }) => (
  <section className="mt-16 animate-on-scroll">
    <h2 className="text-2xl md:text-3xl font-semibold text-amber-900 mb-8 text-center relative heading-underline pb-4 animate-itemVariants">
      {title}
    </h2>
    <div className="relative bg-black rounded-xl shadow-lg overflow-hidden group border-4 border-amber-200 animate-scaleUp">
      <video
        className="w-full h-full"
        poster="https://placehold.co/1280x720/1a1a1a/ffffff?text=Video+Highlight"
        controls
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <a href={link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300">
        <FaPlayCircle className="text-white text-6xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  </section>
);


// Main Component
const EnvironmentalServices = () => {
  // Inject animations and set up IntersectionObserver
  React.useEffect(() => {
    // Injecting CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideInRight { from { opacity: 0; transform: translateX(80px); } to { opacity: 1; transform: translateX(0); } }
      @keyframes slideInLeft { from { opacity: 0; transform: translateX(-80px); } to { opacity: 1; transform: translateX(0); } }
      @keyframes slideInUp { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes itemVariants { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes paragraph-anim { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes rotate3D { from { opacity: 0; transform: perspective(800px) translateY(30px) rotateX(-10deg); } to { opacity: 1; transform: perspective(800px) translateY(0) rotateX(0deg); } }
      @keyframes scaleUp { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
      @keyframes underline-grow { from { width: 0%; } to { width: 25%; } }

      .animate-on-scroll { 
        opacity: 0; 
        transition: opacity 0.5s ease-out;
      }
      .animate-on-scroll.is-visible {
        opacity: 1;
      }

      .is-visible .animate-slideInRight { animation: slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
      .is-visible .animate-slideInLeft { animation: slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
      .is-visible .animate-itemVariants { animation: itemVariants 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
      .is-visible .animate-paragraph { animation: paragraph-anim 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards; }
      .is-visible .animate-slideInUp { animation: slideInUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
      .is-visible .animate-rotate3D { animation: rotate3D 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
      .is-visible .animate-scaleUp { animation: scaleUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }

      .card-hover { transition: transform 0.3s ease-out; }
      .card-hover:hover { transform: translateY(-8px) perspective(800px) rotateX(2deg) rotateY(-1deg); }

      .heading-underline::after { content: ''; position: absolute; left: 50%; transform: translateX(-50%); bottom: -0.5rem; height: 4px; background-color: #f59e0b; border-radius: 9999px; width: 0%; }
      .is-visible .heading-underline::after { animation: underline-grow 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards; }
    `;
    document.head.appendChild(style);

    // IntersectionObserver setup
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    // Add Google Font "Inter"
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    
    return () => {
        if (document.head.contains(style)) {
            document.head.removeChild(style);
        }
        if (document.head.contains(link)) {
            document.head.removeChild(link);
        }
        elements.forEach(el => observer.unobserve(el));
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-100 text-gray-800 px-4 py-8 md:px-8 lg:px-20 max-w-7xl mx-auto font-['Inter',_sans-serif]">
      
      <section className="text-center mb-12 relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 p-8 md:p-12 text-white shadow-xl animate-on-scroll">
        <PatternBackground />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slideInRight">
             <span className="text-white drop-shadow-md">
               ISO-Based Environmental Services
             </span>
          </h1>
          <p className="text-lg md:text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed animate-slideInLeft">
            At EIMCTA, we offer comprehensive environmental services grounded in ISO standards and best practices to promote sustainability, regulatory compliance, and natural resource protection.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16 shadow-2xl rounded-xl overflow-hidden animate-on-scroll">
          <Image
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
              alt="Lush green landscape representing environmental services"
              className="animate-scaleUp"
          />
      </section>

      <section className="mb-16 bg-white rounded-xl p-6 md:p-8 shadow-lg border border-amber-200 relative overflow-hidden hover:shadow-2xl transition-shadow duration-300 animate-on-scroll">
        <PatternBackground />
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <div className="bg-amber-100 p-3 rounded-full mr-4 border-2 border-amber-200">
              <FaLeaf className="text-amber-500 text-xl" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-amber-900 heading-underline relative pb-4 animate-itemVariants">Environmental Impact Assessment (EIA)</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-paragraph">
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
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 shadow-inner card-hover animate-slideInRight">
              <h3 className="font-semibold text-amber-800 mb-3 text-lg">Strategic Environmental Assessment (SEA)</h3>
              <p className="text-gray-700 mb-4">
                For policies, plans and programs, we conduct SEAs to integrate environmental considerations at the highest decision-making levels.
              </p>
              <div className="bg-amber-100 p-4 rounded-lg border-l-4 border-amber-400">
                <p className="text-amber-900 font-medium italic">
                  "Our SEA services help align development strategies with environmental sustainability goals."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-16 relative overflow-hidden rounded-xl bg-transparent p-8 animate-on-scroll">
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-amber-900 mb-8 text-center relative heading-underline pb-4 animate-itemVariants">
            Our <span className="text-amber-800">Core Principles</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaFlask className="text-2xl" />, title: "Sampling & Analysis", desc: "Accurate collection and standardized lab methods for air, water, soil, and waste samples." },
              { icon: <FaChartLine className="text-2xl" />, title: "QA/QC Processes", desc: "Rigorous quality assurance and control for credible, defensible results." },
              { icon: <FaShieldAlt className="text-2xl" />, title: "Regulatory Compliance", desc: "Monitoring aligned with local and international environmental regulations." },
              { icon: <FaUsers className="text-2xl" />, title: "Risk Assessment", desc: "Comprehensive evaluation of environmental and public health risks." }
            ].map((principle, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-amber-200 card-hover animate-slideInUp"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-amber-500">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{principle.title}</h3>
                <p className="text-amber-800 text-sm leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-16 bg-white rounded-xl p-8 relative overflow-hidden border border-amber-200 hover:shadow-xl transition-shadow duration-300 animate-on-scroll">
        <PatternBackground />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-amber-900 mb-8 text-center relative heading-underline pb-4 animate-itemVariants">
            Key Benefits of Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 animate-paragraph">
            {[
              "Environmental protection", "Regulatory compliance", "Early hazard detection", "Public health enhancement", "Sustainable resource management", "Stakeholder engagement", "Data-driven policy", "Cost savings", "Improved corporate reputation", "Climate change mitigation", "Waste minimization", "Circular economy implementation"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-green-100 p-1.5 rounded-full mr-3">
                  <FaCheck className="text-green-500 text-xs" />
                </div>
                <span className="text-amber-900">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoPlayer 
        title="Our Commitment in Action" 
        src="https://www.w3.org/2010/05/video/mediaevents.html" 
        link="#" 
      />

    </div>
  );
};

export default EnvironmentalServices;

