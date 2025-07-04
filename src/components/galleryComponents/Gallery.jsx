import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Generate array of gallery images from g1.jpeg to g25.jpeg
  const galleryImages = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    src: `/gallery/g${index + 1}.jpeg`,
    alt: `Gallery image ${index + 1}`
  }));

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-6xl font-semibold mb-4">Gallery</h2>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="break-inside-avoid cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="relative min-h-full flex items-center justify-center py-8">
            <button
              onClick={closeModal}
              className="fixed top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}