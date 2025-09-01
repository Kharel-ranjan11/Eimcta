import React from 'react';
import { motion } from 'framer-motion';
import {
    Building,
    Factory,
    Heart,
    Hospital,
    Utensils,
    Banknote,
    GraduationCap,
    Server,
    Truck,
    Warehouse,
    Award,
    CheckCircle,
    Star
} from 'lucide-react';

const ISOShowcase = () => {
    const categories = [
        {
            id: 'construction',
            title: 'Construction',
            icon: <Building size={28} />,
            certifications: ['ISO 9001', 'ISO 14001', 'ISO 45001'],
            description: 'Quality, environmental and safety management for construction projects'
        },
        {
            id: 'manufacturer',
            title: 'Factory / Manufacturer',
            icon: <Factory size={28} />,
            certifications: ['ISO 9001', 'ISO 14001', 'ISO 45001'],
            description: 'Standards for manufacturing excellence and operational safety'
        },
        {
            id: 'ngo',
            title: 'NGOs / INGOs',
            icon: <Heart size={28} />,
            certifications: ['ISO 9001', 'ISO 26000', 'SA 8000'],
            description: 'Social responsibility and accountability for non-profit organizations'
        },
        {
            id: 'healthcare',
            title: 'Hospital / Clinic / Lab',
            icon: <Hospital size={28} />,
            certifications: ['ISO 710001', 'ISO 13485', 'ISO 15189'],
            description: 'Healthcare quality management and medical laboratory standards'
        },
        {
            id: 'food',
            title: 'Hotel / Food Industry',
            icon: <Utensils size={28} />,
            certifications: ['ISO 22000', 'HACCP', 'GMP'],
            description: 'Food safety and quality management for hospitality industry'
        },
        {
            id: 'finance',
            title: 'Bank / Finance / Insurance',
            icon: <Banknote size={28} />,
            certifications: ['ISO 9001', 'ISO 27001', 'SA 8001'],
            description: 'Financial services quality and information security standards'
        },
        {
            id: 'education',
            title: 'ISO School / College / EDU',
            icon: <GraduationCap size={28} />,
            certifications: ['ISO 21001'],
            description: 'Educational organizations management system for learning environments'
        },
        {
            id: 'service',
            title: 'Service Industries',
            icon: <Server size={28} />,
            certifications: ['ISO 9001', 'ISO 45001'],
            description: 'Quality and safety management for service providers'
        },
        {
            id: 'transport',
            title: 'Transport / Logistic',
            icon: <Truck size={28} />,
            certifications: ['ISO 9001', 'ISO 28000', 'ISO 39001'],
            description: 'Supply chain security and road traffic safety management'
        },
        {
            id: 'warehousing',
            title: 'Exim / Warehousing',
            icon: <Warehouse size={28} />,
            certifications: ['ISO 9001', 'ISO 45001'],
            description: 'Quality management for warehousing and storage operations'
        },
        {
            id: 'technology',
            title: 'Info. Technology',
            icon: <Server size={28} />,
            certifications: ['ISO 9001', 'ISO 27000'],
            description: 'IT service management and information security standards'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-16 px-4 sm:px-6 lg:px-8 font-['Arial_Narrow']">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 relative"
                >
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Star className="text-amber-400 fill-current" size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
                        OPERATE YOUR BUSINESS WITH GLOBAL RECOGNITION!
                    </h1>
                    <p className="text-lg text-amber-800 max-w-3xl mx-auto leading-relaxed">
                        Achieve international standards and demonstrate your commitment to excellence with our ISO certification services.
                    </p>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-200 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="p-6">
                                <div className="flex items-center mb-5">
                                    <div className="p-3 rounded-full bg-amber-100 text-amber-700 mr-4 shadow-inner">
                                        {category.icon}
                                    </div>
                                    <h2 className="text-xl font-bold text-amber-900">{category.title}</h2>
                                </div>

                                <div className="mb-5 flex flex-wrap gap-2">
                                    {category.certifications.map((cert, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full shadow-sm"
                                        >
                                            {cert}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-amber-800 mb-5 leading-relaxed">{category.description}</p>

                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}

            </div>
        </div>
    );
};

export default ISOShowcase;