import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import './TweakerMain.css'
import { useDispatch, useSelector } from "react-redux";
import { addColor, resetDrop } from "../../features/Colors";
import { ColorPicker } from "primereact/colorpicker";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import Sliders from "./Sliders";
import "./Choice-CustomPrimereact.css";
import silverIcon from "../../assets/img/Silver.jpg";
import goldIcon from "../../assets/img/Gold.jpg";
import copperIcon from "../../assets/img/Copper.jpg";
import MetalColors from "./MetalColors";
import Draggable from "react-draggable"
import dragIcon from '../../assets/drag.svg'
import MyDropzone from "../Dropzone";

function TweakerTele({ colorList, setColorList, clickedPart,  resetCam, dropped, setDropped  }) {
  // const actual = useRef(null)
  const dispatch = useDispatch();

  const tweakDrag = useRef()


  return (
    <>
    <Draggable 
    handle="strong"
    bounds={`parent`}
    allowAnyClick={false}
    // nodeRef={tweakDrag}
    // defaultPosition={{x : 100, y:-150}}
    onStart={(e) => e.preventDefault()}
    >
            <div className="pickers-main"> 
            <div className="box no-cursor">
            <strong className="cursor"><img className="drag-icon" src={dragIcon} alt="Click to drag" /></strong>
            <Button onClick={resetCam}>Reset Camera</Button>
        <div className="pickers-colors" ref={tweakDrag}>
          <div className="body-colors">
            <ColorPicker
              tooltip="Body"
              tooltipoptions={{
                position: "bottom",
                mouseTrack: true,
                mouseTrackTop: 15,
              }}
              id={clickedPart === "tablefront" ? "clickedPart" : ""}
              name="body"
              value={colorList.body}
              onChange={(e) =>
                setColorList({ ...colorList, body: `#${e.value}` })
              }
            />
            <ColorPicker
              tooltip="Pickguard"
              tooltipoptions={{
                position: "bottom",
                mouseTrack: true,
                mouseTrackTop: 15,
              }}
              id={clickedPart === "tableback" ? "clickedPart" : ""}
              name="pickguard"
              value={colorList.pickguard}
              onChange={(e) =>
                setColorList({ ...colorList, pickguard: `#${e.value}` })
              }
            />
            {/* <ColorPicker
              tooltip="Side"
              tooltipoptions={{
                position: "bottom",
                mouseTrack: true,
                mouseTrackTop: 15,
              }}
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
              tooltipoptions={{
                position: "bottom",
                mouseTrack: true,
                mouseTrackTop: 15,
              }}
              id={clickedPart === "binding" ? "clickedPart" : ""}
              name="binding"
              value={colorList.binding}
              onChange={(e) =>
                setColorList({ ...colorList, binding: `#${e.value}` })
              }
            /> */}
          </div>
          <div className="neck-colors">
            <ColorPicker
              tooltip="Neck"
              tooltipoptions={{
                position: "bottom",
                mouseTrack: true,
                mouseTrackTop: 15,
              }}
              id={clickedPart === "neckwood" ? "clickedPart" : ""}
              name="neckwood"
              value={colorList.neck}
              onChange={(e) =>
                setColorList({ ...colorList, neck: `#${e.value}` })
              }
            />
            {/* <ColorPicker
              tooltip="Frets binding"
              tooltipoptions={{
                position: "bottom",
                mouseTrack: true,
                mouseTrackTop: 15,
              }}
              id={clickedPart === "fretbinding" ? "clickedPart" : ""}
              name="fretbinding"
              value={colorList.fretbinding}
              onChange={(e) =>
                setColorList({ ...colorList, fretbinding: `#${e.value}` })
              }
            /> */}
            <ColorPicker
              tooltip="Fretboard"
              tooltipoptions={{
                position: "bottom",
                mouseTrack: true,
                mouseTrackTop: 15,
              }}
              id={clickedPart === "fretboard" ? "clickedPart" : ""}
              name="fretboard"
              value={colorList.fretboard}
              onChange={(e) =>
                setColorList({ ...colorList, fretboard: `#${e.value}` })
              }
            />
            <ColorPicker
              tooltip="Inlay"
              tooltipoptions={{
                position: "bottom",
                mouseTrack: true,
                mouseTrackTop: 15,
              }}
              id={clickedPart === "inlay" ? "clickedPart" : ""}
              name="inlay"
              value={colorList.inlay}
              onChange={(e) =>
                setColorList({ ...colorList, inlay: `#${e.value}` })
              }
            />
            <ColorPicker
              tooltip="Nut"
              tooltipoptions={{
                position: "bottom",
                mouseTrack: true,
                mouseTrackTop: 15,
              }}
              id={clickedPart === "nut" ? "clickedPart" : ""}
              name="nut"
              value={colorList.nut}
              onChange={(e) =>
                setColorList({ ...colorList, nut: `#${e.value}` })
              }
            />
            {/* <ColorPicker
              tooltip="Frets"
              tooltipoptions={{
                position: "bottom",
                mouseTrack: true,
                mouseTrackTop: 15,
              }}
              id={clickedPart === "frets" ? "clickedPart" : ""}
              name="frets"
              value={colorList.frets}
              onChange={(e) =>
                setColorList({ ...colorList, frets: `#${e.value}` })
              }
            /> */}
          </div>
          <div className="metal-knobs">
       
            {/* <Toast ref={toast} /> */}
            <MetalColors        setColorList={setColorList}
            colorList={colorList}
            clickedPart={clickedPart}/>
            <ColorPicker
              tooltip="Pickup cap"
              tooltipoptions={{
                position: "bottom",
                mouseTrack: true,
                mouseTrackTop: 15,
              }}
              id={clickedPart === "pickup_ring" ? "clickedPart" : ""}
              name="single_plastic"
              value={colorList.single_plastic}
              onChange={(e) =>
                setColorList({ ...colorList, single_plastic: `#${e.value}` })
              }
            />   
             <ColorPicker
              tooltip="Knobs"
              tooltipoptions={{
                position: "bottom",
                mouseTrack: true,
                mouseTrackTop: 15,
              }}
              id={clickedPart === "knobs" ? "clickedPart" : ""}
              name="knobs"
              value={colorList.knobs}
              onChange={(e) =>
                setColorList({ ...colorList, knobs: `#${e.value}` })
              }
            />
           
          </div>
        </div>
        <div className="pickers-sliders">
          <Sliders
            setColorList={setColorList}
            colorList={colorList}
            clickedPart={clickedPart}
          />
        </div>
        <MyDropzone
          colorList={colorList}
          setColorList={setColorList}
          setDropped={setDropped}
          dropped={dropped}
        />
              <Button onClick={() => dispatch(resetDrop(0))}>Remove image</Button> 

      </div>  </div></Draggable>
    </>
  );
}

export default TweakerTele;
