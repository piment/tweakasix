import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Home from "./components/Home";
import Parts from "./components/Parts";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
    <Router>
      <Navbar/>
            <Routes>
              <Route
                path="/"
                element={<Home/>}
              />
              <Route
                path="/parts"
                element={<Parts />}
              />
              <Route path="/account" element={<Account/>} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </Router>
        </div>
  );
}

export default App;
