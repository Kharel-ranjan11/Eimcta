import React, { useState, useRef, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadFbPost } from '../utilities/SocialMedia/AllApi'; // Adjust the import path as necessary
import { useEffect } from 'react';

export const UploadForm = memo(({ selectedPage }) => {
    useEffect(() => {
        console.log("UploadForm pagesByPlatform:", selectedPage);
    }, [selectedPage])
    const [input, setInput] = useState({
        title: '',
        message: '',
        files: []
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef(null);

    // Validation utility
    const validateForm = useCallback((input) => {
        const errors = {};
        if (!input.title.trim()) errors.title = 'Title is required';
        if (input.title.length > 200) errors.title = 'Title must be less than 200 characters';
        if (!input.message.trim()) errors.message = 'Message is required';
        if (input.message.length > 500) errors.message = 'Message must be less than 500 characters';
        if (input.files.length === 0) errors.files = 'At least one file is required';
        if (input.files.some(file => file.size > 100 * 1024 * 1024)) errors.files = 'Some files exceed 100MB limit';
        if (input.files.length > 10) errors.files = 'Maximum 10 files allowed';
        return errors;
    }, []);

    const handleFilesChange = useCallback((e) => {
        const newFiles = Array.from(e.target.files || []);
        if (newFiles.length === 0) return;

        const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/webm', 'application/pdf'];
        const validFiles = newFiles.filter(file => validTypes.includes(file.type));

        if (validFiles.length !== newFiles.length) {
            setErrors(prev => ({
                ...prev,
                files: 'Only images (JPEG, PNG, GIF), videos (MP4, WebM), and PDFs are allowed'
            }));
        } else {
            setErrors(prev => ({ ...prev, files: null }));
        }

        if (validFiles.length > 0) {
            setInput(prev => ({
                ...prev,
                files: [...prev.files, ...validFiles].slice(0, 10) // Limit to 10 files
            }));
        }

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }, []);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        const sanitizedValue = value.replace(/[<>]/g, '');

        setInput(prev => ({ ...prev, [name]: sanitizedValue }));

        if (name === 'title' && sanitizedValue.length > 200) {
            setErrors(prev => ({
                ...prev,
                title: 'Title must be less than 200 characters'
            }));
        } else if (name === 'message' && sanitizedValue.length > 500) {
            setErrors(prev => ({
                ...prev,
                message: 'Message must be less than 500 characters'
            }));
        } else {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    }, []);

    const removeFile = useCallback((index) => {
        setInput(prev => ({
            ...prev,
            files: prev.files.filter((_, i) => i !== index)
        }));
    }, []);

    const removeAllFiles = useCallback(() => {
        setInput(prev => ({
            ...prev,
            files: []
        }));
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        const newErrors = validateForm(input);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            document.getElementById('upload-form').classList.add('animate-shake');
            setTimeout(() => {
                document.getElementById('upload-form').classList.remove('animate-shake');
            }, 500);
            return;
        }

        setIsSubmitting(true);
        try {
            // Create FormData for file upload
            const formData = new FormData();
            formData.append('title', input.title);
            formData.append('message', input.message);
            input.files.forEach(file => formData.append('files', file));

            // Call UploadFbPost with an object containing the form data
            const response = UploadFbPost({
                selectedPage,
                title: input.title,
                message: input.message,
                files: input.files
            });

            if (!response.ok) throw new Error('Upload failed');
            console.log('Form submitted successfully');

            document.getElementById('success-checkmark').classList.remove('hidden');
            setTimeout(() => {
                setInput({ title: '', message: '', files: [] });
                setErrors({});
                setIsSubmitting(false);
                document.getElementById('success-checkmark').classList.add('hidden');
            }, 1500);
        } catch (error) {
            setIsSubmitting(false);
            setErrors(prev => ({ ...prev, form: `Error submitting form: ${error.message}` }));
        }
    }, [input, validateForm]);

    // Calculate total size
    const totalSize = input.files.reduce((sum, file) => sum + file.size, 0);
    const sizePercentage = Math.min((totalSize / (100 * 1024 * 1024)) * 100, 100);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
            <motion.form
                id="upload-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-3xl bg-white rounded-2xl shadow-xl
                 overflow-hidden p-8 space-y-6 border border-gray-100"
            >
                {/* Form header */}
                <div className="text-center">
                    <motion.h2
                        className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        File Upload Center
                    </motion.h2>
                    <motion.p
                        className="text-gray-500 mt-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Share your files with ease. Upload up to 10 files at once (max 100MB each)
                    </motion.p>
                </div>

                {/* Title Field */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                >
                    <div className="flex justify-between items-center">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title <span className="text-red-500">*</span>
                        </label>
                        <span className={`text-xs ${input.title.length > 200 ? 'text-red-500' : 'text-gray-400'}`}>
                            {input.title.length}/200
                        </span>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={input.title}
                            onChange={handleChange}
                            placeholder="Enter a descriptive title"
                            className={`w-full px-4 py-3 rounded-xl border ${errors.title ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'} focus:ring-2 focus:outline-none transition`}
                        />
                        {errors.title && (
                            <motion.div
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute -bottom-5 left-0 text-red-500 text-xs"
                            >
                                {errors.title}
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* Description Field */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-2"
                >
                    <div className="flex justify-between items-center">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Description <span className="text-red-500">*</span>
                        </label>
                        <span className={`text-xs ${input.message.length > 500 ? 'text-red-500' : 'text-gray-400'}`}>
                            {input.message.length}/500
                        </span>
                    </div>
                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            value={input.message}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Describe your files (what they contain, purpose, etc.)"
                            className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'} focus:ring-2 focus:outline-none transition`}
                        />
                        {errors.message && (
                            <motion.div
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute -bottom-5 left-0 text-red-500 text-xs"
                            >
                                {errors.message}
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* File Upload */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-3"
                >
                    <label className="block text-sm font-medium text-gray-700">
                        Files <span className="text-red-500">*</span> (Images, Videos, or PDFs)
                    </label>

                    <motion.label
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex flex-col w-full min-h-40 border-2 border-dashed border-gray-300 rounded-2xl hover:bg-gray-50 transition cursor-pointer relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        <div className="flex flex-col items-center justify-center h-full p-6 text-center relative z-10">
                            <svg className="w-12 h-12 mb-3 text-gray-400 group-hover:text-blue-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="text-sm text-gray-500 group-hover:text-blue-600 transition">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-400 mt-1 group-hover:text-gray-500 transition">
                                JPEG, PNG, GIF, MP4, WebM, PDF (Max 10 files, 100MB each)
                            </p>
                        </div>
                        <input
                            ref={fileInputRef}
                            name="files"
                            type="file"
                            onChange={handleFilesChange}
                            className="hidden"
                            multiple
                            accept="image/jpeg,image/png,image/gif,video/mp4,video/webm,application/pdf"
                        />
                    </motion.label>

                    {/* File summary */}
                    {input.files.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-4 space-y-3"
                        >
                            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                                <h3 className="text-sm font-medium text-gray-700">
                                    {input.files.length} file{input.files.length !== 1 ? 's' : ''} selected
                                </h3>
                                <button
                                    type="button"
                                    onClick={removeAllFiles}
                                    className="text-xs text-red-500 hover:text-red-700 font-medium flex items-center"
                                >
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Clear All
                                </button>
                            </div>

                            {/* Size indicator */}
                            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                                <div
                                    className={`h-2.5 rounded-full transition-all duration-500 ${sizePercentage >= 90 ? 'bg-red-500' : sizePercentage >= 70 ? 'bg-yellow-500' : 'bg-blue-500'}`}
                                    style={{ width: `${sizePercentage}%` }}
                                ></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 px-1">
                                <span>Total size: {(totalSize / 1024 / 1024).toFixed(2)}MB</span>
                                <span>Max: 100MB per file</span>
                            </div>

                            {/* File type breakdown */}
                            <div className="grid grid-cols-3 gap-2 text-xs px-1">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                                    <span>
                                        {input.files.filter(f => f.type.startsWith('image/')).length} image{input.files.filter(f => f.type.startsWith('image/')).length !== 1 ? 's' : ''}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                                    <span>
                                        {input.files.filter(f => f.type.startsWith('video/')).length} video{input.files.filter(f => f.type.startsWith('video/')).length !== 1 ? 's' : ''}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                    <span>
                                        {input.files.filter(f => f.type === 'application/pdf').length} PDF{input.files.filter(f => f.type === 'application/pdf').length !== 1 ? 's' : ''}
                                    </span>
                                </div>
                            </div>

                            {/* Image previews */}
                            <div className="mt-4">
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Preview</h4>
                                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
                                    {input.files.map((file, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="relative group"
                                        >
                                            {file.type.startsWith('image/') ? (
                                                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                                                    <img
                                                        src={URL.createObjectURL(file)}
                                                        alt={`Preview ${file.name}`}
                                                        className="object-cover w-full h-full"
                                                    />
                                                </div>
                                            ) : file.type.startsWith('video/') ? (
                                                <div className="aspect-square flex items-center justify-center bg-gray-100 rounded-lg">
                                                    <div className="text-center p-2">
                                                        <svg className="w-8 h-8 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                        </svg>
                                                        <span className="text-xs text-gray-500 truncate block">{file.name}</span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="aspect-square flex items-center justify-center bg-gray-100 rounded-lg">
                                                    <div className="text-center p-2">
                                                        <svg className="w-8 h-8 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                        </svg>
                                                        <span className="text-xs text-gray-500 truncate block">{file.name}</span>
                                                    </div>
                                                </div>
                                            )}
                                            <button
                                                type="button"
                                                onClick={() => removeFile(index)}
                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-600"
                                            >
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 truncate opacity-0 group-hover:opacity-100 transition-opacity">
                                                {file.name}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    <AnimatePresence>
                        {errors.files && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-red-500 text-xs mt-1"
                            >
                                {errors.files}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                    className="relative pt-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <button
                        type="submit"
                        disabled={isSubmitting || input.files.length === 0}
                        className={`w-full py-4 px-6 rounded-xl font-medium text-white transition-all duration-300 relative overflow-hidden ${isSubmitting
                            ? 'bg-blue-400 cursor-not-allowed'
                            : input.files.length === 0
                                ? 'bg-gray-300 cursor-not-allowed'
                                : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl'
                            }`}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Uploading {input.files.length} file{input.files.length !== 1 ? 's' : ''}...
                            </span>
                        ) : (
                            <span className="flex items-center justify-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                {input.files.length > 0
                                    ? `Upload ${input.files.length} File${input.files.length !== 1 ? 's' : ''}`
                                    : 'Select Files to Upload'}
                            </span>
                        )}
                    </button>

                    {/* Success checkmark */}
                    <div id="success-checkmark" className="hidden absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 rounded-xl">
                        <svg className="w-16 h-16 text-green-500 animate-checkmark" viewBox="0 0 52 52">
                            <circle className="stroke-green-500" cx="26" cy="26" r="25" fill="none" strokeWidth="2" />
                            <path className="stroke-green-500" fill="none" strokeWidth="4" strokeLinecap="round" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                    </div>
                </motion.div>

                {/* Form error */}
                {errors.form && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm text-center p-3 bg-red-50 rounded-lg"
                    >
                        {errors.form}
                    </motion.div>
                )}
            </motion.form>

            <style jsx global>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    20%, 60% { transform: translateX(-5px); }
                    40%, 80% { transform: translateX(5px); }
                }
                .animate-shake {
                    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
                }
                @keyframes checkmark {
                    0% { stroke-dashoffset: 100; opacity: 0; }
                    50% { opacity: 1; }
                    100% { stroke-dashoffset: 0; opacity: 1; }
                }
                .animate-checkmark path {
                    stroke-dasharray: 100;
                    stroke-dashoffset: 100;
                    animation: checkmark 0.7s ease-out forwards;
                }
            `}</style>
        </div>
    );
})