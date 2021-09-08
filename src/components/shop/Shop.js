import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CardLoader from './CardLoader';
import Card from './Card';

import addToCartImg from '../../assets/undraw_add_to_cart.svg';

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) =>
        json.map((item) => {
          return { ...item, amount: 0 };
        })
      )
      .then((json) => setProducts(json));
  }, []);

  // Card loaders
  if (products.length <= 0) {
    return (
      <div className="min-h-screen p-5 pt-20">
        <div className="space-y-5">
          <h1 className="text-center">Loading...</h1>
          <div className="grid gap-y-5 grid-cols-1 grid-rows-auto md:grid-cols-4 md:gap-x-5 md:auto-rows-fr md:grid-rows-1 md:gap-y-2">
            {Array.from({ length: 10 }).map((_, index) => (
              <CardLoader key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-5 bg-gray-50 py-20 space-y-14 md:px-32">
      {/* header */}
      <div className="md:pt-10 space-y-5 md:flex md:flex-row md:justify-center md:items-center">
        <img
          className="md:h-auto md:w-2/5"
          src={addToCartImg}
          alt="add to cart"
        />
        <p className="text-3xl font-thin leading-relaxed text-center bg-yellow-200 p-5 md:p-5 md:text-2xl">
          Explore our store and grab anything you like
        </p>
      </div>
      {/* items */}
      <div className="grid gap-y-5 grid-cols-1 grid-rows-auto md:grid-cols-4 md:gap-x-5 md:auto-rows-fr md:grid-rows-1 md:gap-y-2">
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
