import React, { useState } from 'react';

export default function ImageCard({ imageId, imageUrls, alt, name, description, price, categoryName, listImages, setListImages }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDelete = () => {
        fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/image/delete/${imageId}`, {
            method: 'delete',
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(success => {
            if (success) {
                const newImages = listImages.filter(image => image.imageId !== imageId);
                setListImages(newImages);
            }
        })
        .catch(error => {
            console.error('Error deleting image:', error);
        });
    };

    const handlePrevClick = () => {
        const prevIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
        setCurrentIndex(prevIndex);
    };

    const handleNextClick = () => {
        const nextIndex = (currentIndex + 1) % imageUrls.length;
        setCurrentIndex(nextIndex);
    };

    return (
        <div className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
            <div className="carousel w-full relative">
                <div className="carousel-item w-full">
                    <img src={imageUrls[currentIndex]} alt={alt || name} className="w-full h-48 object-cover" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <button onClick={handlePrevClick} className="btn btn-circle">❮</button>
                    <button onClick={handleNextClick} className="btn btn-circle">❯</button>
                </div>
            </div>

            <div className="p-4">
                <h5 className="text-2xl font-bold text-gray-900 mb-2 text-center">{name}</h5>
                <p className="text-gray-700 text-sm mb-3 text-center">{description}</p>
                <p className="text-lg font-semibold text-center text-gray-900">${price.toFixed(2)}</p>
                {sessionStorage.getItem('userGroup') === '1' && (
                    <button
                        onClick={handleDelete}
                        className="mt-4 w-full inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300"
                    >
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
}
