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
  const [hovered, setHovered] = useState(null);
  const { nodes, materials } = useGLTF("/guitar/TeleOPT.glb");

  const path = "http://localhost:3001/";

  const triggs = useSelector((state) => state.guitar_set.dropped);

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${colorList[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="10" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;

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
  }, [hovered]);

//   const [scratches, scratchesrough] = useTexture([
//     "guitar/imgs/DefaultMaterial_Roughness2.jpg",
//     "guitar/imgs/DefaultMaterial_Roughness2-INV.jpg",
//   ]);
//   const texture_path = useSelector(
//     (state) => state.guitar_set.colorSet.texture_path
//   );
//   const [txUse, setTxUse] = useState(path + texture_path);

//   const reactMap = useTexture(txUse);

//   const woodFull = useTexture("woodFullminH.png");
//   woodFull.flipY = false;

//   const woodMat = new THREE.MeshLambertMaterial({
//     map: woodFull,
//     transparent: true,
//     opacity: colorList.wood / 20,
//   });
//   scratches.flipY = false;
//   scratches.wrapS = THREE.RepeatWrapping;
//   scratches.wrapT = THREE.RepeatWrapping;
//   scratches.repeat.set(2, 2);

//   scratchesrough.flipY = false;
//   scratchesrough.wrapS = THREE.RepeatWrapping;
//   scratchesrough.wrapT = THREE.RepeatWrapping;
//   scratchesrough.repeat.set(10, 2);

//   materials.un_black = new THREE.MeshBasicMaterial({ color: "black" });
//   materials.strings = new THREE.MeshLambertMaterial({ color: "#595959" });
//   materials.varnish = new THREE.MeshStandardMaterial({
//     transparent: true,
//     opacity: 0.2,
//     roughnessMap: scratchesrough,
//     roughness: 0.1 * colorList.scratch,
//     metalness: colorList.gloss / 100,
//     bumpMap: scratches,
//     bumpScale: 0.001 * (colorList.scratch / 5),
//   });


//   woodFull.encoding = sRGBEncoding;

//   materials.tablefront.opacity = 1 - colorList.wood / 1000;

//   materials.tableback.opacity = 1 - colorList.wood / 1000;

//   materials.side.opacity = 1 - colorList.wood / 1000;

//   materials.neckwood.opacity = 1 - colorList.wood / 1000;

//   const maple = useTexture("maple.png");
//   maple.flipY = false;
//   const rosewood = useTexture("rosewood.png");
//   rosewood.flipY = false;
//   rosewood.encoding = sRGBEncoding;

//   materials.fretboard.map = rosewood;

//   useLayoutEffect(() => {
//     console.log("pipi");
//     console.log(texture_path);
//     setTxUse(path + texture_path);
//   }, [triggs]);
// console.log(materials)
  (materials.metalpieces.metalness = 1),
    (materials.metalpieces.roughness = 0)

  return (
    <>
      <group rotation={tilt} position={pos} dispose={null}>
        <group
         
          ref={tele}
          position={[0, -0.5, 0]}
          scale={2}
          onPointerOver={(e) => (
            e.stopPropagation(), setHovered(e.object.material.name)
          )}
          onPointerOut={(e) => e.intersections.length === 0 && setHovered(null)}
          onPointerMissed={() => (tele.current = null)}
          onPointerUp={(e) => {
            e.stopPropagation(), setClickedPart(hovered);
          }}
        >
      <mesh
        // castShadow
        receiveShadow
        geometry={nodes.pickguard.geometry}
        material={materials.plastic}
        material-color={colorList.binding}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.selector_arm.geometry}
        material={materials.metalpieces}
        material-color={colorList.metalpieces}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.selector.geometry}
        material={materials.plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup.geometry}
        material={materials.pickup_cover}
      />
      <mesh
        // castShadow
        receiveShadow
        geometry={nodes.selector_plate.geometry}
        material={materials.metalpieces}
        material-color={colorList.metalpieces}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup_bridge.geometry}
        material={materials.pickupplastic}
      />
      <mesh
        castShadow
        // receiveShadow
        geometry={nodes.knobs.geometry}
        material={materials.metalpieces}
      />
      <mesh
        // castShadow
        receiveShadow
        geometry={nodes.body.geometry}
        material={materials.body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.neck.geometry}
        material={materials.neckwood}
        material-color={colorList.neckwood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frets.geometry}
        material={materials.frets}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nut.geometry}
        material={materials.nut}
      />
      <mesh
        castShadow
        // receiveShadow
        geometry={nodes.strings.geometry}
        material={materials.strings}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.straplocks.geometry}
        material={materials.metalpieces}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.neckplate.geometry}
        material={materials.metalpieces}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Inlay.geometry}
        material={materials.inlay}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tailpiece.geometry}
        material={materials.metalpieces}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fretboard.geometry}
        material={materials.fretboard}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cylindersback.geometry}
        material={materials.metalpieces}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mechs.geometry}
        material={materials.metalpieces}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screws.geometry}
        material={materials.metalpieces}
      />
    </group>
    </group>
    </>
  );
}


useGLTF.preload("/TeleOPT.glb");
export default Teleguitar;
