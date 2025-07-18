import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaCalculator,
  FaGavel,
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaViber,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const resources = [
    {
      title: "CO2 Emission Calculator",
      icon: FaLeaf,
      description: "Calculate your carbon footprint",
      to: "/co2-calculator",
    },
    {
      title: "OHS Injury Cost Calculator",
      icon: FaCalculator,
      description: "Assess workplace injury costs",
      to: "/ohs-injury-cost-calculator",
    },
    {
      title: "Labour Law Nepal",
      icon: FaGavel,
      description: "Nepal labour law resources",
      to: "/labour-law-nepal",
    },
    {
      title: "Download Brochures",
      icon: FaDownload,
      description: "PPE and safety brochures",
      to: "/download-brochures",
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for any questions about our services or
            to schedule a consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Get in Touch</h2>

            <div className="space-y-6 mb-8">
              {/* Email */}
              <div className="p-6 border rounded-lg shadow-sm bg-white">
                <div className="flex items-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group cursor-pointer">
                    <FaEnvelope className="text-blue-600 text-xl transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@eimcta.com</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-6 border rounded-lg shadow-sm bg-white">
                <div className="flex items-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group cursor-pointer">
                    <FaPhone className="text-blue-600 text-xl transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">
                      +977 9761754799
                      <br />
                      +977 9741766637
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="p-6 border rounded-lg shadow-sm bg-white">
                <div className="flex items-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group cursor-pointer">
                    <FaMapMarkerAlt className="text-blue-600 text-xl transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Location</h3>
                    <p className="text-gray-600">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Contact Methods */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Alternative Contact Methods
              </h3>
              <div className="space-y-3">
                <a
                  href="https://wa.me/9779761754799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 group hover:text-green-700 transition-colors cursor-pointer"
                >
                  <FaWhatsapp className="text-green-500 text-xl transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-gray-700">WhatsApp: +977 9761754799</span>
                </a>

                <a
                  href="viber://chat?number=%2B9779741766637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 group hover:text-purple-700 transition-colors cursor-pointer"
                >
                  <FaViber className="text-purple-500 text-xl transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-gray-700">Viber: +977 9741766637</span>
                </a>

                <a
                  href="https://m.me/eimcta" // Replace with your actual Facebook Page username or ID
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 group hover:text-blue-700 transition-colors cursor-pointer"
                >
                  <FaFacebook className="text-blue-600 text-xl transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-gray-700">Facebook Messenger</span>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Business Hours
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday - Friday:</span>
                  <span className="text-gray-800">10:00 AM - 5:00 PM</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="text-gray-800">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="p-6 border rounded-lg shadow-sm bg-white">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Send us a Message
                </h2>
                <p className="text-sm text-gray-600">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>

              {submitted && (
                <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
                  Thank you for your message! We will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-gray-300 px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map(({ title, icon: Icon, description, to }, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg bg-white hover:shadow-lg transition-shadow"
              >
                <div className="text-center mb-4">
                  <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-2 group cursor-pointer">
                    <Icon className="text-green-600 text-2xl transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
                </div>
                <p className="text-center text-gray-600 text-sm mb-4">{description}</p>
                <div className="text-center">
                  <Link
                    to={to}
                    className="text-green-600 hover:underline text-sm font-medium"
                  >
                    Access Tool →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Location */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Find Us on the Map
          </h2>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="EIMCTA Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0343517296677!2d85.32424907450653!3d27.714929776190727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18f6c16d7f67%3A0xfdbb4aa7d74814f!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1693831942422!5m2!1sen!2snp"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
