import axios from 'axios'
import React, {useCallback, useEffect} from 'react'
import { useState } from 'react'
import {useDropzone} from 'react-dropzone'

function MyDropzone() {
  const [pic, setPic] = useState([])
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    setPic(acceptedFiles)
    const formData = new FormData();
    formData.append('file', pic[pic.length -1]);
    axios.post("http://localhost:3001/upload/", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
    // console.log(pic);
    // axios.post("http://localhost:3001/upload", formData, {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // }); //I need to change this line
  }, [])

const [getPic, setGetPic] = useState([])

useEffect(() =>{
axios.get(`http://localhost:3001/stocked`).then(response =>
{
  let filesReached = []
  filesReached.push(response.data)
      setGetPic(filesReached)
      // tablo.push(response.data)
      // return tablo
    }
    )

then(console.log(getPic))
},[] )


  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} type='file' encType="multipart/form-data"/>
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
<div style={{height : '20vh'}}>

</div>
    </div>
  )
}
export default MyDropzone