// import React, { useState, useRef, useEffect } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import uploadPostToPage from "../utilities/fb/FBAPI.js"; // Make sure this is a default export

// const MAX_WIDTH = 1200;
// const MAX_HEIGHT = 630;
// const MAX_FILE_SIZE_MB = 8;
// const fonts = ["arial", "comic-sans", "courier-new", "georgia", "helvetica", "lucida"];

// // Register fonts
// const Font = ReactQuill.Quill.import("formats/font");
// Font.whitelist = fonts;
// ReactQuill.Quill.register(Font, true);

// // Custom gradient image blot
// const BlockEmbed = ReactQuill.Quill.import("blots/block/embed");
// class GradientImageBlot extends BlockEmbed {
//   static create(src) {
//     const node = super.create();
//     node.style.cssText = `
//       background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//       display: inline-block; padding: 8px; border-radius: 8px; 
//       max-width: ${MAX_WIDTH}px; max-height: ${MAX_HEIGHT}px; overflow: hidden;
//     `;
//     const img = document.createElement("img");
//     img.src = src;
//     img.style.cssText = "display: block; max-width: 100%; height: auto; border-radius: 4px;";
//     node.appendChild(img);
//     return node;
//   }
//   static value(node) {
//     return node.querySelector("img")?.src || "";
//   }
// }
// GradientImageBlot.blotName = "gradientImage";
// GradientImageBlot.tagName = "div";
// ReactQuill.Quill.register(GradientImageBlot);

// export default function AllPost({ posts = [], userId, token }) {
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const quillRef = useRef(null);

//   const handleImageUpload = () => {
//     const input = document.createElement("input");
//     input.type = "file";
//     input.accept = "image/*";
//     input.click();

//     input.onchange = () => {
//       const file = input.files?.[0];
//       if (!file) return;

//       const sizeMB = file.size / 1024 / 1024;
//       if (sizeMB > MAX_FILE_SIZE_MB) {
//         alert(`Max file size is ${MAX_FILE_SIZE_MB} MB.`);
//         return;
//       }

//       const img = new Image();
//       const url = URL.createObjectURL(file);
//       img.onload = () => {
//         if (img.width > MAX_WIDTH || img.height > MAX_HEIGHT) {
//           alert(`Max dimensions: ${MAX_WIDTH}x${MAX_HEIGHT}px. Yours: ${img.width}x${img.height}`);
//           URL.revokeObjectURL(url);
//           return;
//         }

//         const reader = new FileReader();
//         reader.onload = (e) => {
//           const quill = quillRef.current.getEditor();
//           const range = quill.getSelection(true);
//           quill.insertEmbed(range.index, "gradientImage", e.target.result);
//           quill.setSelection(range.index + 1);
//         };
//         reader.readAsDataURL(file);
//         URL.revokeObjectURL(url);
//       };
//       img.onerror = () => {
//         alert("Invalid image.");
//         URL.revokeObjectURL(url);
//       };
//       img.src = url;
//     };
//   };

//   const modules = {
//     toolbar: {
//       container: [
//         [{ font: fonts }],
//         [{ size: ["small", false, "large", "huge"] }],
//         ["bold", "italic", "underline", "strike"],
//         [{ color: [] }, { background: [] }],
//         [{ script: "sub" }, { script: "super" }],
//         [{ header: 1 }, { header: 2 }],
//         [{ list: "ordered" }, { list: "bullet" }],
//         [{ align: [] }],
//         ["link", "video", "image"],
//         ["clean"],
//       ],
//       handlers: { image: handleImageUpload },
//     },
//   };

//   const formats = [
//     "font", "size", "bold", "italic", "underline", "strike",
//     "color", "background", "script", "header",
//     "list", "bullet", "align", "link", "image", "video", "gradientImage",
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!message.trim()) {
//       alert("Please enter a message");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await uploadPostToPage(userId, token, message);
//       alert(`Post uploaded with ID: ${res.id}`);
//       setMessage("");
//     } catch (error) {
//       console.error("Upload error:", error);
//       alert("Failed to upload post");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     console.log("AllPost component received posts:", posts);
//   }, [posts]);

//   return (
//     <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
//       <form onSubmit={handleSubmit}>
//         <h2>Post a New Message</h2>
//         <ReactQuill
//           ref={quillRef}
//           theme="snow"
//           value={message}
//           onChange={setMessage}
//           modules={modules}
//           formats={formats}
//           placeholder="Write your message here..."
//           style={{ height: 350, marginBottom: 20 }}
//           readOnly={loading}
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           style={{ padding: "10px 20px", fontSize: 16 }}
//         >
//           {loading ? "Posting..." : "Post Message"}
//         </button>

//         <h3 style={{ marginTop: 40 }}>Preview:</h3>
//         <div
//           style={{
//             border: "1px solid #ccc",
//             padding: 20,
//             minHeight: 150,
//             whiteSpace: "pre-wrap",
//           }}
//           dangerouslySetInnerHTML={{ __html: message }}
//         />
//       </form>

//       <hr style={{ margin: "50px 0" }} />

//       <h2>All Posts</h2>
//       {posts.length === 0 ? (
//         <p>No posts available</p>
//       ) : (
//         posts.map((post) => (
//           <div
//             key={post.id}
//             style={{ marginBottom: 20, padding: 10, border: "1px solid #ddd" }}
//           >
//             <div dangerouslySetInnerHTML={{ __html: post.content }} />
//           </div>
//         ))
//       )}
//     </div>
//   );
// }
