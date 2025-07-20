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
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const platformOptions = [
  { key: "fb", label: "Facebook", icon: <FaFacebookF className="text-blue-600" />, color: "bg-blue-50" },
  { key: "yt", label: "YouTube", icon: <FaYoutube className="text-red-600" />, color: "bg-red-50" },
  { key: "insta", label: "Instagram", icon: <FaInstagram className="text-pink-500" />, color: "bg-pink-50" },
  { key: "linkedin", label: "LinkedIn", icon: <FaLinkedinIn className="text-blue-500" />, color: "bg-blue-50" },
  { key: "tiktok", label: "TikTok", icon: <FaTiktok className="text-black" />, color: "bg-gray-50" },
];

const ContentBoosting = () => {
  const [postsByDate, setPostsByDate] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState(platformOptions.map((p) => p.key));

  const formatDate = (isoString) => {
    if (!isoString) return "Unknown";
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

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

        setPostsByDate(grouped);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to fetch posts. Please try again later.");
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
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center items-center h-screen"
      >
        <div className="flex flex-col items-center">
          <Loader className="animate-spin w-8 h-8 text-green-600 mb-2" />
          <motion.span 
            className="text-green-700 font-medium"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Loading your social content...
          </motion.span>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex justify-center items-center h-screen text-red-600"
      >
        <div className="flex items-center bg-red-50 p-4 rounded-lg">
          <AlertTriangle className="w-6 h-6" />
          <span className="ml-2 font-semibold">{error}</span>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax */}
      <Parallax 
        bgImage="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
        strength={300}
        className="relative"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 py-24 px-4 text-center">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Social Content Hub
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white max-w-2xl mx-auto"
          >
            Manage and boost your content across all social platforms in one place
          </motion.p>
        </div>
      </Parallax>

      {/* Platform Filter Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Social Content</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Filter and manage posts from your connected platforms
          </p>
        </div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {platformOptions.map(({ key, label, icon, color }) => (
            <motion.div
              key={key}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <label className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${color} ${selectedPlatforms.includes(key) ? 'ring-2 ring-green-500' : ''}`}>
                <input
                  type="checkbox"
                  checked={selectedPlatforms.includes(key)}
                  onChange={() => togglePlatform(key)}
                  className="hidden"
                />
                <div className="text-xl">{icon}</div>
                <span className="font-medium text-gray-700">{label}</span>
              </label>
            </motion.div>
          ))}
        </motion.div>

        {/* Post Cards Grid */}
        {Object.entries(postsByDate).length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(postsByDate).map(([date, posts], index) => {
              const filtered = posts.filter((post) => selectedPlatforms.includes(post.platform));
              if (!filtered.length) return null;

              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
                >
                  <div className="bg-gradient-to-r from-green-600 to-green-800 p-4 text-white">
                    <h3 className="font-bold text-lg">{date}</h3>
                  </div>
                  
                  <div className="p-4 max-h-96 overflow-y-auto">
                    {filtered.map((post, idx) => (
                      <motion.div 
                        key={post.id || idx}
                        whileHover={{ x: 5 }}
                        className="mb-6 pb-4 border-b last:border-0"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {platformOptions.find(p => p.key === post.platform)?.icon}
                          <span className="text-sm font-medium text-gray-500">{post.pageName}</span>
                        </div>
                        
                        <p className="text-gray-800 mb-3">
                          {post.message || <span className="italic text-gray-400">No message content</span>}
                        </p>
                        
                        {post.full_picture && (
                          <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="rounded-md overflow-hidden mb-3"
                          >
                            <img
                              src={post.full_picture}
                              alt="Post"
                              className="w-full h-auto object-cover"
                            />
                          </motion.div>
                        )}
                        
                        <div className="flex justify-between items-center text-xs text-gray-400">
                          <span>ID: {post.id.slice(0, 8)}...</span>
                          <button className="text-green-600 hover:text-green-800 font-medium">
                            Boost Post
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 mb-4">No posts found for the selected platforms</div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Create New Post
            </button>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
};

export default ContentBoosting;