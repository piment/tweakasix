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
    <>  
    <Selector/>
    <div className='title-overlay'>
    <div className='home'>  
          <h1>Welcome <br/> <span className='to'>to</span></h1>
  
        </div>
    <img src={logo} alt="logo" className='logo'/>
</div>
</>
  
  )
}

export default Home