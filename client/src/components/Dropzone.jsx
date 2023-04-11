import axios from 'axios'
import React, {useCallback, useEffect} from 'react'
import { useState } from 'react'
import {useDropzone} from 'react-dropzone'


function MyDropzone({onDrop}) {

const path = 'http://localhost:3001'


  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <>
        <form encType="multipart/form-data">
    <div {...getRootProps()}>

      <input {...getInputProps()} type='file' />
      {
          isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
        }

    </div>
        </form>
        {/* <div style={{maxWidth:  '500px', maxHeight: '500px'}}>
    {allTx && (
        
            allTx.map((f) =>(
              f.map((m, key) =>(
                console.log("URL", `${path}${m.url}`),
           <div   key={key}>{m.name}
        <img style={{maxWidth:  '500px', maxHeight: 500}} src={path + m.url} key={key}></img>
        </div>
   
              )  )   ))
     
    ) }

</div> */}
</>
  )
}
export default MyDropzone