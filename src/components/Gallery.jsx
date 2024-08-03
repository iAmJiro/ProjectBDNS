import React from "react";
import Navbar from "./Navbar";
import HomeNav from "./HomeNav";
import Home from "./Home";
const Gallery = ({
  cakeImages = [],
  cupcakeImages = [],
  cookieImages = [],
}) => {
  return (
    <div>
      <div className="text-center p-5">
        <h1 className="text-2xl font-bold mt-2">Gallery</h1>
        <p className="text-lg mt-1">Lorem ipsum dolor sit amet</p>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-1">Cake</h2>
          <div className="flex justify-center gap-4">
            {cakeImages.length > 0 ? (
              cakeImages.map((image, index) => (
                <div key={index} className="w-36 h-36 bg-gray-300">
                  <img
                    src={image}
                    alt={`Cake ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))
            ) : (
              <p>No cakes available</p>
            )}
          </div>
          <button className="mt-2 px-3 py-2 bg-blue-500 text-white border-none cursor-pointer">
            Show More
          </button>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-1">Cupcake</h2>
          <div className="flex justify-center gap-4">
            {cupcakeImages.length > 0 ? (
              cupcakeImages.map((image, index) => (
                <div key={index} className="w-36 h-36 bg-gray-300">
                  <img
                    src={image}
                    alt={`Cupcake ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))
            ) : (
              <p>No cupcakes available</p>
            )}
          </div>
          <button className="mt-2 px-3 py-2 bg-blue-500 text-white border-none cursor-pointer">
            Show More
          </button>
        </div>

        <div className="mt-4 mb-4">
          <h2 className="text-xl font-semibold mb-1">Cookie</h2>
          <div className="flex justify-center gap-4">
            {cookieImages.length > 0 ? (
              cookieImages.map((image, index) => (
                <div key={index} className="w-36 h-36 bg-gray-300">
                  <img
                    src={image}
                    alt={`Cookie ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))
            ) : (
              <p>No cookies available</p>
            )}
          </div>
          <button className="mt-2 px-3 py-2 bg-blue-500 text-white border-none cursor-pointer">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
