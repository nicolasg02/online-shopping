import CartItem from "./CartItem";

import { VscChromeClose } from "react-icons/vsc";

function Cart({
  setCart,
  cartProducts,
  handleAddToCart,
  handleRemoveFromCart,
}) {
  return (
    <div className="absolute bg-gray-100 p-5 pb-32 min-h-screen w-full flex flex-col space-y-5">
      {cartProducts.length === 0 ? <p>No items in cart</p> : null}
      {/* Close button */}
      <div className="flex justify-between items-center">
        <p className="text-2xl">Your Cart:</p>
        <button onClick={() => setCart(false)}>
          <VscChromeClose className="h-10 w-10" />
        </button>
      </div>
      {/* Cart items */}
      <div className="space-y-5 rounded overflow-y-scroll min-h-screen">
        {cartProducts.map((product) => {
          return (
            <CartItem
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
