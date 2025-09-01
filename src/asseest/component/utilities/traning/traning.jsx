import React, { useState, useEffect } from "react";
import { navbarItems } from "../Array/data";

const renderTrainingData = (item) => ({
  title: typeof item === "string" ? item : item?.title || "Untitled",
  icon: item?.icon || null,
  description: item?.description || `Professional training program on ${typeof item === "string" ? item : item?.title || "relevant topic"}`,
})

const Training = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const trainingGroups =
    navbarItems?.find((item) => item?.title === "Training")?.children || [];

  // Find OHSE Training index and set as default active tab
  const ohseIndex = trainingGroups.findIndex(group =>
    group.title && group.title.toLowerCase() === "ohse training"
  );
  
  useEffect(() => {
    if (ohseIndex >= 0) {
      setActiveTab(ohseIndex);
    }
  }, [ohseIndex]);

  // Calculate statistics
  const totalItems = trainingGroups.reduce(
    (acc, group) => acc + (group?.children?.length || 0),
    0
  );
  const totalCategories = trainingGroups.length;

  // Get active group data
  const activeGroup = trainingGroups[activeTab] || {};
  const { title: groupTitle, description: groupDescription } = renderTrainingData(activeGroup);
  const groupItems = activeGroup?.children || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 font-['Arial_Narrow']">
      {/* Hero section */}
      <header className="relative overflow-hidden">
        {/* Background with decorative image */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-200/30 via-amber-100/20 to-amber-300/30">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight text-amber-900 sm:text-6xl relative inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-2 after:bg-yellow-400 after:rounded-full">
              Elevate Your Expertise
            </h1>

            <p className="mt-6 text-xl text-amber-800">
              Master in-demand skills with our {totalItems}+ industry-recognized courses across {totalCategories} specialized domains
            </p>

            {/* Stats bar */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap">
              <div className="flex items-center px-6 py-4 bg-white/90 rounded-xl shadow-md border border-amber-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <div className="p-2 mr-3 rounded-full bg-yellow-100 text-yellow-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-700">Courses Available</p>
                  <p className="text-2xl font-bold text-amber-900">{totalItems}+</p>
                </div>
              </div>

              <div className="flex items-center px-6 py-4 bg-white/90 rounded-xl shadow-md border border-amber-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <div className="p-2 mr-3 rounded-full bg-yellow-100 text-yellow-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-700">Categories</p>
                  <p className="text-2xl font-bold text-amber-900">{totalCategories}</p>
                </div>
              </div>

              <div className="flex items-center px-6 py-4 bg-white/90 rounded-xl shadow-md border border-amber-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <div className="p-2 mr-3 rounded-full bg-yellow-100 text-yellow-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-700">Learning Paths</p>
                  <p className="text-2xl font-bold text-amber-900">12+</p>
                </div>
              </div>

              <div className="flex items-center px-6 py-4 bg-white/90 rounded-xl shadow-md border border-amber-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <div className="p-2 mr-3 rounded-full bg-yellow-100 text-yellow-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-700">Certifications</p>
                  <p className="text-2xl font-bold text-amber-900">30+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Category tabs - Sticky navigation */}
        <div className="mb-12 sticky top-0 z-10 bg-white/80 backdrop-blur-md py-4 border-b border-amber-200">
          <nav className="flex space-x-4 overflow-x-auto pb-1">
            {trainingGroups.map((group, idx) => {
              const { title: groupTitle } = renderTrainingData(group);
              return (
                <button
                  key={`tab-${idx}`}
                  onClick={() => setActiveTab(idx)}
                  className={`relative whitespace-nowrap py-2 px-4 font-medium text-sm rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${idx === activeTab
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md'
                      : 'text-amber-700 hover:text-amber-900 hover:bg-amber-100'
                    }`}
                >
                  {groupTitle}
                  <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${idx === activeTab
                      ? 'bg-white/20 text-white'
                      : 'bg-amber-100 text-amber-800'
                    }`}>
                    {group?.children?.length || 0}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Training content */}
        <div className="space-y-12">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 font-bold text-xl mr-4 transition-all duration-300 hover:rotate-12">
                  {activeTab + 1}
                </span>
                <div>
                  <h2 className="text-3xl font-bold text-amber-900 relative inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-1.5 after:bg-yellow-400 after:rounded-full">
                    {groupTitle}
                  </h2>
                  {groupDescription && (
                    <p className="text-amber-800 mt-2 text-lg">{groupDescription}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {groupItems.map((item, itemIdx) => {
                const { title, description } = renderTrainingData(item);

                return (
                  <div
                    key={`item-${itemIdx}`}
                    onMouseEnter={() => setHoveredCard(itemIdx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="relative rounded-2xl overflow-hidden bg-white border border-amber-200 shadow-md transition-all duration-300 hover:shadow-lg hover:border-amber-300 hover:-translate-y-1"
                  >
                    <div className="relative flex flex-col h-full p-6">
                      {/* Card accent */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-400" />

                      {/* Card content */}
                      <div className="flex items-start mb-4">
                        <span className="flex-shrink-0 bg-yellow-100 text-amber-800 text-sm font-medium mr-3 px-2.5 py-0.5 rounded-full">
                          {activeTab + 1}.{itemIdx + 1}
                        </span>
                        <h3 className="text-xl font-semibold text-amber-900">{title}</h3>
                      </div>

                      <p className="text-amber-700 mb-6 line-clamp-3">{description}</p>

                      {/* Card footer */}
                      <div className="mt-auto flex justify-between items-center">
                        <span className="inline-flex items-center text-sm font-medium text-amber-700 transition-all duration-300 hover:text-amber-900">
                          Learn more
                          <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                        {hoveredCard === itemIdx && (
                          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-yellow-100 text-amber-800">
                            Enroll now
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-24 rounded-2xl shadow-xl overflow-hidden relative bg-gradient-to-r from-amber-700 to-amber-800 transition-all duration-300 hover:shadow-2xl">
          {/* CSS pattern background */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(135deg, #ffffff 10%, transparent 10%, transparent 50%, #ffffff 50%, #ffffff 60%, transparent 60%, transparent 100%)',
              backgroundSize: '15px 15px'
            }}
          ></div>

          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-20 w-32 h-32 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-10 right-20 w-40 h-40 bg-amber-300 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="px-6 py-16 sm:p-16 lg:p-20 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white sm:text-5xl transition-all duration-300 hover:scale-105">
                Ready to transform your career?
              </h2>
              <p className="mt-6 text-xl text-amber-100">
                Join thousands of professionals who've accelerated their growth with our industry-leading programs.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-2xl shadow-lg text-amber-900 bg-white transition-all duration-300 hover:bg-amber-50 hover:scale-105 active:scale-95">
                  Get Full Course Catalog
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-2xl shadow-sm text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95">
                  Speak with an Advisor
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Training;