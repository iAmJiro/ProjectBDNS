import React from 'react';

export default function ImageCard({ imageId, src, alt, name, price, categoryName, listImages, setListImages }) {
    const handleDelete = () => {
        fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/image/delete/${imageId}`, {
            method: 'delete',
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(success => {
            if(success) {
                const newImages = listImages.filter(image => image.imageId !== imageId);
                setListImages(newImages);
            }
        })
        .catch(error => {
            console.error('Error deleting image:', error);
        });
    };

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={src} alt={alt} />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: ${price}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Category: {categoryName}</p>
                
                {sessionStorage.getItem('userGroup') === '1' && (
                    <button onClick={handleDelete} className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
}
