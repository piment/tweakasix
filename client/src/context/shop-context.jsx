import React, { createContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartAdd, cartRemove } from '../features/CartReducer';
export const ShopContext = createContext([])



export const ShopContextProvider = (props) => {
    const cartItemsObj = useSelector((state) => state.cart_items.cartItems)
    const cartItems = Object.values(cartItemsObj).filter(item => item !== null);
    const dispatch = useDispatch();

    const addToCart = (item) => {
    
      dispatch(cartAdd(item));
    };
  
    const removeFromCart = (item) => {
      dispatch(cartRemove(item));
  
    };


    const getCartAmount =() => {
      console.log(cartItems)
        let totalAmount = 0
        if (cartItems.length >=1) {
          for (const itemId in cartItems) {
            const cartItem = cartItems[itemId];
            
            if (cartItem && cartItem.item) {
              // If the cartItem exists and has the 'item' property, access the item object
              const item = cartItem.item;
              totalAmount += cartItem.qty * item.price;
            }
          }
        } else if (cartItems.length <= 0) {
          totalAmount = 0;
        }
        return totalAmount
    }



    const contextValue = { cartItems, addToCart, removeFromCart, getCartAmount}
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}








//     console.log(cartInfo)
//     const addToCart = (item) => {
//   cartInfo.push(item)
//        const itemId = item.id
//         setCartItems((prev) => ({...prev, [itemId]: (prev[itemId] ?? 0) +1}))
//     }

//     const removeFromCart = (item) => {
//        const itemId = item.id
//         setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}))
//     }