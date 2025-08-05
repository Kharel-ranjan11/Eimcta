import React from "react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  ChevronRight,
  HelpCircle,
  Link as LinkIcon,
  FileText,
  MessageSquare,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative text-gray-200 overflow-hidden bg-size-200 animate-gradient-x"
      style={{
        backgroundImage: 'linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #0f2027)',
      }}
    >
      {/* Background noise and gradients */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute -top-1/3 -left-1/4 w-[150%] h-[150%] bg-gradient-radial from-teal-500/10 via-transparent to-transparent"></div>
        <div className="absolute -bottom-1/3 -right-1/4 w-[150%] h-[150%] bg-gradient-radial from-indigo-500/10 via-transparent to-transparent"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo + Contact */}
          <div className="space-y-6">
            <div className="flex flex-col items-center md:items-start">
              <div className="text-3xl font-bold mb-2 tracking-widest">
                <span className="text-blue-400">E</span>
                <span className="text-green-400">I</span>
                <span className="text-yellow-400">M</span>
                <span className="text-red-400">C</span>
                <span className="text-purple-400">T</span>
                <span className="text-cyan-400">A</span>
              </div>
              <p className="text-gray-400 text-sm max-w-xs">
                <span className="font-bold text-blue-400"> E</span>verest
                <span className="font-bold text-green-400"> I</span>nternational
                <span className="font-bold text-yellow-400"> M</span>anagement
                <span className="font-bold text-red-400"> C</span>onsultancy
                <span className="font-bold text-purple-400"> T</span>raining & 
                <span className="font-bold text-cyan-400"> A</span>gency Pvt. Ltd.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="text-blue-400 mr-3" size={18} />
                <div>
                  <p className="text-gray-400 text-sm">Call us</p>
                  <a href="tel:+97715903211" className="text-gray-300 hover:text-blue-400 transition">
                    +977 1 5903211
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="text-blue-400 mr-3" size={18} />
                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <a href="mailto:info@everestconsultrain.com" className="text-gray-300 hover:text-blue-400 transition">
                    info@everestconsultrain.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start">
              <HelpCircle className="text-blue-400 mr-2" size={20} />
              <h3 className="text-lg font-semibold text-white">FAQ's</h3>
            </div>
            <p className="text-gray-400 font-medium mb-3">Frequently Asked Questions</p>
            <ul className="space-y-2">
              {[
                "Which ISO Standard is suitable for our business?",
                "Why should we go for an ISO Certification?",
                "What are the benefits of going for ISO Certification to my business?",
              ].map((question, idx) => (
                <li key={idx} className="group cursor-pointer">
                  <div className="flex items-center justify-center md:justify-start transition-all duration-200">
                    <ChevronRight className="text-blue-400 mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                    <span className="text-gray-300 group-hover:text-blue-400 transition-colors">{question}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start">
              <LinkIcon className="text-blue-400 mr-2" size={20} />
              <h3 className="text-lg font-semibold text-white">Links</h3>
            </div>
            <ul className="space-y-2">
              {[
                "ISO Related Links",
                "Occupational Health & Safety : Links",
                "Environmental Links",
                "OHS Injury cost calculator",
                "CO2 Emission Calculator",
                "Labour Law Nepal",
              ].map((link, idx) => (
                <li key={idx} className="group cursor-pointer">
                  <div className="flex items-center justify-center md:justify-start">
                    <ChevronRight className="text-blue-400 mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                    <span className="text-gray-300 group-hover:text-blue-400 transition-colors">{link}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Suggestions */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <FileText className="text-blue-400 mr-2" size={20} />
                <h3 className="text-lg font-semibold text-white">Resources</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "EIMCTA KYC",
                  "EIMCTA Profile",
                  "PPE Broachers",
                  "Safety Sign Broachers",
                  "Fire Safety & Rescue Equipment Broachers",
                  "Certification & Benefit of ISO 9001 : 2015 QMS",
                ].map((resource, idx) => (
                  <li key={idx} className="group cursor-pointer">
                    <div className="flex items-center justify-center md:justify-start">
                      <ChevronRight className="text-blue-400 mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                      <span className="text-gray-300 group-hover:text-blue-400 transition-colors">{resource}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <MessageSquare className="text-blue-400 mr-2" size={20} />
                <h3 className="text-lg font-semibold text-white">Suggestions</h3>
              </div>
              <form className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 backdrop-blur"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-300 hover:text-blue-400 transition"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} EIMCTA. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              {[
                { icon: Facebook, color: "hover:text-blue-500" },
                { icon: Twitter, color: "hover:text-sky-400" },
                { icon: Instagram, color: "hover:text-pink-500" },
                { icon: Linkedin, color: "hover:text-blue-600" },
              ].map((social, idx) => (
                <button key={idx} className={`text-gray-400 ${social.color} transition`}>
                  <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur transition-all duration-300">
                    <social.icon size={18} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
