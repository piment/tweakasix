import { useState, useEffect, useRef } from "react";
import React from "react";
import axios from "axios";

function Body({ itemsList, setBody }) {
  return (
    <div>
      <div>
        Body:
        <select
          onChange={(e) =>
            setBody({
              name: e.target.value.split(",")[0],
              price: e.target.value.split(",")[1],
              id: e.target.value.split(",")[2],
            })
          }
        >
          {itemsList
            .filter((item) => item.id_category === 1)
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
    </div>
  );
}

export default Body;
