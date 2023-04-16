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

import { useDispatch, useSelector } from "react-redux";
import { dropTrigger, addColor } from "../features/Colors";
import { ColorPicker } from "primereact/colorpicker";
import {Tooltip} from 'primereact/tooltip'
import { Button } from 'primereact/button';
import { Slider } from "primereact/slider";
import "./CustomPrimereact.css"
// import "primereact/resources/themes/lara-light-indigo/theme.css";

function Tweaker({ colorList, setColorList, clickedPart }) {
  // const actual = useRef(null)
  const dispatch = useDispatch();

  return (
    <>
      <div className="pickers-main">
        <div className="pickers-colors">
          <div className="body-colors">
          <ColorPicker
            tooltip="Front table"
            tooltipoptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}
              id={clickedPart === "tablefront" ? "clickedPart" : ""}
              name="tablefront"
              value={colorList.tablefront}
              onChange={(e) =>
                setColorList({ ...colorList, tablefront: `#${e.value}` })
              }
            />
              <ColorPicker
            tooltip="Back table"
            tooltipoptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}
              id={clickedPart === "tableback" ? "clickedPart" : ""}
              name="tableback"
              value={colorList.tableback}
              onChange={(e) =>
                setColorList({ ...colorList, tableback: `#${e.value}` })
              }
            />
              <ColorPicker
         
            tooltip="Side"
            tooltipoptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}

              id={clickedPart === "side" ? "clickedPart" : ""}
              name="side"
              value={colorList.side}
              onChange={(e) =>
                setColorList({ ...colorList, side: `#${e.value}` })
              }
              onMouseUp={() => dispatch(addColor(colorList))}
            />
        
              <ColorPicker
            tooltip="Binding"
            tooltipoptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}
              id={clickedPart === "binding" ? "clickedPart" : ""}
              name="binding"
              value={colorList.binding}
              onChange={(e) =>
                setColorList({ ...colorList, binding: `#${e.value}` })
              }
            />
   
          </div>
          <div className="neck-colors">
              <ColorPicker
            tooltip="Neck"
            tooltipoptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}
              id={clickedPart === "neckwood" ? "clickedPart" : ""}
              name="neckwood"
              value={colorList.neckwood}
              onChange={(e) =>
                setColorList({ ...colorList, neckwood: `#${e.value}` })
              }
            />
              <ColorPicker
            tooltip="Frets binding"
            tooltipoptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}
              id={clickedPart === "fretbinding" ? "clickedPart" : ""}
              name="fretbinding"
              value={colorList.fretbinding}
              onChange={(e) =>
                setColorList({ ...colorList, fretbinding: `#${e.value}` })
              }
            />
              <ColorPicker
            tooltip="Fretboard"
            tooltipoptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}
              id={clickedPart === "fretboard" ? "clickedPart" : ""}
              name="fretboard"
              value={colorList.fretboard}
              onChange={(e) =>
                setColorList({ ...colorList, fretboard: `#${e.value}` })
              }
            />
              <ColorPicker
            tooltip="Inlay"
            tooltipoptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}
              id={clickedPart === "inlay" ? "clickedPart" : ""}
              name="inlay"
              value={colorList.inlay}
              onChange={(e) =>
                setColorList({ ...colorList, inlay: `#${e.value}` })
              }
            />
              <ColorPicker
            tooltip="Nut"
            tooltipoptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}
              id={clickedPart === "nut" ? "clickedPart" : ""}
              name="nut"
              value={colorList.nut}
              onChange={(e) =>
                setColorList({ ...colorList, nut: `#${e.value}` })
              }
            />
              <ColorPicker
            tooltip="Frets"
            tooltipoptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}
              id={clickedPart === "frets" ? "clickedPart" : ""}
              name="frets"
              value={colorList.frets}
              onChange={(e) =>
                setColorList({ ...colorList, frets: `#${e.value}` })
              }
            />
          </div>
          <div className="metal-knobs">
              <ColorPicker
            tooltip="Knobs"
            tooltipoptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}
              id={clickedPart === "knobs" ? "clickedPart" : ""}
              name="knobs"
              value={colorList.knobs}
              onChange={(e) =>
                setColorList({ ...colorList, knobs: `#${e.value}` })
              }
            />
              <ColorPicker
            tooltip="Pickup covers"
            tooltipoptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}
              id={clickedPart === "pickup_cover" ? "clickedPart" : ""}
              name="pickup_cover"
              value={colorList.pickup_cover}
              onChange={(e) =>
                setColorList({ ...colorList, pickup_cover: `#${e.value}` })
              }
            />
              <ColorPicker
            tooltip="Pickup rings"
            tooltipoptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}
              id={clickedPart === "pickup_ring" ? "clickedPart" : ""}
              name="pickup_ring"
              value={colorList.pickup_ring}
              onChange={(e) =>
                setColorList({ ...colorList, pickup_ring: `#${e.value}` })
              }
            />{" "}
              <ColorPicker
            tooltip="Metallic pieces"
            tooltipoptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}
              id={clickedPart === "metalpieces" ? "clickedPart" : ""}
              name="metalpieces"
              value={colorList.metalpieces}
              onChange={(e) =>
                setColorList({ ...colorList, metalpieces: `#${e.value}` })
              }
            />
          </div>
        </div>
        <div className="pickers-sliders">
          <div className="gloss">
          Gloss finish
          <Tooltip target=".slider-gloss>.p-slider-handle" content={`${colorList.gloss}%`} position="top" event="focus" />
          <Slider
className="slider-gloss"
              tooltip="gloss finish"
              tooltipoptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}
            value={colorList.gloss}
            onChange={(e) => setColorList({ ...colorList, gloss: e.value })}
            onPointerUp={() => dispatch(addColor(colorList))}
            min={0}
            max={100}
          /></div>
          <div className="scratch">

            Scratched varnish
                    <Tooltip target=".slider-scratch>.p-slider-handle" content={`${colorList.gloss}%`} position="top" event="focus" />

                    <Slider
className="slider-scratch"
              tooltip="scratch"
              tooltipoptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }}
            value={colorList.scratch}
            onChange={(e) => setColorList({ ...colorList, scratch: e.value })}
            onPointerUp={() => dispatch(addColor(colorList))}
            min={0}
            max={20}
            step={0.2}
          /></div>
        </div>
      </div>
    </>
  );
}

export default Tweaker;
