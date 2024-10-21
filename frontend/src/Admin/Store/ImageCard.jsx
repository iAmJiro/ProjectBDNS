import React, { useState } from 'react';

export default function ImageCard({ imageId, imageUrls, alt, name, description, price, categoryName, listImages, setListImages }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState(name);
    const [editDescription, setEditDescription] = useState(description);
    const [editPrice, setEditPrice] = useState(price);

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

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/image/edit/${imageId}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({
                name: editName,
                description: editDescription,
                price: editPrice
            })
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    setIsEditing(false);
                    const updatedImages = listImages.map(image =>
                        image.imageId === imageId
                            ? { ...image, name: editName, description: editDescription, price: editPrice }
                            : image
                    );
                    setListImages(updatedImages);
                } else {
                    console.error('Failed to edit the image');
                }
            })
            .catch(error => {
                console.error('Error editing image:', error);
            });
    };

    const handleCancel = () => {
        setEditName(name);
        setEditDescription(description);
        setEditPrice(price);
        setIsEditing(false);
    };

    return (
        <div className="max-w-sm bg-white dark:bg-gray-800 border border-gray-300 rounded-lg shadow-lg overflow-hidden">
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
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            className="w-full p-2 mb-2 border rounded"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                        />
                        <textarea
                            className="w-full p-2 mb-2 border rounded"
                            value={editDescription}
                            onChange={(e) => setEditDescription(e.target.value)}
                        />
                        <input
                            type="number"
                            className="w-full p-2 mb-2 border rounded"
                            value={editPrice}
                            onChange={(e) => setEditPrice(e.target.value)}
                        />
                        
                        <div className="flex justify-between mt-4">
                            
                            <button
                                onClick={handleCancel}
                                className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300"
                            >
                                Save
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">{name}</h5>
                        <p className="text-gray-700 text-sm mb-3 dark:text-gray-300 text-center">{description}</p>
                        <p className="text-lg font-semibold dark:text-white text-center text-gray-900">
                            ${typeof price === 'number' ? price.toFixed(2) : parseFloat(price).toFixed(2)}
                        </p>
                    </>
                )}

                {sessionStorage.getItem('userGroup') === '1' && !isEditing && (
                    <>
                        <button
                            onClick={handleEdit}
                            className="mt-4 w-full inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300"
                        >
                            Edit
                        </button>
                        <button
                            onClick={handleDelete}
                            className="mt-4 w-full inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300"
                        >
                            Delete
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
