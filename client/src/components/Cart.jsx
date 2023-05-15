import React, { useContext } from "react";
import Construction from "./Construction/MainConstruction";
import { ShopContext } from "../context/shop-context";
import { useSelector } from "react-redux";
import './eshop.css'
function Cart() {
  const { getCartAmount } = useContext(ShopContext);
  const totalAmount = getCartAmount();
  const cartItemsObj = useSelector((state) => state.cart_items.cartItems)
  const cartItems = Object.values(cartItemsObj).filter(item => item !== null);
  const toPascalCase = str => (str.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join(' ');

  console.log(cartItems);
  return (
    <div>
      {/* <Construction/> */}
      <div className="cart">
        <h1>Cart</h1>

        <div className="cart-items">
          {cartItems.length != 0 && (cartItems.map((itemInfo) => {
            console.log(itemInfo.item.name);
         return   <div key={itemInfo.id}> <h2>{toPascalCase(itemInfo.item.name)}  x {itemInfo.qty}</h2></div>;
          }))}

          <h3>{totalAmount}</h3>
        </div>
      </div>
    </div>
  );
}

export default Cart;
