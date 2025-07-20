import React, { useState } from "react";
import { FaFileContract, FaUsers, FaRoad, FaClock, FaAward, FaHandshake, FaChartLine, FaHeadset, FaCheck, FaEnvelope, FaUser, FaCommentAlt, FaPaperPlane } from "react-icons/fa";
import { MdOutlineEngineering, MdSupport } from "react-icons/md";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      setIsSubmitting(false);
    } else {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setErrors({});
      setSuccess(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", service: "", message: "" });
    }
  };

  const services = [
    "ISO 9001:2015 QMS",
    "ISO 45001:2018 OHSMS",
    "ISO 14001:2015 EMS",
    "ISO 27001:2022 ISMS",
    "Training Programs",
    "OHS Consultancy",
    "Environmental Services",
    "Safety Equipment",
    "Third Party Audits",
    "CE Marking",
    "HACCP Certification",
    "Emergency Planning"
  ];

  const includedItems = [
    { 
      icon: <FaFileContract className="text-xl" />, 
      title: "Detailed Proposal", 
      description: "Comprehensive breakdown of services, timeline, and costs" 
    },
    { 
      icon: <FaUsers className="text-xl" />, 
      title: "Expert Consultation", 
      description: "Free consultation with our certification experts" 
    },
    { 
      icon: <FaRoad className="text-xl" />, 
      title: "Implementation Roadmap", 
      description: "Step-by-step plan for achieving your certification goals" 
    }
  ];

  const benefits = [
    {
      icon: <FaAward className="text-2xl" />,
      title: "Certified Experts",
      description: "Team of internationally certified professionals"
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Personalized Service",
      description: "Tailored solutions for your specific industry needs"
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Proven Results",
      description: "Track record of successful certifications across industries"
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: "Ongoing Support",
      description: "Continuous support throughout and after certification"
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get a <span className="text-primary">Custom Quote</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Request a customized quote for our ISO certification, training, or consultancy services. 
            Our experts will provide you with a detailed proposal based on your specific needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Quote Form - Now with fixed height */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl h-fit">
            <div className="p-6 sm:p-8">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Request Your Quote</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                Provide us with your details and requirements, and we'll send you a comprehensive quote within 24 hours.
                <span className="text-red-500"> *</span> indicates required fields.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`pl-10 w-full border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition`}
                      placeholder="Your full name"
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`pl-10 w-full border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full border ${errors.service ? 'border-red-300' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition appearance-none bg-white`}
                  >
                    <option value="">Select a service</option>
                    <option value="ISO 9001">ISO 9001</option>
                    <option value="ISO 45001">ISO 45001</option>
                    <option value="ISO 14001">ISO 14001</option>
                    <option value="Training">Training</option>
                    <option value="Consultancy">Consultancy</option>
                  </select>
                  {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <FaCommentAlt className="text-gray-400" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`pl-10 w-full border ${errors.message ? 'border-red-300' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition`}
                      rows={4}
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-slate-600 bg-gradient-to-r
                     from-primary to-primary-dark 
                     hover:from-primary-dark hover:to-primary
                      text-white font-medium 
                      py-3 px-6 rounded-lg shadow-md 
                      -all duration-300 
                      transform hover:scale-[1.02]
                      focus:outline-none focus:ring-2 
                      :ring-primary focus:ring-opacity-50 ${
                    isSubmitting ? 'opacity-90 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="flex items-center">
                        Sending <FaPaperPlane className="ml-2 animate-pulse" />
                      </span>
                    </div>
                  ) : (
                    <span className="flex items-center justify-center">
                      Submit Request <FaPaperPlane className="ml-2" />
                    </span>
                  )}
                </button>

                {success && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    Thank you! Your quote request has been submitted successfully. We'll contact you within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Column - Adjusted to match form height */}
          <div className="flex flex-col gap-8 h-fit">
            {/* What's Included Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
                <div className="space-y-4">
                  {includedItems.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition cursor-pointer group"
                    >
                      <div className="bg-primary/10 p-3 rounded-lg mr-4 group-hover:bg-primary/20 transition">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services List */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MdOutlineEngineering className="text-primary text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Services</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                  {services.map((service, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center p-2 rounded hover:bg-gray-50 transition cursor-pointer"
                    >
                      <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Response Card - Updated with new design */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-100">
              <div className="p-6 sm:p-8">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Quick Response</h3>
                    <p className="text-gray-600">We respond to all quote requests within 24 hours</p>
                  </div>
                </div>
                <div className="border-t border-blue-100 pt-4 mt-4">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-800">Next Steps:</strong> After submitting your request, our team will review your requirements and contact you to discuss your specific needs and provide a detailed quote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 md:mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose <span className="text-primary">EIMCTA</span>?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl shadow-md overflow-hidden p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition">{benefit.title}</h3>
                <p className="text-gray-600 mt-2">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}