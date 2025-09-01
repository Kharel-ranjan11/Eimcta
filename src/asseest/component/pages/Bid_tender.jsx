import React from "react";

// Simple Animated Component Wrapper (without Framer Motion)
const AnimatedSection = ({ children, delay = 0 }) => {
  return (
    <div className="opacity-0 animate-fadeIn" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
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
const InteractiveCard = ({ icon, title, description, index }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl p-8 h-full border border-amber-200 bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 opacity-10 bg-amber-100" />
      <ParticleBackground count={5} />
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-3xl mb-6 hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-amber-900">{title}</h3>
        <p className="text-amber-800">{description}</p>
        
        <div className="absolute -bottom-3 left-0 right-0 h-1 bg-amber-400 opacity-80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-['Arial_Narrow'] bg-gradient-to-br from-amber-50 to-amber-100 overflow-hidden">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s forwards;
          }
          .heading-underline:after {
            content: '';
            display: block;
            width: 80px;
            height: 4px;
            background-color: #fbbf24;
            margin-top: 8px;
            border-radius: 2px;
          }
        `}
      </style>

      {/* Cinematic Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden rounded-3xl mb-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-300" />
        
        {/* Floating particles */}
        <ParticleBackground count={50} />
        
        {/* Floating document elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white bg-opacity-30 rounded-lg backdrop-blur-sm border border-amber-200 border-opacity-50" />
        
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white bg-opacity-30 rounded-lg backdrop-blur-sm border border-amber-200 border-opacity-50" />
        
        <div className="relative z-10 text-center px-6 py-12 max-w-4xl">
          <div>
            <div className="inline-block mb-8 hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-amber-400 to-amber-500 p-1 rounded-full">
                <div className="bg-white px-6 py-1 rounded-full">
                  <p className="text-lg font-medium text-amber-700">
                    Technical Bid Solutions
                  </p>
                </div>
              </div>
            </div>
              
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-amber-900">
              <span className="inline-block">
                <span className="inline-block">
                  Elevate{" "}
                </span>
                <span className="inline-block text-amber-700">
                  Your Bids
                </span>
              </span>
              <br />
              <span className="inline-block">
                <span className="inline-block">
                  With{" "}
                </span>
                <span className="inline-block text-amber-700">
                  Cinematic Impact
                </span>
              </span>
            </h1>
              
            <p className="text-xl md:text-2xl text-amber-800 mb-12 max-w-2xl mx-auto">
              Transform your technical proposals into compelling visual stories that win contracts
            </p>
              
            <div className="flex flex-wrap justify-center gap-6">
              <InteractiveButton>
                Explore Templates
              </InteractiveButton>
                
              <button className="px-8 py-4 rounded-xl font-semibold bg-white bg-opacity-30 text-amber-800 hover:bg-opacity-40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating 3D document */}
        <div className="absolute right-10 bottom-10 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 opacity-80">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl shadow-2xl" />
            <div className="absolute inset-0 bg-white/30 rounded-xl border border-amber-200 backdrop-blur-sm flex items-center justify-center text-amber-700 text-4xl">
              📄
            </div>
          </div>
        </div>
      </section>

      {/* What is a Technical Bid? - Parallax Section */}
      <AnimatedSection delay={0.2}>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100 to-amber-200 p-12 mb-20">
          <ParticleBackground count={20} />
          
          <div className="relative z-10">
            <div className="inline-flex items-center bg-white text-amber-700 px-6 py-3 rounded-full mb-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="text-2xl mr-3">📋</span>
              <span className="font-medium">Technical Bid Definition</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-amber-900 mb-8 heading-underline">
                  Your <span className="text-amber-700">Strategic Advantage</span> in Competitive Bidding
                </h2>
                
                <p className="text-lg text-amber-800 mb-8 leading-relaxed">
                  A technical bid is more than documentation—it's a visual narrative of your capabilities, 
                  demonstrating technical excellence, ISO compliance (9001, 21500, 31000), and your unique 
                  value proposition through compelling data visualization and interactive elements.
                </p>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
                </div>
              </div>
              
              <div className="relative h-full">
                {/* Timeline visualization */}
                <div className="sticky top-24">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100">
                    <h3 className="text-2xl font-semibold mb-8 text-center text-amber-700">
                      Interactive Bid Timeline
                    </h3>
                    
                    <div className="relative">
                      {/* Timeline line */}
                      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 to-amber-400" />
                      
                      {[
                        { step: "1", title: "RFP Analysis", icon: "🔍", duration: "1-3 days", color: "bg-amber-500" },
                        { step: "2", title: "Solution Design", icon: "✏️", duration: "2-5 days", color: "bg-amber-500" },
                        { step: "3", title: "Draft Creation", icon: "📝", duration: "3-7 days", color: "bg-amber-500" },
                        { step: "4", title: "Review & Refine", icon: "🔎", duration: "2-4 days", color: "bg-amber-500" },
                        { step: "5", title: "Final Compliance", icon: "✅", duration: "1-2 days", color: "bg-amber-500" },
                        { step: "6", title: "Submission", icon: "📤", duration: "1 day", color: "bg-amber-500" }
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
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Technical Bids Matter - Card Grid */}
      <AnimatedSection delay={0.3}>
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
          
          <h2 className="text-4xl font-bold text-amber-900 mb-4 heading-underline">
            Why <span className="text-amber-700">Technical Bids</span> Win Projects
          </h2>
          
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            More than documentation - they're your competitive advantage visualized
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🥇",
              title: "Competitive Differentiation",
              description: "Interactive showcases of unique capabilities with ISO-aligned processes"
            },
            {
              icon: "📡",
              title: "Visual Communication",
              description: "Animated alignment of project goals and client expectations"
            },
            {
              icon: "🧾",
              title: "Professional Storytelling",
              description: "Cinematic presentation of your expertise and approach"
            },
            {
              icon: "⚠️",
              title: "Risk Visualization",
              description: "Interactive ISO 31000-based risk matrices and mitigation plans"
            },
            {
              icon: "✅",
              title: "Compliance Dashboard",
              description: "Visual proof of all legal and ISO requirements met"
            },
            {
              icon: "📈",
              title: "Growth Engine",
              description: "Data-driven proposals that convert tenders to contracts"
            }
          ].map((item, i) => (
            <InteractiveCard 
              key={i}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={i}
            />
          ))}
        </div>
      </AnimatedSection>

      {/* Industry Applications - Parallax Section */}
      <AnimatedSection delay={0.4}>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-800 to-amber-900 text-white p-12 mb-20">
          <ParticleBackground count={30} />
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-amber-100 heading-underline">
              <span className="text-amber-200">
                Industry-Specific
              </span> Bid Solutions
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { 
                  icon: "🏗️", 
                  title: "Construction", 
                  description: "EPC, Infrastructure",
                  stats: "87% win rate"
                },
                { 
                  icon: "💻", 
                  title: "Technology", 
                  description: "Software, IT Services",
                  stats: "92% compliance"
                },
                { 
                  icon: "🏭", 
                  title: "Manufacturing", 
                  description: "Industrial Automation",
                  stats: "85% success"
                },
                { 
                  icon: "💼", 
                  title: "Consulting", 
                  description: "Management, ISO",
                  stats: "94% approval"
                },
                { 
                  icon: "🌿", 
                  title: "Energy", 
                  description: "Renewables, Utilities",
                  stats: "89% impact"
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-amber-700 bg-opacity-50 p-8 rounded-xl backdrop-blur-sm border border-amber-500 border-opacity-30 hover:border-opacity-60 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA - Cinematic Section */}
      <AnimatedSection delay={0.5}>
        <div className="relative rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 p-12 text-center overflow-hidden mb-20">
          <ParticleBackground count={20} />
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-white heading-underline">Ready to Transform Your Bids?</h2>
            <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
              Start creating visually stunning technical proposals that stand out and win more contracts
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <InteractiveButton className="bg-amber-800 hover:bg-amber-900">
                Get Started Now
              </InteractiveButton>
              
              <button className="px-8 py-4 rounded-xl font-semibold bg-white bg-opacity-20 text-amber-100 hover:bg-opacity-30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default TechnicalBidComponent;