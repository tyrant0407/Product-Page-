import React, { useState } from "react";


export default function ProductDetails({ title, price, sizes }) {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className="w-full lg:w-1/2 p-4">
      <h2 className="text-sm text-gray-500">Man Fashion</h2>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-2xl font-semibold my-2">${price}</p>
      <p className="text-sm text-gray-600">Order in 02:30:25 to get next day delivery</p>

      <div className="mt-4">
        <p className="font-semibold mb-2">Select Size</p>
        <div className="flex gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded border ${selectedSize === size ? "bg-black text-white" : "bg-white border-gray-300"}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <button className="mt-6 w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2">
        <i className="ri-shopping-cart-2-line"></i> Add to Cart
      </button>
    </div>
  );
}
