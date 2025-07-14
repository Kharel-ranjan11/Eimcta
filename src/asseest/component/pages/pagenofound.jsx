import React from "react";
import { Link } from "react-router-dom";

const NotFound = ({ image }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-4 text-center">
      {image ? (
        <img
          src={image}
          alt="Page not found"
          className="w-60 sm:w-72 
          md:w-80 lg:w-96 opacity-0 animate-fadeIn"
        />
      ) : (
        <svg
          className="w-60 sm:w-72 md:w-80 lg:w-96
           opacity-0 animate-fadeIn"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="200" fill="#e0f2fe" />
          <text
            x="50%"
            y="45%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="80"
            fontWeight="bold"
            fill="#3b82f6"
          >
            404
          </text>
          <text
            x="50%"
            y="60%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="20"
            fill="#64748b"
          >
            Page Not Found
          </text>
        </svg>
      )}

      
      <p className="text-md sm:text-lg mt-2 max-w-md text-gray-600">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
