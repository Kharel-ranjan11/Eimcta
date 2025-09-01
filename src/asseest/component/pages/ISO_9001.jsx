import isoBanner from "../../img/eimcta.png";
import VideoPlayer from "../utilities/Video";

export default function ISO9001Certification() {
    return (
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 py-12 px-6 md:px-20 font-[Arial_Narrow]">
            {/* Top Banner Image */}
            <div className="max-w-5xl mx-auto mb-10">
                <img
                    src={isoBanner}
                    alt="ISO 9001 Certification"
                    className="w-full rounded-2xl shadow-lg object-cover h-64 md:h-80"
                />
            </div>

            {/* Main Heading */}
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-20 after:h-1 after:bg-yellow-400 after:rounded-full">
                    ISO 9001 Certification: Elevating Your Business Through Quality Management Excellence
                </h1>
                <p className="text-lg text-amber-800 leading-relaxed mt-6">
                    ISO 9001 is the globally recognized standard for Quality Management Systems (QMS),
                    designed to help businesses consistently deliver high-quality products or services,
                    enhance operational efficiency, and boost customer satisfaction.
                </p>
            </div>

            {/* Content Grid */}
            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
                {/* About Section */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-300 transition-shadow duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-100 p-2 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-amber-900">About ISO 9001 Certification</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        ISO 9001 is the most widely adopted quality management standard worldwide. It outlines
                        the requirements for a quality management system, helping organizations establish consistent
                        processes that meet customer needs. This standard is flexible and applicable to any industry,
                        making it essential for businesses focused on delivering high-quality products and services
                        while improving operational effectiveness.
                    </p>
                </div>

                {/* Benefits Section */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-300 transition-shadow duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-100 p-2 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-amber-900">Benefits of ISO 9001:2015 Certification</h2>
                    </div>
                    <ul className="text-gray-700 space-y-3">
                        <li className="flex items-start">
                            <span className="bg-yellow-400 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                            <span><strong className="text-amber-900">Improved Customer Satisfaction:</strong> Focus on customer needs for higher satisfaction and retention.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-yellow-400 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                            <span><strong className="text-amber-900">Enhanced Operational Efficiency:</strong> Reduce waste, streamline processes, and save costs.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-yellow-400 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                            <span><strong className="text-amber-900">Better Risk Management:</strong> Identify risks early and take preventive actions.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-yellow-400 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                            <span><strong className="text-amber-900">Global Market Access:</strong> Gain credibility and access to international markets.</span>
                        </li>
                    </ul>
                </div>

                {/* Who Can Apply Section */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-300 transition-shadow duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-100 p-2 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-amber-900">Who Can Apply for ISO 9001:2015 Certification?</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        Any organization, regardless of size or industry, can apply. It is especially beneficial for:
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-sm text-center">Manufacturing</span>
                        <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-sm text-center">Healthcare</span>
                        <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-sm text-center">IT Services</span>
                        <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-sm text-center">Education</span>
                    </div>
                </div>

                {/* How to Apply Section */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-300 transition-shadow duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-100 p-2 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-amber-900">How Can You Apply?</h2>
                    </div>
                    <ol className="text-gray-700 space-y-4">
                        <li className="flex">
                            <span className="bg-amber-900 text-white rounded-full h-7 w-7 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                            <span className="pt-0.5">Conduct a Gap Analysis to assess current processes</span>
                        </li>
                        <li className="flex">
                            <span className="bg-amber-900 text-white rounded-full h-7 w-7 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                            <span className="pt-0.5">Process Improvement and Documentation</span>
                        </li>
                        <li className="flex">
                            <span className="bg-amber-900 text-white rounded-full h-7 w-7 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                            <span className="pt-0.5">Employee Training on quality standards</span>
                        </li>
                        <li className="flex">
                            <span className="bg-amber-900 text-white rounded-full h-7 w-7 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                            <span className="pt-0.5">Internal Audits to verify compliance</span>
                        </li>
                        <li className="flex">
                            <span className="bg-amber-900 text-white rounded-full h-7 w-7 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                            <span className="pt-0.5">Certification Audit by accredited body</span>
                        </li>
                    </ol>
                </div>

                {/* Why Choose Everest Consultrain */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-300 transition-shadow duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-100 p-2 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-amber-900">Why Choose Everest Consultrain?</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Navigating ISO certification can be complex, but Everest Consultrain offers expert consultancy and training services.
                        Our programs equip your team with the knowledge and skills needed to implement and maintain an effective quality management system.
                    </p>
                    <div className="bg-amber-100/50 p-4 rounded-lg border-l-4 border-yellow-400">
                        <p className="text-sm text-amber-900 italic">
                            "Our expertise ensures your certification journey is smooth, efficient, and tailored to your specific business needs."
                        </p>
                    </div>
                </div>

                {/* Continuous Improvement */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-300 transition-shadow duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-100 p-2 rounded-full mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-amber-900">Continuous Improvement with ISO 9001:2015</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        Achieving certification is only the beginning. The standard requires ongoing improvement through regular audits and updates.
                        Everest Consultrain helps your organization not only achieve but also maintain ISO certification, opening opportunities for growth and excellence.
                    </p>
                    <div className="mt-4 p-3 bg-amber-100/50 rounded-lg">
                        <p className="text-sm text-amber-900">
                            <strong>Key to success:</strong> Regular internal audits, management reviews, and continual improvement cycles
                        </p>
                    </div>
                </div>
            </div>
            <VideoPlayer title="" src="" link=""/>
        </div>
    );
}