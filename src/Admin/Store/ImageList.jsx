import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import CreateImageForm from './CreateImageForm';
import Navbar from '../../Components/Navbar';

export default function ImageList() {
    const [listImages, setListImages] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/image/all`)
            .then(res => res.json())
            .then(body => setListImages(body));
    }, []);

    return (
        <>
            <Navbar />
            <div className="container mx-auto my-8">
                <div className='flex justify-center'>
                    {sessionStorage.getItem('userGroup') === '1' && (
                        <button
                            className="btn text-2xl p-2 rounded hover:text-black bg-green-500 text-white my-4 "
                            onClick={() => setIsFormOpen(true)}>
                            Create New Image
                        </button>
                    )}
                </div>
                <CreateImageForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
                <div className="grid grid-cols-1 lg:grid-cols-4 ml-10 gap-4">
                    {listImages.map(image =>
                        <ImageCard
                            key={image.imageId}
                            imageId={image.imageId}
                            src={image.src}
                            alt={image.alt}
                            name={image.name}
                            price={image.price}
                            categoryName={image.category.name} // Assuming category name is available in the API response
                            listImages={listImages}
                            setListImages={setListImages} />
                    )}
                </div>
            </div>
        </>
    );
}
