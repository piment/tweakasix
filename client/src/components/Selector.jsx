import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function Selector() {
  const initialValues = {
    bodyname : '',
    bodyprice : 0
  }
  const [itemsList, setItemsList] = useState([]);
  // const [boPrice, setBoPrice] = useState(0);
  // const [nePrice, setNePrice] = useState(0);
  // const [piPrice, setPiPrice] = useState(0);
  const [body, setBody] = useState(initialValues);
  const [neck, setNeck] = useState({});
  const [pickup, setPickup] = useState({});


  const getItems = () => {
    axios.get("http://localhost:3001/items", {}).then((res) => {
      console.log(res.data)
      setItemsList(res.data[0]);
    });
  };

  const handleBody = (e) => {
    // const { name, value } = e.target;
    console.log(e.target.value)
    // const name = e.target.getAttribute("name");
    // setBody({...body, bodyname: e.target.value});
  };
// let total = (parseInt(boPrice)+parseInt(nePrice)+parseInt(piPrice))

const saveGuitar = () => {
  axios.post("http://localhost:3001/saveguitar")
}




  useEffect(() => {
    getItems();
  }, []);


  return (
    <div>
    <div className="selector-section">
      Body:
      <select  onChange={(e) => handleBody(e)}>
        {itemsList
          .filter((item) => item.id_category === 1)
          .map((filteredItem, key) => (
            <option  value={filteredItem.value} key={key} >
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
      <select name="" id="">
      {itemsList
          .filter((item) => item.variation_id)
          .map((filteredItem) => (
            <option value={filteredItem.price}>
              {filteredItem.name} {filteredItem.variation}{filteredItem.price}$
            </option>
          ))}
      </select>
      Wiring :<select name="" id="">
      {itemsList
          .filter((item) => item.id_category === 4)
          .map((filteredItem) => (
            <option value={filteredItem.price}>
              {filteredItem.name} {filteredItem.price}$
            </option>
          ))}
      </select>
    </div>
    {/* <h3>{total}</h3> */}
  {body.bodyname}
    <button>Save this guitar</button>
    </div>
  );
}

export default Selector;
