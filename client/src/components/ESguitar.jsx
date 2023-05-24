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
import {  addColor } from "../features/Colors";
import { LinearEncoding, sRGBEncoding } from "three";

function ESguitar({
  trig,
  setColorList,
  colorList,
  tilt,
  pos,
  changed,
  setChanged,
  dropped,
  setDropped,
  files,
  selectedParts
}) {
  const ref = useRef();
  const meshRefs = useRef([]);
  const [hovered, setHovered] = useState(null);
  const { nodes, materials } = useGLTF("/guitar/335whole_5.glb");

  const path = `${import.meta.env.VITE_BACKEND_URL}/stocked`;
  const tempPath = `${import.meta.env.VITE_BACKEND_URL}/stocked/temporary/`;

  
  const triggs = useSelector((state) => state.guitar_set.dropped);

const texturesFromReducer = useSelector((state)=> state.texture_data.texture_assign)
// console.log(texturesFromReducer)

  const [scratches, scratchesrough] = useTexture([
    "guitar/imgs/DefaultMaterial_Roughness2.jpg",
    "guitar/imgs/DefaultMaterial_Roughness2-INV.jpg",
  ]);
  // const texture_path = useSelector(
  //   (state) => state.guitar_set.colorSet.texture_path
  // );   
   let texture_path = colorList.texture_path
 
  


// let up_texture_path =  files.length !== 0 ? files[0].file.path : ''

//  [0].file.path
  // console.log(files[0].file.path)
//  const [txUse, setTxUse] = useState(path + colorList.texture_path);

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
materials.pickup_ring.roughness = 0.5
materials.pickup_ring.metalness = 0.5



  woodFull.encoding = sRGBEncoding
  
  materials.tablefront.opacity = 1 - (colorList.wood/1000) 

  materials.tableback.opacity = 1 - (colorList.wood/1000) 

  materials.side.opacity = 1 - (colorList.wood/1000) 

  materials.neckwood.opacity = 1 - (colorList.wood/1000) 
// materials.tablefront.metalness = .5
materials.tablefront.roughness = 1
materials.tableback.roughness = 1
materials.side.roughness = 1
materials.neckwood.roughness = 1



const maple = useTexture('maple.png')
maple.flipY = false
const rosewood = useTexture('rosewood.png')
rosewood.flipY = false
rosewood.encoding = sRGBEncoding

materials.fretboard.map = rosewood


const partTextures = {
  front: useTexture( texturesFromReducer.front ? tempPath + texturesFromReducer.front : path + '/1681217837265.png'),
 back: useTexture( texturesFromReducer.back ? tempPath + texturesFromReducer.back : path + '/1681217837265.png'),
 side: useTexture( texturesFromReducer.side ? tempPath + texturesFromReducer.side : path + '/1681217837265.png'),
 neck: useTexture( texturesFromReducer.neck ? tempPath + texturesFromReducer.neck : path + '/1681217837265.png'),
pickguard:  useTexture( texturesFromReducer.pickguard ? tempPath + texturesFromReducer.pickguard : path + '/1681217837265.png')
};




//  if(txUse){
//    reactMap = useTexture(txUse)
//   } else if (!txUse){
//  const reactMap = useTexture(path + colorList.texture_path);
//   }
//  reactMap.flipY = false



  useFrame(() => {
    meshRefs.current.forEach((mesh) => {
      mesh.material = mesh.material.clone();
    });

  });



  return (
    <>
      <group rotation={tilt}    ref={ref} position={pos}>
        <group
  //  dispose={[nodes, materials]}
          dispose={null}
       
          position={[0, -0.5, 0]}
          scale={2}
  
        >
          <mesh
          ref={(mesh) => (meshRefs.current[0] = mesh)}
            castShadow
            receiveShadow
            geometry={nodes.side.geometry}
            material={materials.side}
            material-color={colorList.side}
            material-map={texturesFromReducer.side !== null ? partTextures.side : ''}
          />

          <mesh
          ref={(mesh) => (meshRefs.current[1] = mesh)}
            castShadow
            receiveShadow
            geometry={nodes.binding.geometry}
            material={materials.binding}
            material-color={colorList.binding}
          />
          <mesh
ref={(mesh) => (meshRefs.current[2] = mesh)}
            receiveShadow
            geometry={nodes.tableback.geometry}
            material={materials.tableback}
            material-color={colorList.tableback}
            material-map={texturesFromReducer.back !== null ? partTextures.back : ''}
          />
          <mesh
         ref={(mesh) => (meshRefs.current[3] = mesh)}
            receiveShadow
            geometry={nodes.tablefront.geometry}
            material={materials.tablefront}
            material-color={colorList.tablefront}
            // material-map={triggs > 0 ? reactMap : ''}
            material-map={texturesFromReducer.front !== null ? partTextures.front : ''}

          >
            {/* <Decal mesh={ref} >
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
          {/* WOOOOOOOOOOOOOOOOD */}
          <mesh
                   ref={(mesh) => (meshRefs.current[4] = mesh)}
            receiveShadow
            geometry={nodes.tablefront.geometry}
            material={woodMat}

          ></mesh>
                    <mesh
                             ref={(mesh) => (meshRefs.current[5] = mesh)}
            castShadow
            receiveShadow
            geometry={nodes.side.geometry}
            material={woodMat}

          />

     
     
          <mesh
                   ref={(mesh) => (meshRefs.current[6] = mesh)}
            // castShadow            receiveShadow
            geometry={nodes.tableback.geometry}
            material={woodMat}
            // material-color={colorList.tableback}
          />
              {/* WOOOOOOOOOOOOOOOOD */}
          <mesh
         ref={(mesh) => (meshRefs.current[7] = mesh)}
            receiveShadow
            geometry={nodes.inlay.geometry}
            material={materials.inlay}
            material-color={colorList.inlay}
          />
          <mesh
                   ref={(mesh) => (meshRefs.current[8] = mesh)}
            castShadow
            receiveShadow
            geometry={nodes.jackinput.geometry}
            material={materials.metalpieces}
            material-color={colorList.metal_pieces}
          />
          <mesh
         ref={(mesh) => (meshRefs.current[9] = mesh)}
            receiveShadow
            geometry={nodes.fretbinding.geometry}
            material={materials.fretbinding}
            material-color={colorList.fretbinding}
          />
          <mesh
         ref={(mesh) => (meshRefs.current[10] = mesh)}
            receiveShadow
            geometry={nodes.fretboard.geometry}
            material={materials.fretboard}
            material-color={colorList.fretboard}
          />
          <mesh
                   ref={(mesh) => (meshRefs.current[11] = mesh)}
            castShadow
            receiveShadow
            geometry={nodes.frets.geometry}
            material={materials.frets}
            material-color={colorList.frets}
          />
          <mesh
                   ref={(mesh) => (meshRefs.current[12] = mesh)}
            castShadow
            receiveShadow
            geometry={nodes.knobs.geometry}
            material={materials.knobs}
            material-color={colorList.knobs}
          />
          <mesh
                   ref={(mesh) => (meshRefs.current[13] = mesh)}
            castShadow
            receiveShadow
            geometry={nodes.nut.geometry}
            material={materials.nut}
            material-color={colorList.nut}
          />
          <mesh
                   ref={(mesh) => (meshRefs.current[14] = mesh)}
            castShadow

            geometry={nodes.neckwood.geometry}
            material={materials.neckwood}
            material-color={colorList.neck}
            material-map={texturesFromReducer.neck !== null ? partTextures.neck : ''}
          />
               <mesh
                        ref={(mesh) => (meshRefs.current[15] = mesh)}
            castShadow
            receiveShadow
            geometry={nodes.neckwood.geometry}
            material={woodMat}

          />
          <mesh
                   ref={(mesh) => (meshRefs.current[16] = mesh)}
            castShadow
            receiveShadow
            geometry={nodes.pickup_cover.geometry}
            material={materials.pickup_cover}
            material-color={colorList.pickup_cover}
          />
          <mesh
                   ref={(mesh) => (meshRefs.current[17] = mesh)}
            castShadow
            // receiveShadow
            geometry={nodes.pickup_ring.geometry}
            material={materials.pickup_ring}
            material-color={colorList.pickup_ring}
          />
          <mesh
                   ref={(mesh) => (meshRefs.current[18] = mesh)}
            castShadow
            receiveShadow
            geometry={nodes.mechs.geometry}
            material={materials.metalpieces}
            material-color={colorList.metal_pieces}
          />
          <mesh
                   ref={(mesh) => (meshRefs.current[19] = mesh)}
            castShadow
            receiveShadow
            geometry={nodes.selector.geometry}
            material={materials.metalpieces}
            material-color={colorList.metal_pieces}
          />
          <mesh
                   ref={(mesh) => (meshRefs.current[20] = mesh)}
            castShadow
            receiveShadow
            geometry={nodes.tail_saddle.geometry}
            material={materials.metalpieces}
            material-color={colorList.metal_pieces}
          />
          <mesh
                   ref={(mesh) => (meshRefs.current[21] = mesh)}
            castShadow
            receiveShadow
            geometry={nodes.pickup_screws.geometry}
            material={materials.pickup_cover}
            material-color={colorList.metal_pieces}
          />
        </group>
        <group position={[0, -0.5, 0]} dispose={null} scale={2}>
          <mesh
         ref={(mesh) => (meshRefs.current[22] = mesh)}
            geometry={nodes.UN_inside.geometry}
            material={materials.un_black}

          />
          <mesh
                   ref={(mesh) => (meshRefs.current[23] = mesh)}
            castShadow

            geometry={nodes.strings.geometry}
            material={materials.strings}
          />

          <mesh
         ref={(mesh) => (meshRefs.current[24] = mesh)}
            geometry={nodes.varnish.geometry}
            material={materials.varnish}

          />
        </group>
      </group>
    </>
  );
}
useGLTF.preload("/335whole OPT4.glb");
export default ESguitar;
