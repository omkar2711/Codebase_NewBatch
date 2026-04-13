import React from 'react'
import "./ProductCard.css"

const ProductCard = (props) => {

    const description = props.description || " No description available.";

  return (
    <div id="product-card">
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <h3>₹{props.price}</h3>
        <p>{description}</p>
        
    </div>
  )
}

export default ProductCard
