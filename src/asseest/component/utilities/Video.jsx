import React from "react";

// The VideoPlayer component is now an arrow function and the default export
const VideoPlayer = () => {
  // Sample video data is now inside the component
  const videoDetails = {
    title: "Big Buck Bunny",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
    link: "https://peach.blender.org/"
  };


  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 px-4 py-8"
      style={{ fontFamily: '"Arial Narrow Bold", sans-serif' }}
    >
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold text-yellow-900 mb-6 text-center">
        {videoDetails.title}
      </h2>

      {/* Responsive Video Container */}
      <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
        <video
          className="w-full h-full object-cover"
          controls
          poster={videoDetails.poster}
          src={videoDetails.src}
          aria-label={videoDetails.title}
        >
          {/* Fallback source and message */}
          <source src={videoDetails.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Link to Real Page */}
      <a
        href={videoDetails.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-transform transform hover:scale-105"
      >
        Watch on Original Page
      </a>
    </div>
  );
};

export default VideoPlayer;

