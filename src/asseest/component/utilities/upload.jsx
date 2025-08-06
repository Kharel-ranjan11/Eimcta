import React, { useState } from 'react';

export const UploadForm = () => {
    const [input, setInput] = useState({ 
        title: '', 
        message: '', 
        file: null 
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        
        if (name === 'file') {
            const file = files[0];
            
            // Validate file type
            if (file) {
                const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/webm', 'application/pdf'];
                if (!validTypes.includes(file.type)) {
                    setErrors(prev => ({
                        ...prev,
                        file: 'Only images (JPEG, PNG, GIF), videos (MP4, WebM), and PDFs are allowed'
                    }));
                    return;
                }
                
                // Create preview for images
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        setPreview(reader.result);
                    };
                    reader.readAsDataURL(file);
                } else {
                    setPreview(null);
                }
                
                setErrors(prev => ({ ...prev, file: null }));
                setInput(prev => ({ ...prev, [name]: file }));
            }
        } else {
            setInput(prev => ({ ...prev, [name]: value }));
            
            // Simple validation for other fields
            if (name === 'title' && value.length > 50) {
                setErrors(prev => ({
                    ...prev,
                    title: 'Title must be less than 50 characters'
                }));
            } else if (name === 'message' && value.length > 500) {
                setErrors(prev => ({
                    ...prev,
                    message: 'Message must be less than 500 characters'
                }));
            } else {
                setErrors(prev => ({ ...prev, [name]: null }));
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate all fields before submission
        const newErrors = {};
        if (!input.title.trim()) newErrors.title = 'Title is required';
        if (!input.message.trim()) newErrors.message = 'Message is required';
        if (!input.file) newErrors.file = 'File is required';
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        
        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
            console.log("Form submitted", input);
            setIsSubmitting(false);
            // Reset form after submission
            setInput({ title: '', message: '', file: null });
            setPreview(null);
            setErrors({});
            alert('Form submitted successfully!');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <form 
                onSubmit={handleSubmit} 
                className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden p-6 space-y-6"
            >
                <h2 className="text-2xl font-bold text-gray-800 text-center">Upload Content</h2>
                
                {/* Title Field */}
                <div className="space-y-2">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        name="title"
                        value={input.title}
                        onChange={handleChange}
                        type="text"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                            errors.title ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter a descriptive title..."
                        maxLength="50"
                    />
                    {errors.title && (
                        <p className="text-red-500 text-xs mt-1">{errors.title}</p>
                    )}
                    <p className="text-xs text-gray-500 text-right">
                        {input.title.length}/50 characters
                    </p>
                </div>
                
                {/* Message Field */}
                <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="message"
                        value={input.message}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                            errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your message here..."
                        maxLength="500"
                    />
                    {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                    <p className="text-xs text-gray-500 text-right">
                        {input.message.length}/500 characters
                    </p>
                </div>
                
                {/* File Upload */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        File <span className="text-red-500">*</span> (Image, Video, or PDF)
                    </label>
                    <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col w-full h-32 border-2 border-dashed rounded-lg hover:bg-gray-50 hover:border-gray-300 transition cursor-pointer">
                            <div className="flex flex-col items-center justify-center pt-7">
                                {preview ? (
                                    <img 
                                        src={preview} 
                                        alt="Preview" 
                                        className="h-20 object-contain mb-2"
                                    />
                                ) : (
                                    <svg
                                        className="w-8 h-8 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                        ></path>
                                    </svg>
                                )}
                                <p className="text-sm text-gray-500 text-center">
                                    <span className="font-semibold text-blue-500">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500">
                                    Images (JPEG, PNG, GIF), Videos (MP4, WebM), or PDFs
                                </p>
                            </div>
                            <input 
                                name="file" 
                                type="file" 
                                onChange={handleChange}
                                className="hidden"
                                accept="image/jpeg,image/png,image/gif,video/mp4,video/webm,application/pdf"
                            />
                        </label>
                    </div>
                    {input.file && (
                        <p className="text-sm text-gray-600 truncate">
                            Selected: {input.file.name}
                        </p>
                    )}
                    {errors.file && (
                        <p className="text-red-500 text-xs mt-1">{errors.file}</p>
                    )}
                </div>
                
                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded-lg font-medium text-white transition ${
                        isSubmitting 
                            ? 'bg-blue-400 cursor-not-allowed' 
                            : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                    }`}
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                        </span>
                    ) : (
                        'Submit'
                    )}
                </button>
            </form>
        </div>
    );
};