import * as THREE from "three";
import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import "./Visualizer.css";
import {sRGBEncoding } from "three";

const scratchesrough = new THREE.Texture("guitar/imgs/DefaultMaterial_Roughness2.jpg");
const scratches = new THREE.Texture("guitar/imgs/DefaultMaterial_Roughness2-INV.jpg");
// const [scratches, scratchesrough] = useTexture([
//   "guitar/imgs/DefaultMaterial_Roughness2.jpg",
//   "guitar/imgs/DefaultMaterial_Roughness2-INV.jpg",
// ]);
const woodFull = new THREE.Texture("woodFullminH.png");
woodFull.flipY = false;

const maple = new THREE.Texture("maple.png");
maple.flipY = false;
const rosewood = new THREE.Texture("rosewood.png");
rosewood.flipY = false;
rosewood.encoding = sRGBEncoding;

//   const texture_path = useSelector(
//     (state) => state.guitar_set.colorSet.texture_path
// const [txUse, setTxUse] = useState(path + texture_path);
//   );

const colorList = {
  scratch: 1,
  gloss: 50,
};

// const reactMap = new THREE.Texture(txUse);

scratches.flipY = false;
scratches.wrapS = THREE.RepeatWrapping;
scratches.wrapT = THREE.RepeatWrapping;
scratches.repeat.set(2, 2);

scratchesrough.flipY = false;
scratchesrough.wrapS = THREE.RepeatWrapping;
scratchesrough.wrapT = THREE.RepeatWrapping;
scratchesrough.repeat.set(10, 2);

woodFull.encoding = sRGBEncoding;





const materials = {
  woodMat: new THREE.MeshLambertMaterial({
    map: woodFull,
    transparent: true,
    opacity: colorList.wood / 20,
  }),

  un_black: new THREE.MeshBasicMaterial({ color: "black" }),
  strings: new THREE.MeshLambertMaterial({ color: "#595959" }),
  varnish: new THREE.MeshStandardMaterial({
    transparent: true,
    opacity: 0.2,
    roughnessMap: scratchesrough,
    roughness: 0.1 * colorList.scratch,
    metalness: colorList.gloss / 100,
    bumpMap: scratches,
    bumpScale: 0.001 * (colorList.scratch / 5),
  }),

  tablefront: {
    opacity: 1 - colorList.wood / 1000,
  },
  tableback: {
    opacity: 1 - colorList.wood / 1000,
  },
  side: {
    opacity: 1 - colorList.wood / 1000,
  },
  neckwood: {
    opacity: 1 - colorList.wood / 1000,
  },

  fretboard: {
    map: rosewood,
  },

  metal_pieces: {
    metalness: 1,
    roughness: 0,
  },
};


export default materials