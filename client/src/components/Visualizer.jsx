import React, { useRef, useState, useEffect, useCallback } from "react";

import "./Visualizer.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import axios from "axios";

import Modelos from "./Modelos";
import { useDispatch, useSelector } from "react-redux";
import { addColor } from "../features/Colors";

import { Perf } from "r3f-perf";
import MyDropzone from "./Dropzone";

import Tweaker from "./Tweaker/Tweaker";

function Visualizer({ guitarsList }) {
  const [selectGuitar, setSelectGuitar] = useState("");

  const colus = useSelector((state) => state.guitar_set.colorSet);
  const triggs = useSelector((state) => state.guitar_set.dropped);

  const [colorList, setColorList] = useState(colus);
  const [clickedPart, setClickedPart] = useState("");
  const [gtrName, setGtrName] = useState('')
  const [dropped, setDropped] = useState(0);
  const dispatch = useDispatch();
  const handleSelectGuitar = async (e) => {
    const chosen = guitarsList.filter((item) => item.parts.id == e.target.value);
    console.log(chosen)
    await setColorList(chosen[0].parts);
  };

  // const status = proxy({
  //   colorList,
  // });
  const addGuitar = () => {
    axios.post("http://localhost:3001/items/saveguitar", {
      gtrname: gtrName,
      side: colorList.side,
      binding: colorList.binding,
      tablefront: colorList.tablefront,
      tableback: colorList.tableback,
      neckwood: colorList.neckwood,
      fretboard: colorList.fretboard,
      fretbinding: colorList.fretbinding,
      frets: colorList.frets,
      inlay: colorList.inlay,
      nut: colorList.nut,
      metalpieces: colorList.metalpieces,
      pickup_cover: colorList.pickup_cover,
      pickup_ring: colorList.pickup_ring,
      knobs: colorList.knobs,
      texture_path: colorList.texture_path,
      gloss: colorList.gloss,
      scratch : colorList.scratch
    });
  };
  //  const snap = useSnapshot(status);
  // console.log('STATUUUUUUUS', status.colorList)
  useEffect(() => {
    // colorList
    // async function showChosen(){
    //  await dispatch(addColor(colorList));
    //   console.log(status.colorList)
    // }
    //     // console.log('LIST',colorList)
    // //  unsubscribe()
    // showChosen()
  }, [handleSelectGuitar]);

  // console.log(status.colorList.texture_path)

  const [allTx, setAllTx] = useState([]);
  // console.log(path)
  useEffect(() => {
    axios.get("http://localhost:3001/stocked").then((response) => {
      let filesReached = [];

      filesReached.push(response.data);
      setAllTx(filesReached);
    });

    // )
  }, [triggs]);


console.log(guitarsList)


  return (
    <div className="mainviz">
      <div className="visualizer">
        <Canvas
          className="canvas"
          fallback={null}
          camera={{ position: [0, 2, 3], fov: 60 }}
          // shadows ={{type : PCFSoftShadowMap}}

          shadows
          dpr={[1, 2]}
          linear
          gl={{
            preserveDrawingBuffer: true,
            antialias: true,
            alpha: true,
          }}
          onPointerOut={() => setTimeout(() => setClickedPart(""), 2000)}
        >
          <OrbitControls target={[0, 1, 0]} enableZoom={false} />
          <Environment preset="city" blur={2} />

          <ambientLight intensity={0.4} />
          <directionalLight
            castShadow
            intensity={3}
            position={[0, 5, 0.5]}
            lookAt={[0, 0, 0]}
            shadow-mapSize-height={2048 / 2}
            shadow-mapSize-width={2048 / 2}
          />
          <Modelos
            setColorList={setColorList}
            colorList={colorList}
            clickedPart={clickedPart}
            setClickedPart={setClickedPart}
            tilt={[-Math.PI / 7, -0.2, -Math.PI * 0.3]}
            pos={[-1, -0.2, -0.3]}
          />
          <ContactShadows
            position={[0, -0.8, 0]}
            opacity={0.85}
            scale={10}
            blur={0.5}
            far={5}
            frames={1}
            resolution={512}
          />
          {/* <BakeShadows/> */}
          {/* <Perf
          deepAnalyze = {true}
    position={'top-left'}
          /> */}
        </Canvas>
        {/* <MyDropzone
          colorList={colorList}
          setColorList={setColorList}
          setDropped={setDropped}
          dropped={dropped}
        /> */}
        {/* <Picker /> */}
        <Tweaker
          colorList={colorList}
          setColorList={setColorList}
          clickedPart={clickedPart}
        />
      </div>
      <div id="select-guitarset">
        <input type='text' onChange={(e) => setGtrName(e.target.value)}></input>        <button
          // style={{ position: "absolute" }}
          onClick={(e) => (e.stopPropagation(), addGuitar())}
        >
          Save this guitar
        </button>

        <select
          name=""
          id=""
          onClick={(e) =>
            // setSelectGuitar(e.target.value)
            handleSelectGuitar(e)
          }
        >
          {guitarsList &&
            guitarsList.map((guitar, key) => (
              <option value={guitar.parts.id} key={key}>
                {guitar.parts.id}
              </option>
              // ,console.log(guitar.parts.id)
            ))} 
        </select>
      </div>
    </div>
  );
}

export default Visualizer;
