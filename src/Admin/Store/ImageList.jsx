import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import CreateImageForm from "./CreateImageForm";
import Navbar from "../../Components/Navbar";

export default function ImageList() {
  const [listImages, setListImages] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const categories = [
    { categoryId: 1, name: "Cake" },
    { categoryId: 2, name: "Cupcake" },
  ];

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/image/all`)
      .then((res) => res.json())
      .then((body) => setListImages(body));
  }, []);

  const groupImagesByCategory = (images) => {
    return images.reduce((acc, image) => {
      const categoryName = image.category.name;
      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }
      acc[categoryName].push(image);
      return acc;
    }, {});
  };

  const groupedImages = groupImagesByCategory(listImages);

  return (
    <>
      <Navbar />

      <div className="container mx-auto my-10 text-center">
        <h1 className="text-6xl mb-8">Gallery</h1>

        <p className="text-gray-600 text-3xl mb-12">
          "Cakes that are as stunning as they are delicious, crafted to
          perfection for every occasion!"
        </p>
      </div>

      <div className="container mx-auto my-8">
        <div className="flex justify-center">
          {sessionStorage.getItem("userGroup") === "1" && (
            <button
              className="btn text-2xl p-2 rounded hover:text-black bg-green-500 text-white my-4"
              onClick={() => setIsFormOpen(true)}
            >
              Create New Image
            </button>
          )}
        </div>

        <CreateImageForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          categories={categories}
        />

        {Object.keys(groupedImages).map((categoryName) => (
          <div key={categoryName} className="mb-10">
            {/* Category Title */}
            <h2 className="text-4xl font-bold mb-6 text-center">
              {categoryName}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 ml-10 gap-4">
              {groupedImages[categoryName].map((image) => (
                <ImageCard
                  key={image.imageId}
                  imageId={image.imageId}
                  imageUrls={image.imageUrls}
                  alt={image.alt}
                  name={image.name}
                  price={image.price}
                  description={image.description}
                  categoryName={categoryName}
                  listImages={listImages}
                  setListImages={setListImages}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
