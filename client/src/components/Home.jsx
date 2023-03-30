import React, { useEffect, useState } from 'react'
import logo from '../assets/img/tweakasix.png'
// import './App.css'
import axios from "axios";
import './Home.css'
import Selector from './Selector';


function Home() {


  return (
    <div className='home'>  
          <h1>Welcome <br/>to</h1>
    <img src={logo} alt="logo" className='logo'/>
  
    <Selector/>
  
        </div>


  
  )
}

export default Home