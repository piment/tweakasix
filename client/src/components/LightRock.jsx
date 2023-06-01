import { Sparkles, SpotLight, Stars } from '@react-three/drei'
import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import * as THREE from 'three'

function LightRock() {


  const themeContext = useContext(ThemeContext)
  const theme = themeContext.theme


const sparkleMat = new THREE.MeshLambertMaterial({color : 'white' , emissive:'white'})

  return (
    <>
        {/* <ambientLight intensity={0.4} /> */}
    {/* <directionalLight
      castShadow
      intensity={3}
      position={[0, 5, 0.5]}
      lookAt={[0, 0, 0]}
      shadow-mapSize-height={1024}
      shadow-mapSize-width={1024}
      /> */}
{/* <spotLight
     castShadow
     intensity={10}
     position={[0, 8, 0.5]}
     lookAt={[0, 0, 0]}
     shadow-mapSize-height={1024}
     shadow-mapSize-width={1024}
/> */}
<SpotLight
castShadow
  distance={15}
  color={'#fff5ff'}
  intensity={6}
  angle={0.65}
  penumbra={0.2}
  position={[0, 3, -0.5]}
  attenuation={5}
  anglePower={5} 
  shadow-mapSize-height={1024}
  shadow-mapSize-width={1024}
/>

{/* <Sparkles
 
  count={400}

  speed={0.1}

  opacity={100}
material={sparkleMat}
//   color={100}
position={[0,0,-5]}
  size={0.2}

  scale={4}
 
  noise={1}
/> */}

<Stars
radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1}
/>
      </>
  )
}

export default LightRock