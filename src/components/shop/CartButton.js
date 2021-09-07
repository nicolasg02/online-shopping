import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function CartButton({ getTotalProducts, cart, setCart }) {
  return (
    <button
      onClick={() => setCart(!cart)}
      className="bg-yellow-300 rounded-full shadow p-5 fixed bottom-5 right-5"
    >
      <FaShoppingCart className="h-7 w-7" />
      <span className="absolute text-xs text-white bg-red-500 px-2 py-1 rounded-full">
        {getTotalProducts}
      </span>
    </button>
  );
}

export default CartButton;
