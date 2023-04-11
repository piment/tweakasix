import React, { useRef, useState, useEffect, useCallback} from "react";
import "./Visualizer.css";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import axios from "axios";
import { HexColorPicker } from "react-colorful";
import { proxy, snapshot, useSnapshot } from "valtio";
import Modelos from "./Visualizer copy";
import { useDispatch, useSelector } from "react-redux";
import { addColor } from "../features/Colors";
import {Leva, useControls} from 'leva'
import {Perf} from 'r3f-perf'
import MyDropzone from "./Dropzone";


function Visualizer({ guitarsList }) {
  const [selectGuitar, setSelectGuitar] = useState("");

  const colus = useSelector((state) => state.colors.value);
  const [colorList, setColorList] = useState(colus);

  const handleSelectGuitar = (e) => {
    const chosen = guitarsList.filter((item) => item.id == e.target.value);
    setColorList(chosen[0]);
    console.log(chosen);
  };

  const dispatch = useDispatch();

  const status = proxy({
    colorList,
  });
  const addGuitar = () => {
    axios.post("http://localhost:3001/items/saveguitar", {
      side: status.colorList.side,
      binding: status.colorList.binding,
      tablefront: status.colorList.tablefront,
      tableback: status.colorList.tableback,
   neckwood: status.colorList.neckwood,
       fretboard: status.colorList.fretboard,
       fretbinding: status.colorList.fretbinding,
       frets: status.colorList.frets,
       inlay: status.colorList.inlay,
       nut: status.colorList.nut,
       metalpieces: status.colorList.metalpieces,
       pickup_cover: status.colorList.pickup_cover,
       pickup_ring: status.colorList.pickup_ring,
       knobs: status.colorList.knobs
    });
  };

  useEffect(() => {
    // colorList
    setColorList(colus);
    dispatch(addColor(status.colorList));
  }, [status]);


    const [files, setFiles] = useState([]);

  // function Picker() {
  //   const snap = useSnapshot(status);

  //   return (
  //     <div style={{ display: snap.current ? "block" : "none" }}>
  //       <HexColorPicker
  //         className="picker"
  //         color={snap.colorList[snap.current]}
  //         onChange={(color) => {
  //           status.colorList[snap.current] = color;
  //         }}
  //         onPointerUp={() =>
  //           dispatch(
  //             addColor({
  //               ...status.colorList,
  //               ...snap.current,
  //               [snap.current]: status.colorList[snap.current],
  //             })
  //           )
  //         }
  //       />
  //       <h1 className="picker-h1">{snap.current}</h1>
  //     </div>
  //   );
  // }
  const path = 'http://localhost:3001'
  const imgs = []
  const onDrop = useCallback(acceptedFiles => {
      imgs.push(acceptedFiles[0])
    //   console.log(imgs)
    const formData = new FormData();
    formData.append('file', imgs[imgs.length -1]);
    axios.post("http://localhost:3001/upload/", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
   
  }, [])

const [allTx, setAllTx] = useState([])
// console.log(path)
useEffect(() =>{
axios.get('http://localhost:3001/stocked').then(response =>
{
  let filesReached = []

filesReached.push(response.data)
    setAllTx(filesReached);


    }
    )


// )
},[] )

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
          <Modelos  status={status} allTx={allTx}/>
          {/* <Perf
          deepAnalyze = {true}
    position={'top-left'}
          /> */}
        </Canvas>
        <MyDropzone onDrop={onDrop}/>
        {/* <Picker /> */}
        {/* <Leva
    onClick={(e) => (
      e.preventDefault(), 
      // (state.current = e.object.material.name)
    console.log(e)
      )}
        flat 
        oneLineLabels
        hideTitleBar 
       
      /> */}

      </div>
      <button
        style={{ position: "absolute" }}
        onClick={(e) => (e.stopPropagation(), addGuitar())}
      >
        Save this guitar
      </button>
      <div>
        {" "}
        <select
          name=""
          id=""
          onChange={(e) =>
            // setSelectGuitar(e.target.value)
            handleSelectGuitar(e)
          }
        >
          {guitarsList &&(guitarsList.map((guitar, key) => (
            <option value={guitar.id} key={key}>
              {guitar.id}
            </option>
          )))}
        </select>
      </div>
    </div>
  );
}

export default Visualizer;
