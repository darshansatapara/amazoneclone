import React from "react";
import "./Product.css"



function Product({title ,price,image, rating}) {
  return (
    <div className="Product">
      <div className="Product-info">

        <span className="Product-title">{title}</span>
        <span className="Product-price">${price}</span>
        <span className="Product-rating">
            {Array(rating).fill().map((_,i)=>(
              <p>⭐</p>
            ))}
        </span>
      </div>
      <img src={image} alt="product" />
      <button className="Product-button">Add to Cart</button>
    </div>
  );
}

export default Product;
