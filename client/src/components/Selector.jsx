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



  
  const [itemsList, setItemsList] = useState([]);
  const [guitarsList, setGuitarsList] = useState([])
  const [body, setBody] = useState(initialValues);
  const [neck, setNeck] = useState(initialValues);
  const [pickup1, setPickup1] = useState(initialValues);
  const [pickup2, setPickup2] = useState(initialValues);
 const [model, setModel] = useState('1')
 const [changed, setChanged] = useState(false)
  const getItems = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/items`, {}).then((res) => {
      // console.log(res.data)
      // setItemsList(res.data[0]);
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

      setGuitarsList(res.data)

    })
  }

  const total = parseInt(body.price) + parseInt(neck.price) + parseInt(pickup1.price)+ parseInt(pickup2.price)
  useEffect(() => {
    getGuitars()
    getItems();
  }, []);


 



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
   <Visualizer guitarsList={guitarsList} model={model} setModel={setModel} changed={changed} setChanged={setChanged}/>

   </div>
 
    </div>
  );
}

export default Selector;
