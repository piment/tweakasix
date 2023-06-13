import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

const knobFiles = [
  // ES335
  "/products/product-knob.glb",
  // Tele
  "/products/product-knobTele.glb",
];

function Knobs() {
  const [partModel, setPartModel] = useState("ES335");

  const gltfData = knobFiles.map((file) => useGLTF(file));

  console.log(gltfData);
  //  const { nodes, materials }

  //  if (partModel === "ES335"){

  //    const { nodes, materials } = useGLTF("/products/product-knob.glb" );
  //   }
  //  if (partModel == "Tele" ){
  //   const { nodes, materials } = useGLTF( "/products/product-knobTele.glb") }
  //       // console.log(nodes)

  return (
    <>
      {/* {gltfData.map((data, index) => {
        const { nodes, materials } = data;
 
      <group dispose={null} key={index}>
        {/* {partModel == "ES355" && ( */}
          {/* <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={materials["knobs.001"]}
          />  */}
        {/* // )} */}
        {/* {partModel == "Tele" && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.knobs003.geometry}
            material={materials["metalpieces.007"]}
          />
        )} 
      </group>
           })} */}
    </>
  );
}

// useGLTF.preload("/products/product-knob.glb");

export default Knobs;
