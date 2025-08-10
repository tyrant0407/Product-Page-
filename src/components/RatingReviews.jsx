import React from "react";


export default function RatingReviews({ rating, reviews }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow mt-6">
      <h3 className="text-lg font-semibold mb-2">Rating & Reviews</h3>
      <div className="flex items-center gap-6">
        <h1 className="text-4xl font-bold">{rating}</h1>
        <p>/5 ({reviews} New Reviews)</p>
      </div>
      <div className="mt-4">
        <p className="flex items-center gap-2">
          <i className="ri-user-line"></i> Alex Mathio - "Great product!"
        </p>
      </div>
    </div>
  );
}
