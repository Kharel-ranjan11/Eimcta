import React, { useState } from "react";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true);
      alert("Quote request submitted successfully!");
      // Reset form
      setFormData({ name: "", email: "", service: "", message: "" });
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-dark mb-4">Get a Quote</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Request a customized quote for our ISO certification, training, or consultancy services. Our experts will provide you with a detailed proposal based on your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Quote Form */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Request Your Quote</h2>
            <p className="text-sm text-gray-600 mb-6">Provide us with your details and requirements, and we'll send you a comprehensive quote within 24 hours.</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-1 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-semibold">Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  <option value="">Select a service</option>
                  <option value="ISO 9001">ISO 9001</option>
                  <option value="ISO 45001">ISO 45001</option>
                  <option value="ISO 14001">ISO 14001</option>
                  <option value="Training">Training</option>
                  <option value="Consultancy">Consultancy</option>
                </select>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-semibold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  rows={4}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* What's Included Section */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-8">What's Included</h2>
            <div className="space-y-6 mb-8">
              {[ 
                { icon: "fas fa-file-contract", title: "Detailed Proposal", description: "Comprehensive breakdown of services, timeline, and costs" },
                { icon: "fas fa-users", title: "Expert Consultation", description: "Free consultation with our certification experts" },
                { icon: "fas fa-road", title: "Implementation Roadmap", description: "Step-by-step plan for achieving your certification goals" }
              ].map((item, idx) => (
                <div key={idx} className="flex bg-white p-4 rounded-lg shadow">
                  <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg mr-4">
                    <i className={`${item.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Services List */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-dark mb-4">Our Services</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                {[
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
                ].map((service, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <i className="fas fa-check text-accent"></i>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-8 bg-primary/5 border border-primary/20 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <i className="fas fa-clock text-primary text-2xl mr-4"></i>
                <div>
                  <h3 className="text-lg font-semibold text-dark">Quick Response</h3>
                  <p className="text-gray-600">We respond to all quote requests within 24 hours</p>
                </div>
              </div>
              <div className="border-t border-primary/20 pt-4">
                <p className="text-sm text-gray-600">
                  <strong>Next Steps:</strong> After submitting your request, our team will review your requirements and contact you to discuss your specific needs and provide a detailed quote.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Why Choose EIMCTA?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "fas fa-award",
                title: "Certified Experts",
                description: "Team of internationally certified professionals"
              },
              {
                icon: "fas fa-handshake",
                title: "Personalized Service",
                description: "Tailored solutions for your specific industry needs"
              },
              {
                icon: "fas fa-chart-line",
                title: "Proven Results",
                description: "Track record of successful certifications across industries"
              },
              {
                icon: "fas fa-support",
                title: "Ongoing Support",
                description: "Continuous support throughout and after certification"
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg text-center shadow hover:shadow-lg transition">
                <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className={`${benefit.icon} text-2xl text-accent`}></i>
                </div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
