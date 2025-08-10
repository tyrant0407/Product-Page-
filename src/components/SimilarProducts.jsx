import React from "react";

export default function SimilarProducts({ products }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">You might also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-2">
            <img src={p.img} alt={p.title} className="rounded-lg mb-2" />
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-gray-500">${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
