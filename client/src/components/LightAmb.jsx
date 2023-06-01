import React, { useContext } from 'react'
import { ThemeContext } from '../App'

function LightAmb() {


  const themeContext = useContext(ThemeContext)
  const theme = themeContext.theme

  return (
    <>
        <ambientLight intensity={0.4} />
    <directionalLight
      castShadow
      intensity={3}
      position={[0, 5, 0.5]}
      lookAt={[0, 0, 0]}
      shadow-mapSize-height={1024}
      shadow-mapSize-width={1024}
      />

      </>
  )
}

export default LightAmb