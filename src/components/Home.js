import React from 'react';
import { Link } from 'react-router-dom';

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';

import onlineShoppingImg from '../assets/undraw_online_shopping.svg';
import webShoppingImg from '../assets/undraw_web_shopping.svg';

function Home() {
  return (
    <div className="min-h-screen space-y-14 bg-gray-50">
      {/* header */}
      <div className="pt-10 flex h-screen max-h-screen flex-col items-center px-5 space-y-5 md:mx-32 md:flex-row">
        <h1 className="mt-20 text-4xl font-thin tracking-wide leading-relaxed text-center md:text-6xl">
          Your modern way of shopping
        </h1>
        <img
          className="md:h-auto md:w-3/6"
          src={onlineShoppingImg}
          alt="Online Shopping"
        />
      </div>
      {/* start shopping button */}
      <div className="bg-gray-100 flex justify-center py-20 md:py-24">
        <Link
          className="bg-yellow-300 p-3 px-4 rounded hover:bg-yellow-200 shadow md:p-3"
          to="/shop"
        >
          <p className="text-lg font-extralight flex items-center space-x-2 md:text-sm">
            <HiOutlineShoppingCart className="inline-block" />{' '}
            <span>Start Shopping</span>
          </p>
        </Link>
      </div>
      {/* new section */}
      <div className="flex flex-col h-screen pt-20 max-h-screen items-center px-5 pb-5 space-y-10 md:flex-row md:mx-32">
        <h1 className="text-2xl font-extralight leading-relaxed bg-yellow-100 rounded p-5 md:order-2 md:text-4xl md:py-10 md:px-20 md:font-thin md:text-center md:ml-5 md:leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </h1>
        <img
          className="md:order-1 md:h-auto md:w-3/6"
          src={webShoppingImg}
          alt="Online Shopping"
        />
      </div>
      {/* footer */}
      <div className="flex flex-col items-center py-5 space-y-10 md:py-20">
        <ul className=" flex flex-col items-center space-y-5 text-xl text-gray-700 md:flex-row md:space-x-10 md:space-y-0 md:justify-center md:w-full">
          <li className="flex items-center space-x-1 md:text-sm hover:text-blue-400">
            <button className="flex items-center space-x-1 font-extralight">
              <FaTwitter className="inline-block h-auto w-6 font-extralight" />
              <span>Twitter</span>
            </button>
          </li>
          <li className="flex items-center space-x-1 md:text-sm hover:text-red-500">
            <button className="flex items-center space-x-1 font-extralight">
              <FaYoutube className="inline-block h-auto w-6 md:w-5 font-extralight" />
              <span>Youtube</span>
            </button>
          </li>
          <li className="flex items-center space-x-1 md:text-sm hover:text-blue-500">
            <button className="flex items-center space-x-1 font-extralight">
              <FaFacebook className="inline-block h-auto w-6 md:w-5 font-extralight" />
              <span>Facebook</span>
            </button>
          </li>
          <li className="flex items-center space-x-1 md:text-sm hover:text-black">
            <button className="flex items-center space-x-1 font-extralight">
              <FaInstagram className="inline-block h-auto w-6 md:w-5 font-extralight" />
              <span>Instagram</span>
            </button>
          </li>
        </ul>
        <p className="font-extralight">Copyright</p>
      </div>
    </div>
  );
}

export default Home;
