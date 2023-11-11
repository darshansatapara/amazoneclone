import React, { useEffect, useState } from "react";
import "./Payment.css";
import Header from "./Header";
import { useStateValue } from "../StateProvider";
import Checkoutproduct from "./Checkoutproduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Subtotal";
import { Navigate, useNavigate } from "react-router";
import axios from "./axios";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const navigate = useNavigate();
  const elements = useElements();
  const [error, seterror] = useState(null);
  const [disable, setDisable] = useState(true);
  const [processing, setprocessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const requestURL = `/Payment/create?total=${getBasketTotal(basket) * 100}`;
        const response = await axios.post(requestURL);
  
        // Ensure that the response contains the expected format
        if (response.data.clientSecret) {
          setClientSecret(response.data.clientSecret);
        } else {
          // Handle the error case
          seterror("Invalid client secret format received from the server");
        }
      } catch (error) {
        console.error("Error fetching client secret:", error.message);
        // Handle the error case
        seterror("An error occurred while fetching the clientSecret.");
      }
    };
  
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setprocessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent=payment conformation
        setSucceeded(true);
        seterror(null);
        setprocessing(false);
        navigate("/orders", { replace: true });
      });
  };
  const handleChenge = (event) => {
    setDisable(event.empty);
    seterror(event.error ? event.error.massage : "");
  };

  return (
    <>
      <Header />
      <div className="Payment">
        <div className="Payment-Container">
          {/* Adress Section */}
          <div className="Payment-Section">
            <div className="Payment-Tital">
              <h3>Delivery Address</h3>
            </div>
            <div className="Payment-Address">
              <p>{user?.email}</p>
              <p>hey iam address Los angeles,CA</p>
            </div>
          </div>

          {/* review items section */}
          <div className="Payment-Review-Section">
            <div className="review-heading">
              <h3>Review items and delivery</h3>
            </div>
            <div className="Payment-items">
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
          {/* payment method */}
          <div className="Payment-Section">
            <div className="Payment-Tital">
              <h3>Payment method</h3>
            </div>
            <div className="Payment-Details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChenge} />
                <div className="paymenrt-pricecontainer">
                  <CurrencyFormat
                    renderText={(value) => <h3>Order Total: {value}</h3>}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType="text"
                    thousandSeparator={true}
                    prefix="$"
                  />
                  <button disabled={processing || disable || succeeded}>
                    <span>{processing ? <p>Prosessing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {error && <div> {error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
