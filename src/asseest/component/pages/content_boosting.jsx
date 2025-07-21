import { useEffect, useState } from "react";
import { getPagePosts, getFbUserPages } from "../utilities/SocialMedia/AllApi.js";
import { AlertTriangle, Loader, Plus, Filter, Calendar } from "lucide-react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Parallax } from "react-parallax";

const platformOptions = [
  { key: "fb", label: "Facebook", icon: <FaFacebookF className="text-blue-600" />, color: "bg-blue-50", border: "border-blue-200" },
  { key: "yt", label: "YouTube", icon: <FaYoutube className="text-red-600" />, color: "bg-red-50", border: "border-red-200" },
  { key: "insta", label: "Instagram", icon: <FaInstagram className="text-pink-500" />, color: "bg-pink-50", border: "border-pink-200" },
  { key: "linkedin", label: "LinkedIn", icon: <FaLinkedinIn className="text-blue-500" />, color: "bg-blue-50", border: "border-blue-200" },
  { key: "tiktok", label: "TikTok", icon: <FaTiktok className="text-black" />, color: "bg-gray-50", border: "border-gray-200" },
];

const ContentBoosting = () => {
  const [postsByDate, setPostsByDate] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState(platformOptions.map((p) => p.key));
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [dateRange, setDateRange] = useState({ start: null, end: null });

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

  const getShortDate = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  useEffect(() => {
    const fetchFacebookPosts = async () => {
      try {
        setLoading(true);
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
            shortDate: getShortDate(post.created_time),
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

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  const filteredPosts = Object.entries(postsByDate).reduce((acc, [date, posts]) => {
    const filtered = posts.filter((post) => {
      const platformMatch = selectedPlatforms.includes(post.platform);
      const searchMatch = post.message?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.pageName.toLowerCase().includes(searchQuery.toLowerCase());
      const dateMatch = dateRange.start && dateRange.end 
        ? new Date(post.created_time) >= new Date(dateRange.start) && 
          new Date(post.created_time) <= new Date(dateRange.end)
        : true;
      return platformMatch && searchMatch && dateMatch;
    });

    if (filtered.length > 0) {
      acc[date] = filtered;
    }

    return acc;
  }, {});

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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Your Social Content</h2>
            <p className="text-gray-600 mt-1">
              {Object.values(filteredPosts).flat().length} posts found
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            
            <button
              onClick={toggleFilters}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${showFilters ? 'bg-green-600 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Plus className="w-5 h-5" />
              <span>New Post</span>
            </button>
          </div>
        </div>

        {/* Filters Section */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-8 overflow-hidden"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-medium text-lg text-gray-800 mb-4">Filter Options</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Platform Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Platforms
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {platformOptions.map(({ key, label, icon, color, border }) => (
                        <motion.button
                          key={key}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => togglePlatform(key)}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${color} ${border} ${selectedPlatforms.includes(key) ? 'ring-2 ring-green-500' : ''}`}
                        >
                          <div className="text-lg">{icon}</div>
                          <span className="text-sm font-medium text-gray-700">{label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Date Range Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date Range
                    </label>
                    <div className="flex gap-2">
                      <div className="relative flex-grow">
                        <input
                          type="date"
                          value={dateRange.start || ''}
                          onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                        <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                      <span className="flex items-center text-gray-400">to</span>
                      <div className="relative flex-grow">
                        <input
                          type="date"
                          value={dateRange.end || ''}
                          onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                        <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Reset Filters */}
                  <div className="flex items-end">
                    <button
                      onClick={() => {
                        setSelectedPlatforms(platformOptions.map(p => p.key));
                        setSearchQuery("");
                        setDateRange({ start: null, end: null });
                      }}
                      className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      Reset all filters
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Grid */}
        {Object.entries(filteredPosts).length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(filteredPosts).map(([date, posts], index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="bg-gradient-to-r from-green-600 to-green-800 p-4 text-white flex justify-between items-center">
                  <h3 className="font-bold text-lg">{date}</h3>
                  <span className="bg-white/20 px-2 py-1 rounded-md text-sm">
                    {posts.length} {posts.length === 1 ? 'post' : 'posts'}
                  </span>
                </div>
                
                <div className="p-4 max-h-96 overflow-y-auto">
                  {posts.map((post, idx) => (
                    <motion.div 
                      key={post.id || idx}
                      whileHover={{ x: 3 }}
                      className="mb-6 pb-4 border-b last:border-0 group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {platformOptions.find(p => p.key === post.platform)?.icon}
                          <span className="text-sm font-medium text-gray-500">{post.pageName}</span>
                        </div>
                        <span className="text-xs text-gray-400">{post.shortDate}</span>
                      </div>
                      
                      <p className="text-gray-800 mb-3 line-clamp-3 group-hover:line-clamp-none">
                        {post.message || <span className="italic text-gray-400">No message content</span>}
                      </p>
                      
                      {post.full_picture && (
                        <motion.div 
                          whileHover={{ scale: 1.01 }}
                          className="rounded-md overflow-hidden mb-3"
                        >
                          <img
                            src={post.full_picture}
                            alt="Post"
                            className="w-full h-auto object-cover"
                            loading="lazy"
                          />
                        </motion.div>
                      )}
                      
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <button className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded hover:bg-green-100 transition-colors">
                            Analytics
                          </button>
                          <button className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors">
                            Comments
                          </button>
                        </div>
                        <button className="text-green-600 hover:text-green-800 font-medium text-sm">
                          Boost Post
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white rounded-xl border border-gray-200"
          >
            <div className="text-gray-500 mb-4">No posts match your filters</div>
            <button 
              onClick={() => {
                setSelectedPlatforms(platformOptions.map(p => p.key));
                setSearchQuery("");
                setDateRange({ start: null, end: null });
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto"
            >
              <Filter className="w-4 h-4" />
              <span>Reset filters</span>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ContentBoosting;