import React, { useRef, useState, useEffect } from "react";
import "./Visualizer.css";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  Clone,
  Html,
  Decal,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";
import { useControls, buttonGroup } from "leva";
import { useDispatch, useSelector } from "react-redux";
import { dropTrigger, addColor } from "../features/Colors";

function Modelos({ status, handleSelectGuitar, setColorList }) {

  const ref = useRef();
  let snap = useSnapshot(status);
  const [hovered, setHovered] = useState(null);
  const { nodes, materials } = useGLTF("/guitar/335whole OPT2.glb");


  const path = "http://localhost:3001/";

// console.log(status.colorList)
const dispatch = useDispatch()


// const [colorList, setColorList] = useState({
//   side: "red",
//   binding: "black",
//   tablefront: "brown",
//   tableback: "brown",
//   neckwood: "brown",
//   fretboard: "brown",
//   fretbinding: "white",
//   frets: "silver",
//   inlay: "white",
//   nut: "white",
//   metalpieces: "silver",
//   pickup_cover: "silver",
//   pickup_ring: "silver",
//   knobs: "silver",
// });








  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.colorList[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="10" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;

    const auto = `<svg width="96" height="64" fill="none" ><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        cursor
      )}'), none`;
      return () =>
        (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
          auto
        )}'), default`);
    }
  }, [hovered, status]);

  materials.un_black = new THREE.MeshBasicMaterial({ color: "black" });

  materials.varnish = new THREE.MeshStandardMaterial({
    transparent: true,
    opacity: 0.2,
    roughness: 0.01,
    //metalness: controls.gloss,
  });
  (materials.metalpieces.metalness = 1),
    (materials.metalpieces.roughness = 0),
    (materials.pickup_cover.metalness = 1),
    (materials.pickup_cover.roughness = 0);


    // const [txUse, setTxUse]= useState(path + lastTexture[lastTexture.length -1].url)
    
//  const reactMap = useTexture(txUse)

// const texture_path = useSelector((state) => state.colors.value.texture_path)
// //  console.log(state.colorList.texture_path)
//   const reactMap = useTexture(path + texture_path)
//   // console.log(txUse)
//   materials.tablefront.map = reactMap
//  txUse 
//     // files
//   );



// console.log('#'+materials.side.color.getHex())
const controls = useControls(
  () =>({
  gloss: {
    value: 0,
    min: 0,
    max: 1,
    step: 0.01,
  },
  side: {
    value: status.colorList.side,
    onChange: (c) => {
      setColorList({...status.colorList.side, side :c});
      
    },

  },
  binding: {
    value: status.colorList.binding,
    onChange: (c) => {
      console.log('BINDING')
      setColorList({...status.colorList.binding, binding :c});
    },
  },
  tablefront: {
    value: status.colorList.tablefront,
    onChange: (c) => {
      setColorList({...status.colorList.tablefront, tablefront :c});
    },
  },
  tableback: {
    value: status.colorList.tableback,
    onChange: (c) => {
      setColorList({...status.colorList.tableback, side :c});
    },
  },
  neckwood: {
    value: status.colorList.neckwood,
    onChange: (c) => {
            setColorList({...status.colorList.neckwood, neckwood :c});
    },
  },
  fretboard: {
    value: status.colorList.fretboard,
    onChange: (c) => {
            setColorList({...status.colorList.fretboard, fretboard :c});
    },
  },
  fretbinding: {
    value: status.colorList.fretbinding,
    onChange: (c) => {
            setColorList({...status.colorList.fretbinding, fretbinding :c});
    },
  },
  frets: {
    value: status.colorList.frets,
    onChange: (c) => {
            setColorList({...status.colorList.frets, frets :c});
    },
  },
  inlay: {
    value: status.colorList.inlay,
    onChange: (c) => {
            setColorList({...status.colorList.inlay, inlay :c});
    },
  },
  nut: {
    value: status.colorList.nut,
    onChange: (c) => {
            setColorList({...status.colorList.nut, nut :c});
    },
  },
  metalpieces: {
    value: status.colorList.metalpieces,
    onChange: (c) => {
            setColorList({...status.colorList.metalpieces, metalpieces :c});
    },
  },
  pickup_cover: {
    value: status.colorList.pickup_cover,
    onChange: (c) => {
            setColorList({...status.colorList.pickup_cover, pickup_cover :c});
    },
  },
  pickup_ring: {
    value: status.colorList.pickup_ring,
    onChange: (c) => {
            setColorList({...status.colorList.pickup_ring, pickup_ring :c});
    },
  },
  // knobs: {
  //   value: status.colorList.knobs,
  //   onChange: (c) => {
  //          setColorList({...status.colorList.knobs, knobs :c});
  //   },
    
  // },

  
})

);

