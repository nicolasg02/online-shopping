import { useContext } from "react"
import { ProductData } from "../Helpers/Context"

import Carousel from "./Carousel"
import ProductGrid from "./ProductGrid"

function Home() {
  const { products } = useContext(ProductData)
  console.log(products)

  return (
    <div className="my-5 md:my-14 container md:max-w-6xl mx-auto border-2 min-h-screen">
      <Carousel />
      <ProductGrid />
    </div>
  )
}

export default Home
