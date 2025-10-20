import React from 'react'
import { ProductCard } from './ProductCard'
import '../styles/ProductSection.css'
import bowlimg from '../assets/bowl.png'
import dog1 from '../assets/dog1.png'


export const ProductSection = ({scrollToSection}) => {

  // Dummy products
  const products = [
    { id: 1, name: 'bowl', price: 12.99, image: bowlimg },
    { id: 2, name: 'bowl', price: 12.99, image: bowlimg },
    { id: 3, name: 'bowl', price: 12.99, image: dog1 },
    { id: 3, name: 'bowl', price: 12.99, image: bowlimg },
    { id: 3, name: 'bowl', price: 12.99, image: bowlimg },
    // { id: 2, name: 'products.dogBed', price: 49.99, image: '/images/dog-bed.png' },
    // { id: 3, name: 'products.petBowl', price: 19.99, image: '/images/pet-bowl.png' },
  ]

  return (
    <section className="product-section">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          scrollToSection={scrollToSection}
        />
      ))}
    </section>
  )
}