import React, { useState, useEffect } from "react";
import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaCity, FaGlobe, FaCommentAlt, FaPaperPlane, FaChevronDown, FaTimes, FaSearch, FaSpinner, FaMapMarkerAlt } from "react-icons/fa";

export default function BusinessQuoteForm() {
  const servicesInterested = [
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

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    city: "",
    district: "",
    province: "",
    country: "",
    message: "",
    selectedServices: [],
    customService: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCustomInput, setShowCustomInput] = useState(false);

  // Auto-fill for email and phone from browser autofill
  useEffect(() => {
    const checkAutoFill = () => {
      // Check for email autofill
      const emailInput = document.querySelector('input[name="email"]');
      if (emailInput && emailInput.value && !formData.email) {
        setFormData(prev => ({
          ...prev,
          email: emailInput.value
        }));
      }

      // Check for phone autofill
      const phoneInput = document.querySelector('input[name="phone"]');
      if (phoneInput && phoneInput.value && !formData.phone) {
        setFormData(prev => ({
          ...prev,
          phone: phoneInput.value
        }));
      }
    };

    // Run immediately in case autofill already happened
    checkAutoFill();

    // Also set up a mutation observer to watch for autofill changes
    const observer = new MutationObserver(checkAutoFill);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['value']
    });

    return () => observer.disconnect();
  }, [formData.email, formData.phone]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const toggleService = (service) => {
    setFormData(prev => {
      if (prev.selectedServices.includes(service)) {
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter(s => s !== service)
        };
      } else {
        return {
          ...prev,
          selectedServices: [...prev.selectedServices, service]
        };
      }
    });
  };

  const addCustomService = () => {
    if (formData.customService.trim() && !formData.selectedServices.includes(formData.customService)) {
      setFormData(prev => ({
        ...prev,
        selectedServices: [...prev.selectedServices, formData.customService],
        customService: ""
      }));
      setShowCustomInput(false);
    }
  };

  const removeService = (service) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.filter(s => s !== service)
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.organization.trim()) newErrors.organization = "Organization is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.district.trim()) newErrors.district = "District is required";
    if (!formData.province.trim()) newErrors.province = "Province is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (formData.selectedServices.length === 0) newErrors.selectedServices = "Please select at least one service";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
    } else {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
      setErrors({});
      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        city: "",
        district: "",
        province: "",
        country: "",
        message: "",
        selectedServices: [],
        customService: ""
      });
    }
    setIsSubmitting(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showDropdown && !e.target.closest('.services-dropdown')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDropdown]);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md" style={{ fontFamily: "'Arial Narrow', Arial, sans-serif" }}>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Service Inquiry Form</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Grid for Name and Organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-amber-600" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`pl-10 w-full border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition`}
                placeholder="Your full name"
              />
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Organization */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Organization *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaBuilding className="text-amber-600" />
              </div>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className={`pl-10 w-full border ${errors.organization ? 'border-red-300' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition`}
                placeholder="Your organization name"
              />
            </div>
            {errors.organization && <p className="mt-1 text-sm text-red-600">{errors.organization}</p>}
          </div>
        </div>

        {/* Grid for Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Email *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-amber-600" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`pl-10 w-full border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition`}
                placeholder="your.email@example.com"
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Phone/Mobile *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhone className="text-amber-600" />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`pl-10 w-full border ${errors.phone ? 'border-red-300' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition`}
                placeholder="+1234567890"
              />
            </div>
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>
        </div>

        {/* Location Fields in city-district-province-country order */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* City */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              City *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCity className="text-amber-600" />
              </div>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`pl-10 w-full border ${errors.city ? 'border-red-300' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition`}
                placeholder="Your city"
              />
            </div>
            {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
          </div>

          {/* District */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              District *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMapMarkerAlt className="text-amber-600" />
              </div>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className={`pl-10 w-full border ${errors.district ? 'border-red-300' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition`}
                placeholder="Your district"
              />
            </div>
            {errors.district && <p className="mt-1 text-sm text-red-600">{errors.district}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Province */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Province *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMapMarkerAlt className="text-amber-600" />
              </div>
              <input
                type="text"
                name="province"
                value={formData.province}
                onChange={handleChange}
                className={`pl-10 w-full border ${errors.province ? 'border-red-300' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition`}
                placeholder="Your province"
              />
            </div>
            {errors.province && <p className="mt-1 text-sm text-red-600">{errors.province}</p>}
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Country *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaGlobe className="text-amber-600" />
              </div>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`pl-10 w-full border ${errors.country ? 'border-red-300' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition`}
                placeholder="Your country"
              />
            </div>
            {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
          </div>
        </div>

        {/* Services Interested - Full width */}
        <div className="relative services-dropdown">
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Services Interested *
          </label>
          <div 
            className={`w-full border ${errors.selectedServices ? 'border-red-300' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition min-h-[46px] cursor-pointer flex flex-wrap gap-2 items-center ${formData.selectedServices.length > 0 ? 'py-2' : 'py-3'}`}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {formData.selectedServices.length === 0 ? (
              <span className="text-gray-400">Select services (multiple)</span>
            ) : (
              formData.selectedServices.map(service => (
                <span 
                  key={service} 
                  className="inline-flex items-center bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full"
                >
                  {service}
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeService(service);
                    }}
                    className="ml-2 text-amber-500 hover:text-amber-700"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </span>
              ))
            )}
            <FaChevronDown className={`ml-auto text-gray-400 transition-transform ${showDropdown ? 'transform rotate-180' : ''}`} />
          </div>
          
          {showDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
              <div className="p-2">
                {servicesInterested.map(service => (
                  <div 
                    key={service} 
                    className={`px-3 py-2 hover:bg-amber-50 rounded-md cursor-pointer flex items-center ${formData.selectedServices.includes(service) ? 'bg-amber-50' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleService(service);
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={formData.selectedServices.includes(service)}
                      readOnly
                      className="mr-2 rounded text-amber-600 focus:ring-amber-500"
                    />
                    <span>{service}</span>
                  </div>
                ))}
                
                {showCustomInput ? (
                  <div className="px-3 py-2 flex items-center gap-2">
                    <input
                      type="text"
                      value={formData.customService}
                      onChange={(e) => setFormData({...formData, customService: e.target.value})}
                      placeholder="Enter custom service"
                      className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        addCustomService();
                      }}
                      className="bg-amber-500 text-white px-2 py-1 rounded text-sm"
                    >
                      Add
                    </button>
                  </div>
                ) : (
                  <div 
                    className="px-3 py-2 hover:bg-amber-50 rounded-md cursor-pointer text-amber-600 flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowCustomInput(true);
                    }}
                  >
                    <span className="ml-6">+ Add custom service</span>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {errors.selectedServices && <p className="mt-1 text-sm text-red-600">{errors.selectedServices}</p>}
        </div>

        {/* Message - Full width */}
        <div>
          <label className="block font-bold text-sm  text-gray-700 mb-1">
            Message
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3">
              <FaCommentAlt className="text-amber-600" />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="pl-10 w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition"
              rows={4}
              placeholder="Tell us about your requirements..."
            ></textarea>
          </div>
        </div>

        {/* Submit Button - Full width */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full mt-6 bg-gradient-to-r
            font-bold  from-amber-500 to-amber-700
             hover:from-amber-600 hover:to-amber-800 text-white  py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 ${
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
                Submitting <FaPaperPlane className="ml-2 animate-pulse" />
              </span>
            </div>
          ) : (
            <span className="flex items-center justify-center">
              Submit Inquiry <FaPaperPlane className="ml-2" />
            </span>
          )}
        </button>

        {success && (
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-700">
            Thank you for your inquiry! We'll contact you soon regarding your selected services.
          </div>
        )}
      </form>
    </div>
  );
}