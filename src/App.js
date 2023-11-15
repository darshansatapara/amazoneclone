  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import "./App.css";
  import Home from "./components/Home";
  import Checkout from "./components/Checkout";
  import Singuporin from "./components/Singuporin";
  import Signin from "./components/Signin";
  import { useEffect, useState } from "react";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { useStateValue } from "./StateProvider";
  import Payment from "./components/Payment";
  import { Elements } from "@stripe/react-stripe-js";
  import { loadStripe } from "@stripe/stripe-js";

  const promise = loadStripe(
    `pk_test_51OA6XESBqzsRg5V3tVNnfuxfOFsWTiHdPHSWlo2zKJJUu9A5yoKm6dsCZHrf0VHKXxi39VISGoHtWQ6GxmiWIsTN002RDMyhl6`
  );

  function App() {
    const [{}, dispatch] = useStateValue();
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
      // Get the Firebase Auth instance.
      const auth = getAuth();

      // Listen for authentication state changes.
      onAuthStateChanged(auth, (authUser, name) => {
        setAuthUser(authUser);
        if (authUser) {
          console.log("the user is >>> ", authUser);
          // The user just logged in / the user was logged in.
          dispatch({
            type: "SET_USER",
            user: authUser,
          
          });
        } else {
          // The user is logged out.
          dispatch({
            type: "SET_USER",
            user: null,
            
          });
        }
      });
    }, [dispatch]);

    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sing-upORlog-in" element={<Singuporin />}></Route>
            <Route path="/Signin" element={<Signin />}></Route>

            <Route
              path="/Payment"
              element={
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              }
            ></Route>

            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

  export default App;
