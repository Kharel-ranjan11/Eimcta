import  { useState, useEffect, useRef } from 'react';
import { Phone, MessageSquare, X } from 'lucide-react';
import {Link} from 'react-router-dom';
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

// You can replace these with your actual contact details
const WHATSAPP_LINK = "https://wa.me/1234567890"; // Use your WhatsApp number
const PHONE_NUMBER = "tel:+1234567890"; // Use your phone number
const MESSENGER_LINK = "https://m.me/your-username"; // Use your Facebook page username

// Main Component
const Chat=()=> {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef(null);

  // Close the chat menu if clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [chatRef]);

  return (
    <div className="relative">
        
      {/* The style tag here is used to define the custom glow animation */}
      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px #0ea5e9, 0 0 10px #0ea5e9, 0 0 15px #0ea5e9; }
          50% { box-shadow: 0 0 15px #0ea5e9, 0 0 30px #0ea5e9, 0 0 45px #0ea5e9; }
        }
        .animate-glow {
          animation: glow 2.5s infinite ease-in-out;
        }
      `}</style>

      {/* Floating Chat Container */}
      <div ref={chatRef} className="fixed bottom-5 left-5 z-50">
        {/* Chat Options: Appear when isOpen is true */}
        <div
          className={`flex flex-col items-center space-y-4 mb-4 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        >
          {/* WhatsApp */}
          <Link to={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transform hover:scale-110 transition-all duration-200">
            <FaWhatsapp size={28} />
          </Link>
          {/* Phone */}
          <Link to={PHONE_NUMBER} className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 transform hover:scale-110 transition-all duration-200">
            <Phone size={28} />
          </Link>
          {/* Messenger */}
          <Link to={MESSENGER_LINK} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-purple-700 transform hover:scale-110 transition-all duration-200">
            <FaFacebookMessenger size={28} />
          </Link>
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-2xl focus:outline-none animate-glow"
          aria-label="Toggle chat menu"
        >
          {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
        </button>
      </div>
    </div>
  );
}
export default Chat;