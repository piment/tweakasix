import React, { useContext, useEffect } from "react";
import Construction from "./Construction/MainConstruction";
import { ShopContext } from "../context/shop-context";
import { useSelector } from "react-redux";
import './eshop.css'
function Cart() {
  const { addToCart, removeFromCart, getCartAmount } = useContext(ShopContext);
  const totalAmount = getCartAmount();
  const cartItemsObj = useSelector((state) => state.cart_items.cartItems)
  console.log(cartItemsObj)
  const cartItems = Object.values(cartItemsObj).filter(item => item && item !== null);
  const toPascalCase = str => (str.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join(' ');


  return (
    <div>
      {/* <Construction/> */}
      <div className="cart">
        <h1>Cart</h1>

        <div className="cart-items">
          {cartItems && cartItems.length != 0 && (cartItems.map((itemInfo) => {

if (itemInfo.item) { // Add this check
  return (
    <div key={itemInfo.id} className="cart-list-item">
      <div className="item-unit">
        <h2>{toPascalCase(itemInfo.item.name)}</h2>
        <p id="unit"> unit: {itemInfo.item.price}€</p>
      </div>
      <div className='cart-actions'>
        <button onClick={() => removeFromCart(itemInfo.item)}>-</button>
        <p>{itemInfo.qty}</p>
        <button onClick={() => addToCart(itemInfo.item)}>+</button>
      </div>
    </div>
  );
}
return null; // Return null for items without 'item' property
})
)}

          {cartItems.length === 0 &&(
        <div className="empty-cart"><p id="title">Your cart is empty</p>

       <div className="empty-redirect"> 
        <a href="/">Create your guitar</a> or <a href="/parts">find spare parts</a>!
        </div></div>
         )}

          <div className="cart-total"><p>Total: {totalAmount}€</p></div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
