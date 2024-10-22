import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import CreateImageForm from "./CreateImageForm";
import Navbar from "../../Components/Navbar";
import { motion } from "framer-motion";

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
      <div
        className="mt-96 absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <div className="container mx-auto my-10 text-center">
          <h1 className="text-5xl font-bold dark:text-white mb-8 min-h-full">
            Gallery
          </h1>

          <p className="text-gray-600 dark:text-white text-1xl mb-12">
            "Cakes that are as stunning as they are delicious, crafted to
            perfection for every occasion!"
          </p>
        </div>
      </motion.div>

      <div className="container mx-auto my-8">
        <div className="flex justify-center">
          {sessionStorage.getItem("userGroup") === "1" && (
            <button
              className="btn text-2xl p-2 rounded hover:text-black bg-green-500 text-white my-4"
              onClick={() => setIsFormOpen(true)}
            >
              Add New Product
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
