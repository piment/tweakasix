import React, { useRef, useState, useEffect } from "react";
import "./Visualizer.css";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import VisNeck from "./VisNeck";
import axios from "axios";
import { HexColorPicker } from "react-colorful";
import { proxy, snapshot, useSnapshot } from "valtio";
import Modelos from "./Visualizer copy";

function Visualizer({guitarsList}) {
  console.log(guitarsList)

  const [selectGuitar, setSelectGuitar] = useState('')

console.log(selectGuitar)

  const state = proxy({
    // current: null,
    items: {
      side: "#ffffff",
      binding: "#ffffff",
      tablefront: "#ffffff",
      tableback: "#ffffff",
    },
  });
   const addGuitar = () => {
    axios.post("http://localhost:3001/items/saveguitar", {
      side : state.items.side,
      binding : state.items.binding,
      tablefront : state.items.tablefront,
      tableback : state.items.tableback

    })
  };



  function Picker() {
    const snap = useSnapshot(state);

    return (
      <div style={{ display: snap.current ? "block" : "none" }}>
        <HexColorPicker
          className="picker"
          color={snap.items[snap.current]}
          onChange={(color) => (state.items[snap.current] = color)}
        />
        <h1 className="picker-h1">{snap.current}</h1>
      </div>
    );
  }
  


  return (
    <div className="mainviz">
    <div className="visualizer">
      <Canvas
        className="canvas"
        fallback={null}
        camera={{ position: [0, 0, 2], fov: 40 }}
        shadows
      >
        <OrbitControls />
        <Environment preset="city" background blur={2} />

        <ambientLight intensity={1} />
        <VisNeck />
        <Modelos status={state}/>
      </Canvas>
      <Picker /></div>
      <button style={{position : 'absolute'}}
      onClick={ (e) => (
        e.stopPropagation(),addGuitar())}
      >Save this guitar</button>
  <div> <select name="" id="" onChange={(e) => setSelectGuitar(e.target.value)}>
          {guitarsList
            // .filter((guitar) => item.id_category === 4)
            .map((guitar) => (
              <option value={guitar}>
                {/* {filteredItem.name} {filteredItem.price}$ */}
                {guitar.id}
              </option>
            ))}
        </select></div>
    </div>
  );
}

export default Visualizer;
