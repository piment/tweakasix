import axios from 'axios'
import React, {useCallback, useEffect} from 'react'
import { useState } from 'react'
import {useDropzone} from 'react-dropzone'
import { addColor, triggerDrop } from '../features/Colors'
import {useDispatch} from 'react-redux'
import './Tweaker/Dropzone.css'



function MyDropzone({colorList, setColorList, setDropped, dropped}) {

const path = `${import.meta.env.VITE_BACKEND_URL}`
const [files, setFiles] = useState([])
const dispatch = useDispatch()


const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

const imgs = [];

// const onDrop = useCallback((acceptedFiles) => {
//   imgs.push(acceptedFiles[0]);
//  console.log(acceptedFiles[0].path.replace(/[\s.]+/g, ''))

//   const formData = new FormData();
//   formData.append("file", imgs[imgs.length - 1]);  
  
//   axios.post(`${import.meta.env.VITE_BACKEND_URL}/upload/`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   })
//   .then((response) => {console.log(response.data);
//  setColorList({...colorList, texture_path : response.data})})
//   .then(setDropped(dropped+ 1))
//   .then(dispatch(addColor(colorList)))
//   .then(dispatch(triggerDrop(dropped)))
// //  colorList.texture_path = acceptedFiles[0]

// }, []);
  const {getRootProps, getInputProps, isDragActive} =  useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(prevFiles => [
        ...prevFiles,
        ...acceptedFiles.map(file =>Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))]);
    }
  });

const [getPic, setGetPic] = useState([])

// useEffect(() =>{
// axios.get(`${import.meta.env.VITE_BACKEND_URL}/stocked`).then(response =>
// {
//   let filesReached = []

//   filesReached.push(response.data)

//       setGetPic(filesReached)
// //       // tablo.push(response.data)
// //       // return tablo
//     }
//     )

// // .then(console.log(getPic)
// // )
// },[] )

const thumbs = files.map(file => (
  <div style={thumb} key={file.name}>
    <div style={thumbInner}>
      <img
        src={file.preview}
        style={img}
        // Revoke data uri after image is loaded
        onLoad={() => { URL.revokeObjectURL(file.preview) }}
      />
    </div>
  </div>
));


useEffect(() => {
  // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
  return () => files.forEach(file => URL.revokeObjectURL(file.preview));
}, []);



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
<aside style={thumbsContainer}>
        {thumbs}
      </aside>
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