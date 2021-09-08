import CartItem from './CartItem';

import { VscChromeClose } from 'react-icons/vsc';

function Cart({
  setCart,
  cartProducts,
  handleAddToCart,
  handleRemoveFromCart,
}) {
  function calculateSubtotal() {
    const prices = cartProducts.map((product) => {
      return product.amount * product.price;
    });

    if (prices.length === 0) {
      return 0;
    } else {
      return prices.reduce((acc, val) => acc + val);
    }
  }

  const subtotal = calculateSubtotal();

  return (
    <div className="fixed bg-gray-100 min-h-screen p-5 pb-32 w-full flex flex-col space-y-5">
      {cartProducts.length === 0 ? <p>No items in cart</p> : null}
      {cartProducts.length === 0 && (
        <div className="min-h-screen">
          <p>TODO</p>
        </div>
      )}
      {/* Subtotal */}
      {cartProducts.length !== 0 && (
        <div className="bottom-0 w-full left-0 bg-black text-yellow-300 text-2xl font-extralight p-5 flex justify-between space-x-2 items-center">
          <button className="bg-yellow-300 text-black p-4 rounded">
            Checkout
          </button>
          <div>
            <p>Subtotal:</p>
            <span className="text-4xl">${subtotal}</span>
          </div>
        </div>
      )}
      {/* Close button */}
      <div className="flex justify-between items-center">
        <p className="text-2xl">Your Cart:</p>
        <button onClick={() => setCart(false)}>
          <VscChromeClose className="h-10 w-10" />
        </button>
      </div>
      {/* Cart items */}
      <div className="space-y-5 rounded overflow-y-scroll">
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
