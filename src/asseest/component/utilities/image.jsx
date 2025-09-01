import React from 'react';

const Image = ({ src, alt, caption }) => {
    return (
        <div className="w-full max-w-2xl mx-auto px-4 py-8">
            <figure className="bg-white rounded-xl shadow-lg overflow-hidden">
                 {caption && (
                    <figcaption className="text-center text-gray-700 p-4 text-lg font-medium border-b border-gray-200 bg-gray-50">
                        {caption}
                    </figcaption>
                )}
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto object-cover"
                   
                />
            </figure>
        </div>
    );
};

export default Image;

