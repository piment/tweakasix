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
import { ColorPicker } from "primereact/colorpicker";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

function Tweaker({ colorList, setColorList }) {
  console.log("tweaker");
  // const actual = useRef(null)
  const dispatch = useDispatch();

  return (
    <>
      {" "}
      <ColorPicker
    name={colorList.side}
        value={colorList.side}
        onChange={(e) => setColorList({ ...colorList, side: `#${e.value}` })}
        onMouseUp={() => dispatch(addColor(colorList))}
      />
      <ColorPicker
        value={colorList.binding}
        onChange={(e) => setColorList({ ...colorList, binding: `#${e.value}` })}
      />
      <ColorPicker
        value={colorList.tablefront}
        onChange={(e) =>
          setColorList({ ...colorList, tablefront: `#${e.value}` })
        }
      />
      <ColorPicker
        value={colorList.tableback}
        onChange={(e) =>
          setColorList({ ...colorList, tableback: `#${e.value}` })
        }
      />
      <ColorPicker
        value={colorList.fretbinding}
        onChange={(e) =>
          setColorList({ ...colorList, fretbinding: `#${e.value}` })
        }
      />
      <ColorPicker
        value={colorList.fretboard}
        onChange={(e) =>
          setColorList({ ...colorList, fretboard: `#${e.value}` })
        }
      />
      <ColorPicker
        value={colorList.inlay}
        onChange={(e) => setColorList({ ...colorList, inlay: `#${e.value}` })}
      />
      <ColorPicker
        value={colorList.nut}
        onChange={(e) => setColorList({ ...colorList, nut: `#${e.value}` })}
      />
      <ColorPicker
        value={colorList.frets}
        onChange={(e) => setColorList({ ...colorList, frets: `#${e.value}` })}
      />
      <ColorPicker
        value={colorList.knobs}
        onChange={(e) => setColorList({ ...colorList, knobs: `#${e.value}` })}
      />
      <ColorPicker
        value={colorList.pickup_cover}
        onChange={(e) =>
          setColorList({ ...colorList, pickup_cover: `#${e.value}` })
        }
      />
      <ColorPicker
        value={colorList.pickup_ring}
        onChange={(e) =>
          setColorList({ ...colorList, pickup_ring: `#${e.value}` })
        }
      />
      <ColorPicker
        value={colorList.neckwood}
        onChange={(e) =>
          setColorList({ ...colorList, neckwood: `#${e.value}` })
        }
      />{" "}
      <ColorPicker
        value={colorList.metalpieces}
        onChange={(e) =>
          setColorList({ ...colorList, metalpieces: `#${e.value}` })
        }
      />
    </>
  );
}

export default Tweaker;
