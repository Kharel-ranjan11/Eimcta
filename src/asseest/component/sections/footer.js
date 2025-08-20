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
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative text-[#FFF3E4] bg-[#483434] font-['Arial_Narrow'] font-bold">
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo + Contact */}
          <div className="space-y-6">
            <div className="flex flex-col items-center md:items-start">
              <div className="text-3xl font-bold mb-2 tracking-widest">
                <span className="text-[#EED6C4]">EIMCTA</span>
              </div>
              <p className="text-[#EED6C4] text-sm max-w-xs">
                Everest International Management Consultancy Training & Agency Pvt. Ltd.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="text-[#EED6C4] mr-3" size={18} />
                <div>
                  <p className="text-[#EED6C4] text-sm">Call us</p>
                  <a href="tel:+97715903211" className="text-white hover:text-[#EED6C4] transition">
                    +977 1 5903211
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="text-[#EED6C4] mr-3" size={18} />
                <div>
                  <p className="text-[#EED6C4] text-sm">Email Us</p>
                  <a href="mailto:info@everestconsultrain.com" className="text-white hover:text-[#EED6C4] transition">
                    info@everestconsultrain.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start">
              <HelpCircle className="text-[#EED6C4] mr-2" size={20} />
              <h3 className="text-lg font-semibold text-white">FAQ's</h3>
            </div>
            <ul className="space-y-2">
              {[
                "Which ISO Standard is suitable?",
                "Why get ISO Certification?",
                "Benefits of ISO Certification",
              ].map((question, idx) => (
                <li key={idx} className="group cursor-pointer">
                  <div className="flex items-center justify-center md:justify-start">
                    <ChevronRight className="text-[#EED6C4] mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                    <span className="text-white group-hover:text-[#EED6C4] transition-colors">{question}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start">
              <LinkIcon className="text-[#EED6C4] mr-2" size={20} />
              <h3 className="text-lg font-semibold text-white">Links</h3>
            </div>
            <ul className="space-y-2">
              {[
                "ISO Related Links",
                "Health & Safety Links",
                "Environmental Links",
                "OHS Calculator",
                "CO2 Calculator",
              ].map((link, idx) => (
                <li key={idx} className="group cursor-pointer">
                  <div className="flex items-center justify-center md:justify-start">
                    <ChevronRight className="text-[#EED6C4] mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                    <span className="text-white group-hover:text-[#EED6C4] transition-colors">{link}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* YouTube Video + Social */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <Youtube className="text-[#EED6C4] mr-2" size={20} />
                <h3 className="text-lg font-semibold text-white">Our Videos</h3>
              </div>
              <div className="relative h-40 overflow-hidden rounded-lg border border-[#EED6C4]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed?listType=playlist&list=PLYOURPLAYLISTID&autoplay=0&mute=1&controls=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>

            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { icon: Facebook, color: "hover:bg-blue-600" },
                { icon: Twitter, color: "hover:bg-sky-500" },
                { icon: Instagram, color: "hover:bg-pink-600" },
                { icon: Linkedin, color: "hover:bg-blue-700" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`p-2 rounded-full bg-[#6B4F4F] text-white ${social.color} transition`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
       
      </div>
    </footer>
  );
};

export default Footer;