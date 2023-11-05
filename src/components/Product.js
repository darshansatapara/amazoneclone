import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, name, tital, price, image, rating, description }) {
  const [{ basket }, dispatch] = useStateValue();
  const addTobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        tital: tital,
        image: image,
        price: price,
        rating: rating,
        description: description,
      },
    });
  };
  
  return (
    <div className="Product">
      <div className="Product-info">
        <span className="Product-title">{tital}</span>
        <span className="Product-price">${price}</span>
        <span className="Product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </span>
        <span>{description}</span>
      </div>
      <img src={image} alt="product"/>
      <button onClick={addTobasket} className="Product-button">
        Add to Cart
      </button>
    </div>
  )
};

export default Product;
