import React, { useRef, useEffect } from "react";

const useCartVisibility = (ref, setCart) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setCart(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setCart]);
};

const CartVisibility = ({ children, setCart }) => {
  const wrapperRef = useRef(null);
  useCartVisibility(wrapperRef, setCart);

  return <div ref={wrapperRef}>{children}</div>;
};

export default CartVisibility;
