import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CardLoader from "./CardLoader";
import Card from "./Card";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) =>
        json.map((item) => {
          return { ...item, amount: 0 };
        })
      )
      .then((json) => setProducts(json));
  }, []);

  if (products.length <= 0) {
    return (
      <div className="min-h-screen p-5 pt-20">
        <div className="space-y-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <CardLoader key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-5 bg-gray-100 pt-20">
      <div className="grid gap-y-5">
        {products.map(({ id, title, price, image }) => (
          <Link
            to={{
              pathname: `/shop/${id}`,
              state: {
                productId: id,
              },
            }}
            key={id}
            id={id}
          >
            <Card title={title} price={price} image={image} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Shop;
