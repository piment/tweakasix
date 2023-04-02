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

function Visualizer({setBodyColors}) {
  const state = proxy({
    // current: null,
    items: {
      side: "#ffffff",
      binding: "#ffffff",
      tablefront: "#ffffff",
      tableback: "#ffffff",
    },
  });
 

  function Model(props) {
    const ref = useRef();
    const snap = useSnapshot(state);
    const [hovered, set] = useState(null);
    const { nodes, materials } = useGLTF("/guitar/bodySP.glb");

    useEffect(() => {
      const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="10" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;

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

    // console.log(state.items.side)

    return (
      <group
        {...props}
        dispose={null}
        ref={ref}
        onPointerOver={(e) => (
          e.stopPropagation(), set(e.object.material.name)
        )}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        onPointerMissed={() => (state.current = null)}
        onClick={(e) => (
          e.stopPropagation(), (state.current = e.object.material.name)
        )}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.side.geometry}
          material={materials.side}
          material-color={snap.items.side}
          position={[0, 0, 0]}
          scale={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.binding.geometry}
          material={materials.binding}
          material-color={snap.items.binding}
          position={[0, 0, 0]}
          scale={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tableback.geometry}
          material={materials.tableback}
          material-color={snap.items.tableback}
          position={[0, 0, 0]}
          scale={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tablefront.geometry}
          material={materials.tablefront}
          material-color={snap.items.tablefront}
          position={[0, 0, 0]}
          scale={1}
        />
      </group>
    );
  }

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
  //   const model = useLoader(GLTFLoader, "/guitar/bodySP.glb", (loader) => {
  //     const draco = new DRACOLoader();
  //     draco.setDecoderConfig({ type: "js" });
  //     draco.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
  //     loader.setDRACOLoader(draco);
  //   });
  const addGuitar = () => {
    axios.post("http://localhost:3001/items/saveguitar", {
      side : state.items.side,
      binding : state.items.binding,
      tablefront : state.items.tablefront,
      tableback : state.items.tableback

    })
  };
  //   const gtrMat = new THREE.MeshPhysicalMaterial({color: "#ff55ff", side : THREE.DoubleSide})
  //   console.log(model);
  return (
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
        <Model />
      </Canvas>
      <Picker />
      <button style={{position : 'absolute'}}
      // onClick={addGuitar}
      onClick={ (e) => (
        e.stopPropagation(),addGuitar())}
      >Save this guitar</button>
    </div>
  );
}

export default Visualizer;
