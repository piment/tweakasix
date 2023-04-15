import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
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
import { ColorPicker } from 'primereact/colorpicker';




function Modelos({ trig, setColorList, colorList }) {

  const ref = useRef();
  // let snap = useSnapshot(status);
  const [hovered, setHovered] = useState(null);
  const { nodes, materials } = useGLTF("/guitar/335whole OPT2.glb");


  const path = "http://localhost:3001/";

// console.log(colorList)
const dispatch = useDispatch()




  materials.un_black = new THREE.MeshBasicMaterial({ color: "black" });

  materials.varnish = new THREE.MeshStandardMaterial({
    transparent: true,
    opacity: 0.2,
    roughness: 0.01,
    // metalness: controls.gloss,
  });
  (materials.metalpieces.metalness = 1),
    (materials.metalpieces.roughness = 0),
    (materials.pickup_cover.metalness = 1),
    (materials.pickup_cover.roughness = 0);


    // const [txUse, setTxUse]= useState(path + lastTexture[lastTexture.length -1].url)
    
//  const reactMap = useTexture(txUse)

// const texture_path = useSelector((state) => state.colors.value.texture_path)



  return (
    <>
      <group
        // {...props}
        dispose={null}
        ref={ref}
        position={[0, -0.5, 0]}
        
        // onPointerOver={(e) => (
        //   e.stopPropagation(), setHovered(e.object.material.name)
        // )}
        // onPointerOut={(e) => e.intersections.length === 0 && setHovered(null)}
        // onPointerMissed={() => (current = null)}
        // onPointerUp={dispatch(addColor(colorList))}
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
          material-color={colorList.side}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.binding.geometry}
          material={materials.binding}
          material-color={colorList.binding}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tableback.geometry}
          material={materials.tableback}
          material-color={colorList.tableback}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tablefront.geometry}
          material={materials.tablefront}
          material-color={colorList.tablefront}
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
          material-color={colorList.inlay}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.jackinput.geometry}
          material={materials.metalpieces}
          material-color={colorList.metalpieces}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fretbinding.geometry}
          material={materials.fretbinding}
          material-color={colorList.fretbinding}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fretboard.geometry}
          material={materials.fretboard}
          material-color={colorList.fretboard}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.frets.geometry}
          material={materials.frets}
          material-color={colorList.frets}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.knobs.geometry}
          material={materials.knobs}
          material-color={colorList.knobs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.nut.geometry}
          material={materials.nut}
          material-color={colorList.nut}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neckwood.geometry}
          material={materials.neckwood}
          material-color={colorList.neckwood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pickup_cover.geometry}
          material={materials.pickup_cover}
          material-color={colorList.pickup_cover}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pickup_ring.geometry}
          material={materials.pickup_ring}
          material-color={colorList.pickup_ring}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mechs.geometry}
          material={materials.metalpieces}
          material-color={colorList.metalpieces}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.selector.geometry}
          material={materials.metalpieces}
          material-color={colorList.metalpieces}
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
          // material-color={colorList.}
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
