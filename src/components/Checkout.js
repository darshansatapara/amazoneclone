import React from 'react'
import "./Checkout.css"
import Checkoutad from "../images/Checkout-ad.jpg"
function Checkout() {
  return (
    <>
        <div className="Checkout">
            <div className="Checkoutleft">
                <img className='Checkout-ad' src={Checkoutad}alt="ad" />
            </div>
            <div>
                <h2 className="Checkout-title">Your Shopping Basket</h2>
            </div>
            </div>
            <div className="Checkout-right">
                <h2>The subtotle will go here</h2>
                {/* {BasketItem} */}
                {/* {BasketItem} */}
                {/* {BasketItem} */}
                {/* {BasketItem} */}
                {/* {BasketItem} */}
            </div>
            </>
  )
}

export default Checkout