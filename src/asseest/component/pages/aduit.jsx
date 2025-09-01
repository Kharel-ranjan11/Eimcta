import React, { useState } from "react";
import {
    ClipboardList,
    ShieldCheck,
    FileText,
    ListChecks,
    Users,
    Factory,
    HeartPulse,
    Utensils,
    Server,
    Truck,
    Zap,
    School,
    CalendarCheck,
    AlertCircle,
    CheckCircle,
    Eye,
    TrendingUp,
    LayoutGrid,
    BookOpen,
    RefreshCw,
    ChevronRight,
    ArrowRight,
    BadgeCheck,
    BarChart2,
    Clock,
    Lock,
    Globe,
    Circle,
    Lightbulb,
    HelpCircle,
    Search
} from "lucide-react";

const ISOAuditGuide = () => {
    // State for the new ISO Standard Finder feature
    const [goal, setGoal] = useState("");
    const [industry, setIndustry] = useState("");
    const [recommendation, setRecommendation] = useState(null);

    // Function to handle the recommendation logic
    const handleFindStandard = () => {
        let rec = "";
        let recReason = "";
        let recLink = "";

        // Logic to determine the best ISO standard based on user input
        if (goal === "quality" && industry === "manufacturing") {
            rec = "ISO 9001:2015 (Quality Management System)";
            recReason = "This standard helps manufacturing companies ensure consistent quality and customer satisfaction through process-based management.";
            recLink = "https://www.iso.org/iso-9001-quality-management.html";
        } else if (goal === "environment" && (industry === "manufacturing" || industry === "construction" || industry === "energy")) {
            rec = "ISO 14001:2015 (Environmental Management System)";
            recReason = "This standard is crucial for industries with a significant environmental impact. It provides a framework for managing environmental responsibilities and reducing your ecological footprint.";
            recLink = "https://www.iso.org/iso-14001-environmental-management.html";
        } else if (goal === "health" && (industry === "manufacturing" || industry === "construction" || industry === "healthcare")) {
            rec = "ISO 45001:2018 (Occupational Health & Safety)";
            recReason = "This standard is essential for ensuring a safe and healthy workplace. It helps you prevent work-related injury and ill health, and proactively improve your OH&S performance.";
            recLink = "https://www.iso.org/iso-45001-occupational-health-and-safety.html";
        } else if (goal === "food" && industry === "food") {
            rec = "ISO 22000:2018 (Food Safety Management)";
            recReason = "This standard is designed to ensure a food safety management system throughout the food chain, from farm to fork.";
            recLink = "https://www.iso.org/iso-22000-food-safety-management.html";
        } else if (goal === "security" && industry === "it") {
            rec = "ISO 27001:2022 (Information Security Management)";
            recReason = "This standard helps organizations manage the security of assets such as financial information, intellectual property, employee details, or information entrusted by third parties.";
            recLink = "https://www.iso.org/iso-27001-information-security.html";
        } else {
            rec = "No specific recommendation found.";
            recReason = "Your selections may not align with a single common standard. Consider exploring the specific standards based on your primary business function.";
            recLink = null;
        }

        setRecommendation({
            name: rec,
            reason: recReason,
            link: recLink
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-['Arial_Narrow'] bg-gradient-to-br from-amber-50 to-amber-100">
            {/* Hero Section */}
            <section className="text-center mb-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl p-12 text-amber-900 shadow-2xl overflow-hidden relative">
                <div className="relative z-10">
                    <div className="inline-flex items-center bg-white/30 px-4 py-2 rounded-full mb-6">
                        <BadgeCheck className="mr-2 text-amber-700" />
                        <span className="font-bold">ISO Compliance Guide</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight  
                     relative after:content-[''] after:absolute after:w-48 after:h-1 
                      after:bg-yellow-400 after:left-1/2 after:rounded-lg  after:-translate-x-1/2 after:-bottom-2">
                        Master Your <span className="text-amber-800">ISO Audits</span> <br />With Confidence
                    </h2>
                    <p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-3xl mx-auto">
                        The Complete Framework for ISO 9001, 45001, 14001 & 22000 Compliance
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="flex items-center bg-white text-amber-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <ClipboardList className="mr-2" />
                            Get Started
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </button>
                        <button className="flex items-center bg-transparent border-2 border-amber-800/30 text-amber-800 font-semibold px-6 py-3 rounded-xl hover:bg-amber-800/10 transition-all duration-300">
                            <BookOpen className="mr-2" />
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* What is ISO Audit */}
            <section className="mb-24">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-1/2">
                        <div className="flex items-center mb-8">
                            <div className="bg-yellow-100 p-3 rounded-full shadow-lg mr-4">
                                <FileText className="text-yellow-500 w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-amber-900 relative after:content-[''] after:absolute 
                            after:rounded-lg after:w-32 after:h-1 after:bg-yellow-400 after:left-0 after:-bottom-2">Understanding ISO Audits</h2>
                        </div>

                        <p className="text-amber-800 mb-6 text-lg leading-relaxed">
                            An <span className="font-semibold text-amber-700">ISO audit</span> is a systematic, independent process that evaluates your organization's compliance with international standards through documented evidence and process verification.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Verification of process effectiveness",
                                "Identification of improvement opportunities",
                                "Assessment of regulatory compliance",
                                "Evaluation of risk management practices",
                                "Validation of continuous improvement"
                            ].map((point, i) => (
                                <div key={i} className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-amber-200 hover:shadow-md hover:border-amber-300 transition-all duration-300">
                                    <div className="bg-yellow-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-yellow-500" />
                                    </div>
                                    <span className="text-amber-800">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-200 hover:shadow-2xl hover:border-amber-300 transition-all duration-300">
                        <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-white">
                            <div className="flex items-center">
                                <ShieldCheck className="w-8 h-8 mr-3" />
                                <h3 className="text-xl font-bold">Audit Benefits</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: <TrendingUp className="w-6 h-6 text-amber-600" />, text: "Performance Improvement" },
                                    { icon: <Lock className="w-6 h-6 text-amber-600" />, text: "Risk Mitigation" },
                                    { icon: <Globe className="w-6 h-6 text-amber-600" />, text: "Regulatory Compliance" },
                                    { icon: <Users className="w-6 h-6 text-amber-600" />, text: "Stakeholder Confidence" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-amber-50 p-4 rounded-lg text-center hover:bg-amber-100 transition-all duration-300">
                                        <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-sm">
                                            {item.icon}
                                        </div>
                                        <p className="font-medium text-amber-800">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Audit Process */}
            <section className="mb-24 bg-white rounded-3xl shadow-lg p-8 border border-amber-200">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
                        <ListChecks className="mr-2 text-amber-600" />
                        <span>Systematic Approach</span>
                    </div>
                    <h2 className="text-3xl font-bold text-amber-900 mb-4 relative after:content-[''] after:absolute after:w-48   after after:h-1 after:bg-yellow-400 after:left-1/2 after:-translate-x-1/2 after:-bottom-3">The ISO Audit Process</h2>
                    <p className="text-amber-800 max-w-2xl mx-auto">
                        A structured methodology to ensure comprehensive evaluation and continuous improvement.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            step: 1,
                            title: "Planning Phase",
                            description: "Define scope, objectives, and criteria",
                            icon: <CalendarCheck className="w-6 h-6 text-amber-600" />,
                            color: "bg-amber-100"
                        },
                        {
                            step: 2,
                            title: "Preparation",
                            description: "Review documents and prepare checklists",
                            icon: <FileText className="w-6 h-6 text-amber-600" />,
                            color: "bg-amber-100"
                        },
                        {
                            step: 3,
                            title: "Opening Meeting",
                            description: "Align expectations with auditees",
                            icon: <Users className="w-6 h-6 text-amber-600" />,
                            color: "bg-amber-100"
                        },
                        {
                            step: 4,
                            title: "Execution",
                            description: "Conduct interviews and collect evidence",
                            icon: <Eye className="w-6 h-6 text-amber-600" />,
                            color: "bg-amber-100"
                        },
                        {
                            step: 5,
                            title: "Findings Analysis",
                            description: "Identify non-conformities",
                            icon: <AlertCircle className="w-6 h-6 text-amber-600" />,
                            color: "bg-amber-100"
                        },
                        {
                            step: 6,
                            title: "Closing Meeting",
                            description: "Present findings and agree on actions",
                            icon: <CheckCircle className="w-6 h-6 text-amber-600" />,
                            color: "bg-amber-100"
                        },
                        {
                            step: 7,
                            title: "Reporting",
                            description: "Document comprehensive audit report",
                            icon: <ClipboardList className="w-6 h-6 text-amber-600" />,
                            color: "bg-amber-100"
                        },
                        {
                            step: 8,
                            title: "Follow-up",
                            description: "Verify corrective actions",
                            icon: <RefreshCw className="w-6 h-6 text-amber-600" />,
                            color: "bg-amber-100"
                        }
                    ].map((step, i) => (
                        <div key={i} className={`${step.color} p-6 rounded-2xl shadow-md border border-amber-200 transition-all hover:shadow-lg hover:-translate-y-1`}>
                            <div className="flex items-center mb-4">
                                <div className="bg-white p-2 rounded-lg shadow-inner mr-3">
                                    {step.icon}
                                </div>
                                <div className="bg-amber-200 text-amber-800 text-xs font-bold px-2 py-1 rounded-full">
                                    Step {step.step}
                                </div>
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-amber-900">{step.title}</h3>
                            <p className="text-amber-800">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Audit Types */}
            <section className="mb-24">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
                        <LayoutGrid className="mr-2 text-amber-600" />
                        <span>Audit Variations</span>
                    </div>
                    <h2 className="text-3xl font-bold text-amber-900 mb-4 relative after:content-[''] after:absolute after:w-48 after:h-1 after:rounded-lg after:bg-yellow-400 after:left-1/2 after:-translate-x-1/2 after:-bottom-3">Types of ISO Audits.</h2>
                    <p className="text-amber-800 max-w-2xl mx-auto">
                        Different audit approaches tailored to specific organizational needs and requirements.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            type: "Internal Audits",
                            description: "First-party evaluations conducted by your own organization to assess compliance and identify improvement areas.",
                            icon: <Users className="w-8 h-8 text-amber-600" />,
                            frequency: "6-12 months",
                            color: "border-amber-300"
                        },
                        {
                            type: "Supplier Audits",
                            description: "Second-party assessments performed by customers on their vendors to ensure quality standards are met.",
                            icon: <FileText className="w-8 h-8 text-amber-600" />,
                            frequency: "As per contract",
                            color: "border-amber-300"
                        },
                        {
                            type: "Certification Audits",
                            description: "Third-party evaluations by accredited bodies to grant official ISO certification.",
                            icon: <ShieldCheck className="w-8 h-8 text-amber-600" />,
                            frequency: "Every 3 years",
                            color: "border-amber-300"
                        }
                    ].map((audit, i) => (
                        <div key={i} className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 ${audit.color} transition-all hover:shadow-xl hover:-translate-y-1`}>
                            <div className="bg-amber-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                {audit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4 text-amber-900">{audit.type}</h3>
                            <p className="text-amber-800 mb-6 text-center">{audit.description}</p>
                            <div className="flex items-center justify-center text-sm font-medium text-amber-700">
                                <Clock className="w-4 h-4 mr-2" />
                                Recommended frequency: {audit.frequency}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Industry Frequency */}
            <section className="mb-24 bg-gradient-to-br from-amber-800 to-amber-900 rounded-3xl p-12 text-white">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-amber-700/30 px-4 py-2 rounded-full mb-4">
                        <Clock className="mr-2" />
                        <span>Industry Standards</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 relative after:content-[''] after:absolute 
after:rounded-lg  after:w-48 after:h-1 after:bg-yellow-400 after:left-1/2 after:-translate-x-1/2 after:-bottom-2">Audit Frequency by Industry</h2>
                    <p className="text-amber-200 max-w-2xl mx-auto">
                        Recommended audit intervals based on industry risk profiles and regulatory requirements.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            industry: "Manufacturing",
                            frequency: "Bi-annually",
                            risk: "High",
                            icon: <Factory className="w-6 h-6" />,
                            color: "bg-amber-700/20"
                        },
                        {
                            industry: "Healthcare",
                            frequency: "Quarterly",
                            risk: "Critical",
                            icon: <HeartPulse className="w-6 h-6" />,
                            color: "bg-amber-700/20"
                        },
                        {
                            industry: "Food Services",
                            frequency: "Monthly",
                            risk: "Critical",
                            icon: <Utensils className="w-6 h-6" />,
                            color: "bg-amber-700/20"
                        },
                        {
                            industry: "Information Technology",
                            frequency: "Annually",
                            risk: "Medium",
                            icon: <Server className="w-6 h-6" />,
                            color: "bg-amber-700/20"
                        },
                        {
                            industry: "Construction",
                            frequency: "Quarterly",
                            risk: "High",
                            icon: <Truck className="w-6 h-6" />,
                            color: "bg-amber-700/20"
                        },
                        {
                            industry: "Energy",
                            frequency: "Quarterly",
                            risk: "Critical",
                            icon: <Zap className="w-6 h-6" />,
                            color: "bg-amber-700/20"
                        },
                        {
                            industry: "Education",
                            frequency: "Annually",
                            risk: "Medium",
                            icon: <School className="w-6 h-6" />,
                            color: "bg-amber-700/20"
                        },
                        {
                            industry: "Financial Services",
                            frequency: "Semi-annually",
                            risk: "High",
                            icon: <BarChart2 className="w-6 h-6" />,
                            color: "bg-amber-700/20"
                        }
                    ].map((item, i) => (
                        <div key={i} className={`${item.color} p-6 rounded-xl border border-amber-700/30 transition-all hover:bg-amber-700/30`}>
                            <div className="flex items-center mb-4">
                                <div className="bg-amber-700/30 p-2 rounded-lg mr-3">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-lg">{item.industry}</h3>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-amber-200">Frequency</span>
                                <span className="font-medium text-white">{item.frequency}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-amber-200">Risk Level</span>
                                <span className={`text-xs font-medium px-2 py-1 rounded-full ${item.risk === "Critical" ? "bg-red-500/30 text-red-100" :
                                    item.risk === "High" ? "bg-amber-500/30 text-amber-100" :
                                        "bg-green-500/30 text-green-100"
                                    }`}>
                                    {item.risk}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ISO Clauses */}
            <section className="mb-24">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
                        <BookOpen className="mr-2 text-amber-600" />
                        <span>Standard Requirements</span>
                    </div>
                    <h2 className="text-3xl font-bold text-amber-900 mb-4 relative after:content-[''] after:absolute 
                after:rounded-lg     after:w-48 after:h-1 after:bg-yellow-400 after:left-1/2 after:-translate-x-1/2 after:-bottom-2">Key ISO Clauses</h2>
                    <p className="text-amber-800 max-w-2xl mx-auto">
                        Essential sections across major ISO standards that govern audit requirements.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-200">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-amber-200">
                            <thead className="bg-amber-100">
                                <tr>
                                    <th className="px-8 py-4 text-left text-sm font-medium text-amber-800 uppercase tracking-wider">Standard</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-amber-800 uppercase tracking-wider">Internal Audit</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-amber-800 uppercase tracking-wider">Improvement</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-amber-800 uppercase tracking-wider">Documentation</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-amber-200">
                                {[
                                    {
                                        standard: "ISO 9001:2015 (QMS)",
                                        clauses: {
                                            audit: "9.2",
                                            improvement: "10.2",
                                            documentation: "7.5"
                                        }
                                    },
                                    {
                                        standard: "ISO 45001:2018 (OHS)",
                                        clauses: {
                                            audit: "9.2",
                                            improvement: "10.2",
                                            documentation: "7.5"
                                        }
                                    },
                                    {
                                        standard: "ISO 14001:2015 (EMS)",
                                        clauses: {
                                            audit: "9.2",
                                            improvement: "10.2",
                                            documentation: "7.5"
                                        }
                                    },
                                    {
                                        standard: "ISO 22000:2018 (FSMS)",
                                        clauses: {
                                            audit: "9.2.1",
                                            improvement: "10.3",
                                            documentation: "7.5"
                                        }
                                    },
                                    {
                                        standard: "ISO 27001:2022 (ISMS)",
                                        clauses: {
                                            audit: "9.2",
                                            improvement: "10.1",
                                            documentation: "7.5"
                                        }
                                    }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-amber-50/50 transition-colors">
                                        <td className="px-8 py-4 whitespace-nowrap font-medium text-amber-900">
                                            {row.standard}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">
                                                {row.clauses.audit}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">
                                                {row.clauses.improvement}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">
                                                {row.clauses.documentation}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ISO Standard Finder */}
            <section className="mb-24">
                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-amber-200">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
                            <Search className="mr-2 text-amber-600" />
                            <span>Find Your Standard</span>
                        </div>
                        <h2 className="text-3xl font-bold text-amber-900 mb-4 relative after:content-[''] after:absolute  
after:rounded-lg after:w-64 after:h-1 after:bg-yellow-400 after:left-1/2 after:-translate-x-1/2 after:-bottom-2">
                            Which ISO Standard is Right for You?
                        </h2>
                        <p className="text-amber-800 max-w-2xl mx-auto">
                            Answer a few questions to get a personalized recommendation for the most relevant ISO standard for your organization.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Question 1: Business Goal */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-amber-500 text-white">
                                <Lightbulb />
                            </div>
                            <div className="flex-grow">
                                <label htmlFor="goal" className="block text-lg font-medium text-amber-800 mb-2">
                                    1. What is your primary business goal?
                                </label>
                                <select
                                    id="goal"
                                    name="goal"
                                    value={goal}
                                    onChange={(e) => {
                                        setGoal(e.target.value);
                                        setRecommendation(null);
                                    }}
                                    className="block w-full rounded-md border-amber-300 shadow-sm p-3 focus:ring-amber-500 focus:border-amber-500 text-amber-800 hover:border-amber-400 transition-colors"
                                >
                                    <option value="" disabled>Select a goal</option>
                                    <option value="quality">Quality Management</option>
                                    <option value="health">Health & Safety</option>
                                    <option value="environment">Environmental Impact</option>
                                    <option value="food">Food Safety</option>
                                    <option value="security">Information Security</option>
                                </select>
                            </div>
                        </div>

                        {/* Question 2: Industry */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-amber-500 text-white">
                                <Factory />
                            </div>
                            <div className="flex-grow">
                                <label htmlFor="industry" className="block text-lg font-medium text-amber-800 mb-2">
                                    2. What industry are you in?
                                </label>
                                <select
                                    id="industry"
                                    name="industry"
                                    value={industry}
                                    onChange={(e) => {
                                        setIndustry(e.target.value);
                                        setRecommendation(null);
                                    }}
                                    className="block w-full rounded-md border-amber-300 shadow-sm p-3 focus:ring-amber-500 focus:border-amber-500 text-amber-800 hover:border-amber-400 transition-colors"
                                >
                                    <option value="" disabled>Select an industry</option>
                                    <option value="manufacturing">Manufacturing</option>
                                    <option value="healthcare">Healthcare</option>
                                    <option value="food">Food Services</option>
                                    <option value="it">Information Technology</option>
                                    <option value="construction">Construction</option>
                                    <option value="energy">Energy</option>
                                    <option value="education">Education</option>
                                    <option value="financial">Financial Services</option>
                                </select>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                onClick={handleFindStandard}
                                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all hover:shadow-md hover:-translate-y-0.5"
                            >
                                Find My Standard
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Recommendation Result */}
                    {recommendation && (
                        <div className="mt-12 p-6 bg-amber-100/50 border border-amber-300 rounded-2xl shadow-inner">
                            <div className="flex items-start mb-4">
                                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 text-white">
                                    <BadgeCheck />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-amber-800">Your Recommended Standard:</h3>
                                    <p className="text-2xl font-extrabold text-amber-700 mt-1">{recommendation.name}</p>
                                </div>
                            </div>
                            <p className="text-amber-800 mb-4">{recommendation.reason}</p>
                            {recommendation.link && (
                                <a
                                    href={recommendation.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-amber-700 font-semibold hover:underline"
                                >
                                    Learn More about this standard
                                    <ArrowRight className="ml-1 w-4 h-4" />
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ISOAuditGuide;