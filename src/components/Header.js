import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import headerlogo from "../images/header-logo.png"

function Header() {
  return (
    <div className="Header">
      <div className="Header-logo">
        <img src={headerlogo} alt="logo" />
      </div>
      <div className="Header-search">
        <input className="Header-searchInput" type="text" placeholder="Search for anything.."/>
        <div className="Header-searchIconContainer">
          <SearchIcon />
        </div>
      </div>
      <div className="Header-navItems">
        <div className="Header-option">
          <span className="Header-optionLineOne">Hello,Darsh</span>
          <span className="Header-optionLineTwo">Sign in</span>
        </div>
      </div>
      <div className="Header-option">
        <span className="Header-optionLineOne">Return</span>
        <span className="Header-optionLineTwo">& Orders</span>
      </div>
      <div className="Header-optionCart">
        <ShoppingBasketIcon />
        <span className="Header-cartCount">0</span>
      </div>
    </div>
  )
};

export default Header;
