import {useContext} from 'react'
import {ProductsContext} from '../ProductsContext'
import Slider from './Slider'

export default function Header() {
  const products = useContext(ProductsContext)

  return <header className="container mx-auto"></header>
}
