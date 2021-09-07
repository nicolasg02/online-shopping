import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/shop/Shop";
import CartButton from "./components/shop/CartButton";
import Cart from "./components/shop/Cart";
import CartVisibility from "./components/shop/CartVisibility";
import ProductPage from "./components/shop/ProductPage";

function App() {
  const [cart, setCart] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  function getTotalProducts(products) {
    return products.reduce((acc, product) => acc + product.amount, 0);
  }

  function handleAddToCart(product) {
    setCartProducts((prev) => {
      const isProductInCart = prev.find((item) => item.id === product.id);

      if (isProductInCart) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      }

      return [...prev, { ...product, amount: 1 }];
    });
  }

  function handleRemoveFromCart(id) {
    setCartProducts((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [])
    );
  }

  return (
    <div className="min-h-screen">
      <Router>
        <Navbar />
        {cart && (
          <CartVisibility setCart={setCart}>
            <Cart
              setCart={setCart}
              cartProducts={cartProducts}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </CartVisibility>
        )}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop">
            {!cart && (
              <CartButton
                getTotalProducts={getTotalProducts(cartProducts)}
                cart={cart}
                setCart={setCart}
              />
            )}
            <Shop cart={cart} setCart={setCart} />
          </Route>
          <Route exact path="/shop/:id">
            {!cart && (
              <CartButton
                getTotalProducts={getTotalProducts(cartProducts)}
                cart={cart}
                setCart={setCart}
              />
            )}
            <ProductPage handleAddToCart={handleAddToCart} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
