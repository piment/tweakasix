import React, { createContext, useState } from 'react'


export const ShopContext = createContext({})

   const cartInfo = []
    const defaultCart = {}
    
export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})

    console.log(cartInfo)
    const addToCart = (item) => {
  cartInfo.push(item)
       const itemId = item.id
        setCartItems((prev) => ({...prev, [itemId]: (prev[itemId] ?? 0) +1}))
    }

    const removeFromCart = (item) => {
       const itemId = item.id
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}))
    }


    const getCartAmount =(item) => {
        let totalAmount = 0
        for (const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = cartInfo.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }



    const contextValue = { cartItems, addToCart, removeFromCart, getCartAmount}
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}