import axios from "axios";
import { use, useState } from "react";


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



// Email API using Brevo (formerly Sendinblue)


// src/utilities/SocialMedia/useEmailAPI.js

const useEmailAPI = () => {
  const [status, setStatus] = useState("");

  const sendEmail = async (formData) => {
    const {
      name,
      organization,
      email,
      phone,
      address,
      country,
      message,
      selectedServices,
      customService,
    } = formData;

    console.log("Extracted formData:", name, selectedServices);

    // Build services object once
    const servicesObj = {};
    if (Array.isArray(selectedServices)) {
      selectedServices.forEach((s) => {
        servicesObj[s] = true;
      });
    }

    setStatus("Sending...");

    try {
      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "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", // 
        },
        body: JSON.stringify({
          sender: { email: "968aec001@smtp-brevo.com" },
          to: [
            { email: "eimcta.isodoc@gmail.com" }, // ✅ your company inbox
            { email: email },                         // Client email (confirmation copy)
          ],
          subject: `Client Inquiry from ${name} on ${new Date().toLocaleDateString()}`,
          htmlContent: `
            <h2>Client Inquiry Form</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Contact/Phone:</strong> ${phone}</p>
            <p><strong>Company/Institute:</strong> ${organization}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Service:</strong> ${customService || Object.keys(servicesObj).join(", ")}</p>
            <p><strong>Description:</strong> ${message}</p>
          `,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("✅ Email sent successfully!");
        console.log(res.ok)
        return { success: true, ...result };
      } else {
        setStatus("❌ Failed to send email.");
        return { success: false, ...result };
      }
    } catch (error) {
      console.error("Email send error:", error);
      setStatus("❌ Failed to send email.");
      console.log(error)
      return { success: false, error };
    }
  };

  return { status, sendEmail };
};

export default useEmailAPI;


// EmailAPI.js
