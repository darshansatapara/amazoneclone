import React from "react";
import "./Home.css";
import Product from "./Product";
import productimg1 from "../images/canon.jpg";
function Home() {
  return (
    <div className="Home">
      <div className="Home-container">
        <div className="Home-banner"></div>
        <div className="Home-content">
          <div className="Home-row">
            <Product
            id="99132"
              title={"mac Air 1500"}
              price={26.3}
              image={productimg1}
              rating={4}
            />
            <Product
             id="99133"
              title={"mac Air 1500"}
              price={26.3}
              image={productimg1}
              rating={4}
            />
          </div>
          <div className="Home-row">
            <Product
             id="99134"
              title={"mac Air 1500"}
              price={26.3}
              image={productimg1}
              rating={4}
            />
            <Product
             id="99135"
              title={"mac Air 1500"}
              price={26.3}
              image={productimg1}
              rating={4}
            />
            <Product
             id="99136"
              title={"mac Air 1500"}
              price={26.3}
              image={productimg1}
              rating={4}
            />
            <Product
             id="99137"
              title={"mac Air 1500"}
              price={26.3}
              image={productimg1}
              rating={4}
            />
            <Product
             id="99138"
              title={"mac Air 1500"}
              price={26.3}
              image={productimg1}
              rating={4}
            />
            <Product
             id="99139"
              title={"mac Air 1500"}
              price={26.3}
              image={productimg1}
              rating={4}
            />
            <Product
             id="99140"
              title={"mac Air 1500"}
              price={26.3}
              image={productimg1}
              rating={4}
            />
          </div>
          <div className="Home-row">
            <Product
            id="99132"
              title={"mac Air 1500"}
              price={26.3}
              image={productimg1}
              rating={4}
            />
            <Product
             id="99133"
              title={"mac Air 1500"}
              price={26.3}
              image={productimg1}
              rating={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
