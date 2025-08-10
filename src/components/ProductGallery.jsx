import React, { useState } from "react";

export default function ProductGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="w-full lg:w-1/2 p-4">
      <img className="w-full  rounded-lg mb-4" src={mainImage} alt="Product" />
      <div className="flex gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="thumb"
            className={`w-20 h-20 object-cover rounded cursor-pointer border ${mainImage === img ? "border-black" : "border-gray-300"}`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
