import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Body from "./Body";
import Neck from "./Neck";
import Pickups from "./Pickups";
import Visualizer from "./Visualizer";
import './Selector.css'

function Selector() {
  const initialValues = {
    name: "",
    price: 0,
    id:0
  };



  
  const [itemsListFull, setItemsListFull] = useState([]);
  const [guitarsList, setGuitarsList] = useState([])
  const [body, setBody] = useState(initialValues);
  const [neck, setNeck] = useState(initialValues);
  const [pickup1, setPickup1] = useState(initialValues);
  const [pickup2, setPickup2] = useState(initialValues);
 const [model, setModel] = useState('1')
 const [changed, setChanged] = useState(false)
const [gtrPrice, setGtrPrice] = useState()



  const getItemsFullGtr = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/itemsall`, {params :{model : model}}).then((res) => {
      console.log(res.data)
      setItemsListFull(res.data);
      // setVariationList(res.data[1])
    });
  };

  const addGuitar = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/items/saveguitar`, {
body, neck, pickup1, pickup2
    })
  };

  const getGuitars = () =>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/items/getguitars`,{}).then((res) => {
console.log(res.data)
      setGuitarsList(res.data)

    })
  }





function fullPrice(){
  let fullGtrPrice =0
  for(let i = 0; i< itemsListFull.length; i++){
   fullGtrPrice += itemsListFull[i].price
  
  }
  // return fullGtrPrice  
 setGtrPrice(fullGtrPrice)
}

useEffect(() => {
  

  fullPrice()
},[setModel])



useEffect(() => {
  
  getItemsFullGtr();
  // fullPrice()
},[])




  const handleModelSelect = (e) => {
  setModel(e.target.value)
  setChanged(!changed)
}


  return (
    <div className="main-select"> 
     <div className="buttonselect">
   <button className={model == 1? "es-icon-selected" : "es-icon"} value="1" onClick={(e) => {{e.preventDefault(),handleModelSelect(e)}}} alt='ES-335'></button>
   <button className={model == 2 ? "tele-icon-selected" : "tele-icon"} value="2" onClick={(e) => {e.preventDefault(),handleModelSelect(e)}} alt='Telecaster'></button>
   </div>

   <div className="visu-sum">
   <Visualizer guitarsList={guitarsList} model={model} setModel={setModel} changed={changed} setChanged={setChanged} gtrPrice={gtrPrice}/>

   </div>
 
    </div>
  );
}

export default Selector;
