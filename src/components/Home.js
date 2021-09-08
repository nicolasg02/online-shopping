import React from 'react';
import { Link } from 'react-router-dom';

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';

import onlineShoppingImg from '../assets/undraw_online_shopping.svg';
import webShoppingImg from '../assets/undraw_web_shopping.svg';

function Home() {
  return (
    <div className="pt-16 min-h-screen space-y-14 bg-gray-50">
      {/* header */}
      <div className="flex flex-col items-center px-5 space-y-5">
        <h1 className="text-4xl font-thin tracking-wide leading-relaxed text-center">
          Your modern way of shopping
        </h1>
        <img src={onlineShoppingImg} alt="Online Shopping" />
      </div>
      {/* start shopping button */}
      <div className="bg-gray-100 flex justify-center py-10">
        <Link className="bg-yellow-300 p-4 px-6 rounded" to="/shop">
          <p className="text-xl font-extralight flex items-center space-x-2">
            <HiOutlineShoppingCart className="inline-block" />{' '}
            <span>Start Shopping</span>
          </p>
        </Link>
      </div>
      {/* new section */}
      <div className="flex flex-col items-center px-5 pb-5 space-y-5">
        <h1 className="text-2xl font-extralight leading-relaxed bg-yellow-100 rounded p-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </h1>
        <img src={webShoppingImg} alt="Online Shopping" />
      </div>
      {/* footer */}
      <div className="flex flex-col items-center py-5 space-y-10">
        <ul className=" flex flex-col items-center space-y-5 text-xl font-extralight">
          <li className="flex items-center space-x-1">
            <FaTwitter className="inline-block h-auto w-6" />
            <button>Twitter</button>
          </li>
          <li className="flex items-center space-x-1">
            <FaYoutube className="inline-block h-auto w-6" />
            <button>Youtube</button>
          </li>
          <li className="flex items-center space-x-1">
            <FaFacebook className="inline-block h-auto w-6" />
            <button>Facebook</button>
          </li>
          <li className="flex items-center space-x-1">
            <FaInstagram className="inline-block h-auto w-6" />
            <button>Instagram</button>
          </li>
        </ul>
        <p className="">Copyright</p>
      </div>
    </div>
  );
}

export default Home;
