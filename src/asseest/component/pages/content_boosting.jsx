import { useEffect, useState } from "react";
import { getPagePosts, getFbUserPages } from "../utilities/SocialMedia/AllApi.js";
import { AlertTriangle, Loader } from "lucide-react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const platformOptions = [
  { key: "fb", label: "Facebook", icon: <FaFacebookF className="text-blue-600" /> },
  { key: "yt", label: "YouTube", icon: <FaYoutube className="text-red-600" /> },
  { key: "insta", label: "Instagram", icon: <FaInstagram className="text-pink-500" /> },
  { key: "linkedin", label: "LinkedIn", icon: <FaLinkedinIn className="text-blue-500" /> },
  { key: "tiktok", label: "TikTok", icon: <FaTiktok className="text-black" /> },
];

const ContentBoosting = () => {
  const [postsByDate, setPostsByDate] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState(platformOptions.map((p) => p.key));

  const formatDate = (isoString) => (isoString ? isoString.split("T")[0] : "Unknown");

  useEffect(() => {
    const fetchFacebookPosts = async () => {
      try {
        const pages = await getFbUserPages();
        const selectedPage = pages[1];
        const pagePosts = await getPagePosts(selectedPage.id, selectedPage.access_token);

        const grouped = {};
        pagePosts.forEach((post) => {
          const date = formatDate(post.created_time);
          if (!grouped[date]) grouped[date] = [];

          grouped[date].push({
            ...post,
            pageName: selectedPage.name,
            platform: "fb",
          });
        });

        // Extend here to simulate other platform posts if needed
        setPostsByDate(grouped);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to fetch posts.");
        setLoading(false);
      }
    };

    fetchFacebookPosts();
  }, []);

  const togglePlatform = (key) => {
    setSelectedPlatforms((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin w-6 h-6 text-green-600" />
        <span className="ml-2 text-green-700 font-medium">Loading posts...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 text-red-600">
        <AlertTriangle className="w-6 h-6" />
        <span className="ml-2 font-semibold">{error}</span>
      </div>
    );
  }

  return (
    <>
      <div className="bg-green-800 p-4 text-white text-center text-2xl font-semibold shadow-md">
        Welcome to Social Content
      </div>

      {/* Platform Checkbox Section */}
      <div className="flex flex-wrap gap-4 items-center px-6 py-4">
        <span className="font-semibold text-gray-700">Select Platforms:</span>
        {platformOptions.map(({ key, label, icon }) => (
          <label key={key} className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={selectedPlatforms.includes(key)}
              onChange={() => togglePlatform(key)}
              className="accent-green-600"
            />
            {icon}
            <span className="text-gray-700">{label}</span>
          </label>
        ))}
      </div>

      {/* Post Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {Object.entries(postsByDate).map(([date, posts], index) => {
          const filtered = posts.filter((post) => selectedPlatforms.includes(post.platform));
          if (!filtered.length) return null;

          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 border border-gray-200 max-h-[360px] overflow-y-auto"
            >
              <div className="font-bold mb-3 text-green-700 text-lg">📅 {date}</div>

              {filtered.map((post, idx) => (
                <div key={post.id || idx} className="mb-4 border-b pb-3 last:border-none">
                  <div className="text-gray-800 mb-1">
                    {post.message || <span className="italic text-gray-400">No message</span>}
                  </div>
                  {post.full_picture && (
                    <img
                      src={post.full_picture}
                      alt="Post"
                      className="rounded-md mb-2 max-h-40 object-cover w-full"
                    />
                  )}
                  <div className="text-sm text-gray-500">ID: {post.id}</div>
                  <div className="text-xs text-gray-400">Page: {post.pageName}</div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContentBoosting;
