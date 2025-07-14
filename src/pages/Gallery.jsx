// src/pages/Gallery.js
import React from "react";

const galleryImages = [
  "alumni1.jpg",
  "alumni1.jpg",
  "alumni1.jpg",
  "alumni1.jpg",
  "alumni1.jpg",
  "alumni1.jpg",
  "alumni1.jpg",
  "alumni1.jpg",
];

const Gallery = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#0e2e5f] mb-6">College Gallery</h1>

      <p className="text-sm text-gray-700 mb-6">
        A glimpse into the vibrant life of Atal Behari College — events, classrooms, students, and campus activities.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="w-full h-40 sm:h-48 md:h-56 rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-300"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/gallery/${img}`}
              alt={`College event ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
