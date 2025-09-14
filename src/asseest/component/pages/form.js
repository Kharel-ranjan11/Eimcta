// 📌 BusinessQuoteForm.js
import React, { useState, useEffect, useRef } from "react";
import {
  User,
  Building,
  Mail,
  Phone,
  MapPin,
  Globe,
  MessageSquare,
  Send,
  ChevronDown,
  X,
} from "lucide-react";
import useEmailAPI from "../utilities/SocialMedia/AllApi"; // ✅ updated import

export default function BusinessQuoteForm() {
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
    "Emergency Planning",
  ];

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    message: "",
    selectedServices: [],
    customService: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | { success, message }

  const [showDropdown, setShowDropdown] = useState(false);
  const [showCustomInput, setShowCustomInput] = useState(false);

  // ✅ Auto-clear status after 5s
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const fetchLocation = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
      );
      const data = await res.json();
      const admin = data.localityInfo?.administrative || [];

      setFormData((prev) => ({
        ...prev,
        address: `${data.city || ""}, ${admin.find((a) => a.adminLevel === 6)?.name || ""
          }, ${admin.find((a) => a.adminLevel === 4)?.name || ""}`
          .trim()
          .replace(/^,\s*|,\s*$/g, ""),
        country: data.countryName || prev.country,
      }));
    } catch (err) {
      console.error("Failed to fetch location:", err);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchLocation(pos.coords.latitude, pos.coords.longitude),
        () => console.log("User denied geolocation.")
      );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service],
    }));
  };

  const addCustomService = () => {
    if (
      formData.customService.trim() &&
      !formData.selectedServices.includes(formData.customService)
    ) {
      setFormData((prev) => ({
        ...prev,
        selectedServices: [...prev.selectedServices, formData.customService],
        customService: "",
      }));
      setShowCustomInput(false);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.organization.trim())
      newErrors.organization = "Organization is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (formData.selectedServices.length === 0)
      newErrors.selectedServices = "Please select at least one service";
    return newErrors;
  };

  const { status, sendEmail } = useEmailAPI();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const result = await sendEmail(formData);
    setIsSubmitting(false);

    // ✅ Handle EmailJS result (success or error)
    if (result?.success) {
      setSubmitStatus({
        success: true,
        message: result.message || "Inquiry submitted successfully!",
      });
      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        address: "",
        country: "",
        message: "",
        selectedServices: [],
        customService: "",
      });
    } else {
      // Handle result.error as string, array, or object
      let errorMsg = "Failed to submit inquiry.";
      if (result?.error) {
        if (typeof result.error === "string") errorMsg = result.error;
        else if (Array.isArray(result.error)) errorMsg = result.error.join(", ");
        else if (typeof result.error === "object" && result.error.text) errorMsg = result.error.text;
      }
      setSubmitStatus({ success: false, message: errorMsg });
    }
  };

  return (
    <main className="min-h-screen p-6 font-['Arial_Narrow']">
      <div className="max-w-6xl mx-auto p-8 bg-white rounded-xl shadow-lg border border-amber-200 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center relative after:content-[''] after:block after:w-24 after:h-1 after:bg-yellow-400 after:mx-auto after:mt-2">
          Client  Inquiry Form
        </h2>
        <p className="text-amber-800 text-center mb-8">
          Please fill out the form below and we'll get back to you shortly
        </p>

        <form ref={form} onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          {/* Name + Organization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Name *"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              icon={<User className="h-4 w-4 text-yellow-400" />}
              placeholder="Your full name"
            />
            <InputField
              label="Organization *"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              error={errors.organization}
              icon={<Building className="h-4 w-4 text-yellow-400" />}
              placeholder="Your organization name"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Email *"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              icon={<Mail className="h-4 w-4 text-yellow-400" />}
              placeholder="your.email@example.com"
            />
            <InputField
              label="Phone/Mobile *"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              icon={<Phone className="h-4 w-4 text-yellow-400" />}
              placeholder="+977 1234567890"
            />
          </div>

          {/* Address + Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Address *"
              name="address"
              value={formData.address}
              onChange={handleChange}
              error={errors.address}
              icon={<MapPin className="h-4 w-4 text-yellow-400" />}
              placeholder="Street, City, District, Province"
            />
            <InputField
              label="Country *"
              name="country"
              value={formData.country}
              onChange={handleChange}
              error={errors.country}
              icon={<Globe className="h-4 w-4 text-yellow-400" />}
              placeholder="e.g., Nepal"
            />
          </div>

          {/* Services */}
          <ServicesDropdown
            servicesInterested={servicesInterested}
            formData={formData}
            toggleService={toggleService}
            errors={errors}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            showCustomInput={showCustomInput}
            setShowCustomInput={setShowCustomInput}
            handleChange={handleChange}
            addCustomService={addCustomService}
          />

          {/* Message */}
          <div className="group">
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Message
            </label>
            <div className="relative">
              <div className="absolute left-3 top-4 bg-amber-100 p-1.5 rounded-full">
                <MessageSquare className="h-4 w-4 text-yellow-400" />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="pl-12 w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition hover:border-amber-300"
                placeholder="Tell us more about your needs (optional)"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-3 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-md hover:shadow-lg"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <span className="flex items-center justify-center">
                  <Send className="mr-2 h-4 w-4" /> Submit Inquiry
                </span>
              )}
            </button>
          </div>

          {/* Status */}
          {submitStatus && (
            <div
              className={`mt-4 p-4 rounded-lg text-center transition-all ${
                submitStatus.success
                  ? "bg-green-50 border border-green-200 text-green-800"
                  : "bg-red-50 border border-red-200 text-red-800"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </main>
  );
}

// 🔹 Reusable InputField
const InputField = ({ label, icon, error, ...props }) => (
  <div className="group">
    <label className="block text-sm font-bold text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-amber-100 p-1.5 rounded-full">
        {icon}
      </div>
      <input
        {...props}
        className={`pl-12 w-full border ${error ? "border-red-400" : "border-gray-300"
          } rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition hover:border-amber-300`}
      />
    </div>
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

// 🔹 Services Dropdown
const ServicesDropdown = ({
  servicesInterested,
  formData,
  toggleService,
  errors,
  showDropdown,
  setShowDropdown,
  showCustomInput,
  setShowCustomInput,
  handleChange,
  addCustomService,
}) => (
  <div className="services-dropdown-container group">
    <label className="block text-sm font-bold text-gray-700 mb-1">
      Services Interested *
    </label>
    <div
      className={`flex flex-wrap gap-2 p-2 border rounded-lg min-h-[50px] transition ${errors.selectedServices
        ? "border-red-400"
        : "border-gray-300 hover:border-amber-300"
        }`}
    >
      {formData.selectedServices.length > 0 ? (
        formData.selectedServices.map((service) => (
          <div
            key={service}
            className="flex items-center bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-amber-200 transition-colors"
          >
            <span>{service}</span>
            <button
              type="button"
              onClick={() => toggleService(service)}
              className="ml-2 -mr-1 p-0.5 rounded-full text-amber-600 hover:bg-amber-200 hover:text-amber-800 transition-colors"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-400 self-center px-1">No services selected</p>
      )}
    </div>

    <div className="relative mt-2">
      <button
        type="button"
        className="w-full border border-gray-300 rounded-lg p-3 cursor-pointer flex justify-between items-center text-left hover:bg-amber-50 transition-colors"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span className="text-gray-700">
          {showDropdown ? "Close Services List" : "Add/View Services"}
        </span>
        {showDropdown ? (
          <X className="h-4 w-4 text-amber-600" />
        ) : (
          <ChevronDown className="h-4 w-4 text-amber-600" />
        )}
      </button>
      {showDropdown && (
        <div className="absolute z-10 w-full mt-1 max-h-60 overflow-y-auto border border-amber-200 bg-white rounded-lg shadow-lg p-2">
          {servicesInterested.map((service, idx) => (
            <label
              key={idx}
              className="flex items-center p-2 rounded-md hover:bg-amber-50 cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                checked={formData.selectedServices.includes(service)}
                onChange={() => toggleService(service)}
                className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500 mr-3"
              />
              <span className="text-sm text-gray-700">{service}</span>
            </label>
          ))}
          <div className="p-2 mt-2 border-t border-amber-200">
            {showCustomInput ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={formData.customService}
                  onChange={handleChange}
                  name="customService"
                  className="flex-1 border border-gray-300 rounded-lg px-2 py-1 mr-2 focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Enter custom service"
                />
                <button
                  type="button"
                  onClick={addCustomService}
                  className="text-white bg-amber-600 px-3 py-1 rounded-lg hover:bg-amber-700 transition-colors text-sm"
                >
                  Add
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowCustomInput(true)}
                className="text-amber-600 hover:underline text-sm hover:text-amber-700 transition-colors"
              >
                Add other service...
              </button>
            )}
          </div>
        </div>
      )}
    </div>
    {errors.selectedServices && (
      <p className="mt-1 text-sm text-red-600">{errors.selectedServices}</p>
    )}
  </div>
);
