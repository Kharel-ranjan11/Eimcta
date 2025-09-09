import { useState, useEffect, useRef } from 'react';
import { Phone, MessageSquare, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

// You can replace these with your actual contact details
const WHATSAPP_LINK = "https://wa.me/1234567890"; // Use your WhatsApp number
const PHONE_NUMBER = "tel:+1234567890"; // Use your phone number
const MESSENGER_LINK = "https://m.me/your-username"; // Use your Facebook page username

// Main Component
const Chat = () => {
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
      {/* The style tag here is used to define the custom amber glow animation */}
      <style>{`
        @keyframes amber-glow {
          0%, 100% { 
            box-shadow: 0 0 5px #f59e0b, 0 0 10px #f59e0b, 0 0 15px #f59e0b; 
          }
          50% { 
            box-shadow: 0 0 20px #f59e0b, 0 0 30px #fbbf24, 0 0 40px #f59e0b; 
          }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-amber-glow {
          animation: amber-glow 2s infinite ease-in-out;
        }
        .animate-pulse-amber {
          animation: pulse 2s infinite, amber-glow 2s infinite ease-in-out;
        }
        .chat-option {
          transition: all 0.3s ease;
        }
        .chat-option:hover {
          transform: translateY(-5px) scale(1.1);
        }
      `}</style>

      {/* Floating Chat Container */}
      <div ref={chatRef} className="fixed bottom-5 left-5 z-50">
        {/* Chat Options: Appear when isOpen is true */}
        <div
          className={`flex flex-col items-center space-y-4 mb-4 transition-all duration-500 ease-in-out ${
            isOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        >
          {/* WhatsApp */}
          <Link 
            to={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="chat-option w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-amber-600 transform transition-all duration-300 animate-pulse-amber"
          >
            <FaWhatsapp size={28} />
          </Link>
          
          {/* Phone */}
          <Link 
            to={PHONE_NUMBER} 
            className="chat-option w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-amber-700 transform transition-all duration-300 animate-pulse-amber"
          >
            <Phone size={28} />
          </Link>
          
          {/* Messenger */}
          <Link 
            to={MESSENGER_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="chat-option w-14 h-14 bg-amber-700 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-amber-800 transform transition-all duration-300 animate-pulse-amber"
          >
            <FaFacebookMessenger size={28} />
          </Link>
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-2xl focus:outline-none hover:bg-amber-600 transition-colors duration-300 animate-amber-glow"
          aria-label="Toggle chat menu"
        >
          {isOpen ? (
            <X size={32} className="transform transition-transform duration-300 hover:rotate-90" />
          ) : (
            <MessageSquare size={32} className="transform transition-transform duration-300 hover:scale-110" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Chat;