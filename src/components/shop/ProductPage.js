import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { FaStar } from "react-icons/fa";

function ProductPage({ handleAddToCart }) {
  const [productData, setProductData] = useState({});

  const location = useLocation();
  const { productId } = location.state;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProductData(json));
  }, [productId]);

  if (Object.keys(productData).length <= 0) {
    return (
      <div className="py-20">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-5">
      <div className="space-y-5">
        {/* image */}
        <div className="flex justify-center">
          <img
            className="h-auto w-1/2"
            src={productData.image}
            alt={productData.title}
          />
        </div>
        {/* category, title & rating */}
        <div>
          <div>
            <p
              className="
              inline-block 
              text-sm px-2 
              rounded
              font-bold 
              text-yellow-300 
              bg-gray-800 
              sm:text-xs"
            >
              {productData.category
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-extralight">
              {productData.title}
              <span className="text-lg font-extralight inline-flex items-center">
                <FaStar className="text-yellow-300 inline h-6 w-6 ml-2 mr-1" />
                {productData.rating.rate} / {productData.rating.count} reviews
              </span>
            </h1>
          </div>
        </div>
        {/* description */}
        <div className="w-full rounded border-2 p-2">
          <p className="font-bold">Description</p>
          <p className="text-xl">{productData.description}</p>
        </div>
        {/* price */}
        <div className="flex flex-col items-center space-y-3">
          <p className="text-4xl font-thin border-b-2 border-black">
            US${productData.price} <span className="text-base">/ per unit</span>
          </p>
          {/* total */}
          <button
            onClick={() => handleAddToCart(productData)}
            className="bg-yellow-300 shadow w-full py-2 rounded text-3xl font-extralight"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
