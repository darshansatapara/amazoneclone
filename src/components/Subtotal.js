import React from "react";
import "./Subtotal.css";

import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);


function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="Subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="Total-item">
              Subtotal({basket?.length} items):<strong>{value}</strong>
            </p>
            <div className="Subtotal-gift">
              <input type="checkbox" />
              <p className="Ask-gift">This order contains a gift</p>
            </div>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
