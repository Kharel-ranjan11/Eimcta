import React from "react";
import { FaShieldAlt, FaLeaf, FaUserTie, FaChartLine, FaCertificate, FaPlayCircle } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import hseImage from "../../img/health&safety.jpg";

const HSEAwarenessTraining = () => {
    return (
        <main>
        <div className="w-full mx-auto px-4 py-8 font-['Arial_Narrow'] bg-gradient-to-br from-amber-50 to-amber-100">
            {/* Hero Banner */}
            <div className="mb-4 md:mb-8 lg:mb-16 w-full max-w-full overflow-hidden">
                <img
                    src={hseImage}
                    alt="HSE Awareness Training"
                    title="HSE Awareness Training"
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                />
            </div>

            {/* Intro Section */}
            <div className="max-w-6xl mx-auto my-16 p-8 bg-white rounded-xl shadow-lg border border-amber-200 relative hover:shadow-xl transition-shadow duration-300">
                <p className="text-xl text-gray-700 leading-relaxed">
                    A safe workplace and a clean environment are not just legal requirements—they are the backbone of a responsible and successful organization. <span className="font-bold text-amber-900">HSE Awareness Training</span> gives you the skills to protect people, safeguard the planet, and comply with global standards.
                </p>
            </div>

            {/* Standards Section */}
            <div className="max-w-6xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-yellow-400">
                    Why These Standards Matter
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            icon: <FaLeaf className="text-4xl text-green-600" />,
                            title: "ISO 14001:2015",
                            desc: "Helps organizations manage waste, reduce pollution, save resources, and adopt eco-friendly practices."
                        },
                        {
                            icon: <FaShieldAlt className="text-4xl text-blue-600" />,
                            title: "ISO 45001:2018",
                            desc: "Focuses on workplace safety, preventing accidents, and creating a healthier environment for employees."
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-yellow-400 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="mr-4 p-3 bg-yellow-100 rounded-full">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-amber-900">{item.title}</h3>
                            </div>
                            <p className="text-gray-700">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-amber-100/50 p-6 rounded-lg border border-amber-200 flex items-start hover:bg-amber-200/50 transition-colors duration-300">
                    <GiProgression className="text-3xl text-amber-900 mr-4 mt-1" />
                    <p className="text-gray-700">
                        Both follow the <span className="font-bold text-amber-900">Plan-Do-Check-Act (PDCA) cycle</span>, making them practical, systematic, and easy to integrate.
                    </p>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="max-w-6xl mx-auto mb-20 bg-amber-900 p-10 rounded-xl text-white">
                <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-yellow-400">
                    Benefits of HSE Awareness Training
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { icon: "🛡️", text: "Stronger Safety Culture – Reduce workplace accidents, injuries, and risks." },
                        { icon: "🌱", text: "Sustainability Commitment – Protect the environment with structured eco-friendly practices." },
                        { icon: "⚖️", text: "Legal Compliance – Stay aligned with local and international HSE regulations." },
                        { icon: "💼", text: "Operational Efficiency – Cut costs by preventing downtime, fines, and resource waste." },
                        { icon: "📜", text: "Certification Ready – Gain the knowledge to prepare for ISO 14001 & ISO 45001 certification." },
                        { icon: "📈", text: "Competitive Advantage – Demonstrate commitment to sustainability and safety to clients." }
                    ].map((item, index) => (
                        <div 
                          key={index} 
                          className="flex items-start bg-white/10 p-5 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                        >
                            <span className="text-2xl mr-4">{item.icon}</span>
                            <div>
                                <span className="font-bold text-yellow-400">{item.text.split('–')[0]}</span>
                                <span>{item.text.split('–')[1]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Audience Section */}
            <div className="max-w-6xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-yellow-400">
                    Who Should Join?
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { icon: <FaUserTie className="text-yellow-400" />, text: "HSE Managers and Coordinators" },
                        { icon: <FaShieldAlt className="text-yellow-400" />, text: "Safety Officers & Environmental Officers" },
                        { icon: <RiTeamFill className="text-yellow-400" />, text: "Business Leaders & Decision-Makers" },
                        { icon: <FaChartLine className="text-yellow-400" />, text: "Employees with safety or environmental duties" },
                        { icon: <FaCertificate className="text-yellow-400" />, text: "Consultants and Auditors in HSE" },
                        { icon: <FaLeaf className="text-yellow-400" />, text: "Sustainability Champions in Organizations" }
                    ].map((item, index) => (
                        <div 
                          key={index} 
                          className="flex items-center bg-white p-4 rounded-lg shadow-sm transition-all hover:border-l-4 hover:border-yellow-400 hover:shadow-md"
                        >
                            <span className="mr-4 text-xl bg-yellow-100 p-2 rounded-full">{item.icon}</span>
                            <span className="text-amber-800">{item.text}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-10 bg-amber-100/50 p-6 rounded-lg border border-amber-200 hover:bg-amber-200/50 transition-colors duration-300">
                    <p className="text-center text-lg text-amber-900">
                        Whether you are starting your career or leading an organization, this training provides the foundation for <span className="font-bold">world-class HSE practices</span>.
                    </p>
                </div>
            </div>

            {/* How to Apply Section */}
            <div className="max-w-6xl mx-auto mb-20 bg-white p-8 rounded-xl shadow-lg border border-amber-200 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-yellow-400">
                    How Can You Apply?
                </h2>
                
                <div className="space-y-6">
                    <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-900 hover:bg-amber-100 transition-colors duration-300">
                        <p className="text-gray-700 mb-6">Applying the knowledge from this HSE awareness training course involves the following steps:</p>
                        
                        <ol className="space-y-4 list-decimal pl-6">
                            {[
                                "Learn the ISO Framework: Understand the high-level structure and framework of ISO 14001:2015 and ISO 45001:2018 standards through the course.",
                                "Assess Current Systems: Conduct an internal assessment to identify gaps in your current HSE management systems in relation to ISO standards.",
                                "Implement the Plan-Do-Check-Act Cycle: Use the PDCA model to establish a process for continuous improvement in your organization's HSE practices.",
                                "Create and Maintain Documentation: Learn how to create and manage documented information in line with ISO standards, including hazard identification and risk assessment processes.",
                                "Prepare for Certification: Familiarize yourself with the ISO 14001 and ISO 45001 registration process and the steps required for certification, ensuring your organization is ready for an external audit."
                            ].map((item, index) => (
                                <li key={index} className="text-gray-700">
                                    <span className="font-semibold text-amber-800">{item.split(':')[0]}:</span>
                                    {item.split(':')[1]}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>

            {/* Video Section */}
            <div className="max-w-4xl mx-auto mb-20 bg-gradient-to-br from-amber-900 to-amber-800 p-1 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-white p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-yellow-400">
                        Video Guide
                    </h2>
                    <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
                        Watch this video to see how ISO 14001:2015 & ISO 45001:2018 improve safety and sustainability in real workplaces:
                    </p>
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden relative group cursor-pointer hover:shadow-md transition-shadow duration-300">
                        <div className="w-full h-full flex items-center justify-center">
                            <FaPlayCircle className="text-6xl text-amber-900" />
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg mb-20 border border-amber-200 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-3xl font-bold text-amber-900 mb-10 text-center relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-yellow-400">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                    {[
                        {
                            question: "What is HSE Awareness Training?",
                            answer: "It is a course that teaches employees and managers how to manage Health, Safety, and Environmental systems using international ISO standards."
                        },
                        {
                            question: "Why are ISO 14001 and ISO 45001 important?",
                            answer: "They help organizations reduce risks, protect employees, and manage environmental responsibilities in a structured, compliant way."
                        },
                        {
                            question: "Do I need prior experience for this training?",
                            answer: "No. This training is suitable for beginners as well as experienced HSE professionals."
                        },
                        {
                            question: "Will this help in getting ISO certification?",
                            answer: "Yes. It prepares organizations for ISO 14001 and ISO 45001 certification audits."
                        },
                        {
                            question: "Who benefits the most from this training?",
                            answer: "Healthcare, manufacturing, construction, energy, and service-based organizations benefit significantly, as well as individual HSE professionals."
                        }
                    ].map((faq, index) => (
                        <div 
                          key={index}
                          className="border-b border-amber-200 pb-6 last:border-0 group hover:bg-amber-50/50 p-3 rounded-lg transition-colors duration-300"
                        >
                            <h3 className="text-xl font-semibold text-amber-900 mb-2 flex items-center">
                                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>
                                {faq.question}
                            </h3>
                            <p className="text-gray-700 pl-6">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </main>
    );
};

export default HSEAwarenessTraining;