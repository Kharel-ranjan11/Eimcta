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
export const UploadFbPost = async (formData) => {
  const { selectedPage, title, description, files } = formData;
  console.log("Uploading post to Facebook page:", selectedPage.id, selectedPage.name, selectedPage.access_token);
  try {
    const res = await axios.post(`${API}/${selectedPage.id}/feed`, null, {
      params: {

        access_token: selectedPage.access_token,
      },
    });
    return {
      success: true,
      message: `✅ Post uploaded successfully to "${selectedPage.name}"`,
      data: res.data, // includes the post ID
    };
    // e.g., { id: "123456789" }
  } catch (error) {
    return {
      error: true,
      message: ` Failed to upload post: ${error}`,
    };
    ;
  }
};
