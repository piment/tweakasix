import React, { useContext } from 'react'
import Construction from './Construction/MainConstruction'
import { ShopContext } from '../context/shop-context'
function Cart() {

  const {cartItems, getCartAmount} = useContext(ShopContext)
  const totalAmount = getCartAmount()


  return (
    <div>
      {/* <Construction/> */}
      <div className='cart'>
        <h1>Cart</h1>

        <div className='cart-items'>

          <h3>{totalAmount}</h3>
        </div>
      </div>
    </div>
  )
}

export default Cart