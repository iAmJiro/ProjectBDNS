import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';

const CreateImageForm = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const imageName = useRef('');
  const imageDescription = useRef('');
  const imagePrice = useRef('');
  const categoryId = useRef('');

  const [uploadedImages, setUploadedImages] = useState([]); 
  const [uploadError, setUploadError] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = (acceptedFiles) => {
    setIsUploading(true);
    setUploadError('');

    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);

    fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/image/upload`, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.url) {
          setUploadedImages((prevFiles) => [...prevFiles, data.url]); 
        } else {
          setUploadError('Failed to upload image.');
        }
        setIsUploading(false);
      })
      .catch((err) => {
        console.error('Error uploading image:', err);
        setUploadError('Failed to upload image.');
        setIsUploading(false);
      });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const SubmitFormHandler = () => {
    const name = imageName.current.value;
    const description = imageDescription.current.value;
    const price = parseFloat(imagePrice.current.value);
    const category = parseInt(categoryId.current.value);

    const newImageRequest = {
      name,
      description,
      price,
      imageUrls: uploadedImages, 
      categoryId: category,
    };

    fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/image/create`, {
      method: 'POST',
      body: JSON.stringify(newImageRequest),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) navigate(0); 
      })
      .catch((error) => {
        console.error('Error creating image:', error);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md w-1/3">
        <h2 className="text-2xl font-bold mb-4">Create New Product</h2>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Images
          </label>
        <div {...getRootProps()} className="p-4 border-2 border-dashed rounded">
          <input {...getInputProps()} />
          {isUploading ? (
            <p>Uploading...</p>
          ) : (
            <p>Drag 'n' drop some images here, or click to select images</p>
          )}
        </div>
        {uploadError && <p className="text-red-500">{uploadError}</p>}

        <div className="flex flex-wrap gap-2 mb-4">
          {uploadedImages.map((url, index) => (
            <p key={index} className="text-gray-700 dark:text-white">
              {url.split('/').pop()} 
            </p>
          ))}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={imageName}
            placeholder="Product Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <input
            type="text"
            id="description"
            ref={imageDescription}
            placeholder="Product Description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            ref={imagePrice}
            placeholder="Product Price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="categoryId">
            Category
          </label>
          <select
            id="categoryId"
            ref={categoryId}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Click to Select Category</option>
            <option value="1">Cake</option>
            <option value="2">Cupcake</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Close
          </button>
          <button
            type="button"
            onClick={SubmitFormHandler}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Create Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateImageForm;
