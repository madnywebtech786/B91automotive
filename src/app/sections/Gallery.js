"use client";

import Image from "next/image";
import React from "react";

const images = [
  { id: 1, src: "/images/slide1.jpg", size: "col-1 lg:col-span-2" },
  { id: 2, src: "/images/slide2.jpg", size: "col-span-1" },
  { id: 3, src: "/images/slide3.jpg", size: "col-span-1" },
  { id: 4, src: "/images/slide1.jpg", size: "col-span-1" },
  { id: 5, src: "/images/slide3.jpg", size: "col-1 lg:col-span-2" },
  { id: 6, src: "/images/slide2.jpg", size: "col-span-1" },

];

export default function Gallery() {
  return (
    <div className="w-full px-4 lg:px-10 pt-20 lg:pt-40 pb-20" id="gallery">
      <div className="mb-10">
        <p className="text-red-500 font-semibold uppercase flex items-center justify-center gap-2 mb-3">
          <div className="w-10 h-0.5 bg-red-500"></div>
          Our Gallery
        </p>
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 text-center">
          Our Working Process
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className={`relative overflow-hidden rounded-lg bg-gray-800 ${image.size}`}
          >
            <Image
              src={image.src}
              alt={`Gallery image ${image.id}`}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
