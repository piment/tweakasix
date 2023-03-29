import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";


function Selector() {
    const [itemsList, setItemsList] = useState([]);
    const body = []
    const neck = []


    const getItems = () => {
        axios.get("http://localhost:3001/items", {}).then((res) => {
            // console.log(res.data)
          setItemsList(res.data);
        });
        // for(let i = 0 ; i< itemsList.length; i++){
        //   if(itemsList[i].id_category == 1){
        //     body.push(itemsList[i])
        //   } else if (itemsList[i].id_category == 2){
        //     neck.push(itemsList[i])
        //   }
        // }
      };
      console.log(itemsList)
      
      
      useEffect(() => {
        getItems()
        console.log('body:' + body.length + 'neck:' + neck.length )
    }, [])
  return (
    <div className="selector-section">
    Body:
      <select name="" id="">
     {itemsList.filter(item => item.id_category === 1).map(filteredItem => (
    <option>
      {filteredItem.name} {filteredItem.price}$
    </option>
  ))}
      </select> 
      Neck:
      <select name="" id="">
      {itemsList.filter(item => item.id_category === 2).map(filteredItem => (
    <option>
      {filteredItem.name} {filteredItem.price}$
    </option>
  ))}
      </select>
      Pickups
      <select name="" id=""></select>
      Metal:
      <select name="" id=""></select>
      Wiring :
      <select name="" id=""></select>
    </div>
  );
}

export default Selector;
