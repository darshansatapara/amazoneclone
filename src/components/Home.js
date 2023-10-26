import React from "react";

function Home() {
  return (
    <div className="Home">
      <div className="Home-container">
        <div className="Home-banner">
          <img
            src="./images/home bg img.jpg"
            alt=""
            style={{
              height: "600px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              maskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            }}
          />
        </div>
        <div className="Home-content">
          <div className="Home-row">
            <p>one</p>
            <p>one</p>
            <p>one</p>
          </div>
          <div className="Home-row">
            <p>Product</p>
            <p>Product</p>
            <p>Product</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
