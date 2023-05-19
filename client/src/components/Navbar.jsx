import React from "react";
import logo from "../assets/img/tweakasix.png";

import "./Navbar.css";

function Navbar() {
  const isHomePage = window.location.pathname == '/' || '';
  return (
    <div className="navbar">
    <a href="/"><img src={logo} alt="logo" className={`navbar-logo ${isHomePage ? 'hidden' : 'visible'}`} /></a>
    <div className="navbar-main">
      <div className="navbar-triangle">
            <div id="triangle-code"></div>
        <ul className="navbar-cont">
          <li className="indiv-parts-link"  ><a href="/parts" >Spare parts</a></li>
          <li className="account-link"> <a href="/account"> My Account</a></li>
          <li className="cart-link"><a href="/cart">My Cart</a></li>
        </ul>
        <div></div>
      </div>
    </div>
   </div>
  );
}

export default Navbar;
