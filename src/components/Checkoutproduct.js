import React from "react";
import "./Checkoutproduct.css";

function Checkoutproduct(props) {
  return (
    <>
      <div className="checkoutProduct">
        
        <div className="checkoutProduct-image">
          <img src={props.image} alt="" />
        </div>
        <div className="checkoutProduct-info">
          <span className="checkoutProduct-tital">{props.tital} </span>
          <span className="checkoutProduct-price">
            <small>$</small> <strong> {props.price}</strong>
          </span>
          <span className="checkoutProduct-rating">
            {Array(props.rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </span>
          <span className="checkoutProduct-description">
            {props.description}
          </span>
          
        
        <button className="checkoutProduct-button">Remove to Cart</button>
        </div>
      </div>
    </>
  );
}

export default Checkoutproduct;
