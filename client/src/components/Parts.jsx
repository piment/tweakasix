import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Construction from './Construction/MainConstruction'
import './eshop.css'

function Parts() {

  const [itemsList, setItemsList] = useState([]);
  const getItems = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/items`, {}).then((res) => {
      console.log(res.data)
      setItemsList(res.data);
      // setVariationList(res.data[1])
    });
  };

  useEffect(() => {
    getItems()
  },[])

  return (
    <div className='e-shop'>

    <div className='parts-products'>
      {/* <Construction/> */}
      {itemsList.map((item) => <div key={item.id} className='product'>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
      </div>)}
    </div>
    </div>
  )
}

export default Parts