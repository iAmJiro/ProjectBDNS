import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateImageForm({ isOpen, onClose }) {
    const navigate = useNavigate();
    const srcInput = useRef('');
    const altInput = useRef('');
    const nameInput = useRef('');
    const priceInput = useRef('');
    const categoryIdInput = useRef('');

    const submitFormHandler = () => {
        const newImageRequest = {
            src: srcInput.current.value,
            alt: altInput.current.value,
            name: nameInput.current.value,
            price: parseFloat(priceInput.current.value),
            categoryId: parseInt(categoryIdInput.current.value)
        };

        fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/image/create`, {
            method: 'post',
            body: JSON.stringify(newImageRequest),
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(success => {
            if(success) navigate(0); // Refresh the page
        });
    };

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-1/3">
                <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-lg font-semibold">Create New Image</h3>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">&times;</button>
                </div>
                <div className="p-4">
                    <input ref={srcInput} placeholder="Image Src" className="mt-4 p-2 border rounded w-full" />
                    <input ref={altInput} placeholder="Alt Text" className="mt-4 p-2 border rounded w-full" />
                    <input ref={nameInput} placeholder="Name" className="mt-4 p-2 border rounded w-full" />
                    <input ref={priceInput} type="number" placeholder="Price" className="mt-4 p-2 border rounded w-full" />
                    <input ref={categoryIdInput} type="number" placeholder="Category ID" className="mt-4 p-2 border rounded w-full" />
                </div>
                <div className="flex justify-end p-4 border-t">
                    <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Close</button>
                    <button onClick={submitFormHandler}  className="bg-green-500 text-white px-4 py-2 rounded">Create</button>
                </div>
            </div>
        </div>
    );
}
