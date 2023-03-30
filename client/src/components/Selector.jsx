import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Body from "./Body";
import Neck from "./Neck";
import Pickups from "./Pickups";

function Selector() {
  const initialValues = {
    name: "",
    price: 0,
  };
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

  const saveGuitar = () => {
    axios.post("http://localhost:3001/saveguitar");
  };

  const total = parseInt(body.price) + parseInt(neck.price) + parseInt(pickup1.price)+ parseInt(pickup2.price)
  useEffect(() => {
    getItems();
  }, []);

  // console.log(body)
  return (
    <div>
      <div className="selector-section">

        <Body itemsList={itemsList} setBody={setBody}/>
        <Neck itemsList={itemsList} setNeck={setNeck}/>
        <Pickups itemsList={itemsList} setPickup1={setPickup1} setPickup2={setPickup2}/>
 
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
   
      <h3>
        {body.name}.................................. {body.price}
      </h3>
      <h3>
        {neck.name} ..................................{neck.price}
      </h3>
      <h3>
        {pickup1.name} ..................................{pickup1.price}
      </h3>  
      <h3>
        {pickup2.name} ..................................{pickup2.price}
      </h3> 
       <h3>{total}$</h3>
      <button>Save this guitar</button>
    </div>
  );
}

export default Selector;
