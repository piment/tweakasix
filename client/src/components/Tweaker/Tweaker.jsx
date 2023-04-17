import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import "../Visualizer.css";
import { useDispatch, useSelector } from "react-redux";
import { dropTrigger, addColor } from "../../features/Colors";
import { ColorPicker } from "primereact/colorpicker";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import Sliders from "./Sliders";
import "./Choice-CustomPrimereact.css";
import silverIcon from "../../assets/img/Silver.jpg";
import goldIcon from "../../assets/img/Gold.jpg";
import copperIcon from "../../assets/img/Copper.jpg";

function Tweaker({ colorList, setColorList, clickedPart }) {
  // const actual = useRef(null)
  const dispatch = useDispatch();

  const metals = [
    { name: "Silver", value: "#ff00ff", icon: silverIcon },
    { name: "Gold", value: "#ff0f2f", icon: goldIcon },
    { name: "Copper", value: "#0f00ff", icon: copperIcon },
  ];
  const [pickupCover, setPickupCover] = useState(metals[0]);

  console.log(metals);

  const handleMetalSelect = (e) => {
    const selectedMetal = metals.find(metals => metals.name === e.target.name)
    setPickupCover(selectedMetal)
  };

  const op = useRef(null);
  return (
    <>
      <div className="pickers-main">
        <div className="pickers-colors">
          <div className="body-colors">
            <ColorPicker
              tooltip="Front table"
              tooltipoptions={{
                position: "bottom",
                mouseTrack: true,
                mouseTrackTop: 15,
              }}
              id={clickedPart === "tablefront" ? "clickedPart" : ""}
              name="tablefront"
              value={colorList.tablefront}
              onChange={(e) =>
                setColorList({ ...colorList, tablefront: `#${e.value}` })
              }
            />
            <ColorPicker
              tooltip="Back table"
              tooltipoptions={{
                position: "bottom",
                mouseTrack: true,
                mouseTrackTop: 15,
              }}
              id={clickedPart === "tableback" ? "clickedPart" : ""}
              name="tableback"
              value={colorList.tableback}
              onChange={(e) =>
                setColorList({ ...colorList, tableback: `#${e.value}` })
              }
            />
            <ColorPicker
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
            />
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
              value={colorList.neckwood}
              onChange={(e) =>
                setColorList({ ...colorList, neckwood: `#${e.value}` })
              }
            />
            <ColorPicker
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
            />
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
            <ColorPicker
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
            />
          </div>
          <div className="metal-knobs">
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
            {/* <Toast ref={toast} /> */}
            <Button
              type="button"
              className="p-colorpicker-preview main-metal-button"
              onClick={(e) => op.current.toggle(e)}
            >
              {" "}
              <img
                className="metalIcons"
                src={pickupCover.icon}
                sizes="30px 30px"
              ></img>
            </Button>
            <OverlayPanel ref={op} showCloseIcon id="metalIcons-parent">
              <Button
                tooltip="Silver"
                tooltipoptions={{
                  position: "bottom",
                  mouseTrack: true,
                  mouseTrackTop: 15,
                  event: "hover",
                }}
                onClick={(e) => handleMetalSelect(e)}
              >
                <img
                  name="Silver"
                  className="metalIcons"
                  src={silverIcon}
                  sizes="32px 32px"
                ></img>
              </Button>
              <Button
                tooltip="Gold"
                tooltipoptions={{
                  position: "bottom",
                  mouseTrack: true,
                  mouseTrackTop: 15,
                  event: "hover",
                }}
                onClick={(e) => handleMetalSelect(e)}
              >
                <img
                  name="Gold"
                  className="metalIcons"
                  src={goldIcon}
                  sizes="32px 32px"
                ></img>
              </Button>
              <Button
                tooltip="Copper"
                tooltipoptions={{
                  position: "bottom",
                  mouseTrack: true,
                  mouseTrackTop: 15,
                  event: "hover",
                }}
                onClick={(e) => handleMetalSelect(e)}
              >
                <img
                  name="Copper"
                  className="metalIcons"
                  src={copperIcon}
                  sizes="32px 32px"
                ></img>
              </Button>
            </OverlayPanel>
            <ColorPicker
              tooltip="Pickup rings"
              tooltipoptions={{
                position: "bottom",
                mouseTrack: true,
                mouseTrackTop: 15,
              }}
              id={clickedPart === "pickup_ring" ? "clickedPart" : ""}
              name="pickup_ring"
              value={colorList.pickup_ring}
              onChange={(e) =>
                setColorList({ ...colorList, pickup_ring: `#${e.value}` })
              }
            />{" "}
            <ColorPicker
              tooltip="Metallic pieces"
              tooltipoptions={{
                position: "bottom",
                mouseTrack: true,
                mouseTrackTop: 15,
              }}
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
          <Sliders
            setColorList={setColorList}
            colorList={colorList}
            clickedPart={clickedPart}
          />
        </div>
      </div>
    </>
  );
}

export default Tweaker;
