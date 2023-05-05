import React, { useRef, useState, useEffect, useCallback } from "react";

import "./Visualizer.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import axios from "axios";
import { useMotionValue, MotionConfig } from "framer-motion";
import { motion } from "framer-motion-3d";
import Modelos from "./ESguitar";
import { useDispatch, useSelector } from "react-redux";
import { addColor } from "../features/Colors";

import { Perf } from "r3f-perf";
import MyDropzone from "./Dropzone";

import Tweaker from "./Tweaker/Tweaker";
import TweakerTele from "./Tweaker/TweakerTele";
import ESguitar from "./ESguitar";
import Teleguitar from "./Teleguitar";
import { Button } from "primereact/button";

function Visualizer({ guitarsList, model, setModel, changed, setChanged }) {
  const colus = useSelector((state) => state.guitar_set.colorSet);
  const triggs = useSelector((state) => state.guitar_set.dropped);


const orbCam = useRef()

  const [colorList, setColorList] = useState(colus);
  // const [col335, setCol335] = useState(colorList.es335)
  // const [colTele, setColTele] = useState(colorList.telecaster)
  const [clickedPart, setClickedPart] = useState("");
  const [gtrName, setGtrName] = useState("");
  const [dropped, setDropped] = useState(triggs);
  const dispatch = useDispatch();
  const handleSelectGuitar = async (e) => {
    const chosen = guitarsList.filter((item) => item.parts.id == e.target.value);
    await setColorList(chosen[0].parts);
    console.log(chosen[0].parts.guitar_id)
    setModel(chosen[0].parts.guitar_id);
  };

const resetCam =() => {
  console.log(orbCam.current)
  orbCam.current.reset()
  // orbCam.current.lookAt = [0,1,0]
}


  const addGuitar = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/items/saveguitar`, {
      id: model,
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
      scratch: colorList.scratch,
      body: colorList.body,
      pickguard: colorList.pickguard,
      single_plastic: colorList.single_plastic,
      single_metal: colorList.single_metal,
      backplate: colorList.backplate,
    });
  };

  useEffect(() => {}, [handleSelectGuitar, model]);

  const [allTx, setAllTx] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/stocked`).then((response) => {
      let filesReached = [];

      filesReached.push(response.data);
      setAllTx(filesReached);
    });

    // )
  }, [triggs]);

  // useEffect(() => {
  //   const controls = orbCam.current;
  
    
  //   const handleWheel = (event) => {
  //     event.preventDefault();
  //     controls.dispatchEvent({ type: 'wheel', deltaY: event.deltaY });
  //   };
    
  //   if (controls && controls.domElement) {
  //     controls.domElement.addEventListener('wheel', handleWheel, { passive: true });
  //   }
  //   return () => {
  //     if (controls && controls.domElement) {
  //       controls.domElement.removeEventListener('wheel', handleWheel);
  //     }
  //   };
  // }, [orbCam]);


  return (
    <div className="mainviz">
      <div className="visualizer">
        <div    className="canvas">
        <Canvas
       
          fallback={null}
          camera={{ position: [0, 2, 3], fov: 60 }}
          // shadows ={{type : PCFSoftShadowMap}}
          
          linear
          shadows
          dpr={[1, 2]}
          // linear
          gl={{
            preserveDrawingBuffer: true,
            antialias: true,
            alpha: true,
          }}

        >
          {/* <PerspectiveCamera ref={orbCam}   position={[0, 2, 3]} fov={60}/> */}
          <OrbitControls  ref={orbCam} target={[0, 1, 0]}  enableZoom={false} />
          <Environment files="/decor_shop_2k.hdr" blur={2} />

          <ambientLight intensity={0.4} />
          <directionalLight
            castShadow
            intensity={3}
            position={[0, 5, 0.5]}
            lookAt={[0, 0, 0]}
            shadow-mapSize-height={1024}
            shadow-mapSize-width={1024}
          />         
      
          <MotionConfig
            transition={{
              type: "spring",
              duration: 2,
              ease: "easeInOut",
              // times: [0,  1],
              repeat: 0,
              repeatDelay: 1,
            }}
          >
  <ContactShadows
                depthWrite={false}
            //  matrixAutoUpdate={true}
            position={[0, -0.8, 0]}
            opacity={0.85}
            scale={10}
            blur={0.7}
            far={5}
            frames={100}
            resolution={512}
          />


            <motion.group animate={model === '1' ? "es335" : "tele"}>
              <motion.group
                variants={{
                  es335: { opacity: 0, x: 0 },
                  tele: {
                    x: 10,
                    scale: 0,
                  },
                }}
              >           
     
                <ESguitar
                  setColorList={setColorList}
                  colorList={colorList}
      
                  setClickedPart={setClickedPart}
                  tilt={[-Math.PI / 7, -0.2, -Math.PI * 0.3]}
                  pos={[-1, -0.2, -0.3]}
                />
       

              </motion.group>

              <motion.group
                variants={{
                  es335: { x: -10, scale: 0, visibility: 0 },
                  tele: {},
                }}
              >
                <Teleguitar
                  setColorList={setColorList}
                  colorList={colorList}
      
                  setClickedPart={setClickedPart}
                  tilt={[-Math.PI / 7, -0.2, -Math.PI * 0.3]}
                  pos={[-1, -0.2, -0.3]}
                />
              </motion.group>
            </motion.group>
          </MotionConfig>
          {/* <Perf deepAnalyze={true} position={"top-left"} /> */}
        </Canvas>
      </div>
        {model == 1 && (
          <Tweaker
       
            colorList={colorList}
            setColorList={setColorList}
          resetCam={resetCam}
          setDropped={setDropped}
          dropped={dropped}
          />
        )}
        {model == 2 && (
          <TweakerTele
            colorList={colorList}
            setColorList={setColorList}
            setDropped={setDropped}
            dropped={dropped}
            resetCam={resetCam}
          />
        )}
      </div>
      <div id="select-guitarset">
        <input type="text" onChange={(e) => setGtrName(e.target.value)}></input>{" "}
        <Button
         onClick={(e) => (e.stopPropagation(), addGuitar())}
        // onClick={() => orbCam.current.reset()}
         >
          Save this guitar
        </Button>
        <select name="" id="" onClick={(e) => handleSelectGuitar(e)}>
          {guitarsList &&
            guitarsList.map((guitar, key) => (
              <option value={guitar.parts.id} key={key}>
                {guitar.parts.id}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default Visualizer;
