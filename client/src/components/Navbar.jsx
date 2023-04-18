import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-main">
      <div >
        <ul className="navbar-cont">
            <div id="triangle-code"></div>
          <li className="indiv-parts">Spare parts</li>
          <li className="account">My Account</li>
          <li className="cart">My Cart</li>
        </ul>
        <div></div>
      </div>
    </div>
  );
}

export default Navbar;
