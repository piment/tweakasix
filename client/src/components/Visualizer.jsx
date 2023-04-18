import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  sRGBEncoding,
  ACESFilmicToneMapping,
  PointLightHelper,
  DirectionalLightHelper,
  PCFShadowMap,
  BasicShadowMap,
  PCFSoftShadowMap,
} from "three";
import "./Visualizer.css";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  useHelper,
  BakeShadows,
  AccumulativeShadows,
  RandomizedLight,
  ContactShadows,
} from "@react-three/drei";
import axios from "axios";

import Modelos from "./Modelos";
import { useDispatch, useSelector } from "react-redux";
import { addColor } from "../features/Colors";

import { Perf } from "r3f-perf";
import MyDropzone from "./Dropzone";
import { subscribe } from "valtio";
import Tweaker from "./Tweaker/Tweaker";

function Visualizer({ guitarsList }) {
  const [selectGuitar, setSelectGuitar] = useState("");

  const colus = useSelector((state) => state.guitar_set.colorSet);
  const triggs = useSelector((state) => state.guitar_set.dropped);

  const [colorList, setColorList] = useState(colus);
  const [clickedPart, setClickedPart] = useState("");

  const [dropped, setDropped] = useState(0);
  const dispatch = useDispatch();
  const handleSelectGuitar = async (e) => {
    const chosen = guitarsList.filter((item) => item.id == e.target.value);
    await setColorList(chosen[0]);
  };

  // const status = proxy({
  //   colorList,
  // });
  const addGuitar = () => {
    axios.post("http://localhost:3001/items/saveguitar", {
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

  function Backdrop() {
    const shadows = useRef();
    // useFrame((state, delta) => easing.dampC(shadows.current.getMesh().material.color, state.color, 0.25, delta))
    return (
      <AccumulativeShadows
        ref={shadows}
        frames={60}
        alphaTest={0.85}
        scale={10}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, -1.14]}
      >
        <RandomizedLight
          amount={4}
          radius={9}
          intensity={0.55}
          ambient={0.25}
          position={[5, 5, -10]}
        />
        {/* <RandomizedLight amount={4} radius={5} intensity={0.25} ambient={0.55} position={[-5, 5, -9]} /> */}
      </AccumulativeShadows>
    );
  }

  function PointLightHelp() {
    const pointlight = useRef();
    useHelper(pointlight, DirectionalLightHelper, 1, "blue");

    return (
      <directionalLight
        // color={'#f0fbb3'}
        ref={pointlight}
        position={[-0.8, 1.8, 1.4]}
        intensity={3}
        distance={100}
        scale={0.5}
        castShadow
        shadow-mapSize-height={2048 / 2}
        shadow-mapSize-width={2048 / 2}
      />
    );
  }

  return (
    <div className="mainviz">
      <div className="visualizer">
        <Canvas
          className="canvas"
          fallback={null}
          camera={{ position: [0, 2, 3], fov: 50 }}
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
          <OrbitControls target={[0, 1, 0]} />
          <Environment preset="city" blur={2} />

          <ambientLight intensity={0.4} />
          <directionalLight
            castShadow
            intensity={2}
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
            tilt={[-Math.PI/15,0,0]}
          />
          <ContactShadows
            position={[0, -0.8, 0]}
            opacity={0.85}
            scale={10}
            blur={.5}
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
        <button
          // style={{ position: "absolute" }}
          onClick={(e) => (e.stopPropagation(), addGuitar())}
        >
          Save this guitar
        </button>

        <select
          name=""
          id=""
          onChange={(e) =>
            // setSelectGuitar(e.target.value)
            handleSelectGuitar(e)
          }
        >
          {guitarsList &&
            guitarsList.map((guitar, key) => (
              <option value={guitar.id} key={key}>
                {guitar.id}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default Visualizer;
