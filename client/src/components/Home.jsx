import React, { useEffect, useState } from 'react'
import logo from '../assets/img/tweakasix.png'
import plank from '../assets/img/plankHorNoShadow-min.png'
// import './App.css'
import axios from "axios";
import './Home.css'
import Selector from './Selector';
import { useDispatch, useSelector } from 'react-redux';
import { addColor } from '../features/Colors';
import Navbar from './Navbar';


function Home() {
  const dispatch = useDispatch()



  return (
    <>  
    <Navbar/>
    <Selector/>
    <div className='title-overlay'>
    <div className='home'>  
          <h1>Welcome <br/> <span className='to'>to</span></h1>
  
        </div>
        {/* <img className='plank' src={plank}></img> */}
    <img src={logo} alt="logo" className='logo'/>
</div>
</>
  
  )
}

export default Home