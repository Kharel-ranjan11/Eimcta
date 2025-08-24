import React, { useState, useEffect, useRef } from "react";

// --- SVG Icons (replaces react-icons) ---
// I've removed the fixed height and width to allow for better styling with Tailwind CSS.
const IconUser = ({ className }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg>;
const IconBuilding = ({ className }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M432 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM368 224H80V16c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16v208zM112 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16zm112 0h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16zm112 0h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16z"></path></svg>;
const IconEnvelope = ({ className }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48L256 240 48 112h416zM48 384V140.24l192.51 120.32a31.996 31.996 0 0018.98 5.44c6.84 0 13.68-1.82 19.55-5.55L464 140.24V384H48z"></path></svg>;
const IconPhone = ({ className }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>;
const IconCity = ({ className }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M632 448H8c-4.4 0-8 3.6-8 8v48h640v-48c0-4.4-3.6-8-8-8zM0 392.5V152c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32h32V80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v104h32V32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v176h32V80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v104h32V32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v176h32V152c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v240.5c-22.5-18-52.2-29.2-85.4-31.2-1-.1-2.1-.1-3.1-.2-3.1-.2-6.2-.3-9.4-.3-33.7 0-64.4 12.3-88.9 32.9-24.5-20.6-55.2-32.9-88.9-32.9s-64.4 12.3-88.9 32.9c-24.5-20.6-55.2-32.9-88.9-32.9s-64.4 12.3-88.9 32.9C60.4 362.3 29.7 350 0 350v42.5z"></path></svg>;
const IconGlobe = ({ className }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm143.4 332.6c-3.2 18.2-22.1 29.5-39.9 22.3-13-5.3-21.6-16.2-23.8-29.1-2.1-12.2 1.9-24.2 9.4-33.8 11.8-15.2 28.5-27.3 46.5-36.2 22.8-11.2 46.4-17.2 70.3-17.6 5.2-.1 9.9 2.1 13.2 5.9 4.3 5 5.3 11.6 2.6 17.3l-28.5 60.9c-2.3 4.9-6.9 8.2-12.2 8.9-19.2 2.7-37.9 8.6-55.1 17.6zM448 256c0 44.1-35.9 80-80 80s-80-35.9-80-80 35.9-80 80-80 80 35.9 80 80z"></path></svg>;
const IconCommentAlt = ({ className }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"></path></svg>;
const IconPaperPlane = ({ className }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>;
const IconChevronDown = ({ className }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>;
const IconTimes = ({ className }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>;
const IconMapMarkerAlt = ({ className }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>;

const EmailJSLoader = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);
    return null;
};


export default function BusinessQuoteForm() {
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  const form = useRef();

  const servicesInterested = [
    "ISO 9001:2015 QMS (Quality Management System)",
    "ISO 45001:2018 OHSMS (Occupational Health & Safety Management System)",
    "ISO 14001:2015 EMS (Environmental Management System)",
    "ISO 27001:2022 ISMS (Information Security Management System)",
    "ISO 22000:2018 FSMS (Food Safety Management System)",
    "ISO 39001:2012 RTSMS (Road Traffic Safety Management System)",
    "ISO 21001:2018 EOMS (Educational Organizations Management System)",
    "ISO 50001:2018 EnMS (Energy Management System)",
    "Training Programs",
    "OHS Consultancy",
    "Environmental Services",
    "Safety Equipment",
    "Third Party Audits",
    "CE Marking (Conformité Européenne)",
    "HACCP Certification (Hazard Analysis & Critical Control Points)",
    "Emergency Planning"
  ];

  const [formData, setFormData] = useState({
    name: "", organization: "", email: "", phone: "",
    city: "", district: "", province: "", country: "",
    message: "", selectedServices: [], customService: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, error: false, message: '' });
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCustomInput, setShowCustomInput] = useState(false);

  const fetchLocation = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
      );
      const data = await res.json();
      const admin = data.localityInfo?.administrative || [];

      setFormData(prev => ({
        ...prev,
        city: admin.find(a => a.adminLevel === 8)?.name || data.city || prev.city,
        district: admin.find(a => a.adminLevel === 6)?.name || prev.district,
        province: admin.find(a => a.adminLevel === 4)?.name || prev.province,
        country: data.countryName || prev.country
      }));
    } catch (err) {
      console.error("Failed to fetch location:", err);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => fetchLocation(position.coords.latitude, position.coords.longitude),
        () => console.log("User denied geolocation.")
      );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const toggleService = (service) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service]
    }));
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

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.organization.trim()) newErrors.organization = "Organization is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.district.trim()) newErrors.district = "District is required";
    if (!formData.province.trim()) newErrors.province = "Province is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (formData.selectedServices.length === 0) newErrors.selectedServices = "Please select at least one service";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: false, message: '' });
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const servicesString = formData.selectedServices.join('; ');
    const templateParams = {
        ...formData,
        selectedServices: servicesString
    };

    if (window.emailjs) {
        window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
          .then((response) => {
             console.log('SUCCESS!', response.status, response.text);
             setSubmitStatus({ success: true, error: false, message: "Thank you for your inquiry! We'll contact you soon." });
             setErrors({});
             setFormData({
               name: "", organization: "", email: "", phone: "",
               city: "", district: "", province: "", country: "",
               message: "", selectedServices: [], customService: ""
             });
          }, (err) => {
             console.log('FAILED...', err);
             setSubmitStatus({ success: false, error: true, message: 'Failed to send message. Please try again later.' });
          })
          .finally(() => {
            setIsSubmitting(false);
          });
    } else {
        console.error('EmailJS script not loaded');
        setSubmitStatus({ success: false, error: true, message: 'An error occurred. Please refresh and try again.' });
        setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showDropdown && !e.target.closest('.services-dropdown-container')) setShowDropdown(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDropdown]);

  return (
    <>
      <EmailJSLoader />
      <main className="min-h-screen p-6 bg-gray-50">
        <div className="max-w-6xl mx-auto p-8 bg-white rounded-xl shadow-lg font-sans">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Service Inquiry Form</h2>
          <form ref={form} onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Name *</label>
                <div className="relative">
                  <IconUser className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-amber-600" />
                  <input type="text" name="name" value={formData.name} onChange={handleChange}
                    className={`pl-10 w-full border ${errors.name ? 'border-red-400' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition`}
                    placeholder="Your full name"/>
                </div>
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Organization *</label>
                <div className="relative">
                  <IconBuilding className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-amber-600" />
                  <input type="text" name="organization" value={formData.organization} onChange={handleChange}
                    className={`pl-10 w-full border ${errors.organization ? 'border-red-400' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition`}
                    placeholder="Your organization name"/>
                </div>
                {errors.organization && <p className="mt-1 text-sm text-red-600">{errors.organization}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email *</label>
                <div className="relative">
                  <IconEnvelope className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-amber-600" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange}
                    className={`pl-10 w-full border ${errors.email ? 'border-red-400' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition`}
                    placeholder="your.email@example.com"/>
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Phone/Mobile *</label>
                <div className="relative">
                  <IconPhone className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-amber-600" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className={`pl-10 w-full border ${errors.phone ? 'border-red-400' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition`}
                    placeholder="+977 1234567890"/>
                </div>
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">City *</label>
                <div className="relative">
                  <IconCity className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-amber-600"/>
                  <input type="text" name="city" value={formData.city} onChange={handleChange}
                    className={`pl-10 w-full border ${errors.city ? 'border-red-400' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition`}
                    placeholder="e.g., Kathmandu"/>
                </div>
                {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">District *</label>
                <div className="relative">
                  <IconMapMarkerAlt className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-amber-600"/>
                  <input type="text" name="district" value={formData.district} onChange={handleChange}
                    className={`pl-10 w-full border ${errors.district ? 'border-red-400' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition`}
                    placeholder="e.g., Lalitpur"/>
                </div>
                {errors.district && <p className="mt-1 text-sm text-red-600">{errors.district}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Province *</label>
                <div className="relative">
                  <IconMapMarkerAlt className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-amber-600"/>
                  <input type="text" name="province" value={formData.province} onChange={handleChange}
                    className={`pl-10 w-full border ${errors.province ? 'border-red-400' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition`}
                    placeholder="e.g., Bagmati"/>
                </div>
                {errors.province && <p className="mt-1 text-sm text-red-600">{errors.province}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Country *</label>
                <div className="relative">
                  <IconGlobe className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-amber-600"/>
                  <input type="text" name="country" value={formData.country} onChange={handleChange}
                    className={`pl-10 w-full border ${errors.country ? 'border-red-400' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition`}
                    placeholder="e.g., Nepal"/>
                </div>
                {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
              </div>
            </div>

            {/* --- UPDATED Services Selection --- */}
            <div className="services-dropdown-container">
              <label className="block text-sm font-bold text-gray-700 mb-1">Services Interested *</label>
              
              {/* Display Area for Selected Services (Tags) */}
              <div className={`flex flex-wrap gap-2 p-2 border rounded-lg min-h-[50px] ${errors.selectedServices ? 'border-red-400' : 'border-gray-300'}`}>
                  {formData.selectedServices.length > 0 ? formData.selectedServices.map(service => (
                      <div key={service} className="flex items-center bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full">
                          <span>{service}</span>
                          <button type="button" onClick={() => toggleService(service)} className="ml-2 -mr-1 p-0.5 rounded-full text-amber-600 hover:bg-amber-200 hover:text-amber-800 transition-colors">
                              <IconTimes className="h-3 w-3" />
                          </button>
                      </div>
                  )) : (
                    <p className="text-gray-400 self-center px-1">No services selected</p>
                  )}
              </div>

              {/* Dropdown Trigger */}
              <div className="relative mt-2">
                  <button type="button"
                      className="w-full border border-gray-300 rounded-lg p-3 cursor-pointer flex justify-between items-center text-left hover:bg-gray-50"
                      onClick={() => setShowDropdown(!showDropdown)}>
                      <span className='text-gray-700'>
                          {showDropdown ? 'Close Services List' : 'Add/View Services'}
                      </span>
                      {showDropdown ? <IconTimes className="h-4 w-4"/> : <IconChevronDown className="h-4 w-4"/>}
                  </button>
                  {showDropdown && (
                      <div className="absolute z-10 w-full mt-1 max-h-60 overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-lg p-2">
                          {servicesInterested.map((service, idx) => (
                              <label key={idx} className="flex items-center p-2 rounded-md hover:bg-amber-50 cursor-pointer">
                                  <input type="checkbox" checked={formData.selectedServices.includes(service)}
                                      onChange={() => toggleService(service)}
                                      className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500 mr-3"/>
                                  <span className="text-sm text-gray-700">{service}</span>
                              </label>
                          ))}
                          <div className="p-2 mt-2 border-t border-gray-200">
                              {showCustomInput ? (
                                  <div className="flex items-center">
                                      <input type="text" value={formData.customService} onChange={handleChange} name="customService"
                                          className="flex-1 border border-gray-300 rounded-lg px-2 py-1 mr-2 focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                                          placeholder="Enter custom service"/>
                                      <button type="button" onClick={addCustomService} className="text-white bg-amber-600 px-3 py-1 rounded-lg hover:bg-amber-700 transition-colors text-sm">Add</button>
                                  </div>
                              ) : (
                                  <button type="button" onClick={() => setShowCustomInput(true)} className="text-amber-600 hover:underline text-sm">Add other service...</button>
                              )}
                          </div>
                      </div>
                  )}
              </div>
              {errors.selectedServices && <p className="mt-1 text-sm text-red-600">{errors.selectedServices}</p>}
            </div>


            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
              <div className="relative">
                <IconCommentAlt className="h-4 w-4 absolute left-3 top-4 text-amber-600" />
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4"
                  className="pl-10 w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition"
                  placeholder="Tell us more about your needs (optional)"/>
              </div>
            </div>

            <div className="text-center">
              <button type="submit" disabled={isSubmitting}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-3 rounded-lg transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? "Submitting..." : <span className="flex items-center justify-center"><IconPaperPlane className="mr-2 h-4 w-4"/> Submit Inquiry</span>}
              </button>
            </div>

            {submitStatus.message && (
              <div className={`mt-4 p-4 rounded-lg text-center ${submitStatus.success ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </main>
    </>
  );
}
