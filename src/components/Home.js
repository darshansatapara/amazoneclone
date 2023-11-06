import React from "react";
import "./Home.css";
import Product from "./Product";
import productimg1 from "../images/canon.jpg";
import productimg2 from "../images/song-image.jpeg";
import Header from "./Header";
function Home() {
  return (
    <div className="Home">
      <Header/>
      <div className="Home-container">
        <div className="Home-banner"></div>
        <div className="Home-content">
          <div className="Home-row">
            <Product
              id="99146"
              tital="canon"
              price={26.3}
              image={productimg1}
              rating={4}
              discription="It is the first copy of the mac air 1500"
            />
            <Product
              id="991345"
              tital={"mac Air "}
              price={26.3}
              image={productimg2}
              rating={4}
            />
          </div>
          <div className="Home-row">
            <Product
              id="99134"
              tital={"macbook"}
              price={26.3}
              image={productimg1}
              rating={4}
            />
            <Product
              id="99135"
              tital={"macwatch"}
              price={26.3}
              image={productimg2}
              rating={4}
            />
            <Product
              id="99136"
              tital={"macpro"}
              price={26.3}
              image={productimg1}
              rating={4}
            />
            <Product
              id="99137"
              tital={"macsmall"}
              price={26.3}
              image={productimg1}
              rating={4}
            />
            <Product
              id="99138"
              tital={"macbook pro max"}
              price={26.3}
              image={productimg2}
              rating={4}
            />
            <Product
              id="99139"
              tital={"mac Air 1500"}
              price={26.3}
              image={productimg1}
              rating={4}
            />
            <Product
              id="99140"
              tital={"macbook 3"}
              price={26.3}
              image={productimg1}
              rating={4}
            />
          </div>
          <div className="Home-row">
            <Product
              id="99132"
              tital={"macbook2"}
              price={26.3}
              image={productimg2}
              rating={4}
            />
            <Product
              id="99133"
              tital={"macbook 1"}
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
