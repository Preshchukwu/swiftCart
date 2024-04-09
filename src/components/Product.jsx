import React from 'react'
import './Product.css'

const Product = (props) => {
    const {image, title, category, price, rating, description} = props

  return (
    <div className='productContainer'>
      <div className='productImageContainer'>
        <img className='imageContainer' src={image} alt="" />
      </div>

      <div className='productDescriptionContainer'>
        <p className='productName'>{title}</p>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
        <p>{rating}</p>
        {/* <p>{description}</p> */}
      <button className='cart'>Add to cart</button>

      </div>

    </div>
  )
}

export default Product
