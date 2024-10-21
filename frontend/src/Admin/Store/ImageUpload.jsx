import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function ImageUpload({ onImageUpload }) {
  const [uploadedImage, setUploadedImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    uploadImage(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const uploadImage = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/image/upload`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setUploadedImage(data.url);
        onImageUpload(data.url); // Send the uploaded image URL to the parent component
      })
      .catch((error) => console.error("Error uploading image:", error));
  };

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex justify-center items-center cursor-pointer"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
      {uploadedImage && (
        <div className="mt-4">
          <img
            src={uploadedImage}
            alt="Uploaded"
            className="h-48 w-48 object-cover"
          />
        </div>
      )}
    </div>
  );
}
