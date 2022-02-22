import { useState } from "react"

import { FaAlignRight, FaShoppingCart } from "react-icons/fa"

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const mobileMenu = showMobileMenu && (
    <div className="bg-base-300 md:hidden">
      <ul className="p-2">
        <li>
          <a href="?">All Products</a>
        </li>
        <li>
          <a href="?">Catalogue</a>
        </li>
        <li>
          <a href="?">Github</a>
        </li>
      </ul>
    </div>
  )

  return (
    <div className="fixed w-full z-50">
      <div className="navbar bg-base-300">
        <div className="flex-1 md:flex-none">
          <a href="?" className="btn btn-ghost normal-case text-xl">
            O-Shop
          </a>
        </div>
        <div className="flex-1 hidden md:block">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a href="?">All Products</a>
            </li>
            <li tabIndex={0}>
              <button>
                Categories
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </button>
              <ul className="p-2 bg-base-300">
                <li>
                  <a href="?">Electronics</a>
                </li>
                <li>
                  <a href="?">Wear</a>
                </li>
                <li>
                  <a href="?">Food & Drinks</a>
                </li>
                <li>
                  <a href="?">Health</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="?">About Us</a>
            </li>
          </ul>
        </div>
        <div className="flex-none">
          <div className="block md:hidden">
            <button
              className="btn btn-square btn-ghost"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <FaAlignRight className="text-xl" />
            </button>
          </div>
          <a
            className="hidden md:flex btn btn-square btn-ghost text-xl justify-center items-center"
            href="https://github.com/nicolasg02"
            target="_blank"
            rel="noreferrer"
          >
            <FaShoppingCart />
          </a>
        </div>
      </div>
      {mobileMenu}
    </div>
  )
}

export default Navbar
