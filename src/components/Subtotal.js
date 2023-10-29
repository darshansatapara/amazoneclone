import React from "react";
import "./Subtotal.css";

import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="Subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="Total-item">
              Subtotal(0 items):<strong>0</strong>
            </p>
            <div className="Subtotal-gift">
              <input type="checkbox" />
              <p className="Ask-gift">This order contains a gift</p>
            </div>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
