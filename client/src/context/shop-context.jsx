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
      
        let totalAmount = 0
        for (const itemId in cartItems) {
            const item = cartItems[itemId].item; // Access the item object
      
            totalAmount += cartItems[itemId].qty * item.price;
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