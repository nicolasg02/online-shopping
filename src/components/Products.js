import {useContext} from 'react'
import {ProductsContext} from '../ProductsContext'

import Card from './Card'

export default function Products() {
  const products = useContext(ProductsContext)
  return (
    <div className="my-5 mx-3 grid grid-cols-1 gap-5 justify-items-center sm:grid-cols-2 sm:w-4/5 sm:mx-auto md:grid-cols-3 md:w-full lg:grid-cols-4">
      {products.map((product, key) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  )
}