useEffect(() =>{
dispatch(addColor(status.colorList))
}, [setColorList])

// console.log(set)

// console.log(controls);
  return (
    <>
      <group
        // {...props}
        dispose={null}
        ref={ref}
        position={[0, -0.5, 0]}
        onPointerOver={(e) => (
          e.stopPropagation(), setHovered(e.object.material.name)
        )}
        onPointerOut={(e) => e.intersections.length === 0 && setHovered(null)}
        onPointerMissed={() => (status.current = null)}
        onPointerUp={dispatch(addColor(status.colorList))}
        // onUpdate={(self) => 
        //   // dispatch(addColor(self.colorList))
        //   // console.log(self)
        // }
        // // onClick={(e) =>
        //   // e.stopPropagation(), (state.current = e.object.material.name)
        //   console.log(e)
        // }
      >
     
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.side.geometry}
          material={materials.side}
          material-color={snap.colorList.side}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.binding.geometry}
          material={materials.binding}
          material-color={snap.colorList.binding}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tableback.geometry}
          material={materials.tableback}
          material-color={snap.colorList.tableback}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tablefront.geometry}
          material={materials.tablefront}
          material-color={snap.colorList.tablefront}
          side={THREE.FrontSide}
        >
          {/* <Decal mesh={ref}>
            <meshBasicMaterial
              roughness={0.2}
              transparent
              //  depthTest={false}
              map={reactMap}
              //  alphaTest={0}
              polygonOffset={true}
              polygonOffsetFactor={-10}
              side={THREE.FrontSide}
            />
          </Decal> */}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.inlay.geometry}
          material={materials.inlay}
          material-color={snap.colorList.inlay}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.jackinput.geometry}
          material={materials.metalpieces}
          material-color={snap.colorList.metalpieces}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fretbinding.geometry}
          material={materials.fretbinding}
          material-color={snap.colorList.fretbinding}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fretboard.geometry}
          material={materials.fretboard}
          material-color={snap.colorList.fretboard}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.frets.geometry}
          material={materials.frets}
          material-color={snap.colorList.frets}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.knobs.geometry}
          material={materials.knobs}
          material-color={snap.colorList.knobs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.nut.geometry}
          material={materials.nut}
          material-color={snap.colorList.nut}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neckwood.geometry}
          material={materials.neckwood}
          material-color={snap.colorList.neckwood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pickup_cover.geometry}
          material={materials.pickup_cover}
          material-color={snap.colorList.pickup_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pickup_ring.geometry}
          material={materials.pickup_ring}
          material-color={snap.colorList.pickup_ring}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mechs.geometry}
          material={materials.metalpieces}
          material-color={snap.colorList.metalpieces}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.selector.geometry}
          material={materials.metalpieces}
          material-color={snap.colorList.metalpieces}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tail_saddle.geometry}
          material={materials.metalpieces}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pickup_screws.geometry}
          material={materials.pickup_cover}
        />
      </group>
      <group position={[0, -0.5, 0]} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.UN_inside.geometry}
          material={materials.un_black}
          // material-color={snap.colorList.}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strings.geometry}
          material={materials.strings}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.varnish.geometry}
          material={materials.varnish}
          // visible={false}
        />
      </group>
    </>
  );
}
useGLTF.preload("/335whole OPT.glb");
export default Modelos;
