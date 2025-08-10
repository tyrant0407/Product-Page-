import React from "react";

export default function ProductDescription({ description, shipping }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Description & Fit</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      <h3 className="text-lg font-semibold mb-2">Shipping</h3>
      <div className="grid grid-cols-2 gap-2 text-gray-600">
        <p>Discount: {shipping.discount}</p>
        <p>Package: {shipping.package}</p>
        <p>Delivery Time: {shipping.deliveryTime}</p>
        <p>Est. Arrival: {shipping.arrival}</p>
      </div>
    </div>
  );
}
