const VideoPlayer = ({ title, src, link }) => {
  // Convert the watch link to an embeddable link for the iframe
  const embedSrc = src.replace('watch?v=', 'embed/').replace('&t=', '?start=');

  return (
    <div
      className="flex flex-col items-center justify-center w-full  px-4 py-12 min-h-screen"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="w-full max-w-4xl">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center px-4">
          {title}
        </h2>

        {/* Responsive Video Container */}
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl  relative">
          <iframe
            className="w-full h-full"
            src={embedSrc}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            aria-label={`Embedded YouTube video: ${title}`}
          ></iframe>
          
          {/* Loading indicator */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 opacity-0 transition-opacity duration-300 pointer-events-none iframe-loading">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
        {/* Link to Original Page */}
        <div className="mt-8 text-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-amber-600 hover:bg-amber-700 
             text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all transform hover:scale-105 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;