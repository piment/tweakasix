import React, { useEffect, useState } from 'react'
import logo from '../assets/img/tweakasix.png'
// import './App.css'
import axios from "axios";
import './Home.css'
import Selector from './Selector';
import { useDispatch, useSelector } from 'react-redux';
import { addColor } from '../features/Colors';


function Home() {
  const dispatch = useDispatch()



  return (
    <div className='home'>  
          <h1>Welcome <br/>to</h1>
    <img src={logo} alt="logo" className='logo'/>
  
    <Selector/>
  {/* <div>
    {Object.keys(colorList).map((color, key) => {return <h4 key={key}>{colorList[color]} </h4>})}
  </div> */}
        </div>


  
  )
}

export default Home