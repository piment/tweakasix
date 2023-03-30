import React from 'react'
import './Visualizer.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


function Visualizer() {
  return (
    <div className='visualizer'>
        <Canvas className='canvas' fallback={null}>
    <OrbitControls/>
<mesh>
    <boxBufferGeometry args={[2,2,2]}/>
    <meshBasicMaterial color={'#ff00ff'}/>
</mesh>
        </Canvas>
    </div>
  )
}

export default Visualizer