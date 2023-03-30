import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

function App() {

  return (
    <div className="App">

    <Router>
            <Routes>
              <Route
                path="/"
                element={<Home/>}
              />
              {/* <Route
                path="/favoris"
                element={<Favoris eventArrayFromAPI={eventArrayFromAPI} />}
              /> */}
              {/* <Route path="/aboutus" element={<Aboutus/>} /> */}
              {/* <Route path="/event/:id" element={<Detailspretext />} /> */}
            </Routes>
          </Router>
        </div>
  );
}

export default App;
