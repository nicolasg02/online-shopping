import { useContext } from "react"
import { ProductData } from "../Helpers/Context"

function Carousel() {
  const { products } = useContext(ProductData)

  const productsOnSale = products
    .filter((product) => product.onsale)
    .map((product, key) => (
      <a
        key={product.id}
        href="?"
        className="carousel-item relative float-left w-full h-full"
      >
        <div className="absolute right-0 m-5">
          <h2 className="text-lg md:text-5xl uppercase bg-black text-gray-200 p-2 rounded bg-opacity-20">
            {product.title}
          </h2>
          <div className="flex justify-end text-right text-md md:text-4xl my-2">
            <p className="bg-black p-2 rounded text-yellow-300 font-bold">
              ON SALE <span className="">${product.price}</span>
            </p>
          </div>
        </div>
        <img
          src={product.img}
          className="block w-full overflow-hidden"
          alt="Wild Landscape"
        />
      </a>
    ))

  return (
    <div className="carousel slide relative" data-bs-ride="carousel">
      <div className="carousel-inner relative md:h-96 w-full overflow-hidden md:rounded">
        <a href="?" className="carousel-item active relative float-left w-full">
          <h2 className="text-5xl absolute right-0 m-5">HELLO</h2>
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg"
            className="block w-full"
            alt="Wild Landscape"
          />
        </a>
        {productsOnSale}
      </div>
    </div>
  )
}

export default Carousel
