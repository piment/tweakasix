import React, { useRef } from "react";
import "./Visualizer.css";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
function VisNeck(props) {

  const neckRef = useRef()
  const model = useLoader(GLTFLoader, "/guitar/neck.glb", (loader) => {
    const draco = new DRACOLoader();
    draco.setDecoderConfig({ type: "js" });
    draco.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(draco);
  });

  const gtrMat = new THREE.MeshPhysicalMaterial({color: "#ff55ff", side : THREE.DoubleSide})

  return (

     <group ref={neckRef}>

        <mesh 
        castShadow
        receiveShadow
        geometry={model.scene.children[0,1].geometry}
        material={gtrMat}
        />
        </group>


  );
}

export default VisNeck;
