import React from "react";
import ProductGallery from "../components/ProductGallery";
import ProductDetails from "../components/ProductDetails";
import ProductDescription from "../components/ProductDescription";
import RatingReviews from "../components/RatingReviews";
import SimilarProducts from "../components/SimilarProducts";
import Footer from "../components/Footer";
import product from "../data/product.json";

export default function ProductPage() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex flex-col lg:flex-row gap-6 px-6 py-8">
        <ProductGallery images={product.images} />
        <ProductDetails title={product.title} price={product.price} sizes={product.sizes} />
      </div>
      <div className="px-6">
        <ProductDescription description={product.description} shipping={product.shipping} />
        <RatingReviews rating={product.rating} reviews={product.reviews} />
        <SimilarProducts products={product.similar} />
      </div>
      <Footer />
    </div>
  );
}
