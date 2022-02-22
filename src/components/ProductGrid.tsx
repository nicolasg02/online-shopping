import { useContext } from "react"
import { ProductData } from "../Helpers/Context"

import Card from "./Card"

function ProductGrid() {
  const { products } = useContext(ProductData)

  const productCards = products.map((product, key) => (
    <Card key={product.id} {...product} />
  ))

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-4">
        {productCards}
      </div>
    </div>
  )
}

export default ProductGrid
