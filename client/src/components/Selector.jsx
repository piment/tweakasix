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

  const [bodyColors, setBodyColors] = useState({})

  
  const [itemsList, setItemsList] = useState([]);
  const [variationList, setVariationList] = useState([]);
  const [body, setBody] = useState(initialValues);
  const [neck, setNeck] = useState(initialValues);
  const [pickup1, setPickup1] = useState(initialValues);
  const [pickup2, setPickup2] = useState(initialValues);

  const getItems = () => {
    axios.get("http://localhost:3001/items", {}).then((res) => {
      console.log(res.data);
      setItemsList(res.data[0]);
      setVariationList(res.data[1])
    });
  };

  const addGuitar = () => {
    axios.post("http://localhost:3001/items/saveguitar", {
body, neck, pickup1, pickup2
    })
  };

  const total = parseInt(body.price) + parseInt(neck.price) + parseInt(pickup1.price)+ parseInt(pickup2.price)
  useEffect(() => {
    getItems();
  }, []);


  return (
    <div className="main-select">
      <div className="selector-section">

        <Body itemsList={itemsList} setBody={setBody}/>
        <Neck itemsList={itemsList} setNeck={setNeck}/>
        <Pickups itemsList={itemsList} setPickup1={setPickup1} setPickup2={setPickup2}/>
 <div>
        Wiring :
        <select name="" id="">
          {itemsList
            .filter((item) => item.id_category === 4)
            .map((filteredItem) => (
              <option value={filteredItem}>
                {filteredItem.name} {filteredItem.price}$
              </option>
            ))}
        </select>
      </div>
   </div>
   <div className="visu-sum">
   <Visualizer setBodyColors={setBodyColors}/>
   <div className="list-sum">

      <div className="item-price">
       <span> {body.name}</span> <span>{body.price}$</span>
      </div >
      <div className="item-price">
      <span> {neck.name}</span>  <span>{neck.price}$</span>
      </div >
      <div className="item-price">
      <span>{pickup1.name}</span>  <span>{pickup1.price}$</span>
      </div >  
      <div className="item-price">
      <span> {pickup2.name} </span> <span>{pickup2.price}$</span>
      </div > 
       <h3>{total}$</h3>
      <button onClick={addGuitar}>Save this guitar</button>
   </div></div>
    </div>
  );
}

export default Selector;
