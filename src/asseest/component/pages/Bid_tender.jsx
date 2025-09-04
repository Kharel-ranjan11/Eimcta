import React, { useState, useEffect, useRef } from "react";

// A wrapper component to handle scroll-triggered animations
const AnimateOnScroll = ({ children, animation, delay, threshold = 0.1, as = 'div', className: wrapperClassName, style: wrapperStyle }) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(element); // Animate only once
                }
            },
            { threshold }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold]);

    const Tag = as;

    return (
        <Tag
            ref={ref}
            className={`${wrapperClassName || ''} opacity-0 ${isInView ? animation : ''}`}
            style={{ ...wrapperStyle, animationDelay: delay }}
        >
            {children}
        </Tag>
    );
};


// Particle Background Component (static version)
const ParticleBackground = ({ count = 30 }) => {
  const particles = Array.from({ length: count });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-amber-300 opacity-20"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
};

// Interactive Card Component
const InteractiveCard = ({ icon, title, description }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl p-8 h-full border border-amber-200 bg-white shadow-md hover:shadow-lg transition-transform,box-shadow duration-300 ease-out hover:-translate-y-2 hover:[transform:rotateX(2deg)_rotateY(-1deg)]">
      <div className="absolute inset-0 opacity-10 bg-amber-100" />
      <ParticleBackground count={5} />
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-amber-900">{title}</h3>
        <p className="text-amber-800">{description}</p>
        
        <div className="absolute -bottom-8 left-0 right-0 h-1 bg-amber-400 opacity-80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </div>
  );
};

