import React, {useContext, useEffect, useRef, useState} from 'react'
import axios from 'axios';
import * as THREE from 'three'
import Construction from './Construction/MainConstruction'
import './eshop.css'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from '../../public/DRACOLoader';
import { ShopContext } from '../context/shop-context';
import { ArrowCounterClockwise } from '@phosphor-icons/react';
function Parts() {
const {addToCart, removeFromCart, getCartAmount} = useContext(ShopContext)
// const {} = useContext(ShopContext)
const totalAmount = getCartAmount()

  const [itemsList, setItemsList] = useState([]);
  const getItems = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/items`, {}).then((res) => {
      console.log(res.data)
      setItemsList(res.data);
      // setVariationList(res.data[1])
    });
  };
  
  useEffect(() => {
    getItems()
  },[])
  const toPascalCase = str => (str.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join(' ');


  return (
    <div className='e-shop'>

    <div className='parts-products'>

      {itemsList.map((item) => 
      <div key={item.id} className='product'>
        <h3>{toPascalCase(item.name)}</h3> 
       
        <p>{item.price}€</p>
<div className='cart-actions'>

        <button onClick={() => removeFromCart(item)}>Remove</button>
        <button onClick={() => addToCart(item)}>Add to cart</button>
</div>
      </div>)}
    </div>
<div className='sub-cart'>
    <h3>{totalAmount}€</h3>

    <button onClick={() => localStorage.clear()}>Clear cart <ArrowCounterClockwise size={26} /></button>
    </div>
    </div>
  )
}

export default Parts