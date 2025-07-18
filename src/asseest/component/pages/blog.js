import React, { useState } from "react";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { getFbUserPages } from "../utilities/SocialMedia/AllApi"; // ✅ named import
import PageInfoCard from "../utilities/pageInfoCard";

const dummyFetch = async () => [];

const platformButtons = [
  { name: "Facebook", key: "fb", color: "bg-blue-600", icon: <Facebook className="mr-2" /> },
  { name: "Instagram", key: "insta", color: "bg-pink-500", icon: <Instagram className="mr-2" /> },
  { name: "YouTube", key: "yt", color: "bg-red-600", icon: <Youtube className="mr-2" /> },
  { name: "LinkedIn", key: "linkedin", color: "bg-blue-800", icon: <Linkedin className="mr-2" /> },
];

const platformApiMap = {
  fb: getFbUserPages,
  insta: dummyFetch,
  yt: dummyFetch,
  linkedin: dummyFetch,
};

export default function Blog() {
  const [activePlatform, setActivePlatform] = useState(null);
  const [pagesByPlatform, setPagesByPlatform] = useState({
    fb: [],
    insta: [],
    yt: [],
    linkedin: [],
  });
  const [selectedPageByPlatform, setSelectedPageByPlatform] = useState({
    fb: null,
    insta: null,
    yt: null,
    linkedin: null,
  });

  const [apiError, setApiError] = useState(""); // ⛔ for showing errors

  const handlePlatformClick = async (platformKey) => {
    setActivePlatform(platformKey);
    setApiError(""); // clear previous error

    if (pagesByPlatform[platformKey].length === 0) {
      const fetchFunction = platformApiMap[platformKey];
      if (!fetchFunction || typeof fetchFunction !== "function") {
        const msg = `No valid fetch function for platform: ${platformKey}`;
        console.warn(msg);
        setApiError(msg);
        return;
      }
      try {
        const pages = await fetchFunction();
        setPagesByPlatform((prev) => ({
          ...prev,
          [platformKey]: pages,
        }));
      } catch (error) {
        const errorMsg = error?.response?.data?.error?.message || error.message || "Unknown error";
        console.error(`Error fetching ${platformKey} pages:`, errorMsg);
        setApiError(`Error fetching ${platformKey} pages: ${errorMsg}`);
      }
    }
  };

  const handlePageSelect = (platformKey, pageId) => {

    const selectedPage = pagesByPlatform[platformKey].find((p) => p.id === pageId);
    setSelectedPageByPlatform((prev) => ({
      ...prev,
      [platformKey]: selectedPage,
    }));
    console.log("Selected Page Info:", { platform: platformKey, page: selectedPage });
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      {/* Error Display */}
      {apiError && (
        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline ml-2">{apiError}</span>
        </div>
      )}

      {/* Platform Buttons */}
      <div className="flex flex-wrap justify-around gap-4 mb-6">
        {platformButtons.map((btn) => (
          <button
            key={btn.key}
            onClick={() => handlePlatformClick(btn.key)}
            className={`${btn.color} text-white px-6 py-2 rounded flex items-center ${activePlatform === btn.key ? "ring-2 ring-yellow-400" : ""
              }`}
          >
            {btn.icon}
            {btn.name}
          </button>
        ))}
      </div>

      {/* Page Dropdown */}
      {activePlatform && pagesByPlatform[activePlatform].length > 0 && (
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">
            Select a page for {activePlatform.toUpperCase()}:
          </label>
          <select
            onChange={(e) => handlePageSelect(activePlatform, e.target.value)}
            className="w-full border px-4 py-2 rounded"
            value={selectedPageByPlatform[activePlatform]?.id || ""}
          >
            <option value="">-- Select Page --</option>
            {pagesByPlatform[activePlatform].map((page) => (
              <option key={page.id} value={page.id}>
                {page.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Selected Page Info */}
      {activePlatform && selectedPageByPlatform[activePlatform] && (
        <PageInfoCard
          platformKey={activePlatform}
          page={selectedPageByPlatform[activePlatform]}
        />
      )}
    </div>
  );
}
