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

function Tweaker({ colorList, setColorList, clickedPart }) {

  // const actual = useRef(null)
  const dispatch = useDispatch();
  console.log(clickedPart)

  return (
    <>
 <div className="pickers-main">
      <ColorPicker  
       id={clickedPart === 'side' ? 'clickedPart' : ''}
    name='side'
        value={colorList.side}
        onChange={(e) => setColorList({ ...colorList, side: `#${e.value}` })}
        onMouseUp={() => dispatch(addColor(colorList))}

      />
      <ColorPicker
             id={clickedPart === 'binding' ? 'clickedPart' : ''}
    name='binding'

        value={colorList.binding}
        onChange={(e) => setColorList({ ...colorList, binding: `#${e.value}` })}
      />
      <ColorPicker
             id={clickedPart === 'tablefront' ? 'clickedPart' : ''}
    name='tablefront'
        value={colorList.tablefront}
        onChange={(e) =>
          setColorList({ ...colorList, tablefront: `#${e.value}` })
        }
      />
      <ColorPicker
             id={clickedPart === 'tableback' ? 'clickedPart' : ''}
    name='tableback'
        value={colorList.tableback}
        onChange={(e) =>
          setColorList({ ...colorList, tableback: `#${e.value}` })
        }
      />
      <ColorPicker
             id={clickedPart === 'fretbinding' ? 'clickedPart' : ''}
    name='fretbinding'
        value={colorList.fretbinding}
        onChange={(e) =>
          setColorList({ ...colorList, fretbinding: `#${e.value}` })
        }
      />
      <ColorPicker
             id={clickedPart === 'fretboard' ? 'clickedPart' : ''}
    name='fretboard'
        value={colorList.fretboard}
        onChange={(e) =>
          setColorList({ ...colorList, fretboard: `#${e.value}` })
        }
      />
      <ColorPicker
             id={clickedPart === 'inlay' ? 'clickedPart' : ''}
    name='inlay'
        value={colorList.inlay}
        onChange={(e) => setColorList({ ...colorList, inlay: `#${e.value}` })}
      />
      <ColorPicker
             id={clickedPart === 'nut' ? 'clickedPart' : ''}
    name='nut'
        value={colorList.nut}
        onChange={(e) => setColorList({ ...colorList, nut: `#${e.value}` })}
      />
      <ColorPicker
             id={clickedPart === 'frets' ? 'clickedPart' : ''}
    name='frets'
        value={colorList.frets}
        onChange={(e) => setColorList({ ...colorList, frets: `#${e.value}` })}
      />
      <ColorPicker
             id={clickedPart === 'knobs' ? 'clickedPart' : ''}
    name='knobs'
        value={colorList.knobs}
        onChange={(e) => setColorList({ ...colorList, knobs: `#${e.value}` })}
      />
      <ColorPicker
             id={clickedPart === 'pickup_cover' ? 'clickedPart' : ''}
    name='pickup_cover'
        value={colorList.pickup_cover}
        onChange={(e) =>
          setColorList({ ...colorList, pickup_cover: `#${e.value}` })
        }
      />
      <ColorPicker
             id={clickedPart === 'pickup_ring' ? 'clickedPart' : ''}
    name='pickup_ring'
        value={colorList.pickup_ring}
        onChange={(e) =>
          setColorList({ ...colorList, pickup_ring: `#${e.value}` })
        }
      />
      <ColorPicker
             id={clickedPart === 'neckwood' ? 'clickedPart' : ''}
    name='neckwood'
        value={colorList.neckwood}
        onChange={(e) =>
          setColorList({ ...colorList, neckwood: `#${e.value}` })
        }
      />{" "}
      <ColorPicker
             id={clickedPart === 'metalpieces' ? 'clickedPart' : ''}
    name='metalpieces'
        value={colorList.metalpieces}
        onChange={(e) =>
          setColorList({ ...colorList, metalpieces: `#${e.value}` })
        }
      />
      </div>
    </>
  );
}

export default Tweaker;
