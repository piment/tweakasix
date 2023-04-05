import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function Neck({itemsList, setNeck}) {
 
  return (
    <div>
     
        Neck:
        <select
          name=""
          id=""
          onChange={(e) =>
            setNeck({
              name: e.target.value.split(",")[0],
              price: e.target.value.split(",")[1],
              id: e.target.value.split(",")[2]
            })
          }
        >
          {itemsList
            .filter((item) => item.id_category === 2)
            .map((filteredItem, key) => (
              <option
              value={[filteredItem.name ,filteredItem.price,filteredItem.id]}
                key={key}
              >
                {filteredItem.name} {filteredItem.price}$
              </option>
            ))}
        </select>
      
 

    </div>
  );
}

export default Neck;
