import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function Selector() {
  const initialValues = {
    name: "",
    price: "",
  };
  const [itemsList, setItemsList] = useState([]);
  const [variationList, setVariationList] = useState([]);
  const [body, setBody] = useState(initialValues);
  const [neck, setNeck] = useState(initialValues);
  const [pickup, setPickup] = useState(initialValues);

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

  const total = parseInt(body.price) + parseInt(neck.price)
  useEffect(() => {
    getItems();
  }, []);

  // console.log(body)
  return (
    <div>
      <div className="selector-section">
        Body:
        <select
          onChange={(e) =>
            setBody({
              name: e.target.value.split(",")[1],
              price: e.target.value.split(",")[0],
            })
          }
        >
          {itemsList
            .filter((item) => item.id_category === 1)
            .map((filteredItem, key) => (
              <option
                name={filteredItem.name}
                value={[parseInt(filteredItem.price), filteredItem.name]}
                key={key}
              >
                {filteredItem.name} {filteredItem.price}$
              </option>
            ))}
        </select>
        Neck:
        <select
          name=""
          id=""
          onChange={(e) =>
            setNeck({
              name: e.target.value.split(",")[1],
              price: e.target.value.split(",")[0],
            })
          }
        >
          {itemsList
            .filter((item) => item.id_category === 2)
            .map((filteredItem, key) => (
              <option
                name={filteredItem.name}
                value={[parseInt(filteredItem.price), filteredItem.name]}
                key={key}
              >
                {filteredItem.name} {filteredItem.price}$
              </option>
            ))}
        </select>
       Neck Pickups
        <select
          name=""
          id=""
          onChange={(e) =>
            setPickup({
              name: e.target.value.split(",")[1],
              price: e.target.value.split(",")[0],
            })
          }
        >
          {itemsList
            .filter((item) => item.id_category === 3 && !item.name.includes('Bridge'))
            .map((filteredItem, key) => (
              <option
              name={filteredItem.name}
              value={[parseInt(filteredItem.price), filteredItem.name]}
              key={key}
            >
                {filteredItem.name} {filteredItem.price}$
              </option>
            ))}
        </select>
        Bridge Pickup
        <select
          name=""
          id=""
          onChange={(e) =>
            setPickup({
              name: e.target.value.split(",")[1],
              price: e.target.value.split(",")[0],
            })
          }
        >
          {itemsList
            .filter((item) => item.id_category === 3 && !item.name.includes('Neck'))
            .map((filteredItem, key) => (
              <option
              name={filteredItem.name}
              value={[parseInt(filteredItem.price), filteredItem.name]}
              key={key}
            >
                {filteredItem.name} {filteredItem.price}$
              </option>
            ))}
        </select>
        Wiring :
        <select name="" id="">
          {itemsList
            .filter((item) => item.id_category === 4)
            .map((filteredItem) => (
              <option value={filteredItem.price}>
                {filteredItem.name} {filteredItem.price}$
              </option>
            ))}
        </select>
      </div>
   
      <h3>
        {body.name}.................................. {body.price}$
      </h3>
      <h3>
        {neck.name} ..................................{neck.price}$
      </h3>
      <h3>
        {pickup.name} ..................................{pickup.price}$
      </h3>  
       <h3>{total}</h3>
      <button>Save this guitar</button>
    </div>
  );
}

export default Selector;
