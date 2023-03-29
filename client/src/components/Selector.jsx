import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function Selector() {
  const [itemsList, setItemsList] = useState([]);
  const [boPrice, setBoPrice] = useState(0);
  const [nePrice, setNePrice] = useState(0);
  const [piPrice, setPiPrice] = useState(0);



  const getItems = () => {
    axios.get("http://localhost:3001/items", {}).then((res) => {
      setItemsList(res.data);
    });
  };



console.log(boPrice)


let total = (parseInt(boPrice)+parseInt(nePrice)+parseInt(piPrice))






  useEffect(() => {
    getItems();
  }, []);


  return (
    <div>
    <div className="selector-section">
      Body:
      <select name="" id="" onChange={(e) => {setBoPrice(e.target.value)}}>
        {itemsList
          .filter((item) => item.id_category === 1)
          .map((filteredItem) => (
            <option value={filteredItem.price}>
              {filteredItem.name} {filteredItem.price}$
            </option>
          ))}
      </select>
      Neck:
      <select name="" id="" onChange={(e) => setNePrice(e.target.value)}>
        {itemsList
          .filter((item) => item.id_category === 2)
          .map((filteredItem) => (
            <option value={filteredItem.price}>
              {filteredItem.name} {filteredItem.price}$
            </option>
          ))}
      </select>
      Pickups
      <select name="" id="" onChange={(e) => setPiPrice(e.target.value)}>
        {itemsList
          .filter((item) => item.id_category === 3)
          .map((filteredItem) => (
            <option value={filteredItem.price}>
              {filteredItem.name} {filteredItem.price}$
            </option>
          ))}
      </select>
      Metal:
      <select name="" id=""></select>
      Wiring :<select name="" id=""></select>
    </div>
    <h3>{total}</h3>
    </div>
  );
}

export default Selector;
