import axios from "axios";

const API = "https://graph.facebook.com/v23.0";
const PAGE_ACCESS_TOKEN = "EAAKLuukcwaQBPBaZC1cc6WOu8ZCcgnIMXZC0HWa8TKThCuBItrY06FBQz4vT8lUbb8xwJCciyoQnHTTCQVZAYCu7UVbS4TWoipo7TZBZAzJPnkGUMZCPRgkWwEcTrls3ARIkUbShSNod1yslWNVTp9RgFClDfS0349KyFO5IMiROo6i3j94uNZANl5IQPTXzGAZDZD";

/**
 * Get all Facebook pages for the user.
 */

export const getFbUserPages = async () => {
  try {
    const res = await axios.get(`${API}/me/accounts`, {
      params: { access_token: PAGE_ACCESS_TOKEN },
    });
    return res.data.data;
  } catch (err) {
    console.error("Error fetching pages:", err.response?.data || err.message);
    throw err;
  }
};
/**
 * Get posts from a specific page.
 */
export const getPagePosts = async (pageId, pageAccessToken) => {
  try {
    const res = await axios.get(`${API}/${pageId}/posts`, {
      params: {
        access_token: pageAccessToken,
        fields: "id,message,full_picture,created_time",
      },
    });
    return res.data.data;
  } catch (err) {
    console.error(`Error fetching posts for page ${pageId}:`, err.response?.data || err.message);
    throw err;
  }
};

/**
 * Upload a new post to a Facebook page.
 */
export const UploadFbPost =  (formData) => {
  console.log("Uploading post to All API  page:",  formData);
  // try {
  //   const res = await axios.post(`${API}/${pageId}/feed`, null, {
  //     params: {
        
  //       access_token: accessToken,
  //     },
  //   });
  //   return res.data; // e.g., { id: "123456789" }
  // } catch (error) {
  //   console.error("Error uploading Facebook post:", error.response?.data || error.message);
  //   throw error;
  // }
};
