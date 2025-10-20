import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/ProductCard.css'

export const ProductCard = ({ product, scrollToSection }) => {
  const { t } = useTranslation()
  console.log(product)

  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={product.image} alt="no image" />
      </div>
      <div className='product-info'>
        <div className='product-name'>
          {t(`products.${product.name}.title`)}
        </div>
        <div className='price-and-order'>
          <div className='product-price'>
            {product.price}€
          </div>
          <button className='order-button' onClick={()=>scrollToSection('contacts')}> {t("Product-card.order")} </button>
        </div>
      </div>
    </div>
  )
}