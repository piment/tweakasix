import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function Body({itemsList, setBody}) {


  return (
    <div>
      <div>
        Body:
        <select
          onChange={(e) =>

          setBody({
              name: e.target.value.split(" ")[0],
              price: e.target.value.split(" ")[1],
            })
          }
        >
          {itemsList
            .filter((item) => item.id_category === 1)
            .map((filteredItem, key) => (
              <option
                key={key}
              >
                {filteredItem.name} {filteredItem.price}$
              </option>
            ))}
        </select>
    
      </div>

    </div>
  );
}

export default Body;
