import {useState} from 'react'

import {FaHeart, FaRegHeart} from 'react-icons/fa'

export default function Card({title, category, imgUrl, price, favorite}) {
  const [isFavorite, setIsFavorite] = useState(favorite)

  return (
    <div className="col-span-1 w-3/4 border-2 border-black cursor-pointer hover:shadow-2xl hover:transition-all hover:duration-200">
      <div className="h-full w-full relative">
        <div className="absolute top-0 w-full bg-transparent flex justify-between items-center p-3">
          <p className="bg-gray-900 text-white text-sm px-2 py-1 italic">
            ${price}
          </p>
          {/* Fav icon changes on click */}
          <div onClick={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? (
              <FaHeart className="text-2xl text-red-600" />
            ) : (
              <FaRegHeart className="text-2xl text-red-600" />
            )}
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-black text-white">
          <h4 className="text-center text-lg py-3">{title}</h4>
        </div>
        <img src={imgUrl} alt={title} />
      </div>
    </div>
  )
}
