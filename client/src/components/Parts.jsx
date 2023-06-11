import React, {useContext, useEffect, useRef, useState} from 'react'
import axios from 'axios';
import * as THREE from 'three'
import Construction from './Construction/MainConstruction'
import './eshop.css'
import { Environment, OrbitControls, useGLTF, useSelect } from '@react-three/drei';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from '../../public/DRACOLoader';
import { ShopContext } from '../context/shop-context';
import { ArrowCounterClockwise } from '@phosphor-icons/react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/CartReducer';
import Product from './Product';
function Parts() {

  const dispatch = useDispatch()
const {addToCart, removeFromCart, getCartAmount} = useContext(ShopContext)

const totalAmount = getCartAmount()

  const [itemsList, setItemsList] = useState([]);
  const cartItemsObj = useSelector((state) => state.cart_items.cartItems)
  console.log(cartItemsObj)
  const cartItems = Object.values(cartItemsObj).filter(item => item && item !== null);
  const getItems = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/items`, {}).then((res) => {
      setItemsList(res.data);
      // setVariationList(res.data[1])
    });
  };
  

  const toPascalCase = str => (str.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join(' ');

  console.log(localStorage)
  const handleClearStorage = () => {
  
    // localStorage.clear()
    dispatch(clearCart())
    // removeFromCart(itemsList)

   
  }

  useEffect(() => {
    getItems()
  },[])



  return (
    <div className='e-shop'>

    <div className='parts-products'>

      {itemsList.map((item) => 
      <div key={item.id} className='product'>
        <h3>{item.name === "pickup_cover" ? (
          item.name = "Humbucker")
         : (toPascalCase(item.name))}</h3> 
 <Product/>
        <p>{item.price}€</p>
<div className='cart-actions'>

        <button onClick={() => removeFromCart(item)}>Remove</button>
        <p> {cartItems.find(element => element.item.id === item.id)?.qty || 0}</p>
        <button onClick={() => addToCart(item)}>Add to cart</button>
</div>
      </div>)}
    </div>
<div className='sub-cart'>
    <h3>{totalAmount}€</h3>

    <button onClick={() => {handleClearStorage()} }>Clear cart <ArrowCounterClockwise size={26} /></button>
    </div>
    </div>
  )
}

export default Parts