import {FaBars, FaShoppingBag, FaShoppingCart} from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="bg-transparent w-full h-14 px-3 md:px-10 md:py-10 flex justify-between items-center">
      <div className="flex items-center gap-7">
        <span className="flex items-center gap-2 bg-black text-white p-2 text-lg cursor-pointer">
          <FaShoppingBag /> Online Shopping
        </span>
        <ul className="hidden md:flex gap-4">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">Categories</li>
          <li className="cursor-pointer hover:underline">Wishlist</li>
        </ul>
      </div>

      <button className="hidden md:flex hover:bg-gray-300 p-3 rounded-full justify-center items-center hover:transition-all duration-400">
        <FaShoppingCart className="text-2xl" />
      </button>

      <button className="md:hidden">
        <FaBars />
      </button>
    </nav>
  )
}
