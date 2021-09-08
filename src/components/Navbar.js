import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MdMenu } from 'react-icons/md';
import { HiOutlineShoppingCart } from 'react-icons/hi';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 40) setScrolling(true);
      if (window.pageYOffset < 40) setScrolling(false);
    };

    return () => (window.onscroll = null);
  }, []);
  const [mobilemenu, setMobilemenu] = useState(false);

  return (
    <nav className={`fixed w-full ${scrolling && 'shadow'}`}>
      {/* Items */}
      <div
        className={`${
          scrolling ? 'bg-yellow-300' : 'bg-transparent'
        } p-3 flex justify-between items-center md:px-20 md:py-8 md:pb-5`}
      >
        <div>
          <Link to="/">
            <h2 className="text-xl font-light">Online Shopping</h2>
          </Link>
        </div>
        <div className="hidden md:block">
          <Link
            className={`${
              scrolling
                ? 'bg-gray-50 hover:bg-white'
                : 'bg-yellow-300 hover:bg-yellow-200'
            } py-3 px-4 shadow rounded text-sm font-ligth`}
            to="/shop"
          >
            <HiOutlineShoppingCart className="inline-block" />{' '}
            <span>Start Shopping</span>
          </Link>
        </div>
        {/* Mobile: menu button */}
        <div className="flex items-center md:hidden">
          <button onClick={() => setMobilemenu(!mobilemenu)}>
            <MdMenu className="h-9 w-9" />
          </button>
        </div>
      </div>
      {/* Mobile: menu drawer */}
      {mobilemenu && (
        <div
          className={`w-full ${
            scrolling ? 'bg-yellow-300' : 'bg-gray-50'
          } shadow`}
        >
          <Link
            to="/"
            onClick={() => setMobilemenu(false)}
            className="block py-3 px-4 text-lg"
          >
            <span>Home</span>
          </Link>
          <Link
            to="/shop"
            onClick={() => setMobilemenu(false)}
            className="block py-3 px-4 text-lg"
          >
            <span>Shop</span>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
