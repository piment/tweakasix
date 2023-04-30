import axios from 'axios'
import React, {useCallback, useEffect} from 'react'
import { useState } from 'react'
import {useDropzone} from 'react-dropzone'
import { addColor, triggerDrop } from '../features/Colors'
import {useDispatch} from 'react-redux'



function MyDropzone({colorList, setColorList, setDropped, dropped}) {

const path = 'http://localhost:3001'

const dispatch = useDispatch()

const imgs = [];

const onDrop = useCallback((acceptedFiles) => {
  imgs.push(acceptedFiles[0]);
 console.log(acceptedFiles[0].path.replace(/[\s.]+/g, ''))

  const formData = new FormData();
  formData.append("file", imgs[imgs.length - 1]);  
  
  axios.post("http://localhost:3001/upload/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  .then((response) => {console.log(response.data);
 setColorList({...colorList, texture_path : response.data})})
  .then(setDropped(dropped+1))
  .then(dispatch(addColor(colorList)))
  .then(dispatch(triggerDrop(dropped)))
//  colorList.texture_path = acceptedFiles[0]

}, []);


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
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <>
        <form encType="multipart/form-data">
    <div {...getRootProps()} className='dropzone-div'>

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