const TechnicalBidComponent = () => {
  // Interactive button component
  const InteractiveButton = ({ children, className = "" }) => (
    <button
      className={`px-8 py-4 rounded-xl font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 font-['Arial_Narrow'] bg-gradient-to-br from-amber-50 to-amber-100 overflow-hidden">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(80px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-80px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(60px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes itemVariants {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes underlineVariant {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          @keyframes contentParagraphVariant {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes grow {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }

          .animate-slideInRight {
            animation: slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          .animate-slideInLeft {
            animation: slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          .animate-itemVariants {
            animation: itemVariants 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          .animate-underlineVariant {
            animation: underlineVariant 0.8s 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          .animate-contentParagraphVariant {
            animation: contentParagraphVariant 0.8s 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          .animate-slideInUp {
            animation: slideInUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          .animate-grow {
            animation: grow 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
        `}
      </style>

      {/* Cinematic Hero Section */}
      <div className="relative text-center py-20 lg:py-32 rounded-3xl overflow-hidden mb-20">
          <ParticleBackground count={40} />
          <div className="relative z-10 max-w-4xl mx-auto">
               <div className="inline-block bg-white/80 backdrop-blur-sm text-amber-700 px-6 py-2 rounded-full mb-6 text-sm font-semibold shadow-sm">
                  EXCELLENCE IN PROPOSAL ENGINEERING
              </div>
              <AnimateOnScroll as="h1" animation="animate-slideInRight" delay="0.1s" className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 leading-tight">
                  Transforming Technical Bids into <span className="text-amber-700">Winning Proposals</span>
              </AnimateOnScroll>
              <AnimateOnScroll as="p" animation="animate-slideInLeft" delay="0.2s" className="text-xl text-amber-800 max-w-2xl mx-auto mb-10">
                  We craft compelling, ISO-compliant technical bids that visualize your expertise, mitigate risks, and ensure you stand out in the most competitive tenders.
              </AnimateOnScroll>
              <AnimateOnScroll animation="animate-slideInUp" delay="0.3s">
                  <InteractiveButton>Discover Our Process</InteractiveButton>
              </AnimateOnScroll>
          </div>
      </div>
   
      {/* What is a Technical Bid? - Parallax Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100 to-amber-200 p-12 mb-20">
        <ParticleBackground count={20} />
        <div className="relative z-10">
          <div className="inline-flex items-center bg-white text-amber-700 px-6 py-3 rounded-full mb-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-2xl mr-3">📋</span>
            <span className="font-medium">Technical Bid Definition</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimateOnScroll as="h2" animation="animate-itemVariants" delay="0.1s" className="text-4xl font-bold text-amber-900 mb-2">
                Your <span className="text-amber-700">Strategic Advantage</span> in Competitive Bidding
              </AnimateOnScroll>
              <AnimateOnScroll animation="animate-underlineVariant" delay="0.3s" className="w-[80px] h-[4px] bg-amber-400 rounded-full my-4" wrapperStyle={{ transformOrigin: 'left' }}/>
              
              <AnimateOnScroll as="p" animation="animate-contentParagraphVariant" delay="0.4s" className="text-lg text-amber-800 mb-8 leading-relaxed">
                A technical bid is more than documentation—it's a visual narrative of your capabilities, 
                demonstrating technical excellence, ISO compliance (9001, 21500, 31000), and your unique 
                value proposition through compelling data visualization and interactive elements.
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="animate-slideInUp" delay="0.5s" className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-semibold text-xl mb-6 text-amber-700">Core Components:</h3>
                <ul className="space-y-4">
                  {[
                    "Interactive technical methodology visualization",
                    "ISO-aligned quality management dashboard",
                    "Animated risk assessment framework",
                    "3D staff competency matrix",
                    "Regulatory compliance proof with hover details",
                    "Interactive project timeline with milestones"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start group hover:translate-x-1 transition-transform duration-300">
                      <span className="text-amber-500 mr-3 text-xl transition-transform group-hover:scale-125">•</span>
                      <span className="text-amber-800 group-hover:text-amber-600 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>
            </div>
            
            <AnimateOnScroll animation="animate-grow" delay="0.4s" className="relative h-full">
              <div className="sticky top-24">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100">
                  <h3 className="text-2xl font-semibold mb-8 text-center text-amber-700">
                    Interactive Bid Timeline
                  </h3>
                  <div className="relative">
                    <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 to-amber-400" />
                    {[
                      { step: "1", title: "RFP Analysis", icon: "🔍", duration: "1-3 days" },
                      { step: "2", title: "Solution Design", icon: "✏️", duration: "2-5 days" },
                      { step: "3", title: "Draft Creation", icon: "📝", duration: "3-7 days" },
                      { step: "4", title: "Review & Refine", icon: "🔎", duration: "2-4 days" },
                      { step: "5", title: "Final Compliance", icon: "✅", duration: "1-2 days" },
                      { step: "6", title: "Submission", icon: "📤", duration: "1 day" }
                    ].map((item, i) => (
                      <div key={i} className="relative pl-10 md:pl-0 mb-10 last:mb-0 group hover:scale-105 transition-transform duration-300">
                        <div className="md:flex items-start">
                          <div className="hidden md:flex w-16 justify-center">
                            <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                              {item.step}
                            </div>
                          </div>
                          <div className="md:ml-6 bg-white p-6 rounded-xl border border-amber-100 shadow-xs flex-1 group-hover:shadow-sm transition-shadow duration-300">
                            <div className="flex items-center mb-2">
                              <span className="text-2xl mr-3 group-hover:text-3xl transition-all duration-300">{item.icon}</span>
                              <h4 className="text-lg font-medium group-hover:text-xl transition-all duration-300 text-amber-900">{item.title}</h4>
                            </div>
                            <p className="text-sm text-amber-700 group-hover:text-amber-800 transition-colors duration-300">{item.duration}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* Why Technical Bids Matter - Card Grid */}
      <div className="mb-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-8">
            <div className="bg-gradient-to-r from-amber-400 to-amber-500 p-1 rounded-full">
              <div className="bg-white px-8 py-2 rounded-full">
                <p className="text-lg font-medium text-amber-700">
                  Strategic Value Proposition
                </p>
              </div>
            </div>
          </div>
          
          <AnimateOnScroll as="h2" animation="animate-itemVariants" delay="0.1s" className="text-4xl font-bold text-amber-900 mb-2">
            Why <span className="text-amber-700">Technical Bids</span> Win Projects
          </AnimateOnScroll>
          <AnimateOnScroll animation="animate-underlineVariant" delay="0.3s" className="w-[80px] h-[4px] bg-amber-400 rounded-full mx-auto mt-2" wrapperStyle={{ transformOrigin: 'center' }}/>
          
          <AnimateOnScroll as="p" animation="animate-contentParagraphVariant" delay="0.4s" className="text-xl text-amber-800 max-w-3xl mx-auto mt-4">
            More than documentation - they're your competitive advantage visualized
          </AnimateOnScroll>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1000px]">
          {[
            { icon: "🥇", title: "Competitive Differentiation", description: "Interactive showcases of unique capabilities with ISO-aligned processes" },
            { icon: "📡", title: "Visual Communication", description: "Animated alignment of project goals and client expectations" },
            { icon: "🧾", title: "Professional Storytelling", description: "Cinematic presentation of your expertise and approach" },
            { icon: "⚠️", title: "Risk Visualization", description: "Interactive ISO 31000-based risk matrices and mitigation plans" },
            { icon: "✅", title: "Compliance Dashboard", description: "Visual proof of all legal and ISO requirements met" },
            { icon: "📈", title: "Growth Engine", description: "Data-driven proposals that convert tenders to contracts" }
          ].map((item, i) => (
            <AnimateOnScroll key={i} animation="animate-slideInUp" delay={`${(i * 0.1) + 0.5}s`}>
                <InteractiveCard 
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Industry Applications - Parallax Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-800 to-amber-900 text-white p-12 my-20">
        <ParticleBackground count={30} />
        
        <div className="relative z-10">
          <AnimateOnScroll as="h2" animation="animate-itemVariants" delay="0.1s" className="text-4xl font-bold mb-2 text-center text-amber-100">
            <span className="text-amber-200">
              Industry-Specific
            </span> Bid Solutions
          </AnimateOnScroll>
          <AnimateOnScroll animation="animate-underlineVariant" delay="0.3s" className="w-[80px] h-[4px] bg-amber-400 rounded-full mx-auto mt-2" wrapperStyle={{ transformOrigin: 'center' }}/>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12 [perspective:1000px]">
            {[
              { icon: "🏗️", title: "Construction", description: "EPC, Infrastructure", stats: "87% win rate" },
              { icon: "💻", title: "Technology", description: "Software, IT Services", stats: "92% compliance" },
              { icon: "🏭", title: "Manufacturing", description: "Industrial Automation", stats: "85% success" },
              { icon: "💼", title: "Consulting", description: "Management, ISO", stats: "94% approval" },
              { icon: "🌿", title: "Energy", description: "Renewables, Utilities", stats: "89% impact" }
            ].map((item, i) => (
              <AnimateOnScroll
                key={i}
                animation="animate-slideInUp"
                delay={`${(i * 0.1) + 0.4}s`}
                className="bg-amber-700 bg-opacity-50 p-8 rounded-xl backdrop-blur-sm border border-amber-500 border-opacity-30 hover:border-opacity-60 transition-all duration-300 hover:-translate-y-2 hover:[transform:rotateX(2deg)_rotateY(1deg)] relative overflow-hidden group"
              >
                <div className="text-5xl mb-6 group-hover:text-6xl transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-amber-100">{item.title}</h3>
                <p className="text-sm opacity-80 mb-4">{item.description}</p>
                <div className="text-xs font-mono opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {item.stats}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalBidComponent;

