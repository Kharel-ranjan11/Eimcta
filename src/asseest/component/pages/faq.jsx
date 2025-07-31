// components/Faq.js
import { useState, useEffect } from "react";
import { faqdata } from "../utilities/Array/data";

export const Faq = () => {
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timeout);
    }, []);

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
                    <p className="text-xl font-semibold text-gray-700">Loading FAQs...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="faq-page max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">❓ Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqdata.map(({ question, answer, icon: Icon }, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-xl p-4 shadow-sm bg-white transition-all"
                    >
                        <button
                            className="flex items-center justify-between w-full"
                            onClick={() => toggle(index)}
                        >
                            <div className="flex items-center gap-3 text-left text-lg font-semibold">
                                <Icon className="w-5 h-5 text-indigo-600" />
                                {question}
                            </div>
                            <span className="text-gray-500">
                                {activeIndex === index ? "−" : "+"}
                            </span>
                        </button>

                        {activeIndex === index && (
                            <div className="mt-3 text-gray-700">
                                <p>{answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};