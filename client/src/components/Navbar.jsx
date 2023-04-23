import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-main">
      <div >
            <div id="triangle-code"></div>
        <ul className="navbar-cont">
          <li className="indiv-parts"  ><a href="/parts" >Spare parts</a></li>
          <li className="account"> <a href="/account"> My Account</a></li>
          <li className="cart"><a href="/cart">My Cart</a></li>
        </ul>
        <div></div>
      </div>
    </div>
  );
}

export default Navbar;
