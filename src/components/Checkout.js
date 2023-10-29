import React from 'react'
import "./Checkout.css"
import Checkoutad from "../images/Checkout-ad.jpg"
import Subtotal from './Subtotal'
function Checkout() {
  return (
    <>
        <div className="Checkout">
            <div className="Checkoutleft">
                <img className='Checkout-ad' src={Checkoutad}alt="ad" />
            </div>
            <div>
            <h2 className="Checkout-title"><Subtotal/></h2>
            </div>
            </div>
            <div className="Checkout-right">
            <h2 >Your Shopping Basket</h2>
                
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