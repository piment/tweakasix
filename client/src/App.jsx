import { useState } from "react";
import "./App.css";
import axios from "axios";
import ItemsManager from "./components/ItemsManager";
import Selector from "./components/Selector";

function App() {

  return (
    <div className="App">
   <Selector/>
    </div>
  );
}

export default App;
