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
import { ColorPicker } from 'primereact/colorpicker';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

function Tweaker({colorList, setColorList}){

console.log("tweaker")
// const actual = useRef(null)


return(
 <> <ColorPicker value={colorList.side} onChange={(e) =>  
 setColorList({...colorList, side : `#${e.value}`})
}
 />
 <ColorPicker value={colorList.binding} onChange={(e) =>  
 setColorList({...colorList, binding : `#${e.value}`})
}
 />
 <ColorPicker value={colorList.side} onChange={(e) =>  
 setColorList({...colorList, side : `#${e.value}`})
}
 />
 <ColorPicker value={colorList.side} onChange={(e) =>  
 setColorList({...colorList, side : `#${e.value}`})
}
 />
 <ColorPicker value={colorList.side} onChange={(e) =>  
 setColorList({...colorList, side : `#${e.value}`})
}
 />
 <ColorPicker value={colorList.side} onChange={(e) =>  
 setColorList({...colorList, side : `#${e.value}`})
}
 />
 <ColorPicker value={colorList.side} onChange={(e) =>  
 setColorList({...colorList, side : `#${e.value}`})
}
 />
 <ColorPicker value={colorList.side} onChange={(e) =>  
 setColorList({...colorList, side : `#${e.value}`})
}
 />
 <ColorPicker value={colorList.side} onChange={(e) =>  
 setColorList({...colorList, side : `#${e.value}`})
}
 />
 <ColorPicker value={colorList.side} onChange={(e) =>  
 setColorList({...colorList, side : `#${e.value}`})
}
 />
 <ColorPicker value={colorList.side} onChange={(e) =>  
 setColorList({...colorList, side : `#${e.value}`})
}
 />

</>)

}

export default Tweaker