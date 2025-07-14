import React, { useState } from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom"; // required if using react-router for internal pages

const TopContactBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full bg-gray-100 py-4 px-6 flex flex-col md:flex-row items-center justify-center gap-6 shadow-md">
      
      {/* DIV 1: Search Box */}
      <div className="relative w-full md:w-1/2 flex justify-center transition-all duration-500">
        <input
          type="text"
          placeholder="Search..."
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => setIsFocused(e.target.value ? true : false)}
          className={`w-full md:w-3/4 px-5 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-500 ease-in-out ${
            isFocused ? "shadow-lg" : "shadow-sm"
          }`}
        />
      </div>

      {/* DIV 2: Icons with Links */}
      <div className="flex flex-wrap gap-4 items-center justify-center text-gray-800">

        {/* Get in Touch → internal page */}
        <Link
          to="/contact-form"
          className="group relative flex flex-col items-center cursor-pointer"
        >
          <div className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-all duration-300">
            <MessageSquare className="h-6 w-6 text-blue-700 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="absolute bottom-full mb-2 text-xs
           text-white bg-blue-600 border-1 border-blue-400 p-2 shadow-lg rounded-lg font-medium whitespace-nowrap opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
            Get in Touch
          </span>
        </Link>

        {/* Phone → tel link */}
        <a
          href="tel:+9779800000000"
          className="group relative flex flex-col items-center cursor-pointer"
        >
          <div className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-all duration-300">
            <Phone className="h-6 w-6 text-green-700 transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <span className="absolute bottom-full mb-2 
          text-xs  text-white bg-green-600 border-1 border-green-400 p-2 shadow-lg rounded-lg font-medium whitespace-nowrap opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
            +977-9800000000
          </span>
        </a>

        {/* Email → mailto link */}
        <a
          href="mailto:email@example.com"
          className="group relative flex flex-col items-center cursor-pointer"
        >
          <div className="bg-red-100 p-3 rounded-full hover:bg-red-200 transition-all duration-300">
            <Mail className="h-6 w-6 text-red-700 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="absolute bottom-full
           mb-2 text-xs 
           text-white bg-red-600 border-1 border-red-400 p-2 shadow-lg rounded-lg
            font-medium 
            whitespace-nowrap
             opacity-0
              scale-95
               group-hover:opacity-100
                group-hover:scale-100
                 transition-all
                  duration-300">
            email@example.com
          </span>
        </a>
      </div>
    </div>
  );
};

export default TopContactBar;
