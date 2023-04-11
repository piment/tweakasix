import axios from 'axios'
import React, {useCallback, useEffect} from 'react'
import { useState } from 'react'
import {useDropzone} from 'react-dropzone'


function MyDropzone() {

const path = 'http://localhost:3001'
const imgs = []
  const onDrop = useCallback(acceptedFiles => {
      imgs.push(acceptedFiles[0])
    //   console.log(imgs)
    const formData = new FormData();
    formData.append('file', imgs[imgs.length -1]);
    axios.post("http://localhost:3001/upload/", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
   
  }, [])

const [allTx, setAllTx] = useState([])
console.log(path)
useEffect(() =>{
axios.get('http://localhost:3001/stocked').then(response =>
{
  let filesReached = []

filesReached.push(response.data)
    setAllTx(filesReached);


    }
    )


// )
},[] )

allTx.map((f) =>{
  f.map((m, key) =>console.log(path + m.url))});

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
        <div style={{maxWidth:  '500px', maxHeight: '500px'}}>
    {allTx && (
        
            allTx.map((f) =>(
              f.map((m, key) =>(
                console.log("URL", `${path}${m.url}`),
           <div   key={key}>{m.name}
        <img style={{maxWidth:  '500px', maxHeight: 500}} src={path + m.url} key={key}></img>
        </div>
        // console.log(m.name)
              )  )   ))
     
    ) }
{/* <img src={path + allTx[0][2].url}></img> */}
</div>
</>
  )
}
export default MyDropzone