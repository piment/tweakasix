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
  useSurfaceSampler,
} from "@react-three/drei";
import * as THREE from "three";
import { useDispatch, useSelector } from "react-redux";
import { dropTrigger, addColor } from "../features/Colors";
import { LinearEncoding, sRGBEncoding } from "three";
import materials from './materials'

function Teleguitar({
  trig,
  setColorList,
  colorList,
  clickedPart,
  setClickedPart,
  tilt,
  pos,
}) {
  const tele = useRef();
  const meshRefs = useRef([]);
  const [hovered, setHovered] = useState(null);
  const { nodes, materials } = useGLTF("/guitar/TeleOPT.glb");

  const path = "http://localhost:3001/";


  const [scratches, scratchesrough] = useTexture([
    "guitar/imgs/DefaultMaterial_Roughness2.jpg",
    "guitar/imgs/DefaultMaterial_Roughness2-INV.jpg",
  ]);
//   const texture_path = useSelector(
//     (state) => state.guitar_set.colorSet.texture_path
//   );
const texture_path = colorList.texture_path
  const [txUse, setTxUse] = useState(path + texture_path);

  const reactMap = useTexture(txUse);

  const woodFull = useTexture("woodFullminH.png");
  woodFull.flipY = false;



  const woodMat = new THREE.MeshLambertMaterial({
    map: woodFull,
    transparent: true,
    opacity: colorList.wood / 20,
  });
  scratches.flipY = false;
  scratches.wrapS = THREE.RepeatWrapping;
  scratches.wrapT = THREE.RepeatWrapping;
  scratches.repeat.set(2, 2);

  scratchesrough.flipY = false;
  scratchesrough.wrapS = THREE.RepeatWrapping;
  scratchesrough.wrapT = THREE.RepeatWrapping;
  scratchesrough.repeat.set(10, 2);

  materials.un_black = new THREE.MeshBasicMaterial({ color: "black" });
  materials.strings = new THREE.MeshLambertMaterial({ color: "#595959" });
  materials.varnish = new THREE.MeshStandardMaterial({
    transparent: true,
    opacity: 0.2,
    roughnessMap: scratchesrough,
    roughness: 0.1 * colorList.scratch,
    metalness: colorList.gloss / 100,
    bumpMap: scratches,
    bumpScale: 0.001 * (colorList.scratch / 5),
  });
  (materials.metalpieces.metalness = 1),
    (materials.metalpieces.roughness = 0),
    (materials.pickup_cover.metalness = 1),
    (materials.pickup_cover.roughness = 0);


  woodFull.encoding = sRGBEncoding
  
//   materials.tablefront.opacity = 1 - (colorList.wood/1000) 

//   materials.tableback.opacity = 1 - (colorList.wood/1000) 

//   materials.side.opacity = 1 - (colorList.wood/1000) 

//   materials.neckwood.opacity = 1 - (colorList.wood/1000) 



const maple = useTexture('maple.png')
maple.flipY = false
const rosewood = useTexture('rosewood.png')
rosewood.flipY = false
rosewood.encoding = sRGBEncoding



materials.fretboard.map = rosewood





  // useLayoutEffect(() => {
  //   console.log("pipi");
  //   console.log(texture_path);
  //   setTxUse(path + texture_path);
  // }, [triggs]);

  useFrame(() => {
    meshRefs.current.forEach((mesh) => {
      mesh.material = mesh.material.clone();

    });
  });


  return (
    <>
      <group rotation={tilt} position={pos}
    //    dispose={[nodes, materials]}
    dispose={null}
       >
        <group
         
          ref={tele}
          position={[0, -0.5, 0]}
          scale={2}

        >
      <mesh
       ref={(mesh) => (meshRefs.current[0] = mesh)}
        // castShadow
        receiveShadow
        geometry={nodes.pickguard.geometry}
        material={materials.plastic}
        material-color={colorList.binding}
      />
      <mesh
       ref={(mesh) => (meshRefs.current[1] = mesh)}
        castShadow
        receiveShadow
        geometry={nodes.selector_arm.geometry}
        material={materials.metalpieces}
        material-color={colorList.metalpieces}
      />
      <mesh
       ref={(mesh) => (meshRefs.current[2] = mesh)}
        castShadow
        receiveShadow
        geometry={nodes.selector.geometry}
        material={materials.plastic}
      />
      <mesh
       ref={(mesh) => (meshRefs.current[3] = mesh)}
        castShadow
        receiveShadow
        geometry={nodes.pickup.geometry}
        material={materials.pickup_cover}
      />
      <mesh
       ref={(mesh) => (meshRefs.current[4] = mesh)}
        // castShadow
        receiveShadow
        geometry={nodes.selector_plate.geometry}
        material={materials.metalpieces}
        material-color={colorList.metalpieces}
      />
      <mesh
       ref={(mesh) => (meshRefs.current[5] = mesh)}
        castShadow
        receiveShadow
        geometry={nodes.pickup_bridge.geometry}
        material={materials.pickupplastic}
      />

      <mesh
       ref={(mesh) => (meshRefs.current[6] = mesh)}
        // castShadow
        receiveShadow
        geometry={nodes.body.geometry}
        material={materials.body}
      />
      <mesh
       ref={(mesh) => (meshRefs.current[7] = mesh)}
        castShadow
        receiveShadow
        geometry={nodes.neck.geometry}
        material={materials.neckwood}
        material-color={colorList.neckwood}
      />
      <mesh
       ref={(mesh) => (meshRefs.current[8] = mesh)}
        castShadow
        receiveShadow
        geometry={nodes.frets.geometry}
        material={materials.frets}
      />
      <mesh
       ref={(mesh) => (meshRefs.current[9] = mesh)}
        castShadow
        receiveShadow
        geometry={nodes.nut.geometry}
        material={materials.nut}
      />
      <mesh
       ref={(mesh) => (meshRefs.current[10] = mesh)}
        castShadow
        // receiveShadow
        geometry={nodes.strings.geometry}
        material={materials.strings}
      />
      <mesh
       ref={(mesh) => (meshRefs.current[11] = mesh)}
        castShadow
        receiveShadow
        geometry={nodes.straplocks.geometry}
        material={materials.metalpieces}
      />
      <mesh
       ref={(mesh) => (meshRefs.current[12] = mesh)}
        castShadow
        receiveShadow
        geometry={nodes.neckplate.geometry}
        material={materials.metalpieces}
      />
      <mesh
       ref={(mesh) => (meshRefs.current[13] = mesh)}
        castShadow
        receiveShadow
        geometry={nodes.Inlay.geometry}
        material={materials.inlay}
      />
      <mesh
       ref={(mesh) => (meshRefs.current[14] = mesh)}
        castShadow
        receiveShadow
        geometry={nodes.tailpiece.geometry}
        material={materials.metalpieces}
      />
      <mesh
       ref={(mesh) => (meshRefs.current[15] = mesh)}
        castShadow
        receiveShadow
        geometry={nodes.fretboard.geometry}
        material={materials.fretboard}
      />
      <mesh
       ref={(mesh) => (meshRefs.current[16] = mesh)}
        castShadow
        receiveShadow
        geometry={nodes.cylindersback.geometry}
        material={materials.metalpieces}
      />
      <mesh
       ref={(mesh) => (meshRefs.current[17] = mesh)}
        castShadow
        receiveShadow
        geometry={nodes.mechs.geometry}
        material={materials.metalpieces}
      />
      <mesh
       ref={(mesh) => (meshRefs.current[18] = mesh)}
        castShadow
        receiveShadow
        geometry={nodes.screws.geometry}
        material={materials.metalpieces}
      />   
         <mesh
       ref={(mesh) => (meshRefs.current[19] = mesh)}
        castShadow
        // receiveShadow
        geometry={nodes.knobs.geometry}
        material={materials.metalpieces}
      />
    </group>
    </group>
    </>
  );
}


useGLTF.preload("/TeleOPT.glb");
export default Teleguitar;
