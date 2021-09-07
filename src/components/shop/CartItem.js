import React from "react";

import { VscAdd } from "react-icons/vsc";
import { VscDash } from "react-icons/vsc";

function CartItem({ product, handleAddToCart, handleRemoveFromCart }) {
  return (
    <div className="w-full rounded bg-gray-200 justify-between">
      <p
        className="
          py-1 
          text-sm px-2 
          rounded
          font-bold 
          text-yellow-300 
          bg-gray-800 
          sm:text-xs"
      >
        {product.category
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </p>
      <div className="flex">
        <img className="h-auto w-20" src={product.image} alt={product.title} />
        <div>
          <div className="flex w-full items-center justify-center">
            <p className="p-2 text-xl">
              {product.title} <span className="bg-yellow-400">x{10 + 10}</span>
            </p>
          </div>
          <div>
            <p>Price ${(product.amount * product.price).toFixed(2)}</p>
          </div>
          <div className="rounded border-2 inline-flex space-x-10 items-center">
            <button
              onClick={() => handleRemoveFromCart(product.id)}
              className="bg-gray-300 p-3 rounded"
            >
              <VscDash />
            </button>
            <p className="text-xl font-light">{product.amount}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-gray-300 p-3 rounded"
            >
              <VscAdd />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
