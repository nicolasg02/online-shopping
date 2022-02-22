import Carousel from "./Carousel"
import ProductGrid from "./ProductGrid"

function Home() {
  return (
    <div className="my-5 md:my-14 container md:max-w-6xl mx-auto min-h-screen">
      <Carousel />
      <ProductGrid />
    </div>
  )
}

export default Home
