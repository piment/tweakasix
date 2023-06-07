import { Bloom, DepthOfField, EffectComposer } from '@react-three/postprocessing'
import React, { useEffect, useRef } from 'react'

function PostProc({theme}) {

const effectComp = useRef()


useEffect(() => {
    if(theme === "light"){
        effectComp.current.renderer.dispose()
    }
console.log(effectComp.current)
},[])

  return (
    <>


        <EffectComposer ref={effectComp} disableNormalPass>
     {theme === "dark" &&(
<>
      <Bloom  luminanceThreshold={0.9} mipmapBlur luminanceSmoothing={0} intensity={5} />
  
        <DepthOfField target={[0, 0, 12]} focalLength={0.53} bokehScale={theme === "dark" ? 10 : 0} height={700} />
 </>   
  )}  
     </EffectComposer>

    </>
  )
}

export default PostProc