import React, { useState, useMemo } from "react";
import { Facebook, Instagram, Youtube, Linkedin, ChevronRight, Loader2 } from "lucide-react";
import { getFbUserPages } from "../utilities/SocialMedia/AllApi";
import { UploadForm } from "../utilities/upload";

const dummyFetch = async () => {
  await new Promise(resolve => setTimeout(resolve, 800));
  return [];
};

const platformButtons = [
  {
    name: "Facebook",
    key: "fb",
    color: "from-blue-600 to-blue-800",
    hoverColor: "hover:from-blue-700 hover:to-blue-900",
    icon: <Facebook className="w-5 h-5" />,
    hasApi: true
  },
  {
    name: "Instagram",
    key: "insta",
    color: "from-fuchsia-600 to-pink-600",
    hoverColor: "hover:from-fuchsia-700 hover:to-pink-700",
    icon: <Instagram className="w-5 h-5" />,
    hasApi: false,
    disabledMessage: "Instagram API not available - requires Meta Business Verification"
  },
  {
    name: "YouTube",
    key: "yt",
    color: "from-red-600 to-red-800",
    hoverColor: "hover:from-red-700 hover:to-red-900",
    icon: <Youtube className="w-5 h-5" />,
    hasApi: false,
    disabledMessage: "YouTube API coming in Q4 2023"
  },
  {
    name: "LinkedIn",
    key: "linkedin",
    color: "from-sky-800 to-sky-950",
    hoverColor: "hover:from-sky-900 hover:to-sky-950",
    icon: <Linkedin className="w-5 h-5" />,
    hasApi: false,
    disabledMessage: "LinkedIn API requires partner status"
  },
];

const platformApiMap = {
  fb: getFbUserPages,
  yt: dummyFetch,
  linkedin: dummyFetch,
};

export default function Blog() {
  const [activePlatform, setActivePlatform] = useState(null);
  const [pagesByPlatform, setPagesByPlatform] = useState({ fb: [], yt: [], linkedin: [] });
  const [selectedPageByPlatform, setSelectedPageByPlatform] = useState({ fb: null, yt: null, linkedin: null });
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const selectedPage = useMemo(() => {
    return activePlatform ? selectedPageByPlatform[activePlatform] : null;
  }, [activePlatform, selectedPageByPlatform]);

  const handlePlatformClick = async (platformKey) => {
    const platform = platformButtons.find(btn => btn.key === platformKey);

    if (!platform?.hasApi) {
      setApiError(platform?.disabledMessage || `No API integration available for ${platform?.name}`);
      setActivePlatform(platformKey);
      return;
    }

    setActivePlatform(platformKey);
    setApiError("");

    if (pagesByPlatform[platformKey].length === 0) {
      const fetchFunction = platformApiMap[platformKey];
      if (!fetchFunction || typeof fetchFunction !== "function") {
        const msg = `No valid fetch function for platform: ${platformKey}`;
        console.warn(msg);
        setApiError(msg);
        return;
      }

      try {
        setLoading(true);
        const pages = await fetchFunction();
        setPagesByPlatform((prev) => ({
          ...prev,
          [platformKey]: pages,
        }));
      } catch (error) {
        const errorMsg = error?.response?.data?.error?.message || error.message || "Unknown error";
        console.error(`Error fetching ${platformKey} pages:`, errorMsg);
        setApiError(`Error fetching ${platformKey} pages: ${errorMsg}`);
      } finally {
        setLoading(false);
      }
    }
  };

  const handlePageSelect = (platformKey, pageId) => {
    const selectedPage = pagesByPlatform[platformKey].find((p) => p.id === pageId);
    setSelectedPageByPlatform((prev) => ({
      ...prev,
      [platformKey]: selectedPage,
    }));
  };

  

  const renderPlatformContent = () => {
    if (!activePlatform) {
      return (
        <div className="text-center mt-20">
          <ChevronRight className="w-12 h-12 mx-auto animate-pulse text-purple-400/50" />
          <p className="text-gray-400 mt-4">Select a platform to begin publishing your content</p>
        </div>
      );
    }

    const platform = platformButtons.find(btn => btn.key === activePlatform);

    if (!platform?.hasApi) {
      return (
        <div className="bg-gradient-to-r from-pink-900/80 to-red-800/80 border-l-4 border-pink-400 text-pink-100 p-8 rounded-lg shadow-lg mb-6 backdrop-blur-md">
          <p className="font-bold text-xl mb-2 flex items-center">
            <span className="bg-pink-700/50 p-2 rounded-lg mr-3">{platform?.icon}</span>
            API Not Integrated
          </p>
          <p className="opacity-90">{platform?.disabledMessage}</p>
        </div>
      );
    }

    if (loading) {
      return (
        <div className="flex justify-center items-center p-12 bg-gray-800/80 rounded-xl shadow-lg border border-gray-700/50 backdrop-blur-md">
          <div className="flex flex-col items-center">
            <Loader2 className="animate-spin w-12 h-12 text-blue-400 mb-4" />
            <p className="text-gray-300">Loading {platform?.name} pages...</p>
          </div>
        </div>
      );
    }

    const pages = pagesByPlatform[activePlatform];

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-xl shadow-lg border border-gray-700/50 backdrop-blur-md">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg mr-3">{platform.icon}</span>
            <span>Select {platform.name} Destination</span>
          </h3>

          <select
            onChange={(e) => handlePageSelect(activePlatform, e.target.value)}
            className="w-full bg-gray-700/80 border border-gray-600/50 text-white px-4 py-3 rounded-lg appearance-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
            value={selectedPage?.id || ""}
          >
            <option value="">-- Select {platform.name} Page --</option>
            {pages.map((page) => (
              <option key={page.id} value={page.id} className="bg-gray-800/80">
                {page.name} {page.username && `(${page.username})`}
              </option>
            ))}
          </select>
        </div>

        {selectedPage && (
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8 rounded-xl shadow-2xl border border-gray-700/50 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Create Post for {selectedPage.name}
            </h3>
            <UploadForm selectedPage={selectedPage} platform={activePlatform} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-950 via-black to-blue-950 text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-[-300px] left-[-200px] w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.2),_transparent)] rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(236,72,153,0.15),_transparent)] rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Social Media Publisher
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Premium content publishing across all your social platforms
          </p>
        </header>

        {apiError && (
          <div className="mb-8 bg-gradient-to-r from-red-900/80 to-pink-800/80 border-l-4 border-red-400 text-red-100 p-6 rounded-lg shadow-lg animate-pulse backdrop-blur-md">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="font-semibold">{apiError}</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {platformButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => handlePlatformClick(btn.key)}
              className={`relative bg-gradient-to-br ${btn.color} ${btn.hoverColor} text-white px-4 py-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${activePlatform === btn.key ? "ring-4 ring-purple-500/70 scale-105 z-10" : ""} ${!btn.hasApi ? "opacity-80 cursor-not-allowed grayscale-[30%]" : ""}`}
              disabled={!btn.hasApi}
              title={!btn.hasApi ? btn.disabledMessage : ""}
            >
              <div className="flex flex-col items-center">
                <div className="mb-3 p-3 bg-black/20 rounded-full">
                  {btn.icon}
                </div>
                <span className="font-bold">{btn.name}</span>
                {!btn.hasApi && (
                  <span className="text-xs mt-2 opacity-70 text-center">
                    Coming Soon
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="mb-12">
          {renderPlatformContent()}
        </div>
      </div>
    </div>
  );
}