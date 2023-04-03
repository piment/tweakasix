import React, { useRef, useState, useEffect } from "react";
import "./Visualizer.css";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { proxy, snapshot, useSnapshot } from "valtio";


  function Modelos({status}) {
    const state = status
    const ref = useRef();
    const snap = useSnapshot(state);
    const [hovered, set] = useState(null);
    const { nodes, materials } = useGLTF("/guitar/bodySP.glb");



    return (
      <group
        // {...props}
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


 

export default Modelos;
