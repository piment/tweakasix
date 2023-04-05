import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function Pickups({ itemsList, setPickup1, setPickup2 }) {
  return (
    <div>
      Neck Pickup :
      <select
        name=""
        id=""
        onChange={(e) =>
          setPickup1({
            name: e.target.value.split(",")[0],
            price: e.target.value.split(",")[1],
            id: e.target.value.split(",")[2],
          })
        }
      >
        {itemsList
          .filter(
            (item) => item.id_category === 3 && !item.name.includes("Bridge")
          )
          .map((filteredItem, key) => (
            <option key={key}
            value={[filteredItem.name ,filteredItem.price,filteredItem.id]}
            >
              {filteredItem.name} {filteredItem.price}$
            </option>
          ))}
      </select>
      Bridge Pickup :
      <select
        name=""
        id=""
        onChange={(e) =>
          setPickup2({
            name: e.target.value.split(",")[0],
            price: e.target.value.split(",")[1],
            id: e.target.value.split(",")[2],
          })
        }
      >
        {itemsList
          .filter(
            (item) => item.id_category === 3 && !item.name.includes("Neck")
          )
          .map((filteredItem, key) => (
            <option
              value={[filteredItem.name, filteredItem.price, filteredItem.id]}
              key={key}
            >
              {filteredItem.name} {filteredItem.price}$
            </option>
          ))}
      </select>
    </div>
  );
}

export default Pickups;
