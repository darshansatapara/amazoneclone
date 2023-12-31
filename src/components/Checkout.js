import React from "react";
import "./Checkout.css";
import Checkoutad from "../images/Checkout-ad.jpg";
import Subtotal from "./Subtotal";
import Checkoutproduct from "./Checkoutproduct";
import { useStateValue } from "../StateProvider";
import Header from "./Header";
function Checkout() {
  const [{ basket,user }, dispatch] = useStateValue();

  return (
    <>
      <Header/>
      <div className="Checkout">
        <div className="Checkoutleft">
          <img className="Checkout-ad" src={Checkoutad} alt="ad" />
        </div>
        <div>
          <h2 className="Checkout-subtotal">
            <Subtotal />
          </h2>
        </div>
      </div>
      <div className="Checkout-right">
        <h2>hello,{user?.email}</h2>
        <h2 className="shopping-basket-heading">Your Shopping Basket</h2>
        <div className="Checkout-items">
          {basket.map((item) => (
            <Checkoutproduct
              id={item.id}
              tital={item.tital}
              price={item.price}
              description={item.description}
              image={item.image}
              rating={item.rating}
            />
          ))}
          
        </div>
      </div>
    </>
  );
}

export default Checkout;
