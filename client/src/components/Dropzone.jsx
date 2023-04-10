import axios from 'axios'
import React, {useCallback, useEffect} from 'react'
import { useState } from 'react'
import {useDropzone} from 'react-dropzone'


function MyDropzone() {
//   const [pic, setPic] = useState([])
const path = '../../../server/stocked'
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
    // console.log(pic);
    // axios.post("http://localhost:3001/upload", formData, {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // }); //I need to change this line
  }, [])

const [getPic, setGetPic] = useState([])

useEffect(() =>{
axios.get('http://localhost:3001/stocked').then(response =>
{
  let filesReached = []

  filesReached.push(response.data)
  console.log(filesReached)
      setGetPic(filesReached)
//       // tablo.push(response.data)
//       // return tablo
    }
    )

// .then(console.log(getPic)
// )
},[] )


// console.log(getPic)
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
        {/* <div>
    {getPic &&(
        <div style={{height : '10vh'}}>
            {getPic.map((m, key) =>{
        //    <div >{m}</div>
        <img src={path + m[4]} key={key}/>
            console.log(path + m[4])
            })}
        </div>
    )}

</div> */}
</>
  )
}
export default MyDropzone